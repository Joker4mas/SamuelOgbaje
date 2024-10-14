"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    projectUrl: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link href={project.projectUrl} passHref target="_blank">
      <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer">
        <div className="relative h-48">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            style={{ objectFit: "cover" }}
            onError={(e) => {
              e.currentTarget.src = "https://i.imgur.com/";
            }}
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold my-2">{project.title}</h2>
          <p className="text-gray-400">{project.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
