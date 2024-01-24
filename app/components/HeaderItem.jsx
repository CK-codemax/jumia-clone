import Link from 'next/link'
import Image from 'next/image'


export default function HeaderItem({Icon, src, path}){


return(
<>
{Icon && (<Link href={path} className="w-[40px] h-[40px] rounded-full flex items-center justify-center hover:bg-gray-700 active:bg-gray-700" >
<Icon className="h-[24px]" />
</Link>)}

{src && (<Link href={path} className="h-[40px] flex items-center justify-center hover:bg-gray-700 active:bg-gray-700" >
<Image alt='logo' src={src} width={104} height={24} />
</Link>
)}

</>
)
}
