import React from "react";
import Image from "next/image";
import { FaBriefcase } from "react-icons/fa";
import html from "../public/assets/experience/html.png";
import css from "../public/assets/experience/css.png";
import github from "../public/assets/experience/github.png";
import javascript from "../public/assets/experience/javascript.png";
import node from "../public/assets/experience/node.png";
import react from "../public/assets/experience/react.png";
import tailwind from "../public/assets/experience/tailwind.png";
import next from "../public/assets/experience/next.png";
import solidity from "../public/assets/experience/Solidity.png";
import material from "../public/assets/experience/material.png";
import chakra from "../public/assets/experience/chakra.jpeg";

const experiences = [
  { id: 1, title: "HTML", src: html },
  { id: 2, title: "CSS", src: css },
  { id: 3, title: "JavaScript", src: javascript },
  // { id: 4, title: "Solidity", src: solidity },
  { id: 5, title: "Git & GitHub", src: github },
  { id: 6, title: "React", src: react },
  { id: 7, title: "Node.js", src: node },
  { id: 8, title: "Next.js", src: next },
  { id: 9, title: "Tailwind CSS", src: tailwind },
  { id: 10, title: "Material UI", src: material },
  { id: 11, title: "Chakra UI", src: chakra },
];

const Experience = () => {
  return (
    <div id="experience" className="w-full bg-black text-white py-32">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <FaBriefcase className="inline-block mr-3 text-blue-500" />
          Experience
        </h2>
        <div className="space-y-12 mb-12">
          {/* AuraUI Experience */}
          <div className="bg-black border p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">AuraUI</h3>
            <p className="text-gray-100 font-semibold mb-2">
              Frontend Web Developer
            </p>
            <p className="text-gray-100 mb-4">May 2024 - Present</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Developed the entire website using Next.js, Nextra, and Tailwind
                CSS.
              </li>
              <li>Added multiple reusable components for other users.</li>
              <li>
                Ensured full responsiveness for a seamless user experience.
              </li>
            </ul>
          </div>

          {/* Kyte Experience */}
          <div className="bg-black border p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Kyte</h3>
            <p className="text-gray-100 font-semibold mb-2">
              Frontend Web Developer Intern
            </p>
            <p className="text-gray-100 mb-4">Dec 2023 - Feb 2024</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Lead efforts in responsive design, ensuring optimal user
                experiences.
              </li>
              <li>Utilized Tailwind CSS for styling.</li>
              <li>Built user interfaces with Material UI.</li>
            </ul>
          </div>

          {/* Headstarter Experience */}
          <div className="bg-black border p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Headstarter</h3>
            <p className="text-gray-100 font-semibold mb-2">
              Software Engineer Fellow
            </p>
            <p className="text-gray-100 mb-4">July 2024 - September 2024</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Built and deployed 5 projects in 5 weeks using Next.js,
                Firebase, Clerk, and Vercel, following agile methodologies.
              </li>
              <li>
                Collaborated with 3 fellows to develop a SaaS product for
                dynamic flashcard generation using the Gemini API, with paywall
                integration via Stripe API and authentication through Clerk.
              </li>
              <li>
                Developed an interactive fitness AI customer support agent using
                Next.js and the Gemini API in a team of 3.
              </li>
            </ul>
          </div>

          {/* Freelance Experience */}
          <div className="bg-black border p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">
              Freelance Frontend Developer
            </h3>
            <p className="text-gray-100 font-semibold mb-2">Freelancer</p>
            <p className="text-gray-100  mb-4">June 2023 - Present</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Developed and delivered various projects using Next.js, React,
                Tailwind CSS, Chakra UI, Material UI, CSS, JavaScript, and
                Airtable.
              </li>
              <li>
                Worked on creating responsive, user-friendly interfaces and
                dynamic web applications.
              </li>
              <li>
                Collaborated with clients to meet their requirements and
                provided ongoing support and maintenance.
              </li>
            </ul>
          </div>
        </div>

        {/* Skills Section */}
        <h2 className="text-3xl md:text-4xl mb-6 md:mb-12 tracking-wider uppercase text-white font-bold text-center">
          Skills
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
          {experiences.map(({ id, title, src }) => (
            <div
              key={id}
              className="flex flex-col items-center p-4 bg-black border rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 "
            >
              <Image
                src={src}
                width={60}
                height={60}
                alt={title}
                className="mb-2"
              />
              <h3 className="text-lg  font-medium ">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
