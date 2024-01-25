'use client'

import {XMarkIcon} from '@heroicons/react/24/solid'
import { BuildingOfficeIcon, BuildingStorefrontIcon, CalculatorIcon, ChevronRightIcon, ComputerDesktopIcon, DevicePhoneMobileIcon, EllipsisHorizontalCircleIcon, FaceSmileIcon, GlobeAsiaAustraliaIcon, HeartIcon, MicrophoneIcon, PhoneIcon, PlusCircleIcon, PuzzlePieceIcon, ReceiptPercentIcon, ReceiptRefundIcon} from "@heroicons/react/24/outline"
import Link from "next/link"
import HeaderIcon from "./HeaderIcon"



const navOptions = [{title : 'supermarket', Icon : BuildingStorefrontIcon ,},
{title : 'health & beauty', Icon : PlusCircleIcon ,},
{title : 'home & office', Icon : BuildingOfficeIcon ,},
{title : 'appliances', Icon : PhoneIcon ,},
{title : 'phones & tablets', Icon : DevicePhoneMobileIcon ,},
{title : 'computing', Icon : ComputerDesktopIcon ,},
{title : 'electronics', Icon : MicrophoneIcon ,},
{title : 'fashion', Icon : FaceSmileIcon ,},
{title : 'baby products', Icon : PuzzlePieceIcon ,},
{title : 'gaming', Icon : CalculatorIcon ,},
{title : 'sporting goods', Icon : GlobeAsiaAustraliaIcon   ,},
{title : 'other categories', Icon : EllipsisHorizontalCircleIcon ,},
]

const myAccount = [
    {title : 'orders', Icon : ReceiptRefundIcon ,},
{title : 'pending reviews', Icon : PuzzlePieceIcon ,},
{title : 'voucher', Icon : ReceiptPercentIcon ,},
{title : 'saved items', Icon : HeartIcon   ,},
] 


export default function NavBar({show, setShow}) {
  return (<>
  
 {show === true && (
      <div className=" absolute top-0 overflow-y-scroll left-0 flex lg:hidden  flex-col min-w-[85vw] h-screen border-r border-gray-400 z-30 bg-white">
        <div className="flex items-center space-x-3 px-4">
     {/* <p onClick={() => setShow(!show)} className="lg:hidden text-[20px] font-bold" >&times;</p>  */}
     <XMarkIcon onClick={() => setShow(!show)} className="lg:hidden h-5"  />

      <Link href={'/'} className="hover:bg-[#f68b1e] sm:hover:bg-transparent">
      <HeaderIcon src={'/jumia-logo.png'} />
     </Link>
 
    </div>
       
    <div className="mt-4 pt-3 border-t border-gray-400" >

<div className="flex items-center justify-between px-4">
<p className="uppercase text-xs text-gray-700 cursor-pointer">need help?</p>
<ChevronRightIcon className="h-4" />
</div>
</div>

        <div className="mt-4 pt-3 border-t border-gray-400" >

        <div className="flex items-center justify-between px-4">
        <p className="uppercase text-xs text-gray-700 cursor-pointer">my jumia account</p>
        <ChevronRightIcon className="h-4" />
        </div>
        <ul className="pt-2">
     {myAccount.map(( {title, Icon} ) => <li className="capitalize py-3 text-left px-4 hover:text-[#f68b1e] w-full flex space-x-3 items-center text-xs cursor-pointer" key={title}>
       <Icon className="h-5" />
       <p>{title}</p>
       </li>)}
 </ul>
    </div>


    <div className="mt-4 pt-3 border-t border-gray-400" >
        
    <div className="flex items-center justify-between px-4">
        <p className="uppercase text-xs text-gray-700 cursor-pointer">our categories</p>
        <p className="capitalize text-xs text-[#f68b1e]">see all</p>
        </div>

        <ul className="pt-2">
     {navOptions.map(( {title, Icon} ) => <li className="capitalize py-3 text-left px-4 hover:text-[#f68b1e] w-full flex space-x-3 items-center text-xs cursor-pointer" key={title}>
       <Icon className="h-5" />
       <p>{title}</p>
       </li>)}
 </ul>
    </div>
      </div>
 )}

<ul className="hidden lg:flex flex-col min-w-[225px] h-full py-2 justify-between rounded-md bg-white">
    {navOptions.map(( {title, Icon} ) => <li className="capitalize text-left px-4 hover:text-[#f68b1e] w-full flex space-x-3 items-center text-xs cursor-pointer" key={title}>
      <Icon className="h-5" />
      <p>{title}</p>
      </li>)}
</ul>
  </>
  
  )
}
