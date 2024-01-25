'use client'

import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import {Bars3Icon, BriefcaseIcon, BuildingOffice2Icon, ChevronDownIcon, PhoneIcon, QuestionMarkCircleIcon, ShoppingCartIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from "next/link";
import SlideShow from "./SlideShow";
import NavBar from "./NavBar";
import InputBox from "./InputBox";
import { useState } from "react";
import Categories from "./Categories";

export default function Header() {
  const [show, setShow] = useState(false)

  return (
    <header className={`flex flex-col`}>
        {/*Top*/}
        <div className="hidden lg:flex w-full">
            <div className="w-full bg-[var(--hover-bg)] px-16">
                <Image className="w-full object-cover h-auto cursor-pointer" src='https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/Brand-days/January/xiaomi/top-strip.png' alt="advert" width={1080} height={720} />
            </div>
        </div>

        {/*Middle*/}
      

        <div className="w-full relative">

       <div className="w-full bg-gray-200 h-6 hidden lg:block" />

        <div className="flex justify-between space-x-3 px-4 lg:px-12 items-center bg-white">
              
              <div className="flex items-center space-x-3 mr-20">
              
              {show === false && (
        <>
         <Bars3Icon onClick={() => setShow(!show)} className="lg:hidden h-5" />
         <Link href={'/'} className="hover:bg-[#f68b1e] sm:hover:bg-transparent">
         <HeaderIcon src={'/jumia-logo.png'} />
        </Link>
        </>   
    )}
             </div>
 
              {/*Input*/}
              
              <div className="hidden lg:inline-flex w-full flex-grow">
              <InputBox />
              </div>
 
 
              <div className="flex space-x-3">
              <div className="flex  lg:hover:text-[#f68b1e] items-center space-x-2">
                 <HeaderIcon Icon={UserIcon} title={'account'} />
                 <ChevronDownIcon className="hidden lg:inline-flex h-5"/>
               </div>
 
               <div className=" hidden lg:flex hover:text-[#f68b1e] items-center space-x-2">
                 <HeaderIcon Icon={QuestionMarkCircleIcon} title={'help'} />
                 <ChevronDownIcon className="h-5"/>
               </div>
 
               <div className="flex lg:hover:text-[#f68b1e]  items-center space-x-2">
                 <HeaderIcon Icon={ShoppingCartIcon} title={'cart'} />
               </div>
 
 
              </div>
            </div>
 
          <div className="lg:hidden">
          <InputBox />
          </div>
              
        </div>


        {/* Bottom */}
        <div className="lg:bg-[#e8c0a7] w-full flex py-4 lg:h-[400px] space-x-3 lg:px-6 xl:px-12">
           <NavBar setShow={setShow} show={show}/>
          <SlideShow />
            <div className="flex-col h-full hidden xl:flex min-w-[218px] justify-between">
              <div className="flex flex-col bg-white rounded-md p-4 space-y-2">
                <div className="flex space-x-3 items-center cursor-pointer ">
                  <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full border border-[#f68b1e]">
                    <PhoneIcon className="h-7" />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold uppercase">call to order</p>
                    <p className="text-xs text-gray-600">0700-600-000</p>
                  </div>
                </div>

                <div className="flex space-x-3 items-center cursor-pointer ">
                  <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full border border-[#f68b1e]">
                    <BuildingOffice2Icon className="h-7" />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold capitalize">sell on jumia</p>
                  </div>
                </div>

                <div className="flex space-x-3 items-center cursor-pointer ">
                  <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full border border-[#f68b1e]">
                    <BriefcaseIcon className="h-7" />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold capitalize">best deals</p>
                  </div>
                </div>

              </div>
              <Image className="object-contain cursor-pointer rounded-md" src={'https://ng.jumia.is/cms/0-1-initiatives/jforce/2023/JForce.png'} alt='image-thumbnail' width={218} height={184} />
            </div>
          

        </div>

        <Categories />


    </header>
  )
}


