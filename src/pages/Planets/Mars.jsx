import { Link } from "react-router-dom"
import { useState } from "react";
import { getWeightOnPlanet } from '../Planets/TypeScript/Gravity';
function Mars() {
     const [earthWeight, setEarthWeight] = useState("");
    const result = getWeightOnPlanet(earthWeight, 0.38);
    return (
        <div className="min-h-screen bg-[#020205] py-20 px-6 font-sans">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

                    <div className="relative bg-black/40 border border-white/10 p-2 rounded-3xl backdrop-blur-md">
                        <img
                            src="https://nebo-nsk.ru/sites/default/files/mars_0.jpg"
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
                                <p className="text-sky-100 font-bold">	3.711 м/с²</p>
                            </div>
                            <div className="border-x border-white/10">
                                <p className="text-[10px] text-[#8eb3d4] uppercase tracking-widest">Temp</p>
                                <p className="text-sky-100 font-bold">+15°C</p>
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
                            Mars
                        </h1>
                        <div className="h-1 w- bg-gradient-to-r from-orange-500 to-red-800"></div>
                    </div>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Mars is the fourth planet from the Sun, known for its iconic reddish appearance caused by iron minerals 
                        in the Martian dirt that oxidize, or rust. Although it is only about half the size of Earth, its dry land area
                         is nearly equal to Earth's total land area because it has no oceans. Mars is a dynamic world 
                         with distinct seasons, polar ice caps, and a tenuous atmosphere dominated by carbon dioxide (95%). 
                         Evidence from NASA missions suggests that billions of years ago, the planet was much wetter and warmer, 
                         with rivers and potentially oceans, making it a primary target in the search for ancient extraterrestrial life.
                    </p>
                    <div class="space-y-4">
                        <div class="bg-white/5 p-4 rounded-xl border border-sky-100">
                            <p class="text-red-400">Olympus Mons: The Volcanic King</p>
                            <p class="text-orange-800 text-sm">Mars is home to the largest volcano in the solar system, Olympus Mons. Standing at about 22 km (13.6 miles) high, it is nearly three times the height of Mount Everest, with a base area roughly the size of Arizona.</p>
                        </div>

                        <div class="bg-white/5 p-4 rounded-xl border border-sky-100">
                            <p class="text-red-400 font-bold"> TValles Marineris</p>
                            <p class="text-orange-800 text-sm"> Valles Marineris is a vast canyon system stretching over 4,000 km (2,500 miles). If it were on Earth, it would span the entire United States from New York City to Los Angeles</p>
                        </div>

                        <div class="bg-white/5 p-4 rounded-xl border border-sky-100">
                            <p class="text-red-400 font-bold">Global Dust Storms</p>
                            <p class="text-orange-800 text-sm">Mars is famous for its planet-encircling dust storms. These massive events can blanket the entire world for months, completely obscuring the surface from orbital view.</p>
                        </div>

                        <div class="bg-white/5 p-4 rounded-xl border border-sky-100">
                            <p class="text-red-500 font-bold">Temperature</p>
                            <p class="text-orange-800 text-sm"> The average surface temperature is about -65°C (-85°F). Due to the thin atmosphere, temperatures can range from a comfortable 20°C (70°F) at the equator during noon to a frigid -153°C (-225°F) at the poles at night.</p>
                        </div>
                        <div class="bg-white/5 p-4 rounded-xl border border-sky-100">
                            <p class="text-red-500 font-bold">Planet and Star Size Comparison</p>
                            <a href="https://mr21.github.io/space-object-comparison/#earth,mars">
                                <button className="border rounded-xl bg-red-700 border-red-500 text-white p-2 m-2 transition-all hover:bg-red-900 ">Compare Sizes</button>
                            </a>
                        </div>
                       <div class="bg-white/5 p-4 rounded-xl border border-sky-100">
                         <h3 className="text-red-500 font-bold">Compare your weight on this planet</h3>
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
export default Mars;