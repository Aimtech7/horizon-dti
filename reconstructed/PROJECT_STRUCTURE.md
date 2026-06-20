# Project Structure

This document provides a detailed breakdown of the Horizon Deutsch Training Institute website reconstruction project structure.

## Directory Overview

```
website_backup/
├── reconstructed/              # Main reconstructed website files
│   ├── index.html            # Homepage
│   ├── about.html            # About Us page
│   ├── programs.html         # Programs page with interactive tabs
│   ├── career-pathways.html  # Career opportunities page
│   ├── virtual-learning.html # Online learning information
│   ├── admissions.html       # Enrollment process page
│   ├── contact.html          # Contact page with form
│   ├── privacy-policy.html   # Privacy policy
│   ├── terms-of-service.html # Terms and conditions
│   ├── cookie-policy.html    # Cookie usage policy
│   ├── css/                  # Stylesheets
│   │   ├── styles.css        # Main stylesheet with CSS variables
│   │   └── responsive.css    # Mobile-first responsive design
│   ├── js/                   # JavaScript files
│   │   ├── main.js           # Core functionality (menu, animations)
│   │   ├── tabs.js           # Tab functionality for programs page
│   │   └── contact.js        # Contact form handling
│   └── README.md             # Project overview and setup
├── website_backup/           # Original backup files
└── report.md                 # Change tracking report
```

## File Descriptions

### HTML Pages

#### `index.html`
- **Purpose**: Main landing page
- **Key Sections**: Hero, Programs overview, Features, CTA, Footer
- **Dependencies**: `css/styles.css`, `css/responsive.css`, `js/main.js`
- **Special Features**: Partner carousel, animated program cards

#### `about.html`
- **Purpose**: Company information and philosophy
- **Key Sections**: Vision, Mission, Teaching approach, Benefits
- **Dependencies**: All CSS and JS files

#### `programs.html`
- **Purpose**: Detailed program information
- **Key Sections**: A1-B2 level tabs, course details, pricing
- **Dependencies**: All CSS files, `js/main.js`, `js/tabs.js`
- **Special Features**: Interactive tab system for language levels

#### `career-pathways.html`
- **Purpose**: Career opportunities in Germany
- **Key Sections**: Job opportunities, Study options, Visa information
- **Dependencies**: All CSS and JS files

#### `virtual-learning.html`
- **Purpose**: Online learning platform information
- **Key Sections**: Features, How it works, Technical requirements
- **Dependencies**: All CSS and JS files

#### `admissions.html`
- **Purpose**: Enrollment process and requirements
- **Key Sections**: Application steps, Requirements, Timeline
- **Dependencies**: All CSS and JS files

#### `contact.html`
- **Purpose**: Contact information and form
- **Key Sections**: Contact form, Map, Contact details
- **Dependencies**: All CSS files, `js/main.js`, `js/contact.js`
- **Special Features**: Form validation, Google Maps integration

#### Legal Pages
- `privacy-policy.html`: Privacy policy and data handling
- `terms-of-service.html`: Website terms and conditions
- `cookie-policy.html`: Cookie usage and preferences

### CSS Files

#### `css/styles.css`
- **Purpose**: Main stylesheet with all component styles
- **Size**: ~1,378 lines
- **Key Features**:
  - CSS custom properties (variables) for theming
  - Component-based architecture
  - Responsive design utilities
  - Animation definitions
- **Sections**:
  1. Reset and base styles
  2. CSS variables (colors, spacing, shadows)
  3. Header and navigation
  4. Hero section
  5. Programs section
  6. Features section
  7. CTA section
  8. Footer
  9. Buttons and forms
  10. Utility classes

#### `css/responsive.css`
- **Purpose**: Mobile-first responsive design
- **Key Features**:
  - Breakpoint-based media queries
  - Mobile navigation styles
  - Responsive grid layouts
  - Touch-friendly interactions
- **Breakpoints**:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

### JavaScript Files

#### `js/main.js`
- **Purpose**: Core site functionality
- **Size**: ~141 lines
- **Key Functions**:
  - Mobile menu toggle with animation
  - Smooth scroll for anchor links
  - Header scroll effect
  - Scroll-based animations (Intersection Observer)
  - Partner carousel pause on hover
  - Form validation utilities
  - Email and phone validation
- **Event Listeners**: DOMContentLoaded, click, scroll, mouseenter/mouseleave

#### `js/tabs.js`
- **Purpose**: Tab functionality for programs page
- **Key Functions**:
  - Tab switching logic
  - Content display/hide
  - Active state management
- **Usage**: Used on `programs.html` for A1-B2 level selection

#### `js/contact.js`
- **Purpose**: Contact form handling
- **Key Functions**:
  - Form submission handling
  - AJAX form submission (if backend available)
  - Success/error message display
  - Form reset after submission
- **Usage**: Used on `contact.html`

## Asset Dependencies

### External Resources
- **Google Fonts**: Inter and Fira Sans families
- **Images**: Hosted on `horizon-dti.com` WordPress installation
- **No JavaScript Frameworks**: Pure vanilla JavaScript

### Image Sources
All images are loaded from the original WordPress installation:
- Logo: `https://www.horizon-dti.com/wp-content/uploads/2026/02/Horizon-DTI-logo.jpg`
- Hero image: `https://www.horizon-dti.com/wp-content/uploads/2026/03/student-new.jpeg`
- Partner logos: Various paths in `/wp-content/uploads/elementor/thumbs/`

## CSS Architecture

### Color System
```css
--primary-color: #1a1a2e      /* Dark Blue */
--secondary-color: #16213e    /* Navy */
--accent-color: #e94560       /* Red/Coral */
--text-color: #333333         /* Dark Gray */
--text-light: #666666         /* Medium Gray */
--white: #ffffff
--light-gray: #f8f9fa
```

### Typography
- **Primary Font**: Inter (weights: 300, 400, 500, 600, 700)
- **Secondary Font**: Fira Sans (weights: 300, 400, 500, 600, 700)
- **Base Size**: 16px
- **Line Height**: 1.6

### Component Naming Convention
- BEM-inspired naming: `.component-element--modifier`
- Examples: `.site-header`, `.nav-item.active`, `.btn-primary`

## JavaScript Architecture

### Module Pattern
Each JavaScript file is self-contained with no global namespace pollution (except where necessary for cross-file communication).

### Event Handling
- Event delegation used where appropriate
- DOMContentLoaded wrapper for initialization
- Clean event listener removal where needed

### Performance Considerations
- Intersection Observer for scroll animations
- Passive event listeners for scroll/touch
- Debounced resize handlers (if added)

## Browser Compatibility

### Target Browsers
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- iOS Safari (latest 2 versions)
- Chrome Mobile (latest 2 versions)

### Polyfills
None required - uses modern JavaScript features supported by all target browsers.

## File Size Summary

- **HTML Files**: ~10 files, average ~15KB each
- **CSS Files**: 2 files, ~50KB total
- **JavaScript Files**: 3 files, ~10KB total
- **Total Project Size**: ~200KB (excluding external assets)

## Development Workflow

1. **HTML Changes**: Edit individual HTML files
2. **CSS Changes**: Modify `css/styles.css` for component styles, `css/responsive.css` for responsive changes
3. **JavaScript Changes**: Modify appropriate JS file based on functionality
4. **Testing**: Open files directly in browser (no build process required)
5. **Deployment**: Upload all files maintaining directory structure

## Notes

- No build process or package manager required
- No server-side processing needed (static HTML)
- All functionality works client-side
- Images are hotlinked from original domain (consider local hosting for production)
