'use client'

import { db } from "@/firebase";
import { collection, doc, getDocs } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Order from "./Order";
import { redirect } from "next/navigation";

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)



export default function OrderList() {
  const [orders, setOrders] = useState([])
  // const { data : session } =  useSession({
  //   required : true,
  //   onUnauthenticated(){
  //     redirect('/api/auth/signin/google')
  //   }
  // })

  const { data : session } =  useSession()
  if(!session)redirect(`/api/auth/signin/google`)


  useEffect(() => {
    async function getUsers(){
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
        console.log(orders)
        setOrders(orders)
     
    }

    getUsers()
  }, [session])

  console.log(orders)
 
   return(<div className="max-w-6xl mx-auto">
    <p>{orders.length > 1 ? `${orders.length} orders` : `${orders.length} order`}</p>
    <div className="flex flex-col space-y-6 w-full">
    {orders?.map(({id, shipping, timestamp, items, images, amount}) => <Order amount={amount} images={images} items={items} timestamp={timestamp} id={id} shipping={shipping} key={id} />)}
 
    </div>
   </div>)
}
