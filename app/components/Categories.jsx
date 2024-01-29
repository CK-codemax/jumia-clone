import Image from "next/image"

const categoryImages = ['https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/Updated-dec/official-store.gif',
'https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/Updated-dec/phones.jpg',
'https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/Updated-dec/television.jpg',
'https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/Updated-dec/refrigerator-12.gif',
'https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/Updated-dec/5k-store.gif',
'https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/Updated-dec/generator-gif.gif',
'https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/Updated-dec/Clearance-sales.gif',
'https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/Updated-dec/Global-best-seller.gif',
'https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/Updated-dec/sneaker-2.gif',
'https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/Updated-dec/computing.jpg',
'https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/Updated-dec/mobile-accessories.jpg',
'https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/Updated-dec/groceries.jpg',
]


export default function Categories() {

  return(
    
<div className="grid p-2 box-border gap-0.5 md:gap-1 xl:gap-2 grid-rows-3 grid-cols-4 md:grid-rows-2 md:grid-cols-6  w-full flex-wrap mt-2 justify-start items-start">
  
  {categoryImages.map((image) => <Image className="cursor-pointer rounded-md object-cover" src={image} key={image} alt='category-image' width={300} height={240} />)}
  
</div>


  )
}