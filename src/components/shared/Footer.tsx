import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";


const Footer = () => {
  return (
    <footer className="bg-[#151b23] border-t border-[#242b35] mt-auto">
        <div className="  max-w-7xl mx-auto  py-8 ">
         
           <Link href="/" className="flex items-center gap-2 py-5">
               <Image
                src={logo}
                alt="FITLOG"
                width={32}
                height={32}
                className="object-contain"
               />

                <span className="text-white text-lg font-bold tracking-wide">
                FITLOG
               </span>
              </Link>

                <p className="text-gray-600 text-xs  text-right">
               © 2026 FitLog — Workout Library. Train hard, log honest.
               </p>

        </div>
    </footer>
  );
};

export default Footer;