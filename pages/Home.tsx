import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Translation } from "../types";
import { PLACES } from "../constants";
import { CloudAPI } from "../services/api";

interface HomeProps {
  t: Translation;
  lang: "en" | "vi";
  onViewDetails: (id: string) => void;
}

export const Home: React.FC<HomeProps> = ({ t, lang, onViewDetails }) => {
  const navigate = useNavigate();
  const [weather, setWeather] = useState<{ temp: number; icon: string } | null>(
    null
  );

  // Defensive translation object
  const translation: Translation = {
    ...t,
    discover_heading: t.discover_heading ?? "",
    discover_sub: t.discover_sub ?? "",
    get_started: t.get_started ?? "",
    popular_spots: t.popular_spots ?? "",
    view_all: t.view_all ?? ""
  };

  // Weather fetch with caching
  useEffect(() => {
    let ignore = false;

    const fetchWeather = async () => {
      try {
        const cached = localStorage.getItem("weather-cache");
        const cachedTime = localStorage.getItem("weather-cache-time");

        if (cached && cachedTime && Date.now() - Number(cachedTime) < 600000) {
          setWeather(JSON.parse(cached));
          return;
        }

        const data = await CloudAPI.getWeather();
        if (!ignore && data?.main) {
          const w = {
            temp: Math.round(data.main.temp),
            icon: data.weather[0].icon
          };
          setWeather(w);
          localStorage.setItem("weather-cache", JSON.stringify(w));
          localStorage.setItem("weather-cache-time", Date.now().toString());
        }
      } catch (e) {
        console.error("Weather fetch failed", e);
      }
    };

    fetchWeather();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="pb-24">
      {/* HERO SECTION */}
      <div className="relative h-[70vh] w-full overflow-hidden flex items-end pb-20 px-6 bg-deep">

        {/* LCP IMAGE */}
        <img
          src="/assets/vt3.avif"
          alt="Vung Tau Coastline"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          width="1920"
          height="1080"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

        <div className="relative z-10 w-full animate-fadeIn">

          {/* WEATHER */}
          <div className="min-h-[3.5rem] flex items-center">
            {weather ? (
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 mb-6 animate-slideDown">
                <img
                  src={`https://openweathermap.org/img/wn/${weather.icon}.png`}
                  alt="weather"
                  width="32"
                  height="32"
                  className="w-8 h-8"
                />
                <span className="text-white font-bold text-sm">
                  Vung Tau: {weather.temp}°C
                </span>
              </div>
            ) : (
              <div className="h-8 mb-6"></div>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-2xl max-w-lg">
            {translation.discover_heading}
          </h1>

          <p className="mt-4 text-white/90 text-lg font-medium drop-shadow-lg max-w-sm">
            {translation.discover_sub}
          </p>

          <button
            onClick={() => navigate("/get-started")}
            className="mt-8 bg-sunset hover:bg-orange-600 text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center space-x-2"
            aria-label={translation.get_started}
          >
            <span>{translation.get_started}</span>

            <svg
              width="10"
              height="10"
              viewBox="0 0 320 512"
              fill="currentColor"
              className="text-xs"
            >
              <path d="M285.5 273l-194 194c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l154-154-154-154c-9.4-9.4-9.4-24.6 0-33.9L57.6 46.5c9.4-9.4 24.6-9.4 33.9 0l194 194c9.5 9.4 9.5 24.6 0 34z" />
            </svg>
          </button>
        </div>
      </div>

      {/* POPULAR SPOTS */}
      <div className="px-6 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-deep">
              {translation.popular_spots}
            </h2>
            <div className="h-1 w-12 bg-sunset rounded-full mt-1"></div>
          </div>

          <button
            onClick={() => navigate("/guide")}
            className="text-ocean text-sm font-bold bg-ocean/5 px-4 py-2 rounded-xl hover:bg-ocean/10 transition-colors"
          >
            {translation.view_all}
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
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="400"
                />

                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-2xl text-sunset font-bold text-sm shadow-lg flex items-center">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 576 512"
                    fill="currentColor"
                    className="mr-1.5"
                  >
                    <path d="M316.9 17.8L367 150.2l140.4 20.4c26.2 3.8 36.7 36 17.7 54.6L417 312.3l24 140c4.5 26.3-23.2 46-46.4 33.7L288 439.6l-126.6 66.4c-23.2 12.2-50.9-7.4-46.4-33.7l24-140L51 225.2c-19-18.6-8.5-50.8 17.7-54.6L209 150.2l50.1-132.4c10-26.3 48-26.3 58 0z" />
                  </svg>
                  {place.rating}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-ocean transition-colors">
                  {place.name}
                </h3>

                <p className="text-gray-500 text-sm mt-1.5 flex items-center font-medium">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 384 512"
                    fill="currentColor"
                    className="mr-2 text-ocean/60"
                  >
                    <path d="M168 0C75.1 0 0 75.1 0 168c0 87.3 144 312 168 344 24-32 168-256.7 168-344C336 75.1 260.9 0 168 0zm0 256c-48.5 0-88-39.5-88-88s39.5-88 88-88 88 39.5 88 88-39.5 88-88 88z" />
                  </svg>
                  {place.address}
                </p>

                <p className="text-gray-600 mt-4 text-sm leading-relaxed line-clamp-2">
                  {typeof place.description[lang] === "string"
                    ? place.description[lang]
                    : ""}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

