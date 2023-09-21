import React, { useState } from 'react';
import './App.css';
import SelectApp from './SelectApp';

function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);

  const handleSubmit = async (selectedCity) => {
    try {
      const response = await fetch(`http://localhost:3000/weather?city=${selectedCity}`);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Weather App</h1>
      <SelectApp onSubmit={handleSubmit} />
      {weatherData && (
        <div className="weather-info">
          <h2>{weatherData.name}</h2>
          <div className="weather-icon" style={{ background: `url('http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png') lightblue no-repeat`, backgroundSize: '100%' }}></div>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;