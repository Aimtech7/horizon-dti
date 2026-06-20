import { Link } from 'react-router-dom';
import './SuccessStories.css';

const SuccessStories = () => {
  const stories = [
    {
      name: "Grace Wanjiku",
      before: "High school graduate with no German knowledge",
      after: "Working as a nurse in Munich, Germany",
      journey: "Completed A1-B2 in 8 months",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      quote: "Horizon DTI gave me the foundation I needed. The Goethe exam preparation was excellent, and I passed my B2 exam on the first try!",
      timeline: "Started: January 2026 | Working in Germany: September 2026"
    },
    {
      name: "James Omondi",
      before: "IT professional looking to work in Germany",
      after: "Software Engineer at Berlin tech company",
      journey: "Completed B1-B2 while working full-time",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      quote: "The virtual learning option was perfect for my schedule. I could attend evening classes while maintaining my job. Now I'm living my dream in Berlin.",
      timeline: "Started: March 2026 | Working in Germany: November 2026"
    },
    {
      name: "Linda Akinyi",
      before: "University student interested in German universities",
      after: "Studying Engineering at TU Munich",
      journey: "Completed A1-B2 in 10 months",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
      quote: "The cultural integration training was invaluable. It helped me understand not just the language but German workplace and academic culture.",
      timeline: "Started: February 2026 | University Admission: December 2026"
    },
    {
      name: "Peter Kipkorir",
      before: "Business owner seeking German market expansion",
      after: "Successfully expanded business to Germany",
      journey: "Completed A1-B1 for business purposes",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
      quote: "The business German focus in the B1 course was exactly what I needed. I can now negotiate with German clients confidently.",
      timeline: "Started: April 2026 | Business Expansion: January 2027"
    },
  ];

  return (
    <div className="success-stories-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Student Success Stories</h1>
          <p className="page-subtitle">Real Stories from Real Students Who Achieved Their Dreams</p>
        </div>
      </section>

      <section className="stories-section">
        <div className="container">
          <div className="section-header">
            <h6 className="section-subtitle">Inspiration</h6>
            <h2 className="section-title">Transform Your Future Like These Students</h2>
            <p className="section-description">See how our graduates have used their German language skills to achieve remarkable success.</p>
          </div>
          
          <div className="stories-grid">
            {stories.map((story, index) => (
              <div key={index} className="story-card">
                <div className="story-header">
                  <img src={story.image} alt={story.name} className="story-image" />
                  <div className="story-info">
                    <h3 className="story-name">{story.name}</h3>
                    <p className="story-journey">{story.journey}</p>
                  </div>
                </div>
                <div className="story-transformation">
                  <div className="transformation-item">
                    <span className="transformation-label">Before:</span>
                    <span className="transformation-text">{story.before}</span>
                  </div>
                  <div className="transformation-arrow">↓</div>
                  <div className="transformation-item">
                    <span className="transformation-label">After:</span>
                    <span className="transformation-text">{story.after}</span>
                  </div>
                </div>
                <p className="story-quote">"{story.quote}"</p>
                <p className="story-timeline">{story.timeline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Graduates</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">Goethe Exam Pass Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">200+</div>
              <div className="stat-label">Working in Germany</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">University Admissions</div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Write Your Own Success Story?</h2>
            <p className="cta-description">Join Horizon Deutsch Training Institute and start your journey toward German language mastery and global opportunities.</p>
            <div className="cta-buttons">
              <Link to="/admissions" className="btn btn-primary">Apply Now</Link>
              <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;
