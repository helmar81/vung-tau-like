import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useNavigate, useLocation, BrowserRouter } from 'react-router-dom';
import { Language, Translation } from './types';
import { TRANSLATIONS } from './constants';

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'));
const Guide = lazy(() => import('./pages/Guide'));
const AIChat = lazy(() => import('./pages/AIChat'));
const CategoryList = lazy(() => import('./pages/CategoryList'));
const PlaceDetail = lazy(() => import('./pages/PlaceDetail'));
const GetStarted = lazy(() => import('./pages/GetStarted'));

// Lazy-loaded components
const BottomNav = lazy(() => import('./components/BottomNav'));
const LanguageSwitcher = lazy(() => import('./components/LanguageSwitcher'));
const ToDo = lazy(() => import('./components/ToDo'));

const AppContent: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [scrolled, setScrolled] = useState(false);
  const t: Translation = TRANSLATIONS[lang];
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDetailView =
    location.pathname.startsWith('/details/') ||
    location.pathname === '/get-started';

  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-sandy selection:bg-ocean/30">
      {!isDetailView && (
        <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex justify-between items-center ${
            scrolled
              ? 'bg-white/80 backdrop-blur-lg shadow-sm'
              : 'bg-transparent'
          }`}
        >
          {!isHomePage ? (
            <div
              onClick={() => navigate('/')}
              className={`text-xl font-black tracking-tighter cursor-pointer transition-colors ${
                scrolled ? 'text-ocean' : 'text-white'
              }`}
            ></div>
          ) : (
            <div />
          )}

          <LanguageSwitcher current={lang} onSwitch={setLang} />
        </nav>
      )}

      <main>
        <Suspense fallback={<div className="p-6 text-center">Loading…</div>}>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  t={t}
                  lang={lang}
                  onViewDetails={(id) => navigate(`/details/${id}`)}
                />
              }
            />
            <Route path="/get-started" element={<GetStarted t={t} lang={lang} />} />
            <Route
              path="/guide"
              element={
                <Guide
                  t={t}
                  lang={lang}
                  onCategoryClick={(type) => navigate(`/guide/${type}`)}
                />
              }
            />
            <Route
              path="/guide/:categoryType"
              element={<CategoryList t={t} lang={lang} />}
            />
            <Route
              path="/details/:placeId"
              element={<PlaceDetail lang={lang} t={t} />}
            />
            <Route path="/ai" element={<AIChat t={t} lang={lang} />} />
            <Route path="/todo" element={<ToDo t={t} lang={lang} />} />
          </Routes>
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <BottomNav translations={t} />
      </Suspense>
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