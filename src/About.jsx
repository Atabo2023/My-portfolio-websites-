import React from "react";
import { motion } from "framer-motion";
import mypics from "../src/Images/mypics.jpg";

const About = () => {
  return (
    // <>
    <div>
      <section id="about" className="bio-snippet">
        <h2 className="flex font-rubik text-justify text- text-4xl mt-10 font-bold justify-center text-amber-600 align-middle underline underline-offset-8">
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

            <div className="flex gap-16 mx-12 mb-12 mt-12">
              <div className="flex-1 p-4 h-screen rounded-xl mt-28">
                <img
                  // fetchpriority="high"
                  className="md:w-[65%] w-[40%] h-[25rem] rounded-full mx-auto transition-transform items-center align-bottom"
                  src={mypics}
                  alt="backImage"
                />
              </div>

              <div className="flex-1 p-2 rounded-xl">
                <span className="flex justify-center gap-2 font-rubik text-3xl font-semibold mt-28">
                  Read More About Me
                </span>{" "}
                {/* <Social /> */}
                <p
                  className="justify-center items-start text-xl mt-4 font-rubik text-centern p-4 font-normal
               text-center place-content-center max-w-3xl"
                >
                  I am a passionate Engineer with specialiation in Frontend and
                  Technical Support Engineer. I'm I know for technical problem
                  solving and passionate about solving real-world problems with
                  modern technology.
                  <br></br>
                </p>
                <p className="justify-center text-xl items-start font-rubik text-center pt-2 place-content-center max-w-2xl">
                  I specialize in:
                  <ul>
                    <li>
                      🛠️ Frontend Engineer with ReactJS, Tailwind CSS, and Git
                    </li>
                    <li>
                      💻 Remote tech support, help desk systems, and
                      troubleshooting
                    </li>
                    <li>
                      ⚡ Exploring how software can power clean energy
                      innovation
                    </li>
                    {/* <li>⚡ Computer and POS Engineer</li> */}
                  </ul>
                </p>
              </div>
            </div>
          </motion.div>
        </p>
      </section>
    </div>
    // </>
  );
};

export default About;
