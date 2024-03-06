'use client'
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Bars3Icon, BuildingOfficeIcon, BuildingStorefrontIcon, CalculatorIcon, ChevronRightIcon, ComputerDesktopIcon, DevicePhoneMobileIcon, EllipsisHorizontalCircleIcon, FaceSmileIcon, GlobeAsiaAustraliaIcon, HeartIcon, MicrophoneIcon, PhoneIcon, PlusCircleIcon, PuzzlePieceIcon, ReceiptPercentIcon, ReceiptRefundIcon, XMarkIcon} from "@heroicons/react/24/outline"
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

const MenuModalContext = createContext();

function MenuModal({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <MenuModalContext.Provider value={{closeModal, openModal, isOpen }}>
      {children}
    </MenuModalContext.Provider>
  );
  }

  function Open() {
  const { openModal } = useContext(MenuModalContext);

  return <Bars3Icon onClick={openModal} className="h-5 text-black lg:hidden" />
}



function Window() {
  const { closeModal, isOpen } = useContext(MenuModalContext)
  const menuRef = useRef()
  

  useEffect(
    function(){
    function handleClick(e){
      if(menuRef.current && !menuRef.current.contains(e.target)){
        closeModal()
      }
    }

    document.addEventListener('click', handleClick, true)

   return () => document.removeEventListener('click', handleClick, true)
    },
    [closeModal]
  )



    return createPortal(<>
    
        <div className={`w-full lg:hidden bg-[rgba(255, 255, 255, 0.1)] h-screen ${isOpen ? 'block' : 'hidden'} z-50 fixed top-0 left-0 backdrop-blur-sm transition-all duration-500`}/>
        
        <div className={`lg:hidden h-screen min-w-[85vw] fixed z-50 top-0 left-0  ${isOpen ? 'translate-x-0' : '-translate-x-[100%]' } transition-all duration-500 linear origin-left`}>
         <div ref={menuRef} className="overflow-y-scroll flex flex-col w-full h-screen border-r border-gray-400 z-50 bg-white">
        <div className="flex items-center space-x-3 px-4">
        <XMarkIcon onClick={closeModal} className="h-5 text-black" />

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
      </div>
      </>,
      document.body
    )
  

  
}

MenuModal.Open = Open;
MenuModal.Window = Window;


export default MenuModal
