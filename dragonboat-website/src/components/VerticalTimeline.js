import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './VerticalTimeline.css';

const VerticalTimeline = () => {
  const [events, setEvents] = useState([
    {
      id: uuidv4(),
      title: 'Initial Event',
      date: '2023-06',
    },
  ]);

  const [newEventTitle, setNewEventTitle] = useState('');
  const [newEventDate, setNewEventDate] = useState('');

  const handleAddEvent = () => {
    const newEvent = {
      id: uuidv4(),
      title: newEventTitle,
      date: newEventDate,
    };

    setEvents([...events, newEvent]);
    setNewEventTitle('');
    setNewEventDate('');
  };

  return (
    <div className="timeline-container">
      <h2>Interactive Vertical Timeline</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Event Title"
          value={newEventTitle}
          onChange={(e) => setNewEventTitle(e.target.value)}
        />
        <input
          type="month"
          value={newEventDate}
          onChange={(e) => setNewEventDate(e.target.value)}
        />
        <button onClick={handleAddEvent}>Add Event</button>
      </div>
      <div className="timeline">
        {events
          .sort((a, b) => new Date(a.date) - new Date(b.date))
          .map((event) => (
            <div key={event.id} className="timeline-event">
              <div className="event-date">{event.date}</div>
              <div className="event-title">{event.title}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default VerticalTimeline;
