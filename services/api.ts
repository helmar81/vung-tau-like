// src/services/api.ts

// Access the key defined in vite.config.ts -> define
const WEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const CloudAPI = {
  async getWeather() {
    try {
      // 1. Check if key exists
      if (!WEATHER_API_KEY) {
        console.warn("CloudAPI: Missing OPENWEATHER_API_KEY. Using fallback data.");
        throw new Error("Missing API Key");
      }

      // 2. Direct fetch to OpenWeatherMap
      const url = `${BASE_URL}/weather?q=Vung Tau&units=metric&appid=${WEATHER_API_KEY}`;
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Weather API error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.warn("CloudAPI: Weather service unavailable. Providing fallback local weather data.");
      
      // Fallback: Default Vung Tau weather (Sunny, ~29°C)
      // This ensures the UI never breaks even if the API fails
      return {
        main: {
          temp: 29.5,
          humidity: 70
        },
        weather: [
          {
            main: "Clear",
            description: "sunny",
            icon: "01d"
          }
        ],
        name: "Vung Tau"
      };
    }
  }
};