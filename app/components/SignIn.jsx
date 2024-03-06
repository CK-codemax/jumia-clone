'use client'
import { signIn } from "next-auth/react"
import Image from "next/image";

export default function SignIn() {
  return (
    <div className="w-full h-screen flex items-center flex-col space-y-4 justify-center">

    
      
         <Image className='w-[80px] mb-3 sm:w-[150px] auto' src='/jumia-logo.png' width={100} height={100} alt="jumia-logo" />
   
   

    <form className="flex flex-col space-y-3 w-[85%] sm:w-[450px] items-center justify-center">
       <div className="flex flex-col w-full items-start justify-start space-y-1">
           <label className="font-semibold text-left" htmlFor="email">Your email</label>
           <input className="border border-gray-700 w-full p-2 px-4 rounded-md text-black placeholder:text-gray-500 outline-blue-500" id="email" placeholder="Enter your email" type="text" />
       </div>

       <div className="flex flex-col items-start justify-start  space-y-1 w-full">
           <label className="font-semibold text-left" htmlFor="email">Your password</label>
           <input className="border border-gray-700 w-full p-2 px-4 rounded-md text-black placeholder:text-gray-500 outline-blue-500" id="email" placeholder="Enter your password" type="text" />
       </div>

        <button className="w-full p-2 px-4 bg-[#f68b1e] rounded-md text-gray-100 hover:font-semibold  hover:text-white xl:hover:scale-105 transition-all duration-300 ease-in-out">Login</button>
    </form>

    <button className="w-[85%] sm:w-[450px] p-2 px-4 rounded-md justify-center text-gray-800 flex space-x-2 border-gray-800 border hover:bg-gray-200 hover:border-black bg-transparent hover:text-black xl:hover:scale-105 transition-all duration-300 ease-in-out" onClick={() => signIn('google')}>
        <Image className='w-[24px] auto' src='/google.png' width={100} height={100} alt="jumia-logo" />
        <p className="font-bold">Sign in with Google</p>
    </button>



    </div>
  )
}
