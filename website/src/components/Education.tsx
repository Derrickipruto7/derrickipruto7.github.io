export default function Education() {
  return (
    <section id="education" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Education & Certifications</h2>
        
        <div className="space-y-8">
          <div className="border-l-4 border-primary pl-6 py-2">
            <h3 className="text-2xl font-semibold text-primary">BSc Geospatial Information Science & Remote Sensing</h3>
            <p className="text-slate-600 mt-2">University Name • Graduation Year</p>
            <p className="text-slate-700 mt-3 leading-relaxed">
              Comprehensive degree program covering geospatial technologies, remote sensing, GIS applications, 
              cartography, and spatial analysis. Completed capstone project on [Your Project Topic].
            </p>
          </div>

          <div className="border-l-4 border-secondary pl-6 py-2">
            <h3 className="text-xl font-semibold text-secondary">Relevant Coursework</h3>
            <ul className="mt-3 text-slate-700 space-y-1">
              <li>• Advanced GIS & Spatial Analysis</li>
              <li>• Remote Sensing & Image Processing</li>
              <li>• Geographic Information Systems</li>
              <li>• Environmental Monitoring</li>
              <li>• Web GIS & Cartography</li>
              <li>• Spatial Databases & PostGIS</li>
            </ul>
          </div>

          <div className="border-l-4 border-teal-600 pl-6 py-2">
            <h3 className="text-xl font-semibold text-teal-700">Professional Certifications</h3>
            <ul className="mt-3 text-slate-700 space-y-1">
              <li>• Google Earth Engine Advanced</li>
              <li>• Esri ArcGIS Associate Certification</li>
              <li>• QGIS Professional</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
