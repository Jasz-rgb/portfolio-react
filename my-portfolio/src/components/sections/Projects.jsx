import { RevealOnScroll } from "../RevealOnScroll.jsx";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-indigo-500 to-blue-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                {" "}
                Portfolio Optimization and Backtesting
              </h3>
              <p className="text-gray-400 mb-4">
                Developed and backtested a $10,000 equity portfolio using Stock
                indicators, Alpha Vantage API, and applied Risk Parity
                Optimization method over 2 years period.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python Libraries", "Alpha Vantage API"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-indigo-500/10 text-indigo-500 py-1 px-3 rounded-full text-sm hover:bg-indigo-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-indigo-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">
                OpenGL 3D Scene with ImGui Interface
              </h3>
              <p className="text-gray-400 mb-4">
                Created a modern, user-interactive OpenGL 3D setup featuring
                Blender-imported models and Blinn-Phong lighting. Integrated
                ImGui for real-time tweaking of parameters.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["C", "GLSL", "ImGui", "Blender"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-indigo-500/10 text-indigo-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-indigo-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-indigo-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">
                Song Genre Clustering using BoW & TF-IDF
              </h3>
              <p className="text-gray-400 mb-4">
                Clustered songs by genre using unsupervised learning with
                TF-IDF, PCA, and K-Means in Python.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Jupyter Notebook", "Python", "ML"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-indigo-500/10 text-indigo-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-indigo-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-indigo-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">
                Revenue Leakage in Indian Hospitality Industry
              </h3>
              <p className="text-gray-400 mb-4">
                Uncovered ₹30 Cr revenue loss across 1.3L+ hotel bookings (25
                hotels) through in-depth analytics. Applied K-Means clustering,
                EDA, and platform/city-wise analysis.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python Libraries"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-indigo-500/10 text-indigo-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-indigo-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="#"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                {" "}
                3D Reconstruction of a Temple
              </h3>
              <p className="text-gray-400 mb-4">
                Created a sparse and dense 3D model from 2D images using OpenCV
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "OpenCV"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-indigo-500/10 text-indigo-500 py-1 px-3 rounded-full text-sm hover:bg-indigo-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                {" "}
                2048 Game Solver | Self Project
              </h3>
              <p className="text-gray-400 mb-4">
                Developed an AI solver for the 2048 game using efficient
                algorithms like Expectimax and Expectiminimax using various
                heuristics and parameters on both command-line and Pygame.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["PyGame", "Python"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-indigo-500/10 text-indigo-500 py-1 px-3 rounded-full text-sm hover:bg-indigo-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
