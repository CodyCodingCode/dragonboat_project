import React, { useState } from 'react';
import Timeline from 'react-calendar-timeline';
import 'react-calendar-timeline/lib/Timeline.css';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

const TimelineComponent = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      group: 1,
      title: 'Initial Event',
      start_time: moment().add(-12, 'hour'),
      end_time: moment().add(-6, 'hour'),
    },
  ]);

  const [newEventTitle, setNewEventTitle] = useState('');
  const [newEventStart, setNewEventStart] = useState('');
  const [newEventEnd, setNewEventEnd] = useState('');

  const groups = [{ id: 1, title: 'Dragon Boat Events' }];

  const handleAddEvent = () => {
    const newItem = {
      id: uuidv4(),
      group: 1,
      title: newEventTitle,
      start_time: moment(newEventStart),
      end_time: moment(newEventEnd),
    };

    setItems([...items, newItem]);
    setNewEventTitle('');
    setNewEventStart('');
    setNewEventEnd('');
  };

  return (
    <div>
      <h2>Interactive Timeline</h2>
      <div>
        <input
          type="text"
          placeholder="Event Title"
          value={newEventTitle}
          onChange={(e) => setNewEventTitle(e.target.value)}
        />
        <input
          type="datetime-local"
          value={newEventStart}
          onChange={(e) => setNewEventStart(e.target.value)}
        />
        <input
          type="datetime-local"
          value={newEventEnd}
          onChange={(e) => setNewEventEnd(e.target.value)}
        />
        <button onClick={handleAddEvent}>Add Event</button>
      </div>
      <Timeline
        groups={groups}
        items={items}
        defaultTimeStart={moment().add(-12, 'hour')}
        defaultTimeEnd={moment().add(12, 'hour')}
      />
    </div>
  );
};

export default TimelineComponent;
