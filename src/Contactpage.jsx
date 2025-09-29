import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contactpage = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", text: "" });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", text: "" });

    emailjs
      .sendForm(
        "(service_obkfc7d)", // 🔹 replace with your Service ID
        "template_62ul2wk", // 🔹 replace with your Template ID
        e.target,
        "2CoNvGBk_1upvY78p" // 🔹 replace with your Public Key
      )
      .then(
        () => {
          setStatus({
            type: "success",
            text: "✅ Message sent successfully!",
          });
          setLoading(false);
          e.target.reset();
        },
        () => {
          setStatus({
            type: "error",
            text: "❌ Failed to send. Please try again later.",
          });
          setLoading(true);
        }
      );
  };

  return (
    <form
      onSubmit={sendEmail}
      className="flex gap-12 m-10 w-full bg-black max-w-6xl mx-auto drop-shadow-xl rounded-2xl py-10 px-6"
      // className="flex flex-col gap-4 w-full max-w-md mx-auto bg-white p-6 rounded-xl shadow-md"
    >
      <div className="flex-1 p-4 rounded-xl">
        <h2 className="font-montserrat font-bold text-5xl text-[#ffbd39]">
          Send a Message
        </h2>
        <p className="font-normal font-rubik text-white text-xl justify-center align-middle py-10">
          whether is a job opportunity, collaboration, Other offers, Message me,
          I will response ASAP
        </p>
      </div>
      <div className="flex-1 flex-col bg-white p-8 gap-8 rounded-xl">
        {" "}
        <h2 className="text-2xl font-bold text-center text-black mb-6">
          Get In Touch
        </h2>
        {/* <h2 className="text-xl font-bold text-center">Get In Touch</h2> */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-2 border font-rubik rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-2 mt-6 border font-rubik rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          required
          className="w-full px-4 py-2 border font-rubik mt-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        {/* Button with spinner */}
        <button
          type="submit"
          disabled={loading}
          className="px-44 align-middle flex items-center flex-col justify-center mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? (
            <>
              <svg
                className="w-5 h-5 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
        {/* Styled success/error message */}
        {status.text && (
          <p
            className={`w-full bg-blue-600 font-rubik text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-50 ${
              status.type === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {status.text}
          </p>
        )}
      </div>
    </form>
  );
};

export default Contactpage;

// const Contactpage = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     reasonformessage: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   // Handle input change
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Handle form submit
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     const loadingToast = toast.loading("Sending message...");

//     emailjs
//       .send(
//         "Onuche Victor (service_obkfc7d)", // 🔹 Replace with your EmailJS service ID
//         "template_62ul2wk", // 🔹 Replace with your EmailJS template ID
//         formData,
//         "2CoNvGBk_1upvY78p" // 🔹 Replace with your EmailJS public key
//       )

//       // .then(
//       // (result) => {
//       //   console.log(result.text);
//       //   setMessage("Message sent successfully ✅");
//       //   setLoading(false);
//       //   e.target.reset();
//       // },
//       // (error) => {
//       //   console.error(error.text);
//       //   setMessage("Something went wrong ❌");
//       //   setLoading(false);
//       // }
//       .then(
//         (result) => {
//           toast.dismiss(loadingToast);
//           toast.success("✅ Message sent successfully!");
//           setFormData({
//             name: "",
//             email: "",
//             reasonformessage: "",
//             message: "",
//           });
//           setLoading(false);
//         },
//         (error) => {
//           console.error("EmailJS Error:", error);
//           toast.dismiss(loadingToast);
//           toast.error("❌ Failed to send message. Please try again.");
//           setLoading(false);
//         }
//       );
//   };

//   return (
//     <div className="flex gap-12 m-10 w-full bg-black max-w-6xl mx-auto drop-shadow-xl rounded-2xl py-10 px-6">
//       {/* onSubmit={sendEmail} */}
//       <div className="flex-1 p-4 rounded-xl">
//         <h2 className="font-montserrat font-bold text-5xl text-[#ffbd39]">
//           Send a Message
//         </h2>
//         <p className="font-normal font-rubik text-white text-xl justify-center align-middle py-10">
//           whether is a job opportunity, collaboration, Other offers, Message me,
//           I will response ASAP
//         </p>
//       </div>
//       <div className="flex-1 bg-white p-4 rounded-xl">
//         <h2 className="text-2xl font-bold text-center text-black mb-6">
//           Get In Touch
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border font-rubik rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border font-rubik rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />

//           <textarea
//             name="message"
//             placeholder="Your Message"
//             rows="5"
//             value={formData.message}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border font-rubik rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           ></textarea>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-blue-600 font-rubik  text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-50"
//           >
//             {loading ? "Sending..." : "Send Message"}
//           </button>

//           {/* {feedback && <p className="text-center text-sm mt-2">{feedback}</p>} */}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contactpage;
