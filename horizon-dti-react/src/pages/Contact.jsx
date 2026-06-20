import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">Connect with us for guidance and support.</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-map">
              <iframe 
                src="https://maps.google.com/maps?q=Ambwere%20House%20kitale&t=m&z=12&output=embed&iwloc=near"
                width="100%" 
                height="400" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Ambwere House Kitale Location"
              />
            </div>
            
            <div className="contact-info">
              <div className="contact-intro">
                <h6 className="section-subtitle">Get in touch</h6>
                <h3 className="contact-title">Interested in learning German and working or studying in Germany?</h3>
                <p className="contact-description">We'd love to hear from you! Whether you visit us in person, give us a call, or drop us an email — our team is ready to assist you and will respond promptly.</p>
              </div>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">🏢</div>
                  <div className="contact-text">
                    <h4>Main Campus</h4>
                    <p>Ambwere House 5th Floor, Kitale</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div className="contact-text">
                    <h4>Let's Talk</h4>
                    <p>+254 119 485 021<br/>+254 100 722 201</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div className="contact-text">
                    <h4>Email Support</h4>
                    <p>admissions@horizon-dti.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container">
          <div className="section-header">
            <h6 className="section-subtitle">Send Us a Message</h6>
            <h2 className="section-title">Have Questions? We're Here to Help</h2>
            <p className="section-description">Fill out the form below and our team will get back to you within 24 hours.</p>
          </div>
          
          <div className="form-container">
            <form onSubmit={handleSubmit} className="contact-form">
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
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required>
                  <option value="">Select a subject</option>
                  <option value="general-inquiry">General Inquiry</option>
                  <option value="program-information">Program Information</option>
                  <option value="admissions">Admissions</option>
                  <option value="enrollment">Enrollment</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required />
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Your German Language Journey?</h2>
            <p className="cta-description">Take the first step toward studying, working, and living in Germany. Contact us today to learn about upcoming intakes and program options.</p>
            <div className="cta-buttons">
              <Link to="/programs" className="btn btn-primary">View Programs</Link>
              <Link to="/admissions" className="btn btn-secondary">Apply Now</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
