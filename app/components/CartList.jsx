'use client'
import { useDispatch, useSelector } from "react-redux";
import IndividualCart from "./IndividualCart";
import { clearCart } from "../redux/cartSlice";
import { loadStripe } from "@stripe/stripe-js";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { correctPrice, currencySymbolToWords, getHistory } from "../utils/currencyConverters";
import { formatAmount } from "../utils/helpers";
import Link from "next/link";
import { v4 } from "uuid";




const asyncStripe = loadStripe('pk_test_51OemV9L6zEQMXk8IKB0PhZU0XR9uyNgzVntexCvIPKDAf2sSEYd6PTrZSkrVVn0X3L6yPNWWG9R0WV5tqZtl8KIA001sA1OQ2G')

export default function CartList({list}) {
 
    const { data : session } = useSession()

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
        const res = await fetch(`/api/create-checkout-session`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cartItems : cartToUse, email : session.user.email, currency : currencySymbolToWords(userCurrency), uniqueId : `${v4()}${new Date().toISOString()}`,
            })
        })
       
   
      
        const result = await res.json()
        console.log(result)
      
       
     
     

      const resultNext = await stripe.redirectToCheckout({
        sessionId: result.session.id
      })
      
    }
   console.log(cart, cartToUse)
   //if(!session)redirect('/SignIn')

   if(cart.length < 1)return (
    <div className="flex items-center flex-col p-5 justify-center space-y-3">
      <p>You do not have any items in your cart right now!</p>
      <Link className="hover:text-[#f68b1e]" href={'/'}>Please proceed to shopping page</Link>
    </div>
  )

  
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center px-4">
          <p className="text-center">You will be redirected to a stripe checkout page from here.</p>
          <p className="text-center">Note that your card number is <span className="font-semibold text-lg">4242 4242 4242 4242</span></p>
          <p className="text-center">For expiry date, <span className="font-semibold text-lg">enter any date in the future</span> and your <span className="font-semibold text-lg">CVV is any 3 numbers</span>!</p>
          <p className="text-center">Have a nice checkout experience!</p>
        </div>
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

  
        <div className="flex py-2 lg:hidden w-full flex-col items-center">
        <div className="flex w-full justify-center space-x-4 items-start">
            <p className="capitalize font-semibold">subtotal{' '} :</p>
            <p className="font-semibold">{formatAmount(totalPrice, currencySymbolToWords(userCurrency))}</p>
        </div>
        <p className="text-xs text-center text-gray-600">Delivery fees not included yet.</p>
       </div>

   {cartToUse.length > 0 ? (
     <div className="flex w-full lg:hidden items-center space-x-1">
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
  </>
  )
}
