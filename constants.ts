


// Import the new Activity type
import { Place, Category, Translation, Activity } from './types'; 

// ... (keep your existing CATEGORIES and PLACES arrays) ...

// Add this new array at the bottom
export const ACTIVITIES: Activity[] = [
  {
    id: 'a1',
    title: 'Hike to the Lighthouse',
    description: {
      en: 'A scenic walk up Nho Mountain to the historic lighthouse. Best done in the early morning.',
      vi: 'Đi bộ lên núi Nhỏ để ngắm hải đăng lịch sử. Nên đi vào sáng sớm.'
    },
    image: './walk.webp',
    duration: '1-2 hours',
    location: 'Nho Mountain'
  },
  {
    id: 'a2',
    title: 'Kitesurfing Lesson',
    description: {
      en: 'Learn to kitesurf at Back Beach, one of the best spots in Vietnam for wind sports.',
      vi: 'Học lướt ván diều tại Bãi Sau, một trong những điểm tốt nhất Việt Nam cho các môn thể thao gió.'
    },
    image: './surf.webp',
    duration: '3 hours',
    location: 'Back Beach'
  },
  {
    id: 'a3',
    title: 'Sunset at Front Beach',
    description: {
      en: 'Relax in the park or rent a bicycle to watch the sun go down over the ocean.',
      vi: 'Thư giãn trong công viên hoặc thuê xe đạp để ngắm hoàng hôn trên biển.'
    },
   image: './sunset.webp',
    duration: '1 hour',
    location: 'Front Beach Park'
  },
  {
    id: 'a4',
    title: 'Visit the Pig Hill (Doi Con Heo)',
    description: {
      en: 'A rugged, rocky hill offering raw and panoramic views of Back Beach.',
      vi: 'Một ngọn đồi đá hoang sơ mang lại tầm nhìn toàn cảnh ra Bãi Sau.'
    },
    image: './vt.webp',
    duration: '45 mins',
    location: 'Bai Sau Area'
  },

   {
    id: 'a4',
    title: 'Climb Christ the King',
    description: {
      en: 'Giant Jesus statue on Nho Mountain offering panoramic views of the city.',
      vi: 'Tượng Chúa Kitô Vua khổng lồ trên núi Nhỏ mang đến tầm nhìn toàn cảnh thành phố.'
    },
    image: './hung.jpeg',
    duration: '90 mins',
    location: 'Bai Sau Area'
  },

  {
    id: 'a4',
    title: 'walk to the island',
    description: {
      en: 'Checking out Hon Ba Temple before the water gets high.',
      vi: 'Tham quan chùa Hon Ba trước khi nước dâng cao.'
    },
    image: './island.webp',
    duration: '2 hours',
    location: 'Bai Sau Area'
  }
];

export const CATEGORIES: Category[] = [
  {
    id: '1',
    icon: 'utensils',
    type: 'restaurant',
    label: { en: 'Restaurants', vi: 'Nhà hàng' },
    image: undefined
  },
  {
    id: '2',
    icon: 'coffee',
    type: 'coffee',
    label: { en: 'Coffee Shops', vi: 'Quán cà phê' },
    image: undefined
  },
  {
    id: '3',
    icon: 'briefcase',
    type: 'services',
    label: { en: 'Services', vi: 'Dịch vụ' },
    image: undefined
  },
  {
    id: '4',
    icon: 'moon',
    type: 'nightlife',
    label: { en: 'Nightlife', vi: 'Giải trí đêm' },
    image: undefined
  },
  {
    id: '5',
    icon: 'spa',
    type: 'massage',
    label: { en: 'Massage', vi: 'Massage' },
    image: ''
  },

  {
    id: '6',
    icon: 'Bed',
    type: 'accomodation',
    label: { en: 'Accomodation', vi: 'Chỗ ở' },
    image: undefined
  }
];

export const PLACES: Place[] = [
  
   {
    id: 'pancacke',
    name: 'Banh Khot 14',
    category: 'restaurant',
    description: {
      en: 'traditional Banh Khot, consistently drawing significant patronage.',
      vi: ' Bánh Khot truyền thống luôn thu hút lượng khách hàng đáng kể. '
    },
    address: '14 Hoàng Hoa Thám, Phường 3, Vũng Tàu, Bà Rịa - Vũng Tàu, Vietnam',
   image: '../assets/khot14.webp',
    rating: 4.2,

    phoneNumber: '+84 02543859709',
    openingHours: '08:00 - 19:00',
    coordinates: { lat: 10.3406927, lng: 107.0763814 }
  },

  {
    id: 'german',
    name: 'Schnitzel House Helmut',
    category: 'restaurant',
    description: {
      en: 'enjoy a generous portion of crispy Schnitzel accompanied by fresh garden salad, golden fries, and a refreshing cold beer 🍺',
      vi: ' Thưởng thức phần Schnitzel giòn tan kèm salad rau tươi, khoai tây chiên vàng ươm và một ly bia lạnh sảng khoái 🍺 '
    },
    address: '166 Phan Chu Trinh, Phường 2, Vũng Tàu 78000, Vietnam',
   image: '../assets/german.png',
    rating: 4.2,

    phoneNumber: '+84 353396330',
    openingHours: '17:00 - 22:00',
    coordinates: { lat: 10.332567, lng: 107.0818814 }
  },
  
  
  
  {
    id: 'seafood',
    name: 'Ganh Hao Restaurant',
    category: 'restaurant',
    description: {
      en: 'Famous seafood restaurant with stunning ocean views and fresh local ingredients.',
      vi: 'Nhà hàng hải sản nổi tiếng với tầm nhìn ra biển tuyệt đẹp và nguyên liệu địa phương tươi ngon.'
    },
    address: '03 Tran Phu, Ward 5, Vung Tau',
   image: '/GanhHao.webp',
    rating: 4.5,

    phoneNumber: '0254 355 0909',
    openingHours: '10:00 - 23:00',
    coordinates: { lat: 10.358, lng: 107.065 }
  },
  {
    id: 'soho',
    name: 'SOHO Coffee',
    category: 'coffee',
    description: {
      en: 'Minimalist coffee shop perfect for sunset watching with a modern aesthetic.',
      vi: 'Quán cà phê tối giản hoàn hảo để ngắm hoàng hôn với thẩm mỹ hiện đại.'
    },
    address: '66 Ha Long, Ward 2, Vung Tau',
    image: '/soho.webp',
    rating: 4.8,

    phoneNumber: '0254 355 0909',
    openingHours: '10:00 - 23:00',
    coordinates: { lat: 10.33028793334961, lng: 107.07640838623047 }
  },

  {
    id: 'ten',
    name: 'Ten coffee gelato matcha',
    category: 'coffee',
    description: {
      en: 'Killer spot - awesome joe, sweet views and the wifi is on point',
      vi: ' Địa điểm tuyệt vời - cà phê ngon, view đẹp và wifi cực tốt. '
    },
    address: '1 Lê Quý Đôn, Phường 1, Vũng Tàu, Vietnam',
   image: '../assets/ten.webp',
    rating: 4.7,

    phoneNumber: '+84 90000000',
    openingHours: '06:30 - 22:00',
    coordinates: { lat: 10.348084, lng: 107.0722031 }
  },
  
  {
    id: 'indian',
    name: 'Taj Grill',
    category: 'restaurant',
    description: {
      en: 'Enjoy real Indian food at Taj Grill, from street snacks to tandoori favorites.',
      vi: 'Hãy thưởng thức ẩm thực Ấn Độ đích thực tại Taj Grill, từ các món ăn vặt đường phố đến các món nướng tandoori được yêu thích.'
    },
    address: '152 Phan Chu Trinh, Phường 2, Vũng Tàu, Bà Rịa - Vũng Tàu, Vietnam',
    image: '/taj.webp',
    rating: 4.6,

    phoneNumber: '+84 902646945',
    openingHours: '11:00 - 21:00',
    coordinates: { lat: 10.3337214, lng: 107.0811991 }
  },

 {
    id: 'wellness',
    name: 'Wellness Homes ',
    category: 'massage',
    description: {
      en: 'Wellness Homes was born from a passion to help communities live healthy, peaceful, and happy lives through natural, drug-free therapies.',
      vi: ' Wellness Homes ra đời từ tâm huyết giúp cộng đồng sống khỏe mạnh, an yên và hạnh phúc bằng các liệu pháp tự nhiên, không dùng thuốc.'
    },
    address: 'Villa B4 đường Thùy Dương 3, Phường Rạch',
    image: '/WellnessHomes.jpg',
    rating: 4.6,

    phoneNumber: '0254 355 0909',
    openingHours: '10:00 - 23:00',
   
    coordinates: { lat: 10.3802043, lng: 107.091439 }
  },


  
  
   {
    id: 'p7',
    name: 'coming soon',
    category: 'nightlife',
    description: {
      en: 'Discover international romance with wonderful local women.',
      vi: 'Khám phá tình yêu quốc tế với những người phụ nữ địa phương tuyệt vời.'
    },
    address: 'Phan Chu Thrin',
    image: '/n.jpg',
    rating: 4.6,

    phoneNumber: '+84 0000000',
    openingHours: '10:00pm - 3:00pm',
    coordinates: { lat: 10.332, lng: 107.075 }
  },
  

  {
    id: 'gazebo',
    name: 'Gazebo',
    category: 'restaurant',
    description: {
      en: 'Delicious Food, amazing Seaview, Staff is friendly, fast in Perfection !',
      vi: 'Đồ ăn ngon, view biển tuyệt đẹp, nhân viên thân thiện, phục vụ nhanh chóng hoàn hảo!'
    },
    address: '90 Hạ Long, Phường 2, Vũng Tàu, Bà Rịa - Vũng Tàu',
   image: '/gazebo.webp',
    rating: 4.1,

    phoneNumber: '+84 865459299',
    openingHours: '11:00 - 21:00',
    coordinates: { lat: 10.3355561, lng: 107.0650459 }
  },


  {
    id: 'streetfood',
    name: 'Cơm Tấm Thành Tâm ',
    category: 'restaurant',
    description: {
      en: 'complete dish for 1 Euro !',
      vi: 'Một suất ăn hoàn chỉnh chỉ với 1 Euro!'
    },
    address: '114 Hoàng Hoa Thám Vũng Tàu',
    image: '/streetfood.jpg',
    rating: 4.1,

    phoneNumber: '+84 946510099',
    openingHours: '06:30 - 20:00',
    coordinates: { lat: 10.3355561, lng: 107.0650459 }
  },


   {
    id: 'p10',
    name: 'coming soon',
    category: 'massage',
    description: {
      en: 'Indulge in soothing hands that melt away tension!',
      vi: 'Hãy tận hưởng cảm giác thư thái khi đôi tay xoa dịu mọi căng thẳng.!'
    },
    address: '90 Hạ Long, Phường 2, Vũng Tàu, Bà Rịa - Vũng Tàu',
   image: '/m.png',
    rating: 4.1,

    phoneNumber: '+84 000000',
    openingHours: '11:00 - 21:00',
    coordinates: { lat: 10.3355561, lng: 107.0650459 }
  },


  {
    id: 'anh',
    name: 'Anh',
    category: 'massage',
    description: {
      en: '👩✨ The Woman For All Occasions 💫💅 !',
      vi: '👩✨ Người phụ nữ hoàn hảo cho mọi dịp 💫💅!'
    },
    address: '90 Hạ Long, Phường 2, Vũng Tàu, Bà Rịa - Vũng Tàu',
   image: '/a.png',
    rating: 4.8,

    phoneNumber: '+84 0000000',
    openingHours: '11:00 - 21:00',
    coordinates: { lat: 10.3355561, lng: 107.0650459 }
  },

  {
    id: 'pizza',
    name: 'David Pizzeria',
    category: 'restaurant',
    description: {
      en: 'Delicious Food, amazing Seaview, Staff is friendly, fast in Perfection !',
      vi: 'Đồ ăn ngon, view biển tuyệt đẹp, nhân viên thân thiện, phục vụ nhanh chóng hoàn hảo!'
    },
    address: '92 Hạ Long, Phường 2, Vũng Tàu, Bà Rịa - Vũng Tàu',
   image: '../assets/davidPizza.jpg',
    rating: 4.1,

    phoneNumber: '+84 2543521012',
    openingHours: '10:00 - 22:30',
    coordinates: { lat: 110.335521, lng: 107.0357754 }
  },

  {
    id: 'marina',
    name: 'Marina Bay and Resort',
    category: 'restaurant',
    description: {
      en: 'Friendly staff, beautiful sea view, quiet and peaceful – a perfect place for a dinner',
      vi: 'Nhân viên thân thiện, tầm nhìn biển tuyệt đẹp, yên tĩnh và thanh bình - một địa điểm hoàn hảo cho bữa tối'
    },
    address: '115 Tran Phu Street, Ward 5, Vũng Tàu',
   image: '../assets/marina.webp',
    rating: 4.1,

    phoneNumber: '+84 254 3848 888',
    openingHours: '10:00 - 22:30',
    coordinates: { lat: 110.335521, lng: 107.0357754 }
  },

  {
    id: 'rovina',
    name: 'Rovina coffee Á Châu',
    category: 'coffee',
    description: {
      en: 'Nice drinks that....! ',
      vi: ' Giá cả phải chăng, địa điểm đẹp và nhân viên cực kỳ thân thiện! '
    },
    address: '6 Văn Cao, Phường 2, Vũng Tàu, Bà Rịa - Vũng Tàu, Vietnam',
   image: '../assets/rovina.webp',
    rating: 4.1,

    phoneNumber: '+84 00000000',
    openingHours: '08:00 - 16:00',
    coordinates: { lat: 10.3510987, lng: 107.0181853 }
  },

  {
    id: 'dental',
    name: 'CAT CAT DENTAL CLINIC',
    category: 'services',
    description: {
      en: 'WHERE 😊✨ SMILES 😄💫 BLOOM AND FLOURISH 🌸🌺 WITH JOY 🌈💝 ',
      vi: ' NƠI NHỮNG NỤ CƯỜI 😊✨ NỞ RỘ VÀ PHÁT TRIỂN 🌸🌺 VỚI NIỀM VUI 🌈💝 '
    },
    address: '225 Le Hong Phong Street, Ward 8, Vung Tau, Vietnam',
   image: '../assets/cat.webp',
    rating: 4.1,

    phoneNumber: '+84 878103103',
    openingHours: '24 hours',
    coordinates: { lat: 10.3367394, lng: 10.3367394 }
  },

  {
    id: 'lavender',
    name: 'Lavender Spa',
    category: 'massage',
    description: {
      en: 'Experience a rejuvenating six-hand massage therapy session for the exceptional value of €10🌈💝 ',
      vi: ' Trải nghiệm liệu trình massage sáu tay thư giãn tuyệt vời với giá chỉ 10€🌈💝 '
    },
    address: '101A Phan Chu Trinh , Phường 2, 38 Đinh Tiên Hoàng, Phường 1, Vũng Tàu, Vietnam',
   image: '../assets/lavender.webp',
    rating: 4.7,

    phoneNumber: '+84 915 782 807',
    openingHours: '24 hours',
    coordinates: { lat: 10.3367394, lng: 10.3367394 }
  },

  {
    id: 'bar',
    name: 'MK Bar',
    category: 'restaurant',
    description: {
      en: 'Chill spot to grab a beer and catch the game.',
      vi: 'Địa điểm lý tưởng để thư giãn, nhâm nhi bia và xem trận đấu.'
    },
    address: '83RG+XH2, Phường 1, Vũng Tàu, Bà Rịa - Vũng Tàu, Vietnam',
   image: '/MKBar.webp',
    rating: 4.7,

    phoneNumber: '0254 355 0909',
    openingHours: '6:30 - 24:00',
    coordinates: { lat: 10.3424039, lng: 107.0738302 }
  },

  

  {
    id: 'freelancer',
    name: 'Phone Tempered Glass',
    category: 'services',
    description: {
      en: '🛡️📱 Ultimate Protection For Your Smartphone 💪✨',
      vi: ' 🛡️📱 Bảo vệ tối ưu cho điện thoại thông minh của bạn '
    },
    address: 'Freelancer',
   image: '../assets/phone.webp',
    rating: 4.3,

    phoneNumber: '+84 567202777',
    openingHours: '06:30 - 22:00',
    coordinates: { lat: 10.348084, lng: 107.0722031 }
  },


  {
    id: 'american',
    name: 'Open sesame Bar',
    category: 'nightlife',
    description: {
      en: 'the kind of place where it’s easy to strike up a conversation with the person sitting next to you✨',
      vi: ' Đây là kiểu nơi mà bạn dễ dàng bắt chuyện với người ngồi cạnh mình. '
    },
    address: '51a Phan Chu Trinh, Phường 2, Vũng Tàu, Bà Rịa - Vũng Tàu 999999, Vietnam',
   image: '../assets/sesam.jpeg',
    rating: 4.7,

    phoneNumber: '+84 835689154',
    openingHours: '06:30 - 22:00',
    coordinates: { lat: 10.3371052, lng: 107.0780744 }
  },


  {
    id: 'room',
    name: 'room to rent',
    category: 'accomodation',
    description: {
      en: 'get in touch✨',
      vi: ' Đây là kiểu nơi mà bạn dễ dàng bắt chuyện với người ngồi cạnh mình. '
    },
    address: ' Vũng Tàu, Vietnam',
   image: '../assets/rent.webp',
    rating: 4.7,

    phoneNumber: '+49 1629745975',
    openingHours: '06:30 - 22:00',
    coordinates: { lat: 10.3371052, lng: 107.0780744 }
  },


   {
    id: 'photocopy',
    name: 'Copy Shop',
    category: 'services',
    description: {
      en: '📄 Get your documents printed ⚡️ quickly! 🖨️',
      vi: ' 📄 In tài liệu của bạn nhanh chóng ⚡️! 🖨️ '
    },
    address: ' Võ Thị Sáu Vũng Tàu, Vietnam',
   image: '../assets/copy.png',
    rating: 4.7,

    phoneNumber: '+84 943 103 799',
    openingHours: '08:30 - 22:00',
    coordinates: { lat: 10.3399814, lng: 107.0877767 }
  },


 




  

];

export const TRANSLATIONS: Record<'en' | 'vi', Translation> = {
  en: {
    nav_home: 'Home',
    nav_guide: 'Guide',
    nav_todo: 'To Do',
    nav_ai: 'AI',
    discover_heading: 'Vietnam',
    discover_sub: '🌊 Experience Vung Tau Like a Local 🌴🏖️',
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
    discover_heading: 'Viet Nam',
    discover_sub: '🌊 Trải nghiệm Vũng Tàu như người bản địa 🌴🏖️',
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
