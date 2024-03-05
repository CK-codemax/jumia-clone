'use client'

import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import { FireIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"
import { addItem, decreaseItemQuantity, increaseItemQuantity } from "../redux/cartSlice"
import Button from "./Button"
import toast from "react-hot-toast"
import { correctPrice, correctShipping, getHistory } from "../utils/currencyConverters"
import { redirect, useRouter } from "next/navigation"
import ProductThumbnail from "./ProductThumbnail"

export default function IndividualProduct({device, deals, id}) {
  const router = useRouter()
  const userCurrency = useSelector(state => state.currency)
  const deal = deals.find((dealNew) => dealNew.id === id)

  const productsToUse = deals?.map((fullDeal) => {
   
  
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

  const storeCart = useSelector(state => state.cart)
  //because we are using combined reducers
  const cart = storeCart.cart
  //Without the state persist, this method is correct
  //const cart = useSelector(state => state.cart.cart)
  const cartItemToUse = cart?.find((cartItemTo) => cartItemTo.url === deal?.url) 

  if(!deal && !cartItemToUse)redirect('/product-unavailable')

 const cartItem = cartItemToUse && {
  ...cartItemToUse,
  history : getHistory(cartItemToUse.history, userCurrency),
  deal: {
    ...cartItemToUse.deal,
    currency: userCurrency,
    discount: correctPrice(cartItemToUse.deal.currency, userCurrency, cartItemToUse.deal.discount),
    price : correctPrice(cartItemToUse.deal.currency, userCurrency, cartItemToUse.deal.price),
  },
};

const itemStillAvailable = cartItem ? Boolean(deals.filter(deal => deal.url === cartItem.url).length) : true

 const newDeal  = deal && {
    ...deal,
    history : getHistory(deal?.history, userCurrency),
    deal: {
      ...deal.deal,
      currency: userCurrency,
      discount: correctPrice(deal.deal.currency, userCurrency, deal.deal.discount),
      price : correctPrice(deal.deal.currency, userCurrency, deal.deal.price),
    },
    ...device,
    quantity : 1,
    img : deal.img,
    deviceImg : device.img,
  };


  const dispatch = useDispatch()

  function handleAddToCart(){
    dispatch(addItem(newDeal))
    toast.success('Product added to cart!');
  }

  function handleIncreaseQuantity(){
    if(cartItem && !itemStillAvailable){
      toast.error('Product no longer available. Please checkout');
     router.push('/checkout')
    }else{
    
    dispatch(increaseItemQuantity(deal.url))
    toast.success(`Product increased to ${cartItem?.quantity + 1} in your cart!`);
    }
   }

   function handleDecreaseQuantity(){
    if(cartItem && !itemStillAvailable){
      toast.error('Product no longer available. Please checkout');
     router.push('/checkout')
    }else{
    dispatch(decreaseItemQuantity(deal.url))
  cartItem?.quantity === 1 ? toast.error('Product removed from cart!') : toast.error(`Product dereased to ${cartItem?.quantity - 1} in your cart!`);
    } 
}

    console.log(deals, productsToUse)
 
  return (
   <>
   
    {cartItem ? (
       <div className="w-full">
       <div className="flex flex-col justify-center items-center lg:items-start w-full lg:flex-row">
   
     <div className=" w-full  lg:w-[25%]">
         <Image className="object-cover mx-auto rounded-md w-[75%] lg:w-[100%] h-auto" src={cartItem?.img || cartItem?.deviceImg} width={500} height={300} alt="product-image" placeholder="blur" blurDataURL="/jumia_img_loader.png"/>
     </div>
     <div className="flex border-t border-black lg:border-none flex-col w-full justify-start items-start">
        <p className="text-left font-semibold text-xl lg:text-2xl text-wrap ml-4 mr-2">{cartItem?.name} {' '} {cartItem?.deal.memory}</p>
     
        <p className="text-left ml-4 text-wrap mr-2">{cartItem?.description}</p>
        <div className="w-[90%] border pb-2 overflow-hidden border-red-500 ml-4 my-4 rounded-md">
         <div className="bg-red-500 flex items-center pl-4 space-x-1 py-2 w-full">
           <FireIcon className="text-[#f68b1e] h-5" />
           <p className="capitalize text-white">best deal today</p>
         </div>
   
         <div className="flex items-center ml-4 mt-2 space-x-2 w-full">
         <p className="font-bold text-xl lg:text-2xl">{cartItem?.deal.currency}{Math.ceil(cartItem?.deal.price)}</p>
         <p className="line-through text-gray-700">{cartItem?.deal.currency}{Math.ceil((+cartItem?.deal.price) + (+cartItem?.deal.discount)) }</p>
   
          <div className="w-[50px] text-[#f68b1e] text-center py-1 bg-[#e8c0a7] rounded-sm">
             -{Math.ceil((+cartItem?.deal.discount) / ((+cartItem?.deal.price) + (+cartItem?.deal.discount)) * 100)}%
          </div>  
     
         </div>
        </div>
   
        <p className="text-left text-wrap ml-4 mr-2 text-gray-700">
         + shipping from <span className="font-bold">{userCurrency}{correctShipping('$' , userCurrency, 3)}</span> to <span className="uppercase">your address</span> 
        </p>
       {
         cartItem?.history && (
           <div className="flex flex-col ml-4 mr-2 mt-3 justify-start items-start">
           <p className="text-lg font-semibold">Previous Prices</p>
           {cartItem?.history?.map((item) => 
             <p className="text-left" key={item.time}>
               <span className="capitalize">{item.time} :</span>
               <span className="ml-4">{item.currency}{item.price}</span>
             </p>
           )}
          </div>
         )
       }
        <div className=" mt-5 w-full  lg:w-[25%]">
         <Image className="object-cover mx-auto lg:ml-4 rounded-md w-[50%] h-auto" src={cartItem.deviceImg} width={500} height={300} alt="product-image" placeholder="blur" blurDataURL="/jumia_img_loader.png"/>
     </div>
   
     {!cartItem? (<button onClick={handleAddToCart} className='mt-5 mx-auto flex text-white justify-center w-[90%] items-center lg:ml-4 px-4 py-2 rounded-md bg-[#f68b1e]'>
         <ShoppingCartIcon className="h-5" />
         <span className="uppercase font-semibold">{itemStillAvailable ? 'add to cart' : 'item no longer available'}</span>
       </button>) : (
           <div className="flex w-full justify-center mt-5 items-center space-x-3">
           <Button available={itemStillAvailable} onClick={handleDecreaseQuantity} type={'minus'} />
           <span>{cartItem.quantity}</span>
           <Button available={itemStillAvailable} onClick={handleIncreaseQuantity} type={'add'} />
              
           </div>
       )}
       
       <div className="ml-4 mt-5">
       <p className="font-semibold text-lg lg:text-xl mb-2 uppercase">quick specs</p>
       {cartItem.quickSpec.map((spec) => <p key={spec.name}><span className="font-semibold">{spec.name} :</span><span>{" "}{spec.value}</span></p>)}
     </div>
   
     </div>
     </div>
     </div>
    ) : (
       <div className="w-full">
      <div className="flex flex-col justify-center items-center lg:items-start w-full lg:flex-row">

    <div className=" w-full  lg:w-[25%]">
        <Image className="object-cover mx-auto rounded-md w-[75%] lg:w-[100%] h-auto" src={newDeal?.img || newDeal?.deviceImg} width={500} height={300} alt="product-image" placeholder="blur" blurDataURL="/jumia_img_loader.png"/>
       
    </div>
    <div className="flex border-t border-black lg:border-none flex-col w-full justify-start items-start">
       <p className="text-left font-semibold text-xl lg:text-2xl text-wrap ml-4 mr-2">{newDeal?.name} {' '} {newDeal?.deal.memory}</p>
    
       <p className="text-left ml-4 text-wrap mr-2">{newDeal?.description}</p>
       <div className="w-[90%] border pb-2 overflow-hidden border-red-500 ml-4 my-4 rounded-md">
        <div className="bg-red-500 flex items-center pl-4 space-x-1 py-2 w-full">
          <FireIcon className="text-[#f68b1e] h-5" />
          <p className="capitalize text-white">best deal today</p>
        </div>

        <div className="flex items-center ml-4 mt-2 space-x-2 w-full">
        <p className="font-bold text-xl lg:text-2xl">{newDeal?.deal.currency}{Math.ceil(newDeal?.deal.price)}</p>
        <p className="line-through text-gray-700">{newDeal?.deal.currency}{Math.ceil((+newDeal?.deal.price) + (+newDeal?.deal.discount)) }</p>
  
         <div className="w-[50px] text-[#f68b1e] text-center py-1 bg-[#e8c0a7] rounded-sm">
            -{Math.ceil((+newDeal?.deal.discount) / ((+newDeal?.deal.price) + (+newDeal?.deal.discount)) * 100)}%
         </div>  
    
        </div>
       </div>

       <p className="text-left text-wrap ml-4 mr-2 text-gray-700">
        + shipping from <span className="font-bold">{userCurrency}{correctShipping('$', userCurrency, 3)}</span> to <span className="uppercase">your address</span> 
       </p>
      {
        newDeal?.history && (
          <div className="flex flex-col ml-4 mr-2 mt-3 justify-start items-start">
          <p className="text-lg font-semibold">Previous Prices</p>
          {newDeal?.history?.map((item) => 
            <p className="text-left" key={item.time}>
              <span className="capitalize">{item.time} :</span>
              <span className="ml-4">{item.currency}{item.price}</span>
            </p>
          )}
         </div>
        )
      }
       <div className=" mt-5 w-full  lg:w-[25%]">
        <Image className="object-cover mx-auto lg:ml-4 rounded-md w-[50%] h-auto" src={newDeal?.deviceImg} width={500} height={300} alt="product-image" placeholder="blur" blurDataURL="/jumia_img_loader.png"/>
    </div>

    {!cartItem? (<button onClick={handleAddToCart} className="mt-5 mx-auto flex text-white justify-center w-[90%] items-center lg:ml-4 px-4 py-2 rounded-md bg-[#f68b1e]">
        <ShoppingCartIcon className="h-5" />
        <span className="uppercase font-semibold">add to cart</span>
      </button>) : (
          <div className="flex w-full justify-center mt-5 items-center space-x-3">
          <Button available={itemStillAvailable} onClick={handleDecreaseQuantity} type={'minus'} />
          <span>{cartItem.quantity}</span>
          <Button available={itemStillAvailable} onClick={handleIncreaseQuantity} type={'add'} />
             
          </div>
      )}
      
      <div className="ml-4 mt-5">
      <p className="font-semibold text-lg lg:text-xl mb-2 uppercase">quick specs</p>
      {newDeal?.quickSpec.map((spec) => <p key={spec.name}><span className="font-semibold">{spec.name} :</span><span>{" "}{spec.value}</span></p>)}
    </div>

    </div>
    </div>
    </div> 
    )}
    
    
    <p className="font-semibold mt-5 ml-4 lg:ml-[21%] text-lg lg:text-xl mb-4 uppercase">more products</p>
      <div className=" flex gap-x-2.5 max-w-6xl mx-auto px-5 py-4 overflow-x-scroll scrollbar-hide ">
       {productsToUse.slice(0,10).map((product, i) => <ProductThumbnail key={product.id + i}  product={product} />)}
      </div>
   
   </>
  )
}
