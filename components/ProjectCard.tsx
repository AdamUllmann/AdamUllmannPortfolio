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
      data-oid="f40arfy"
    >
      {featured && (
        <div className="absolute top-4 right-4 z-10" data-oid="s3zsyce">
          <div
            className="flex items-center bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium"
            data-oid="fyh.:gk"
          >
            <Star className="w-3 h-3 mr-1 fill-current" data-oid="9q82z:o" />
            Featured
          </div>
        </div>
      )}

      {/* Project Image Placeholder */}
      <div
        className="relative h-48 bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 overflow-hidden"
        data-oid="7d6gm9r"
      >
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
          data-oid="jlt7-dv"
        />
        <div
          className="absolute inset-0 flex items-center justify-center"
          data-oid="_p:q:j8"
        >
          <div
            className="text-6xl font-bold text-primary/20 select-none"
            data-oid="rlb2npf"
          >
            {title.charAt(0)}
          </div>
        </div>

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 bg-primary/90 flex items-center justify-center space-x-4 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          data-oid="bmz6fx4"
        >
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
            onClick={(e) => e.stopPropagation()}
            data-oid="v6mb9g5"
          >
            <Github className="w-6 h-6 text-white" data-oid="oj5_zug" />
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
            onClick={(e) => e.stopPropagation()}
            data-oid="9mz861j"
          >
            <ExternalLink className="w-6 h-6 text-white" data-oid="lseish:" />
          </a>
        </div>
      </div>

      <div className="p-6" data-oid="6y_w2po">
        <h3
          className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors"
          data-oid="64rw3es"
        >
          {title}
        </h3>

        <p
          className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed"
          data-oid="n_05:qa"
        >
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4" data-oid="t_tvt7c">
          {tech.map((technology, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-secondary hover:bg-accent text-sm rounded-full transition-colors cursor-default"
              data-oid="zo2s17v"
            >
              {technology}
            </span>
          ))}
        </div>

        <div
          className="flex items-center justify-between pt-4 border-t border-border"
          data-oid="r7vo5fl"
        >
          <div className="flex space-x-4" data-oid="ga-un_w">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
              data-oid="lcrjzen"
            >
              <Github className="w-4 h-4 mr-1" data-oid="33npx1a" />
              Code
            </a>
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
              data-oid="huornr:"
            >
              <ExternalLink className="w-4 h-4 mr-1" data-oid="2km9a8e" />
              Live Demo
            </a>
          </div>

          {featured && (
            <div
              className="text-xs text-primary font-medium"
              data-oid="1of:uwa"
            >
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
        data-oid="747w7.9"
      />
    </div>
  );
}
