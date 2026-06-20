import { Link } from 'react-router-dom';
import './Resources.css';

const Resources = () => {
  const resources = [
    {
      title: "Course Brochure 2026",
      description: "Complete guide to all our German language programs, schedules, and pricing.",
      type: "PDF",
      size: "2.5 MB",
      icon: "📄",
      category: "General"
    },
    {
      title: "Application Form",
      description: "Download and fill out your admission application form.",
      type: "PDF",
      size: "500 KB",
      icon: "📝",
      category: "Admissions"
    },
    {
      title: "German Grammar Guide",
      description: "Comprehensive grammar reference for A1-B2 levels.",
      type: "PDF",
      size: "5.2 MB",
      icon: "📚",
      category: "Study Materials"
    },
    {
      title: "Vocabulary Flashcards - A1",
      description: "Essential German vocabulary for beginner level with pronunciation.",
      type: "PDF",
      size: "1.8 MB",
      icon: "🃏",
      category: "Study Materials"
    },
    {
      title: "Goethe Exam Preparation Guide",
      description: "Tips, strategies, and practice materials for Goethe exams.",
      type: "PDF",
      size: "3.1 MB",
      icon: "🎯",
      category: "Exam Prep"
    },
    {
      title: "German Cultural Guide",
      description: "Understanding German culture, etiquette, and workplace norms.",
      type: "PDF",
      size: "2.8 MB",
      icon: "🌍",
      category: "General"
    },
    {
      title: "Sample Placement Test",
      description: "Practice test to determine your current German proficiency level.",
      type: "PDF",
      size: "1.2 MB",
      icon: "✏️",
      category: "Assessment"
    },
    {
      title: "Pronunciation Guide",
      description: "Audio and text guide to German pronunciation and phonetics.",
      type: "PDF",
      size: "4.5 MB",
      icon: "🔊",
      category: "Study Materials"
    },
  ];

  const categories = [...new Set(resources.map(r => r.category))];

  return (
    <div className="resources-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Resources</h1>
          <p className="page-subtitle">Download Free Study Materials and Information</p>
        </div>
      </section>

      <section className="resources-section">
        <div className="container">
          <div className="section-header">
            <h6 className="section-subtitle">Downloads</h6>
            <h2 className="section-title">Available Resources</h2>
            <p className="section-description">Access free study materials, application forms, and guides to support your German language journey.</p>
          </div>
          
          <div className="resources-grid">
            {resources.map((resource, index) => (
              <div key={index} className="resource-card">
                <div className="resource-icon">{resource.icon}</div>
                <div className="resource-content">
                  <span className="resource-category">{resource.category}</span>
                  <h3 className="resource-title">{resource.title}</h3>
                  <p className="resource-description">{resource.description}</p>
                  <div className="resource-meta">
                    <span className="resource-type">{resource.type}</span>
                    <span className="resource-size">{resource.size}</span>
                  </div>
                </div>
                <button className="download-btn">Download</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="additional-resources">
        <div className="container">
          <div className="section-header">
            <h6 className="section-subtitle">External</h6>
            <h2 className="section-title">Recommended External Resources</h2>
            <p className="section-description">Additional learning resources from trusted sources.</p>
          </div>
          
          <div className="external-resources-grid">
            <a href="https://www.goethe.de" target="_blank" rel="noopener noreferrer" className="external-resource-card">
              <div className="external-icon">🇩🇪</div>
              <h3 className="external-title">Goethe Institute</h3>
              <p className="external-description">Official German cultural institute with free learning materials.</p>
            </a>
            <a href="https://www.deutsch-lernen.com" target="_blank" rel="noopener noreferrer" className="external-resource-card">
              <div className="external-icon">📖</div>
              <h3 className="external-title">Deutsch-Lernen</h3>
              <p className="external-description">Free German courses and exercises for all levels.</p>
            </a>
            <a href="https://www.dw.com/learn-german" target="_blank" rel="noopener noreferrer" className="external-resource-card">
              <div className="external-icon">📺</div>
              <h3 className="external-title">Deutsche Welle</h3>
              <p className="external-description">German news and learning resources from DW.</p>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="external-resource-card">
              <div className="external-icon">🎬</div>
              <h3 className="external-title">German YouTube Channels</h3>
              <p className="external-description">Video lessons and German language content.</p>
            </a>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Need More Help?</h2>
            <p className="cta-description">Contact us for personalized guidance and additional resources.</p>
            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
