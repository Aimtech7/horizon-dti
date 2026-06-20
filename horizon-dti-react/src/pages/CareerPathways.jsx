import { Link } from 'react-router-dom';
import './CareerPathways.css';

const CareerPathways = () => {
  const careers = [
    { icon: '🏥', title: 'Healthcare', description: 'Nurses, doctors, and healthcare professionals are in high demand across Germany\'s healthcare system.' },
    { icon: '👨‍🏫', title: 'Education', description: 'Teachers and educators needed for schools, language institutes, and educational programs.' },
    { icon: '🏨', title: 'Hospitality', description: 'Hotel management, tourism, and service industry roles for German-speaking professionals.' },
    { icon: '⚙️', title: 'Engineering', description: 'Mechanical, electrical, and software engineers sought after by German industries.' },
    { icon: '💼', title: 'Business & Finance', description: 'Accounting, management, and business administration roles in multinational companies.' },
    { icon: '🚗', title: 'Automotive', description: 'Germany\'s world-renowned automotive industry offers numerous technical and skilled positions.' },
  ];

  const studies = [
    { title: 'Tuition-Free Universities', description: 'Many public universities offer free education even to international students.' },
    { title: 'Diverse Programs', description: 'Wide range of programs from engineering to arts and social sciences.' },
    { title: 'Research Opportunities', description: 'Germany is a leader in research and innovation with excellent facilities.' },
    { title: 'Work While Studying', description: 'Students can work part-time to support themselves during their studies.' },
  ];

  return (
    <div className="career-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Career Pathways</h1>
          <p className="page-subtitle">Your German Language Skills Open Doors to Global Opportunities</p>
        </div>
      </section>

      <section className="career-section">
        <div className="container">
          <div className="section-header">
            <h6 className="section-subtitle">Opportunities</h6>
            <h2 className="section-title">Career Opportunities in Germany</h2>
            <p className="section-description">Germany offers excellent career opportunities for skilled professionals with German language proficiency.</p>
          </div>
          
          <div className="careers-grid">
            {careers.map((career, index) => (
              <div key={index} className="career-card">
                <div className="career-icon">{career.icon}</div>
                <h3 className="career-title">{career.title}</h3>
                <p className="career-description">{career.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="study-section">
        <div className="container">
          <div className="section-header">
            <h6 className="section-subtitle">Education</h6>
            <h2 className="section-title">Study in Germany</h2>
            <p className="section-description">Germany offers world-class education with many programs available in English and German.</p>
          </div>
          
          <div className="study-grid">
            {studies.map((study, index) => (
              <div key={index} className="study-item">
                <h4 className="study-title">{study.title}</h4>
                <p className="study-description">{study.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Explore Your Career Pathways?</h2>
            <p className="cta-description">Start your German language journey today and unlock opportunities in Germany and beyond.</p>
            <div className="cta-buttons">
              <Link to="/programs" className="btn btn-primary">View Programs</Link>
              <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerPathways;
