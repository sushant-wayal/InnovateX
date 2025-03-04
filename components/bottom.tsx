import React from "react";
import Link from "next/link";
import { IconBrandFacebook, IconBrandTwitter, IconBrandYoutube } from "@tabler/icons-react";

const BottomProps: React.FC = () => {
  return (
    <div className="text-white flex flex-col min-h-screen overflow-hidden bg-[#090b0c] md:mt-16">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center pt-20 pb-32 relative px-4">
        <div className="absolute top-0 w-1/2 md:w-1/3 h-80 bg-gradient-to-r from-[#b446d3] to-[#1a83c9] rounded-b-full blur-2xl opacity-30"></div>

      {/* Semi-circle Shape */}
      <div
        data-rf="frame.layer"
        className="absolute flex flex-row justify-center items-center w-full max-w-screen aspect-[10/4] bottom-[80%] 
        bg-[#090b0c] rounded-b-[50%] border-b border-slate-600 
        md:aspect-[7/3] md:bottom-[50%] 
        lg:aspect-[10/4] lg:bottom-[70%]"
      ></div>

        {/* Logo */}
        <div className="relative z-10 mb-6">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[rgb(25,27,31)] bg-gradient-to-t from-[rgb(18,19,21)] to-[rgb(62,64,69)] rounded-[2rem] flex items-center justify-center border-2 border-white border-opacity-20">
            <div className="grid grid-cols-4 grid-rows-4 gap-0.5">
                <div className="h-4 w-4 rounded-full bg-white"></div>
                <div className="h-4 w-4 rounded-full "></div>
                <div className="h-4 w-4 rounded-full "></div>
                <div className="h-4 w-4 rounded-full bg-white"></div>
                <div className="h-4 w-4 rounded-full "></div>
                <div className="h-4 w-4 rounded-full bg-white"></div>
                <div className="h-4 w-4 rounded-full bg-white"></div>
                <div className="h-4 w-4 rounded-full "></div>
                <div className="h-4 w-4 rounded-full "></div>
                <div className="h-4 w-4 rounded-full bg-white"></div>
                <div className="h-4 w-4 rounded-full bg-white"></div>
                <div className="h-4 w-4 rounded-full "></div>
                <div className="h-4 w-4 rounded-full bg-white"></div>
                <div className="h-4 w-4 rounded-full "></div>
                <div className="h-4 w-4 rounded-full "></div>
                <div className="h-4 w-4 rounded-full bg-white"></div>
            </div>            
          </div>
        </div>


        {/* Heading & Subtext */}
        <h1 className="text-3xl md:text-5xl font-semibold relative z-10 leading-tight">
        Build & deploy AI-powered websites in minutes
        </h1>

        <p className="mt-4 text-gray-400 relative z-10 max-w-xl text-sm md:text-lg">
        Create and launch in one click—no coding needed.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 relative z-10">
          <button className="px-6 py-3 rounded-3xl bg-indigo-600 hover:bg-indigo-700 text-white">
          Get Started
          </button>
          <button className="px-6 py-3 rounded-3xl bg-gray-700 hover:bg-gray-600 text-white">
            Build Now
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto py-10 px-6 bg-[#090b0c] text-gray-400">
        <div className="flex flex-col md:flex-row justify-evenly items-center md:items-start gap-10">
          {/* Logo & Socials */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="w-8 h-8 rounded-md flex items-center justify-center">
              {/* <div className="grid grid-cols-3 grid-rows-3 gap-1">
                <div className="h-4 w-4 rounded-full bg-white"></div>
                <div className="h-4 w-4 rounded-full "></div>
                <div className="h-4 w-4 rounded-full bg-white"></div>
                <div className="h-4 w-4 rounded-full "></div>
                <div className="h-4 w-4 rounded-full bg-white"></div>
                <div className="h-4 w-4 rounded-full "></div>
                <div className="h-4 w-4 rounded-full bg-white"></div>
                <div className="h-4 w-4 rounded-full "></div>
                <div className="h-4 w-4 rounded-full bg-white"></div>
            </div> */}
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <Link href="#" className="text-white hover:text-indigo-400">
                <IconBrandFacebook size={24} />
              </Link>
              <Link href="#" className="text-white hover:text-indigo-400">
                <IconBrandTwitter size={24} />
              </Link>
              <Link href="#" className="text-white hover:text-indigo-400">
                <IconBrandYoutube size={24} />
              </Link>
            </div>
          </div>

          {/* Product Links */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-indigo-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-indigo-400">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/editor" className="hover:text-indigo-400">
                  Editor
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-indigo-400">
                Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-indigo-400">
                Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-10">
        {`"AI-powered websites, deployed in a click."`}
        <div>
        © 2025 InnovateX. All rights reserved.
        </div>
        </div>
      </footer>
    </div>
  );
};

export default BottomProps;
