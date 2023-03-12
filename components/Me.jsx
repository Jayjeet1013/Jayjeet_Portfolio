import Link from "next/link";
import React from "react";
import { MdExpandMore } from "react-icons/md";
const Me = () => {
  return (
    <div id="me" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left  ">
        <h2 className="text-5xl md:text-7xl  tracking-wider uppercase text-blue-500 font-bold">
          me
        </h2>
        <div className="shadow-xl shadow-blue-300 my-8 px-8">
          <p className="py-4 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            voluptatibus est vel nulla sed facilis alias delectus quas
            perspiciatis doloribus? Quaerat at laborum inventore deserunt
            incidunt consequatur sit nostrum dolorem quis repellat? Deserunt
            quia architecto, repudiandae perspiciatis dolore necessitatibus
            ipsam dolorem, quod qui praesentium maxime.
          </p>
          <p className="py-4 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            voluptatibus est vel nulla sed facilis alias delectus quas
            perspiciatis doloribus? Quaerat at laborum inventore deserunt
            incidunt consequatur sit nostrum dolorem quis repellat? Deserunt
            quia architecto, repudiandae perspiciatis dolore necessitatibus
            ipsam dolorem, quod qui praesentium maxime.
          </p> 
        </div>

       <div className="flex items-center justify-center gap-10">
        <Link href='/resume.pdf' download={true}>
        <div className='gruop flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer'>
        Resume
        <span className='-rotate-90 duration-100 ease-in group hover:rotate-0'>
          <MdExpandMore size={25}/>
        </span>
      </div>
        </Link>
        <Link href='/#portfolio' download={true}>
        <div className='gruop flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer '>
        My Portfolio
        <span className='-rotate-90 duration-100 ease-in group hover:-rotate-180'>
          <MdExpandMore size={25}/>  
        </span>
      </div>
        </Link>

       </div>

      </div>
    </div>
  );
};

export default Me;
