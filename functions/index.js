
const { onRequest } = require("firebase-functions/v2/https");
const { defineSecret } = require('firebase-functions/params');
const axios = require('axios');
const cors = require('cors')({ origin: true });

// Define secrets stored in Google Secret Manager
// These must be set via: firebase functions:secrets:set WEATHER_API_KEY
const WEATHER_API_KEY = defineSecret('WEATHER_API_KEY');

/**
 * Secure proxy for Vung Tau Weather
 * Fetches data from OpenWeatherMap using a hidden API key
 */
exports.getVungTauWeather = onRequest({ 
  secrets: [WEATHER_API_KEY],
  region: 'us-central1', // Ensure this matches your deployment region
  cors: true // Gen 2 simplified CORS
}, async (req, res) => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
      params: {
        q: 'Vung Tau,VN',
        appid: WEATHER_API_KEY.value(),
        units: 'metric'
      }
    });
    
    // Cache for 10 minutes to save API credits and improve performance
    res.set('Cache-Control', 'public, max-age=600, s-maxage=600');
    res.status(200).send(response.data);
  } catch (error) {
    console.error("Weather Proxy Error:", error.message);
    res.status(500).send({ 
      error: "Failed to fetch weather data",
      details: error.response?.data?.message || error.message 
    });
  }
});
