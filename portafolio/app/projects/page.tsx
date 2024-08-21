"use client";
import React, { useEffect, useState } from "react";
import { Navigation } from "../components/nav";
import Spline from '@splinetool/react-spline';
import data from "../project-certifications.json"; // Asegúrate de ajustar la ruta según sea necesario

// Define una interfaz para el tipo de datos
interface Project {
  name: string;
  image: string;
  link: string;
}

interface Certification {
  name: string;
  image: string;
  link: string;
}

export default function ProjectsPage() {
  // Especifica los tipos explícitamente
  const [projects, setProjects] = useState<Project[]>([]);
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentCertificationIndex, setCurrentCertificationIndex] = useState(0);

  useEffect(() => {
    // Aquí cargamos los datos del JSON
    setProjects(data.projects);
    setCertifications(data.certifications);
  }, []);

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const nextCertification = () => {
    setCurrentCertificationIndex((prevIndex) =>
      prevIndex === certifications.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevCertification = () => {
    setCurrentCertificationIndex((prevIndex) =>
      prevIndex === 0 ? certifications.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative pb-16 bg-black text-zinc-100">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          {projects.length > 0 && (
            <div className="carousel">
              <button onClick={prevProject} className="prev-btn">&#10094;</button>
              <div className="carousel-item">
                <a href={projects[currentProjectIndex].link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={projects[currentProjectIndex].image}
                    alt={projects[currentProjectIndex].name}
                    className="w-full h-auto"
                  />
                  <p className="text-center mt-4">{projects[currentProjectIndex].name}</p>
                </a>
              </div>
              <button onClick={nextProject} className="next-btn">&#10095;</button>
            </div>
          )}
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Certifications
          </h2>
          {certifications.length > 0 && (
            <div className="carousel">
              <button onClick={prevCertification} className="prev-btn">&#10094;</button>
              <div className="carousel-item">
                <a href={certifications[currentCertificationIndex].link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={certifications[currentCertificationIndex].image}
                    alt={certifications[currentCertificationIndex].name}
                    className="w-full h-auto"
                  />
                  <p className="text-center mt-4">{certifications[currentCertificationIndex].name}</p>
                </a>
              </div>
              <button onClick={nextCertification} className="next-btn">&#10095;</button>
            </div>
          )}
        </div>
      </div>

      <div className="bg-black hidden md:block">
        <Spline 
          scene="https://prod.spline.design/6aFHMo3aRwFLB37r/scene.splinecode" 
        />
      </div>
    </div>
  );
}
