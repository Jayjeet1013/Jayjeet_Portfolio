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
          <p className="py-10 max-w-2xl mx-auto">
            Hey there! 👋 I&apos;m Jayjeet Kumar, a passionate frontend developer
            with a knack for crafting seamless user experiences. 🌐✨
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
            🌈 Always up for a challenge, I&apos;m on a mission to blend creativity
            with the power of emerging technologies. Let&apos;s connect, collaborate,
            and build the future together! 🚀👨‍💻
          </p>
        </div>

        <div className="flex items-center justify-center gap-10">
          <Link href="/resume.pdf" target="_blank" download={true}>
            <div className="grou flex items-center  hover:scale-105 duration-200 justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              Resume
              <span className="-rotate-90 duration-100 ease-in group hover:rotate-0">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
          <Link href="/#portfolio" download={true}></Link>
        </div>
      </div>
    </div>
  );
};

export default Me;
