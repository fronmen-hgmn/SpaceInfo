import { useNavigate } from "react-router-dom";
export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 text-white">
      <div className="max-w-3xl text-center backdrop-blur-sm bg-black/30 p-8 rounded-2xl shadow-xl">
        <h1 className="text-5xl font-bold text-cyan-400 mb-6">
          About SpaceInfo
        </h1>

        <p className="text-lg leading-8 text-gray-200">
          SpaceInfo is a space exploration website created to help users discover
          fascinating information about planets, stars, and galaxies.
          <br /><br />
          The goal of this project is to make astronomy more interactive and
          visually engaging through modern web design and smooth navigation.
        </p>

        <p className="mt-6 text-cyan-300 text-sm">
          Built with React, Tailwind CSS and passion for the universe 
        </p>
      </div>
    </section>
  );
}