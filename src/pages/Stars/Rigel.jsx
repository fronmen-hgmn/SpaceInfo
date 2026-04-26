import { Link } from "react-router-dom"
function Rigel(){
    return(
        <div className="min-h-screen bg-[#020205] py-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

          <div className="relative bg-black/40 border border-white/10 p-2 rounded-3xl backdrop-blur-md">
            <img
              src="https://cdn.shopify.com/s/files/1/0742/7719/1954/files/rigel-star-2_1024x1024.jpg?v=1682468865"
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
              Rigel
            </h1>
            <div className="h-1 w- bg-blue-600"></div>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed">
            Rigel is a massive blue supergiant and the brightest star in the constellation Orion, marking the 'left foot' of the celestial hunter. 
            It is a star of extreme proportions: while it is about 70 times wider than our Sun, it radiates an astounding 120,000 times more energy. 
            Its brilliant blue color is a direct indication of its scorching surface temperature, which is more than twice as hot as the Sun's. 
            Rigel is so luminous that it lights up several enormous dust clouds in its neighborhood, making them visible as 'reflection nebulae' across the vastness of space.
          </p>
          <div class="space-y-4">
            <div class="bg-white/5 p-4 rounded-xl border border-orange-300">
              <p class="text-blue-400">Stellar Classification (B8 Iab)</p>
              <p class="text-blue-800 text-sm">ype: Blue-White Supergiant • A star that has moved beyond the main sequence and is expanding in its final stages.</p>
            </div>

            <div class="bg-white/5 p-4 rounded-xl border border-orange-300">
              <p class="text-blue-400 font-bold">Multiple Star System</p>
              <p class="text-blue-800 text-sm">Fact: What looks like a single star to the naked eye is actually a system of at least four stars, with Rigel A being the dominant primary.</p>
            </div>

            <div class="bg-white/5 p-4 rounded-xl border border-orange-300">
              <p class="text-blue-400 font-bold">Absolute Magnitude (-7.84)</p>
              <p class="text-blue-800 text-sm">Luminosity: If Rigel were as close to us as Sirius, it would shine 400 times brighter than Venus, visible even in broad daylight.</p>
            </div>

            <div class="bg-white/5 p-4 rounded-xl border border-orange-300">
              <p class="text-blue-500 font-bold">Planet and Star Size Comparison</p>
              <a href="https://mr21.github.io/space-object-comparison/#sun,rigel_a"> 
              <button className="border rounded-xl bg-blue-400 border-blue-400 text-white p-2 m-2 transition-all hover:bg-blue-900 ">Compare Sizes</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
export default Rigel;