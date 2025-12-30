
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Place, Translation, Language } from '../types';
import { PLACES, CATEGORIES } from '../constants';

interface CategoryListProps {
  t: Translation;
  lang: Language;
}

export const CategoryList: React.FC<CategoryListProps> = ({ t, lang }) => {
  const { categoryType } = useParams<{ categoryType: string }>();
  const navigate = useNavigate();
  
  const filteredPlaces = PLACES.filter(p => p.category === categoryType);
  const categoryInfo = CATEGORIES.find(c => c.type === categoryType);

  return (
    <div className="pt-24 pb-24 px-6">
      <div className="flex items-center space-x-3 mb-6">
        <button 
          onClick={() => navigate('/guide')}
          className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-ocean"
        >
          <i className="fas fa-arrow-left"></i>
        </button>
        <h1 className="text-2xl font-bold text-deep uppercase tracking-tight">
          {categoryInfo?.label[lang] || t.guide}
        </h1>
      </div>

      <div className="space-y-6">
        {filteredPlaces.length > 0 ? (
          filteredPlaces.map((place) => (
            <div 
              key={place.id}
              onClick={() => navigate(`/details/${place.id}`)}
              className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 flex flex-col cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className="h-48 relative">
                <img 
                  src={place.image} 
                  alt={place.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sunset font-bold text-xs">
                  <i className="fas fa-star mr-1"></i> {place.rating}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800">{place.name}</h3>
                <p className="text-gray-500 text-sm flex items-center mt-1">
                  <i className="fas fa-map-marker-alt text-ocean mr-2"></i>
                  {place.address}
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-ocean font-bold text-sm">{t.explore_details}</span>
                  <i className="fas fa-chevron-right text-gray-300 text-xs"></i>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-20 text-gray-400">
            <i className="fas fa-folder-open text-4xl mb-4 opacity-20"></i>
            <p>{t.no_places_found}</p>
          </div>
        )}
      </div>
    </div>
  );
};
