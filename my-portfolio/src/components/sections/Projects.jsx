import { RevealOnScroll } from "../RevealOnScroll.jsx";
import { projects } from "./Project-info.jsx";
import { ProjectCard } from "./ProjectCard.jsx";
import { useState, useEffect } from "react";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          {/* Section Title */}
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-indigo-500 to-blue-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition cursor-pointer bg-gradient-to-br from-slate-900/30 to-slate-800/10"
                onClick={() => setSelectedProject(project)}
              >
                <h3 className="text-xl font-bold mb-2 text-white/90">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {project.description.length > 100
                    ? project.description.substring(0, 100) + "..."
                    : project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies?.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-indigo-500/10 text-indigo-400 py-1 px-3 rounded-full text-sm hover:bg-indigo-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="text-indigo-400 hover:text-indigo-300 transition-colors font-medium">
                  View Project →
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <ProjectCard
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          </div>
        </div>
      )}
    </section>
  );
};
