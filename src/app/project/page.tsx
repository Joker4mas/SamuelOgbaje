"use client";

import React from "react";
import ProjectCard from "../components/ProjectCard";

// interface Project {
//   id: string;
//   title: string;
//   description: string;
//   imageUrl: string;
//   projectUrl: string;
// }

const ProjectsPage: React.FC = () => {
  return (
    <div className=" bg-gray-950 p-8">
      <h1 className="text-2xl font-bold text-center text-white mb-8">
        My Projects
      </h1>
      <ProjectCard />
    </div>
  );
};

export default ProjectsPage;
