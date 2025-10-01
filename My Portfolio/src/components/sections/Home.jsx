import { RevealOnScroll } from "../RevealOnScroll.jsx";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-between relative px-8 md:px-16"
    >
      {/* Left Content */}
      <RevealOnScroll>
        <div className="max-w-lg text-left z-0">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent leading-tight">
            Hi, I'm Jasmine Sahoo
          </h1>

          <p className="text-gray-400 text-lg mb-8">
            I’m a 2nd-Year Undergraduate at Indian Institute of Technology
            Kharagpur. I focus on building projects across different domains —
            from interactive web apps to algorithmic models and graphics
            engines. Development excites me because it allows me to explore,
            experiment, and bring concepts to life.
          </p>

          <div className="flex space-x-4">
            <a
              href="#projects"
              className="bg-indigo-700 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-indigo-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>

      {/* Right Video */}
      <div className="hidden md:block w-1/2">
        <video
          src="/path-to-your-video.mp4"
          autoPlay
          loop
          muted
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};
