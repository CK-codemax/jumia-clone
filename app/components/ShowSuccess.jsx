'use client'

import { db } from "@/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";


export default function ShowSuccess() {
    // const { data : session } = useSession({
    //     required : true,
    //     onUnauthenticated(){
    //       redirect('http://localhost:3000/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F')
    //     }
    //   })
    // const [posts, setPosts] = useState([])
  
   

    // useEffect(() => {
    //   const postRef = collection(db, 'users')

    //  const unsubscribe = onSnapshot(postRef, (snapshots) => {
    //       const newSnapshot = snapshots.docs.map((doc) => {
    //          const data = doc.data();
    //          data.id = doc.id
             
    //          return data;
    //         }).map((doc) => {
    //          const data = {
    //            ...doc, timestamp : doc.timestamp?.seconds * 1000,
    //          }
    //          return data
    //        }).sort((prev, next) => next.timestamp - prev.timestamp)
         
    //        setPosts(newSnapshot)

        
    //       })
  
    //   // Clean up the subscription on component unmount
    //   return () => {
    //     unsubscribe();
    //   };
    // }, []);
 
  return (
    <div>ShowSuccess</div>
  )
}
