
import NavBar from './NavBar';
import HeaderItem from './HeaderItem';
import { ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';


export default function Header(){


return(
<header className="w-screen flex items-center pr-2 pl-1 pt-1 justify-between">
{/*Left*/}
<div className="flex w-[180px] h-[40px] items-center justify-start">
<NavBar />
<HeaderItem src='/jumia-logo.png' path='/' />

</div>
{/*Right*/}
<div className="flex w-[180px] h-[40px] items-center justify-end">
<HeaderItem Icon={UserIcon} path='/' />
<HeaderItem Icon={ShoppingCartIcon} path='/' />


</div>
</header>

)
}
