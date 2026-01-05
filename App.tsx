import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation, BrowserRouter } from 'react-router-dom';
import { Language, Translation } from './types';
import { TRANSLATIONS } from './constants';
import { Home } from './pages/Home';
import { Guide } from './pages/Guide';
import { AIChat } from './pages/AIChat';
import { CategoryList } from './pages/CategoryList';
import { PlaceDetail } from './pages/PlaceDetail';
import { GetStarted } from './pages/GetStarted';
import { BottomNav } from './components/BottomNav';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { ToDo } from './components/ToDo';

const AppContent: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [scrolled, setScrolled] = useState(false);
  const t: Translation = TRANSLATIONS[lang];
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDetailView = location.pathname.startsWith('/details/') || location.pathname === '/get-started';
  
  // Check if current page is the starter page
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-sandy selection:bg-ocean/30">
      {/* Dynamic Navbar - Hidden on detail/immersive views */}
      {!isDetailView && (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex justify-between items-center ${
          scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
        }`}>
          
          {/* Logo Section: Only shows if NOT on the Home Page */}
          {!isHomePage ? (
            <div 
              onClick={() => navigate('/')} 
              className={`text-xl font-black tracking-tighter cursor-pointer transition-colors ${
                scrolled ? 'text-ocean' : 'text-white'
              }`}
            >
              VT<span className="text-sunset">.</span>LIKE
            </div>
          ) : (
            /* Spacer to keep LanguageSwitcher on the right when logo is hidden */
            <div />
          )}

          <LanguageSwitcher current={lang} onSwitch={setLang} />
        </nav>
      )}

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home t={t} lang={lang} onViewDetails={(id) => navigate(`/details/${id}`)} />} />
        <Route path="/get-started" element={<GetStarted t={t} lang={lang} />} />
        <Route path="/guide" element={<Guide t={t} lang={lang} onCategoryClick={(type) => navigate(`/guide/${type}`)} />} />
        <Route path="/guide/:categoryType" element={<CategoryList t={t} lang={lang} />} />
        <Route path="/details/:placeId" element={<PlaceDetail lang={lang} t={t} />} />
        <Route path="/ai" element={<AIChat t={t} lang={lang} />} />
        
        {/* Corrected Line below: */}
        <Route path="/todo" element={<ToDo t={t} lang={lang} />} />
      </Routes>

      {/* Persistent Bottom Navigation */}
      <BottomNav translations={t} />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;