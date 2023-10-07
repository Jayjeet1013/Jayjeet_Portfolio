import React from 'react';
import Image from 'next/image';
import { MdExpandMore } from 'react-icons/md';

import asva from '../public/asva.png';
import genai from '../public/genai.png';
// import nftclubdao from '../public/nftclubdao.png';
import hashmind from '../public/hashmind.png';
import chaidapp from '../public/chaidapp.png';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: 'Gen AI',
      imageSrc: genai,
      href: 'https://genai-xzgd.vercel.app/',
      description: 'Gen Ai Landpage',
    },
    {
      id: 2,
      title: 'Asva Ventures',
      imageSrc: asva,
      href: 'https://asva-venture.vercel.app/',
      description: 'BLog Website ',
    },
    {
      id: 3,
      title: 'Chai Dapp',
      imageSrc: chaidapp,
      href: 'https://chaipay.netlify.app/',
      description: 'Use to transfer message and ether',
    },
    {
      id: 4,
      title: 'HashMind',
      imageSrc: hashmind,
      href: 'https://hashmind.vercel.app/',
      description: ' Startup project',
    },
  ];

  return (
    <div id='projects' className='w-full'>
      <div className='max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left '>
        <h2 className='text-5xl md:text-7xl  tracking-wider uppercase text-blue-500 font-bold'>projects</h2>
        <p className='py-4'>These are my some projects in Web2 and Web3.</p>
        <div className='max-w-5xl mx-auto grid md:grid-cols-2 gap-8'>
          {portfolios.map(({ id, title, imageSrc, href, description }) => (
            <a key={id} href={href} target='_blank' rel='noopener noreferrer'>
              <div className='cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md'>
                <Image src={imageSrc} alt={title} className='rounded-md duration-200 hover:scale-110' />
                <h2 className='text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4'>
                  {title}
                </h2>
                <p className='text-center text-red-300'>{description}</p>
              </div>
            </a>
          ))}
        </div>
        <div className='flex items-center justify-center'>
          {/* Your other code */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
