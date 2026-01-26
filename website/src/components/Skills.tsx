export default function Skills() {
  const skillCategories = [
    {
      category: 'GIS & Remote Sensing',
      skills: ['ArcGIS', 'QGIS', 'Sentinel Hub', 'Google Earth Engine', 'SAR Analysis']
    },
    {
      category: 'Programming & Scripting',
      skills: ['Python', 'R', 'JavaScript', 'SQL', 'Bash']
    },
    {
      category: 'Geospatial Technologies',
      skills: ['GPS/GNSS', 'Drone Technology', 'LiDAR Processing', 'Vector & Raster Analysis']
    },
    {
      category: 'Data & Analysis',
      skills: ['Spatial Statistics', 'Data Visualization', 'Machine Learning', 'Time Series Analysis']
    },
    {
      category: 'Web & Tools',
      skills: ['Leaflet.js', 'Mapbox', 'PostGIS', 'PostgreSQL', 'REST APIs']
    },
    {
      category: 'Software',
      skills: ['GDAL/OGR', 'Rasterio', 'Shapely', 'Git', 'VS Code']
    },
  ]

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((item, index) => (
            <div key={index} className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:border-primary transition">
              <h3 className="text-xl font-semibold text-primary mb-4">{item.category}</h3>
              <ul className="space-y-2">
                {item.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
