import { Link } from "react-router-dom"
import { useState } from "react";
import { getWeightOnPlanet } from '../Planets/TypeScript/Gravity';
function Saturn() {
    const [earthWeight, setEarthWeight] = useState("");
    const result = getWeightOnPlanet(earthWeight, 1.06);
    return (
        <div className="min-h-screen bg-[#020205] py-20 px-6 font-sans">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-yellow-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

                    <div className="relative bg-black/40 border border-white/10 p-2 rounded-3xl backdrop-blur-md">
                        <img
                            src="https://static.tildacdn.com/tild3933-6263-4966-b039-326237646362/6ad57f557f1391e8798e.jpg"
                            alt="Andromeda"
                            className="rounded-2xl w-full opacity-1 h-[400px] object-cover opacity-90 group-hover:opacity-100 transition"
                        />
                        <div className="grid grid-cols-3 gap-4 p-6 text-center">
                            <div>
                                <p className="text-[10px] text-[#8eb3d4] uppercase tracking-widest">Type</p>
                                <p className="text-sky-100 font-bold">Gas gigant</p>
                            </div>
                            <div className="border-x border-white/10">
                                <p className="text-[10px] text-[#8eb3d4] uppercase tracking-widest">Gravity</p>
                                <p className="text-sky-100 font-bold">10.44 м/с²</p>
                            </div>
                            <div className="border-x border-white/10">
                                <p className="text-[10px] text-[#8eb3d4] uppercase tracking-widest">Temp</p>
                                <p className="text-sky-100 font-bold">-178°C</p>
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-500 uppercase tracking-widest">Mag</p>
                                <p className="text-sky-100 font-bold">+0.46</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-8">
                    <div>
                        <h1 className="text-6xl font-black text-white mb-2 tracking-tighter uppercase">
                            Saturn
                        </h1>
                        <div className="h-1 w- bg-gradient-to-r from-yellow-500 to-yellow-800"></div>
                    </div>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Saturn is the sixth planet from the Sun and the most distant world visible to the naked eye.
                        Like Jupiter, it is a gas giant made mostly of hydrogen and helium. Despite its massive volume,
                        Saturn has the lowest density of all the planets—it is about 30% less dense than water. Its crown
                        jewel is a dazzling system of rings, composed of billions of ice and rock particles ranging from tiny
                        grains to giant boulders. Saturn is also the "king of moons," with 146 officially confirmed satellites—more
                        than any other planet in the solar system.</p>
                    <div class="space-y-4">
                        <div class="bg-white/5 p-4 rounded-xl border border-sky-100">
                            <p class="text-yellow-600">Composition of the Rings</p>
                            <p class="text-yellow-800 text-sm">Saturn's rings are not a solid disk but a collection of icy fragments. While they are incredibly wide (up to 282,000 km), they are remarkably thin, with an average thickness of only about 10 to 30 meters.</p>
                        </div>
                        <div class="bg-white/5 p-4 rounded-xl border border-sky-100">
                            <p class="text-yellow-600 font-bold"> The Hexagon Storm</p>
                            <p class="text-yellow-800 text-sm"> JA unique, six-sided jet stream known as "The Hexagon" rages at Saturn's north pole. Each side of this hexagon is wider than Earth's diameter, and scientists are still studying how this shape remains stable for decades.</p>
                        </div>

                        <div class="bg-white/5 p-4 rounded-xl border border-sky-100">
                            <p class="text-yellow-600 font-bold">Titan: The World of Lakes</p>
                            <p class="text-yellow-800 text-sm">Saturn's largest moon, Titan, is bigger than Mercury. It is the only place in the solar system (besides Earth) known to have liquid rivers and lakes, though they are filled with liquid methane and ethane instead of water.</p>
                        </div>
                        <div class="bg-white/5 p-4 rounded-xl border border-sky-100">
                            <p class="text-yellow-600 font-bold">Temperature & Winds</p>
                            <p class="text-yellow-800 text-sm"> The average temperature is -178°C (-288°F). Superfast winds in the upper atmosphere can reach speeds of 1,800 km/h (1,118 mph), which is significantly faster than those on Jupiter.</p>
                        </div>
                        <div class="bg-white/5 p-4 rounded-xl border border-sky-100">
                            <p class="text-yellow-500 font-bold">Planet and Star Size Comparison</p>
                            <a href="https://mr21.github.io/space-object-comparison/#earth,saturn">
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
export default Saturn;