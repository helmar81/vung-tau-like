import React from 'react';
import { Translation, Language } from '../types';
import { ACTIVITIES } from '../constants';

interface ToDoProps {
  t: Translation;
  lang: Language;
}

export const ToDo: React.FC<ToDoProps> = ({ t, lang }) => {
  return (
    <div className="pt-24 pb-24 px-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-deep mb-2">{t.things_to_do}</h1>
        <p className="text-gray-500 italic">
          {lang === 'en' ? 'Unforgettable experiences await.' : 'Những trải nghiệm khó quên đang chờ đón.'}
        </p>
      </div>

      <div className="space-y-6">
        {ACTIVITIES.map((activity) => (
          <div 
            key={activity.id}
            className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 group hover:shadow-md transition-all"
          >
            <div className="h-48 relative overflow-hidden">
              <img 
                src={activity.image} 
                alt={activity.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-ocean font-bold text-xs shadow-sm">
                <i className="fas fa-clock mr-1"></i> {activity.duration}
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-deep mb-2">{activity.title}</h3>
              <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                {activity.description[lang]}
              </p>
              
              <div className="flex items-center text-gray-400 text-xs font-bold uppercase tracking-wider">
                <i className="fas fa-map-marker-alt mr-2 text-sunset"></i>
                {activity.location}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};