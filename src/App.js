import { useEffect, useState } from 'react';
import './App.css';
import { BsSearch } from 'react-icons/bs'


function App() {

  const [place, setPlace] = useState('wellington');
  const [placeInfo, setPlaceInfo] = useState({})

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = () => {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=b837a8d86159446b8b814617223003&q=${place}&days=1&aqi=no&alerts=no`)
    .then((response) => response.json())
    .then(data => 
      setPlaceInfo({
        name: data.location.name,
        country: data.location.country,
        celsius: {
          current: data.current.temp_c,
          high: data.forecast.forecastday[0].day.maxtemp_c,
          low: data.forecast.forecastday[0].day.mintemp_c
        },
        condition: data.current.condition.text
      })
    );
    setPlace("");
  };

  // console.log(placeInfo)

  return (
    <div className="app">

      <div className="search-input">
        <input type="text" value={place} onChange={(e) => setPlace(e.target.value)}/>
        <BsSearch onClick={handleFetch} fontSize="large" className="search-button" />
        {/* <button >Search</button> */}
      </div>

      <div className="weather-container">
        <div className="top-part">
          <h1>{placeInfo.celsius?.current}°C</h1>
          <div className="condition-high-low">
            <h1>{placeInfo.condition}</h1>
            <h1>High:  {placeInfo.celsius?.high}°C</h1>
            <h1>Low:  {placeInfo.celsius?.low}°C</h1>
          </div>
        </div>
        <h2>{placeInfo.name}, {placeInfo.country}</h2>
      </div>

    </div>
  );
}

export default App;
