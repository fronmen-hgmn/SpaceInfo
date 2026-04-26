import { Link } from "react-router-dom"
function Vega(){
    return(
        <div className="min-h-screen bg-[#020205] py-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

          <div className="relative bg-black/40 border border-white/10 p-2 rounded-3xl backdrop-blur-md">
            <img
              src="https://starwalk.space/gallery/images/vega-var1/1920x1080.jpg"
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
              Vega
            </h1>
            <div className="h-1 w- bg-sky-500"></div>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed">
            One of the most peculiar facts about Vega is its incredible rotation speed. 
            It spins at a staggering 236 kilometers per second at its equator. 
            This rotation is so fast that centrifugal forces have caused the star to bulge outward, making it an 'oblate spheroid'—flatter at the poles and wider at the equator. 
            Furthermore, observations from space telescopes have revealed a vast disk of dust and debris orbiting Vega. 
            This 'debris disk' suggests that Vega may have a planetary system in the process of forming, or perhaps even fully formed planets hidden within the dust, 
            similar to the early stages of our own Solar System.
          </p>
          <div class="space-y-4">
            <div class="bg-white/5 p-4 rounded-xl border border-orange-300">
              <p class="text-sky-500">Stellar Classification (A0V)</p>
              <p class="text-sky-700 text-sm">Type: White Main-Sequence Star • A young, hot star that burns about 40 times more energy than the Sun.</p>
            </div>

            <div class="bg-white/5 p-4 rounded-xl border border-orange-300">
              <p class="text-sky-500 font-bold">The Future North Star</p>
              <p class="text-sky-700 text-sm">Fact: Due to the Earth's axial precession, Vega was the North Star around 12,000 BC and will become the North Star again in the year 13,727 AD.</p>
            </div>

            <div class="bg-white/5 p-4 rounded-xl border border-orange-300">
              <p class="text-sky-500 font-bold"> Debris Disk</p>
              <p class="text-sky-700 text-sm">Discovery: Infared observations show a ring of dust extending far from the star, indicating a highly active and evolving planetary environment.</p>
            </div>
            <div class="bg-white/5 p-4 rounded-xl border border-orange-300">
              <p class="text-sky-500 font-bold">Planet and Star Size Comparison</p>
              <a href="https://mr21.github.io/space-object-comparison/#sun,antares"> 
              <button className="border rounded-xl bg-sky-500 border-sky-500 text-white p-2 m-2 transition-all hover:bg-sky-900 ">Compare Sizes</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
export default Vega;