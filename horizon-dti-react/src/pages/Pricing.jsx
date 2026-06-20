import { Link } from 'react-router-dom';
import './Pricing.css';

const Pricing = () => {
  const pricingPlans = [
    {
      level: 'A1 - Beginner',
      duration: '8-12 weeks',
      price: 'KES 25,000',
      features: [
        '60 hours of instruction',
        'Course materials included',
        'Certificate of completion',
        'Online access to resources',
        'Weekly assessments'
      ],
      popular: false
    },
    {
      level: 'A2 - Elementary',
      duration: '8-12 weeks',
      price: 'KES 30,000',
      features: [
        '60 hours of instruction',
        'Course materials included',
        'Certificate of completion',
        'Online access to resources',
        'Weekly assessments',
        'Speaking practice sessions'
      ],
      popular: false
    },
    {
      level: 'B1 - Intermediate',
      duration: '12-16 weeks',
      price: 'KES 45,000',
      features: [
        '80 hours of instruction',
        'Course materials included',
        'Certificate of completion',
        'Online access to resources',
        'Weekly assessments',
        'Goethe exam preparation',
        'Career counseling session'
      ],
      popular: true
    },
    {
      level: 'B2 - Upper Intermediate',
      duration: '12-16 weeks',
      price: 'KES 55,000',
      features: [
        '80 hours of instruction',
        'Course materials included',
        'Certificate of completion',
        'Online access to resources',
        'Weekly assessments',
        'Goethe exam preparation',
        'Job placement assistance',
        'Cultural integration training'
      ],
      popular: false
    }
  ];

  return (
    <div className="pricing-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Pricing & Tuition</h1>
          <p className="page-subtitle">Invest in Your Future with Affordable German Language Training</p>
        </div>
      </section>

      <section className="pricing-section">
        <div className="container">
          <div className="section-header">
            <h6 className="section-subtitle">Investment</h6>
            <h2 className="section-title">Course Pricing</h2>
            <p className="section-description">Choose the program that fits your goals and budget. All prices include course materials and certification.</p>
          </div>
          
          <div className="pricing-grid">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <div className="popular-badge">Most Popular</div>}
                <h3 className="pricing-level">{plan.level}</h3>
                <p className="pricing-duration">{plan.duration}</p>
                <div className="pricing-price">{plan.price}</div>
                <ul className="pricing-features">
                  {plan.features.map((feature, i) => (
                    <li key={i}>✓ {feature}</li>
                  ))}
                </ul>
                <Link to="/admissions" className="btn btn-primary">Enroll Now</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="payment-options">
        <div className="container">
          <div className="section-header">
            <h6 className="section-subtitle">Payment</h6>
            <h2 className="section-title">Flexible Payment Options</h2>
            <p className="section-description">We offer various payment methods to make your education accessible.</p>
          </div>
          
          <div className="payment-grid">
            <div className="payment-card">
              <div className="payment-icon">💳</div>
              <h3 className="payment-title">Full Payment</h3>
              <p className="payment-description">Pay the full amount upfront and receive a 5% discount on your course fee.</p>
            </div>
            <div className="payment-card">
              <div className="payment-icon">📅</div>
              <h3 className="payment-title">Installment Plan</h3>
              <p className="payment-description">Split your payment into 3 monthly installments with no additional interest.</p>
            </div>
            <div className="payment-card">
              <div className="payment-icon">🏢</div>
              <h3 className="payment-title">Corporate Sponsorship</h3>
              <p className="payment-description">Employers can sponsor employee training with special corporate rates available.</p>
            </div>
            <div className="payment-card">
              <div className="payment-icon">🎓</div>
              <h3 className="payment-title">Scholarships</h3>
              <p className="payment-description">Limited scholarships available for deserving students based on merit and need.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Your German Language Journey?</h2>
            <p className="cta-description">Contact us to discuss pricing options and find the best plan for your needs.</p>
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

export default Pricing;
