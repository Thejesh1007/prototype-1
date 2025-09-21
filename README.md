# MoES AI-Driven Unified Data Platform

A comprehensive web application for the Ministry of Earth Sciences, integrating oceanographic, fisheries, and molecular biodiversity data with AI-powered insights.

## Features

- **Unified Dashboard**: Real-time visualization of marine data across multiple domains
- **Oceanographic Module**: Ocean temperature, salinity, pH monitoring
- **Fisheries Management**: Fish stock assessment and sustainable catch recommendations
- **Biodiversity Analysis**: Genetic diversity tracking and species identification
- **AI Insights**: Machine learning predictions and trend analysis
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Technology Stack

- HTML5, CSS3, JavaScript (ES6+)
- Chart.js for data visualization
- Font Awesome for icons
- Responsive CSS Grid and Flexbox layouts

## Local Deployment

1. **Clone or Download** the project files
2. **Open in Browser**: Simply open `index.html` in any modern web browser
3. **Local Server** (recommended for development):
   ```bash
   # Using Python 3
   python -m http.server 3000
   
   # Using Node.js (if you have http-server installed)
   npx http-server . -p 3000
   
   # Using PHP
   php -S localhost:3000
   ```
4. Open `http://localhost:3000` in your browser

## GitHub Deployment

### Option 1: GitHub Pages (Recommended for static sites)

1. **Create GitHub Repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: MoES Data Platform"
   git branch -M main
   git remote add origin https://github.com/yourusername/moes-data-platform.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Save and wait for deployment

3. **Access your site** at: `https://yourusername.github.io/moes-data-platform`

### Option 2: Netlify (Drag & Drop)

1. Zip all project files
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop your zip file
4. Get instant deployment with custom domain

### Option 3: Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Follow the prompts for instant deployment

## Project Structure

```
moes-data-platform/
├── index.html          # Main HTML file
├── style.css          # All styles and responsive design
├── script.js          # JavaScript functionality
└── README.md          # This file
```

## Development Notes

- **Responsive Design**: Fully responsive across all device sizes
- **Modern CSS**: Uses CSS Grid, Flexbox, and custom properties
- **Interactive Charts**: Real-time data visualization with Chart.js
- **Progressive Enhancement**: Works without JavaScript for basic functionality
- **Accessibility**: Semantic HTML and ARIA labels for screen readers

## Future Enhancements

- Backend API integration for real data
- User authentication system
- Advanced AI model integration
- Real-time WebSocket connections
- Data export functionality
- Multi-language support

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Contributing

This is a hackathon prototype. For production deployment, consider:
- Adding a robust backend (Node.js, Python, etc.)
- Database integration (PostgreSQL, MongoDB)
- Real-time data streaming
- Enhanced security measures
- API documentation