
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Translation, Place } from '../types';
import { PLACES } from '../constants';
import { CloudAPI } from '../services/api';

interface HomeProps {
  t: Translation;
  lang: 'en' | 'vi';
  onViewDetails: (id: string) => void;
}

export const Home: React.FC<HomeProps> = ({ t, lang, onViewDetails }) => {
  const navigate = useNavigate();
  const [weather, setWeather] = useState<{ temp: number; icon: string } | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await CloudAPI.getWeather();
      if (data && data.main) {
        setWeather({
          temp: Math.round(data.main.temp),
          icon: data.weather[0].icon
        });
      }
    };
    fetchWeather();
  }, []);

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full overflow-hidden flex items-end pb-20 px-6 bg-deep">
        <img 
          src="./vt.webp" 
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          alt="Vung Tau Coastline"
          loading="eager"
        />
        {/* Gradient Overlay for high contrast accessibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        
        <div className="relative z-10 w-full animate-fadeIn">
          {/* Weather Badge */}
          {weather && (
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 mb-6 animate-slideDown">
              <img 
                src={`https://openweathermap.org/img/wn/${weather.icon}.png`} 
                className="w-8 h-8" 
                alt="weather"
              />
              <span className="text-white font-bold text-sm">Vung Tau: {weather.temp}°C</span>
            </div>
          )}

          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-2xl max-w-lg">
            {t.discover_heading}
          </h1>
          <p className="mt-4 text-white/90 text-lg font-medium drop-shadow-lg max-w-sm">
            {t.discover_sub}
          </p>
          <button 
            onClick={() => navigate('/get-started')}
            className="mt-8 bg-sunset hover:bg-orange-600 text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center space-x-2"
          >
            <span>{t.get_started}</span>
            <i className="fas fa-chevron-right text-xs"></i>
          </button>
        </div>
      </div>

      {/* Popular Spots */}
      <div className="px-6 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-deep">{t.popular_spots}</h2>
            <div className="h-1 w-12 bg-sunset rounded-full mt-1"></div>
          </div>
          <button 
            onClick={() => navigate('/guide')}
            className="text-ocean text-sm font-bold bg-ocean/5 px-4 py-2 rounded-xl hover:bg-ocean/10 transition-colors"
          >
            {t.view_all}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PLACES.slice(0, 4).map((place) => (
            <div 
              key={place.id}
              onClick={() => onViewDetails(place.id)}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={place.image} 
                  alt={place.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-2xl text-sunset font-bold text-sm shadow-lg flex items-center">
                  <i className="fas fa-star mr-1.5"></i>{place.rating}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-ocean transition-colors">{place.name}</h3>
                    <p className="text-gray-500 text-sm mt-1.5 flex items-center font-medium">
                      <i className="fas fa-location-dot mr-2 text-ocean/60"></i>
                      {place.address}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mt-4 text-sm leading-relaxed line-clamp-2">
                  {place.description[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

       
        </div>
      
  
  );
};
