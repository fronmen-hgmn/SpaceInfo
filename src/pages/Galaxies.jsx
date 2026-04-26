import { useNavigate,Link } from "react-router-dom";
import "../Styles/Galaxies.css"
export default function Galaxies() {
    return (
        <div className="text-white z-relative z-10  min-h-screen bg-[#000000d3] pt-32 px-10 j">
            <div className="flex gap-20 justify-center">
                <div className="card  ">
                    <h1 className="title tracking-wider uppercase font-medium">The Large and Small Magellanic Clouds.</h1>
                    <p><strong className="text-white">Type</strong> : <span className="text-gray-400">Dwarf irregular galaxies.</span></p>
                    <p><strong className="text-white">Status</strong> : <span className="text-gray-400"> Satellites of the Milky Way, gravitationally bound to it.</span></p>
                    <p><strong className="text-white">Feature</strong> : <span className="text-gray-400"> Contain massive star-forming regions, such as the Tarantula Nebula.</span></p>
                    <p><strong className="text-white">Visibility</strong> : <span className="text-gray-400"> They can be seen with the naked eye, but only from Earth's Southern Hemisphere.</span></p>
                 <Link to="/TheLargeandSmallMagellanicClouds" className=" border p-2 rounded-lg  ml-52 border-emerald-500 transition-all hover:bg-emerald-700 text-white">Learne more</Link>
                </div>

                <div className="card ">
                    <h1 className="title tracking-wider uppercase font-medium">Andromeda</h1>
                    <p><strong className="text-white">Type</strong> : <span className="text-gray-400">Largest in the Local Group; on a collision course with the Milky Way.</span></p>
                    <p><strong className="text-white">Status</strong> : <span className="text-gray-400"> Largest in the Local Group; on a collision course with the Milky Way.</span></p>
                    <p><strong className="text-white">Feature</strong> : <span className="text-gray-400"> Contains ~1 trillion stars and has a double nucleus.</span></p>
                    <p><strong className="text-white">Visibility</strong> : <span className="text-gray-400">  Faint patch visible to the naked eye from the Northern Hemisphere.</span></p>
                    <Link to="/andromeda"className=" ml-52 inline-block mt-4 border p-2 rounded-lg border-emerald-500 transition-all hover:bg-emerald-700 text-white">Learne more</Link>
                </div>

                <div className="card h-[355px]">
                    <h1 className="title tracking-wider uppercase font-medium">Sagittarius Dwarf Spheroidal Galaxy</h1>
                    <p><strong className="text-white">Type</strong> : <span className="text-gray-400">Dwarf elliptical/spheroidal galaxy.</span></p>
                    <p><strong className="text-white">Status</strong> : <span className="text-gray-400"> A satellite of the Milky Way; it is currently being consumed and stretched by our galaxy's gravity.</span></p>
                    <p><strong className="text-white">Feature</strong> : <span className="text-gray-400"> Hidden behind the galactic center; found in 1994.</span></p>
                    <p><strong className="text-white">Visibility</strong> : <span className="text-gray-400"> Telescopes only; invisible to the naked eye.</span></p>
                   <Link to="/Sagitarius" className=" ml-52 mt-2 border p-2 rounded-lg border-emerald-500 transition-all hover:bg-emerald-700 text-white">Learne more</Link>
                </div>

            </div>
        </div>
    )
}