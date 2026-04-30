import { Link } from "react-router-dom"
import { useState } from "react";
import { getWeightOnPlanet } from '../Planets/TypeScript/Gravity';
function Venera() {
    const [earthWeight, setEarthWeight] = useState("");
    const result = getWeightOnPlanet(earthWeight, 0.91);
    return (
        <div className="min-h-screen bg-[#020205] py-20 px-6 font-sans">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-200 to-sky-100 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

                    <div className="relative bg-black/40 border border-white/10 p-2 rounded-3xl backdrop-blur-md">
                        <img
                            src="https://s0.rbk.ru/v6_top_pics/media/img/2/15/347086156890152.png"
                            alt="Andromeda"
                            className="rounded-2xl w-full opacity-1 h-[400px] object-cover opacity-90 group-hover:opacity-100 transition"
                        />
                        <div className="grid grid-cols-3 gap-4 p-6 text-center">
                            <div>
                                <p className="text-[10px] text-[#8eb3d4] uppercase tracking-widest">Type</p>
                                <p className="text-sky-100 font-bold">Terrestrial</p>
                            </div>
                            <div className="border-x border-white/10">
                                <p className="text-[10px] text-[#8eb3d4] uppercase tracking-widest">Gravity</p>
                                <p className="text-sky-100 font-bold">8.87 m/s²</p>
                            </div>
                            <div className="border-x border-white/10">
                                <p className="text-[10px] text-[#8eb3d4] uppercase tracking-widest">Temp</p>
                                <p className="text-sky-100 font-bold">+464°C</p>
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-500 uppercase tracking-widest">Mag</p>
                                <p className="text-sky-100 font-bold">-4.4</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-8">
                    <div>
                        <h1 className="text-6xl font-black text-white mb-2 tracking-tighter uppercase">
                            Venus
                        </h1>
                        <div className="h-1 w- bg-sky-100"></div>
                    </div>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Venus is Earth's sinister "twin." Despite being similar in size and mass, it has transformed into
                        a literal hell due to a runaway greenhouse effect. Its atmosphere, composed of 96% carbon dioxide, is so thick that
                        surface pressure is 90 times greater than Earth's—equivalent to being 900 meters underwater. There are no seasons here,
                        and the sky is permanently choked with clouds of sulfuric acid. Venus is also unique for its rotation: it spins backward
                        (retrograde) on its axis, and a single day there lasts longer than an entire Venusian year.
                    </p>
                    <div class="space-y-4">
                        <div class="bg-white/5 p-4 rounded-xl border border-sky-100">
                            <p class="text-sky-400">Greenhouse Inferno</p>
                            <p class="text-sky-800 text-sm">This is the hottest planet in the system. Even lead melts on its surface. The thick atmosphere traps solar heat like a thermos, creating a lethal environment with no escape.</p>
                        </div>

                        <div class="bg-white/5 p-4 rounded-xl border border-sky-100">
                            <p class="text-sky-400 font-bold"> Acidic Skies</p>
                            <p class="text-sky-800 text-sm">Venusian clouds are made of sulfuric acid droplets. They are so thick that very little sunlight ever reaches the surface, creating a perpetual, eerie orange twilight.</p>
                        </div>

                        <div class="bg-white/5 p-4 rounded-xl border border-sky-100">
                            <p class="text-sky-400 font-bold">Backward World</p>
                            <p class="text-sky-800 text-sm">Venus is one of only two planets where the Sun rises in the west and sets in the east. It rotates so slowly that its core barely generates any magnetic field.</p>
                        </div>

                        <div class="bg-white/5 p-4 rounded-xl border border-sky-100">
                            <p class="text-yellow-500 font-bold">Planet and Star Size Comparison</p>
                            <a href="https://mr21.github.io/space-object-comparison/#earth,venus">
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
export default Venera;