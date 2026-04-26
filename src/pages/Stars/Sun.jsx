import { Link } from "react-router-dom"
function Sun(){
    return(
        <div className="min-h-screen bg-[#020205] py-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

          <div className="relative bg-black/40 border border-white/10 p-2 rounded-3xl backdrop-blur-md">
            <img
              src="https://resizer.mail.ru/p/fa5aaa07-34ce-5984-bd1f-e6242b985a5f/AQAKUZSJnKc-PVLWjCLuTAFmBPfgjg_ynjhBsqCw1EwipwptDkqYtWhRkeptj1RYwn_WAJNKvi000LqxXGX1Re9wgQY.jpg"
              alt="Andromeda"
              className="rounded-2xl w-full opacity-1 h-[400px] object-cover opacity-90 group-hover:opacity-100 transition"
            />
            <div className="grid grid-cols-3 gap-4 p-6 text-center">
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">Type</p>
                <p className="text-yellow-400 font-bold">Sb (Spiral)</p>
              </div>
              <div className="border-x border-white/10">
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">Stars</p>
                <p className="text-yellow-400 font-bold">1 trillion</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">Mag</p>
                <p className="text-yellow-400 font-bold">3.44</p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <div>
            <h1 className="text-6xl font-black text-white mb-2 tracking-tighter">
              THE SUN SOLAR SYSTEM

            </h1>
            <div className="h-1 w- bg-yellow-400"></div>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed">
            Stars, like all things, have a finite lifespan. 
            In about 5 billion years, the Sun will deplete the hydrogen in its core, causing the core to contract and heat up even further. 
            This will trigger the fusion of helium and cause the Sun’s outer layers to expand dramatically, transforming it into a Red Giant. 
            During this phase, the Sun will grow so large that it will likely engulf Mercury, Venus, and potentially Earth. 
            Eventually, it will shed its outer layers in a beautiful display called a planetary nebula, leaving behind only its hot, glowing core-a White Dwarf. 
            This tiny remnant, no larger than Earth but with the mass of a star, will slowly cool over trillions of years until it fades into a dark, cold
             Black Dwarf, marking the silent end of our solar neighborhood.
          </p>
          <div class="space-y-4">
            <div class="bg-white/5 p-4 rounded-xl border border-yellow-900 ">
              <p class="text-yellow-400 font-bold ">Solar Core (Energy)</p>
              <p class="text-yellow-700 text-sm">Temperature: ~15 million °C • This is where nuclear fusion reactions occur, powering the entire solar system.</p>
            </div>

            <div class="bg-white/5 p-4 rounded-xl border border-yellow-900">
              <p class="text-yellow-400 font-bold">Photosphere (Surface)</p>
              <p class="text-yellow-700 text-sm">Temperature: ~5,500 °C • The visible "surface" that we see from Earth as a dazzling disk.</p>
            </div>
             <div class="bg-white/5 p-4 rounded-xl border border-orange-300">
              <p class="text-yellow-500 font-bold">Planet and Star Size Comparison</p>
              <a href="https://mr21.github.io/space-object-comparison/#sun,earth"> 
              <button className="border rounded-xl bg-yellow-700 border-yellow-500 text-white p-2 m-2 transition-all hover:bg-yellow-900 ">Compare Sizes</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
export default Sun;