import Image from "next/image";
import Link from "next/link";
//import { FaEye, FaRegHeart } from "react-icons/fa";
//import { PiCellSignalFullBold, PiShoppingCartBold } from "react-icons/pi";

export default function DeviceThumbNail({name, id, src, description}) {

  return (
    <Link className="cursor-pointer border border-gray-500 rounded-lg px-1 py-2" href={'/'}>
        <Image className="w-[400px] rounded-md" src={src} width={500} height={300} alt={`${name}-image`} />
        <p className="text-center text-wrap">{name}</p>
        {/* <div className="mx-auto flex w-full items-center space-x-2">
              <div className="bg-[#28d0e7] w-[30px] h-[30px] flex items-center justify-center rounded-full">
                   <FaEye className="text-md text-white hover:text-black" /> 
               </div>

               <div className="bg-[#28d0e7] w-[30px] h-[30px] flex items-center justify-center rounded-full">
                   <FaRegHeart className="text-md text-white hover:text-black" /> 
               </div>

               <div className="bg-[#28d0e7] w-[30px] h-[30px] flex items-center justify-center rounded-full">
                   <PiCellSignalFullBold className="text-md text-white hover:text-black" /> 
               </div>

               <div className="bg-[#28d0e7] w-[30px] h-[30px] flex items-center justify-center rounded-full">
                   <PiShoppingCartBold className="text-md text-white hover:text-black" /> 
               </div>
          

        </div> */}
    </Link>
  )
}
