'use client'

import { db } from "@/firebase";
import { collection, doc, getDocs } from "firebase/firestore";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { formatAmount } from "../utils/helpers";

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)


export default function OrderSuccess({deals}) {
 

    const [order, setOrder] = useState(null)
    const { data : session } =  useSession()

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

            const order = orders.sort((prev, next) => next.timestamp - prev.timestamp)[0]
            console.log(order)
            setOrder(order)
         
        }
    
        getOrder()
      }, [session])
    
      console.log(order)
      const items = deals?.filter((deal) => order?.images?.find((image) => image === deal.img))

      //correct this with discount later

      const realItems = items?.filter((item) => order?.items?.find((orderItem) => orderItem.description === item.name && item.deal.price === (orderItem.amount_total / (100 * orderItem.quantity))))
      console.log(items, realItems)
  return (
    <div>
        <div className="flex flex-col w-full items-center space-y-1 justify-start">
            <p>Order successful</p>
            <p>Thanks for shopping with us. We give you the best of online retail experience.</p>
            <p>Your order is expected to arrived on 20th of February, 2024.</p>
        </div>
        <p className="text-center my-3 w-full">Order summary</p>
       <div className="flex flex-col space-y-1 w-full items-center justify-start">
        <p>{order?.items.length > 1 ? `${order?.items.length} items` : `${order?.items.length} item`}</p>
        <p className="uppercase">{formatAmount(order?.amount)} total {order?.amount_shipping ? ` + ${formatAmount(order?.amount_shipping)} shipping` : null}</p>
       <div className="grid w-full grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-x-2 gap-y-4 px-5">
           {order?.images?.map((image) => <Image src={image} alt="product-image" width={500} height={300} className="object-cover" placeholder="blur" blurDataURL="/jumia_img_loader.png" />)}
        </div>
       </div>

      
    </div>
  )
}
