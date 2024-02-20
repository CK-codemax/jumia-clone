import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";

export default function Button({type, onClick, available}) {
  return (
    <button onClick={onClick} className={` py-1 px-2 rounded-md ${available ?  `cursor-pointer ${type === 'remove' ? 'bg-transparent flex items-center space-x-1 hover:bg-[#e8c0a7] text-[#f68b1e]' : 'bg-[#f68b1e] text-white'}` :  `cursor-not-allowed ${type === 'remove' ? 'bg-transparent flex items-center space-x-1 hover:bg-gray-500 text-gray-200' : 'bg-gray-500 text-gray-200'}`}`}>
        {type === 'add' && <PlusIcon className="h-5 "/>}
        {type ==='minus' && <MinusIcon className="h-5 "/>}
        {type ==='remove' && <>
        <TrashIcon className="h-5 "/>
        <p className="uppercase font-semibold">remove</p>
        </>}
    </button>
  )
}
