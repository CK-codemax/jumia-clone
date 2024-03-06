'use client'

import { db } from "@/firebase";
import { collection, doc, getDocs } from "firebase/firestore";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { correctPrice, currencySymbolToWords, currencyWordToSymbols } from "../utils/currencyConverters";
import { formatAmount } from "../utils/helpers";

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)


export default function OrderSuccess() {
 

    const [order, setOrder] = useState(null)
    const { data : session } =  useSession()
    const userCurrency = useSelector(state => state.currency)


    useEffect(() => {
        async function getOrder(){
        
          const userDocRef = doc(db, 'users', `${session?.user?.email}`)
          const ordersColRef = collection(userDocRef, 'orders');
          const snapshots = await getDocs(ordersColRef)
        
          const datas = snapshots.docs.map((doc) => {
            const data = doc.data(); 
            data.id = doc.id;
            return data;
          })
        
          console.log(datas)
      
          const orders = await Promise.all(
          datas.map(async (order) => ({
            id : order.id,
            amount : order.amount,
            images : order.images,
            shipping : order.amount_shipping,
            timestamp : order.timestamp.seconds * 1000,
            items : (
              await stripe.checkout.sessions.listLineItems(order.id, {
                limit : 100,
              })
          ).data,
          }))
            )

            const order = orders.sort((prev, next) => next.timestamp - prev.timestamp)[0]?.items?.map((item, i) => {
        
              const fixedToCurrency = {
                totalAmount : correctPrice(currencyWordToSymbols(item.price.currency) ,userCurrency, (+item.amount_total / 100) ),
                unitAmount : correctPrice(currencyWordToSymbols(item.price.currency) ,userCurrency, +item.price.unit_amount / 100),
                quantity : item.quantity,
                description : item.description,
                image : orders.sort((prev, next) => next.timestamp - prev.timestamp)[0]?.images[i],
                shipping : orders.sort((prev, next) => next.timestamp - prev.timestamp)[0].shipping,
              };
            return fixedToCurrency
              })
        
            console.log(order)
            setOrder(order)
         
        }
    
        getOrder()
      }, [session, userCurrency])
    
      console.log(order)
  return (
    <div>
        <div className="flex flex-col w-full items-center space-y-1 justify-center">
            <p className="text-center">Order successful</p>
            <p className="text-center">Thanks for shopping with us. We give you the best of online retail experience.</p>
            <p className="text-center">Your order is expected to arrive soon!</p>
        </div>
        <p className="text-center my-3 font-semibold uppercase tracking-widest w-full">Order summary</p>
       <div className="flex flex-col space-y-1 w-full items-center justify-start">
          {order &&  <p className="uppercase font-bold text-[24px]">{formatAmount((order?.map((curOrder) => curOrder.totalAmount).reduce((acc, cur) => acc + cur, 0)), currencySymbolToWords(userCurrency))}</p>
         }
       <div className="grid w-full items-start grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-x-2 gap-y-4 px-5">
           {order?.map((orderNew, i) =>
            <div key={orderNew.image + i} className="flex flex-col justify-center space-y-3 items-center">
              <Image src={orderNew.image} alt="product-image" width={500} height={300} className="object-cover" placeholder="blur" blurDataURL="/jumia_img_loader.png" />
              <div className="flex flex-col items-center justify-center space-y-1">
              <p>{orderNew.description}</p>
              <p>{userCurrency}{orderNew.unitAmount} {' '} x {' '} {orderNew.quantity}</p>
              <p className="font-semibold">{userCurrency}{orderNew.totalAmount}</p>
              </div>
            </div>
           )}
        </div>
       </div>

      
    </div>
  )
}
