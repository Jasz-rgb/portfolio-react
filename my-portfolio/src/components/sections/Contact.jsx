import { useState, useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const SERVICE_ID = "service_hmq4r9v";
  const TEMPLATE_ID = "template_6m7bdyo";
  const PUBLIC_KEY = "BgoVLgmNB4giSqZkb";

  // Load Spline script dynamically
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.10.71/build/spline-viewer.js";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          to_name: "Your Name",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      )
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Oops! Something went wrong. Please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center py-20 px-4 md:px-16 gap-20"
    >
      <div className="hidden md:flex flex-col items-start justify-center space-y-6 absolute left-45 top-1/2 -translate-y-1/2">
        {/* GitHub */}
        <a
          href="https://github.com/Jasz-rgb"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-4"
          style={{ animation: "float 3s ease-in-out infinite" }}
        >
          <img
            src="/images/github.png"
            alt="GitHub"
            className="w-16 h-16 hover:scale-110 transition-transform"
          />
          <span className="text-white font-medium text-lg">GitHub</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/jasmine-sahoo-12aa3831b/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-4"
          style={{ animation: "float 4s ease-in-out infinite" }}
        >
          <img
            src="/images/linkedin.png"
            alt="LinkedIn"
            className="w-16 h-16 hover:scale-110 transition-transform"
          />
          <span className="text-white font-medium text-lg">LinkedIn</span>
        </a>

        {/* Gmail */}
        <a
          href="mailto:jasminesahoo007@gmail.com"
          className="flex items-center space-x-4"
          style={{ animation: "float 2.5s ease-in-out infinite" }}
        >
          <img
            src="/images/gmail.png"
            alt="Gmail"
            className="w-16 h-16 hover:scale-110 transition-transform"
          />
          <span className="text-white font-medium text-lg">Gmail</span>
        </a>

        {/* Floating animation keyframes */}
        <style>
          {`
        @keyframes float {
            0%   { transform: translateY(0px) translateX(0px) rotate(0deg); }
            25%  { transform: translateY(-8px) translateX(5px) rotate(-2deg); }
            50%  { transform: translateY(-12px) translateX(-5px) rotate(2deg); }
            75%  { transform: translateY(-6px) translateX(3px) rotate(-1deg); }
            100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
        }
        `}
        </style>
      </div>

      {/* Left: Form */}
      <RevealOnScroll>
        {" "}
        <div className="w-full md:w-2/3 lg:w-1/2 min-w-[300px] p-6 mx-auto">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-indigo-800 to-blue-400 bg-clip-text text-transparent text-center md:text-left">
            Get In Touch!
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              required
              value={formData.name}
              placeholder="Name..."
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-indigo-800 focus:bg-indigo-800/5"
            />
            <input
              type="email"
              required
              value={formData.email}
              placeholder="yourmail@gmail.com"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-indigo-800 focus:bg-indigo-800/5"
            />
            <textarea
              required
              rows={5}
              value={formData.message}
              placeholder="Your Message..."
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-indigo-800 focus:bg-indigo-800/5"
            />
            <button
              type="submit"
              className="w-full bg-indigo-800 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>

      {/* Right: Spline Viewer */}
      {/* Right: Spline Viewer */}
      <div className="absolute bottom-0 right-0 w-full h-full pointer-events-none">
        <script
          type="module"
          src="https://unpkg.com/@splinetool/viewer@1.10.71/build/spline-viewer.js"
        ></script>
        <spline-viewer
          url="https://prod.spline.design/AWvUqy1IOhAhXaE9/scene.splinecode"
          camera-controls="false"
          background="transparent"
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "70%",
            height: "120%",
            pointerEvents: "none",
            transform: "translate(20%, 10%)",
          }}
        ></spline-viewer>
      </div>
    </section>
  );
};
