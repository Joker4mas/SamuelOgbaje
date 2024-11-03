"use client";

import Image from "next/image";
import DevImage from "../public/dev.jpg";
import Skills from "../components/Skills";

function page() {
  return (
    <div className="">
      <div className="text-center p-8 text-gray-400  mx-auto ">
        <h2 className="my-2 text-2xl">Hi, I’m Samuel Ogbaje! 👋</h2>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <p className="text-wrap text-md leading-8 md:p-12 md:w-2/4 ">
            As a passionate frontend developer aspiring toward full-stack
            expertise, I specialize in creating exceptional user experiences
            through responsive, intuitive interfaces. Proficient in HTML, CSS,
            JavaScript, and React, I combine technical skill with creative
            problem-solving to transform how users interact with technology.
            <br />
            I maintain a proactive approach to growth, staying current with
            industry trends while expanding my knowledge toward backend
            technologies and database management. My goal is to create
            comprehensive, end-to-end solutions that make a real impact.
            <br />
            I`m committed to continuous learning and building applications that
            users love, always eager to tackle new challenges in this dynamic
            field
          </p>
          <div>
            <Image src={DevImage} alt="Dev picture" width={450} height={800} />
          </div>
        </div>
      </div>
      <Skills />
    </div>
  );
}

export default page;
