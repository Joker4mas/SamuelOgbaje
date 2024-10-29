"use client";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function TextAnimateHero() {
  const [text] = useTypewriter({
    words: ["Frontend Developer", "Freelancer", "Open Source Contributor"],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 100,
  });
  return (
    <div>
      <h1 className="text-start text-4xl font-bold">
        <span style={{ fontWeight: "bold", color: "green" }}>{text}</span>
        <span className="text-rose-500">
          <Cursor cursorStyle="_" />
        </span>
      </h1>
    </div>
  );
}

export default TextAnimateHero;
