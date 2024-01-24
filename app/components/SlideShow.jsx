'use client'

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

export default function SlideShow() {

  return (
    <div className="flex w-full mt-2 flex-col">
      <div className='bg-[#478118] flex items-center justify-center text-center mb-2 w-[100%] h-[32px] text-[#fff]'>
      <span>CALL TO ORDER : 0703 600 0000</span>
      </div>
      
      <div className='relative'>
      <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
        showIndicators={false}
      transitionTime={750}
      showThumbs={false}
      interval={5000}
        showArrows={false}
      >

             <div>
             <Image width={288} height={144} alt='slide-image' src='https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/Week-1-New-year-clearance-sales/Mobile_Homepage_Slider__660x330.png' placeholder="blur" blurDataURL="/jumia_img_loader.png" alt="image is not available"/>

             </div>

             <div>
             <Image width={288} height={144} alt='slide-image' src='https://ng.jumia.is/cms/0-1-initiatives/flashsale/2023/MS.jpg' placeholder="blur" blurDataURL="/jumia_img_loader.png" alt="image is not available"/>

             </div>

             <div>
             <Image width={288} height={144} alt='slide-image' src='https://ng.jumia.is/cms/0-1-initiatives/jbps/updated-jbp-2022/Nivea/Mobile-homepage-_-MLP-slider_-660x330-(No-CTA).jpg' placeholder="blur" blurDataURL="/jumia_img_loader.png" alt="image is not available"/>

             </div>

             <div>
             <Image width={288} height={144} alt='slide-image' src='https://ng.jumia.is/cms/0-1-initiatives/jbps/updated-jbp-2022/adidas/mobile_slider.jpg' placeholder="blur" blurDataURL="/jumia_img_loader.png" alt="image is not available"/>

             </div>

             <div>
             <Image width={288} height={144} alt='slide-image' src='https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/Week-1-New-year-clearance-sales/back-to-school/Mobile_Homepage_Slider__660x330-back-to-school.jpg' placeholder="blur" blurDataURL="/jumia_img_loader.png" alt="image is not available"/>


             </div>

             <div>
             <Image width={288} height={144} alt='slide-image' src='https://ng.jumia.is/cms/0-1-christmas-sale/2023/Userneeds/Mobile_Homepage_Slider__660x330.jpg' placeholder="blur" blurDataURL="/jumia_img_loader.png" alt="image is not available"/>

             </div>

             <div>
             <Image width={288} height={144} alt='slide-image' src='https://ng.jumia.is/cms/0-1-cpr/2023/large-item-updated/design-update/Large_item_630_x_330.png' placeholder="blur" blurDataURL="/jumia_img_loader.png" alt="image is not available" />

             </div>

             <div>
             <Image width={288} height={144} alt='slide-image' src='https://ng.jumia.is/cms/0-1-initiatives/jumia-pay/2023/December/UPDATED/660_X_330.png' placeholder="blur" blurDataURL="/jumia_img_loader.png" alt="image is not available"/>

             </div>



      </Carousel>
      </div>

      
      
    </div>
  )}