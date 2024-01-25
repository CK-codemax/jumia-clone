'use client'

import { BuildingOfficeIcon, BuildingStorefrontIcon, CalculatorIcon, ComputerDesktopIcon, DevicePhoneMobileIcon, EllipsisHorizontalCircleIcon, FaceSmileIcon, GlobeAsiaAustraliaIcon, MicrophoneIcon, PhoneIcon, PlusCircleIcon, PuzzlePieceIcon, XMarkIcon } from "@heroicons/react/24/outline"
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


export default function NavBar({show}) {
  return (<>
  
 {show === true && (
      <div className=" absolute top-10 left-0 flex lg:hidden  flex-col min-w-[85vw] h-screen border-r border-gray-400 z-30 bg-white">
        
     <ul className="pt-2">
     {navOptions.map(( {title, Icon} ) => <li className="capitalize py-2 text-left border-b border-gray-400 px-4 hover:text-[#f68b1e] w-full flex space-x-3 items-center text-xs cursor-pointer" key={title}>
       <Icon className="h-5" />
       <p>{title}</p>
       </li>)}
 </ul>
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
