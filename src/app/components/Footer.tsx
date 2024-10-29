"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaFilePdf,
  FaLinkedin,
  FaSquareGithub,
  FaTwitter,
  FaSquarePhone,
  FaSquareUpwork,
  FaEnvelopeCircleCheck,
} from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center md:mx-16 md:p-8 lg:mx-24">
        <div className="flex flex-col md:flex-row gap-8 items-center w-full justify-between">
          <nav className="flex flex-col  items-center gap-4 mt-4">
            <motion.a
              whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
              transition={{ type: "spring", stiffness: 300 }}
              href="/"
              className="flex items-center gap-2"
            >
              Home
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
              transition={{ type: "spring", stiffness: 300 }}
              href="/about"
              className="flex items-center gap-2"
            >
              About
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
              transition={{ type: "spring", stiffness: 300 }}
              href="/contact"
              className="flex items-center gap-2"
            >
              Contact{" "}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
              transition={{ type: "spring", stiffness: 300 }}
              href="/resume"
              className="flex items-center gap-2"
            >
              Resume <FaFilePdf />
            </motion.a>
          </nav>
          <div className="flex flex-col gap-4">
            <a href="tel:+2348069822444">
              <motion.span
                whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center gap-2 cursor-pointer"
              >
                <FaSquarePhone size="32" />
                <p>+2348069822444</p>
              </motion.span>
            </a>
            <a href="mailto:samuelogbaje@gmail.com">
              <motion.span
                whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center gap-2 cursor-pointer"
              >
                <FaEnvelopeCircleCheck size="32" /> samuelogbaje@gmail.com
              </motion.span>
            </a>
          </div>
          <div className="socials flex gap-8 md:flex-row">
            <motion.a
              whileHover={{ scale: 1.5, originY: 0, color: "#f8e112" }}
              transition={{ type: "spring" }}
              href="https://www.linkedin.com/in/samuel-ogbaje"
              target="_blank"
            >
              <FaLinkedin size="32" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.5, originY: 0, color: "#f8e112" }}
              transition={{ type: "spring" }}
              href="https://github.com/Joker4mas"
              target="_blank"
            >
              <FaSquareGithub size="32" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.5, originY: 0, color: "#f8e112" }}
              transition={{ type: "spring" }}
              href=""
              target="_blank"
            >
              <FaTwitter size="32" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.5, originY: 0, color: "#f8e112" }}
              transition={{ type: "spring", stiffness: 300 }}
              href="https://x.com/Joker4mas"
              target="_blank"
              className="h-32"
            >
              <FaSquareUpwork size="32" />
            </motion.a>
          </div>
        </div>
        <hr className="border-1 w-96 bg-gray-400" />
        <p className="mb-8">
          CopyRight © {new Date().getUTCFullYear()} Samuel Ogbaje
        </p>
      </div>
    </>
  );
};

export default Footer;
