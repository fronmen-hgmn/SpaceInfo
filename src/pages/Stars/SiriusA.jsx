import { Link } from "react-router-dom"
function Sirius(){
    return(
        <div className="min-h-screen bg-[#020205] py-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-200 to-cyan-200 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

          <div className="relative bg-black/40 border border-white/10 p-2 rounded-3xl backdrop-blur-md">
            <img
              src="https://www.star-facts.com/wp-content/uploads/2019/09/Sirius-star.webp"
              alt="Andromeda"
              className="rounded-2xl w-full opacity-1 h-[400px] object-cover opacity-90 group-hover:opacity-100 transition"
            />
            <div className="grid grid-cols-3 gap-4 p-6 text-center">
              <div>
                <p className="text-[10px] text-[#8eb3d4] uppercase tracking-widest">Type</p>
                <p className="text-[#8eb3d4] font-bold">Sb (Spiral)</p>
              </div>
              <div className="border-x border-white/10">
                <p className="text-[10px] text-[#8eb3d4] uppercase tracking-widest">Stars</p>
                <p className="text-[#8eb3d4] font-bold">1 trillion</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">Mag</p>
                <p className="text-[#8eb3d4] font-bold">3.44</p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <div>
            <h1 className="text-6xl font-black text-white mb-2 tracking-tighter uppercase">
              Sirius A
            </h1>
            <div className="h-1 w- bg-emerald-200"></div>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed">
            Sirius A, often referred to as the 'Dog Star', is the brightest star in our night sky, shining with a brilliant blue-white light.
             Located just 8.6 light-years away in the constellation Canis Major, it is nearly twice as massive as our Sun and 25 times more luminous.
              Its incredible brightness isn't just due to its size, but also its proximity to Earth.
               For thousands of years, Sirius has been a vital celestial marker for humanity;
                the Ancient Egyptians used its 'heliacal rising' to predict the annual flooding of the Nile, marking the beginning of their new year.
          </p>
          <div class="space-y-4">
            <div class="bg-white/5 p-4 rounded-xl border text-[#8eb3d4">
              <p class="text-[#8eb3d4] ">Stellar Classification (A1V)</p>
              <p class="text-[#8eb3d4] text-sm">Surface Temp: ~9,940 K • A main-sequence star that is significantly hotter and whiter than the Sun.</p>
            </div>

            <div class="bg-white/5 p-4 rounded-xl border text-[#8eb3d4">
              <p class="text-[#8eb3d4] font-bold"> Orbital Companion (Sirius B)</p>
              <p class="text-[#8eb3d4] text-sm">Type: White Dwarf • Sirius A is not alone; it is orbited by a tiny, incredibly dense dead star known as 'The Pup'.</p>
            </div>

            <div class="bg-white/5 p-4 rounded-xl border border-orange-300">
              <p class="text-gray-400 font-bold">Planet and Star Size Comparison</p>
              <a href="https://mr21.github.io/space-object-comparison/#sun,sirius_a"> 
              <button className="border rounded-xl bg-gray-600 border-gray-400 text-white p-2 m-2 transition-all hover:bg-gray-900 ">Compare Sizes</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
export default Sirius;