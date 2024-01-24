import Link from 'next/link'
import Image from 'next/image';


export default function Categories() {

  return(
    
<div className="grid p-2 box-border gap-0.5 grid-rows-3 grid-cols-4 md:grid-rows-2 md:grid-cols-6  w-full flex-wrap mt-2 justify-start items-start">
  
  <Link href='/'>
  <Image alt='category-image' className="category" src='https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/Updated-dec/official-store.gif' width={78} height={62.4} />
  </Link>

  <Link href='/'>
  <Image className="category" alt='category-image' src='https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/Updated-dec/television.jpg' width={78} height={62.4} />
  </Link>

  <Link href='/'>
  <Image className="category" alt='category-image' src='https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/Updated-dec/phones.jpg' width={78} height={62.4} />
  </Link>

  <Link href='/'>
  <Image className="category" alt='category-image' src='https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/Updated-dec/refrigerator-12.gif' width={78} height={62.4} />
  </Link>

  <Link href='/'>
  <Image className="category" alt='category-image' src='https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/Updated-dec/Clearance-sales.gif' width={78} height={62.4} />
  </Link>

  <Link href='/'>
  <Image className="category" alt='category-image' src='https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/Updated-dec/Global-best-seller.gif' width={78} height={62.4} />
  </Link>

  <Link href='/'>
  <Image className="category" alt='category-image' src='https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/Updated-dec/generator-gif.gif' width={78} height={62.4} />
  </Link>

  <Link href='/'>
  <Image className="category" alt='category-image' src='https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/Updated-dec/5k-store.gif' width={78} height={62.4} />
  </Link>

  <Link href='/'>
  <Image className="category" alt='category-image' src='https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/Updated-dec/mobile-accessories.jpg' width={78} height={62.4} />
  </Link>

  <Link href='/'>
  <Image className="category" alt='category-image' src='https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/Updated-dec/groceries.jpg' width={78} height={62.4} />
  </Link>

  <Link href='/'>
  <Image className="category" alt='category-image' src='https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/Updated-dec/computing.jpg' width={78} height={62.4} />
  </Link>
  
  <Link href='/'>
  <Image className="category" alt='category-image' src='https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/Updated-dec/sneaker-2.gif' width={78} height={62.4} />
  </Link>
  
  
</div>


  )
}