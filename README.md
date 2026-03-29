# Geospatial Portfolio - Jenny Anderson

A professional portfolio website showcasing geospatial analysis projects, QGIS expertise, and Python-based spatial solutions. This portfolio demonstrates real-world GIS applications including watershed modeling, land cover classification, network analysis, and thermal analysis.

## Features

- **Interactive Project Showcase**: Detailed case studies with project metrics, technologies, and code samples
- **Responsive Design**: Mobile-first approach with Tailwind CSS for optimal viewing across all devices
- **High-Performance**: Built with React 19 and optimized for fast load times
- **Professional Aesthetics**: Clean, modern design with gradient accents and smooth interactions
- **SEO-Optimized**: Proper meta tags and semantic HTML for search engine visibility

## Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS 4
- **Routing**: Wouter (lightweight client-side router)
- **UI Components**: shadcn/ui with Radix UI primitives
- **Build Tool**: Vite
- **Deployment**: Vercel-ready (static export)

## Project Structure

```
geospatial-portfolio/
├── client/
│   ├── public/
│   │   ├── favicon.ico
│   │   └── robots.txt
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx          # Main landing page
│   │   │   ├── ProjectDetail.tsx # Individual project pages
│   │   │   └── NotFound.tsx      # 404 page
│   │   ├── components/
│   │   │   ├── ui/               # shadcn/ui components
│   │   │   ├── ErrorBoundary.tsx
│   │   │   └── Map.tsx           # Maps integration
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx
│   │   ├── lib/
│   │   │   └── utils.ts
│   │   ├── App.tsx               # Main app component with routing
│   │   ├── main.tsx              # React entry point
│   │   └── index.css             # Global styles and theme
│   └── index.html
├── server/
│   └── index.ts                  # Express server (static serving)
├── package.json
└── README.md
```

## Featured Projects

### 1. Automated Watershed Delineation Pipeline
- **Impact**: 87.5% reduction in processing time (6 hours → 45 minutes)
- **Accuracy**: 98.7% validation against field data
- **Technologies**: QGIS, PyQGIS, PostGIS, GDAL, Python
- **Scale**: 50+ watersheds processed

### 2. Land Cover Classification Using Satellite Imagery
- **Impact**: 91.3% classification accuracy across 2,500 km²
- **Deliverables**: 47 standardized map sheets
- **Technologies**: Sentinel-2, scikit-learn, QGIS, Remote Sensing
- **Cost Reduction**: 65% vs. manual digitization

### 3. Emergency Response Network Analysis
- **Impact**: 18% reduction in emergency response time
- **Coverage**: 89% of area within 5-minute response time
- **Technologies**: Network Analysis, PostGIS, OpenStreetMap, Python
- **Recommendations**: 2 optimal fire station locations identified

### 4. Urban Heat Island Analysis & Mitigation Planning
- **Impact**: $4.2M in state/federal funding secured
- **Analysis**: 12 heat islands identified with 2.5-5.8°C anomalies
- **Technologies**: Landsat 8, Thermal Analysis, QGIS, Python
- **Projected Benefit**: 1.5-2.0°C temperature reduction

## Getting Started

### Prerequisites
- Node.js 18+ and pnpm 10+
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/michaelmouzour01-wq/jennie-anderson.git
cd jennie-anderson

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The site will be available at `http://localhost:3000`

### Building for Production

```bash
# Build the project
pnpm build

# Preview production build locally
pnpm preview
```

## Deployment to Vercel

### Option 1: Direct Import (Recommended)
1. Go to [Vercel](https://vercel.com)
2. Click "Add New..." → "Project"
3. Select "Import Git Repository"
4. Paste your GitHub repository URL: `https://github.com/michaelmouzour01-wq/jennie-anderson.git`
5. Vercel will auto-detect the project settings
6. Click "Deploy"

### Option 2: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project root
vercel
```

### Custom Domain Setup
1. In Vercel dashboard, go to Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Domain will be live within minutes

## Customization

### Update Personal Information
Edit `client/src/pages/Home.tsx`:
- Update name, title, and bio in the hero section
- Modify contact information in the footer
- Add your social media links

### Modify Project Details
Edit `client/src/pages/ProjectDetail.tsx`:
- Update project descriptions and metrics
- Add new projects by extending the `projects` object
- Modify technologies and code samples

### Change Colors & Theme
Edit `client/src/index.css`:
- Modify CSS variables in `:root` section
- Update color palette for light/dark themes
- Adjust spacing and typography

### Update Images
Replace image URLs in components:
- Hero image in `Home.tsx`
- Project thumbnails in project cards
- Use your own images or CDN URLs

## Performance Optimization

- **Image Optimization**: All images are WebP-compressed and served via CDN
- **Code Splitting**: Route-based code splitting with Wouter
- **CSS**: Tailwind CSS purges unused styles in production
- **Caching**: Static assets cached by Vercel's CDN

## SEO Best Practices

- Semantic HTML structure
- Meta tags for social sharing
- Open Graph tags for preview cards
- Structured data ready for implementation
- Mobile-responsive design

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This portfolio template is provided as-is. Feel free to customize and deploy for your own use.

## Support & Questions

For deployment issues or customization help:
1. Check Vercel documentation: https://vercel.com/docs
2. Review React documentation: https://react.dev
3. Explore Tailwind CSS: https://tailwindcss.com

## Author

**Jenny Anderson**
Geospatial Data Specialist | Master's in GIS
Lexington, KY

---

**Last Updated**: March 2026
**Version**: 1.0.0
