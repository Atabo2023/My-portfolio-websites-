import React from "react";
import Marquee from "react-fast-marquee";
import mypics from "../src/Images/mypics.jpg";

const Marque = () => {
  const logos = [{ id: "react", src: { mypics }, alt: "React" }];

  return (
    // <>
    <div className="w-full">
      {/* 🔹 Text Marquee (Mobile first, hidden on md+) */}
      <div className="bg-gray-900 text-white py-2 md:hidden">
        <Marquee speed={40} pauseOnHover gradient={false}>
          <span className="mx-6 text-sm sm:text-base font-medium">
            🚀 Welcome to my portfolio — Built with React + TailwindCSS
          </span>
          <span className="mx-6 text-sm sm:text-base font-medium">
            💡 Frontend Developer | Technical Support Specialist
          </span>
          <span className="mx-6 text-sm sm:text-base font-medium">
            🌍 Available for collaborations!
          </span>
        </Marquee>
      </div>

      {/* 🔹 Logo Marquee (Hidden on mobile, visible on md+) */}
      <div className="hidden md:block bg-white py-4">
        <Marquee speed={60} pauseOnHover gradient={false}>
          {logos.map((logo, i) => (
            <img
              key={1}
              src={logo}
              alt={`logo-${1}`}
              className="h-12 md:h-16 mx-8 object-contain"
            />
          ))}
        </Marquee>
      </div>
    </div>
    // </>
  );
};

export default Marque;
