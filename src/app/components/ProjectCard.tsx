import React from "react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          className="w-fit p-4 h-fit object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-800">
            {project.title}
          </h3>
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
        <p className="text-gray-600 text-sm">{project.description}</p>
      </div>
    </div>
  );
};

const ProjectGrid = () => {
  const projects: Project[] = [
    {
      id: "1",
      title: "MedFinder",
      description: "A full-featured Hospitals and address built with Next.Js .",
      imageUrl: "https://i.imgur.com/8YMe4ou.png",
      projectUrl: "https://med-finder.vercel.app/",
    },
    {
      id: "2",
      title: "Repository Project",
      description:
        "A site built on react js, to fetch and display user Repository .",
      imageUrl: "https://i.imgur.com/DkhaYuG.png",
      projectUrl: "https://joker4mas.netlify.app/",
    },
    {
      id: "3",
      title: "Rating App",
      description: "Rate component built on HTML5, Css3 and Javascript.",
      imageUrl: "https://i.imgur.com/8tA9gZ3.png",
      projectUrl: "https://interactive-component-fe-menters.vercel.app/",
    },
    {
      id: "4",
      title: "Ludo game",
      description: "Pig game built with HTML5, Css3 and Javascript.",
      imageUrl: "https://i.imgur.com/DkhaYuG.png",
      projectUrl: "https://ludo-joker4mas.netlify.app/",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
