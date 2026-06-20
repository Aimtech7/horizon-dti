import { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What German language levels do you offer?",
      answer: "We offer all levels from A1 (beginner) to B2 (upper intermediate). Each level is designed to progressively build your language skills and prepare you for real-world communication in German-speaking environments."
    },
    {
      question: "How long does each course take?",
      answer: "Course duration varies by level and learning format. Part-time courses typically take 8-12 weeks, while intensive courses can be completed in 4-6 weeks. Virtual learning options offer flexible scheduling to fit your needs."
    },
    {
      question: "Do I need prior German knowledge?",
      answer: "No prior German knowledge is required for A1 level. For higher levels (A2, B1, B2), we offer placement assessments to determine your current proficiency and recommend the appropriate starting level."
    },
    {
      question: "What learning formats are available?",
      answer: "We offer three learning formats: In-person classes at our Kitale campus, virtual/online classes with live instructors, and hybrid options that combine both. Choose the format that best fits your schedule and learning style."
    },
    {
      question: "What are the admission requirements?",
      answer: "Basic requirements include minimum high school education, basic English proficiency for instruction, valid identification (ID or passport), and for virtual learning, reliable internet access and a device."
    },
    {
      question: "Can I work while studying German?",
      answer: "Yes! Many of our students work while learning. Our virtual learning format is designed to accommodate working professionals with flexible class schedules, including evening and weekend options."
    },
    {
      question: "Do you offer Goethe exam preparation?",
      answer: "Yes, our B1 and B2 levels include Goethe exam preparation. We provide practice tests, exam strategies, and guidance on registration for official German language proficiency exams."
    },
    {
      question: "What payment options are available?",
      answer: "We offer flexible payment options including full payment upfront, installment plans, and corporate sponsorship options. Contact our admissions team for detailed pricing and payment arrangements."
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="section-header">
          <h6 className="section-subtitle">Questions</h6>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-description">Find answers to common questions about our programs, admissions, and learning options.</p>
        </div>
        
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
