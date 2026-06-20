import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Admissions.css';

const Admissions = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    programLevel: '',
    learningFormat: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your application! We will contact you shortly with next steps.');
    setFormData({ firstName: '', lastName: '', email: '', phone: '', programLevel: '', learningFormat: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const steps = [
    { number: '1', title: 'Inquiry & Consultation', description: 'Speak with our team to understand programs and pathways that best suit your goals and current proficiency level.' },
    { number: '2', title: 'Placement Assessment', description: 'Complete a brief assessment to determine the appropriate starting level for your German language journey.' },
    { number: '3', title: 'Program Selection', description: 'Choose your preferred program level, learning format (in-person or virtual), and schedule that fits your needs.' },
    { number: '4', title: 'Registration', description: 'Complete the registration process, submit required documents, and secure your place in the upcoming intake.' },
    { number: '5', title: 'Orientation', description: 'Attend orientation to meet your instructors, receive learning materials, and get familiar with our learning platform.' },
    { number: '6', title: 'Begin Learning', description: 'Start your German language classes and begin your journey toward fluency and global opportunities.' },
  ];

  return (
    <div className="admissions-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Admissions</h1>
          <p className="page-subtitle">Your First Step Toward German Language Mastery and Global Opportunities</p>
        </div>
      </section>

      <section className="admissions-intro">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-content">
              <h2 className="intro-title">How to Enroll at Horizon Deutsch Training Institute</h2>
              <p className="intro-description">Joining Horizon Deutsch Training Institute is simple and guided. Our admissions process ensures you start at the right level and on the right path.</p>
            </div>
            <div className="intro-image">
              <img src="https://www.horizon-dti.com/wp-content/uploads/2026/02/Student-Horizon-17.png" alt="Student enrollment" />
            </div>
          </div>
        </div>
      </section>

      <section className="admission-steps">
        <div className="container">
          <div className="section-header">
            <h6 className="section-subtitle">Process</h6>
            <h2 className="section-title">Admission Steps</h2>
            <p className="section-description">At Horizon Deutsch Training Institute, we believe that starting your German language journey should be clear, supportive, and stress-free. Our admissions process is designed to guide every learner into the right program and learning pathway.</p>
          </div>

          <div className="steps-grid">
            {steps.map((step, index) => (
              <div key={index} className="step-card">
                <div className="step-number">{step.number}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="requirements-section">
        <div className="container">
          <div className="section-header">
            <h6 className="section-subtitle">Requirements</h6>
            <h2 className="section-title">Entry Requirements</h2>
            <p className="section-description">Simple requirements to get started on your German language journey.</p>
          </div>

          <div className="requirements-grid">
            <div className="requirement-item">
              <div className="requirement-icon">📝</div>
              <h4 className="requirement-title">Basic Education</h4>
              <p className="requirement-description">Minimum high school education or equivalent qualification.</p>
            </div>
            <div className="requirement-item">
              <div className="requirement-icon">🌍</div>
              <h4 className="requirement-title">Language Proficiency</h4>
              <p className="requirement-description">Basic English proficiency for instruction (no prior German required for A1 level).</p>
            </div>
            <div className="requirement-item">
              <div className="requirement-icon">💳</div>
              <h4 className="requirement-title">Identification</h4>
              <p className="requirement-description">Valid national ID or passport for registration purposes.</p>
            </div>
            <div className="requirement-item">
              <div className="requirement-icon">💻</div>
              <h4 className="requirement-title">For Virtual Learning</h4>
              <p className="requirement-description">Reliable internet access and a device for online classes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="admission-form-section">
        <div className="container">
          <div className="section-header">
            <h6 className="section-subtitle">Apply Now</h6>
            <h2 className="section-title">Admission Application Form</h2>
            <p className="section-description">Fill out the form below to start your admission process. We'll get back to you within 24 hours.</p>
          </div>

          <div className="form-container">
            <form onSubmit={handleSubmit} className="admission-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="programLevel">Program Level *</label>
                  <select id="programLevel" name="programLevel" value={formData.programLevel} onChange={handleChange} required>
                    <option value="">Select your level</option>
                    <option value="a1">A1 - Beginner</option>
                    <option value="a2">A2 - Elementary</option>
                    <option value="b1">B1 - Intermediate</option>
                    <option value="b2">B2 - Upper Intermediate</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="learningFormat">Learning Format *</label>
                  <select id="learningFormat" name="learningFormat" value={formData.learningFormat} onChange={handleChange} required>
                    <option value="">Select format</option>
                    <option value="in-person">In-Person Classes</option>
                    <option value="virtual">Virtual Learning</option>
                    <option value="hybrid">Hybrid</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Additional Information</label>
                <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} placeholder="Tell us about your goals, background, or any questions you have."></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit Application</button>
            </form>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Your German Language Journey?</h2>
            <p className="cta-description">Take the first step toward studying, working, and living in Germany. Contact us today to begin your enrollment process.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Contact Us</Link>
              <Link to="/programs" className="btn btn-secondary">View Programs</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
