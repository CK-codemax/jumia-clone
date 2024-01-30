'use client'
import { useSelector } from "react-redux";
import IndividualCart from "./IndividualCart";

export default function CartList({list}) {
    const username = useSelector(state=>state.user.username)
    const cartItems = username.map((cart) => list.find((item) => item.id ===  cart))

 console.log(username, cartItems)
 
  return (
  <div className="flex flex-col lg:flex-row lg:px-10 py-2 lg:py-6 bg-gray-300 w-full lg:space-x-3 items-start">
      <div className="flex lg:px-2 bg-white lg:rounded-md flex-col w-full py-3">
        <p className="font-semibold py-2 pb-4 ml-4 text-lg border-b">Cart 3</p>
        {cartItems.map((item, i) => <IndividualCart key={item.id + i} item={item} />)}
    </div>

    <div className="flex mt-3 w-full lg:hidden items-center space-x-1">
    <button className="mt-5 mx-auto text-white py-2 text-center w-[90%] rounded-md bg-[#f68b1e]">
        <span className="uppercase font-semibold">checkout</span>
      </button>
    </div>

 <div className="hidden lg:flex flex-col space-y-3 min-w-[25%]">
 <div className="flex bg-white rounded-md py-2 px-2 w-full flex-col items-start space-y-2">
       <p className="uppercase w-full pb-2 border-b text-nowrap">cart summary</p>
       <div className="flex border-b py-2 space-y-3 w-full flex-col items-start">
        <div className="flex w-full justify-between items-start">
            <p className="capitalize font-semibold">subtotal</p>
            <p className="font-semibold">5,000</p>
        </div>
        <p className="text-xs text-gray-600">Delivery fees not included yet.</p>
       </div>

       <button className="mt-5 mx-auto text-white py-2 text-center w-[90%] rounded-md bg-[#f68b1e]">
        <span className="uppercase font-semibold">checkout</span>
      </button>
    </div>

    <div className="w-full flex rounded-md px-2 py-2 flex-col items-start space-y-2 bg-white">
        <p className="font-semibold">Returns are easy</p>
        <p className="text-xs text-gray-600">Free return within 7 days for ALL eligible items Details</p>
    </div>
 </div>
  </div>
  )
}
