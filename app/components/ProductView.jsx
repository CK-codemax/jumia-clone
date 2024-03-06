'use client'

import { useSelector } from "react-redux";
import ProductThumbnail from "./ProductThumbnail"
import { correctPrice, getHistory } from "../utils/currencyConverters";
import Image from "next/image";
import BottomImages from "./BottomImages";

const images = [
  {name : 'groceries', path : 'https://ng.jumia.is/cms/0-1-homepage/0-0-thumbnails/2024/Feb/Artboard_1_copy_4.png'},
  {name : 'refridgerators', path : 'https://ng.jumia.is/cms/0-1-homepage/0-0-thumbnails/2024/Feb/Artboard_1_copy_9.png'},
  {name : 'televisions', path : 'https://ng.jumia.is/cms/0-1-homepage/0-0-thumbnails/2024/Feb/Artboard_1_copy_5.png'},
  {name : 'generators', path : 'https://ng.jumia.is/cms/0-1-homepage/0-0-thumbnails/2024/Feb/Artboard_1_copy_8.png'},
  {name : 'mobile accessories', path : 'https://ng.jumia.is/cms/0-1-homepage/0-0-thumbnails/2024/Feb/Artboard_1_copy_7.png'},
  {name : 'computing deals', path : 'https://ng.jumia.is/cms/0-1-homepage/0-0-thumbnails/2024/Feb/Artboard_1_copy_3.png'},
  {name : 'sneakers', path : 'https://ng.jumia.is/cms/0-1-homepage/0-0-thumbnails/2024/Feb/Artboard_1_copy_6.png'},
  {name : 'half price', path : 'https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/week-5/Pay-Day/Half_Price_Store.jpg'},
  {name : 'hair care', path : 'https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/week-5/Pay-Day/Hair_Care.jpg'},
  {name : 'gaming deals', path : 'https://ng.jumia.is/cms/0-1-category-pages/0-all-category/updated/Gaming.jpg'},
  {name : '5K store', path : 'https://ng.jumia.is/cms/0-1-homepage/0-0-thumbnails/2024/Feb/Artboard_1_copy_12.png'},
  {name : '18+ store', path : 'https://ng.jumia.is/cms/0-1-homepage/0-0-thumbnails/2024/Feb/18plus.jpg'},
  {name : 'clearance', path : 'https://ng.jumia.is/cms/0-1-homepage/0-0-thumbnails/2024/Feb/Artboard_1.png'},
  {name : 'fashion', path : 'https://ng.jumia.is/cms/0-1-homepage/0-0-thumbnails/2024/Feb/Artboard_1_copy_13.png'},
  {name : 'mobile phones', path : 'https://ng.jumia.is/cms/0-1-homepage/0-0-thumbnails/2024/Feb/Artboard_1_copy_2.png'},
  {name : 'home essentials', path : 'https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/week-5/Pay-Day/Home_Essentials.jpg'},
  {name : 'personal care', path : 'https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/week-5/Pay-Day/Personal_Care.jpg'},
  {name : 'towels', path : 'https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/week-5/Pay-Day/Personal_Care_copy.jpg'},
  {name : 'fans', path : 'https://ng.jumia.is/cms/0-1-category-pages/appliances/2024/new-layout/Fans.png'},
  {name : 'air conditioner', path : 'https://ng.jumia.is/cms/0-1-category-pages/appliances/2024/new-layout/Air_conditioner.png'},
  {name : 'home accessories', path : 'https://ng.jumia.is/cms/0-1-category-pages/appliances/2024/new-layout/Washer.png'},
  {name : 'home appliances', path : 'https://ng.jumia.is/cms/0-1-category-pages/appliances/2024/new-layout/Pressing_Iron.png'},
  {name : 'storage', path : 'https://ng.jumia.is/cms/0-1-category-pages/appliances/2024/new-layout/Freezer.png'},
  {name : 'appliances', path : 'https://ng.jumia.is/cms/0-1-category-pages/appliances/2024/new-layout/Fridge.png'},
  {name : 'android phones', path : 'https://ng.jumia.is/cms/0-1-category-pages/phones-tablets/2024/updated/Android_Phones.png'},
  {name : 'apple phones', path : 'https://ng.jumia.is/cms/0-1-category-pages/phones-tablets/2024/updated/iPhones.png'},
  {name : 'note phones', path : 'https://ng.jumia.is/cms/0-1-category-pages/phones-tablets/2024/updated/Note_phones.png'},
  {name : 'android tablets', path : 'https://ng.jumia.is/cms/0-1-category-pages/phones-tablets/2024/updated/Android_Tablets.png'},
  {name : 'ipads', path : 'https://ng.jumia.is/cms/0-1-category-pages/phones-tablets/2024/updated/Tabs.png'},
  {name : 'fold phones', path : 'https://ng.jumia.is/cms/0-1-category-pages/phones-tablets/2024/updated/Fold_Phones.png'},
]


export default function ProductView({products}) {
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
    console.log(products, productsToUse)
  return (
    <>
   <div className="grid w-full grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-x-2 gap-y-4 px-2">
   {productsToUse.slice(0, 8).map((product, i) => <ProductThumbnail key={product.id + i}  product={product} />)}
   </div>

   <div className="my-3 grid py-4 px-2 box-border gap-0.5 sm:gap-1 xl:gap-2 grid-rows-2 grid-cols-3 sm:grid-rows-2 sm:grid-cols-4 lg:grid-rows-1 lg:grid-cols-6  w-full flex-wrap mt-2 justify-start items-start">
    {images.slice(0, 6).map((image) => <div className="flex flex-col items-center justify-center space-y-2" key={image.path}>
    <Image className="cursor-pointer rounded-md object-cover" src={image.path} alt='category-image' width={300} height={240} />
    <p className="text-center capitalize">{image.name}</p>
    </div>)}
   </div>

   <div className="grid w-full grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-x-2 gap-y-4 px-2">
   {productsToUse.slice(8, 14).map((product, i) => <ProductThumbnail key={product.id + i}  product={product} />)}
   </div>
     
   <div className="my-3 grid  py-4 px-2 box-border gap-0.5 sm:gap-1 xl:gap-2 grid-rows-2 grid-cols-3 sm:grid-rows-2 sm:grid-cols-4 lg:grid-rows-1 lg:grid-cols-6  w-full flex-wrap mt-2 justify-start items-start">
    {images.slice(6, 12).map((image) => <div className="flex flex-col items-center justify-center space-y-2" key={image.path}>
    <Image className="cursor-pointer rounded-md object-cover" src={image.path} alt='category-image' width={300} height={240} />
    <p className="text-center capitalize">{image.name}</p>
    </div>)}
   </div>

   <div className="grid w-full grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-x-2 gap-y-4 px-2">
   {productsToUse.slice(14, 20).map((product, i) => <ProductThumbnail key={product.id + i}  product={product} />)}
   </div>

   <div className="my-3 grid  py-4 px-2 box-border gap-0.5 sm:gap-1 xl:gap-2 grid-rows-2 grid-cols-3 sm:grid-rows-2 sm:grid-cols-4 lg:grid-rows-1 lg:grid-cols-6  w-full flex-wrap mt-2 justify-start items-start">
    {images.slice(12, 18).map((image) => <div className="flex flex-col items-center justify-center space-y-2" key={image.path}>
    <Image className="cursor-pointer rounded-md object-cover" src={image.path} alt='category-image' width={300} height={240} />
    <p className="text-center capitalize">{image.name}</p>
    </div>)}
   </div>

   <div className="grid w-full grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-x-2 gap-y-4 px-2">
   {productsToUse.slice(20, 28).map((product, i) => <ProductThumbnail key={product.id + i}  product={product} />)}
   </div>

   <div className="my-3 grid  py-4 px-2 box-border gap-0.5 sm:gap-1 xl:gap-2 grid-rows-2 grid-cols-3 sm:grid-rows-2 sm:grid-cols-4 lg:grid-rows-1 lg:grid-cols-6  w-full flex-wrap mt-2 justify-start items-start">
    {images.slice(18, 24).map((image) => <div className="flex flex-col items-center justify-center space-y-2" key={image.path}>
    <Image className="cursor-pointer rounded-md object-cover" src={image.path} alt='category-image' width={300} height={240} />
    <p className="text-center capitalize">{image.name}</p>
    </div>)}
   </div>

   <div className="grid w-full grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-x-2 gap-y-4 px-2">
   {productsToUse.slice(28, 34).map((product, i) => <ProductThumbnail key={product.id + i}  product={product} />)}
   </div>

   <div className="my-3 grid  py-4 px-2 box-border gap-0.5 sm:gap-1 xl:gap-2 grid-rows-2 grid-cols-3 sm:grid-rows-2 sm:grid-cols-4 lg:grid-rows-1 lg:grid-cols-6  w-full flex-wrap mt-2 justify-start items-start">
    {images.slice(24, images.length).map((image) => <div className="flex flex-col items-center justify-center space-y-2" key={image.path}>
    <Image className="cursor-pointer rounded-md object-cover" src={image.path} alt='category-image' width={300} height={240} />
    <p className="text-center capitalize">{image.name}</p>
    </div>)}
   </div>

   <div className="grid w-full grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-x-2 gap-y-4 px-2">
   {productsToUse.slice(34, productsToUse.length - 1).map((product, i) => <ProductThumbnail key={product.id + i}  product={product} />)}
   </div>

    <BottomImages />
    </>
  )
}
