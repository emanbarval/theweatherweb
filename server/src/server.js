const express = require('express');
const app = express();

// Carga las variables de entorno desde el archivo .env
require('dotenv').config();

// Ruta para obtener los datos del clima
app.get('/weather', async (req, res) => {
  try {
    const apiKey = process.env.OPENWEATHERMAP_API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=${apiKey}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    // Devuelve los datos del clima al cliente
    res.json(data);
  } catch (error) {
    console.log('Error al obtener los datos del clima:', error);
    res.status(500).json({ error: 'Error al obtener los datos del clima' });
  }
});

// Inicia el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});