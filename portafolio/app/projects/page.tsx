"use client"; // Asegúrate de que es un componente cliente

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Para la navegación
import data from "../project-certifications.json"; // Ajusta la ruta si es necesario
import { Navigation } from "../components/nav"; // Importa el componente de navegación
import Spline from '@splinetool/react-spline'; // Asegúrate de importar Spline

interface ProjectCertification {
  name: string;
  image: string;
  link: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<ProjectCertification[]>([]);
  const [certifications, setCertifications] = useState<ProjectCertification[]>([]);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentCertificationIndex, setCurrentCertificationIndex] = useState(0);
  
  const router = useRouter(); // Para la navegación

  useEffect(() => {
    setProjects(data.projects);
    setCertifications(data.certifications);
  }, []);

  const nextProjectSlide = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProjectSlide = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const nextCertificationSlide = () => {
    setCurrentCertificationIndex((prevIndex) =>
      prevIndex === certifications.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevCertificationSlide = () => {
    setCurrentCertificationIndex((prevIndex) =>
      prevIndex === 0 ? certifications.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative min-h-screen">
      <Spline
        scene="https://prod.spline.design/6aFHMo3aRwFLB37r/scene.splinecode"
        className="absolute inset-0 z-[-1] w-full h-full"
      />
      <div className="relative pb-16 bg-transparent text-zinc-100">
        <Navigation /> {/* Reutiliza el componente de navegación para mantener el estilo */}
        <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32 mt-16">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              Projects
            </h2>
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform ease-in-out duration-500"
                style={{
                  transform: `translateX(-${currentProjectIndex * (100 / 3)}%)`,
                }}
              >
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="w-[calc(100%/3)] p-4"
                    style={{
                      opacity: index === currentProjectIndex ? 1 : 0.5,
                      transform:
                        index === currentProjectIndex ? "scale(1)" : "scale(0.9)",
                    }}
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-auto rounded-lg shadow-lg"
                      />
                      <p className="text-center mt-4">{project.name}</p>
                    </a>
                  </div>
                ))}
              </div>

              <button
                onClick={prevProjectSlide}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-transparent text-white px-3 py-1 rounded-full transition-transform duration-300 ease-in-out hover:scale-125"
                style={{ fontSize: "24px" }}
              >
                &lt; {/* Símbolo de flecha hacia la izquierda */}
              </button>
              <button
                onClick={nextProjectSlide}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-transparent text-white px-3 py-1 rounded-full transition-transform duration-300 ease-in-out hover:scale-125"
                style={{ fontSize: "24px" }}
              >
                &gt; {/* Símbolo de flecha hacia la derecha */}
              </button>
            </div>
          </div>

          <div className="w-full h-px bg-zinc-800" />

          <div className="max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              Certifications
            </h2>
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform ease-in-out duration-500"
                style={{
                  transform: `translateX(-${currentCertificationIndex * (100 / 3)}%)`,
                }}
              >
                {certifications.map((certification, index) => (
                  <div
                    key={index}
                    className="w-[calc(100%/3)] p-4"
                    style={{
                      opacity: index === currentCertificationIndex ? 1 : 0.5,
                      transform:
                        index === currentCertificationIndex ? "scale(1)" : "scale(0.9)",
                    }}
                  >
                    <a
                      href={certification.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={certification.image}
                        alt={certification.name}
                        className="w-full h-auto rounded-lg shadow-lg"
                      />
                      <p className="text-center mt-4">{certification.name}</p>
                    </a>
                  </div>
                ))}
              </div>

              <button
                onClick={prevCertificationSlide}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-transparent text-white px-3 py-1 rounded-full transition-transform duration-300 ease-in-out hover:scale-125"
                style={{ fontSize: "24px" }}
              >
                &lt; {/* Símbolo de flecha hacia la izquierda */}
              </button>
              <button
                onClick={nextCertificationSlide}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-transparent text-white px-3 py-1 rounded-full transition-transform duration-300 ease-in-out hover:scale-125"
                style={{ fontSize: "24px" }}
              >
                &gt; {/* Símbolo de flecha hacia la derecha */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
