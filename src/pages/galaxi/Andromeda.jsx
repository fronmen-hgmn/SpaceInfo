import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
const Andromeda = () => {
  return (
    <div className="min-h-screen bg-[#020205] py-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

          <div className="relative bg-black/40 border border-white/10 p-2 rounded-3xl backdrop-blur-md">
            <img
              src="https://naukatv.ru/upload/images/original/48/48a0bd104c7f18e623974c8430994a8559364c48.jpg"
              alt="Andromeda"
              className="rounded-2xl w-full opacity-1 h-[400px] object-cover opacity-90 group-hover:opacity-100 transition"
            />
            <div className="grid grid-cols-3 gap-4 p-6 text-center">
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">Type</p>
                <p className="text-cyan-400 font-bold">Sb (Spiral)</p>
              </div>
              <div className="border-x border-white/10">
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">Stars</p>
                <p className="text-cyan-400 font-bold">1 trillion</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">Mag</p>
                <p className="text-cyan-400 font-bold">3.44</p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <div>
            <h1 className="text-6xl font-black text-white mb-2 tracking-tighter">
              ANDROMEDA
            </h1>
            <div className="h-1 w- bg-cyan-500"></div>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed">
            While the Milky Way is impressive, Andromeda (M31) is a true cosmic titan, containing approximately one trillion stars — more than double our own galaxy's count. It is one of the few galaxies that exhibits a blueshift, meaning it is not moving away due to the expansion of the universe, but is being pulled toward us by gravitational
            attraction. Currently, it is hurtling through space at an incredible speed of roughly 400,000 kilometers per hour.

            At its very heart, Andromeda hides a bizarre secret: a double nucleus. Observations from
            the Hubble Space Telescope revealed two distinct concentrations of
            stars at its core, which astronomers believe is the remains of a smaller galaxy "swallowed" by Andromeda millions of years ago. This giant isn't traveling alone; it is the center of its own massive ecosystem, orbited by at least 14 dwarf satellite galaxies.

            The galaxy is also surrounded by an enormous stellar halo that stretches
            much further into space than previously thought. This halo contains "trails"
            of stars, which are direct evidence of galactic cannibalism — proof that Andromeda
            has been actively absorbing other galaxies for billions of years. When the final merger
            with the Milky Way occurs, our combined forces will create a new, massive elliptical galaxy, forever changing the structure of our Local Group.
          </p>
          <div class="space-y-4">
            <div class="bg-white/5 p-4 rounded-xl border border-white/10">
              <p class="text-cyan-400 font-bold">1 Distance</p>
              <p class="text-gray-400 text-sm">Distance: 163,000 light-years  Active star-forming region .</p>
            </div>

            <div class="bg-white/5 p-4 rounded-xl border border-white/10">
              <p class="text-purple-400 font-bold">2  Fath</p>
              <p class="text-gray-400 text-sm">The collision in 4 billion years 2.52 million light-years .</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Andromeda;

