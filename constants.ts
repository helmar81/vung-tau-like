
import { Place, Category, Translation } from './types';

export const CATEGORIES: Category[] = [
  {
    id: '1', icon: 'fa-utensils', type: 'restaurant', label: { en: 'Restaurants', vi: 'Nhà hàng' },
    image: undefined
  },
  {
    id: '2', icon: 'fa-coffee', type: 'coffee', label: { en: 'Coffee Shops', vi: 'Quán cà phê' },
    image: undefined
  },
  {
    id: '3', icon: 'fa-camera', type: 'attraction', label: { en: 'Attractions', vi: 'Tham quan' },
    image: undefined
  },
  {
    id: '4', icon: 'fa-moon', type: 'nightlife', label: { en: 'Nightlife', vi: 'Giải trí đêm' },
    image: undefined
  },
  { 
    id: '5', 
    icon: 'fa-spa', 
    type: 'massage', 
    label: { en: 'Massage', vi: 'Massage' },
    image: '' // Add this line
  },
];

export const PLACES: Place[] = [
  {
    id: 'p1',
    name: 'Ganh Hao Restaurant',
    category: 'restaurant',
    description: {
      en: 'Famous seafood restaurant with stunning ocean views and fresh local ingredients.',
      vi: 'Nhà hàng hải sản nổi tiếng với tầm nhìn ra biển tuyệt đẹp và nguyên liệu địa phương tươi ngon.'
    },
    address: '03 Tran Phu, Ward 5, Vung Tau',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800',
    rating: 4.5,
    coordinates: { lat: 10.358, lng: 107.065 }
  },
  {
    id: 'p2',
    name: 'SOHO Coffee',
    category: 'coffee',
    description: {
      en: 'Minimalist coffee shop perfect for sunset watching with a modern aesthetic.',
      vi: 'Quán cà phê tối giản hoàn hảo để ngắm hoàng hôn với thẩm mỹ hiện đại.'
    },
    address: '66 Ha Long, Ward 2, Vung Tau',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
    coordinates: { lat: 10.334, lng: 107.078 }
  },
  {
    id: 'p3',
    name: 'Christ the King',
    category: 'attraction',
    description: {
      en: 'Giant Jesus statue on Nho Mountain offering panoramic views of the city.',
      vi: 'Tượng Chúa Kitô Vua khổng lồ trên núi Nhỏ mang đến tầm nhìn toàn cảnh thành phố.'
    },
    address: 'Thuy Van, Ward 2, Vung Tau',
   image: '/hung.jpeg',
    rating: 4.7,
    coordinates: { lat: 10.327, lng: 107.084 }
  },
  {
    id: 'p4',
    name: 'Vung Tau Lighthouse',
    category: 'attraction',
    description: {
      en: 'Historic lighthouse built in 1862, providing an iconic landmark and historic feel.',
      vi: 'Hải đăng lịch sử được xây dựng vào năm 1862, là một cột mốc mang đậm tính biểu tượng.'
    },
    address: 'Nho Mountain, Vung Tau',
    image: '/t.jpg',
    rating: 4.6,
    coordinates: { lat: 10.332, lng: 107.075 }
  },

 {
    id: 'p5',
    name: 'Vung Tau Lighthouse',
    category: 'massage',
    description: {
      en: 'Historic lighthouse built in 1862, providing an iconic landmark and historic feel.',
      vi: 'Hải đăng lịch sử được xây dựng vào năm 1862, là một cột mốc mang đậm tính biểu tượng.'
    },
    address: 'Wellne',
    image: '/dance.webp',
    rating: 4.6,
    coordinates: { lat: 10.332, lng: 107.075 }
  },


  
  
   {
    id: 'p7',
    name: 'Girl',
    category: 'nightlife',
    description: {
      en: 'Historic lighthouse built in 1862, providing an iconic landmark and historic feel.',
      vi: 'Hải đăng lịch sử được xây dựng vào năm 1862, là một cột mốc mang đậm tính biểu tượng.'
    },
    address: 'Wellne',
    image: '/n.jpg',
    rating: 4.6,
    coordinates: { lat: 10.332, lng: 107.075 }
  },
  
];

export const TRANSLATIONS: Record<'en' | 'vi', Translation> = {
  en: {
    nav_home: 'Home',
    nav_guide: 'Guide',
    nav_todo: 'To Do',
    nav_ai: 'AI',
    discover_heading: 'Discover the lovely seaside town in Vietnam',
    discover_sub: 'Experience Vung Tau like a local with our curated guides.',
    guide: 'Travel Guide',
    things_to_do: 'Things to Do',
    search_placeholder: 'Search for places...',
    popular_spots: 'Popular Spots',
    view_all: 'View All',
    ai_guide: 'AI Concierge',
    nearby: 'Nearby',
    guide_subtitle: 'Curated experiences for every traveler.',
    local_tip: 'Local Tip',
    local_tip_desc: 'Visit Back Beach (Bãi Sau) early morning for the most serene atmosphere.',
    explore_details: 'Explore Details',
    no_places_found: 'No places found in this category yet.',
    place_not_found: 'Place not found',
    about: 'About',
    location: 'Location',
    open_in_maps: 'Open in Google Maps',
    opening_hours: 'Opening Hours',
    contact: 'Contact',
    available: 'Available',
    get_started: 'Get Started',
    get_started_title: 'Welcome to Vung Tau',
    get_started_intro: 'Vung Tau is the perfect weekend getaway from Ho Chi Minh City! While it gets pretty busy on weekends and holidays with beach-loving locals and expats, you\'ll find it nice and peaceful during the week. This coastal gem sits on a peninsula with ocean views on three sides - talk about Instagram-worthy! The fresh sea breeze is a welcome break from Saigon\'s heat.',
    weather_title: 'The Perfect Climate',
    weather_desc: 'Weather-wise, you\'re in for a treat! It never dips below 23°C, and if you\'re planning a trip, aim for December to June when it\'s mostly rain-free.',
    living_title: 'Budget-Friendly Paradise',
    living_desc: 'Need a place? You can snag an apartment in a homestay for under $200, utilities included! The city\'s a hit with Aussies, Brits, and Americans who love the warm weather and budget-friendly living.',
    community_title: 'Vibrant Expat Scene',
    community_desc: 'You\'ll meet oil industry workers, international teachers, retirees, and tourists all living that laid-back life. The Scandinavian crew and other foreigners regularly meet up at local bars, and the locals are super friendly, always keen to practice their English with visitors.',
    logistics_title: 'Everything at Your Doorstep',
    logistics_desc: 'Home to about 400,000 people, Vung Tau\'s just a 2-hour drive from Ho Chi Minh City. Everything you need is right at your doorstep. You can cycle anywhere in the city in under 30 minutes! Most convenience stores are open till midnight.',
    start_exploring: 'Start Exploring'
  },
  vi: {
    nav_home: 'Trang chủ',
    nav_guide: 'Cẩm nang',
    nav_todo: 'Hoạt động',
    nav_ai: 'Trợ lý AI',
    discover_heading: 'Khám phá thành phố biển xinh đẹp tại Việt Nam',
    discover_sub: 'Trải nghiệm Vũng Tàu như người bản địa với hướng dẫn từ chúng tôi.',
    guide: 'Cẩm nang',
    things_to_do: 'Hoạt động',
    search_placeholder: 'Tìm kiếm địa điểm...',
    popular_spots: 'Địa điểm phổ biến',
    view_all: 'Xem tất cả',
    ai_guide: 'Trợ lý AI',
    nearby: 'Gần đây',
    guide_subtitle: 'Những trải nghiệm được chọn lọc cho mọi du khách.',
    local_tip: 'Lời khuyên',
    local_tip_desc: 'Hãy ghé thăm Bãi Sau vào sáng sớm để tận hưởng bầu không khí thanh bình nhất.',
    explore_details: 'Khám phá chi tiết',
    no_places_found: 'Chưa tìm thấy địa điểm nào trong danh mục này.',
    place_not_found: 'Không tìm thấy địa điểm',
    about: 'Giới thiệu',
    location: 'Vị trí',
    open_in_maps: 'Mở trong Google Maps',
    opening_hours: 'Giờ mở cửa',
    contact: 'Liên hệ',
    available: 'Có sẵn',
    get_started: 'Khám phá ngay',
    get_started_title: 'Chào mừng đến với Vũng Tàu',
    get_started_intro: 'Vũng Tàu là điểm đến cuối tuần hoàn hảo từ TP.HCM! Dù khá đông đúc vào cuối tuần và lễ tết với người dân địa phương và người nước ngoài yêu biển, bạn sẽ thấy nơi đây thật yên bình vào các ngày trong tuần. Viên ngọc ven biển này nằm trên một bán đảo với tầm nhìn ra đại dương từ ba phía - cực kỳ lý tưởng để chụp ảnh! Những làn gió biển trong lành là sự giải nhiệt tuyệt vời khỏi cái nóng của Sài Gòn.',
    weather_title: 'Khí hậu Lý tưởng',
    weather_desc: 'Về thời tiết, bạn sẽ được tận hưởng điều tuyệt vời nhất! Nhiệt độ không bao giờ xuống dưới 23°C. Nếu bạn đang lên kế hoạch cho một chuyến đi, hãy nhắm vào khoảng thời gian từ tháng 12 đến tháng 6 khi trời hầu như không có mưa.',
    living_title: 'Thiên đường Giá rẻ',
    living_desc: 'Cần một nơi ở? Bạn có thể thuê một căn hộ trong homestay với giá dưới 200 USD, đã bao gồm điện nước! Thành phố này rất được ưa chuộng bởi người Úc, Anh và Mỹ, những người yêu thích thời tiết ấm áp và mức sống hợp lý.',
    community_title: 'Cộng đồng Sôi động',
    community_desc: 'Bạn sẽ gặp gỡ nhân viên ngành dầu khí, giáo viên quốc tế, người về hưu và khách du lịch. Nhóm người Scandinavia và những người nước ngoài khác thường xuyên gặp gỡ tại các quán bar địa phương, và người dân nơi đây cực kỳ thân thiện, luôn sẵn lòng thực hành tiếng Anh với du khách.',
    logistics_title: 'Mọi thứ ngay ngưỡng cửa',
    logistics_desc: 'Là nơi sinh sống của khoảng 400.000 người, Vũng Tàu chỉ cách TP.HCM 2 giờ lái xe. Bạn có thể đạp xe đi bất cứ đâu trong thành phố chỉ trong chưa đầy 30 phút! Hầu hết các cửa hàng tiện lợi đều mở cửa đến nửa đêm.',
    start_exploring: 'Khám phá ngay'
  }
};
