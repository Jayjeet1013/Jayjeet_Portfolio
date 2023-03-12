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
    <div id="experience">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left  ">
        <h2 className="text-5xl md:text-7xl  tracking-wider uppercase text-blue-500 font-bold">
          experience
        </h2>
        <p className="py-4">
          ipsum dolor sit amet consectetur adipisicing elit. Expedita inventore
          iure itaque natus facere excepturi nulla voluptates ipsam numquam
          sequi. Quam accusantium earum cumque!
        </p>

        <div className="grid lg:grid-cols-4 gap-8">
          {experiences.map(({ id, title, src }) => (
            <div
              key={id}
              className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 odd:shadow-orange-300 even:shadow-blue-400"
            >

      <Image src={src} width='64px' height='64px' alt={title} />
      <h2 className="font-light">{title}</h2>
  
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
