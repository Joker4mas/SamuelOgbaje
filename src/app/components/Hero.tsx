"use client";
import Link from "next/link";
import Image from "next/image";
import SamuelPicture from "@/app/public/samuelx.png";
import { motion } from "framer-motion";
import TextAnimateHero from "./TextAnimatHero";

function page() {
  return (
    <div className=" grid grid-cols-1 justify-between md:grid-cols-2 gap-8 mb-12 p-4">
      <div className="p-2 items-center text-center  md:p-8 md:ml-24">
        <h1 className="text-3xl font-bold text-center md:text-start my-4">
          Hello 👋, <br />
          <br />
          I’m Samuel Ogbaje, <br />
        </h1>
        <TextAnimateHero />
        <div className=" text-center md:text-start">
          <motion.button
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            whileHover={{ scale: 1.3, originX: 0, color: "#f01e20" }}
            // transition={{ type: "spring", stiffness: 300 }}
            transition={{ type: "spring", delay: 0.5 }}
            className="p-4 bg-green-800 rounded-md text-gray-200 hover:text-white mt-6"
          >
            <Link href="/contact">Let’s connect 😉 </Link>
          </motion.button>
        </div>
      </div>

      <div className=" py-4 mx-auto  items-center md:mx-0 md:ml-24">
        <motion.div className="relative w-80 h-80  rounded-full bg-gradient-to-b from-teal-600 overflow-hidden text-center items-center md:ml-40 ">
          <Image
            src={SamuelPicture}
            alt="Samuel's Snapchat profile picture"
            width={300}
            height={300}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default page;
