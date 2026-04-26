import SunImg from "../../assets/StarCardJPG/Sun.png"
import SiriusImg from "../../assets/StarCardJPG/Sirius.png"
import BetelgeuseImg from "../../assets/StarCardJPG/Betelgeuse.png"
import RigelImg from "../../assets/StarCardJPG/Rigel.png"
import VegaImg from "../../assets/StarCardJPG/Vega.png"
import AntaresImg from "../../assets/StarCardJPG/Antares.png"
import { Link } from "react-router-dom"
function CardStars() {
  const starsData = [
    {
      id: 1,
      img: SunImg,
      name: "The Sun",
      type: "Yellow Dwarf (G-type)",
      fact: "It accounts for 99.86% of the total mass of the Solar System.",
      temp: "5,778 K",
      color: "shadow-yellow-500"
    },
    {
      id: 2,
      img: SiriusImg,
      name: "Sirius A",
      type: "Main Sequence (A-type)",
      fact: "Known as the 'Dog Star', it is the brightest star in our night sky.",
      temp: "9,940 K",
      color: "shadow-blue-300"
    },
    {
      id: 3,
      img: BetelgeuseImg,
      name: "Betelgeuse",
      type: "Red Supergiant",
      fact: "A massive star in Orion that is expected to explode as a supernova.",
      temp: "3,500 K",
      color: "shadow-red-500"
    },
    {
      id: 4,
      img: RigelImg,
      name: "Rigel",
      type: "Blue Supergiant",
      fact: "The most luminous star in our local region of the Milky Way.",
      temp: "12,100 K",
      color: "shadow-cyan-400"
    },
    {
      id: 5,
      img: VegaImg,
      name: "Vega",
      type: "White Dwarf-ish (A-type)",
      fact: "It was the first star other than the Sun to be photographed.",
      temp: "9,602 K",
      color: "shadow-indigo-300"
    },
    {
      id: 6,
      img: AntaresImg,
      name: "Antares",
      type: "Red Supergiant",
      fact: "A massive star known as the 'Heart of the Scorpion', famous for its distinct red glow.",
      temp: "3,500 K",
      color: "shadow-red-600"
    }

  ]
  function StarCard({ star }) {
    return (
      <div className="relative group w-80 bg-slate-900/40 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md transition-all duration-300 hover:border-blue-500/50 ]">

        <div className="relative h-48 overflow-hidden">
          <img
            src={star.img}
            alt={star.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
        </div>
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-2xl font-semibold text-white tracking-tight">{star.name}</h3>
          </div>
          <span className="inline-block px-2 py-1 rounded-md bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-4">
            {star.type}
          </span>
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-6">
            {star.fact}
          </p>
          <div className="flex items-center justify-between pt-4 border-t border-white/5">
            <div>
              <p className="text-[10px] uppercase text-gray-500 font-medium">Temperature</p>
              <p className="text-sm text-gray-200 font-mono">{star.temp}</p>
            </div>
            <Link to={`/star/${star.id}`} className="ml-30 mt-2 border p-2 rounded-lg border-emerald-500 transition-all hover:bg-emerald-700 text-white">
              Explore
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
      {starsData.map((item) => (
        <StarCard key={item.id} star={item} />
      ))}
    </div>
  );
};
export default CardStars;


