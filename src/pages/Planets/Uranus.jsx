import { Link } from "react-router-dom"
import { useState } from "react";
import { getWeightOnPlanet } from '../Planets/TypeScript/Gravity';
function Uranus() {
    const [earthWeight, setEarthWeight] = useState("");
    const result = getWeightOnPlanet(earthWeight, 0.92);
    return (
        <div className="min-h-screen bg-[#020205] py-20 px-6 font-sans">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-emerald-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

                    <div className="relative bg-black/40 border border-white/10 p-2 rounded-3xl backdrop-blur-md">
                        <img
                            src="https://img.freepik.com/free-photo/abstract-sphere-glows-blue-underwater-liquid-generated-by-ai_188544-22051.jpg?semt=ais_hybrid&w=740&q=80https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/09/p/i/a/0/PIA01492-1.jpg?w=2188&h=2185&fit=clip&crop=faces%2Cfocalpoint"
                            alt="Andromeda"
                            className="rounded-2xl w-full opacity-1 h-[400px] object-cover opacity-90 group-hover:opacity-100 transition"
                        />
                        <div className="grid grid-cols-3 gap-4 p-6 text-center">
                            <div>
                                <p className="text-[10px] text-[#8eb3d4] uppercase tracking-widest">Type</p>
                                <p className="text-sky-100 font-bold">Ice giant</p>
                            </div>
                            <div className="border-x border-white/10">
                                <p className="text-[10px] text-[#8eb3d4] uppercase tracking-widest">Gravity</p>
                                <p className="text-sky-100 font-bold">	8.69 м/с²</p>
                            </div>
                            <div className="border-x border-white/10">
                                <p className="text-[10px] text-[#8eb3d4] uppercase tracking-widest">Temp</p>
                                <p className="text-sky-100 font-bold">-224°C</p>
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-500 uppercase tracking-widest">Mag</p>
                                <p className="text-sky-100 font-bold">+5.38</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-8">
                    <div>
                        <h1 className="text-6xl font-black text-white mb-2 tracking-tighter uppercase">
                            Uranus
                        </h1>
                        <div className="h-1 w- bg-gradient-to-r from-emerald-600 to-emerald-300"></div>
                    </div>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Uranus is the seventh planet from the Sun, shrouded in a soft cyan haze due to methane in its atmosphere. It is the only world in our system that rotates at an angle of 98 degrees—it literally rolls along its orbit like a ball. Scientists believe this orientation resulted from a colossal collision with an Earth-sized object in the distant past. Unlike the gas giants, Uranus is composed mostly of "ices"—a hot, dense fluid of water, methane, and ammonia above a small rocky core. It also features 13 faint rings and 28 known moons, named after characters from Shakespeare and Alexander Pope.</p>
                    <div class="space-y-4">
                        <div class="bg-white/5 p-4 rounded-xl border border-sky-100">
                            <p class="text-emerald-200">Diamond Rain</p>
                            <p class="text-emerald-800 text-sm">Deep inside Uranus, extreme pressure can split methane apart, releasing carbon that crystallizes and falls toward the core as actual diamonds.</p>
                        </div>
                        <div class="bg-white/5 p-4 rounded-xl border border-sky-100">
                            <p class="text-emerald-200 font-bold"> The Coldest World</p>
                            <p class="text-emerald-800 text-sm"> Even though Neptune is farther away, Uranus holds the record for the coldest atmosphere with a minimum temperature of -224°C (-371°F). It has very little internal heat.</p>
                        </div>

                        <div class="bg-white/5 p-4 rounded-xl border border-sky-100">
                            <p class="text-emerald-200 font-bold"> Magnetic Chaos</p>
                            <p class="text-emerald-800 text-sm">Uranus's magnetic field is offset from its center and tilted at 60 degrees relative to its rotation axis, creating chaotic and unstable auroras.</p>
                        </div>
                        <div class="bg-white/5 p-4 rounded-xl border border-sky-100">
                            <p class="text-emerald-200 font-bold">Seasonal Extremes</p>
                            <p class="text-emerald-800 text-sm"> Due to its axial tilt, one pole of Uranus faces the Sun for 42 years, while the other remains in total darkness. A single year on the planet lasts 84 Earth years.</p>
                        </div>
                         <div class="bg-white/5 p-4 rounded-xl border border-sky-100">
                            <p class="text-emerald-500 font-bold">Planet and Star Size Comparison</p>
                            <a href="https://mr21.github.io/space-object-comparison/#earth,uranus">
                                <button className="border rounded-xl bg-emerald-700 border-emerald-500 text-white p-2 m-2 transition-all hover:bg-emerald-900 ">Compare Sizes</button>
                            </a>
                        </div>
                        <div class="bg-white/5 p-4 rounded-xl border border-sky-100">
                         <h3 className="text-emerald-500 font-bold">Compare your weight on this planet</h3>
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