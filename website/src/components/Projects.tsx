export default function Projects() {
  const projects = [
    {
      title: 'Land Cover Classification Using Sentinel-2',
      description: 'Developed machine learning model to classify land cover types using multispectral satellite imagery. Achieved 92% accuracy using Random Forest classifier.',
      technologies: ['Python', 'Sentinel-2', 'Scikit-learn', 'GDAL'],
      link: '#'
    },
    {
      title: 'Urban Heat Island Analysis',
      description: 'Analyzed thermal patterns in urban areas using Landsat thermal bands combined with NDBI index to identify and map heat islands.',
      technologies: ['QGIS', 'Landsat', 'Raster Analysis', 'Remote Sensing'],
      link: '#'
    },
    {
      title: 'Interactive GIS Web Application',
      description: 'Built responsive web application for visualizing geospatial data with interactive maps, filtering capabilities, and spatial analysis tools.',
      technologies: ['React', 'Leaflet.js', 'PostGIS', 'Node.js'],
      link: '#'
    },
    {
      title: 'Forest Change Detection',
      description: 'Implemented change detection algorithm to monitor forest cover changes over time using multi-temporal satellite imagery.',
      technologies: ['Google Earth Engine', 'JavaScript', 'Remote Sensing', 'Python'],
      link: '#'
    },
    {
      title: 'GPS Trajectory Analysis',
      description: 'Developed tools for processing and analyzing GPS trajectory data for transportation and movement pattern studies.',
      technologies: ['Python', 'PostGIS', 'Shapely', 'Pandas'],
      link: '#'
    },
    {
      title: 'Flood Risk Assessment',
      description: 'Created spatial model to assess flood risk using DEM data, hydrological analysis, and multi-criteria evaluation.',
      technologies: ['ArcGIS', 'DEM', 'Spatial Analysis', 'MCDA'],
      link: '#'
    },
  ]

  return (
    <section id="projects" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-l-4 border-primary">
              <h3 className="text-2xl font-semibold mb-3 text-slate-900">{project.title}</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="bg-teal-100 text-primary text-sm px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
