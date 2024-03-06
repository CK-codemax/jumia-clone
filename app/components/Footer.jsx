
import Image from "next/image";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import ScrollToTop from "./ScrollToTop";

export default function Footer() {
  return (
    <div className="mt-5 flex flex-col bg-[#212121] pb-5 w-full">
      {/*Footer top*/}
      <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row px-4 sm:items-start sm:space-x-6 py-8 sm:px-8 lg:justify-between bg-[#212121]">
      <Image className="hidden sm:inline-flex w-[100px] lg:w-[250px] invert object-cover" src='/jumia-logo.png' width={500} height={200} alt="jumia-logo" />


       <div className="flex flex-col flex-grow space-y-1 text-white">
        <p className="text-sm font-semibold uppercase">new to jumia?</p>
        <p className="text-xs">Subscribe to our newsletter</p>
        <div className="flex items-center space-x-3">
          <div className="flex items-center h-[50px] pl-3 rounded-md w-[90%] lg:max-w-[350px] space-x-1 bg-gray-200">
            <EnvelopeIcon className="h-6 text-gray-500" />
            <p className="capitalize text-gray-700">enter email address</p>
          </div>
          <p className="uppercase hidden xl:flex bg-transparent px-4 h-[50px] items-center rounded-md border cursor-pointer border-white hover:text-[#f68b1e] hover:border-[#f68b1e]">male</p>
          <p className="uppercase hidden xl:flex bg-transparent px-4 h-[50px] items-center rounded-md border cursor-pointer border-white hover:text-[#f68b1e] hover:border-[#f68b1e]">female</p>
    
        </div>
       </div>


      <div className="flex flex-col space-y-2">
      <div className="flex items-center space-x-3">
        <div className="p-2 rounded-md bg-[#f68b1e]">
          <Image className="object-cover invert h-auto w-[30px]" src={'/jumia-identity.png'} alt='jumia-logo' width={100} height={100}/>
        </div>
        <div className="flex flex-col text-white space-y-1">
          <p className="uppercase font-semibold text-sm">download jumia free app</p>
          <p className="text-xs">Get access to exclusive offers!</p>
        </div>
      </div>
      <div className="flex space-x-2 items-center">
        <div className="flex items-center cursor-pointer bg-transparent text-white rounded-md border hover:border-[#f68b1e] border-white hover:text-[#f68b1e] transition-all duration-300 ease-in-out">
         <Image className='w-[36px] auto' src='/apple-store.png' width={100} height={100} alt="apple-logo" />
          <p className=" w-[100px] flex flex-col text-wrap"><span className="text-[8px]">Download on the</span><span className="text-xs">App Store</span></p>
        </div>

        <div className="flex items-center h-full cursor-pointer bg-transparent hover:border-[#f68b1e] text-white rounded-md border border-white hover:text-[#f68b1e] transition-all duration-300 ease-in-out">
         <Image className='w-[44px] auto' src='/playstore.png' width={100} height={100} alt="apple-logo" />
          <p className=" w-[100px] flex flex-col text-wrap"><span className="text-[8px]">Get from</span><span className="text-xs">Playstore</span></p>
        </div>
      </div>
      </div>
        

       
      </div>
      <ScrollToTop />
    </div>
  )
}
