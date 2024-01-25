import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function InputBox() {
  return (
    <>
     <form className="w-[96%] lg:hidden flex mx-auto items-center space-x-3">
                <div className="flex items-center py-[6px] px-3 flex-grow flex-shrink border border-black rounded-full space-x-3">
                    <MagnifyingGlassIcon className="h-5" />
                   <input className="flex-grow flex-shrink border-none text-xs  placeholder:text-gray-500 outline-none bg-transparent" type="text" placeholder="Search products, brands and categories" />
                 
               </div>
               <button hidden className="bg-[#f68b1e] hover:bg-[#e48c3e] py-2 px-4 text-white uppercase rounded-md" type="submit">
                 Search
              </button>    
     </form>   

     <form className="w-full hidden lg:flex items-center space-x-3">
                <div className="flex items-center py-2 px-4 flex-grow flex-shrink border border-black rounded-md space-x-3">
                    <MagnifyingGlassIcon className="h-5" />
                   <input className="flex-grow flex-shrink placeholder:text-gray-500 border-none outline-none bg-transparent" type="text" placeholder="Search products, brands and categories" />
                 
               </div>
               <button className="bg-[#f68b1e] hover:bg-[#e48c3e] py-2 px-4 text-white uppercase rounded-md" type="submit">
                 Search
              </button>    
             </form>   
    
    </>
  )
}
