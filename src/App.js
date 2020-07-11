import React from 'react';
import './App.css';
import Card from './components/hobbies';

function App() {
  return (
    <div>
      <Card 
        hobby = "Programming"
        img = "https://prod-discovery.edx-cdn.org/media/course/image/d64fa565-a848-4f82-8c07-f2a2d98c3e4e-1cf577279324.small.jpeg"
        details = "Giving computers instructions about what they should do next"
      />
       <Card 
        hobby = "Gaming"
        img = "https://singularityhub.com/wp-content/uploads/2018/11/young-gamer-playing-video-game_shutterstock_624801452-1068x601.jpg"
        details = "Clapping cheeks and taking names in simulated digital warzones"
      />
       <Card 
        hobby = "Chilling"
        img = "https://townsquare.media/site/442/files/2015/10/netflix-3-1500x1000.jpg?w=980&q=75"
        details = "Watching Forensic Files, movies, and relaxing in general"
      />
    </div>
  );
}

export default App;
