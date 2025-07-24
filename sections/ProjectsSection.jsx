"use client";
import React, { useState, useEffect } from "react";
import { websiteProjects } from "@/assets/data/dummydata";

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("website");
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const result = websiteProjects.filter(
      (item) => item.category === activeCategory
    );
    setFilteredProjects(result);
  }, [activeCategory]);

  return (
    <section className="projects-section">
      <div className="container">
        <h2 className="heading-title">Our Websites Projects</h2>

<div className="projects-grid">
  {filteredProjects.map((project) => (
    <div key={project.id} className="project-card">
      <div className="image-wrapper">
        <img src={project.cover} alt={project.title} />
      </div>
      <h3>{project.title}</h3>
      <div className="button-wrapper">
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <button className="view-btn">
            <span>View Project</span>
          </button>
        </a>
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
};

export default ProjectsSection;
