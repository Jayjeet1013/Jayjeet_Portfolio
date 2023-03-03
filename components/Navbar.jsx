import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-20 z-10 fixed bg-white text-black duration-300 ease-in'>
     <div className='flex justify-between items-center w-full h-full max-w-screen-xl mx-auto p-4 '>
        <Link href='/#home'>
        <h1 className='text-3xl lg:text-4xl font-bold uppercase underline underline-offset-2 tracking-wider cursor-pointer'>
            Jayjeet
        </h1>
        </Link>
        <div>
            <ul className='hidden md:flex'>
                <Link href="/#home">
                    <li className='ml-10 text-sm uppercase cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider '>home</li>
                </Link>
                <Link href="/#home">
                    <li className='ml-10 text-sm uppercase cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider '>home</li>
                </Link>
            </ul>
        </div>
     </div>
    </div>
  
    );
};

export default Navbar
