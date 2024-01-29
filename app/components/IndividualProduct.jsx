'use client'

import Image from "next/image"

export default function IndividualProduct({device, deal}) {
    console.log(device)
  return (
    <div className="flex items-center justify-center space-x-5 w-full">
        <Image className="object-cover max-w-[200px] h-auto" src={device.img} width={500} height={800} alt="product-image" />
        <Image className="object-cover max-w-[200px] h-auto" src={deal.img} width={500} height={800} alt="product-image" />
   
    </div>
  )
}
