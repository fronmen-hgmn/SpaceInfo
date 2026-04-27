import { Link } from "react-router-dom"
import { useState } from "react";
import { getWeightOnPlanet } from '../Planets/TypeScript/Gravity';
function Mercury() {
    const [earthWeight, setEarthWeight] = useState("");
    const result = getWeightOnPlanet(earthWeight, 0.38);
    return (
        <div className="min-h-screen bg-[#020205] py-20 px-6 font-sans">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

                    <div className="relative bg-black/40 border border-white/10 p-2 rounded-3xl backdrop-blur-md">
                        <img
                            src="https://starwalk.space/gallery/images/facts-about-mercury/1140x641.jpg"
                            alt="Andromeda"
                            className="rounded-2xl w-full opacity-1 h-[400px] object-cover opacity-90 group-hover:opacity-100 transition"
                        />
                        <div className="grid grid-cols-3 gap-4 p-6 text-center">
                            <div>
                                <p className="text-[10px] text-[#8eb3d4] uppercase tracking-widest">Type</p>
                                <p className="text-orange-400 font-bold">Terrestrial</p>
                            </div>
                            <div className="border-x border-white/10">
                                <p className="text-[10px] text-[#8eb3d4] uppercase tracking-widest">Gravity</p>
                                <p className="text-orange-400 font-bold">3.7 m/s²</p>
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-500 uppercase tracking-widest">Mag</p>
                                <p className="text-orange-400 font-bold">-1.9</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-8">
                    <div>
                        <h1 className="text-6xl font-black text-white mb-2 tracking-tighter uppercase">
                            MERCURY THE IRON PLANET
                        </h1>
                        <div className="h-1 w- bg-orange-600"></div>
                    </div>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Mercury is not just a small rocky sphere; it is a true anomaly of our system.
                        As the closest planet to the Sun, it races along its orbit at a staggering speed of nearly
                        47 kilometers per second, completing a full revolution in just 88 Earth days. However, due to
                        complex gravitational interplay with the Sun (3:2 spin-orbit resonance), a single solar day on
                        Mercury lasts about 176 Earth days. This means that a day there is effectively twice as long as its year!
                        Despite its proximity to our star, Mercury is a world of both fire and ice. Lacking a substantial
                        atmosphere to trap heat, its surface is a realm of thermal chaos. While the sunlit side reaches a
                        lead-melting 430°C (800°F), the night side plunges into a cosmic freeze of -180°C (-290°F). NASA’s
                        MESSENGER mission shocked scientists by discovering water ice deposits in permanently shadowed polar
                        craters—ice that has survived for billions of years just steps away from the solar furnace.
                    </p>
                    <div class="space-y-4">
                        <div class="bg-white/5 p-4 rounded-xl border border-orange-300">
                            <p class="text-orange-400">Caloris Basin</p>
                            <p class="text-orange-800 text-sm">One of the largest impact basins in the solar system, spanning roughly 1,550 km in diameter. The impact billions of years ago was so
                                cataclysmic that it triggered massive lava flows and created concentric mountain rings up to 2 km high. Seismic waves from this event
                                traveled through the entire planet's body, focusing on the exact opposite side to create a chaotic, jumbled landscape known as "Weird Terrain."</p>
                        </div>

                        <div class="bg-white/5 p-4 rounded-xl border border-orange-300">
                            <p class="text-orange-400 font-bold">Magnetic Field</p>
                            <p class="text-orange-800 text-sm">Mercury is the only terrestrial planet besides Earth to possess a global magnetic field. Although it is 100 times weaker than Earth's, it is incredibly active. Mercury’s magnetosphere constantly interacts with the solar wind, creating intense "magnetic tornadoes" that funnel hot solar plasma directly onto the planet's surface, contributing to the erosion of its outer crust.</p>
                        </div>

                        <div class="bg-white/5 p-4 rounded-xl border border-orange-300">
                            <p class="text-orange-400 font-bold">The Fragile Exosphere</p>
                            <p class="text-orange-800 text-sm">Mercury lacks a substantial atmosphere, having only a thin exosphere composed of oxygen, sodium, and hydrogen. The solar wind constantly blasts atoms off the surface, stretching them into a giant, glowing tail over 24 million kilometers long. Without an atmosphere to scatter light, Mercury’s sky remains pitch black even when the Sun is directly overhead.</p>
                        </div>

                        <div class="bg-white/5 p-4 rounded-xl border border-orange-300">
                            <p class="text-yellow-500 font-bold">Planet and Star Size Comparison</p>
                            <a href="https://mr21.github.io/space-object-comparison/#earth,mercury">
                                <button className="border rounded-xl bg-yellow-700 border-yellow-500 text-white p-2 m-2 transition-all hover:bg-yellow-900 ">Compare Sizes</button>
                            </a>
                        </div>
                       <div class="bg-white/5 p-4 rounded-xl border border-sky-100">
                         <h3 className="text-orange-500 font-bold">Compare your weight on this planet</h3>
                         <br />
                             <input
                                type="number"
                                placeholder="Weight on Earth"
                                className="p-1 rounded-lg bg-slate-700/50 text-white w-33 h-10 mr-10 outline-none"
                                value={earthWeight}
                                onChange={(e) => setEarthWeight(e.target.value)}
                            />

                            <input
                                type="text"
                                placeholder="Result"
                                className="p-2 rounded-lg bg-slate-800/80 text-[#4CC9F0] font-bold w-32 outline-none"
                                value={result ? result + " KG" : ""}
                                readOnly
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Mercury;