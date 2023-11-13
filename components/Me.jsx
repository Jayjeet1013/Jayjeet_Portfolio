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
          Hi, I am Jayjeet Kumar from Bihar. 
Currently, I am pursuing B.Tech in computer science and trying to learn & explore Web3.O .....
<br/><br/>
 Techs:- 
Web3 Development.
Web development,
Blockchain Development, Cryptography.
<br/><br/>
Participated in Many Web3 Hakhathons and won some of them.
I have attended many Web3 Events.
<br/>
Technologies used:-
 Html, CSS, Javascript, React.js, Next.js, and Tailwind CSS.
 Solidity, Hardhat, truffle, ether.js, Web3.js,Node.js and Remix ID.
Git & Github, IPFS, Chainling, Alchemy, etc.
          </p>
         
        </div>

       <div className="flex items-center justify-center gap-10">
        <Link href='/resume.pdf' download={true}>
        <div className='grou flex items-center  justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer'>
        Resume
        <span className='-rotate-90 duration-100 ease-in group hover:rotate-0'>
          <MdExpandMore size={25}/>
        </span>
      </div>
        </Link>
        <Link href='/#portfolio' download={true}>
      
        </Link>

       </div>

      </div>
    </div>
  );
};

export default Me;
