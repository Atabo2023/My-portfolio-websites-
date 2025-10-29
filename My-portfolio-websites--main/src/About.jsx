import React from "react";
import { motion } from "framer-motion";
import BebPic2 from "../src/Images/BebPic2.jpg";
import Marquee from "react-fast-marquee";

const About = () => {
  return (
    // <>
    <div className="mb-8 border-b-black border-b-8 border-orange-500">
      <section id="about" className="bio-snippet">
        <h2 className="flex font-rubik text-justify text-4xl mt-10 font-bold justify-center text-orange-500 align-middle underline underline-offset-8">
          About Me
        </h2>
        <p className="flex justify-center">
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 4 }}
            transition={{ duration: 2 }}
            className=" text-black rounded"
          >
            {/* <span className="flex justify-center gap-2 font-rubik text-3xl font-semibold pt-8">
                More About Me
              </span> */}

            <div className="flex gap-16 mx-12 ">
              <div className="flex-1 p-4 h-screen rounded-xl mt-28">
                <img
                  // fetchpriority="high"
                  className="md:w-[75%] border-r-8 border-orange-500 w-[35%] mt-16 h-[26rem] rounded-full mx-auto transition-transform items-center align-bottom"
                  src={BebPic2}
                  alt="backImage"
                />
              </div>

              <div className="flex-1 p-2 rounded-xl">
                <span className="flex justify-center gap-2 font-rubik text-3xl font-semibold mt-16 mb-4">
                  Read More About Me
                </span>{" "}
                {/* <Social /> */}
                {/* <div></div> */}
                <div
                  className="bg-black text-white rounded-2xl  w-fit justify-center items-start text-xl font-rubik px-2
               text-center place-content-center max-w-2xl"
                >
                  <div className="h-5/6 w-fit bg-white px-2 text-black justify-center">
                    {/* I am a passionate Engineer with specialiation in Frontend and
                  Technical Support Engineer. I'm I know for technical problem
                  solving and passionate about solving real-world problems with
                  modern technology. */}

                    <p>
                      Hello! I'm Onuche Victor Atabo, a graduate applied
                      chemistry and currently PGD Computer science student of
                      University of Abuja with a passion for Frontend Engineer,
                      IT Support Engineer and artificial intelligence. My
                      journey in tech combines hardware knowledge with
                      cutting-edge software expertise.
                    </p>
                    <br></br>
                    <p className="justify-center font-bold text-2xl items-start font-rubik text-center pt-2 place-content-center">
                      I specialized in
                    </p>
                    <p>
                      As a Frontend engineer, I specialize in Html, CSS,
                      JavaScript, ReactJS, TailwindCSS and version control
                      technologies. I build robust, scalable systems that power
                      modern applications.
                    </p>
                    <br></br>
                    <p>
                      Beyond technology, I helped young graduates navigate their
                      ways througgh the part of tech, I'm an entrepreneur
                      managing businesses in accessories, online visibility
                      through Google my bussiness. I thrive in collaborative
                      environments and Exploring how software can power clean
                      energy innovation.
                    </p>
                    <br></br>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </p>
      </section>

      <div>
        <div className="w-full inset-0 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] mt-10 whitespace-nowrap flex flex-col font-rubik justify-center overflow-hidden cursor-pointer bg-opacity-5 bg-gradient-to-r from-blue-700 via-white/80 to-transparent">
          <Marquee
            autoFill
            pauseOnHover // className="mask-l-from-80% mask-r-from-80%"
          >
            <div className="bg-[#202020] m-1 rounded-xl flex space-x-5 font-bold sm:text-sm md:text-base lg:text-lg cursor-pointer p-4 text-blue-500">
              💨 Tailwindcss
            </div>
            <div className="bg-[#202020] m-1 rounded-xl flex space-x-5 font-bold sm:text-sm md:text-base lg:text-lg cursor-pointer p-4 text-orange-400">
              JavaScript
            </div>
            <div className="bg-[#202020] m-1 rounded-xl flex space-x-5 font-bold sm:text-sm md:text-base lg:text-lg cursor-pointer p-4 text-green-400">
              🚀 ReactJS
            </div>
            <div className="bg-[#202020] m-1 rounded-xl flex space-x-5 font-bold sm:text-sm md:text-base lg:text-lg cursor-pointer p-4 text-neutral-400">
              HTML
            </div>
            <div className="bg-[#202020] m-1 rounded-xl flex space-x-5 font-bold sm:text-sm md:text-base lg:text-lg cursor-pointer p-4 text-sky-400">
              CSS
            </div>
            <div className="bg-[#202020] m-1 rounded-xl flex space-x-5 font-bold sm:text-sm md:text-base lg:text-lg cursor-pointer p-4 text-orange-400">
              Version Control
            </div>
            <div className="bg-[#202020] m-1 rounded-xl flex space-x-5 font-bold sm:text-sm md:text-base lg:text-lg cursor-pointer p-4 text-gray-400">
              Postman
            </div>
            <div className="bg-[#202020] m-1 rounded-xl flex space-x-5 font-bold sm:text-sm md:text-base lg:text-lg cursor-pointer p-4 text-sky-400">
              SQL
            </div>
            <div className="bg-[#202020] m-1 rounded-xl flex space-x-5 font-bold sm:text-sm md:text-base lg:text-lg cursor-pointer p-4 text-sky-400">
              🧠 API Integration
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default About;
