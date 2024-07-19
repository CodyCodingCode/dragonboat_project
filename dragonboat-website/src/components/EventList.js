import React, { useEffect, useState } from 'react';
import { fetchEvents } from '../api';  // Ensure correct import

const EventList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetchEvents()
            .then(data => setEvents(data))
            .catch(error => console.error('Error fetching events:', error));
    }, []);

    return (
        <div>
            <h1>Event List</h1>
            <ul>
                {events.length > 0 ? (
                    events.map(event => (
                        <li key={event.id}>{event.name}</li>
                    ))
                ) : (
                    <p>No events available.</p>
                )}
            </ul>
        </div>
    );
};

export default EventList;
