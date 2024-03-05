'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css';
import Image from 'next/image';


const slideShowImages = ['https://ng.jumia.is/cms/0-1-initiatives/weekend-super-savers/2023/Artboard_1_copy_2.png',
'https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/Brand-days/January/xiaomi/slider_FS.png',
'https://ng.jumia.is/cms/0-1-initiatives/jbps/2024/IKEA/Desktop_Homepage_Slider__712x384.png',
'https://ng.jumia.is/cms/0-1-initiatives/jumia-global/2024/Slider_copy-global.png',
'https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/Week-4/beverages/Artboard_1.jpg',
'https://ng.jumia.is/cms/0-1-initiatives/jumia-pay/2024/jamb/712384.jpg',
'https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/Brand-days/January/xiaomi/updated/Slider-copy-3.jpg',
'https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/Week-4/appliances/Desktop_Homepage_Slider__712x384.jpg', ]
  
   

export default function SlideShow(){


    return (
      <>
       <div className="overflow-hidden hidden lg:inline-flex">
      <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
       
      >
      
  {slideShowImages.map((image, i) => 
              <SwiperSlide key={image}>
                    <Image className={`w-[718px] cursor-pointer rounded-md h-auto`} src={image} width={712} height={384} alt='slideshow' />
              </SwiperSlide>
                )}
  
  
      </Swiper>
      </div>
     </div>
  
     <div className="overflow-hidden lg:hidden">
      <div className="w-[230vw] -translate-x-[65vw]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        // pagination={{
        //   clickable: true,
        // }}
     
      >
      
  
  {slideShowImages.map((image, i) => 
              <SwiperSlide key={image}>
                    <Image className={`w-[718px] cursor-pointer rounded-md h-auto`} src={image} width={712} height={384} alt='slideshow' />
              </SwiperSlide>
                )}
  
  
      </Swiper>
      </div>
     </div>
      </>
    );
  };
  