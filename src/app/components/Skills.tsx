"use client";
import { motion } from "framer-motion";
import {
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaVuejs,
} from "react-icons/fa6";
import {
  RiBallPenFill,
  RiFirebaseFill,
  RiNextjsFill,
  RiSlackFill,
} from "react-icons/ri";

function Skills() {
  return (
    <div className=" py-8 items-center text-center bg-gray-950">
      <h1 className="my-8 font-bold  text-3xl">Stacks</h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 text-gray-400 items-center">
        <motion.div
          whileHover={{ scale: 1.3 }}
          transition={{ type: "bounce" }}
          className="flex flex-row gap-4 text-center items-center mx-auto p-4 rounded-md shadow-lg bg-base-300 cursor-pointer border border-green-400"
        >
          <h3 className="my-2 font-bold">HTML5</h3>
          <FaHtml5 className="w-10 h-10" />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.3 }}
          transition={{ type: "bounce" }}
          className="flex flex-row gap-4  text-center items-center mx-auto p-4 rounded-md shadow-lg bg-base-300 cursor-pointer border border-green-400"
        >
          <h3 className="my-2 font-bold">CSS</h3>
          <FaCss3 className="w-10 h-10" />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.3 }}
          transition={{ type: "bounce" }}
          className="flex flex-row gap-4 text-center items-center mx-auto p-4 rounded-md shadow-lg bg-base-300 cursor-pointer border border-green-400"
        >
          <h3 className="my-2 font-bold">JavaScript</h3>
          <FaJs className="w-10 h-10" />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.3 }}
          transition={{ type: "bounce" }}
          className="flex flex-row gap-4 text-center items-center mx-auto p-4 rounded-md shadow-lg bg-base-300 poppins cursor-pointer border border-green-400"
        >
          <h3 className="my-2 font-bold">React</h3>
          <FaReact className="w-10 h-10" />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.3 }}
          transition={{ type: "bounce", stiffness: 200 }}
          className="flex flex-row gap-4 text-center items-center bg-base-300 mx-auto p-4  rounded-lg shadow-md cursor-pointer border border-green-400"
        >
          <h3 className="my-2 font-bold">Next-js</h3>
          <RiNextjsFill className="w-10 h-10" />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.3 }}
          transition={{ type: "bounce" }}
          className="flex flex-row gap-4  text-center items-center mx-auto p-4  rounded-md shadow-lg bg-base-300 cursor-pointer border border-green-400"
        >
          <h3 className="my-2 font-bold">Vue</h3>
          <FaVuejs className="w-10 h-10" />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.3 }}
          transition={{ type: "bounce" }}
          className="flex flex-row gap-4  text-center items-center mx-auto p-4 rounded-md shadow-lg bg-base-300 cursor-pointer border border-green-400"
        >
          <h3 className="my-2 font-bold">Node.js</h3>
          <FaNodeJs className="w-10 h-10" />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.3 }}
          transition={{ type: "bounce" }}
          className="flex flex-row gap-4  text-center items-center mx-auto p-4 rounded-md shadow-lg bg-base-300 cursor-pointer border border-green-400"
        >
          <h3 className="my-2 font-bold">FireBase</h3>
          <RiFirebaseFill className="w-10 h-10" />
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
