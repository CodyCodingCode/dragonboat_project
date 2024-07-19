import React from 'react';
import VerticalTimeline from './components/VerticalTimeline';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dragon Boat Racing Events</h1>
      </header>
      <main>
        <VerticalTimeline />
      </main>
    </div>
  );
};

export default App;
