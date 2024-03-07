import React from "react";
import Image from "next/image";
import { MdExpandMore } from "react-icons/md";

import asva from "../public/asva.png";
import genai from "../public/genai.png";
// import nftclubdao from '../public/nftclubdao.png';
import hashmind from "../public/hashmind.png";
import chaidapp from "../public/chaidapp.png";
import dep from "../public/dep.png";
import bit from "../public/bit.png";
import hash from "../public/hashstone.png";

const Portfolio = () => {
  const freelance = [
    {
      id: 1,
      title: "Asva Ventures",
      imageSrc: asva,
      href: "https://asva-venture.vercel.app/",
      description: "A BLog Website for Asva Ventures",
    },
    {
      id: 2,
      title: "DepNetwork",
      imageSrc: dep,
      href: "https://depnetwork.com/",
      description: "First native launchpad and Ecosystem for the DePin sector",
    },
    {
      id: 3,
      title: "BitFuge",
      imageSrc: bit,
      href: "https://bitfuge.xyz/",
      description: "Building DeFi Primitives On Bitcoin Ecosystem",
    },
    {
      id: 4,
      title: "HashstoneCapital",
      imageSrc: hash,
      href: "https://www.hashstonecapital.com/",
      description: "Digital Asset Fund in Public Markets",
    },
  ];
  const portfolios = [
    {
      id: 1,
      title: "Gen AI",
      imageSrc: genai,
      liveLink: "https://genai-xzgd.vercel.app/",
      githubLink: "https://github.com/Jayjeet1013/genai",
      description:
        "Gen Ai :- It is a simple langding page for a AI startup Project",
    },

    {
      id: 2,
      title: "Chai Dapp",
      imageSrc: chaidapp,
      liveLink: "https://chaipay.netlify.app/",
      description: "Use to transfer message and ether",
    },
  ];

  return (
    <div id="projects" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left ">
        <h2 className="text-5xl md:text-7xl  tracking-wider uppercase text-blue-500 font-bold">
          projects
        </h2>
        <p className="py-6  text-[24px] font-semibold text-blue-500">
          These are My Projects in Web2 and Web3.
        </p>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {portfolios.map(
            ({ id, title, imageSrc, liveLink, githubLink, description }) => (
              <div key={id}>
                <a href={liveLink} target="_blank" rel="noopener noreferrer">
                  <div className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md">
                    <Image
                      src={imageSrc}
                      alt={title}
                      className="rounded-md duration-200 h-80 hover:scale-110"
                    />
                    <h2 className="text-center text-base capitalize my-3 font-light duration-200  ">
                      {title}
                    </h2>
                    <p className="text-center text-gray-500 py-2">
                      {description}
                    </p>
                    <div className=" flex gap-4 items-center justify-center my-2">
                      <a
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p className="bg-green-600 py-2 px-3 rounded-lg hover:scale-110 duration-200 font-semibold text-white ">
                          Live Link
                        </p>
                      </a>
                      <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p className="bg-red-600 px-3 py-2 rounded-lg hover:scale-110 duration-200 font-semibold text-white">
                          GitHub Repository
                        </p>
                      </a>
                    </div>
                  </div>
                </a>
              </div>
            )
          )}
        </div>
        <div className="mt-12 mb-6 text-[24px] font-semibold text-blue-500">
          These are My Freelance Projects
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 ">
          {freelance.map(({ id, title, imageSrc, href, description }) => (
            <a key={id} href={href} target="_blank" rel="noopener noreferrer">
              <div className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md">
                <Image
                  src={imageSrc}
                  alt={title}
                  className="rounded-md duration-200 h-80 hover:scale-110"
                />
                <h2 className="text-center text-base capitalize my-3 font-light duration-200  ">
                  {title}
                </h2>
                <p className="text-center text-gray-500 py-2">{description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
