const express = require('express');
//const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

app.use(cors({ origin: 'http://localhost:3001' }));

// Carga las variables de entorno desde el archivo .env
require('dotenv').config();

app.get('/weather', async (req, res) => {
  try {
    const city = req.query.city;
    const apiKey = process.env.OPENWEATHERMAP_API_KEY; // Reemplaza con tu propia API key de openweathermap

    const { default: fetch } = await import('node-fetch');
    console.log(city)
    console.log(apiKey)

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
    const data = await response.json();
    console.log(data)
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocurrió un error' });
  }
});

app.listen(port, () => {
  console.log(`Servidor Node.js escuchando en http://localhost:${port}`);
});