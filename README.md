# Turning Waste into Opportunity: Sustainable Solutions for a Cleaner Future

A deployment-ready full-stack website presenting innovative plastic waste conversion technology based entirely on the content from the provided PDF document. This informational/pitch website demonstrates sustainable solutions for plastic waste management while showcasing strong investment potential.

## 🌱 Project Overview

This website presents a comprehensive solution for converting plastic waste into valuable fuel resources using micro-scale catalytic pyrolysis technology. All content, data, and visualizations are derived exclusively from the provided PDF document titled "Turning Waste into Opportunity: Sustainable Solutions for a Cleaner Future".

### Key Features
- **Professional Design**: Clean, responsive interface suitable for investors and academic evaluation
- **Data-Driven Content**: All information sourced directly from the PDF document
- **Interactive Visualizations**: Charts and graphs displaying key metrics and financial projections
- **Mobile-First Approach**: Fully responsive design for all device sizes
- **Deployment Ready**: Containerized application ready for cloud platforms

## 🏗️ Technology Stack

### Frontend
- **React** with **Vite** for fast development and optimized production builds
- **Tailwind CSS** for responsive styling and design system
- **Recharts** for interactive data visualizations
- **React Router** for client-side routing
- **Axios** for API communication

### Backend
- **Node.js** with **Express.js** framework
- **JSON** data storage (no external database required)
- **CORS** enabled for cross-origin requests
- **Environment-based configuration**

### DevOps & Deployment
- **Docker** containerization for both frontend and backend
- **Docker Compose** for multi-container orchestration
- **Nginx** reverse proxy for production deployments
- Ready for deployment on **Render**, **Railway**, **Vercel**, or **AWS**

## 📁 Project Structure

```
project-root/
├── frontend/                 # React application
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   │   ├── Charts.jsx    # Data visualization components
│   │   │   ├── LoadingSpinner.jsx
│   │   │   └── Navigation.jsx
│   │   ├── pages/           # Individual page components
│   │   │   ├── Home.jsx
│   │   │   ├── Problem.jsx
│   │   │   ├── Technology.jsx
│   │   │   ├── Investment.jsx
│   │   │   ├── Revenue.jsx
│   │   │   ├── Profitability.jsx
│   │   │   └── [other pages...]
│   │   ├── utils/
│   │   │   └── api.js       # API utility functions
│   │   ├── App.jsx          # Main application component
│   │   ├── main.jsx         # React entry point
│   │   └── index.css        # Global styles
│   ├── Dockerfile           # Frontend container configuration
│   ├── nginx.conf           # Nginx reverse proxy configuration
│   └── package.json
├── backend/                  # Node.js Express API
│   ├── data/                # JSON data files (PDF-derived)
│   │   ├── problem.json
│   │   ├── technology.json
│   │   ├── investment.json
│   │   └── [other data files...]
│   ├── routes/              # API route handlers
│   ├── server.js            # Express server
│   ├── Dockerfile           # Backend container configuration
│   └── package.json
├── docker-compose.yml       # Multi-container orchestration
└── README.md               # This documentation
```

## 🚀 Local Development

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Docker and Docker Compose (optional, for containerized development)

### Quick Start

1. **Clone and navigate to the project directory:**
```bash
cd e:\new
```

2. **Install backend dependencies:**
```bash
cd backend
npm install
```

3. **Start the backend server:**
```bash
npm run dev
# Server will run on http://localhost:5000
```

4. **In a new terminal, install frontend dependencies:**
```bash
cd ../frontend
npm install
```

5. **Start the frontend development server:**
```bash
npm run dev
# Application will run on http://localhost:3000
```

6. **Access the application:**
Open your browser and navigate to `http://localhost:3000`

### Development Commands

**Backend:**
```bash
cd backend
npm run dev     # Start development server with nodemon
npm start       # Start production server
```

**Frontend:**
```bash
cd frontend
npm run dev     # Start development server
npm run build   # Create production build
npm run preview # Preview production build
```

## 🐳 Docker Deployment

### Building and Running with Docker Compose

1. **Build and start all services:**
```bash
docker-compose up --build
```

2. **Access the application:**
- Frontend: `http://localhost`
- Backend API: `http://localhost:5000`

### Individual Container Management

**Build frontend container:**
```bash
cd frontend
docker build -t sustainability-frontend .
docker run -p 80:80 sustainability-frontend
```

**Build backend container:**
```bash
cd backend
docker build -t sustainability-backend .
docker run -p 5000:5000 sustainability-backend
```

## ☁️ Cloud Deployment

### GitHub Pages Deployment (Recommended for Static Sites)

1. **Create a GitHub Repository**
   - Go to GitHub and create a new repository named `Finalessimo`
   - Don't initialize with README (we'll push existing code)

2. **Push Code to GitHub**
```bash
git add .
git commit -m "Initial commit for GitHub Pages deployment"
git remote add origin https://github.com/yourusername/Finalessimo.git
git branch -M main
git push -u origin main
```

3. **Enable GitHub Pages**
   - Go to your repository Settings
   - Navigate to Pages section
   - Select "GitHub Actions" as the source

4. **Automatic Deployment**
   - The GitHub Actions workflow will automatically build and deploy your site
   - Your site will be available at: `https://yourusername.github.io/Finalessimo/`

### Render Deployment

1. **Create a new Web Service on Render**
2. **Connect your repository**
3. **Configure environment variables:**
   ```
   NODE_ENV=production
   PORT=5000
   ```

### Railway Deployment

1. **Create a new project on Railway**
2. **Deploy from GitHub repository**
3. **Railway will automatically detect and deploy both frontend and backend**

### Vercel Deployment (Frontend only)

1. **Install Vercel CLI:**
```bash
npm i -g vercel
```

2. **Deploy frontend:**
```bash
cd frontend
vercel
```

### AWS Deployment

1. **Push images to Amazon ECR:**
```bash
aws ecr get-login-password | docker login --username AWS --password-stdin [account-id].dkr.ecr.[region].amazonaws.com
docker build -t sustainability-app ./frontend
docker build -t sustainability-api ./backend
docker tag sustainability-app:latest [account-id].dkr.ecr.[region].amazonaws.com/sustainability-app:latest
docker tag sustainability-api:latest [account-id].dkr.ecr.[region].amazonaws.com/sustainability-api:latest
docker push [account-id].dkr.ecr.[region].amazonaws.com/sustainability-app:latest
docker push [account-id].dkr.ecr.[region].amazonaws.com/sustainability-api:latest
```

2. **Deploy using ECS or EKS with the provided docker-compose.yml**

## 🔧 Environment Variables

### Frontend (.env)
```env
VITE_API_BASE_URL=http://localhost:5000  # Development API endpoint
```

### Backend (.env)
```env
PORT=5000              # Server port
NODE_ENV=development   # Environment mode
```

## 📊 Data Sources

All website content and data are derived exclusively from the provided PDF document. The JSON data files in `/backend/data/` contain structured information extracted from the PDF, including:

- Plastic waste statistics and environmental impact data
- Technology specifications and process details
- Financial projections and investment requirements
- Market analysis and revenue models
- Risk assessments and mitigation strategies

## 🎯 Key Sections

1. **Home/Overview** - Executive summary and key highlights
2. **Plastic Waste Problem** - Scale and impact of plastic waste challenge
3. **Waste Management Ecosystem** - Current waste handling approaches
4. **Micro-Scale Catalytic Pyrolysis** - Technology solution details
5. **Engineering and Process Flow** - Operational methodology
6. **Advantages Over Alternatives** - Competitive advantages
7. **Market Potential Across India** - Market size and opportunities
8. **Investment Requirements** - Capital needs and funding structure
9. **Monthly Operational Breakdown** - Cost structure and operations
10. **Revenue Streams and Profitability** - Financial projections
11. **Risk Management** - Risk assessment and mitigation
12. **Environmental, Financial, and Social Impact** - Triple-bottom-line benefits
13. **Call to Action / Next Steps** - Implementation roadmap

## 🛡️ Security Considerations

- No authentication or user accounts required
- CORS enabled for legitimate cross-origin requests
- Environment variables for configuration management
- Production-ready Docker configurations
- Secure header implementation in Nginx

## 📈 Performance Optimization

- Vite for fast development and optimized builds
- Code splitting for improved loading times
- Responsive images and efficient asset handling
- Docker layer caching for faster rebuilds
- Nginx compression and caching configuration

## 🤝 Contributing

This project is designed as a static informational website. Contributions should focus on:
- Improving data accuracy and presentation
- Enhancing user experience and accessibility
- Adding new visualization capabilities
- Optimizing performance and deployment processes

## 📄 License

This project is based on proprietary content from the provided PDF document. All rights to the original content belong to the respective owners.

## 🆘 Troubleshooting

### Common Issues

**API Connection Errors:**
- Ensure backend is running on port 5000
- Check CORS configuration
- Verify environment variables are set correctly

**Docker Build Failures:**
- Ensure Docker daemon is running
- Check available disk space
- Verify Dockerfile paths are correct

**Performance Issues:**
- Clear browser cache and localStorage
- Check network connectivity
- Monitor Docker container resource usage

### Support

For deployment assistance or technical issues, please refer to the platform-specific documentation for:
- Docker: https://docs.docker.com/
- Render: https://render.com/docs
- Railway: https://railway.app/docs
- Vercel: https://vercel.com/docs

---

*This website presents a comprehensive pitch for sustainable plastic waste conversion technology, demonstrating both environmental impact and strong financial returns based entirely on the content provided in the source PDF document.*