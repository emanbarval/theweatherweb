import React, { useState, useEffect } from 'react';

function WeatherApp() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = 'TU_CLAVE_DE_API';
  
  async function getWeatherData() {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.log('Error al obtener los datos del clima:', error);
    }
  }

  useEffect(() => {
    getWeatherData();
  }, []);

  const handleSearch = () => {
    getWeatherData();
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Ingrese una ciudad"
      />
      <button onClick={handleSearch}>Buscar</button>

      <h1>Web del Clima</h1>

      {weatherData ? (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperatura: {weatherData.main.temp} °C</p>
          <p>Humedad: {weatherData.main.humidity}%</p>
          <p>Descripción: {weatherData.weather[0].description}</p>
        </div>
      ) : (
        <p>Cargando datos del clima...</p>
      )}
    </div>
  );
}

export default WeatherApp;