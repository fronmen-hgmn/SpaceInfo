import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
/* import Qravity from "../Companent/QravitiLogic"; */
import mercuryImg from '../assets/Planets/mercury.png';
import veneraImg from '../assets/Planets/venera.png'
import EarthImg from '../assets/Planets/earth.png'
import marsImg from '../assets/Planets/mars.png'
import jupiterImg from '../assets/Planets/jupiter.png'
import saturnImg from '../assets/Planets/saturn.png'
import uranImg from '../assets/Planets/uran.png'
import neptunImg from '../assets/Planets/neptun.png'


export default function Planets() {
    const [earthWeight, setEarthWeight] = useState("")
    const planetsData = [
        {
            id: 1,
            name: "MERCURY",
            img: mercuryImg,
            description: "The closest planet to the Sun...",
            day: "58д 15ч", year: "88 дней", temp: "430°C", color: "shadow-orange-500/40",
            gravity: 0.38
        },
        {
            id: 2,
            name: "VENUS",
            img: veneraImg,
            description: "The hottest planet in the solar system...",
            day: "243 дня", year: "225 дней", temp: "462°C", color: "shadow-yellow-600/40",
            gravity: 0.91
        },
        {
            id: 3,
            name: "EART",
            img: EarthImg,
            description: "Our home...",
            day: "24 часа", year: "365 дней", temp: "15°C", color: "shadow-blue-500/40",
            gravity: 1
        },
        {
            id: 4,
            name: "MARS",
            img: marsImg,
            description: "The 'Red Planet'...",
            day: "24ч 37м", year: "687 дней", temp: "-63°C", color: "shadow-red-500/40",
            gravity: 0.38
        },
        {
            id: 5,
            name: "JUPITER",
            img: jupiterImg,
            description: "The largest gas giant...",
            day: "9ч 55м", year: "11.8 лет", temp: "-108°C", color: "shadow-orange-300/40",
            gravity: 2.34
        },
        {
            id: 6,
            name: "SATURN",
            img: saturnImg,
            description: "Famous for its rings...",
            day: "10ч 33м", year: "29.4 года", temp: "-138°C", color: "shadow-yellow-200/40",
            gravity: 1.06
        },
        {
            id: 7,
            name: "URANUS",
            img: uranImg,
            description: "An ice giant...",
            day: "17ч 14м", year: "84 года", temp: "-195°C", color: "shadow-cyan-400/40",
            gravity: 0.92
        },
        {
            id: 8,
            name: "NEPTUNE",
            img: neptunImg,
            description: "The farthest and coldest...",
            day: "16ч 6м", year: "165 лет", temp: "-201°C", color: "shadow-blue-600/40",
            gravity: 1.19
        }
    ];

    return (
        <div className="min-h-screen bg-[#0508169f] p-10">
            <h1 className="text-4xl text-white font-bold mb-10 text-center uppercase tracking-widest">Planets</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-8xl mx-auto">
                {planetsData.map((planet) => (
                    <div key={planet.name} className="flex flex-col md:flex-row bg-white/5 backdrop-blur-lg border border-white/10 rounded-[40px] p-8 items-center shadow-2xl transition-transform hover:scale-[1.02]">
                        <img
                            src={planet.img}
                            className={`w-48 h-48 md:w-56 md:h-56 object-contain drop-shadow-2xl shadow-2xl rounded-full ${planet.color} mercury`}
                            alt={planet.name}
                        />
                        <div className="md:ml-10 mt-6 md:mt-0 text-left">
                            <h2 className="text-3xl font-black text-white tracking-tighter mb-4 italic">{planet.name}</h2>
                            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-xs">
                                {planet.description}
                            </p>
                            <div className="flex gap-4">
                                <div className="bg-white/5 border border-white/5 p-3 rounded-2xl text-center min-w-[75px]">
                                    <p className="text-[#4CC9F0] font-bold text-sm">{planet.day}</p>
                                    <p className="text-[10px] uppercase text-gray-500 font-medium">Day</p>

                                </div>
                                <div className="bg-white/5 border border-white/5 p-3 rounded-2xl text-center min-w-[75px]">
                                    <p className="text-[#4CC9F0] font-bold text-sm">{planet.year}</p>
                                    <p className="text-[10px] uppercase text-gray-500 font-medium">Year</p>
                                </div>
                                <div className="bg-white/5 border border-white/5 p-3 rounded-2xl text-center min-w-[75px]">
                                    <p className="text-[#4CC9F0] font-bold text-sm">{planet.temp}</p>
                                    <p className="text-[10px] uppercase text-gray-500 font-medium">Temp</p>
                                </div>
                            </div>
                            <div>
                                <br />
                                <Link to={`/planets/${planet.id}`} className="ml-30 m border flex w-[110px] p-2 rounded-lg border-emerald-500 transition-all hover:bg-emerald-700 text-white">Learne more</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
