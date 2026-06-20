import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mwangi",
      program: "B1 Level",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      rating: 5,
      text: "Horizon DTI transformed my German language skills completely. The instructors are patient and the curriculum is well-structured. I'm now working in Munich!",
    },
    {
      name: "John Kamau",
      program: "B2 Level",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      rating: 5,
      text: "The virtual learning option was perfect for my schedule. I completed B2 while working full-time. The support from the team was exceptional.",
    },
    {
      name: "Emily Ochieng",
      program: "A2 Level",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      rating: 4,
      text: "Starting from zero, I never thought I could speak German. The A1 and A2 courses gave me a solid foundation. Highly recommended!",
    },
    {
      name: "David Kipchoge",
      program: "B1 Level",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      rating: 5,
      text: "The cultural integration training was invaluable. It helped me understand not just the language but also German workplace culture.",
    },
  ];

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>
    ));
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h6 className="section-subtitle">Student Success</h6>
          <h2 className="section-title">What Our Students Say</h2>
          <p className="section-description">Hear from our successful graduates who have achieved their German language goals.</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                <div className="testimonial-info">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-program">{testimonial.program}</p>
                  <div className="testimonial-rating">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
