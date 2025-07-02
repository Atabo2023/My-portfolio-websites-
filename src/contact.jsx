// import React from "react";

// const contact = () => {
//   return <div>contact</div>;
// };

// export default contact;

import React, { useState } from "react";
import gif from "../src/Images/gif.mp4";

function ConditionalAnimation() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="mb-4 p-2 bg-gray-800 text-white rounded"
      >
        Toggle Animation
      </button>
      <div
        className={`transition-opacity duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        } bg-black text-white p-4 rounded`}
      >
        <div className="flex justify-center items-center h-screen bg-gray-900">
          <video
            src={gif}
            autoPlay
            loop
            muted
            className="w-[8%] rounded-lg shadow-lg"
          />
        </div>
        I appear and disappear!
      </div>
    </div>
  );
}

export default ConditionalAnimation;
