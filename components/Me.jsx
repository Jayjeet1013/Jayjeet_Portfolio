import Link from "next/link";
import React from "react";
import { MdExpandMore } from "react-icons/md";

const Me = () => {
  return (
    <div id="me" className="w-full bg-black text-white py-24">
      <div className="max-w-screen-xl mx-auto px-8 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl font-bold text-green-500 tracking-wider uppercase mb-8">
          Me
        </h2>

        <div className="bg-green-900 p-8 rounded-lg shadow-lg mb-12 ">
          <p className="text-lg md:text-xl leading-relaxed">
            Hey there! 👋 I&apos;m Jayjeet Kumar, a passionate frontend
            developer with a knack for crafting seamless user experiences. 🌐✨
            <br />
            <br />
            💻 Currently honing my skills in the ever-evolving world of frontend
            development, I&apos;ve got an insatiable curiosity for cutting-edge
            technologies. 🚀
            <br />
            <br />
            🔗 Exciting times ahead as I embark on a journey to unravel the
            mysteries of Blockchain, Web3, and AI. 🌟 Eager to merge the worlds
            of sleek design and innovative tech to create digital experiences
            that leave a lasting impression.
            <br />
            <br />
            🤖 Join me as I delve into the realms of artificial intelligence,
            explore the decentralized wonders of Web3, and decipher the secrets
            of blockchain technology. 🌐💡
            <br />
            <br />
            🌈 Always up for a challenge, I&apos;m on a mission to blend
            creativity with the power of emerging technologies. Let&apos;s
            connect, collaborate, and build the future together! 🚀👨‍💻
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <Link href="/resume.pdf" target="_blank" download>
            <div className="group flex items-center gap-2 bg-green-900 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
              Resume
              <span className="transition-transform transform group-hover:rotate-0 -rotate-90 duration-200 ease-in">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
          <Link href="/#projects">
            <div className="group flex items-center gap-2 bg-green-900 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
              Portfolio
              <span className="transition-transform transform group-hover:rotate-0 -rotate-90 duration-200 ease-in">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Me;
