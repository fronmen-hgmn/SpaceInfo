import { Link } from "react-router-dom"
import { useState } from "react";
import { getWeightOnPlanet } from '../Planets/TypeScript/Gravity';
function Jupiter() {
    const [earthWeight, setEarthWeight] = useState("");
    const result = getWeightOnPlanet(earthWeight, 2.34);
    return (
        <div className="min-h-screen bg-[#020205] py-20 px-6 font-sans">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-yellow-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

                    <div className="relative bg-black/40 border border-white/10 p-2 rounded-3xl backdrop-blur-md">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter_OPAL_2024.png"
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
                                <p className="text-sky-100 font-bold">24.79 м/с²</p>
                            </div>
                            <div className="border-x border-white/10">
                                <p className="text-[10px] text-[#8eb3d4] uppercase tracking-widest">Temp</p>
                                <p className="text-sky-100 font-bold">-110°C</p>
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-500 uppercase tracking-widest">Mag</p>
                                <p className="text-sky-100 font-bold">-2.94</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-8">
                    <div>
                        <h1 className="text-6xl font-black text-white mb-2 tracking-tighter uppercase">
                            Jupiter
                        </h1>
                        <div className="h-1 w- bg-gradient-to-r from-yellow-500 to-yellow-800"></div>
                    </div>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Jupiter is a colossal gas giant with a mass 318 times that of Earth. It is so large that 1,300 Earths could fit inside it. It lacks a solid surface,
                        consisting primarily of hydrogen and helium.
                        Jupiter rotates faster than any other planet, with a day lasting only 10 hours. This rapid rotation creates powerful jet streams,
                        dividing the atmosphere into distinct colorful bands and cloud zones. Its immense magnetic field is 20,000 times stronger than Earth's,
                        making its surroundings a hazardous zone of extreme radiation.
                    </p>
                    <div class="space-y-4">
                        <div class="bg-white/5 p-4 rounded-xl border border-sky-100">
                            <p class="text-yellow-600">Metallic Hydrogen</p>
                            <p class="text-yellow-800 text-sm">Deep inside Jupiter, the pressure is so intense that hydrogen turns into a liquid with metallic properties. This ocean of liquid metal is what generates the planet's powerful magnetic field.</p>
                        </div>

                        <div class="bg-white/5 p-4 rounded-xl border border-sky-100">
                            <p class="text-yellow-600 font-bold"> A Mini Solar System</p>
                            <p class="text-yellow-800 text-sm"> Jupiter has 95 officially recognized moons. The most famous are the Galilean moons: volcanic Io, icy Europa, giant Ganymede, and cratered Callisto.</p>
                        </div>

                        <div class="bg-white/5 p-4 rounded-xl border border-sky-100">
                            <p class="text-yellow-600 font-bold">Global Dust Storms</p>
                            <p class="text-yellow-800 text-sm">Mars is famous for its planet-encircling dust storms. These massive events can blanket the entire world for months, completely obscuring the surface from orbital view.</p>
                        </div>

                        <div class="bg-white/5 p-4 rounded-xl border border-sky-100">
                            <p class="text-yellow-600 font-bold">Temperature</p>
                            <p class="text-yellow-800 text-sm"> The average surface temperature is about -65°C (-85°F). Due to the thin atmosphere, temperatures can range from a comfortable 20°C (70°F) at the equator during noon to a frigid -153°C (-225°F) at the poles at night.</p>
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
export default Jupiter;