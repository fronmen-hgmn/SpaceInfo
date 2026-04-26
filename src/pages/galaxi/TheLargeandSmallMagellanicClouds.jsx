import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

function TheLargeandSmallMagellanicClouds() {
    return (

        <div class="min-h-screen bg-[#020205] py-20 px-6 font-sans text-white">

            <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">


                <div class="rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900/40 to-cyan-900/20 border border-cyan-500/20 shadow-lg p-6">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/4/41/Magellanic_Clouds_%E2%80%95_Irregular_Dwarf_Galaxies.jpg"
                        alt="Large and Small Magellanic Clouds"
                        class="w-full h-[400px] object-cover rounded-xl opacity-90" />

                    <div class="mt-6 grid grid-cols-3 text-center text-sm text-cyan-300">
                        <div>
                            <p class="text-gray-400">TYPE</p>
                            <p class="font-bold">Dwarf Irregular</p>
                        </div>
                        <div>
                            <p class="text-gray-400">GALAXIES</p>
                            <p class="font-bold">2 (LMC + SMC)</p>
                        </div>
                        <div>
                            <p class="text-gray-400">SATELLITES</p>
                            <p class="font-bold">Milky Way</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 class="text-5xl font-bold tracking-widest mb-4">
                        MAGELLANIC CLOUDS
                    </h1>
                    <div class="w-66 h-1 bg-cyan-400 mb-6"></div>
                    <p class="text-gray-300 leading-relaxed mb-6">
                        The Magellanic Clouds are far more than just "neighbors" — they are genuine cosmic laboratories.
                        Named after the explorer Ferdinand Magellan, who observed them during his circumnavigation in 1519, these dwarf galaxies continue to surprise astronomers
                        to this day.
                    </p>
                    <p class="text-gray-300 leading-relaxed mb-6">
                        The most fascinating discovery is the Magellanic Bridge — a massive stream of neutral gas and young
                        stars stretching over 75,000 light-years, which the two galaxies are literally pulling out of each other. Furthermore,
                        the Large Magellanic Cloud currently harbors a "nursery" for new life: the Tarantula Nebula. It is the most active star-forming
                        region in the entire Local Group of galaxies. If it were as close to Earth as the Orion Nebula, it would span half the sky and cast
                        shadows at night.
                    </p>
                    <p class="text-gray-300 leading-relaxed mb-8">
                        However, their fate is already sealed: in about 2.4 billion years, the Milky Way will completely cannibalize its satellites,
                        turning them into fuel for the birth of millions of new suns.

                    </p>
                    <div class="space-y-4">
                        <div class="bg-white/5 p-4 rounded-xl border border-white/10">
                            <p class="text-cyan-400 font-bold">1 Large Magellanic Cloud</p>
                            <p class="text-gray-400 text-sm">Distance: ~163,000 light-years • Active star-forming region</p>
                        </div>
                        <div class="bg-white/5 p-4 rounded-xl border border-white/10">
                            <p class="text-purple-400 font-bold">2  Small Magellanic Cloud</p>
                            <p class="text-gray-400 text-sm">Distance: ~200,000 light-years • Irregular structure, rich in gas</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TheLargeandSmallMagellanicClouds;