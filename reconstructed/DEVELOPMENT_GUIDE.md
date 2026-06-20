# Development Guide

This guide provides comprehensive instructions for developers working on the Horizon Deutsch Training Institute website reconstruction.

## Prerequisites

### Required Tools
- **Text Editor**: VS Code, Sublime Text, or any modern code editor
- **Web Browser**: Chrome, Firefox, Safari, or Edge for testing
- **Git**: For version control (optional but recommended)

### Optional Tools
- **Live Server**: VS Code extension for local development
- **Browser DevTools**: For debugging and inspection
- **Image Optimizer**: For compressing images
- **HTML Validator**: For markup validation

## Getting Started

### 1. Clone/Download the Project
```bash
# If using Git
git clone <repository-url>
cd website_backup/reconstructed

# Or download and extract the zip file
```

### 2. Open the Project
Open the `reconstructed` folder in your preferred text editor.

### 3. Start Local Development
```bash
# Option 1: Using Live Server (VS Code)
- Install "Live Server" extension
- Right-click on index.html
- Select "Open with Live Server"

# Option 2: Using Python
python -m http.server 8000

# Option 3: Using Node.js (if you have it installed)
npx serve

# Option 4: Direct file opening
Simply open index.html in your browser
```

### 4. Verify Setup
- Navigate to `http://localhost:8000` (or your chosen port)
- Check that all pages load correctly
- Test responsive design by resizing browser window

## Development Workflow

### Making Changes

#### HTML Changes
1. Open the relevant HTML file
2. Make your changes
3. Save the file
4. Refresh browser to see changes
5. Test on multiple screen sizes

#### CSS Changes
1. Open `css/styles.css` for component styles
2. Open `css/responsive.css` for responsive changes
3. Make your changes
4. Save the file
5. Refresh browser to see changes
6. Test at different breakpoints

#### JavaScript Changes
1. Open the relevant JS file (`main.js`, `tabs.js`, or `contact.js`)
2. Make your changes
3. Save the file
4. Refresh browser
5. Test the functionality
6. Check browser console for errors

### Code Style Guidelines

#### HTML
- Use semantic HTML5 elements
- Maintain consistent indentation (4 spaces)
- Include alt text for all images
- Use lowercase for tag names and attributes
- Quote attribute values

#### CSS
- Use CSS custom properties (variables) for colors and spacing
- Follow BEM-inspired naming convention
- Group related styles together
- Add comments for complex styles
- Use consistent indentation (4 spaces)

#### JavaScript
- Use modern ES6+ syntax
- Add JSDoc comments for functions
- Use const/let instead of var
- Handle errors gracefully
- Add console.log for debugging (remove in production)

## Common Tasks

### Adding a New Page

1. **Create HTML File**
   ```bash
   # Copy an existing page as template
   cp about.html new-page.html
   ```

2. **Update Content**
   - Change page title in `<title>` tag
   - Update meta description
   - Replace main content
   - Keep header and footer consistent

3. **Add Navigation Link**
   - Open all HTML files
   - Add link to `.nav-menu` in header
   - Add link to `.footer-links` in footer

4. **Test Navigation**
   - Verify link works from all pages
   - Check mobile navigation

### Modifying Colors

1. **Open CSS Variables**
   ```css
   /* In css/styles.css */
   :root {
       --primary-color: #1a1a2e;
       --secondary-color: #16213e;
       --accent-color: #e94560;
       /* ... */
   }
   ```

2. **Update Values**
   - Change color codes as needed
   - Save file
   - Refresh browser to see changes

### Adding New Components

1. **Create CSS Styles**
   ```css
   /* In css/styles.css */
   .new-component {
       /* styles here */
   }
   ```

2. **Add HTML Markup**
   ```html
   <div class="new-component">
       <!-- content -->
   </div>
   ```

3. **Add Responsive Styles**
   ```css
   /* In css/responsive.css */
   @media (max-width: 768px) {
       .new-component {
           /* mobile styles */
       }
   }
   ```

### Adding JavaScript Functionality

1. **Create Function**
   ```javascript
   function newFunction() {
       // code here
   }
   ```

2. **Add Event Listener**
   ```javascript
   document.addEventListener('DOMContentLoaded', function() {
       // initialization code
   });
   ```

3. **Test Functionality**
   - Open browser console
   - Check for errors
   - Test user interactions

## Testing Guidelines

### Cross-Browser Testing
Test on:
- Chrome (Desktop & Mobile)
- Firefox (Desktop & Mobile)
- Safari (Desktop & iOS)
- Edge (Desktop)

### Responsive Testing
Test at breakpoints:
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

### Functionality Testing
- Navigation menu (desktop & mobile)
- Tab switching (programs page)
- Contact form validation
- Smooth scrolling
- Animations and transitions
- Image loading

### Performance Testing
- Use Lighthouse in Chrome DevTools
- Target: 90+ Performance score
- Check image sizes
- Minimize render-blocking resources

## Debugging

### Common Issues

#### Styles Not Applying
1. Check file path in `<link>` tag
2. Clear browser cache
3. Check CSS syntax errors
4. Verify selector specificity

#### JavaScript Not Working
1. Check file path in `<script>` tag
2. Open browser console (F12)
3. Look for error messages
4. Check if DOM is loaded

#### Images Not Loading
1. Check image URL
2. Verify image exists on server
3. Check network tab in DevTools
4. Consider using local images

#### Mobile Menu Not Working
1. Check if `main.js` is loaded
2. Verify mobile toggle button exists
3. Check CSS for mobile styles
4. Test on actual mobile device

### Browser DevTools

#### Chrome DevTools
- **Elements**: Inspect HTML and CSS
- **Console**: View JavaScript errors
- **Network**: Monitor resource loading
- **Lighthouse**: Performance auditing
- **Device Mode**: Test responsive design

#### Firefox DevTools
- **Inspector**: HTML and CSS inspection
- **Console**: JavaScript debugging
- **Network**: Network analysis
- **Responsive Design Mode**: Mobile testing

## Best Practices

### Performance
- Optimize images (use WebP format when possible)
- Minimize HTTP requests
- Use CSS animations instead of JavaScript when possible
- Lazy load images below the fold
- Enable browser caching

### Accessibility
- Use semantic HTML
- Add ARIA labels where needed
- Ensure keyboard navigation works
- Provide alt text for images
- Maintain color contrast ratios

### Security
- Validate all form inputs
- Sanitize user-generated content
- Use HTTPS in production
- Keep dependencies updated
- Implement CSP headers (if using server)

### SEO
- Use descriptive meta tags
- Create semantic URL structure
- Optimize images with alt text
- Use heading hierarchy properly
- Add structured data markup

## Deployment

### Preparation Checklist
- [ ] Test all functionality
- [ ] Check all links work
- [ ] Verify responsive design
- [ ] Optimize images
- [ ] Minify CSS and JS (optional)
- [ ] Update contact information
- [ ] Test contact form
- [ ] Check for console errors

### Deployment Options

#### Static Hosting (Recommended)
- **Netlify**: Drag and drop deployment
- **Vercel**: Git-based deployment
- **GitHub Pages**: Free hosting from repository
- **AWS S3**: Static website hosting

#### Traditional Hosting
- **cPanel**: Upload via file manager
- **FTP**: Use FileZilla or similar
- **SSH**: Use scp or rsync

### Post-Deployment
- [ ] Test live site
- [ ] Check SSL certificate
- [ ] Verify all links work
- [ ] Test contact form
- [ ] Monitor performance
- [ ] Set up analytics (optional)

## Maintenance

### Regular Tasks
- Update content as needed
- Check for broken links monthly
- Monitor site performance
- Update dependencies (if added)
- Backup files regularly

### Content Updates
- Update program information
- Refresh images periodically
- Update contact details
- Add news/blog posts (if applicable)
- Review and update legal pages

## Troubleshooting

### Site Not Loading
1. Check internet connection
2. Verify URL is correct
3. Clear browser cache
4. Try different browser
5. Check server status

### Styles Look Wrong
1. Clear browser cache
2. Check CSS file paths
3. Validate CSS syntax
4. Check for CSS conflicts
5. Test in different browser

### JavaScript Errors
1. Open browser console
2. Read error messages
3. Check syntax
4. Verify file paths
5. Test in different browser

## Resources

### Documentation
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)

### Tools
- [Can I Use](https://caniuse.com/) - Browser compatibility
- [Color Hunt](https://colorhunt.co/) - Color palettes
- [Coolors](https://coolors.co/) - Color generator
- [TinyPNG](https://tinypng.com/) - Image optimization

### Community
- [Stack Overflow](https://stackoverflow.com/)
- [Reddit - r/webdev](https://reddit.com/r/webdev)
- [Dev.to](https://dev.to/)

## Support

For project-specific questions:
- Review existing documentation
- Check the code comments
- Examine similar implementations in the codebase
- Contact the development team

## Changelog

Maintain a record of significant changes in the project's `report.md` file.
