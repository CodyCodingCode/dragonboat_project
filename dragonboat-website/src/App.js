import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import VerticalTimeline from './components/verticalTimeline';
import EventList from './components/EventList';   // Import EventList component
import ParticipantList from './components/ParticipantList'; // Import ParticipantList component
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Dragon Boat Racing Events</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/participants">Participants</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<VerticalTimeline />} />
            <Route path="/events" element={<EventList />} />
            <Route path="/participants" element={<ParticipantList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
