import { Link } from 'react-router-dom';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Events from '../components/Events';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h6 className="hero-subtitle">Learn German. Unlock Global Opportunities.</h6>
              <h1 className="hero-title">German Language Training</h1>
              <p className="hero-description">
                Welcome to <strong>Horizon Deutsch Training Institute</strong>, a leading German language training institution in Kenya, dedicated to preparing students for study, work, and life in Germany and German-speaking countries. Whether you are starting from zero or advancing your proficiency, we equip you with language skills, cultural understanding, and career-focused pathways that open real global opportunities.
              </p>
              <Link to="/about" className="btn btn-primary">Discover More</Link>
            </div>
            <div className="hero-image">
              <img src="https://www.horizon-dti.com/wp-content/uploads/2026/03/student-new.jpeg" alt="Student learning German" />
            </div>
          </div>
          <div className="partner-carousel">
            <div className="carousel-track">
              <img src="https://www.horizon-dti.com/wp-content/uploads/elementor/thumbs/bungoma-p-rj6a7f30bzitdcbiu33ghuh2chslh2m32yqx6pp3pc.jpg" alt="Partner" />
              <img src="https://www.horizon-dti.com/wp-content/uploads/elementor/thumbs/cogone_affiliatesq1-rj6a7gyopnle0k8sj3wpmtzzj9jbwgtjr81w59mbcw.jpg" alt="Partner" />
              <img src="https://www.horizon-dti.com/wp-content/uploads/elementor/thumbs/ctilogo-1-rj6a7iud3bnyns6284pyrtiwq1a2bv10fhcv3tjj0g.jpg" alt="Partner" />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="programs-section">
        <div className="container">
          <div className="section-header">
            <h6 className="section-subtitle">Study & Work Pathways to Germany</h6>
            <h2 className="section-title">Our German Language Programs (A1–B2)</h2>
            <p className="section-description">We offer structured, internationally aligned German language courses designed to deliver results at every level.</p>
            <Link to="/programs" className="btn btn-secondary">Learn More</Link>
          </div>
          <div className="programs-grid">
            <div className="program-card">
              <div className="program-icon">📚</div>
              <h3 className="program-title">A1 & A2 – Beginner to Elementary</h3>
              <p className="program-description">Build a strong foundation in German communication, pronunciation, and everyday conversations.</p>
            </div>
            <div className="program-card">
              <div className="program-icon">🎓</div>
              <h3 className="program-title">B1 – Intermediate</h3>
              <p className="program-description">Develop independent language use for work, study, and travel in German-speaking environments.</p>
            </div>
            <div className="program-card">
              <div className="program-icon">🏆</div>
              <h3 className="program-title">B2 – Upper Intermediate</h3>
              <p className="program-description">Achieve advanced fluency for professional settings, university admission, and career opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <Events />

      {/* Why Choose Us Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-number">01</div>
              <h3 className="feature-title">Expert Instructors</h3>
              <p className="feature-description">Learn from certified German language teachers with extensive experience in language education.</p>
            </div>
            <div className="feature-item">
              <div className="feature-number">02</div>
              <h3 className="feature-title">Flexible Learning</h3>
              <p className="feature-description">Choose between virtual classes and in-person sessions to fit your schedule and learning style.</p>
            </div>
            <div className="feature-item">
              <div className="feature-number">03</div>
              <h3 className="feature-title">Career Support</h3>
              <p className="feature-description">Get guidance on study opportunities, work pathways, and cultural integration in Germany.</p>
            </div>
            <div className="feature-item">
              <div className="feature-number">04</div>
              <h3 className="feature-title">Proven Results</h3>
              <p className="feature-description">Join thousands of successful graduates who have achieved their German language goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Your German Language Journey?</h2>
            <p className="cta-description">Take the first step toward studying, working, and living in Germany. Contact us today to learn about upcoming intakes and program options.</p>
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

export default Home;
