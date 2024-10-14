"use client";
import Image from "next/image";
import JsLogo from "@/app/public/js.svg";
import NextLogo from "@/app/public/nextjs.svg";
import ReactLogo from "@/app/public/react.svg";
import TailwindLogo from "@/app/public/tailwind.svg";
import VueLogo from "@/app/public/vue.svg";
import NodeLogo from "@/app/public/nodejs.svg";
import { motion } from "framer-motion";

function Skills() {
  return (
    <div className=" p-4 items-center text-center bg-slate-700">
      <h1 className="my-8 font-bold  text-3xl">Stacks</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 text-gray-400 items-center h-screen">
        <motion.div
          whileHover={{ scale: 1.3 }}
          transition={{ type: "bounce" }}
          className="flex flex-col  text-center items-center mx-auto p-4 my-4 rounded-md shadow-lg bg-base-300 poppins cursor-pointer"
        >
          <h3 className="my-4 font-bold">React</h3>
          <Image src={ReactLogo} alt="react-svg" width={125} height={100} />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.3 }}
          transition={{ type: "bounce", stiffness: 200 }}
          className="flex flex-col  text-center bg-base-50  items-center mx-auto p-4 my-4 rounded-lg shadow-md cursor-pointer"
        >
          <h3 className="my-4 font-bold">Nextjs</h3>
          <Image src={NextLogo} alt="tailwindCss" width={125} height={100} />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.3 }}
          transition={{ type: "bounce" }}
          className="flex flex-col  text-center items-center mx-auto p-4 my-4 rounded-md shadow-lg bg-base-30 cursor-pointer"
        >
          <h3 className="my-4 font-bold">Vue</h3>
          <Image src={VueLogo} alt="tailwindCss" width={125} height={100} />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.3 }}
          transition={{ type: "bounce" }}
          className="flex flex-col  text-center items-center mx-auto p-4 my-4 rounded-md shadow-lg bg-base-300 cursor-pointer"
        >
          <h3 className="my-4 font-bold">Node.js</h3>
          <Image src={NodeLogo} alt="tailwindCss" width={125} height={100} />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.3 }}
          transition={{ type: "bounce" }}
          className="flex flex-col   text-center items-center mx-auto p-4 my-4 rounded-md shadow-lg cursor-pointer"
        >
          <h3 className="my-4 font-bold">Tailwind CSS</h3>
          <div>
            <Image
              src={TailwindLogo}
              alt="tailwindCss"
              width={125}
              height={100}
              //   className="bg-slate-300"
            />
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.3 }}
          transition={{ type: "bounce" }}
          className="flex flex-col  text-center items-center mx-auto p-4 my-4 rounded-md shadow-lg bg-base-300 cursor-pointer"
        >
          <h3 className="my-4 font-bold">JavaScript</h3>
          <Image src={JsLogo} alt="tailwindCss" width={125} height={100} />
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
