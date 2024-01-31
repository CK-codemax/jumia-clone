'use client'

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"



export default function Buy() {
    const { data : session } = useSession({
        required : true,
        onUnauthenticated(){
          redirect('http://localhost:3000/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F/buy')
        }
      })
  return (
    <div>welcome to our buy page. continue to payment</div>
  )
}
