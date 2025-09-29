import React from "react";
import { motion } from "framer-motion";
import mypics from "../src/Images/mypics.jpg";
import BebPic2 from "../src/Images/BebPic2.jpg";

const About = () => {
  return (
    // <>
    <div>
      <section className="bio-snippet">
        <h2 className="flex font-rubik text-justify text-4xl mt-10 font-bold justify-center text-amber-600 align-middle underline underline-offset-8">
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

            <div className="flex gap-16 mx-12 mb-4">
              <div className="flex-1 p-4 h-screen rounded-xl mt-28">
                <img
                  // fetchpriority="high"
                  className="md:w-[75%] w-[35%] h-[28rem] rounded-full mx-auto transition-transform items-center align-bottom"
                  src={BebPic2}
                  alt="backImage"
                />
              </div>

              <div className="flex-1 p-2 rounded-xl">
                <span className="flex justify-center gap-2 font-rubik text-3xl font-semibold mt-16">
                  Read More About Me
                </span>{" "}
                {/* <Social /> */}
                <p
                  className="justify-center items-start text-lg mt-4 font-rubik text-centern p-4 font-normal
               text-center place-content-center max-w-2xl"
                >
                  {/* I am a passionate Engineer with specialiation in Frontend and
                  Technical Support Engineer. I'm I know for technical problem
                  solving and passionate about solving real-world problems with
                  modern technology. */}

                  <p>
                    Hello! I'm Onuche Victor Atabo, a graduate applied chemistry
                    and currently PGD Computer science student of University of
                    Abuja with a passion for Frontend Engineer, IT Support
                    Engineer and artificial intelligence. My journey in tech
                    combines hardware knowledge with cutting-edge software
                    expertise.
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
                    ways througgh the part of tech, I'm an entrepreneur managing
                    businesses in accessories, online visibility through Google
                    my bussiness. I thrive in collaborative environments and
                    Exploring how software can power clean energy innovation
                  </p>
                  <br></br>
                </p>
                {/* <p className="justify-center text-xl items-start font-rubik text-center pt-2 place-content-center">
                  I specialize in:
                  <ul> */}
                {/* <li>
                      🛠️ Frontend Engineer with ReactJS, Tailwind CSS, and Git
                    </li> */}
                {/* <li>
                      💻 Remote tech support, help desk systems, and
                      troubleshooting
                    </li> */}
                {/* <li>
                      ⚡ Exploring how software can power clean energy
                      innovation
                    </li> */}
                {/* <li>⚡ Computer and POS Engineer</li> */}
                {/* </ul> */}
                {/* </p> */}
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
