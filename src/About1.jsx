import React from "react";
import { TypeAnimation } from "react-type-animation";
import Social from "./Social";

const About1 = () => {
  return (
    // <>
    <div className="bg-black bg-cover relative flex flex-col items-center justify-center mt-4 h-screen">
      {/* <div
        className="relative h-screen bg-cover bg-center flex flex-col items-center justify-center mt-4"
        style={{ backgroundImage: `url(${Aboutimg})` }}
      > */}
      
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl px-4">
        <h1 className="font-rubik text-5xl font-bold text-amber-600 mb-4">
          HELLO, WORLD.
        </h1>
        {/* <div className="w-full min-h-screen grid bg-neutral-900 place-content-center"> */}
        <div className="font-rubik text-5xl font-bold text-white mb-4">
          <TypeAnimation
            sequence={[
              "I am Victor Onuche",
              1000,
              "A Software Engineer",
              1000,
              "& Tech Support Engineer",
              1000,
            ]}
            wrapper="span"
            speed={20}
            className="text-6xl font-bold text-neutral-300"
            repeat={Infinity}
          />
          {/* <h1 className="font-rubik text-5xl font-bold text-white mb-4"> */}
          {/* Welcome to My Website */}
          {/* </h1> */}
        </div>
        <h2 className="text-lg font-rubik text-gray-200 mb-6">
          SOFTWARE ENGINEER || TECHNICAL SUPPORT ENGINEER
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#about"
            className="px-6 py-3 p-6 border-2 text-white font-normal text-3xl rounded-sm shadow hover:bg-white hover:text-black transition"
          >
            Read More About Me
          </a>
        </div>
      </div>
      <div className="bg-white w-80 p-3 mt-8 align-middle z-0 drop-shadow-xl rounded-xl">
        <Social />
      </div>
      {/* </div> */}
      {/* <div
        className="relative z-10  inset-0 h-screen bg-cover bg-opacity-50 bg-center items-center justify-center mt-6"
        style={{ backgroundImage: `url(${Aboutimg})` }}
      />
      <p className="font-rubik text-4xl text-black font-bold justify-center text-center">
        Hello, World.
      </p>

      <div /> */}
      {/* <div /> */}
    </div>
  );
};

export default About1;
