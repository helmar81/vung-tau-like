export type Language = 'en' | 'vi';

export interface Place {
  id: string;
  name: string;
  category: 'restaurant' | 'coffee' | 'nightlife' | 'massage'  | 'accomodation'  | 'services';
  description: {
    en: string;
    vi: string;
  };
  address: string;
  image: string;
  rating: number;
  phoneNumber?: string; // <--- ADD THIS LINE
  openingHours?: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

// ... rest of the file remains the same
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
    // ... keep existing translations
    nav_home: string;
    nav_guide: string;
    nav_todo: string;
    nav_ai: string;
    discover_heading: string;
    discover_sub: string;
    guide: string;
    things_to_do: string;
    search_placeholder: string;
    popular_spots: string;
    view_all: string;
    ai_guide: string;
    nearby: string;
    guide_subtitle: string;
    local_tip: string;
    local_tip_desc: string;
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

// Add this to your existing types.ts file

export interface Activity {
  id: string;
  title: string;
  description: {
    en: string;
    vi: string;
  };
  image: string;
  duration: string;
  location: string;
  price?: string;
}