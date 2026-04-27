import { Link } from "react-router-dom"
import { useState } from "react";
import { getWeightOnPlanet } from '../Planets/TypeScript/Gravity';
function Uranus() {
    const [earthWeight, setEarthWeight] = useState("");
    const result = getWeightOnPlanet(earthWeight, 1.19);
    return (
        <div className="min-h-screen bg-[#020205] py-20 px-6 font-sans">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

                    <div className="relative bg-black/40 border border-white/10 p-2 rounded-3xl backdrop-blur-md">
                        <img
                            src="https://cdn.discovermagazine.com/assets/image/57907/furthest-planet-from-the-sun-neptune-x.jpg"
                            alt="Andromeda"
                            className="rounded-2xl w-full opacity-1 h-[400px] object-cover opacity-90 group-hover:opacity-100 transition"
                        />
                        <div className="grid grid-cols-3 gap-4 p-6 text-center">
                            <div>
                                <p className="text-[10px] text-[#8eb3d4] uppercase tracking-widest">Type</p>
                                <p className="text-sky-100 font-bold">	Ice Giant</p>
                            </div>
                            <div className="border-x border-white/10">
                                <p className="text-[10px] text-[#8eb3d4] uppercase tracking-widest">Gravity</p>
                                <p className="text-sky-100 font-bold">11.15 m/s²</p>
                            </div>
                            <div className="border-x border-white/10">
                                <p className="text-[10px] text-[#8eb3d4] uppercase tracking-widest">Temp</p>
                                <p className="text-sky-100 font-bold">	-201°C</p>
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-500 uppercase tracking-widest">Mag</p>
                                <p className="text-sky-100 font-bold">+7.67</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-8">
                    <div>
                        <h1 className="text-6xl font-black text-white mb-2 tracking-tighter uppercase">
                            Neptune
                        </h1>
                        <div className="h-1 w- bg-gradient-to-r from-blue-600 to-blue-300"></div>
                    </div>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Neptune is the eighth and most distant planet from the Sun, a world of eternal twilight and supersonic winds. Its striking blue color comes from methane in its atmosphere, which absorbs red light. Neptune was the first planet to be discovered using mathematical predictions rather than a telescope. A year on Neptune lasts nearly 165 Earth years, meaning it has completed only one full orbit since its discovery in 1846. Despite its vast distance from the Sun, Neptune possesses a powerful internal heat source that drives the fastest winds in the solar system.</p>
                    <div class="space-y-4">
                        <div class="bg-white/5 p-4 rounded-xl border border-sky-100">
                            <p class="text-blue-200">Supersonic Storms</p>
                            <p class="text-blue-800 text-sm"> Neptune has the strongest winds in the solar system, reaching speeds of 2,100 km/h (1,300 mph)—faster than the speed of sound. Giant storms, like the "Great Dark Spot," which was the size of Earth, frequently rage across its surface. </p>
                        </div>

                        <div class="bg-white/5 p-4 rounded-xl border border-sky-100">
                            <p class="text-blue-200 font-bold"> Triton: The Rogue Moon</p>

                            <p class="text-blue-800 text-sm"> Neptune's largest moon, Triton, orbits the planet in a backward direction (retrograde). It is the only large moon to do so, proving it was likely captured from the Kuiper Belt by Neptune's immense gravity.</p>
                        </div>

                        <div class="bg-white/5 p-4 rounded-xl border border-sky-100">
                            <p class="text-blue-200 font-bold"> The Pressurized Ocean</p>

                            <p class="text-blue-800 text-sm">Beneath Neptune's thick atmosphere lies a hot, dense fluid of water, methane, and ammonia. Due to crushing pressure, scientists suspect that rain made of literal diamonds falls deep within the planet</p>
                        </div>

                        <div class="bg-white/5 p-4 rounded-xl border border-sky-100">
                            <p class="text-blue-200 font-bold"> Faint Ring Arcs</p>

                            <p class="text-blue-800 text-sm">  Neptune has five rings, but they are unusual because their material is distributed unevenly. This creates the appearance of "arcs" or incomplete rings, held in place by the gravity of nearby moons.</p>
                        </div>
                        <div class="bg-white/5 p-4 rounded-xl border border-sky-100">
                            <p class="text-blue-500 font-bold">Planet and Star Size Comparison</p>
                            <a href="https://mr21.github.io/space-object-comparison/#earth,neptune">
                                <button className="border rounded-xl bg-blue-700 border-blue-500 text-white p-2 m-2 transition-all hover:bg-blue-900 ">Compare Sizes</button>
                            </a>
                        </div>
                       <div class="bg-white/5 p-4 rounded-xl border border-sky-100">
                         <h3 className="text-blue-500 font-bold">Compare your weight on this planet</h3>
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
export default Uranus;