import { useState } from 'react';
import './App.css';

function App() {

  const [place, setPlace] = useState('');

  const handleFetch = () => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=b837a8d86159446b8b814617223003&q=${place}&aqi=no`)
    .then(response => response.json())
    .then(data => console.log(data));

  }

  return (
    <div className="App">
      <input type="text" value={place} onChange={(e) => setPlace(e.target.value)}/>
      <button onClick={handleFetch}>Search</button>
    </div>
  );
}

export default App;
