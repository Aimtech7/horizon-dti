# CSS Architecture Guide

This document provides detailed information about the CSS architecture, design system, and styling conventions used in the Horizon Deutsch Training Institute website.

## Overview

The CSS architecture follows a component-based approach with CSS custom properties (variables) for maintainability and consistency. The styles are split across two main files:

- **`styles.css`**: Main stylesheet with component styles and design tokens
- **`responsive.css`**: Mobile-first responsive design with media queries

## Design System

### Color Palette

#### Primary Colors
```css
--primary-color: #1a1a2e;      /* Dark Blue - Main branding */
--secondary-color: #16213e;    /* Navy - Secondary elements */
--accent-color: #e94560;       /* Red/Coral - CTAs and highlights */
```

#### Neutral Colors
```css
--text-color: #333333;         /* Dark Gray - Body text */
--text-light: #666666;         /* Medium Gray - Secondary text */
--white: #ffffff;              /* White - Backgrounds and text */
--light-gray: #f8f9fa;         /* Light Gray - Section backgrounds */
--border-color: #e0e0e0;       /* Border color */
```

#### Functional Colors
```css
--shadow: 0 2px 10px rgba(0, 0, 0, 0.1);           /* Default shadow */
--shadow-hover: 0 4px 20px rgba(0, 0, 0, 0.15);    /* Hover shadow */
```

### Typography

#### Font Families
```css
font-family: 'Inter', 'Fira Sans', -apple-system, 
             BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

- **Primary**: Inter (modern, clean, highly readable)
- **Secondary**: Fira Sans (geometric, distinctive)
- **Fallback**: System fonts for performance

#### Font Weights
- 300: Light
- 400: Regular
- 500: Medium
- 600: Semi-bold
- 700: Bold

#### Font Sizes
```css
--base-font-size: 16px;
--line-height: 1.6;
```

### Spacing System

The project uses consistent spacing values (though not explicitly defined as variables):

- 4px base unit
- 8px, 12px, 16px, 20px, 30px, 40px, 60px commonly used

### Transitions
```css
--transition: all 0.3s ease;
```

Standard transition for all interactive elements.

## File Structure

### styles.css Organization

```
1. Reset and Base Styles (lines 1-50)
   - CSS reset
   - CSS variables
   - Base styles (body, images, links, lists)
   - Container utility

2. Header Styles (lines 52-150)
   - Site header
   - Navigation
   - Mobile menu toggle

3. Hero Section (lines 152-250)
   - Hero container
   - Hero content
   - Hero text and images
   - Partner carousel

4. Programs Section (lines 252-350)
   - Programs grid
   - Program cards
   - Program icons

5. Features Section (lines 352-450)
   - Features grid
   - Feature items
   - Feature numbers

6. CTA Section (lines 452-500)
   - CTA content
   - CTA buttons

7. Footer Styles (lines 502-650)
   - Footer branding
   - Footer content sections
   - Footer links
   - Footer bottom

8. Components (lines 652-800)
   - Buttons
   - Forms
   - Utility classes

9. Animations (lines 802-900)
   - Keyframe animations
   - Transition classes
```

### responsive.css Organization

```
1. Mobile Styles (< 768px)
   - Mobile navigation
   - Stacked layouts
   - Touch-friendly sizing

2. Tablet Styles (768px - 1024px)
   - Adjusted grids
   - Medium-sized layouts

3. Desktop Styles (> 1024px)
   - Full layouts
   - Hover effects
```

## Naming Conventions

### BEM-Inspired Naming

The project uses a BEM-inspired naming convention for clarity:

```
.block { }
.block__element { }
.block--modifier { }
```

#### Examples
```css
/* Block */
.site-header { }

/* Element */
.site-header .logo { }
.site-header .nav-menu { }

/* Modifier */
.nav-item.active { }
.btn-primary { }
.btn-secondary { }
```

### Component Prefixes

- `site-`: Site-level components (header, footer)
- `hero-`: Hero section components
- `program-`: Program-related components
- `feature-`: Feature section components
- `cta-`: Call-to-action components
- `footer-`: Footer components

## Component Documentation

### Header Component

```css
.site-header
├── .header-inner
│   ├── .site-branding
│   │   └── .logo-link
│   │       └── .logo
│   ├── .main-navigation
│   │   └── .nav-menu
│   │       └── .nav-item
│   └── .mobile-menu-toggle
```

**Features:**
- Sticky positioning
- Box shadow on scroll
- Responsive navigation
- Mobile hamburger menu

### Hero Component

```css
.hero-section
├── .hero-container
│   ├── .hero-content
│   │   ├── .hero-text
│   │   │   ├── .hero-subtitle
│   │   │   ├── .hero-title
│   │   │   ├── .hero-description
│   │   │   └── .btn
│   │   └── .hero-image
│   └── .partner-carousel
│       └── .carousel-track
```

**Features:**
- Two-column layout (desktop)
- Stacked layout (mobile)
- Animated partner carousel
- Responsive image sizing

### Program Cards

```css
.program-card
├── .program-icon
├── .program-title
└── .program-description
```

**Features:**
- Grid layout (3 columns desktop, 1 column mobile)
- Hover effects
- Icon display
- Consistent spacing

### Feature Items

```css
.feature-item
├── .feature-number
├── .feature-title
└── .feature-description
```

**Features:**
- Grid layout (4 columns desktop, 2 columns tablet, 1 column mobile)
- Numbered indicators
- Hover animations
- Scroll-triggered animations

### Button Component

```css
.btn
├── .btn-primary
└── .btn-secondary
```

**Variants:**
- Primary: Accent color background
- Secondary: Border with accent color
- Hover effects for both

## Responsive Design

### Breakpoints

```css
/* Mobile First Approach */

/* Mobile (default) */
< 768px

/* Tablet */
@media (min-width: 768px) { }

/* Desktop */
@media (min-width: 1024px) { }

/* Large Desktop */
@media (min-width: 1200px) { }
```

### Mobile-First Strategy

1. **Base Styles**: Write styles for mobile first
2. **Enhancement**: Add styles for larger screens using min-width media queries
3. **Progressive Enhancement**: Start with basic functionality, enhance for larger screens

### Responsive Patterns

#### Stacked to Grid
```css
/* Mobile: Stacked */
.programs-grid {
    display: flex;
    flex-direction: column;
}

/* Desktop: Grid */
@media (min-width: 1024px) {
    .programs-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
}
```

#### Font Scaling
```css
/* Mobile */
.hero-title {
    font-size: 2rem;
}

/* Desktop */
@media (min-width: 1024px) {
    .hero-title {
        font-size: 3rem;
    }
}
```

## Animations

### CSS Animations

```css
/* Fade In */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

/* Slide Up */
@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

### Transition Classes

```css
.fade-in {
    animation: fadeIn 0.6s ease;
}

.slide-up {
    animation: slideUp 0.6s ease;
}
```

### Scroll Animations

Scroll animations are handled via JavaScript Intersection Observer, but CSS provides the transition:

```css
.program-card {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.program-card.visible {
    opacity: 1;
    transform: translateY(0);
}
```

## Utility Classes

### Container
```css
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}
```

### Text Utilities
```css
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }
```

### Spacing Utilities
```css
.mt-20 { margin-top: 20px; }
.mb-20 { margin-bottom: 20px; }
/* Add more as needed */
```

## Customization Guide

### Changing Colors

1. **Open** `css/styles.css`
2. **Locate** the `:root` selector (lines 8-20)
3. **Update** the color variables
4. **Save** and refresh browser

```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    --accent-color: #your-color;
    /* ... */
}
```

### Adding New Colors

1. **Add** to `:root` variables:
```css
:root {
    --new-color: #hex-code;
}
```

2. **Use** in components:
```css
.component {
    color: var(--new-color);
}
```

### Modifying Spacing

1. **Add** spacing variables to `:root`:
```css
:root {
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    --spacing-xl: 32px;
}
```

2. **Update** components to use variables:
```css
.component {
    padding: var(--spacing-md);
}
```

### Changing Fonts

1. **Update** Google Fonts link in HTML:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

2. **Update** font-family in CSS:
```css
body {
    font-family: 'YourFont', sans-serif;
}
```

## Best Practices

### Performance
- Use CSS variables for theming
- Minimize selector specificity
- Avoid !important
- Use shorthand properties
- Group related styles

### Maintainability
- Comment complex styles
- Follow naming conventions
- Keep related styles together
- Use consistent formatting
- Document custom components

### Accessibility
- Maintain color contrast ratios (4.5:1 for text)
- Use relative units (rem, em, %)
- Ensure focus states are visible
- Don't rely solely on color for meaning
- Test with screen readers

### Browser Compatibility
- Use autoprefixer for vendor prefixes (if using build tools)
- Test on target browsers
- Provide fallbacks for unsupported features
- Use feature queries (@supports) when needed

## Troubleshooting

### Styles Not Applying
1. Check file path in `<link>` tag
2. Clear browser cache
3. Validate CSS syntax
4. Check selector specificity
5. Verify CSS is loaded (Network tab)

### Responsive Issues
1. Check viewport meta tag
2. Verify media query syntax
3. Test at actual breakpoints
4. Check for conflicting styles
5. Test on real devices

### Animation Issues
1. Check browser support
2. Verify syntax
3. Check for JavaScript conflicts
4. Test with reduced motion preference
5. Ensure hardware acceleration

## Resources

### Documentation
- [MDN CSS Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS Tricks](https://css-tricks.com/)
- [Can I Use](https://caniuse.com/)

### Tools
- [CSS Variables Generator](https://cssvar.com/)
- [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [CSS Minifier](https://cssminifier.com/)

### Learning
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Animation Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
