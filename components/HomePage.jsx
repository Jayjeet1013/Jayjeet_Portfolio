import React from 'react'
import Image from 'next/image'
import heroImage from '../public/assets/file.png'
import {MdExpandMore}  from 'react-icons/md'
import Link from 'next/link'


const HomePage = () => {
  return (
      <div  id='home'  className=' w-full text-center'>
    <div className='max-w-screen-xl  mx-auto w-full   p-2 flex flex-col justify-around items-center'  > 
        <div className='w-56 h-44 md:w-96 md:h-72 mx-auto mt-28 md:mt-48'>
       <Image className='rounded-full ' src={heroImage}/>
       </div> 
       <h1 className=' uppercase md:mt-40 mt-20 font-bold text-gray-700 text-3xl md:text-7xl'>Frontend Developer</h1>
       <p className='text-gray-600  text-2xl mt-12 '>  Frontend Developer || AI || Web3.0  </p>
     <Link href="/#me">
      <div className='gruop hover:scale-105 duration-200 flex items-center mt-16 justify-center  bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer'>
        Know more 
        <span className='-rotate-90 duration-100 ease-in group hover:rotate-0'>
          <MdExpandMore size={25}/>
        </span>
      </div>
     </Link>
      </div> 
    </div> 
    
  )
}

export default HomePage 