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
import fitnessai from "../public/fitnessai.png";
import pantry from "../public/pantry.png";

const Portfolio = () => {
  const freelance = [
    {
      id: 1,
      title: "Asva Ventures",
      imageSrc: asva,
      href: "https://asva-venture.vercel.app/",
      description: "A Blog Website for Asva Ventures",
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
      description: "It is a School website",
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
      githubLink: "https://github.com/Shubham0850/auraui",
      description:
        "Stop Coding from Scratch - A UI Library for Every Skill Level.",
    },
    {
      id: 2,
      title: "Web3Campus",
      imageSrc: web3campus,
      liveLink: "https://web3-campus.vercel.app/",
      githubLink: "https://github.com/Jayjeet1013/Web3Campus",
      description:
        "Web3 Campus is an educational platform dedicated to teaching Web3.",
    },
    {
      id: 3,
      title: "FitnessAI",
      imageSrc: fitnessai,
      liveLink: "https://fitness-ai-theta.vercel.app/",
      githubLink: "https://github.com/Jayjeet1013/FitnessAI",
      description:
        "Fitness AI is an intelligent health application that helps users achieve their wellness goals.",
    },
    {
      id: 4,
      title: "Pantry Tracker",
      imageSrc: pantry,
      liveLink: "https://pantry-trackerr.vercel.app/",
      githubLink: "https://github.com/Jayjeet1013/inventory_management",
      description:
        "Pantry Tracker is a web application designed to efficiently manage and track your pantry inventory.",
    },
    {
      id: 5,
      title: "Gen AI",
      imageSrc: genai,
      liveLink: "https://genai-xzgd.vercel.app/",
      githubLink: "https://github.com/Jayjeet1013/genai",
      description: "Gen Ai: A simple landing page for an AI startup project.",
    },

    {
      id: 6,
      title: "Cloth Shop",
      imageSrc: cloth,
      liveLink: "https://ecommerce-lilac-three.vercel.app/",
      githubLink: "https://github.com/Jayjeet1013/Ecommerce",
      description: "Landing page for an online cloth shop.",
    },

    {
      id: 7,
      title: "NFTClub Dao",
      imageSrc: nftclub,
      liveLink: "https://nftclubdao.vercel.app/",
      githubLink: "https://github.com/Jayjeet1013/nftclubdao",
      description: "Landing page for an NFT Dao project.",
    },
    {
      id: 8,
      title: "Evasha",
      imageSrc: evasha,
      liveLink: "https://ecommerce-web-landing-page.vercel.app/",
      githubLink: "https://github.com/Jayjeet1013/Ecommerce-Web-Landing-page",
      description: "Landing page for a girls' clothes online shop.",
    },
    {
      id: 9,
      title: "HooBank",
      imageSrc: hoobank,
      liveLink: "https://bank-modern-app-eta-seven.vercel.app/",
      githubLink: "https://github.com/Jayjeet1013/bank_modern_app",
      description: "Landing page for a modern bank.",
    },

    {
      id: 10,
      title: "Chai Dapp",
      imageSrc: chaidapp,
      liveLink: "https://chaipay.netlify.app/",
      githubLink: "https://github.com/Jayjeet1013/CHai",
      description: "Used to transfer messages and ether.",
    },

    {
      id: 11,
      title: "Decentralized Notice Board",
      imageSrc: notice,
      liveLink: "https://dnoticeboard.netlify.app/",
      githubLink: "https://github.com/Jayjeet1013/Decentralized-Notice-Board",
      description: "Landing page for a decentralized notice board.",
    },
  ];

  return (
    <div id="projects" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        {/* <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
          Projects
        </h2> */}

        {/* Personal Projects */}
        <h3 className="text-3xl md:text-5xl tracking-wide uppercase text-gray-700 font-semibold mt-16">
          Personal Projects
        </h3>
        <div className="mt-6 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolios.map(
            ({ id, title, imageSrc, liveLink, githubLink, description }) => (
              <div
                key={id}
                className="flex flex-col justify-between bg-white p-4 rounded-lg shadow-md hover:shadow-xl duration-300 transform hover:scale-105"
              >
                <a href={liveLink} target="_blank" rel="noopener noreferrer">
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src={imageSrc}
                      alt={title}
                      className="rounded-lg duration-200 hover:scale-110"
                      width={400}
                      height={250}
                      layout="responsive"
                    />
                  </div>
                </a>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-gray-600">{description}</p>
                </div>
                <div className="flex justify-center mt-4 space-x-4">
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                  >
                    Visit
                  </a>
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900"
                  >
                    Code
                  </a>
                </div>
              </div>
            )
          )}
        </div>

        {/* Freelance Projects */}
        <h3 className="text-3xl  md:text-5xl tracking-wide uppercase text-gray-700 font-semibold mt-20">
          Freelance Projects
        </h3>
        <div className="mt-6 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {freelance.map(({ id, title, imageSrc, href, description }) => (
            <div
              key={id}
              className="flex flex-col justify-between bg-white p-4 rounded-lg shadow-md hover:shadow-xl duration-300 transform hover:scale-105"
            >
              <a href={href} target="_blank" rel="noopener noreferrer">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={imageSrc}
                    alt={title}
                    className="rounded-lg duration-200 hover:scale-110"
                    width={400}
                    height={250}
                    layout="responsive"
                  />
                </div>
              </a>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-gray-600">{description}</p>
              </div>
              <div className="flex justify-center mt-4 space-x-4">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                >
                  Visit
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
