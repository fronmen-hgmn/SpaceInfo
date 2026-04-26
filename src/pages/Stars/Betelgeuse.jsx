import { Link } from "react-router-dom"
function Betelgeuse(){
    return(
        <div className="min-h-screen bg-[#020205] py-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

          <div className="relative bg-black/40 border border-white/10 p-2 rounded-3xl backdrop-blur-md">
            <img
              src="https://www.sciencedaily.com/images/1920/sun-betelgeuse-star-comparison.webp"
              alt="Andromeda"
              className="rounded-2xl w-full opacity-1 h-[400px] object-cover opacity-90 group-hover:opacity-100 transition"
            />
            <div className="grid grid-cols-3 gap-4 p-6 text-center">
              <div>
                <p className="text-[10px] text-[#8eb3d4] uppercase tracking-widest">Type</p>
                <p className="text-orange-400 font-bold">Sb (Spiral)</p>
              </div>
              <div className="border-x border-white/10">
                <p className="text-[10px] text-[#8eb3d4] uppercase tracking-widest">Stars</p>
                <p className="text-orange-400 font-bold">1 trillion</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">Mag</p>
                <p className="text-orange-400 font-bold">3.44</p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <div>
            <h1 className="text-6xl font-black text-white mb-2 tracking-tighter uppercase">
              Betelgeuse
            </h1>
            <div className="h-1 w- bg-orange-600"></div>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed">
            Betelgeuse is a massive red supergiant located in the constellation of Orion. 
            If it were placed at the center of our Solar System, its surface would extend past the asteroid belt, engulfing Mercury, Venus, Earth, Mars, and possibly even Jupiter. 
            This star is so enormous that it is one of the few stars whose surface can be directly imaged by our most powerful telescopes. 
            Despite being much younger than the Sun—only about 10 million years old—it has already reached the end of its
             life cycle because massive stars burn their fuel at an incredibly frantic pace.
             Astronomers know that Betelgeuse is destined to die in a spectacular supernova explosion. 
             When it finally runs out of fuel, its core will collapse, triggering a blast so bright that it will be visible from Earth even during the day. 
             For several weeks, it will shine as brightly as the full moon, casting shadows at night. 
             While we know it will happen 'soon' in cosmic terms, this could be tonight or 100,000 years from now. 
             When it happens, Betelgeuse will leave behind either a neutron star or a black hole, 
             marking a violent but beautiful transformation of the Orion constellation.
          </p>
          <div class="space-y-4">
            <div class="bg-white/5 p-4 rounded-xl border border-orange-300">
              <p class="text-orange-400">Stellar Classification (M1-M2)</p>
              <p class="text-orange-800 text-sm">Type: Red Supergiant • One of the largest stars known, characterized by its distinct reddish-orange glow.</p>
            </div>

            <div class="bg-white/5 p-4 rounded-xl border border-orange-300">
              <p class="text-orange-400 font-bold">Variable Brightness</p>
              <p class="text-orange-800 text-sm">Fact: Betelgeuse is a variable star; in 2019, it famously dimmed by about 60% due to a giant cloud of stardust blocking its light.</p>
            </div>

            <div class="bg-white/5 p-4 rounded-xl border border-orange-300">
              <p class="text-orange-400 font-bold">Distance and Luminosity</p>
              <p class="text-orange-800 text-sm">Stats: ~640 light-years away • It radiates about 100,000 times more energy than our Sun.</p>
            </div>

            <div class="bg-white/5 p-4 rounded-xl border border-orange-300">
              <p class="text-yellow-500 font-bold">Planet and Star Size Comparison</p>
              <a href="https://mr21.github.io/space-object-comparison/#sun,betelgeuse"> 
              <button className="border rounded-xl bg-yellow-700 border-yellow-500 text-white p-2 m-2 transition-all hover:bg-yellow-900 ">Compare Sizes</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
export default Betelgeuse;