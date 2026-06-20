import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Programs.css';

const Programs = () => {
  const [activeTab, setActiveTab] = useState('a1');

  const tabs = [
    { id: 'a1', title: 'A1 – Beginner Level', subtitle: 'Foundation Building', duration: '8-12 weeks (part-time) or 4-6 weeks (intensive)', description: 'Basic German grammar, essential vocabulary, simple conversations, introductions, and everyday expressions. Focus on speaking, listening, reading, and writing fundamentals.', outcomes: 'Introduce yourself and others, ask and answer simple questions, understand and use familiar everyday expressions, and interact in a simple way.' },
    { id: 'a2', title: 'A2 – Elementary Level', subtitle: 'Building on Basics', duration: '8-12 weeks (part-time) or 4-6 weeks (intensive)', description: 'Expanded vocabulary, more complex grammar structures, past and future tenses, and enhanced conversational skills for various situations.', outcomes: 'Communicate in simple, routine tasks, describe aspects of your background, immediate environment, and matters in areas of immediate need.' },
    { id: 'b1', title: 'B1 – Intermediate Level', subtitle: 'Independent Communication', duration: '12-16 weeks (part-time) or 6-8 weeks (intensive)', description: 'Advanced grammar, professional vocabulary, complex sentence structures, and cultural nuances. Focus on workplace and academic German.', outcomes: 'Understand main ideas of complex text, interact with a degree of fluency, produce clear, detailed text on various subjects, and explain viewpoints.' },
    { id: 'b2', title: 'B2 – Upper Intermediate', subtitle: 'Professional Proficiency', duration: '12-16 weeks (part-time) or 6-8 weeks (intensive)', description: 'Near-native fluency, specialized vocabulary for professional fields, academic writing skills, and advanced cultural understanding.', outcomes: 'Understand complex texts, express yourself fluently and spontaneously, use language flexibly for social, academic, and professional purposes.' },
  ];

  return (
    <div className="programs-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Our Programs</h1>
          <p className="page-subtitle">German Language Programs Designed for Real-World Success</p>
        </div>
      </section>

      <section className="programs-intro">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-content">
              <h2 className="intro-title">Learn German. Live German. Succeed Globally.</h2>
              <p className="intro-description">Germany is urgently seeking skilled professionals in healthcare, education, and hospitality due to a nationwide labour shortage. With generous opportunities on offer, now is the perfect time to step in. The key to unlocking these life-changing roles? Fluency in German, your gateway to a secure and successful future abroad.</p>
            </div>
            <div className="intro-image">
              <img src="https://www.horizon-dti.com/wp-content/uploads/2026/02/Student-Horizon-9.png" alt="Students in class" />
            </div>
          </div>
        </div>
      </section>

      <section className="program-levels">
        <div className="container">
          <div className="section-header">
            <h6 className="section-subtitle">Course Levels</h6>
            <h2 className="section-title">German Language Levels (A1–B2)</h2>
            <p className="section-description">Choose the right level for your current proficiency and goals.</p>
          </div>
          
          <div className="tabs-container">
            <div className="tabs-nav">
              {tabs.map(tab => (
                <button 
                  key={tab.id}
                  className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.title}
                </button>
              ))}
            </div>
            
            <div className="tabs-content">
              {tabs.map(tab => (
                <div key={tab.id} className={`tab-pane ${activeTab === tab.id ? 'active' : ''}`}>
                  <div className="level-content">
                    <h3>{tab.title}</h3>
                    <p className="level-subtitle">{tab.subtitle}</p>
                    <div className="level-details">
                      <div className="level-item">
                        <h4>Course Duration</h4>
                        <p>{tab.duration}</p>
                      </div>
                      <div className="level-item">
                        <h4>What You'll Learn</h4>
                        <p>{tab.description}</p>
                      </div>
                      <div className="level-item">
                        <h4>Learning Outcomes</h4>
                        <p>{tab.outcomes}</p>
                      </div>
                    </div>
                    <Link to="/admissions" className="btn btn-primary">Enroll in {tab.id.toUpperCase()}</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Learning German?</h2>
            <p className="cta-description">Take the first step toward your German language goals. Contact us to discuss which program is right for you.</p>
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

export default Programs;
