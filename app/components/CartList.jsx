'use client'
import { useDispatch, useSelector } from "react-redux";
import IndividualCart from "./IndividualCart";
import { clearCart } from "../redux/cartSlice";
import { redirect, useRouter } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import { useSession } from "next-auth/react";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import ShowSuccess from "./OrderList";



const asyncStripe = loadStripe('pk_test_51OemV9L6zEQMXk8IKB0PhZU0XR9uyNgzVntexCvIPKDAf2sSEYd6PTrZSkrVVn0X3L6yPNWWG9R0WV5tqZtl8KIA001sA1OQ2G')
const axios = require('axios');

export default function CartList({list}) {
 
    const router = useRouter()
    const { data : session } = useSession({
      required : true,
      onUnauthenticated(){
        redirect('http://localhost:3000/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F')
      }
    })


    const cart = useSelector(state=>state.cart)
    const cartItems = cart.map((cartItem) => ({...list.find((item) => item.url ===  cartItem.url), quantity : cartItem.quantity,}))
    const totalPrice = cart.map((cartItem) => +(list.find((item) => item.url === cartItem.url)?.deal.price * cartItem.quantity)).reduce((acc, cur) => acc + cur, 0)
    
    const dispatch = useDispatch()

    function handleClearCart(){
      dispatch(clearCart())
    }
    
    async function createCheckoutSession(){
      
        const stripe = await asyncStripe;


        // Send data to API route 
        const res = await fetch('http://localhost:3000/api/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cartItems, email : session.user.email,
            })
        })
       
   
      
        const result = await res.json()
        console.log(result, result.session.id)


     

      const resultNext = await stripe.redirectToCheckout({
        sessionId: result.session.id
      })

    
      
    }
 

// async function getUsers(){
//   const userDocRef = doc(db, 'users', `${session?.user?.email}`)
//   const ordersColRef = collection(userDocRef, 'orders');
//   const snapshots = await getDocs(ordersColRef)

//   const datas = snapshots.docs.map((doc) => {
//     const data = doc.data(); // Correct usage
//     data.id = doc.id;
//     return data;
//   })

//   console.log(datas)
 
// }

// getUsers()
 
  return (
  <div className="flex flex-col lg:flex-row lg:px-10 py-2 lg:py-6 bg-gray-300 w-full lg:space-x-3 items-start">
      <div className="flex lg:px-2 bg-white lg:rounded-md flex-col w-full py-3">
    <div className="flex items-center pb-4 border-b justify-between">
    <p className="font-semibold py-2 ml-4 text-lg">Cart ({cart.length})</p>
       {cart.length ? (
         <button onClick={handleClearCart} className=" text-white mr-4 lg:mr-0 py-2 text-center px-3 rounded-md bg-[#f68b1e]">
         <span className="uppercase font-semibold">clear cart</span>
       </button>
       ) : null }
    </div>
        {cartItems.map((item) => <IndividualCart key={item.url} item={item} />)}
    </div>

   {cart.length > 0 ? (
     <div className="flex mt-3 w-full lg:hidden items-center space-x-1">
     <button  role="link" onClick={createCheckoutSession}  className="mt-5 mx-auto text-white py-2 text-center w-[90%] rounded-md bg-[#f68b1e]">
         <span className="uppercase font-semibold">checkout</span>
       </button>
     </div>
   ) : null}

 <div className="hidden lg:flex flex-col space-y-3 min-w-[25%]">
 <div className="flex bg-white rounded-md py-2 px-2 w-full flex-col items-start space-y-2">
       <p className="uppercase w-full pb-2 border-b text-nowrap">cart summary</p>
       <div className="flex border-b py-2 space-y-3 w-full flex-col items-start">
        <div className="flex w-full justify-between items-start">
            <p className="capitalize font-semibold">subtotal</p>
            <p className="font-semibold">{Math.ceil(totalPrice)}</p>
        </div>
        <p className="text-xs text-gray-600">Delivery fees not included yet.</p>
       </div>

    {cart.length > 0 ? (
      
      <button role="link" onClick={createCheckoutSession} className="mt-5 mx-auto text-white py-2 text-center w-[90%] rounded-md bg-[#f68b1e]">
      <span className="uppercase font-semibold">checkout</span>
    </button>
    ) : null}

    </div>

    <div className="w-full flex rounded-md px-2 py-2 flex-col items-start space-y-2 bg-white">
        <p className="font-semibold">Returns are easy</p>
        <p className="text-xs text-gray-600">Free return within 7 days for ALL eligible items Details</p>
    </div>
 </div>

  </div>
  )
}
