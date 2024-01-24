
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function SearchBox(){


return(
<Link href='/' className="w-[95%] mx-auto mt-2 h-[36px] flex px-2 items-center rounded-3xl border-solid border border-gray-700">

<MagnifyingGlassIcon className="h-6" />
<input type='text' placeholder='Search product, brands and categories' className='px-2 flex-grow py-1 text-sm bg-transparent border-none outline-none' />
</Link>
)

}