import { useState } from "react";
import { getWeightOnPlanet } from '../Planets/TypeScript/Gravity';
function Earth() {
    const [earthWeight, setEarthWeight] = useState("");
    const result = getWeightOnPlanet(earthWeight, 1);
    return (
        <div className="min-h-screen bg-[#020205] py-20 px-6 font-sans">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

                    <div className="relative bg-black/40 border border-white/10 p-2 rounded-3xl backdrop-blur-md">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/60/Earth_from_Space.jpg"
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
                                <p className="text-sky-100 font-bold">9.807 m/s²</p>
                            </div>
                            <div className="border-x border-white/10">
                                <p className="text-[10px] text-[#8eb3d4] uppercase tracking-widest">Temp</p>
                                <p className="text-sky-100 font-bold">+15°C</p>
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-500 uppercase tracking-widest">Water</p>
                                <p className="text-sky-100 font-bold">71%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-8">
                    <div>
                        <h1 className="text-6xl font-black text-white mb-2 tracking-tighter uppercase">
                            Earth
                        </h1>
                        <div className="h-1 w- bg-gradient-to-r from-green-500 to-blue-800"></div>
                    </div>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Earth is not just the third planet from the Sun; it is the only world known to support life.
                        It is situated in the "Goldilocks Zone"—a region of space where it is neither too hot nor too cold, allowing water
                        to remain in liquid form. Earth possesses a complex self-regulating system: its powerful magnetic field shields us from
                        lethal solar radiation, while its dynamic atmosphere maintains a perfect balance of gases for breathing. It is the only
                        planet in the solar system with active plate tectonics, which constantly recycle the surface and help regulate the planet's
                        temperature over billions of years.

                    </p>
                    <div className="space-y-4">
                        <div className="bg-white/5 p-4 rounded-xl border border-sky-100">
                            <p className="text-blue-400">The Protective Shield</p>
                            <p className="text-green-800 text-sm">Deep inside Earth, a spinning iron core creates a massive magnetic field (the magnetosphere). It acts as an invisible shield, deflecting solar wind and preventing our atmosphere from being stripped away into space.</p>
                        </div>

                        <div className="bg-white/5 p-4 rounded-xl border border-sky-100">
                            <p className="text-blue-400 font-bold"> The Blue Marble</p>
                            <p className="text-green-800 text-sm">About 71% of the planet's surface is covered by oceans. Water not only sustains life but also absorbs solar heat, distributing it across the globe via currents, which keeps the climate habitable.</p>
                        </div>

                        <div className="bg-white/5 p-4 rounded-xl border border-sky-100">
                            <p className="text-blue-400 font-bold">The Lunar Guardian</p>
                            <p className="text-green-800 text-sm">Our Moon is an unusually large satellite. Its gravity stabilizes the tilt of Earth’s axis, preventing chaotic climate shifts and ensuring a predictable succession of seasons.</p>
                        </div>

                        <div className="bg-white/5 p-4 rounded-xl border border-sky-100">
                            <p className="text-blue-500 font-bold">A Living Atmosphere</p>
                            <p className="text-green-800 text-sm">Our atmosphere is 21% free oxygen—a byproduct of plant life. The ozone layer in the stratosphere blocks 99% of the Sun's harmful ultraviolet radiation.</p>
                        </div>
                        <div className="bg-white/5 p-4 rounded-xl border border-sky-100">
                            <p className="text-green-500 font-bold">Planet and Star Size Comparison</p>
                            <a href="https://mr21.github.io/space-object-comparison/#earth,sun">
                                <button className="border rounded-xl bg-yellow-700 border-yellow-500 text-white p-2 m-2 transition-all hover:bg-yellow-900 ">Compare Sizes</button>
                            </a>
                        </div>
                         <div className="bg-white/5 p-4 rounded-xl border border-sky-100">
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
export default Earth;