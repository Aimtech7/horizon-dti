# Deployment Guide

This guide provides comprehensive instructions for deploying the Horizon Deutsch Training Institute website to various hosting platforms.

## Pre-Deployment Checklist

### Code Review
- [ ] All features tested and working
- [ ] No console errors
- [ ] All links are functional
- [ ] Forms validate correctly
- [ ] Responsive design tested on multiple devices
- [ ] Cross-browser compatibility verified

### Content Review
- [ ] All text content is final
- [ ] Contact information is current
- [ ] Images are optimized
- [ ] Legal pages are updated (privacy, terms, cookies)
- [ ] Meta tags are complete

### Performance
- [ ] Images compressed and optimized
- [ ] CSS and JS minified (optional)
- [ ] No unused CSS/JS
- [ ] Lighthouse score 90+ (Performance)
- [ ] Page load time under 3 seconds

### Security
- [ ] No sensitive data in code
- [ ] Forms have proper validation
- [ ] HTTPS ready
- [ ] Security headers configured (if using server)

## Deployment Options

### Option 1: Static Hosting (Recommended)

#### Netlify

**Steps:**
1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop the `reconstructed` folder to Netlify dashboard
3. Wait for deployment to complete
4. Update site settings (domain, HTTPS)

**Advantages:**
- Free SSL certificate
- Automatic deployments
- CDN included
- Easy rollback

**Configuration:**
```toml
# netlify.toml (optional)
[build]
  publish = "reconstructed"
  
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### Vercel

**Steps:**
1. Create account at [vercel.com](https://vercel.com)
2. Install Vercel CLI: `npm i -g vercel`
3. Navigate to project directory
4. Run: `vercel`
5. Follow prompts

**Advantages:**
- Free SSL certificate
- Automatic deployments
- Edge network
- Preview deployments

#### GitHub Pages

**Steps:**
1. Create GitHub repository
2. Push code to repository
3. Go to repository Settings → Pages
4. Select branch (usually `main`)
5. Select folder (`/reconstructed`)
6. Save and wait for deployment

**URL Format**: `https://username.github.io/repository-name/`

**Advantages:**
- Free hosting
- Integrated with GitHub
- Automatic deployments on push
- Jekyll support (optional)

### Option 2: Traditional Web Hosting

#### cPanel Hosting

**Steps:**
1. Log in to cPanel
2. Open File Manager
3. Navigate to `public_html`
4. Upload all files from `reconstructed` folder
5. Set permissions (644 for files, 755 for directories)
6. Test website

**File Structure:**
```
public_html/
├── index.html
├── about.html
├── programs.html
├── css/
│   ├── styles.css
│   └── responsive.css
├── js/
│   ├── main.js
│   ├── tabs.js
│   └── contact.js
```

#### FTP Deployment

**Steps:**
1. Get FTP credentials from hosting provider
2. Use FileZilla or similar FTP client
3. Connect to server
4. Navigate to public directory
5. Upload all files from `reconstructed` folder
6. Verify file integrity

**FileZilla Settings:**
- Host: FTP hostname
- Username: FTP username
- Password: FTP password
- Port: 21 (or 22 for SFTP)

#### SSH Deployment

**Steps:**
1. Connect via SSH
2. Navigate to web directory
3. Upload files using scp or rsync

```bash
# Using scp
scp -r reconstructed/* user@server:/path/to/public_html/

# Using rsync
rsync -avz reconstructed/ user@server:/path/to/public_html/
```

### Option 3: Cloud Storage

#### AWS S3

**Steps:**
1. Create AWS account
2. Create S3 bucket
3. Enable static website hosting
4. Upload files to bucket
5. Set bucket policy for public access
6. Configure CloudFront (optional)
7. Set up custom domain (optional)

**Bucket Policy:**
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::bucket-name/*"
        }
    ]
}
```

#### Google Cloud Storage

**Steps:**
1. Create Google Cloud project
2. Create Cloud Storage bucket
3. Upload files
4. Make bucket public
5. Set up load balancer (optional)
6. Configure custom domain (optional)

## Post-Deployment Tasks

### Verification

1. **Test Live Site**
   - Navigate to deployed URL
   - Test all pages load
   - Check all links work
   - Test contact form
   - Verify responsive design

2. **Check SSL Certificate**
   - Ensure HTTPS works
   - Check certificate validity
   - Test SSL configuration

3. **Performance Test**
   - Run Lighthouse audit
   - Check page load times
   - Verify Core Web Vitals
   - Test on mobile devices

4. **SEO Check**
   - Verify meta tags
   - Check robots.txt
   - Test sitemap.xml (if added)
   - Validate structured data

### Configuration

#### Domain Setup

**DNS Settings:**
```
Type: A Record
Name: @
Value: Server IP address

Type: CNAME
Name: www
Value: @
```

**Subdomain (if needed):**
```
Type: CNAME
Name: subdomain
Value: main-domain
```

#### Email Configuration

If using contact form with email:
- Configure SMTP settings
- Set up email forwarding
- Test email delivery
- Configure spam filters

#### Analytics (Optional)

**Google Analytics:**
```html
<!-- Add to head section -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Maintenance

### Regular Tasks

#### Weekly
- Check site uptime
- Monitor error logs
- Review analytics data
- Test contact form

#### Monthly
- Check for broken links
- Review performance metrics
- Update content as needed
- Backup files

#### Quarterly
- Security audit
- Dependency updates (if added)
- Performance optimization
- Accessibility review

### Backups

#### Manual Backup
```bash
# Create backup
tar -czf backup-$(date +%Y%m%d).tar.gz reconstructed/

# Restore
tar -xzf backup-20240101.tar.gz
```

#### Automated Backup
- Set up cron job for regular backups
- Use hosting provider's backup feature
- Store backups offsite

### Updates

#### Content Updates
1. Edit HTML files
2. Test changes locally
3. Upload to server
4. Verify live changes

#### Code Updates
1. Make changes in development
2. Test thoroughly
3. Deploy to staging (if available)
4. Deploy to production
5. Monitor for issues

## Troubleshooting

### Common Issues

#### Site Not Loading
1. Check server status
2. Verify DNS propagation
3. Check file permissions
4. Review error logs
5. Test from different network

#### Styles Not Loading
1. Verify CSS file paths
2. Check file permissions
3. Clear browser cache
4. Test in different browser
5. Check for server errors

#### Images Not Loading
1. Verify image URLs
2. Check image file permissions
3. Test image accessibility
4. Review server logs
5. Consider hotlinking protection

#### Form Not Working
1. Check form action URL
2. Verify form method
3. Test form validation
4. Review server logs
5. Check email configuration

#### HTTPS Issues
1. Verify SSL certificate
2. Check certificate expiration
3. Review SSL configuration
4. Test SSL installation
5. Check mixed content

### Error Logs

#### cPanel
- Location: `/home/user/public_html/error_log`
- Access via File Manager or FTP

#### Apache
- Location: `/var/log/apache2/error.log`
- Access via SSH or control panel

#### Nginx
- Location: `/var/log/nginx/error.log`
- Access via SSH or control panel

## Performance Optimization

### Image Optimization

**Tools:**
- TinyPNG: https://tinypng.com/
- ImageOptim: https://imageoptim.com/
- Squoosh: https://squoosh.app/

**Best Practices:**
- Use WebP format when possible
- Compress images before upload
- Use appropriate dimensions
- Lazy load images below fold

### Code Optimization

**CSS Minification:**
```bash
# Using cssnano
npx cssnano css/styles.css css/styles.min.css
```

**JavaScript Minification:**
```bash
# Using terser
npx terser js/main.js -o js/main.min.js
```

### Caching

**Browser Caching:**
```apache
# In .htaccess
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>
```

## Security

### HTTPS/SSL

**Let's Encrypt (Free SSL):**
```bash
# On Ubuntu/Debian
sudo apt-get install certbot python3-certbot-apache
sudo certbot --apache
```

**SSL Configuration:**
- Force HTTPS redirect
- Use strong ciphers
- Enable HSTS
- Keep certificate updated

### Security Headers

**In .htaccess:**
```apache
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
  Header set Content-Security-Policy "default-src 'self'"
</IfModule>
```

### Firewall

**Basic Rules:**
- Block unnecessary ports
- Limit rate limiting
- Implement IP whitelisting (if needed)
- Enable DDoS protection

## Monitoring

### Uptime Monitoring

**Tools:**
- UptimeRobot: https://uptimerobot.com/
- Pingdom: https://www.pingdom.com/
- StatusCake: https://www.statuscake.com/

### Performance Monitoring

**Tools:**
- Google PageSpeed Insights
- GTmetrix: https://gtmetrix.com/
- WebPageTest: https://www.webpagetest.org/

### Error Monitoring

**Tools:**
- Sentry: https://sentry.io/
- Rollbar: https://rollbar.com/
- Loggly: https://www.loggly.com/

## Scaling

### CDN Integration

**Cloudflare:**
1. Create Cloudflare account
2. Add website
3. Update nameservers
4. Configure caching rules
5. Enable auto-minify

### Load Balancing

For high-traffic sites:
- Use multiple servers
- Implement load balancer
- Configure health checks
- Set up failover

## Resources

### Documentation
- [Netlify Docs](https://docs.netlify.com/)
- [Vercel Docs](https://vercel.com/docs)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [AWS S3 Docs](https://docs.aws.amazon.com/s3/)

### Tools
- [FileZilla](https://filezilla-project.org/)
- [PuTTY](https://www.putty.org/)
- [SSL Labs](https://www.ssllabs.com/ssltest/)
- [GTmetrix](https://gtmetrix.com/)

### Support
- Hosting provider support
- Community forums
- Stack Overflow
- Developer documentation
