import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Navbar = () => {
  const [navigation, setNavigation] = useState(false);
  const [pageScroll, setPageScroll] = useState(false);

  useEffect(() => {
    const sub = window.addEventListener("scroll", () =>
      setPageScroll(window.scrollY >= 90)
    );
    return sub;
  }, []);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "projects",
    },
    {
      id: 3,
      link: "experience",
    },
    // {
    //   id: 4,
    //   link: "Resume",
    // },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div
      className={`w-full h-20 z-10 fixed bg-black text-white duration-300 ease-in ${
        pageScroll && "bg-blur "
      }`}
    >
      <div className="flex justify-between items-center w-full h-full max-w-screen-xl mx-auto p-4 ">
        <Link href="/#home">
          <h1 className="text-3xl hover:text-green-500 lg:text-4xl font-bold  underline underline-offset-2 tracking-wider cursor-pointer">
            JayKay
          </h1>
        </Link>
        <div>
          <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
              <Link key={id} href={`/#${link}`}>
                <li className="ml-10 text-md uppercase cursor-pointer duration-200 ease-out hover:scale-105 hover:text-green-500 tracking-wider ">
                  {link}
                </li>
              </Link>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              download
              rel="noreferrer noopener"
              className="ml-10 text-md uppercase cursor-pointer duration-200 ease-out hover:scale-105 hover:text-green-500 tracking-wider "
            >
              Hire Me
            </a>
          </ul>

          {!navigation && (
            <div
              className="md:hidden cursor-pointer "
              onClick={() => setNavigation(true)}
            >
              <FaBars size={30} />
            </div>
          )}
        </div>
      </div>
      <div
        className={
          navigation
            ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/70 backdrop-blur"
            : ""
        }
      >
        <div
          className={
            navigation
              ? " fixed left-0 top-0 w-4/5 h-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-10 ease-in duration-500"
              : "fixed top-0 left-[-100%] p-10 h-full ease-in duration-500 "
          }
        >
          <div>
            <div className="flex w-full items-center  justify-between ">
              <Link href="/#home">
                <h2
                  onClick={() => setNavigation(false)}
                  className="text-3xl font-bold uppercase underline underline-offset-2 tracking-wider cursor-pointer "
                >
                  JayKay
                </h2>
              </Link>
              <div
                onClick={() => setNavigation(false)}
                className="p-3 cursor-pointer"
              >
                <FaTimes size={30} />
              </div>
            </div>
          </div>

          <div className="mt-24 flex flex-col h-fit gap-20">
            <ul className="uppercase">
              {links.map(({ id, link }) => (
                <Link key={id} href={`/#${link}`}>
                  <li
                    onClick={() => setNavigation(false)}
                    className="py-4 text-2xl tracking-wider cursor-pointer"
                  >
                    {link}
                  </li>
                </Link>
              ))}
            </ul>
            <div>
              <div className="grid grid-cols-2 mx-auto w-4/5 gap-10 ">
                <Link
                  href="https://www.linkedin.com/in/jayjeet-kumar-71a7751ba/"
                  target="_blank"
                >
                  <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200  p-3 cursor-pointer ">
                    <FaLinkedin size={25} />
                  </div>
                </Link>
                <Link href="https://twitter.com/Jayjeet_100" target="_blank">
                  <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer ">
                    <FaTwitter size={25} />
                  </div>
                </Link>
                <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer ">
                  <FaInstagram size={25} />
                </div>
                <Link href="https://github.com/Jayjeet1013" target="_blank">
                  <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer ">
                    <FaGithub size={25} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
