import { Link } from 'react-router-dom';
import './GoetheExam.css';

const GoetheExam = () => {
  const examLevels = [
    {
      level: "A1",
      title: "Start Deutsch 1",
      description: "Basic German language skills for everyday situations",
      skills: ["Understanding simple questions", "Introducing yourself", "Basic shopping conversations"],
      duration: "Written: 65 minutes | Oral: 15 minutes",
      fee: "€95"
    },
    {
      level: "A2",
      title: "Start Deutsch 2",
      description: "Elementary German language skills for routine communication",
      skills: ["Discussing familiar topics", "Writing simple messages", "Understanding routine information"],
      duration: "Written: 70 minutes | Oral: 15 minutes",
      fee: "€110"
    },
    {
      level: "B1",
      title: "Zertifikat Deutsch",
      description: "Independent language use for study and work",
      skills: ["Expressing opinions", "Understanding main ideas", "Writing clear texts"],
      duration: "Written: 130 minutes | Oral: 15 minutes",
      fee: "€145"
    },
    {
      level: "B2",
      title: "Goethe-Zertifikat B2",
      description: "Advanced language skills for professional and academic contexts",
      skills: ["Complex communication", "Technical discussions", "Academic writing"],
      duration: "Written: 190 minutes | Oral: 15 minutes",
      fee: "€175"
    },
  ];

  const preparationTips = [
    {
      icon: "📚",
      title: "Study Regularly",
      description: "Consistent daily practice is more effective than cramming. Dedicate at least 30 minutes daily."
    },
    {
      icon: "🎯",
      title: "Practice Past Papers",
      description: "Familiarize yourself with exam format by practicing with previous exam papers."
    },
    {
      icon: "🗣️",
      title: "Speak German Daily",
      description: "Practice speaking with native speakers or language exchange partners."
    },
    {
      icon: "📝",
      title: "Focus on Weak Areas",
      description: "Identify your weak areas and dedicate extra time to improve them."
    },
    {
      icon: "🎧",
      title: "Listen to German",
      description: "Improve listening skills with German podcasts, news, and music."
    },
    {
      icon: "⏰",
      title: "Time Management",
      description: "Practice completing tasks within the time limits of the actual exam."
    },
  ];

  return (
    <div className="goethe-exam-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Goethe Exam Information</h1>
          <p className="page-subtitle">Everything You Need to Know About German Language Proficiency Exams</p>
        </div>
      </section>

      <section className="exam-intro">
        <div className="container">
          <div className="intro-content">
            <h2 className="intro-title">About Goethe Examinations</h2>
            <p className="intro-description">
              The Goethe-Institut examinations are internationally recognized German language proficiency tests. 
              Passing these exams opens doors to studying at German universities, working in German-speaking countries, 
              and obtaining German citizenship. Our B1 and B2 courses include comprehensive Goethe exam preparation.
            </p>
          </div>
        </div>
      </section>

      <section className="exam-levels">
        <div className="container">
          <div className="section-header">
            <h6 className="section-subtitle">Certification</h6>
            <h2 className="section-title">Exam Levels</h2>
            <p className="section-description">Choose the right exam level based on your proficiency and goals.</p>
          </div>
          
          <div className="levels-grid">
            {examLevels.map((exam, index) => (
              <div key={index} className="exam-card">
                <div className="exam-level">{exam.level}</div>
                <h3 className="exam-title">{exam.title}</h3>
                <p className="exam-description">{exam.description}</p>
                <div className="exam-skills">
                  <h4>Skills Tested:</h4>
                  <ul>
                    {exam.skills.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                </div>
                <div className="exam-details">
                  <div className="detail-item">
                    <span className="detail-label">Duration:</span>
                    <span className="detail-value">{exam.duration}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Fee:</span>
                    <span className="detail-value">{exam.fee}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="preparation-tips">
        <div className="container">
          <div className="section-header">
            <h6 className="section-subtitle">Preparation</h6>
            <h2 className="section-title">Exam Preparation Tips</h2>
            <p className="section-description">Strategies to help you succeed in your Goethe examination.</p>
          </div>
          
          <div className="tips-grid">
            {preparationTips.map((tip, index) => (
              <div key={index} className="tip-card">
                <div className="tip-icon">{tip.icon}</div>
                <h3 className="tip-title">{tip.title}</h3>
                <p className="tip-description">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="registration-info">
        <div className="container">
          <div className="registration-content">
            <h2 className="registration-title">Exam Registration</h2>
            <p className="registration-description">
              Goethe exams are conducted at authorized test centers. We assist our students with exam registration 
              and provide guidance on choosing the right test center and date.
            </p>
            <div className="registration-steps">
              <div className="step">
                <div className="step-number">1</div>
                <p>Complete your course with us</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <p>Take practice tests</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <p>Register for exam</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <p>Pass and get certified</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Prepare for Your Goethe Exam?</h2>
            <p className="cta-description">Enroll in our B1 or B2 courses with comprehensive exam preparation included.</p>
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

export default GoetheExam;
