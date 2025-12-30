
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PLACES } from '../constants';
import { Language, Translation } from '../types';

interface PlaceDetailProps {
  lang: Language;
  t: Translation;
}

export const PlaceDetail: React.FC<PlaceDetailProps> = ({ lang, t }) => {
  const { placeId } = useParams<{ placeId: string }>();
  const navigate = useNavigate();
  const place = PLACES.find(p => p.id === placeId);

  if (!place) return (
    <div className="p-20 text-center flex flex-col items-center">
      <i className="fas fa-search text-4xl text-gray-200 mb-4"></i>
      <h2 className="text-xl font-bold text-gray-400">{t.place_not_found}</h2>
      <button onClick={() => navigate(-1)} className="mt-4 text-ocean font-bold underline">Go Back</button>
    </div>
  );

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.address + " Vung Tau")}`;

  return (
    <div className="pb-24">
      {/* Header Image */}
      <div className="relative h-[45vh] w-full">
        <img 
          src={place.image} 
          className="w-full h-full object-cover" 
          alt={place.name} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <button 
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 w-10 h-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white z-20"
        >
          <i className="fas fa-arrow-left"></i>
        </button>
      </div>

      {/* Content */}
      <div className="relative -mt-10 bg-sandy rounded-t-[3rem] px-6 pt-10 pb-10 min-h-[50vh]">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-sunset font-bold uppercase tracking-widest text-[10px]">{place.category}</span>
            <h1 className="text-3xl font-bold text-deep mt-1 leading-tight">{place.name}</h1>
          </div>
          <div className="bg-white px-3 py-2 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-1">
            <i className="fas fa-star text-sunset text-sm"></i>
            <span className="font-bold text-gray-800">{place.rating}</span>
          </div>
        </div>

        <div className="space-y-6">
          <section>
            <h4 className="text-lg font-bold text-gray-800 mb-2">{t.about}</h4>
            <p className="text-gray-600 leading-relaxed">
              {place.description[lang]}
            </p>
          </section>

          <section className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
            <h4 className="font-bold text-gray-800 mb-3 flex items-center">
              <i className="fas fa-location-arrow text-ocean mr-2"></i>
              {t.location}
            </h4>
            <a 
              href={mapsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block group"
            >
              <p className="text-gray-600 text-sm mb-4 group-hover:text-ocean transition-colors">
                {place.address}
              </p>
              <div className="w-full py-3 bg-ocean text-white rounded-2xl font-bold text-center flex items-center justify-center space-x-2 active:scale-95 transition-transform">
                <i className="fas fa-map-marked-alt"></i>
                <span>{t.open_in_maps}</span>
              </div>
            </a>
          </section>

          <section className="grid grid-cols-2 gap-4">
             <div className="bg-white p-4 rounded-3xl border border-gray-100 text-center">
                <i className="fas fa-clock text-sunset mb-2"></i>
                <p className="text-[10px] text-gray-500 uppercase tracking-tighter">{t.opening_hours}</p>
                <p className="text-sm font-bold text-gray-800">8:00 - 22:00</p>
             </div>
             <div className="bg-white p-4 rounded-3xl border border-gray-100 text-center">
                <i className="fas fa-phone text-ocean mb-2"></i>
                <p className="text-[10px] text-gray-500 uppercase tracking-tighter">{t.contact}</p>
                <p className="text-sm font-bold text-gray-800">{t.available}</p>
             </div>
          </section>
        </div>
      </div>
    </div>
  );
};
