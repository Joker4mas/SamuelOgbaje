import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";

// Define the shape of a project
interface Project {
  id: string;
  title: string;
  description: string;
  stack: string;
  imageUrl: string;
  projectUrl: string;
}

// Use the Project interface in the component props
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="project-card bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer p-8">
    <img
      //   initial={{ opacity: 0 }}
      //   animate={{ opacity: 1 }}
      //   transition={{ duration: 0.8 }}
      src={project.imageUrl}
      alt={project.title}
      style={{ maxWidth: "100%", height: "auto" }}
      onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const target = e.target as HTMLImageElement;
        target.onerror = null;
        target.src = "https://i.imgur.com/";
      }}
    />
    <h3 className="text-xl font-semibold my-2">{project.title}</h3>
    <h4 className="my-2">{project.stack}</h4>
    <p className="my-2">{project.description}</p>
    <motion.a
      whileHover={{ scale: 0.3 }}
      href={project.projectUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4"
    >
      <FaGithub /> View Project
    </motion.a>
  </div>
);

const ProjectsComponent: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const loadProjects = () => {
      // Sample data with Imgur image URLs
      const sampleProjects: Project[] = [
        {
          id: "1",
          title: "Rating  App",
          stack: "HTML, CSS,and JavaScript",
          description: "Rate component built on HTML5, Css3 and Javascript.",
          imageUrl: "https://i.imgur.com/8tA9gZ3.jpg",
          projectUrl: "https://interactive-component-fe-menters.vercel.app/",
        },
        {
          id: "2",
          title: "Ludo game",
          stack: "HTML5, Css3 and Javascript",
          description: ".",
          imageUrl: "https://i.imgur.com/cuLXLZr.jpg/",
          projectUrl: "https://ludo-joker4mas.netlify.app/",
        },
        {
          id: "3",
          title: "Rating  App",
          stack: "",
          description: "Rate component built on HTML5, Css3 and Javascript.",
          imageUrl: "https://i.imgur.com/8tA9gZ3.jpg",
          projectUrl: "https://interactive-component-fe-menters.vercel.app/",
        },
        {
          id: "4",
          title: "Ludo game",
          stack: "",
          description: "Pig game built with HTML5, Css3 and Javascript.",
          imageUrl: "https://i.imgur.com/DkhaYuG.jpg",
          projectUrl: "https://ludo-joker4mas.netlify.app/",
        },
        // Add more projects as needed
      ];

      setProjects(sampleProjects);
    };

    loadProjects();
  }, []);

  return (
    <div className="projects-container grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectsComponent;
