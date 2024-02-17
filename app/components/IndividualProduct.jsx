'use client'

import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import { FireIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"
import { addItem, decreaseItemQuantity, increaseItemQuantity } from "../redux/cartSlice"
import Button from "./Button"

export default function IndividualProduct({device, deal}) {
 const cart = useSelector(state=>state.cart)
 const cartItem = cart.find((cartItem) => cartItem.url === deal.url) 


  const dispatch = useDispatch()

  function handleAddToCart(){
   const newItem = {
    url : deal.url,
    quantity : 1,}

    dispatch(addItem(newItem))
  }

  function handleIncreaseQuantity(){
    dispatch(increaseItemQuantity(deal.url))
   }

   function handleDecreaseQuantity(){
    dispatch(decreaseItemQuantity(deal.url))
   }

    console.log(device, deal)
  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col justify-center items-center lg:items-start w-full lg:flex-row">

    <div className=" w-full  lg:w-[25%]">
        <Image className="object-cover mx-auto rounded-md w-[75%] lg:w-[100%] h-auto" src={deal?.img || device?.img} width={500} height={300} alt="product-image" placeholder="blur" blurDataURL="/jumia_img_loader.png"/>
        {/* <Image className="object-cover max-w-[200px] h-auto" src={deal.img} width={500} height={800} alt="product-image" /> */}
   
    </div>
    <div className="flex border-t border-black lg:border-none flex-col w-full justify-start items-start">
       <p className="text-left font-semibold text-xl lg:text-2xl text-wrap ml-4 mr-2">{device.name} {' '} {deal.deal.memory}</p>
    
       <p className="text-left ml-4 text-wrap mr-2">{deal.description}</p>
       <div className="w-[90%] border pb-2 overflow-hidden border-red-500 ml-4 my-4 rounded-md">
        <div className="bg-red-500 flex items-center pl-4 space-x-1 py-2 w-full">
          <FireIcon className="text-[#f68b1e] h-5" />
          <p className="capitalize text-white">best deal today</p>
        </div>

        <div className="flex items-center ml-4 mt-2 space-x-2 w-full">
        <p className="font-bold text-xl lg:text-2xl">{deal.deal.currency}{Math.ceil(deal.deal.price)}</p>
        <p className="line-through text-gray-700">{deal.deal.currency}{Math.ceil((+deal.deal.price) + (+deal.deal.discount)) }</p>
  
         <div className="w-[50px] text-[#f68b1e] text-center py-1 bg-[#e8c0a7] rounded-sm">
            -{Math.ceil((+deal.deal.discount) / ((+deal.deal.price) + (+deal.deal.discount)) * 100)}%
         </div>  
    
        </div>
       </div>

       <p className="text-left text-wrap ml-4 mr-2 text-gray-700">
        + shipping from <span className="font-bold">$2</span> to <span className="uppercase">your address</span> 
       </p>
      {
        deal.history && (
          <div className="flex flex-col ml-4 mr-2 mt-3 justify-start items-start">
          <p className="text-lg font-semibold">Previous Prices</p>
          {deal.history?.map((item) => 
            <p className="text-left" key={item.time}>
              <span className="capitalize">{item.time} :</span>
              <span className="ml-4">{item.currency}{item.price}</span>
            </p>
          )}
         </div>
        )
      }
       <div className=" mt-5 w-full  lg:w-[25%]">
        <Image className="object-cover mx-auto lg:ml-4 rounded-md w-[50%] h-auto" src={device.img} width={500} height={300} alt="product-image" placeholder="blur" blurDataURL="/jumia_img_loader.png"/>
    </div>

    {!cartItem? (<button onClick={handleAddToCart} className="mt-5 mx-auto flex text-white justify-center w-[90%] items-center lg:ml-4 px-4 py-2 rounded-md bg-[#f68b1e]">
        <ShoppingCartIcon className="h-5" />
        <span className="uppercase font-semibold">add to cart</span>
      </button>) : (
          <div className="flex w-full justify-center mt-5 items-center space-x-3">
          <Button onClick={handleDecreaseQuantity} type={'minus'} />
          <span>{cartItem.quantity}</span>
          <Button onClick={handleIncreaseQuantity} type={'add'} />
             
          </div>
      )}
      
      <div className="ml-4 mt-5">
      <p className="font-semibold text-lg lg:text-xl mb-2 uppercase">quick specs</p>
      {device.quickSpec.map((spec) => <p key={spec.name}><span className="font-semibold">{spec.name} :</span><span>{" "}{spec.value}</span></p>)}
    </div>

    </div>
    </div>

   
    {/* <div className="w-full flex justify-center pb-14 items-center space-x-3 mt-5">
    <button className="uppercase px-4 py-2 rounded-md bg-[#f68b1e]">
    <MinusIcon className="h-5"/>
      </button>

      <button className="uppercase px-4 py-2 rounded-md bg-[#f68b1e]">
        add to cart
      </button>

      <button className="uppercase px-4 py-2 rounded-md bg-[#f68b1e]">
      <PlusIcon className="h-5"/>
      </button>
    </div> */}
    </div>
  )
}
