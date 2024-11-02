import Link from "next/link";
import React from "react";
import { MdExpandMore } from "react-icons/md";

const Me = () => {
  return (
    <div id="me" className="w-full bg-black text-white py-20">
      <div className="max-w-screen-xl mx-auto px-8 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl text-center font-bold text-white tracking-wider uppercase mb-8">
          Me
        </h2>

        <div className="bg-black border p-8 rounded-lg shadow-lg mb-12 ">
          <p className="text-lg md:text-xl leading-relaxed">
            Hey there! 👋 I&apos;m Jayjeet Kumar, a frontend developer with
            experience in building modern, responsive web applications using
            technologies like React.js, Next.js, and Tailwind CSS. I graduated
            in July 2024 with a B.Tech in Computer Science and Engineering from
            Amity University and have worked on several projects that have
            helped me improve my skills. 🌐✨
            <br />
            <br />
            💻 One project I&apos;m proud of is AuraUI, a UI component library that
            helps developers build websites faster by providing reusable,
            customizable components. I&apos;m also working on Web3Campus, a platform
            aimed at teaching people about decentralized web technologies, where
            I use Next.js and MongoDB for scalability and responsiveness. 🚀
            <br />
            <br />
            🔗 I&apos;ve gained practical experience through roles like the Software
            Engineer Fellow at Headstarter, where I built SaaS products and a
            fitness AI customer support agent. At Kyte, I worked as a Frontend
            Developer to create responsive UI components using Material UI and
            Tailwind CSS.
            <br />
            <br />
            🤖 I&apos;ve participated in hackathons, winning the Polygon
            Pool Prize at the Road to Web3 Hackathon. I&apos;m passionate about Web3
            and AI and always eager to learn new technologies.🌐💡
            <br />
            <br />
            🌈 In short, I&apos;m a frontend developer focused on building
            user-friendly, scalable applications, with a strong interest in new
            technologies and innovation. 🚀👨‍💻
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <Link href="/resume.pdf" target="_blank" download>
            <div className="group flex items-center gap-2 border text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
              Resume
              <span className="transition-transform transform group-hover:rotate-180 -rotate-90 duration-200 ease-in">
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
