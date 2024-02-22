'use client'
import { useDispatch, useSelector } from "react-redux";
import IndividualCart from "./IndividualCart";
import { clearCart } from "../redux/cartSlice";
import { redirect } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import { useSession } from "next-auth/react";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import ShowSuccess from "./OrderList";
import toast from "react-hot-toast";
import { correctPrice, currencySymbolToWords, getHistory } from "../utils/currencyConverters";
import { formatAmount } from "../utils/helpers";



const asyncStripe = loadStripe('pk_test_51OemV9L6zEQMXk8IKB0PhZU0XR9uyNgzVntexCvIPKDAf2sSEYd6PTrZSkrVVn0X3L6yPNWWG9R0WV5tqZtl8KIA001sA1OQ2G')
const axios = require('axios');

export default function CartList({list}) {
 
    const { data : session } = useSession()

    if(!session)redirect(`/api/auth/signin/google`)

    const storeCart = useSelector(state => state.cart)
    //because we are using combined reducers
    const cart = storeCart.cart
    const userCurrency = useSelector(state => state.currency)

    //Without the state persist, this method is correct
    //const cart = useSelector(state => state.cart.cart)
    const cartToUse = cart.map((fullDeal) => {
   
  
      const fixedToCurrency = {
        ...fullDeal,
        history : getHistory(fullDeal.history, userCurrency),
        deal: {
          ...fullDeal.deal,
          currency: userCurrency,
          discount: correctPrice(fullDeal.deal.currency, userCurrency, fullDeal.deal.discount),
          price : correctPrice(fullDeal.deal.currency, userCurrency, fullDeal.deal.price),
        }
      };
    return fixedToCurrency
    })
     

    const totalPrice = cartToUse.map((cartItem) => cartItem.deal.price * cartItem.quantity).reduce((acc, cur) => acc + cur, 0)
    
    const dispatch = useDispatch()

    function handleClearCart(){
      dispatch(clearCart())
      toast.success('Cart cleared successful');
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
                cartItems : cartToUse, email : session.user.email, currency : currencySymbolToWords(userCurrency),
            })
        })
       
   
      
        const result = await res.json()
        console.log(result)
      
       
     
     

      const resultNext = await stripe.redirectToCheckout({
        sessionId: result.session.id
      })
      
    }
   console.log(cart, cartToUse)
  return (
  <div className="flex flex-col lg:flex-row lg:px-10 py-2 lg:py-6 bg-gray-300 w-full lg:space-x-3 items-start">
      <div className="flex lg:px-2 bg-white lg:rounded-md flex-col w-full py-3">
    <div className="flex items-center pb-4 border-b justify-between">
    <p className="font-semibold py-2 ml-4 text-lg">Cart ({cartToUse.length})</p>
       {cartToUse.length ? (
         <button onClick={handleClearCart} className=" text-white mr-4 lg:mr-0 py-2 text-center px-3 rounded-md bg-[#f68b1e]">
         <span className="uppercase font-semibold">clear cart</span>
       </button>
       ) : null }
    </div>
        {cartToUse.map((item) => <IndividualCart key={item.url} item={item} list={list}/>)}
    </div>

   {cartToUse.length > 0 ? (
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
            <p className="font-semibold">{formatAmount(totalPrice, currencySymbolToWords(userCurrency))}</p>
        </div>
        <p className="text-xs text-gray-600">Delivery fees not included yet.</p>
       </div>

    {cartToUse.length > 0 ? (
      
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
