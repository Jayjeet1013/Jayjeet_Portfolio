import React from "react";
import Image from "next/image";

import html from "../public/assets/experience/html.png";
import css from "../public/assets/experience/css.png";
import github from "../public/assets/experience/github.png";
import javascript from "../public/assets/experience/javascript.png";
import node from "../public/assets/experience/node.png";
import react from "../public/assets/experience/react.png";
import tailwind from "../public/assets/experience/tailwind.png";
import next from "../public/assets/experience/next.png";
import solidity from "../public/assets/experience/Solidity.png";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Html",
      src: html,
    },
    {
      id: 2,
      title: "Css",
      src: css,
    },
    {
      id: 3,
      title: "Javascript",
      src: javascript,
    },
    {
      id: 4,
      title: "Solidity",
      src: solidity,
    },
    {
      id: 5,
      title: "Git & Github",
      src: github,
    },
    {
      id: 6,
      title: "React",
      src: react,
    },
    {
      id: 7,
      title: "Node",
      src: node,
    },
    {
      id: 8,
      title: "Next",
      src: next,
    },
   
    {
      id: 9,
      title: "Tailwind",
      src: tailwind,
    },
  ];

  return (
    <div id="experience" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 md:px-8 py-16 text-start md:text-left  ">
        <h2 className="text-3xl md:text-7xl  tracking-wider uppercase text-blue-500 font-bold">
          experience
        </h2>
     
         <h2 className="py-4">Know These Techs</h2>
        <div className="grid lg:grid-cols-6 gap-4">
          {experiences.map(({ id, title, src }) => (
            <div
              key={id}
              className="flex flex-col lg:flex-col gap-2 lg:gap-2 items-center  p-2 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 odd:shadow-orange-300 even:shadow-blue-400"
            >

      <Image src={src} width={50} height={100} alt={title} />
      <h2 className="font-light p-2">{title}</h2>
  
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
