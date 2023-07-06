import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import { MdExpandMore } from 'react-icons/md';

import installNode from '../public/assets/portfolio/installNode.png'
import reactWeather from '../public/assets/portfolio/cahidapp.jpeg'


const Portfolio = () => {

 const portfolios = [
        {
                id:1,
                title:"react weather app",
                imageSrc: reactWeather,
                href: "https://chaipay.netlify.app",
                description:"use for give the details of weather made  ",
        },
        {
                id:2,
                title:"installNode",
                imageSrc:installNode,
                href: "https://www.youtube.com/watch?v=zokKTsRx7QA",
                description:" used to make backed of website",
        },
 ];

        return <div id='projects' className='w-full'>
                <div className='max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left  '>
                        <h2 className="text-5xl md:text-7xl  tracking-wider uppercase text-blue-500 font-bold" >projects</h2>
                        <p className='py-4'>
                                These are my some projects in Web2 and Web3.
                        </p>
                        <div className='max-w-5xl mx-auto grid md:grid-cols-2 gap-8'>

                                {portfolios.map(({id,title,imageSrc,href,description})=>(
                                       <Link key={id} href={`/${href}`} > 

                                       <div className='cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md'>
                                         <Image src={imageSrc} alt={title} className='rounded-md duration-200 hover:scale-110'/>
                                        <h2 className='text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4'>
                                                {title}
                                        </h2>
                                        <p className='text-center text-red-300'>{description}</p>
                                       </div>

                                       </Link>
                                 ))}

                        </div>
                        <div className='flex items-center justify-center'>

                        {/* <Link href="/portfolio">
      <div className='gruop flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer'>
        All Projects 
        <span className='-rotate-90 duration-100 ease-in group hover:translate-x-5'>
          <MdExpandMore size={25}/>
        </span>
      </div>
     </Link> */}
                                  
                        </div>
                </div>
        </div>

}

export default Portfolio;