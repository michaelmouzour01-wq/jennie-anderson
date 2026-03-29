import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code2, Database, MapPin, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Automated Watershed Delineation",
      description: "Python and QGIS-based pipeline for automatic watershed boundary delineation from DEM data, reducing processing time by 40%.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663483126481/hUD6andaJr5oYiH6hyrhJ3/watershed-project-FyKuFyVjEvkn4CCUKxogXB.webp",
      tags: ["QGIS", "PyQGIS", "PostGIS", "GDAL", "Python"],
      impact: "98.7% accuracy, 40% faster processing",
      route: "/projects/watershed"
    },
    {
      id: 2,
      title: "Land Cover Classification",
      description: "Machine learning-enhanced satellite imagery classification using Sentinel-2 data across 2,500 km² with 91.3% accuracy.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663483126481/hUD6andaJr5oYiH6hyrhJ3/landcover-classification-gnxxrCr3rg92iadcxMaJfp.webp",
      tags: ["Sentinel-2", "scikit-learn", "QGIS", "Remote Sensing"],
      impact: "2,500 km² classified, 47 standardized maps",
      route: "/projects/landcover"
    },
    {
      id: 3,
      title: "Emergency Response Network Analysis",
      description: "Spatial network optimization for fire department routing, reducing response time by 18% through service area analysis.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663483126481/hUD6andaJr5oYiH6hyrhJ3/network-analysis-AonLTy8vdi55EKoS2UkgAj.webp",
      tags: ["Network Analysis", "PostGIS", "QGIS", "Python"],
      impact: "18% faster response, 89% coverage improvement",
      route: "/projects/network"
    },
    {
      id: 4,
      title: "Urban Heat Island Analysis",
      description: "Thermal analysis using Landsat 8 imagery to identify heat islands and develop mitigation strategies for climate resilience.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663483126481/hUD6andaJr5oYiH6hyrhJ3/thermal-analysis-dofeq8zd8KZBFSUJ53aiUZ.webp",
      tags: ["Landsat 8", "Thermal Analysis", "QGIS", "Climate"],
      impact: "$4.2M in funding secured, 1.5-2.0°C reduction projected",
      route: "/projects/thermal"
    }
  ];

  const skills = [
    {
      icon: MapPin,
      title: "GIS Software",
      items: ["QGIS (Advanced)", "ArcGIS Pro", "GRASS GIS", "SAGA GIS"]
    },
    {
      icon: Database,
      title: "Spatial Databases",
      items: ["PostGIS", "PostgreSQL", "GeoPackage", "Spatial SQL"]
    },
    {
      icon: Code2,
      title: "Programming",
      items: ["Python (PyQGIS)", "R Spatial", "GDAL/OGR", "ModelBuilder"]
    },
    {
      icon: Zap,
      title: "Analysis",
      items: ["Remote Sensing", "Network Analysis", "Hydrological Modeling", "Machine Learning"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg text-slate-900">Jenny Anderson</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#projects" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">Projects</a>
            <a href="#skills" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">Skills</a>
            <a href="#about" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">About</a>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Contact</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663483126481/hUD6andaJr5oYiH6hyrhJ3/hero-geospatial-YDCUAuaxZruiJDJUpMGTif.webp"
            alt="Geospatial Analysis"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        </div>

        <div className="container relative z-10 py-24 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Geospatial Analysis & Spatial Intelligence
            </h1>
            <p className="text-xl text-slate-100 mb-8 leading-relaxed">
              Master's degree in GIS with 8+ years of experience in spatial data analysis, QGIS automation, and environmental modeling. Transforming complex geographic data into actionable insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                View My Work <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-28">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-slate-600">Real-world geospatial solutions demonstrating advanced analysis and automation capabilities.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Link key={project.id} href={project.route}>
                <a className="group cursor-pointer">
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="relative overflow-hidden h-64 bg-slate-200">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition">{project.title}</h3>
                      <p className="text-slate-600 text-sm mb-4 flex-1">{project.description}</p>
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-blue-600 mb-2">Impact: {project.impact}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <Button variant="ghost" className="w-full justify-start text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0">
                        View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </Card>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-28 bg-slate-900 text-white">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Expertise</h2>
            <p className="text-lg text-slate-300">Comprehensive skill set spanning GIS software, spatial databases, programming, and advanced analysis.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div key={skill.title} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition">
                  <Icon className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-lg font-bold mb-4">{skill.title}</h3>
                  <ul className="space-y-2">
                    {skill.items.map((item) => (
                      <li key={item} className="text-sm text-slate-300 flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">About Me</h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                I hold a Master of Science in Geographic Information Systems from the University of Arizona, with a specialized focus on spatial data science and remote sensing. My career spans over eight years of hands-on experience in geospatial analysis, cartographic design, and database management across environmental consulting, urban planning, and infrastructure sectors.
              </p>
              <p>
                My expertise lies in leveraging QGIS for complex spatial modeling, automating workflows through PyQGIS scripting, and managing large-scale spatial databases using PostGIS. I excel at transforming raw geographic data into high-quality, actionable insights that support strategic decision-making for municipalities, environmental agencies, and private organizations.
              </p>
              <p>
                I am passionate about open-source geospatial technologies and have contributed to OpenStreetMap mapping initiatives. I hold certifications in Advanced QGIS, Remote Sensing & Image Analysis, and am a GIS Professional (GISP). My work consistently demonstrates measurable impact: from reducing processing time by 40% through automation to securing $4.2M in funding for climate resilience projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Collaborate</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            I'm available for consulting projects, full-time opportunities, and collaborative research in geospatial analysis and spatial intelligence.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 font-semibold">
            Get In Touch
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-white">Jenny Anderson</span>
            </div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition">LinkedIn</a>
              <a href="#" className="hover:text-white transition">GitHub</a>
              <a href="#" className="hover:text-white transition">Email</a>
            </div>
            <p className="text-sm">© 2026 Jenny Anderson. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
