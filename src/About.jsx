import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      <>
        <section id="about" class="bio-snippet">
          <h2 className="flex font-rubik text-justify text- text-5xl pt-6 font-bold justify-center text-amber-600 align-middle">
            About Me
          </h2>
          <p className="flex justify-center">
            <motion.div
              initial={{ y: "-100%" }}
              // end={{ x: "100%" }}
              animate={{ y: 4 }}
              transition={{ duration: 2 }}
              className=" text-black rounded"
            >
              <span className="flex justify-center gap-2 text-2xl font-semibold pt-4">
                👋 Hi, I’m <strong>Onuche Atabo</strong>
              </span>
              <p className="flex justify-center text-lg">
                <br></br>{" "}
                <span className="animate-pulse mr-2">
                  <strong>IT Support Specialist</strong>{" "}
                </span>{" "}
                and{" "}
                <span className="animate-pulse mx-2">
                  <strong>Frontend Developer</strong>
                </span>
                passionate about solving real-world problems with technology.
              </p>
            </motion.div>
          </p>
          <p className="justify-center text-center pt-4">
            I specialize in:
            <ul>
              <li>
                💻 Remote tech support, help desk systems, and troubleshooting
              </li>
              <li>
                🛠️ Frontend development with ReactJS, Tailwind CSS, and Git
              </li>
              <li>
                ⚡ Exploring how software can power clean energy innovation
              </li>
            </ul>
          </p>
          <p>
            Currently diving into a <strong>90-day learning challenge</strong>{" "}
            focused on IT automation, modern frontend skills, and renewable
            energy systems.
          </p>
          <p>
            Always building, learning, and solving.
            <br></br>
            Let’s connect on{" "}
            <a
              href="https://linkedin.com/in/onuche-atabo-08a229229"
              target="_blank"
            >
              LinkedIn
            </a>
          </p>
        </section>
      </>
    </div>
  );
};

export default About;
