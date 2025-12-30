
export type Language = 'en' | 'vi';

export interface Place {
  id: string;
  name: string;
  category: 'restaurant' | 'coffee' | 'nightlife' | 'massage' | 'attraction';
  description: {
    en: string;
    vi: string;
  };
  address: string;
  image: string;
  rating: number;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Category {
  image: any;
  id: string;
  icon: string;
  label: {
    en: string;
    vi: string;
  };
  type: Place['category'];
}

export interface Translation {
  // Navigation
  nav_home: string;
  nav_guide: string;
  nav_todo: string;
  nav_ai: string;
  
  // Home/General
  discover_heading: string;
  discover_sub: string;
  guide: string;
  things_to_do: string;
  search_placeholder: string;
  popular_spots: string;
  view_all: string;
  ai_guide: string;
  nearby: string;
  
  // Guide Page
  guide_subtitle: string;
  local_tip: string;
  local_tip_desc: string;
  
  // Category/Detail
  explore_details: string;
  no_places_found: string;
  place_not_found: string;
  about: string;
  location: string;
  open_in_maps: string;
  opening_hours: string;
  contact: string;
  available: string;
  get_started: string;

  // Get Started Page Content
  get_started_title: string;
  get_started_intro: string;
  weather_title: string;
  weather_desc: string;
  living_title: string;
  living_desc: string;
  community_title: string;
  community_desc: string;
  logistics_title: string;
  logistics_desc: string;
  start_exploring: string;
}
