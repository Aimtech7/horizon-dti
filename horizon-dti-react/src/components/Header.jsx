import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Search from './Search';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/programs', label: 'Programs' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/success-stories', label: 'Success Stories' },
    { path: '/career-pathways', label: 'Career Pathways' },
    { path: '/virtual-learning', label: 'Virtual Learning' },
    { path: '/admissions', label: 'Admissions' },
    { path: '/contact', label: 'Contact Us' },
  ];

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="site-branding">
          <Link to="/" className="logo-link">
            <img
              src="https://www.horizon-dti.com/wp-content/uploads/2026/02/Horizon-DTI-logo.jpg"
              alt="Horizon Deutsch Training Institute"
              className="logo"
            />
          </Link>
        </div>
        <nav className={`main-navigation ${mobileMenuOpen ? 'active' : ''}`}>
          <ul className="nav-menu">
            {navItems.map((item) => (
              <li key={item.path} className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}>
                <Link to={item.path} onClick={() => setMobileMenuOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
          aria-label="Toggle navigation"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <Search />
        <button
          className={`theme-toggle ${isDarkMode ? 'dark' : 'light'}`}
          onClick={toggleTheme}
          aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
          title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
        >
          <span className="theme-toggle-icon">
            {isDarkMode ? '☀️' : '🌙'}
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
