export default function Hero() {
  return (
    <section id="hero" className="bg-gradient-to-r from-primary to-secondary text-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Geospatial Professional
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-teal-100">
          BSc Geospatial Information Science & Remote Sensing Graduate
        </p>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          Specialized in geospatial analysis, remote sensing, and GIS technologies. 
          Passionate about leveraging spatial data for environmental monitoring, 
          urban planning, and strategic decision-making.
        </p>
        <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition">
          Get In Touch
        </button>
      </div>
    </section>
  )
}
