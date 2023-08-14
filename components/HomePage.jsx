import React from 'react'
import Image from 'next/image'
import heroImage from '../public/assets/heroimage.png'
import {MdExpandMore}  from 'react-icons/md'

import Link from 'next/link'




const HomePage = () => {
  return (
      <div  id='home'  className='h-screen w-full text-center'> 
    <div className='max-w-screen-xl mx-auto w-full h-full pt-24 p-2 flex flex-col justify-around items-center'  > 
        <div className='w-72 h-72 mx-auto '>
       <Image className='rounded-3xl ' src={heroImage}/>
       </div> 
       <h1 className=' uppercase font-bold text-gray-700 text-3xl md:text-7xl'>Frontend Developer</h1>
       <p className='text-gray-600  text-2xl  '>  Frontend Developer || Smart Contract || Blockchain || Web3.0  </p>
     <Link href="/#me">
      <div className='gruop flex items-center justify-center  bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer'>
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