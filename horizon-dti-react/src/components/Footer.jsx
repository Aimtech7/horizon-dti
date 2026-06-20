import { Link } from 'react-router-dom';
import Newsletter from './Newsletter';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <Newsletter />
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-branding">
            <Link to="/" className="footer-logo-link">
              <img
                src="https://www.horizon-dti.com/wp-content/uploads/2026/02/Horizon-DTI-logo.jpg"
                alt="Horizon Deutsch Training Institute"
                className="footer-logo"
              />
            </Link>
          </div>
          <div className="footer-content">
            <div className="footer-section">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/programs">Programs</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/success-stories">Success Stories</Link></li>
                <li><Link to="/resources">Resources</Link></li>
                <li><Link to="/goethe-exam">Goethe Exam</Link></li>
                <li><Link to="/admissions">Admissions</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/admissions" className="admission-portal-link">Admission Portal</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-title">Programs</h4>
              <ul className="footer-links">
                <li><Link to="/programs">A1 - Beginner</Link></li>
                <li><Link to="/programs">A2 - Elementary</Link></li>
                <li><Link to="/programs">B1 - Intermediate</Link></li>
                <li><Link to="/programs">B2 - Upper Intermediate</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-title">Contact Info</h4>
              <ul className="footer-contact">
                <li><strong>Main Campus:</strong> Ambwere House 5th Floor, Kitale</li>
                <li><strong>Phone:</strong> +254 119 485 021</li>
                <li><strong>Email:</strong> admissions@horizon-dti.com</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Horizon Deutsch Training Institute. All rights reserved.</p>
            <div className="footer-legal">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-of-service">Terms of Service</Link>
              <Link to="/cookie-policy">Cookie Policy</Link>
            </div>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <span>Facebook</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <span>Twitter</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <span>Instagram</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
