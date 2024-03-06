'use client'

import { db } from "@/firebase";
import { collection, doc, getDocs } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Order from "./Order";
import Link from "next/link";

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)



export default function OrderList() {
  const [orders, setOrders] = useState([])
 

  const { data : session } =  useSession()
 

  useEffect(() => {
    async function getUsers(){
      const userDocRef = doc(db, 'users', `${session?.user?.email}`)
      const ordersColRef = collection(userDocRef, 'orders');
      const snapshots = await getDocs(ordersColRef)
    
      const datas = snapshots.docs.map((doc) => {
        const data = doc.data(); 
        data.id = doc.id;
        return data;
      }).sort((prev, next) => next.timestamp - prev.timestamp)
    
      console.log(datas)
  
      const orders = await Promise.all(
      datas.map(async (order) => ({
        id : order.id,
        amount : order.amount,
        images : order.images,
        shipping : order.amount_shipping,
        currency : order.currency,
        timestamp : order.timestamp.seconds * 1000,
        items : (
          await stripe.checkout.sessions.listLineItems(order.id, {
            limit : 100,
          })
      ).data,
      }))
        )
        console.log(orders)
        setOrders(orders)
     
    }

    getUsers()
  }, [session])

  console.log(orders)

  // if(!session)redirect('/SignIn')

  if(orders.length < 1)return (
    <div className="flex items-center flex-col p-5 justify-center space-y-3">
      <p>You have not ordered any product!</p>
      <Link className="hover:text-[#f68b1e]" href={'/'}>Please proceed to shopping page</Link>
    </div>
  )
 
   return(<div className="max-w-6xl mx-auto">
    <p className="font-semibold text-center uppercase tracking-widest">{orders.length > 1 ? `${orders.length} Orders` : `${orders.length} Order`}</p>
    <div className="flex flex-col space-y-6 w-full">
    {orders?.map(({id, shipping, timestamp, items, images, amount, currency}) => <Order currency={currency} amount={amount} images={images} items={items} timestamp={timestamp} id={id} shipping={shipping} key={id} />)}
 
    </div>
   </div>)
}
