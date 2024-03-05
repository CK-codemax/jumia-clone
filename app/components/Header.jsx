'use client'
import { redirect } from 'next/navigation';
import {signIn, signOut, useSession} from 'next-auth/react'
import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import {Bars3Icon, BriefcaseIcon, BuildingOffice2Icon, ChevronDownIcon, PhoneIcon, QuestionMarkCircleIcon, ShoppingCartIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from "next/link";
import SlideShow from "./SlideShow";
import NavBar from "./NavBar";
import InputBox from "./InputBox";
import { useState } from "react";
import Categories from "./Categories";
import { useDispatch, useSelector } from 'react-redux';
import MenuModal from './MenuModal';
import toast from 'react-hot-toast';
import { changeCurrency } from '../redux/currencySlice';


export default function Header() {
  const { data : session } = useSession()
  const storeCart = useSelector(state => state.cart)
  //because we are using combined reducers
  const cart = storeCart.cart
  const userCurrency = useSelector(state => state.currency)
  //Without the state persist, this method is correct
  //const cart = useSelector(state => state.cart.cart)

 //console.log(cart)

 const dispatch = useDispatch()

  function handleChangeCurrency(cur){
   
    dispatch(changeCurrency(cur))
    toast.success(`Currency changed to ${cur}`);
  }

  const options = [
    {
      value: '$',
      label: 'USD'
    },
    {
      value: '€',
      label: 'EUR'
    },
    {
      value: '£',
      label: 'GBP'
    },
  ];
  return (
    <header className='sticky flex flex-col mb-4'>
        {/*Top*/}
        <div className="hidden lg:flex w-full">
            <div className="w-full bg-[var(--hover-bg)] px-16">
                <Image className="w-full object-cover h-auto cursor-pointer" src='https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/Brand-days/January/xiaomi/top-strip.png' alt="advert" width={1080} height={720} />
            </div>
        </div>

        <div className="w-full relative">

       <div className="w-full bg-gray-200 h-6" />

        <div className="flex justify-between space-x-3 px-4 lg:px-12 items-center bg-white">
              
              <div className="flex items-center space-x-3 mr-20">
              
           <MenuModal>
             <MenuModal.Open />
             <MenuModal.Window />
           </MenuModal>
         <Link href={'/'} className="hover:bg-[#f68b1e] sm:hover:bg-transparent">
         <HeaderIcon src={'/jumia-logo.png'} />
        </Link>
        
             </div>
 
              {/*Input*/}
              
              <div className="hidden lg:inline-flex w-full flex-grow">
              <InputBox />
              </div>
 
 
              <div className="flex space-x-3">
              
             <select className=' outline-none' onChange={(e) =>  handleChangeCurrency(e.target.value)} name="cur" id="cur">
             <option disabled selected>Currency</option>
                <option value="$">USD</option>
                 <option value="€">EUR</option>
                  <option value="£">GBP</option>
                </select>

               
                <Link href={'/orders'} className="flex  lg:hover:text-[#f68b1e] items-center space-x-2">
                 <HeaderIcon Icon={UserIcon} title={'orders'} />
                 <ChevronDownIcon className="hidden lg:inline-flex h-5"/>
               </Link>


               <Link href={'/checkout'}  className="flex group relative lg:hover:text-[#f68b1e]  items-center space-x-2">
                 <HeaderIcon Icon={ShoppingCartIcon} title={'cart'} />
                 <span className='bg-[#f68b1e] group-hover:text-white absolute w-[20px] top-0 left-2 h-[20px] text-xs rounded-full flex justify-center items-center'>{cart.length}</span>
               </Link>
 
 
              </div>
            </div>
 
          <div className="lg:hidden mb-3">
          <InputBox />
          </div>
              
        </div>
        <div className="w-full bg-gray-200 h-6" />
    </header>
  )
}


