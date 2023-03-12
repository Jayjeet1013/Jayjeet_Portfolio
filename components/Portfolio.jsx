import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import { MdExpandMore } from 'react-icons/md';

import installNode from '../public/portfolio/installNode.png'
import reactWeather from '../public/portfolio/reactWeather.png'


const Portfolio = () => {

 const portfolios = [
        {
                id:1,
                title:"react weather app",
                imageSrc: reactWeather,
                url:"react-weather",
        },
        {
                id:2,
                title:"installNode",
                imageSrc:installNode,
                url:"installNode",
        },
 ];

        return <div id='portfolio' className='w-full'>
                <div className='max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left  '>
                        <h2 className="text-5xl md:text-7xl  tracking-wider uppercase text-blue-500 font-bold" >portfolio</h2>
                        <p className='py-4'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita inventore iure itaque natus facere excepturi nulla voluptates ipsam numquam sequi. Quam accusantium earum cumque!
                        </p>
                        <div className='max-w-5xl mx-auto grid md:grid-cols-2 gap-8'>

                                {portfolios.map(({id,title,imageSrc,url})=>(
                                       <Link key={id} href={`/portfolio/${url}`}>

                                       <div className='cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md'>
                                         <Image src={imageSrc} alt={title} className='rounded-md duration-200 hover:scale-110'/>
                                        <h2 className='text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4'>
                                                {title}
                                        </h2>
                                       </div>

                                       </Link>
                                 ))}

                        </div>
                        <div className='flex items-center justify-center'>

                        <Link href="/portfolio">
      <div className='gruop flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer'>
        All Projects 
        <span className='-rotate-90 duration-100 ease-in group hover:translate-x-5'>
          <MdExpandMore size={25}/>
        </span>
      </div>
     </Link>
                                  
                        </div>
                </div>
        </div>

}

export default Portfolio;