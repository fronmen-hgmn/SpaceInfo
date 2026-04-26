import { Link } from "react-router-dom"
function Antares(){
    return(
        <div className="min-h-screen bg-[#020205] py-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-400 to-red-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

          <div className="relative bg-black/40 border border-white/10 p-2 rounded-3xl backdrop-blur-md">
            <img
              src="https://starwalk.space/gallery/images/antares-v2/1920x1080.jpg"
              alt="Andromeda"
              className="rounded-2xl w-full opacity-1 h-[400px] object-cover opacity-90 group-hover:opacity-100 transition"
            />
            <div className="grid grid-cols-3 gap-4 p-6 text-center">
              <div>
                <p className="text-[10px] text-[#8eb3d4] uppercase tracking-widest">Type</p>
                <p className="text-blue-400 font-bold">Sb (Spiral)</p>
              </div>
              <div className="border-x border-white/10">
                <p className="text-[10px] text-[#8eb3d4] uppercase tracking-widest">Stars</p>
                <p className="text-blue-400 font-bold">1 trillion</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">Mag</p>
                <p className="text-blue-400 font-bold">3.44</p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <div>
            <h1 className="text-6xl font-black text-white mb-2 tracking-tighter uppercase">
              Antares
            </h1>
            <div className="h-1 w- bg-red-900"></div>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed">
            Antares is a brilliant red supergiant and the brightest star in the constellation Scorpius. 
            Its name comes from the Ancient Greek 'Anti-Ares', which literally means 'Rival to Mars'. 
            This is because its distinct fiery-red color and brightness often lead skywatchers to mistake it for the Red Planet itself. 
            If Antares were placed in the center of our solar system, 
            its outer surface would reach far beyond the orbit of Mars, occupying a volume several hundred million times greater than our Sun. 
            Despite its massive size, its surface is relatively cool, giving it that characteristic deep-red glow that has fascinated civilizations for millennia.
          </p>
          <div class="space-y-4">
            <div class="bg-white/5 p-4 rounded-xl border border-orange-300">
              <p class="text-red-500">Stellar Classification (M1.5 Iab)</p>
              <p class="text-red-900 text-sm">Type: Red Supergiant • A star nearing the end of its life, destined to become a supernova in the near future.</p>
            </div>

            <div class="bg-white/5 p-4 rounded-xl border border-orange-300">
              <p class="text-red-500 font-bold">Cosmic Proportions</p>
              <p class="text-red-900 text-sm">Fact: Antares is approximately 700 times the diameter of the Sun. If it were a hollow shell, it could hold more than 300 million Suns inside.</p>
            </div>

            <div class="bg-white/5 p-4 rounded-xl border border-orange-300">
              <p class="text-red-500 font-bold">Ancient Significance</p>
              <p class="text-red-900 text-sm">History: Known as one of the four 'Royal Stars' of the Persians in 3000 BC, it was considered one of the guardians of the heavens.</p>
            </div>
            <div class="bg-white/5 p-4 rounded-xl border border-orange-300">
              <p class="text-red-500 font-bold">Planet and Star Size Comparison</p>
              <a href="https://mr21.github.io/space-object-comparison/#sun,antares"> 
              <button className="border rounded-xl bg-red-500 border-red-500 text-white p-2 m-2 transition-all hover:bg-red-900 ">Compare Sizes</button>
              </a>
            </div>

           \
          </div>
        </div>
      </div>
    </div>
    )
}
export default Antares;