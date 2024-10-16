import React from "react";
import Image from "next/image";
import heroImage from "../public/assets/avatar.webp";
import { MdExpandMore } from "react-icons/md";
import Link from "next/link";

const HomePage = () => {
  return (
    <div
      id="home"
      className="w-full  lg:min-h-screen bg-black text-center pt-20 flex items-center justify-center"
    >
      <div className="max-w-screen-xl mx-auto p-4 md:p-8 flex flex-col items-center text-white">
        <div className="relative w-56 h-[220px] md:w-96 md:h-[380px] mx-auto overflow-hidden rounded-full">
          <div className="absolute inset-0 opacity-40 rounded-full"></div>
          <Image
            src={heroImage}
            alt="Hero Image"
            height={800}
            width={800}
            className="transform border scale-100  transition-transform duration-500 ease-in-out group-hover:scale-105 rounded-full"
          />
          <div className="absolute inset-0 border-4 border-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <h1 className="mt-12 md:mt-24 text-3xl md:text-6xl font-bold uppercase tracking-wide">
          Frontend Developer
        </h1>
        <p className="mt-6 md:mt-12 text-lg md:text-2xl text-gray-300">
          Building{" "}
          <Link
            href={"https://auraui.com/"}
            target="_blank"
            className="font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-300"
            passHref
          >
            AuraUI
          </Link>{" "}
          || Frontend Developer || Web3 & AI
        </p>
        <Link
          href="/#me"
          className="mt-12 bg-blue-600 text-white px-6 py-3 font-bold uppercase
          rounded-md tracking-wider flex items-center justify-center group
          transition-transform duration-200 ease-in-out hover:scale-105"
          passHref
        >
          Know More
          <MdExpandMore
            size={25}
            className="ml-2 transform -rotate-90 group-hover:rotate-0 transition-transform duration-300 ease-in-out"
          />
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
