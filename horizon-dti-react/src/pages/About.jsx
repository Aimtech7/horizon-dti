import { Link } from 'react-router-dom';
import Faculty from '../components/Faculty';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">About Us</h1>
          <p className="page-subtitle">We believe learning German isn't just about passing an exam, it's about transforming your future.</p>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h6 className="section-subtitle">Who We Are</h6>
              <h2 className="section-title">Join Us – Your Future Speaks German</h2>
              <p className="about-description">
                Horizon Deutsch Training Institute is a dedicated German language training institution in Kenya, committed to preparing learners for academic, professional, and cultural integration into Germany and other German-speaking countries.
              </p>
              <p className="about-description">
                Founded on the belief that language is the foundation of global opportunity, we provide structured German language programs that go beyond grammar — equipping students with practical communication skills, cultural awareness, and career-oriented readiness.
              </p>
            </div>
            <div className="about-image">
              <img src="https://www.horizon-dti.com/wp-content/uploads/2026/02/Student-Horizon-11-1024x1024.png" alt="Students learning German" />
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">👁️</div>
              <h3 className="value-title">Our Vision</h3>
              <p className="value-description">To become a leading centre of excellence in German language education and international pathway preparation, empowering learners to confidently access global opportunities.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3 className="value-title">Our Mission</h3>
              <p className="value-description">To deliver high-quality, student-centred German language training that enables learners to communicate confidently in real-life and professional settings, integrate successfully into German society and workplaces, and access education, employment, and vocational opportunities abroad.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3 className="value-title">Our Teaching Philosophy</h3>
              <p className="value-description">At Horizon Deutsch Training Institute, we believe that learning German should be practical, immersive, and purpose-driven. Our approach emphasises speaking and listening from day one, context-based learning tied to real situations, continuous assessment and guided progression, and cultural understanding as an essential part of language mastery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <Faculty />

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Begin Your German Language Journey?</h2>
            <p className="cta-description">Join Horizon Deutsch Training Institute and take the first step toward your global future. Contact us today to learn about our upcoming programs and enrollment process.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Contact Us</Link>
              <Link to="/admissions" className="btn btn-secondary">Apply Now</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
