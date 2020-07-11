import React from 'react';
import './App.css';
import Card from './components/hobbies';

function App() {
  return (
    <div>
      <Card 
        hobby = "Programming"
        img = "blahblah.url"
        details = "Giving computers instructions about what they should do next"
      />
       <Card 
        hobby = "Gaming"
        img = "blahblah.url"
        details = "Clapping cheeks and taking names in simulated digital warzones"
      />
       <Card 
        hobby = "Chilling"
        img = "blahblah.url"
        details = "Watching Forensic Files, movies, and relaxing in general"
      />
    </div>
  );
}

export default App;
