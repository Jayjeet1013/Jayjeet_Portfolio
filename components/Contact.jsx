import React from "react";
import contactus from "../public/assets/contactus.jpg";
import Image from "next/image";
import Link from "next/link";
import {
  FaBars,
  FaTimes,
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left  ">
        <h2 className="text-5xl md:text-7xl  tracking-wider uppercase text-blue-500 font-bold">
          Contact
        </h2>

        <div className="flex flex-col md:flex-row gap-8 shadow-xl shadow-blue-300 bg-white mt-4">
          <div className="w-full md:w-1/2 h-full rounded-xl p-4">
            <Image
              src={contactus}
              alt="man with laptop"
              className="rounded-xl"
            />
            <p className="pt-2 pb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              neque, harum iusto fugit placeat dignissimos quia nihil,
              reprehenderit deleniti optio alias nulla voluptates.
            </p>

            <div className="grid grid-cols-2 mx-auto w-4/5 gap-10 ">
              <Link href='https://www.linkedin.com/in/jayjeet-kumar-71a7751ba/'>
              <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200  p-3 cursor-pointer ">
                <FaLinkedin size={25} />
             
              </div>
              </Link>
              <Link href='https://twitter.com/Jayjeet_100'>
              <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer ">
                <FaTwitter size={25} />
              </div>
              </Link>
              <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer ">
                <FaInstagram size={25} />
              </div>
              <Link href='https://github.com/Jayjeet1013'>
              <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer ">
                <FaGithub size={25} />
              </div>
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2 h-full rounded-xl p-4">
            <div className="p-4 text-left">
              <form action="https://getform.io/f/3db9af78-b338-4bbf-ae98-d6edc0ce7744" method="POST">
                <div className="grid md:grid-cols-2 gap-4  w-full  py-2 ">
                  <div className="flex flex-col">
                    <label className="capitalize text-sm py-2 text-slate-600  font-light ">
                      name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="border-2 rounded-lg  p-3 flex focus:outline-none border-blue-200 "
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="capitalize text-sm py-2 text-slate-600  font-light ">
                      Phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      className="border-2 rounded-lg  p-3 flex focus:outline-none border-blue-200 "
                    />
                  </div>
                  <div className="flex flex-col col-span-2">
                    <label className="capitalize text-sm py-2 text-slate-600  font-light ">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="border-2 rounded-lg  p-3 flex focus:outline-none border-blue-200 "
                    />
                  </div>
                  <div className="flex flex-col col-span-2">
                    <label className="capitalize text-sm py-2 text-slate-600  font-light ">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows="10"
                      className="border-2 rounded-lg  p-3 flex focus:outline-none border-blue-200 "
                    ></textarea>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                 <button className="group my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200 ">Send message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
