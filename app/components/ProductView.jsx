'use client'

import { useSelector } from "react-redux";
import ProductThumbnail from "./ProductThumbnail"
import { correctPrice, getHistory } from "../utils/currencyConverters";

export default function ProductView({products, newDeals}) {
  const userCurrency = useSelector(state => state.currency) //returns the exact currency
 // const userCurrency = currency.currency // now we access currency from this object, using first and second in our combined reducer store
    const productsToUse = products?.map((fullDeal) => {
   
  
      const fixedToCurrency = {
        ...fullDeal,
        history : getHistory(fullDeal.history, userCurrency),
        deal: {
          ...fullDeal.deal,
          currency: userCurrency,
          discount: correctPrice(fullDeal.deal.currency, userCurrency, fullDeal.deal.discount),
          price : correctPrice(fullDeal.deal.currency, userCurrency, fullDeal.deal.price),
        }
      };
    return fixedToCurrency
    })
    console.log(products, newDeals, productsToUse, userCurrency)
  return (
    <>
   <div className="grid w-full grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-x-2 gap-y-4 px-5">
   {products.map((product, i) => <ProductThumbnail key={product.id + i}  product={product} />)}
   </div>
    </>
  )
}
