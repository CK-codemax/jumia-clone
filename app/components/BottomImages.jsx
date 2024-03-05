import Image from "next/image"

const images = [ 'https://ng.jumia.is/cms/0-1-category-pages/0-cat-dev/2024/Feb/updated/572x250clipers.jpg',
'https://ng.jumia.is/cms/0-1-category-pages/0-cat-dev/2024/Feb/updated/572x250-perf.jpg',
'https://ng.jumia.is/cms/0-1-initiatives/jbps/2024/adidas/Double_banner___572_x_250.jpg',
'https://ng.jumia.is/cms/0-1-initiatives/jumia-choice/Desktop_Double_banner_572X250.png',]

export default function BottomImages() {
  return (
    <div className="grid grid-rows-4 grid-cols-1 gap-y-2 w-full px-2 my-4 lg:grid-rows-2 lg:gap-x-4 lg:gap-y-4 lg:grid-cols-2">
        {images.map((image) => <Image key={image} className="cursor-pointer h-auto w-[100%] rounded-md object-cover" src={image} alt='category-image' width={572} height={250} />)}
    </div>
  )
  }
