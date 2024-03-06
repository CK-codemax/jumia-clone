'use client'

import { BuildingOfficeIcon, BuildingStorefrontIcon, CalculatorIcon, ComputerDesktopIcon, DevicePhoneMobileIcon, EllipsisHorizontalCircleIcon, FaceSmileIcon, GlobeAsiaAustraliaIcon, HeartIcon, MicrophoneIcon, PhoneIcon, PlusCircleIcon, PuzzlePieceIcon, ReceiptPercentIcon, ReceiptRefundIcon} from "@heroicons/react/24/outline"



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


export default function NavBar() {
  return (
<ul className="hidden lg:flex flex-col min-w-[225px] h-full py-2 justify-between rounded-md bg-white">
    {navOptions.map(( {title, Icon} ) => <li className="capitalize text-left px-4 hover:text-[#f68b1e] w-full flex space-x-3 items-center text-xs cursor-pointer" key={title}>
      <Icon className="h-5" />
      <p>{title}</p>
      </li>)}
</ul>
  
  
  )
}
