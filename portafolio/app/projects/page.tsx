import React from "react";
import { Navigation } from "../components/nav";
import Spline from '@splinetool/react-spline';

export default function ProjectsPage() {
  return (
    <div className="relative pb-16 bg-black text-zinc-100">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Im working on this page, see you soon
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />
        <div className="relative pb-16">
          
      <Navigation />
    </div>
      </div>
      <div className="bg-black">
        <Spline 
        scene="https://prod.spline.design/6aFHMo3aRwFLB37r/scene.splinecode" 
        />
      </div>
    </div>
  );
}
