'use client'

import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

export default function IndividualProduct({device, deal}) {
    console.log(device)
  return (
    <>
    <div className="flex items-center justify-center space-x-5 w-full">
        <Image className="object-cover max-w-[200px] h-auto" src={device.img} width={500} height={800} alt="product-image" />
        <Image className="object-cover max-w-[200px] h-auto" src={deal.img} width={500} height={800} alt="product-image" />
   
    </div>

    <div className="w-full flex justify-center pb-14 items-center space-x-3 mt-5">
    <button className="uppercase px-4 py-2 rounded-md bg-[#f68b1e]">
    <MinusIcon className="h-5"/>
      </button>

      <button className="uppercase px-4 py-2 rounded-md bg-[#f68b1e]">
        add to cart
      </button>

      <button className="uppercase px-4 py-2 rounded-md bg-[#f68b1e]">
      <PlusIcon className="h-5"/>
      </button>
    </div>
    </>
  )
}
