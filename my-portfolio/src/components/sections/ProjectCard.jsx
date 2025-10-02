import { useState } from "react";

export const ProjectCard = ({ project, onClose }) => {
  const [isPortrait, setIsPortrait] = useState(false);

  const handleImageLoad = (e) => {
    const { naturalWidth, naturalHeight } = e.target;
    if (naturalHeight / naturalWidth > 0.75) {
      setIsPortrait(true); // portrait → float-left
    } else {
      setIsPortrait(false); // landscape → slightly bigger
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#1e1b4b] via-[#1e293b] to-[#0f172a] border border-white/10 rounded-2xl p-6 max-w-2xl w-full relative shadow-2xl transition-all">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold"
      >
        ×
      </button>

      {/* Title */}
      <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
        {project.title}
      </h3>

      {/* Image + Description */}
      <div className="description-wrapper text-gray-300 leading-relaxed">
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            onLoad={handleImageLoad}
            className={`mb-2 rounded-lg border border-white/5 ${
              isPortrait
                ? "float-left mr-4 max-w-[200px] h-auto object-contain"
                : "float-left mr-4 max-w-[250px] h-auto object-cover"
            }`}
          />
        )}
        <p className="whitespace-pre-line">{project.description}</p>
      </div>

      {/* Technologies */}
      {project.technologies?.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-6">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-1 px-3 rounded-full text-sm shadow-sm hover:shadow-md transition-all"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Buttons */}
      {project.buttons && (
        <div className="flex flex-wrap gap-3 mt-4">
          {project.buttons.map((btn, idx) => (
            <a
              key={idx}
              href={btn.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md text-sm font-medium border border-blue-600 text-blue-300 hover:bg-blue-600/10 hover:text-blue-100 transition-all"
            >
              {btn.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
