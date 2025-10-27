import React from "react";
import { motion } from "framer-motion";
import Bebpic1 from "../src/Images/Bebpic1.jpg";
import gif from "../src/Images/gif.mp4";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    // <>
    <div className="flex w-full flex-col mt-14 md:flex-row">
      <div className="flex-2 flex flex-col p-10 bg-[#000211] h-screen font-rubik">
        {/* <h2 className="text-6xl font-bold text-white">VICTOR.DEV</h2> */}
        <p className="text-4xl pt-10  font-bold text-[#ffbd39]">Hello!</p>

        <div className="text-white text-4xl font-medium py-8">
          {/* <div className="font-rubik text-5xl font-bold text-white mb-4"> */}
          <TypeAnimation
            sequence={["I'm Victor Onuche", 1000, "I'm Victor Onuche", 100]}
            wrapper="span"
            speed={50}
            className="text-4xl font-medium text-neutral-300"
            repeat={Infinity}
          />
        </div>
        {/* </div> */}
        {/* I'm Victor Onuche */}
        <p className="text-3xl font-bold text-[#ffbd39]">
          A Frontend Engineer,{" "}
          <span className="text-white font-normal">
            <br></br>and an IT support specialist
          </span>
        </p>
        <p className="text-white font-rubik text-lg">
          <motion.div
            initial={{ y: "-100%" }}
            // end={{ x: "100%" }}
            animate={{ y: 2 }}
            transition={{ duration: 2 }}
            className=" text-white pt-4 rounded shadow-lg w-full"
          >
            I build Frontend application with IT support skills. <br></br> I
            ensure the application are build are Responsive, <br></br>{" "}
            seameless, scaleable, users friendly <br></br>and browser
            compatibility. <br></br>
            <span className="text-lg text-white sm:text-base font-medium">
              <span className="pr-2">🌍</span> Available for collaborations!
            </span>
          </motion.div>
        </p>
        <div className="flex gap-10">
          <a href="#Contactpage">
            <button className="text-base mt-6 text-white p-2 rounded-md w-32 font-rubik hover:bg-purple-500  bg-indigo-600 font-medium">
              Hire Me
            </button>
          </a>

          <a
            href="https://github.com/dashboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="text-base mt-6 text-white p-2 rounded-md w-32 font-rubik hover:bg-indigo-500  hover:text-white bg-indigo-600 font-medium">
              My Work
            </button>
          </a>

          <div className="w-10 h-10 border-[10px] mt-6 border-indigo-600  border-t-[#ffbd39] border-b-white rounded-full animate-spin"></div>
        </div>
      </div>
      {/* <div></div> */}

      <div className="flex-1 p-4 bg-white">
        <h2 className="flex items-end justify-between text-6xl font-bold text-white mb-10 md:mb-0">
          ✨✨✨{" "}
          <video
            src={gif}
            autoPlay
            loop
            muted
            className="flex justify-end items-end w-[8%] rounded-2xl"
          />
        </h2>

        <div className="items-center justify-center">
          <img
            fetchPriority="high"
            className="md:w-[30%] w-[25%] h-[22rem] rounded-full mx-auto items-center animate-pulse shadow-lg shadow-[#ffbd39] mt-10"
            src={Bebpic1}
            alt="backImage"
          />

          <div className="flex justify-between">
            <video
              src={gif}
              autoPlay
              loop
              muted
              className="flex justify-end items-end w-[8%] rounded-2xl"
            />

            <video
              src={gif}
              autoPlay
              loop
              muted
              className="flex justify-end items-end w-[8%] rounded-2xl"
            />
          </div>
          {/* <div className="flex justify-between"></div> */}
        </div>
      </div>
    </div>
    // </>
  );
};

export default Hero;
