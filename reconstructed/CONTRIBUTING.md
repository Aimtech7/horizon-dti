# Contributing Guide

This guide provides information for developers who want to contribute to the Horizon Deutsch Training Institute website reconstruction project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Testing Guidelines](#testing-guidelines)
- [Submitting Changes](#submitting-changes)
- [Review Process](#review-process)

## Code of Conduct

### Our Pledge

We pledge to make participation in our project a harassment-free experience for everyone, regardless of level of experience, gender, gender identity and expression, sexual orientation, disability, personal appearance, body size, race, ethnicity, age, religion, or nationality.

### Our Standards

**Positive behavior includes:**
- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

**Unacceptable behavior includes:**
- The use of sexualized language or imagery
- Trolling, insulting, or derogatory comments
- Personal or political attacks
- Public or private harassment
- Publishing others' private information

## Getting Started

### Prerequisites

Before contributing, ensure you have:

- A text editor (VS Code recommended)
- A modern web browser
- Basic understanding of HTML, CSS, and JavaScript
- Git (if using version control)

### Setup

1. **Fork the repository** (if using Git)
   ```bash
   git clone <your-fork-url>
   cd website_backup/reconstructed
   ```

2. **Create a development branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Start local development**
   - Open `index.html` in your browser
   - Or use a local server (see Development Guide)

## Development Workflow

### 1. Identify the Issue

Before making changes:
- Check existing issues (if using issue tracker)
- Discuss the change with the team
- Ensure the change aligns with project goals

### 2. Make Your Changes

Follow the coding standards outlined below.

### 3. Test Your Changes

- Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- Test responsive design (mobile, tablet, desktop)
- Test all affected functionality
- Check for console errors

### 4. Document Your Changes

- Update relevant documentation
- Add comments to complex code
- Update the change report (`report.md`)

### 5. Submit Your Changes

- Create a pull request (if using Git)
- Describe your changes clearly
- Reference related issues

## Coding Standards

### HTML Standards

#### General Guidelines
- Use semantic HTML5 elements
- Maintain consistent indentation (4 spaces)
- Use lowercase for tag names and attributes
- Quote attribute values
- Include alt text for all images

#### Example
```html
<!-- Good -->
<nav class="main-navigation">
    <ul class="nav-menu">
        <li class="nav-item">
            <a href="about.html" class="nav-link">About Us</a>
        </li>
    </ul>
</nav>

<!-- Avoid -->
<NAV class="MainNavigation">
    <UL class=NavMenu>
        <LI><A HREF=about.html>About Us</A></LI>
    </UL>
</NAV>
```

#### Accessibility
- Use semantic elements
- Include ARIA labels where needed
- Ensure keyboard navigation works
- Maintain heading hierarchy
- Provide alt text for images

### CSS Standards

#### General Guidelines
- Use CSS custom properties (variables)
- Follow BEM-inspired naming convention
- Group related styles together
- Add comments for complex styles
- Use consistent indentation (4 spaces)

#### Example
```css
/* Good */
.program-card {
    background-color: var(--white);
    border-radius: 8px;
    padding: 20px;
    transition: var(--transition);
}

.program-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-hover);
}

/* Avoid */
.programCard {
    background: #fff;
    border-radius: 8px;
    padding: 20px;
}
```

#### Organization
- Reset and base styles first
- Component styles next
- Responsive styles in separate file
- Utility classes at the end

#### Naming Convention
```css
.block { }
.block__element { }
.block--modifier { }
```

### JavaScript Standards

#### General Guidelines
- Use modern ES6+ syntax
- Use const/let instead of var
- Add JSDoc comments for functions
- Handle errors gracefully
- Use consistent indentation (4 spaces)

#### Example
```javascript
// Good
/**
 * Validates form inputs
 * @param {string} formId - The ID of the form to validate
 * @returns {boolean} - True if form is valid
 */
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;
    
    // Validation logic
    return isValid;
}

// Avoid
function validateForm(formId) {
    var form = document.getElementById(formId);
    // Validation logic without comments
}
```

#### Best Practices
- Use arrow functions for callbacks
- Destructure objects and arrays when appropriate
- Use template literals for string concatenation
- Avoid global variables
- Remove console.log in production

## Testing Guidelines

### Manual Testing Checklist

#### Functionality
- [ ] All links work correctly
- [ ] Forms validate properly
- [ ] Mobile menu opens/closes
- [ ] Smooth scroll works
- [ ] Animations trigger correctly
- [ ] Contact form submits

#### Responsive Design
- [ ] Test on mobile (320px - 767px)
- [ ] Test on tablet (768px - 1023px)
- [ ] Test on desktop (1024px+)
- [ ] Test in landscape mode
- [ ] Test on actual devices

#### Cross-Browser
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers

#### Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader friendly
- [ ] Color contrast sufficient
- [ ] Focus indicators visible
- [ ] Alt text present

### Performance Testing

- Run Lighthouse audit
- Target: 90+ Performance score
- Check page load time
- Optimize images
- Minimize render-blocking resources

## Submitting Changes

### Change Report

All changes must be documented in `report.md`:

```markdown
### [YYYY-MM-DD HH:MM:SS UTC] - Change Description
- **Type**: File Creation/Modification/Deletion
- **File(s)**: Affected files with relative paths
- **Description**: Detailed description of the change
- **Impact**: Assessment of the change's impact
```

### Pull Request Guidelines

If using Git:

1. **Title**: Clear and descriptive
   - "Fix: Mobile menu not closing on link click"
   - "Feature: Add dark mode toggle"
   - "Update: Improve contact form validation"

2. **Description**: Include:
   - What was changed and why
   - How it was tested
   - Any breaking changes
   - Related issue numbers

3. **Checklist**:
   - [ ] Code follows project standards
   - [ ] Self-reviewed the code
   - [ ] Commented complex code
   - [ ] Updated documentation
   - [ ] No console errors
   - [ ] Tested on multiple browsers
   - [ ] Updated change report

### Direct File Changes

If not using Git:

1. **Backup original files**
2. **Make changes**
3. **Test thoroughly**
4. **Update documentation**
5. **Update change report**

## Review Process

### Review Criteria

Changes will be reviewed based on:

1. **Code Quality**
   - Follows coding standards
   - Well-documented
   - No unnecessary complexity
   - Efficient and performant

2. **Functionality**
   - Works as intended
   - No regressions
   - Properly tested
   - Edge cases handled

3. **User Experience**
   - Improves user experience
   - Maintains consistency
   - Accessible to all users
   - Responsive design maintained

4. **Documentation**
   - Change report updated
   - Code comments added
   - Documentation updated
   - Clear commit messages

### Feedback Process

1. **Review**: Changes are reviewed by maintainers
2. **Feedback**: Constructive feedback provided
3. **Revision**: Make requested changes
4. **Approval**: Changes approved for merge

### Common Feedback

- "Please add more comments"
- "Consider using a different approach"
- "Please test on mobile devices"
- "Update the change report"
- "Add accessibility attributes"

## Types of Contributions

### Bug Fixes

**Process:**
1. Describe the bug clearly
2. Identify the root cause
3. Implement minimal fix
4. Add tests if possible
5. Document the fix

**Example:**
```markdown
### [2024-01-15 10:30:00 UTC] - Fix Mobile Menu Z-Index
- **Type**: Bug Fix
- **File(s)**: css/responsive.css
- **Description**: Fixed mobile menu appearing behind content by increasing z-index
- **Impact**: Low - Fixes mobile navigation issue
```

### Feature Additions

**Process:**
1. Propose the feature
2. Get approval
3. Implement the feature
4. Test thoroughly
5. Document the feature

**Example:**
```markdown
### [2024-01-15 14:00:00 UTC] - Add Dark Mode Toggle
- **Type**: Feature Addition
- **File(s)**: index.html, css/styles.css, js/main.js
- **Description**: Added dark mode toggle with localStorage persistence
- **Impact**: Medium - New feature requiring user education
```

### Documentation

**Process:**
1. Identify documentation gaps
2. Write clear documentation
3. Include examples
4. Get review
5. Update as needed

**Example:**
```markdown
### [2024-01-15 16:00:00 UTC] - Add Deployment Guide
- **Type**: Documentation
- **File(s)**: DEPLOYMENT_GUIDE.md
- **Description**: Created comprehensive deployment guide for various hosting platforms
- **Impact**: Low - Documentation only
```

### Refactoring

**Process:**
1. Identify code to improve
2. Ensure tests pass
3. Make improvements
4. Verify no regressions
5. Document changes

**Example:**
```markdown
### [2024-01-15 18:00:00 UTC] - Refactor CSS Variables
- **Type**: Refactoring
- **File(s)**: css/styles.css
- **Description**: Consolidated duplicate CSS variables and improved naming convention
- **Impact**: Low - Internal improvement, no user-facing changes
```

## Questions?

### Getting Help

- Review existing documentation
- Check similar implementations
- Ask questions in appropriate channels
- Provide context when asking

### Communication

- Be clear and concise
- Provide relevant code snippets
- Include error messages
- Describe steps to reproduce

## Recognition

Contributors will be recognized for their contributions through:
- Attribution in change reports
- Mention in release notes (if applicable)
- Recognition in project documentation

Thank you for contributing to the Horizon Deutsch Training Institute website!
