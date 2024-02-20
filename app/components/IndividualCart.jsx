'use client'

import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { decreaseItemQuantity, deleteItem, increaseItemQuantity } from "../redux/cartSlice";
import toast from "react-hot-toast";

export default function IndividualCart({item, list}) {
  const storeCart = useSelector(state => state.cart)
  //because we are using combined reducers
  const cart = storeCart.cart
  //Without the state persist, this method is correct
  //const cart = useSelector(state => state.cart.cart)

  const itemStillAvailable = Boolean(list.filter(deal => deal.url === item.url).length);

  const dispatch = useDispatch()

  function handleDeleteCart(){
    if(!itemStillAvailable){
      toast.error('Product no longer available. Please checkout');
    }else{
   dispatch(deleteItem(item.url))
   toast.error('Product deleted from cart!') 
    }
  }

  function handleIncreaseQuantity(){
    if(!itemStillAvailable){
      toast.error('Product no longer available. Please checkout');
    }else{
    dispatch(increaseItemQuantity(item.url))
    toast.success(`Product increased to ${item?.quantity + 1} in your cart!`);
    }
   }

   function handleDecreaseQuantity(){
    if(!itemStillAvailable){
      toast.error('Product no longer available. Please checkout');
    }else{
    dispatch(decreaseItemQuantity(item.url))
    item?.quantity === 1 ? toast.error('Product removed from cart!') : toast.error(`Product dereased to ${item?.quantity - 1} in your cart!`);
    }
   }

   console.log(list, item, itemStillAvailable)
  return (
    <div className="w-full px-2 lg:px-4 py-2 border-b flex flex-col" >
        
  <div className="flex w-full items-start space-x-1">
  <div className=" w-full  lg:w-[25%]">
        <Image className="object-cover mx-auto rounded-md w-[75%] lg:w-[100%] h-auto" src={item.img} width={500} height={300} alt="product-image" />
      
    </div>

     <div className="w-full flex-grow flex-shrink flex flex-col">
    <Link href={`/individual-product/${item.id}`} className="text-left hover:text-[#f68b1e] text-wrap lg:ml-4">{item.name} {' '} {item.deal.memory}</Link>
    <p className="text-sm text-left lg:ml-4 text-gray-700">In Stock</p>

    <div className="flex lg:hidden flex-col lg:ml-4 items-start w-full">
        <p className="text-lg font-semibold lg:text-xl">{item.deal.currency}{Math.ceil(item.deal.price)}</p>
      <div className="flex items-center space-x-3">
      <p className="line-through text-gray-700">{item.deal.currency}{Math.ceil((+item.deal.price) + (+item.deal.discount)) }</p>
  
  <div className="w-[50px] text-[#f68b1e] text-center py-1 bg-[#e8c0a7] rounded-sm">
     -{Math.ceil((+item.deal.discount) / ((+item.deal.price) + (+item.deal.discount)) * 100)}%
  </div>  
      </div>
      
  
        </div>
    </div>



    <div className="hidden lg:flex flex-col items-end ml-4 mt-2 w-full">
        <p className="font-bold text-xl lg:text-2xl">{item.deal.currency}{Math.ceil(item.deal.price)}</p>
      <div className="flex items-center space-x-3">
      <p className="line-through text-gray-700">{item.deal.currency}{Math.ceil((+item.deal.price) + (+item.deal.discount)) }</p>
  
  <div className="w-[50px] text-[#f68b1e] text-center py-1 bg-[#e8c0a7] rounded-sm">
     -{Math.ceil((+item.deal.discount) / ((+item.deal.price) + (+item.deal.discount)) * 100)}%
  </div>  
  </div>
  <p className="mt-2 text-gray-700">{item.deal.currency}{Math.ceil(+item.deal.price * +item.quantity)}</p>
    
  </div>


  </div>
  <div className="flex items-center p-2 w-full justify-between">
    <div className="flex items-center space-x-3 text-[#f68b1e]">
        <Button available={itemStillAvailable} onClick={handleDeleteCart} type={'remove'} />
      
    </div>

     <div className="flex items-center space-x-3">
     <Button available={itemStillAvailable} onClick={handleDecreaseQuantity} type={'minus'} />
     <span>{item.quantity}</span>
     <Button available={itemStillAvailable} onClick={handleIncreaseQuantity} type={'add'} />
        
     </div>
  </div>
    </div>
  )
}
