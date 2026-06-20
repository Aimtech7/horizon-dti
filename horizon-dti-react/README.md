# Horizon Deutsch Training Institute - React Website

A professional React-based website reconstruction for Horizon Deutsch Training Institute, a German language training institution in Kenya.

## 🚀 Project Overview

This is a complete React application built with Vite, featuring:
- **React 18** with modern hooks and functional components
- **React Router** for client-side routing
- **Responsive Design** that works on all devices
- **Component-based Architecture** for maintainability
- **Modern CSS** with CSS variables and Flexbox/Grid
- **Interactive Elements** including tabs, forms, and mobile navigation

## 📁 Project Structure

```
horizon-dti-react/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Header.jsx      # Navigation header with mobile menu
│   │   ├── Header.css
│   │   ├── Footer.jsx      # Footer with links and contact info
│   │   └── Footer.css
│   ├── pages/              # Page components
│   │   ├── Home.jsx        # Homepage with hero and features
│   │   ├── Home.css
│   │   ├── About.jsx       # About us page
│   │   ├── About.css
│   │   ├── Programs.jsx    # Programs with interactive tabs
│   │   ├── Programs.css
│   │   ├── Contact.jsx     # Contact page with form
│   │   ├── Contact.css
│   │   ├── Admissions.jsx  # Admissions process
│   │   ├── Admissions.css
│   │   ├── CareerPathways.jsx
│   │   ├── CareerPathways.css
│   │   ├── VirtualLearning.jsx
│   │   ├── VirtualLearning.css
│   │   ├── PrivacyPolicy.jsx
│   │   ├── TermsOfService.jsx
│   │   ├── CookiePolicy.jsx
│   │   └── Legal.css       # Shared styles for legal pages
│   ├── App.jsx             # Main app with routing
│   ├── App.css
│   ├── index.css           # Global styles
│   └── main.jsx            # Entry point
├── public/                 # Static assets
├── package.json
└── vite.config.js
```

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **CSS3** - Styling with CSS variables, Flexbox, and Grid
- **Google Fonts** - Inter and Fira Sans typography

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Aimtech7/horizon-dti.git
cd horizon-dti-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

## 🏗️ Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📄 Pages

- **Home** (`/`) - Hero section, program overview, features
- **About Us** (`/about`) - Vision, mission, teaching philosophy
- **Programs** (`/programs`) - German language levels A1-B2 with interactive tabs
- **Career Pathways** (`/career-pathways`) - Career opportunities in Germany
- **Virtual Learning** (`/virtual-learning`) - Online learning options
- **Admissions** (`/admissions`) - Enrollment process and requirements
- **Contact Us** (`/contact`) - Contact form and information
- **Privacy Policy** (`/privacy-policy`) - Privacy information
- **Terms of Service** (`/terms-of-service`) - Terms and conditions
- **Cookie Policy** (`/cookie-policy`) - Cookie usage information

## 🎨 Features

- **Responsive Design** - Works on desktop, tablet, and mobile
- **Mobile Navigation** - Hamburger menu for mobile devices
- **Interactive Tabs** - Program level selection in Programs page
- **Contact Form** - Functional form with validation
- **Smooth Animations** - Hover effects and transitions
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Fast Loading** - Optimized with Vite

## 🎨 Color Scheme

- Primary: `#1a1a2e` (Dark Blue)
- Secondary: `#16213e` (Navy)
- Accent: `#e94560` (Red/Coral)
- Text: `#333333` (Dark Gray)
- Light Text: `#666666` (Medium Gray)
- White: `#ffffff`
- Light Gray: `#f8f9fa`

## 🌐 Deployment

The website can be deployed to various platforms:

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload the dist folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Configure GitHub Pages to serve from dist folder
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🤝 Contributing

This is a project for Horizon Deutsch Training Institute. For contributions, please contact the development team.

## 📞 Contact

- **Email:** admissions@horizon-dti.com
- **Phone:** +254 119 485 021
- **Location:** Ambwere House 5th Floor, Kitale, Kenya

## 📄 License

This project is for Horizon Deutsch Training Institute. All rights reserved.

## 🙏 Acknowledgments

- Original website design preserved
- Built with modern React best practices
- Responsive and accessible design
