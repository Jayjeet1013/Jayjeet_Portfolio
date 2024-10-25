import React from "react";
import Image from "next/image";
import contactus from "../public/assets/contactus.jpg";
import Link from "next/link";
import { FaInstagram, FaGithub, FaTwitter, FaLinkedin, FaGitSquare, FaGithubSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="w-full bg-black text-white py-16">
      <div className="max-w-screen-xl mx-auto px-8 md:px-16">
        <h2 className="text-5xl md:text-7xl  font-bold  tracking-wider uppercase text-center mb-12">
          Contact
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 rounded-xl bg-black border p-6 shadow-lg ">
            <Image
              src={contactus}
              alt="Contact Us"
              className="rounded-xl mb-4"
              layout="responsive"
              width={500}
              height={300}
            />
            <p className="text-lg  md:text-xl">
              For any queries, contact us here:
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-6">
              <Link
                href="https://www.linkedin.com/in/jayjeet-kumar-71a7751ba/"
                target="_blank"
              >
                <div className="flex items-center justify-center bg-blue-600 rounded-full shadow-md p-3 transition-transform transform hover:scale-110 duration-300 ease-in-out cursor-pointer">
                  <FaLinkedin size={30} />
                </div>
              </Link>
              <Link href="https://twitter.com/Jayjeet_100" target="_blank">
                <div className="flex items-center justify-center bg-blue-400 rounded-full shadow-md p-3 transition-transform transform hover:scale-110 duration-300 ease-in-out cursor-pointer">
                  <FaTwitter size={30} />
                </div>
              </Link>

              <Link href="https://github.com/Jayjeet1013" target="_blank">
                <div className="flex items-center justify-center bg-gray-800 rounded-full shadow-md p-3 transition-transform transform hover:scale-110 duration-300 ease-in-out cursor-pointer">
                  <FaGithub size={30} />
                </div>
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2 bg-black border rounded-xl p-6 shadow-lg ">
            <h3 className="text-xl font-bold  mb-4">Send Us a Message</h3>
            <form
              action="https://getform.io/f/3db9af78-b338-4bbf-ae98-d6edc0ce7744"
              method="POST"
            >
              <div className="space-y-4">
                <div>
                  <label className="block text-md font-normal text-slate-200">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full border-2 text-black border-blue-200 rounded-lg p-3 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-md font-normal text-slate-200">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    className="w-full border-2 text-black border-blue-200 rounded-lg p-3 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-md font-normal text-slate-200">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full border-2 text-black border-blue-200 rounded-lg p-3 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-md font-normal text-slate-200">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="6"
                    className="w-full border-2 text-black border-blue-200 rounded-lg p-3 focus:outline-none focus:border-blue-500"
                  ></textarea>
                </div>
              </div>

              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  className="group bg-blue-200 text-green-900 px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer transition-transform transform hover:scale-105 duration-300 ease-in-out"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
