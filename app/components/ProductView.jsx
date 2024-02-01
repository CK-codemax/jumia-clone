'use client'

import ProductThumbnail from "./ProductThumbnail"

export default function ProductView({products}) {
    
    console.log(products)
  return (
    <>
   <div className="grid w-full grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-x-2 gap-y-4 px-5">
   {products.map((product, i) => <ProductThumbnail key={product.id + i}  product={product} />)}
   </div>
    </>
  )
}
