import { Link } from 'react-router-dom';
import './VirtualLearning.css';

const VirtualLearning = () => {
  const features = [
    { icon: '🎥', title: 'Live Interactive Sessions', description: 'Real-time virtual classes with experienced instructors and interactive participation.' },
    { icon: '📅', title: 'Flexible Scheduling', description: 'Choose class times that fit your schedule, including evening and weekend options.' },
    { icon: '📚', title: 'Digital Resources', description: 'Access to comprehensive online learning materials, recordings, and practice exercises.' },
    { icon: '🌍', title: 'Learn from Anywhere', description: 'Join our classes from anywhere in the world with just an internet connection.' },
    { icon: '👥', title: 'Small Class Sizes', description: 'Maintain personalized attention with limited students per virtual session.' },
    { icon: '💬', title: '24/7 Support', description: 'Access to support and resources whenever you need assistance.' },
  ];

  const steps = [
    { number: '1', title: 'Register Online', description: 'Complete your registration and choose your preferred program level.' },
    { number: '2', title: 'Get Access', description: 'Receive login credentials and access to our learning platform.' },
    { number: '3', title: 'Join Classes', description: 'Attend live virtual sessions at your scheduled times.' },
    { number: '4', title: 'Practice & Learn', description: 'Complete assignments and practice exercises between sessions.' },
  ];

  return (
    <div className="virtual-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Virtual Learning</h1>
          <p className="page-subtitle">Learn German from Anywhere with Our Online Programs</p>
        </div>
      </section>

      <section className="virtual-features">
        <div className="container">
          <div className="section-header">
            <h6 className="section-subtitle">Online Learning</h6>
            <h2 className="section-title">Why Choose Virtual Learning?</h2>
            <p className="section-description">Experience the same quality education from the comfort of your home or office.</p>
          </div>
          
          <div className="virtual-grid">
            {features.map((feature, index) => (
              <div key={index} className="virtual-card">
                <div className="virtual-icon">{feature.icon}</div>
                <h3 className="virtual-title">{feature.title}</h3>
                <p className="virtual-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="container">
          <div className="section-header">
            <h6 className="section-subtitle">Process</h6>
            <h2 className="section-title">How Virtual Learning Works</h2>
            <p className="section-description">Simple steps to start your online German language journey.</p>
          </div>
          
          <div className="works-steps">
            {steps.map((step, index) => (
              <div key={index} className="works-step">
                <div className="works-number">{step.number}</div>
                <h4 className="works-title">{step.title}</h4>
                <p className="works-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Learning Online?</h2>
            <p className="cta-description">Begin your German language journey from anywhere with our virtual learning programs.</p>
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

export default VirtualLearning;
