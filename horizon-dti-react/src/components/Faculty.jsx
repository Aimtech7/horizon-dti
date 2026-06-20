import './Faculty.css';

const Faculty = () => {
  const faculty = [
    {
      name: "Dr. Maria Schmidt",
      title: "Senior German Instructor",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      qualifications: "PhD in German Studies, 15+ years teaching experience",
      specialization: "Advanced German, Business German"
    },
    {
      name: "Hans Müller",
      title: "Language Program Director",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      qualifications: "MA in Applied Linguistics, Goethe Certified Examiner",
      specialization: "Curriculum Development, Exam Preparation"
    },
    {
      name: "Anna Weber",
      title: "German Language Instructor",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      qualifications: "BA in German Language, 8+ years teaching experience",
      specialization: "Beginner to Intermediate Levels"
    },
    {
      name: "Thomas Fischer",
      title: "Cultural Integration Specialist",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      qualifications: "MA in Intercultural Communication, Native German Speaker",
      specialization: "German Culture, Workplace Integration"
    },
  ];

  return (
    <section className="faculty-section">
      <div className="container">
        <div className="section-header">
          <h6 className="section-subtitle">Our Team</h6>
          <h2 className="section-title">Meet Our Instructors</h2>
          <p className="section-description">Learn from experienced, certified German language teachers dedicated to your success.</p>
        </div>
        
        <div className="faculty-grid">
          {faculty.map((member, index) => (
            <div key={index} className="faculty-card">
              <img src={member.image} alt={member.name} className="faculty-image" />
              <div className="faculty-content">
                <h3 className="faculty-name">{member.name}</h3>
                <p className="faculty-title">{member.title}</p>
                <p className="faculty-qualifications">{member.qualifications}</p>
                <p className="faculty-specialization"><strong>Specialization:</strong> {member.specialization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
