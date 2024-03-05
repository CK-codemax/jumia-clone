import Link from "next/link";

export default function page() {
  return (
    <div className="flex w-full items-center flex-col p-5 justify-center space-y-3">
     <p className="text-center">We are not offering sale for this product at the moment because this {"product's"} details is currently unavailable. We apoloize for any inconveniences this might cause you. Please you can check back this particular product later.</p>
     <Link className="hover:text-[#f68b1e] text-center" href={'/'}>Please proceed to shopping page and check out other available products.</Link>
   </div>)
  
}
