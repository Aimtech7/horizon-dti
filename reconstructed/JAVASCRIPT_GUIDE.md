# JavaScript Architecture Guide

This document provides detailed information about the JavaScript architecture, functionality, and conventions used in the Horizon Deutsch Training Institute website.

## Overview

The JavaScript implementation follows a modular, vanilla JavaScript approach with no external frameworks. The code is split across three main files based on functionality:

- **`main.js`**: Core site functionality (navigation, animations, utilities)
- **`tabs.js`**: Tab functionality for the programs page
- **`contact.js`**: Contact form handling and validation

## File Structure

### main.js (141 lines)

**Purpose**: Core site-wide functionality

**Key Features**:
- Mobile menu toggle with animation
- Smooth scroll for anchor links
- Header scroll effects
- Scroll-based animations (Intersection Observer)
- Partner carousel interaction
- Form validation utilities
- Email and phone validation functions

### tabs.js

**Purpose**: Tab switching functionality for programs page

**Key Features**:
- Tab activation/deactivation
- Content display/hide
- Active state management
- Keyboard navigation support

### contact.js

**Purpose**: Contact form handling

**Key Features**:
- Form submission handling
- Input validation
- Success/error messaging
- Form reset functionality

## Architecture Patterns

### Module Pattern

Each JavaScript file is self-contained to avoid global namespace pollution:

```javascript
// File-scoped code
document.addEventListener('DOMContentLoaded', function() {
    // Initialization code here
});

// Exported functions (if needed)
function utilityFunction() {
    // Code
}
```

### Event Delegation

Where appropriate, event delegation is used for better performance:

```javascript
document.addEventListener('click', function(event) {
    if (event.target.matches('.nav-item a')) {
        // Handle navigation
    }
});
```

### Initialization Pattern

All code is wrapped in DOMContentLoaded to ensure the DOM is ready:

```javascript
document.addEventListener('DOMContentLoaded', function() {
    // All initialization code
});
```

## Function Documentation

### main.js Functions

#### Mobile Menu Toggle

```javascript
// Location: Lines 2-45
// Purpose: Toggle mobile navigation menu with hamburger animation
```

**Functionality**:
- Toggles `.active` class on navigation
- Animates hamburger menu icon
- Closes menu when clicking on links
- Closes menu when clicking outside

**Event Listeners**:
- `click` on mobile toggle button
- `click` on navigation links
- `click` on document (outside menu)

**Classes Used**:
- `.active` - Toggles menu visibility
- `.mobile-menu-toggle` - Hamburger button
- `.main-navigation` - Navigation container

#### Smooth Scroll

```javascript
// Location: Lines 47-59
// Purpose: Smooth scroll for anchor links
```

**Functionality**:
- Intercepts anchor link clicks
- Scrolls smoothly to target element
- Uses native scrollIntoView API

**Selector**: `a[href^="#"]`

#### Header Scroll Effect

```javascript
// Location: Lines 61-71
// Purpose: Add shadow to header on scroll
```

**Functionality**:
- Increases shadow intensity when scrolled
- Reduces shadow when at top
- Uses scroll event listener

**Threshold**: 50px scroll position

#### Scroll Animations

```javascript
// Location: Lines 73-95
// Purpose: Animate elements on scroll using Intersection Observer
```

**Functionality**:
- Observes program cards and feature items
- Triggers fade-in animation when visible
- Uses Intersection Observer API for performance

**Observer Options**:
- `threshold: 0.1` - Trigger when 10% visible
- `rootMargin: '0px 0px -50px 0px'` - Offset from bottom

**Animated Elements**:
- `.program-card`
- `.feature-item`

**Animation**:
- Opacity: 0 → 1
- Transform: translateY(30px) → 0

#### Partner Carousel Pause

```javascript
// Location: Lines 97-107
// Purpose: Pause carousel animation on hover
```

**Functionality**:
- Pauses CSS animation on mouse enter
- Resumes animation on mouse leave

**Selector**: `.carousel-track`

#### Form Validation

```javascript
// Location: Lines 110-128
// Purpose: Validate required form fields
```

**Parameters**:
- `formId` - ID of the form to validate

**Returns**: Boolean (valid/invalid)

**Validation Rules**:
- Checks required fields are not empty
- Highlights invalid fields with red border
- Resets border for valid fields

#### Email Validation

```javascript
// Location: Lines 130-134
// Purpose: Validate email format
```

**Parameters**:
- `email` - Email string to validate

**Returns**: Boolean (valid/invalid)

**Regex**: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`

#### Phone Validation

```javascript
// Location: Lines 136-140
// Purpose: Validate Kenya phone format
```

**Parameters**:
- `phone` - Phone string to validate

**Returns**: Boolean (valid/invalid)

**Regex**: `/^(\+254|0)[1-9]\d{8}$/`

**Accepted Formats**:
- +254XXXXXXXXX
- 0XXXXXXXXX

### tabs.js Functions

#### Tab Switching

```javascript
// Purpose: Switch between program level tabs
```

**Functionality**:
- Removes active class from all tabs
- Adds active class to clicked tab
- Hides all tab content
- Shows selected tab content

**Classes Used**:
- `.tab-button` - Tab buttons
- `.tab-content` - Tab content panels
- `.active` - Active state

### contact.js Functions

#### Form Submission

```javascript
// Purpose: Handle contact form submission
```

**Functionality**:
- Validates form inputs
- Prevents default submission
- Shows loading state
- Submits form (AJAX if backend available)
- Displays success/error message
- Resets form on success

## Event Handling

### Event Listeners Summary

| Event | Target | Purpose | Location |
|-------|--------|---------|----------|
| DOMContentLoaded | document | Initialize all functionality | main.js:2 |
| click | .mobile-menu-toggle | Toggle mobile menu | main.js:7 |
| click | .nav-item a | Close mobile menu | main.js:25 |
| click | document | Close menu on outside click | main.js:36 |
| click | a[href^="#"] | Smooth scroll | main.js:48 |
| scroll | window | Header shadow effect | main.js:64 |
| mouseenter | .carousel-track | Pause carousel | main.js:100 |
| mouseleave | .carousel-track | Resume carousel | main.js:104 |

### Event Best Practices

1. **Passive Event Listeners**: Use for scroll/touch events
```javascript
window.addEventListener('scroll', handler, { passive: true });
```

2. **Event Delegation**: Use for dynamic content
```javascript
document.addEventListener('click', function(e) {
    if (e.target.matches('.dynamic-element')) {
        // Handle
    }
});
```

3. **Cleanup**: Remove listeners when no longer needed
```javascript
element.removeEventListener('event', handler);
```

## DOM Manipulation

### Common Patterns

#### Element Selection
```javascript
// Single element
const element = document.querySelector('.selector');

// Multiple elements
const elements = document.querySelectorAll('.selector');
```

#### Class Manipulation
```javascript
// Add class
element.classList.add('class-name');

// Remove class
element.classList.remove('class-name');

// Toggle class
element.classList.toggle('class-name');

// Check class
if (element.classList.contains('class-name')) {
    // Code
}
```

#### Style Manipulation
```javascript
// Set style
element.style.property = 'value';

// Get style
const value = element.style.property;
```

#### Content Manipulation
```javascript
// Set text
element.textContent = 'text';

// Set HTML
element.innerHTML = '<html>';

// Get text
const text = element.textContent;
```

## Performance Considerations

### Intersection Observer

Used for scroll animations instead of scroll events for better performance:

```javascript
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animate
        }
    });
}, options);
```

**Benefits**:
- No scroll event listeners
- Browser-optimized
- Better battery life on mobile

### Event Throttling/Debouncing

Not currently implemented but recommended for resize/scroll events:

```javascript
// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Usage
window.addEventListener('resize', debounce(handler, 250));
```

### Passive Event Listeners

Use for scroll/touch events to improve scrolling performance:

```javascript
window.addEventListener('scroll', handler, { passive: true });
```

## Browser Compatibility

### Target Browsers
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Modern Features Used
- Arrow functions
- Template literals
- Destructuring
- Spread operator
- Intersection Observer API
- scrollIntoView API

### Polyfills
None required - all features supported by target browsers.

## Error Handling

### Current Implementation

Basic error checking in validation functions:

```javascript
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;
    // ...
}
```

### Recommended Improvements

```javascript
// Try-catch for critical operations
try {
    // Code that might fail
} catch (error) {
    console.error('Error:', error);
    // Handle error gracefully
}

// Error boundaries for user feedback
function safeExecute(func, fallback) {
    try {
        return func();
    } catch (error) {
        console.error(error);
        return fallback;
    }
}
```

## Debugging

### Console Logging

Used for development debugging:

```javascript
console.log('Debug message');
console.error('Error message');
console.warn('Warning message');
```

### Browser DevTools

#### Chrome DevTools
- **Sources Tab**: Set breakpoints, step through code
- **Console**: View errors and log messages
- **Network**: Monitor AJAX requests

#### Firefox DevTools
- **Debugger**: Similar to Chrome Sources
- **Console**: Error logging
- **Network**: Request monitoring

### Common Issues

#### Function Not Defined
- Check file is loaded
- Check function scope
- Verify syntax

#### Event Not Firing
- Check element exists
- Verify event listener is attached
- Check event bubbling

#### Selector Not Found
- Verify selector syntax
- Check element exists in DOM
- Wait for DOMContentLoaded

## Testing

### Manual Testing Checklist

- [ ] Mobile menu opens/closes
- [ ] Mobile menu closes on link click
- [ ] Mobile menu closes on outside click
- [ ] Smooth scroll works for anchor links
- [ ] Header shadow appears on scroll
- [ ] Elements animate on scroll
- [ ] Carousel pauses on hover
- [ ] Form validation works
- [ ] Email validation works
- [ ] Phone validation works
- [ ] Tab switching works (programs page)
- [ ] Contact form submits correctly

### Automated Testing (Future)

Consider adding:
- Unit tests for utility functions
- Integration tests for user flows
- E2E tests with Playwright or Cypress

## Security Considerations

### Current Security
- Input validation on forms
- No eval() usage
- No innerHTML with user input

### Recommended Improvements
- Sanitize all user input
- Implement CSRF protection
- Use Content Security Policy
- Validate and sanitize on server-side

## Accessibility

### Current Implementation
- Keyboard navigation support
- ARIA labels on interactive elements
- Focus management

### Recommended Improvements
- Add focus indicators
- Implement skip links
- Ensure all interactions are keyboard accessible
- Test with screen readers

## Code Style

### Conventions
- Use camelCase for variables and functions
- Use PascalCase for constructors
- Use UPPER_CASE for constants
- 4-space indentation
- Semicolons at end of statements

### Example
```javascript
// Good
const userName = 'John';
function getUserData() {
    // Code
}

// Avoid
const user_name = 'John';
function get_user_data() {
    // Code
}
```

## Adding New Functionality

### Steps

1. **Choose appropriate file** (main.js, tabs.js, or contact.js)
2. **Add function following existing patterns**
3. **Initialize in DOMContentLoaded**
4. **Test functionality**
5. **Check for errors in console**
6. **Test on multiple browsers**

### Example: Adding New Animation

```javascript
// In main.js
document.addEventListener('DOMContentLoaded', function() {
    // Existing code...
    
    // New animation
    const newObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.2 });
    
    document.querySelectorAll('.new-element').forEach(el => {
        newObserver.observe(el);
    });
});
```

## Resources

### Documentation
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- [Can I Use](https://caniuse.com/)

### Tools
- [JS Beautifier](https://beautifier.io/)
- [JS Minifier](https://jsmin.com/)
- [ESLint](https://eslint.org/)

### Learning
- [JavaScript30](https://javascript30.com/)
- [Frontend Masters](https://frontendmasters.com/)
- [Codecademy JavaScript Course](https://www.codecademy.com/learn/introduction-to-javascript)
