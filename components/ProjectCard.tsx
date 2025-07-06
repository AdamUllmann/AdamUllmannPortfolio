"use client";

import { useState } from "react";
import { Github, ExternalLink, Star } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  featured?: boolean;
  className?: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  github,
  live,
  featured = false,
  className = "",
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative bg-card border border-border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <div className="flex items-center bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
            <Star className="w-3 h-3 mr-1 fill-current" />
            Featured
          </div>
        </div>
      )}

      {/* Project Image Placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl font-bold text-primary/20 select-none">
            {title.charAt(0)}
          </div>
        </div>

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 bg-primary/90 flex items-center justify-center space-x-4 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <Github className="w-6 h-6 text-white" />
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="w-6 h-6 text-white" />
          </a>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((technology, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-secondary hover:bg-accent text-sm rounded-full transition-colors cursor-default"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex space-x-4">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-4 h-4 mr-1" />
              Code
            </a>
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              Live Demo
            </a>
          </div>

          {featured && (
            <div className="text-xs text-primary font-medium">
              ⭐ Featured Project
            </div>
          )}
        </div>
      </div>

      {/* Animated border on hover */}
      <div
        className={`absolute inset-0 rounded-lg border-2 border-primary transition-opacity duration-300 pointer-events-none ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
