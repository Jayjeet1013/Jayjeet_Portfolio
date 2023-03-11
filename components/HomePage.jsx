import React from 'react'
import heroImage from '../public/assets/heroImage.png'
import {MdExpandMore}  from 'react-icons/md'
import Image from 'next/image'
import Link from 'next/link'

const HomePage = () => {
  return (
    <div  id='home'  className='h-screen w-full text-center'>
     <div className='max-w-screen-xl mx-auto w-full h-full pt-24 p-4 flex flex-col justify-around items-center'  >
       <div className='w-64 h-64 mx-auto overflow-hidden rounded-xl'>
        <Image scr={heroImage} alt='me'/>
       </div>
       <h1 className=' uppercase font-bold text-gray-700 text-7xl '>Web3 Developer</h1>
       <p className='text-gray-600  text-xl max-w-sm mx-auto '> I am a  Fronted Developer || Smart contract developer || Web3 Developer </p>
     <Link href="/#me">
      <div className='gruop flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider '>
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