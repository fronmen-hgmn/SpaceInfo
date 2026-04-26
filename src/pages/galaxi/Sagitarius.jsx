import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
function Sagitarius() {
    return (

        <div class="min-h-screen bg-[#020205] py-20 px-6 font-sans text-white">

            <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">


                <div class="rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/40 to-indigo-900/20 border border-purple-500/20 shadow-lg p-6">

                    <img
                        src="https://cdn.mos.cms.futurecdn.net/umts9He6Vp5YuM3DCTJwb9.jpg"
                        alt="Sagittarius Dwarf Spheroidal Galaxy"
                        class="w-full h-[400px] object-cover rounded-xl opacity-90" />
                    <div class="mt-6 grid grid-cols-3 text-center text-sm text-purple-300">
                        <div>
                            <p class="text-gray-400">TYPE</p>
                            <p class="font-bold">Dwarf Spheroidal</p>
                        </div>
                        <div>
                            <p class="text-gray-400">STARS</p>
                            <p class="font-bold">~100M+</p>
                        </div>
                        <div>
                            <p class="text-gray-400">ORBIT</p>
                            <p class="font-bold">Milky Way</p>
                        </div>
                    </div>
                </div>

                <div>

                    <h1 class="text-5xl font-bold tracking-widest mb-4">
                        SAGITTARIUS DWARF GALAXY
                    </h1>

                    <div class="w-66 h-1 bg-purple-400 mb-6"></div>

                    <p class="text-gray-300 leading-relaxed mb-6">
                        The Sagittarius Dwarf Spheroidal Galaxy (Sgr dSph) is a ghost-like neighbor that remained hidden from humanity for centuries. It was only discovered in 1994 because it is located on the opposite side of the Galactic Center from Earth, obscured by the thick dust and stars of our own Milky Way. Despite its proximity, it took modern infrared telescopes to finally "see" through the cosmic fog and reveal its existence.
                    </p>

                    <p class="text-gray-300 leading-relaxed mb-6">
                        This galaxy is currently the primary victim of galactic cannibalism. As it orbits our home galaxy, the Milky Way’s immense gravity is literally ripping it apart. This violent process has created the Sagittarius Stream — a colossal "river" of stars and debris that wraps around the Milky Way like a cosmic ribbon. These stellar loops are so vast that they stretch over one million light-years across space.
                    </p>

                    <p class="text-gray-300 leading-relaxed mb-8">
                        Most fascinatingly, scientists believe that past collisions with this dwarf galaxy may have actually shaped the Milky Way. Each time Sagittarius crashed through our galactic disk, it sent ripples through the stars, potentially triggering the formation of our Sun and the Solar System 4.7 billion years ago. Today, it has lost nearly all of its gas and original shape, destined to be entirely dissolved and absorbed by our galaxy in the near future.
                    </p>

                    <div class="space-y-4">

                        <div class="bg-white/5 p-4 rounded-xl border border-white/10">
                            <p class="text-purple-400 font-bold">1 — Distance</p>
                            <p class="text-gray-400 text-sm">~70,000 light-years from Earth</p>
                        </div>

                        <div class="bg-white/5 p-4 rounded-xl border border-white/10">
                            <p class="text-indigo-400 font-bold">2 — Status</p>
                            <p class="text-gray-400 text-sm">Actively merging with the Milky Way</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sagitarius;
