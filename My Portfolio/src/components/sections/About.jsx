import { RevealOnScroll } from "../RevealOnScroll.jsx";

export const About = () => {
  const frontendSkills = [
    "C/C++",
    "Python Libraries",
    "TailwindCSS",
    "React",
    "JS",
    "OpenCV",
    "PyGame",
  ];

  const backendSkills = ["Blender", "OpenGL", "GLSL", "ImGui"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate student at IIT Kharagpur with hands-on experience in
              portfolio optimization, AI projects, and embedded systems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Programming & Dev</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-indigo-500/10 text-indigo-500 py-1 px-3 rounded-full text-sm hover:bg-indigo-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Graphics & 3D</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-indigo-500/10 text-indigo-500 py-1 px-3 rounded-full text-sm hover:bg-indigo-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> BTech., Instrumentation Engineering </strong> -
                  Indian Institute of Technology, Kharagpur | 2024-Present
                </li>
                <li>
                  Techno India Group Public School | 2022-2024 (XII, CBSE)
                </li>
                <li>Techno India Group Public School | 2013-2022 (X, CBSE)</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <li className="font-semibold">
                    {" "}
                    Quant Trainee | Quant Club | IIT Kharagpur{" "}
                  </li>
                  <li className="font-semibold">
                    {" "}
                    Junior Member | Prodex | IIT Kharagpur{" "}
                  </li>
                  <li className="font-semibold">
                    {" "}
                    Senior Researcher & Graphic Designer | Computer Graphics
                    Society | IIT Kharagpur{" "}
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
