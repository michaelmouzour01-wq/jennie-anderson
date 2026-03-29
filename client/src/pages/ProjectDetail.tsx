import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Code2, Download, ExternalLink, Zap } from "lucide-react";
import { useParams, useLocation } from "wouter";

export default function ProjectDetail() {
  const [location, setLocation] = useLocation();
  const params = useParams();
  const projectId = params.id;

  const projects: Record<string, any> = {
    watershed: {
      title: "Automated Watershed Delineation Pipeline",
      subtitle: "Python and QGIS-based automation for hydrological analysis",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663483126481/hUD6andaJr5oYiH6hyrhJ3/watershed-project-FyKuFyVjEvkn4CCUKxogXB.webp",
      overview: "A comprehensive Python and QGIS-based workflow designed to automatically delineate watershed boundaries from high-resolution DEM (Digital Elevation Model) data. This project demonstrates advanced spatial analysis capabilities and automation through PyQGIS scripting.",
      challenge: "Manual watershed delineation was extremely time-consuming, requiring 6 hours per watershed. The process was prone to inconsistencies, and scaling to multiple watersheds was impractical. The organization needed a standardized, repeatable workflow that could maintain quality while dramatically reducing processing time.",
      solution: "Developed a fully automated PyQGIS pipeline that processes DEM data through a series of geoprocessing steps: sink filling, flow direction calculation, stream definition, and watershed segmentation. The workflow integrates GRASS GIS algorithms through QGIS Processing Framework and includes automatic validation against existing hydrographic datasets.",
      results: [
        "Reduced manual delineation time from 6 hours to 45 minutes per watershed (87.5% reduction)",
        "Achieved 98.7% accuracy when validated against field-verified boundaries",
        "Successfully processed 50+ watersheds across Kentucky and Tennessee",
        "Enabled 40% increase in project capacity without additional staffing"
      ],
      technologies: ["QGIS 3.28", "PyQGIS", "Python 3.9", "PostGIS", "GDAL/OGR", "GRASS GIS"],
      metrics: [
        { label: "Processing Time Reduction", value: "87.5%" },
        { label: "Accuracy Rate", value: "98.7%" },
        { label: "Watersheds Processed", value: "50+" },
        { label: "Project Capacity Increase", value: "40%" }
      ],
      codeSnippet: `# Automated Watershed Delineation using PyQGIS
from qgis.core import QgsProject, QgsVectorLayer, QgsRasterLayer
import processing

def delineate_watershed(dem_path, pour_point_path, output_dir):
    project = QgsProject.instance()
    dem = QgsRasterLayer(dem_path, "DEM")
    pour_points = QgsVectorLayer(pour_point_path, "Pour Points", "ogr")
    
    # Fill sinks in DEM
    fill_result = processing.run(
        "qgis:fillnodata",
        {'INPUT': dem, 'OUTPUT': f'{output_dir}/dem_filled.tif'}
    )
    
    # Calculate flow direction and delineate watersheds
    flow_result = processing.run(
        "grass7:r.watershed",
        {'elevation': fill_result['OUTPUT'],
         'drainage': f'{output_dir}/flow_direction.tif'}
    )
    
    return flow_result`
    },
    landcover: {
      title: "Land Cover Classification Using Satellite Imagery",
      subtitle: "Machine learning-enhanced geospatial analysis with Sentinel-2 data",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663483126481/hUD6andaJr5oYiH6hyrhJ3/landcover-classification-gnxxrCr3rg92iadcxMaJfp.webp",
      overview: "A machine learning-enhanced geospatial analysis project that classified land cover types across urban and rural areas using Sentinel-2 satellite imagery. The project integrated QGIS for data visualization and validation, with Python for preprocessing and classification workflows.",
      challenge: "Municipal planning departments needed accurate, up-to-date land cover maps for comprehensive planning initiatives. Manual digitization was prohibitively expensive and time-consuming. They required consistent, standardized classification across 2,500 square kilometers with publication-ready cartography.",
      solution: "Implemented a scikit-learn Random Forest classifier trained on 3,000 manually validated ground truth points. Preprocessed Sentinel-2 Level 2A data, calculated spectral indices (NDVI, NDBI, NDMI, NDWI), and used QGIS for visualization and quality control. Generated 47 standardized map sheets using QGIS Atlas.",
      results: [
        "Classified 2,500 km² with 91.3% overall accuracy",
        "Delivered 47 standardized map sheets for municipal planning",
        "Reduced per-project classification costs by 65% vs. manual digitization",
        "Improved client satisfaction scores from 7.2 to 9.1 out of 10"
      ],
      technologies: ["Sentinel-2 Imagery", "Python 3.9", "scikit-learn", "QGIS 3.28", "rasterio", "PostGIS"],
      metrics: [
        { label: "Classification Accuracy", value: "91.3%" },
        { label: "Area Classified", value: "2,500 km²" },
        { label: "Map Sheets Generated", value: "47" },
        { label: "Cost Reduction", value: "65%" }
      ],
      codeSnippet: `# Sentinel-2 Land Cover Classification
from sklearn.ensemble import RandomForestClassifier
import rasterio
import numpy as np

def classify_land_cover(sentinel_path, training_data_path):
    with rasterio.open(sentinel_path) as src:
        bands = src.read([2, 3, 4, 5, 6, 7, 8])
    
    # Calculate spectral indices
    ndvi = (bands[3] - bands[2]) / (bands[3] + bands[2] + 1e-8)
    ndbi = (bands[4] - bands[3]) / (bands[4] + bands[3] + 1e-8)
    
    # Train Random Forest classifier
    clf = RandomForestClassifier(n_estimators=100, max_depth=20)
    clf.fit(X_train_scaled, y_train)
    
    # Predict land cover classes
    predictions = clf.predict(X_scaled)
    return predictions.reshape(rows, cols)`
    },
    network: {
      title: "Emergency Response Network Analysis",
      subtitle: "Spatial optimization for fire department routing and coverage",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663483126481/hUD6andaJr5oYiH6hyrhJ3/network-analysis-AonLTy8vdi55EKoS2UkgAj.webp",
      overview: "A spatial network analysis project that optimized emergency response routing for a regional fire department. The project used QGIS for network visualization and PyQGIS for automated route optimization, improving emergency response times across 1,200 square miles.",
      challenge: "The fire department faced uneven coverage with some rural areas experiencing response times exceeding 15 minutes. They needed data-driven recommendations for station placement and routing optimization to improve public safety outcomes.",
      solution: "Extracted and validated OpenStreetMap road data in PostGIS, calculated service areas (isochrones) for each station, and identified coverage gaps. Used network analysis algorithms to evaluate optimal station placements and routing strategies. Presented findings through interactive QGIS visualizations.",
      results: [
        "Reduced average response time from 8.2 to 6.7 minutes (18% improvement)",
        "Increased coverage within 5-minute response time from 73% to 89%",
        "Identified optimal locations for 2 new fire stations",
        "Improved insurance premiums for covered areas"
      ],
      technologies: ["QGIS 3.28", "PostGIS", "OpenStreetMap", "Python 3.9", "networkx"],
      metrics: [
        { label: "Response Time Reduction", value: "18%" },
        { label: "Coverage Improvement", value: "16%" },
        { label: "Service Area", value: "1,200 mi²" },
        { label: "New Stations Recommended", value: "2" }
      ],
      codeSnippet: `# Network Analysis for Emergency Response
import networkx as nx
from qgis.core import QgsProject
import processing

def analyze_service_areas(road_network, fire_stations):
    # Create network graph from road data
    G = nx.read_shp(road_network)
    
    # Calculate isochrones for each station
    for station in fire_stations:
        service_area = processing.run(
            "qgis:isochrone",
            {'INPUT': road_network,
             'STARTING_POINT': station,
             'TRAVEL_TIME': 5,  # 5 minutes
             'OUTPUT': f'service_area_{station.id()}.shp'}
        )
    
    return G`
    },
    thermal: {
      title: "Urban Heat Island Analysis & Mitigation Planning",
      subtitle: "Thermal analysis and climate resilience strategy development",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663483126481/hUD6andaJr5oYiH6hyrhJ3/thermal-analysis-dofeq8zd8KZBFSUJ53aiUZ.webp",
      overview: "A comprehensive thermal analysis project that identified urban heat islands using Landsat 8 thermal imagery and developed mitigation strategies through spatial analysis. The project combined satellite data processing with QGIS-based visualization and stakeholder engagement.",
      challenge: "The city was experiencing increasing temperatures during summer months, with significant variation across neighborhoods. They needed to understand the spatial patterns of urban heat and develop evidence-based mitigation strategies aligned with climate adaptation goals.",
      solution: "Processed Landsat 8 thermal bands through radiometric calibration and land surface temperature (LST) conversion. Analyzed temperature patterns in QGIS, correlated with land cover types, and evaluated mitigation strategies using spatial modeling. Generated 15 standardized maps for city council presentations.",
      results: [
        "Identified 12 significant urban heat islands with 2.5-5.8°C temperature anomalies",
        "Developed mitigation strategies projected to reduce peak temperatures by 1.5-2.0°C",
        "Secured $4.2M in state and federal funding for green infrastructure",
        "Led to 3 additional municipal contracts valued at $1.8M"
      ],
      technologies: ["Landsat 8", "QGIS 3.28", "Python 3.9", "PostGIS", "Thermal Analysis"],
      metrics: [
        { label: "Heat Islands Identified", value: "12" },
        { label: "Temperature Anomaly Range", value: "2.5-5.8°C" },
        { label: "Funding Secured", value: "$4.2M" },
        { label: "New Contracts Generated", value: "$1.8M" }
      ],
      codeSnippet: `# Urban Heat Island Analysis
import rasterio
import numpy as np
from scipy import ndimage

def calculate_lst(thermal_band_path):
    with rasterio.open(thermal_band_path) as src:
        thermal = src.read(1).astype(float)
    
    # Radiometric calibration
    ML = 0.0003342  # Radiance multiplicative scaling constant
    AL = 0.1  # Radiance additive scaling constant
    radiance = ML * thermal + AL
    
    # Convert to brightness temperature
    K1 = 774.8853  # Thermal constant 1
    K2 = 30.6672  # Thermal constant 2
    bt = K2 / np.log((K1 / radiance) + 1)
    
    # Calculate LST
    wavelength = 10.9  # Wavelength in micrometers
    rho = 0.55  # Emissivity
    lst = bt / (1 + (wavelength * bt / 1.4388) * np.log(rho))
    
    return lst`
    }
  };

  const project = projects[projectId || "watershed"];

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Project not found</h1>
          <Button onClick={() => setLocation("/")} variant="outline">
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-900 text-white py-8">
        <div className="container">
          <Button
            variant="ghost"
            className="text-slate-300 hover:text-white mb-6 p-0"
            onClick={() => setLocation("/")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{project.title}</h1>
          <p className="text-xl text-slate-300">{project.subtitle}</p>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full h-96 bg-slate-200 overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="container py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Project Overview</h2>
              <p className="text-lg text-slate-600 leading-relaxed">{project.overview}</p>
            </section>

            {/* Challenge */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">The Challenge</h2>
              <p className="text-lg text-slate-600 leading-relaxed">{project.challenge}</p>
            </section>

            {/* Solution */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Solution Approach</h2>
              <p className="text-lg text-slate-600 leading-relaxed">{project.solution}</p>
            </section>

            {/* Results */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Key Results</h2>
              <div className="space-y-3">
                {project.results.map((result: string, idx: number) => (
                  <div key={idx} className="flex gap-3">
                    <Zap className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-lg text-slate-600">{result}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Code Sample */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Code Implementation</h2>
              <div className="bg-slate-900 text-slate-100 p-6 rounded-lg overflow-x-auto">
                <pre className="font-mono text-sm leading-relaxed">{project.codeSnippet}</pre>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Metrics */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Key Metrics</h3>
              <div className="space-y-6">
                {project.metrics.map((metric: any, idx: number) => (
                  <div key={idx}>
                    <p className="text-sm font-medium text-slate-600 mb-2">{metric.label}</p>
                    <p className="text-3xl font-bold text-blue-600">{metric.value}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Technologies */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string) => (
                  <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </Card>

            {/* CTA */}
            <div className="space-y-3">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <Download className="w-4 h-4 mr-2" />
                Download Case Study
              </Button>
              <Button variant="outline" className="w-full">
                <ExternalLink className="w-4 h-4 mr-2" />
                View on GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Related Projects */}
      <section className="bg-slate-50 py-16 mt-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Other Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(projects)
              .filter(([key]) => key !== projectId)
              .slice(0, 3)
              .map(([key, p]: any) => (
                <Card key={key} className="overflow-hidden hover:shadow-lg transition cursor-pointer" onClick={() => setLocation(`/projects/${key}`)}>
                  <div className="h-40 bg-slate-200 overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-slate-900 mb-2">{p.title}</h3>
                    <p className="text-sm text-slate-600 line-clamp-2">{p.overview}</p>
                  </div>
                </Card>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
