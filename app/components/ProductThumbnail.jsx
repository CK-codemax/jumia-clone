import Image from "next/image";
import Link from "next/link";

export default function ProductThumbnail({product}) {
  return (
    <Link className="border border-gray-500 xl:hover:shadow-md xl:hover:border-black xl:hover:scale-105 relative rounded-md p-2 flex flex-col space-y-2 justify-center" href={`/individual-product/${product.id}`}>
        <Image src={product.img} alt="product-image" width={500} height={300} className="object-cover" placeholder="blur" blurDataURL="/jumia_img_loader.png"/>
   <div className="flex flex-col text-left ml-2">
    <p className="truncate">{product.name}</p>
    <p className="font-bold ">{product.deal.currency}{Math.ceil(product.deal.price)}</p>
    <p className="line-through">{product.deal.currency}{Math.ceil((+product.deal.price) + (+product.deal.discount)) }</p>
  </div>
  <div className="absolute top-3 right-3 w-[50px] text-[#f68b1e] text-center py-1 bg-[#e8c0a7] rounded-sm">
-{Math.ceil((+product.deal.discount) / ((+product.deal.price) + (+product.deal.discount)) * 100)}%
 </div>  
    
    </Link>
  )
}
