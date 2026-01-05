import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Translation } from '../types';

interface NavItemProps {
  icon: string;
  label: string;
  active: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center justify-center space-y-1 flex-1 transition-all duration-300 ${
      active ? 'text-ocean scale-110' : 'text-gray-400'
    }`}
  >
    <i className={`fas ${icon} text-lg`}></i>
    <span className="text-[10px] font-medium uppercase tracking-wider whitespace-nowrap">{label}</span>
    {active && <div className="w-1 h-1 bg-ocean rounded-full mt-0.5"></div>}
  </button>
);

// This component replaces your original Footer.tsx
const FooterOverlay: React.FC = () => (
  <div className="absolute bottom-full mb-4 left-4 right-4 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-100 p-4 animate-fade-in-up z-50">
    <div className="text-center text-gray-500 dark:text-gray-400 text-sm space-y-2">
      <p>
        <span className="mr-1">&copy; {new Date().getFullYear()} Built by</span>
        <a
          href="https://uspekhi.web.app"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="USPEKHI Web Design"
          className="hover:underline text-blue-600 dark:text-blue-400 font-bold"
        >
          USPEKHI
        </a>
      </p>
      <div className="w-8 h-0.5 bg-gray-100 mx-auto my-2"></div>
      <div>
        <a 
          href="/privacy-policy.html" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-xs hover:underline text-gray-400 hover:text-ocean transition-colors"
        >
          Privacy Policy
        </a>
      </div>
    </div>
    
    {/* Little triangle pointer at the bottom */}
    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-b border-r border-gray-100 rotate-45"></div>
  </div>
);

export const BottomNav: React.FC<{ translations: Translation }> = ({ translations }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showFooter, setShowFooter] = useState(false);

  // Standard Navigation Items
  const navs = [
    { icon: 'fa-house', label: translations.nav_home, path: '/' },
    { icon: 'fa-compass', label: translations.nav_guide, path: '/guide' },
    { icon: 'fa-map-pin', label: translations.nav_todo, path: '/todo' },
    { icon: 'fa-robot', label: translations.nav_ai, path: '/ai' },
  ];

  const handleNavigation = (path: string) => {
    setShowFooter(false); // Close footer if navigating
    navigate(path);
  };

  const toggleFooter = () => {
    setShowFooter(!showFooter);
  };

  return (
    <>
      {/* Invisible backdrop to close footer when clicking outside */}
      {showFooter && (
        <div 
          className="fixed inset-0 z-40 bg-black/5" 
          onClick={() => setShowFooter(false)}
        ></div>
      )}

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3 flex justify-between items-center z-50 safe-bottom shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
        
        {/* Render the Footer Popup if active */}
        {showFooter && <FooterOverlay />}

        {/* Standard Nav Items */}
        {navs.map((nav) => (
          <NavItem
            key={nav.path}
            {...nav}
            active={location.pathname === nav.path && !showFooter}
            onClick={() => handleNavigation(nav.path)}
          />
        ))}

        {/* The New Integrated "About" Item */}
        <NavItem 
          icon="fa-info-circle"
          label={translations.about || "About"} // Ensure you add 'about' to your Translation type, or hardcode string here
          active={showFooter}
          onClick={toggleFooter}
        />
      </div>
    </>
  );
};