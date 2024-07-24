import React from "react";
import Image from "next/image";
import { MdExpandMore } from "react-icons/md";

import asva from "../public/asva.png";
import genai from "../public/genai.png";
// import nftclubdao from '../public/nftclubdao.png';

import chaidapp from "../public/chaidapp.png";
import dep from "../public/dep.png";
import bit from "../public/bit.png";
import hash from "../public/hashstone.png";
import evasha from "../public/evasha.png";
import nftclub from "../public/nftclub.png";
import auraui from "../public/auraui.png";
import cloth from "../public/cloth.png";
import hoobank from "../public/hoobank.png";
import ums from "../public/ums.png";
import web3campus from "../public/web3campus.png";
import repo from "../public/repo.png";
import notice from "../public/notice.png";
import spotify from "../public/spotify.png";
import esalink from "../public/esalink.png";
import superportal from "../public/superportal.png";
import hashmind from "../public/hashmind.png";
import tangido from "../public/tangido.png";

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
    {
      id: 5,
      title: "UMSKajri",
      imageSrc: ums,
      href: "https://umskajri.vercel.app/",
      description: "IT is a School website",
    },
    {
      id: 6,
      title: "SuperPortal",
      imageSrc: superportal,
      href: "https://superportal.ai/",
      description: "Shaping The Future Of Web3 And AI",
    },
    {
      id: 7,
      title: "Hashmind",
      imageSrc: hashmind,
      href: "https://www.hashmind.org/",
      description: "Convergence of Web3 & AI Venture Studio",
    },
    {
      id: 8,
      title: "Tangido",
      imageSrc: tangido,
      href: "https://tangido.com/",
      description: "Buy and Sell Institutional Grade Real-World Assets",
    },
  ];
  const portfolios = [
    {
      id: 1,
      title: "AuraUI",
      imageSrc: auraui,
      liveLink: "https://www.auraui.com/",
      githubLink:
        "https://github.com/Jayjeet1013/ai_summarizer_saas_1https://github.com/Shubham0850/auraui",
      description:
        "Stop Coding from Scratch - A UI Library for Every Skill Level.",
    },
    {
      id: 2,
      title: "Web3Campus",
      imageSrc: web3campus,
      liveLink: "https://web3-campus.vercel.app/",
      githubLink: "https://github.com/Jayjeet1013/Web3Campus",
      description: "Hub of web3 and Education platform",
    },
    {
      id: 3,
      title: "Gen AI",
      imageSrc: genai,
      liveLink: "https://genai-xzgd.vercel.app/",
      githubLink: "https://github.com/Jayjeet1013/genai",
      description:
        "Gen Ai :- It is a simple langding page for a AI startup Project",
    },

    {
      id: 4,
      title: "Cloth Shop",
      imageSrc: cloth,
      liveLink: "https://ecommerce-lilac-three.vercel.app/",
      githubLink: "https://github.com/Jayjeet1013/Ecommerce",
      description: "Landing page for online CLoth shops",
    },

    {
      id: 5,
      title: "NFTClub Dao",
      imageSrc: nftclub,
      liveLink: "https://nftclubdao.vercel.app/",
      githubLink: "https://github.com/Jayjeet1013/nftclubdao",
      description: "Landing page for a NFT Dao Project",
    },
    {
      id: 6,
      title: "Evasha",
      imageSrc: evasha,
      liveLink: "https://ecommerce-web-landing-page.vercel.app/",
      githubLink: "https://github.com/Jayjeet1013/Ecommerce-Web-Landing-page",
      description: "Landing page for Girls Clothes online shop",
    },
    {
      id: 7,
      title: "HooBank",
      imageSrc: hoobank,
      liveLink: "https://bank-modern-app-eta-seven.vercel.app/",
      githubLink: "https://github.com/Jayjeet1013/bank_modern_app",
      description: "Landing page for a Modern Bank",
    },

    {
      id: 8,
      title: "Chai Dapp",
      imageSrc: chaidapp,
      liveLink: "https://chaipay.netlify.app/",
      githubLink: "https://github.com/Jayjeet1013/CHai",
      description: "Use to transfer message and ether",
    },
    // {
    //   id: ,
    //   title: "AI_summarizer",
    //   imageSrc: aisum,
    //   liveLink: "https://ai-summarizer-saas-1.vercel.app/",
    //   githubLink:"https://github.com/Jayjeet1013/ai_summarizer_saas_1",
    //   description: "Summarize Articles with OpenAI GPT-4",
    // },

    {
      id: 9,
      title: "Decentralized Notice Board",
      imageSrc: notice,
      liveLink: "https://dnoticeboard.netlify.app/",
      githubLink: "https://github.com/Jayjeet1013/Decentralized-Notice-Board",
      description: "Landing Page for Decentralized Notice Board",
    },
  ];

  return (
    <div id="projects" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left ">
        <h2 className="text-5xl md:text-7xl  tracking-wider uppercase text-blue-500 font-bold">
          projects
        </h2>
        {/* <p className="py-6  text-[24px] font-semibold text-blue-500">
          Projects
        </p> */}
        <div className="max-w-5xl mt-6 mx-auto grid md:grid-cols-2 gap-8">
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
          Freelance Projects
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
