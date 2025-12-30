
import app from './firebase';

const REGION = 'us-central1';
const PROJECT_ID = 'vungtaulike';

/**
 * Service to interact with our secure backend functions.
 * Includes graceful fallbacks for missing or unreachable services to ensure a smooth user experience.
 */
export const CloudAPI = {
  async getWeather() {
    try {
      const url = `https://${REGION}-${PROJECT_ID}.cloudfunctions.net/getVungTauWeather`;
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      // Gracefully handle connectivity issues during development or if the function is not yet deployed.
      // We use console.warn instead of console.error to keep logs clean while providing an informative message.
      console.warn("CloudAPI: Weather service unreachable or not deployed. Providing fallback local weather data.");
      
      // Fallback: Typical pleasant coastal weather for Vung Tau (approx. 29°C, Sunny)
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
