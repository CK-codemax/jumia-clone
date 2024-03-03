import Image from 'next/image'
export default function HeaderIcon({Icon, src, title}) {
  return (
   <div>
    
        {src &&  <Image className=" w-[100px] lg:w-[250px] object-cover h-auto mx-auto" src='/jumia-logo.png' width={500} height={200} alt="jumia-logo" />}
      
      {Icon && <div className='flex min-w-[40px] min-h-[40px] rounded-full justify-center items-center hover:bg-[#f68b1e] space-x-2 cursor-pointer lg:hover:bg-white'>
        <Icon className="h-5 lg:h-7" />
        <p className='hidden capitalize lg:inline-flex'>{title}</p>
      </div>}
    
   </div>
  )
}
