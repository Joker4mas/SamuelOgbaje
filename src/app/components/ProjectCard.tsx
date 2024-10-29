import React from "react";
import { ExternalLink } from "lucide-react";

type Project = {
  id: string;
  title: string;
  description: string;
  stacks: string;
  imageUrl: string;
  projectUrl: string;
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-fit p-4 h-fit object-cover transition-transform duration-300 hover:scale-105"
          // width={100}
          // height={100}
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-gray-800">
              {project.title}
            </h3>
            <h4>{project.stacks}</h4>
          </div>
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
      description: "A  Hospitals finder site Services",
      stacks: "Next.Js, TailwindCss, Typescript,",
      imageUrl: "https://i.imgur.com/OV6OLvR.png",
      projectUrl: "https://med-finder.vercel.app/",
    },
    {
      id: "2",
      title: "Repository Project",
      description: "Github rest API .",
      imageUrl: "https://i.imgur.com/cuLXLZr.png",
      stacks: "React, ChakraCss, and Javascript.",
      projectUrl: "https://joker4mas.netlify.app/",
    },
    {
      id: "3",
      title: "Rating App",
      description: "Little fun app to test functionality",
      imageUrl: "https://i.imgur.com/tYbc9lR.png",
      stacks: "HTML5, Css3, and Javascript.",
      projectUrl: "https://interactive-component-fe-menters.vercel.app/",
    },
    {
      id: "4",
      title: "Ludo game",
      description: "Pig game built with HTML5, Css3 and Javascript.",
      imageUrl: "https://i.imgur.com/pqEQn19.png",
      stacks: "HTML5, Css3, Javascript",
      projectUrl: "https://ludo-joker4mas.netlify.app/",
    },
    {
      id: "5",
      title: "Age Calculator",
      description: "A simple age calculator",
      imageUrl: "https://i.imgur.com/dpi9t80.png",
      stacks: "HTML5, Css3, Javascript",
      projectUrl: "https://age-calulator-fe.vercel.app/",
    },
    {
      id: "6",
      title: "Sunny Side",
      description: "A landing Page and mobile responsive interface",
      imageUrl: "https://i.imgur.com/ZnjTtIF.png",
      stacks: "HTML5, Css3, Javascript",
      projectUrl: "https://sunnyside-sage.vercel.app/",
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
