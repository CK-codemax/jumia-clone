import Image from "next/image";
import Categories from "./Categories";
import { BriefcaseIcon, BuildingOffice2Icon, PhoneIcon } from "@heroicons/react/24/outline";
import SlideShow from "./SlideShow";
import NavBar from "./NavBar";


export default function HomeTop() {
  return (
    <>
         <div className="lg:bg-[#e8c0a7] w-full flex py-4 lg:h-[400px] space-x-3 lg:px-6 xl:px-12">
           <NavBar/>
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


    </>
  )
}
