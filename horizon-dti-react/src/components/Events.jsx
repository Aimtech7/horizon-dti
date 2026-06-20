import './Events.css';

const Events = () => {
  const events = [
    {
      title: "A1 Level Intensive Course",
      date: "July 1, 2026",
      time: "9:00 AM - 12:00 PM",
      location: "Kitale Campus & Online",
      type: "Course",
      description: "4-week intensive A1 German language course for beginners."
    },
    {
      title: "Goethe Exam Preparation Workshop",
      date: "July 15, 2026",
      time: "2:00 PM - 5:00 PM",
      location: "Online",
      type: "Workshop",
      description: "Free workshop on Goethe exam strategies and practice tests."
    },
    {
      title: "German Cultural Day",
      date: "July 20, 2026",
      time: "10:00 AM - 4:00 PM",
      location: "Kitale Campus",
      type: "Event",
      description: "Experience German culture, food, and language immersion."
    },
    {
      title: "B2 Level Evening Classes",
      date: "August 1, 2026",
      time: "6:00 PM - 8:00 PM",
      location: "Online",
      type: "Course",
      description: "Evening B2 classes for working professionals."
    },
  ];

  const getTypeColor = (type) => {
    switch(type) {
      case 'Course': return '#e94560';
      case 'Workshop': return '#4CAF50';
      case 'Event': return '#2196F3';
      default: return '#666';
    }
  };

  return (
    <section className="events-section">
      <div className="container">
        <div className="section-header">
          <h6 className="section-subtitle">Calendar</h6>
          <h2 className="section-title">Upcoming Events & Classes</h2>
          <p className="section-description">Stay updated with our upcoming courses, workshops, and events.</p>
        </div>
        
        <div className="events-grid">
          {events.map((event, index) => (
            <div key={index} className="event-card">
              <div className="event-date">
                <span className="event-month">{event.date.split(' ')[0]}</span>
                <span className="event-day">{event.date.split(' ')[1].replace(',', '')}</span>
              </div>
              <div className="event-content">
                <span className="event-type" style={{ backgroundColor: getTypeColor(event.type) }}>
                  {event.type}
                </span>
                <h3 className="event-title">{event.title}</h3>
                <p className="event-description">{event.description}</p>
                <div className="event-details">
                  <span className="event-detail">🕒 {event.time}</span>
                  <span className="event-detail">📍 {event.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
