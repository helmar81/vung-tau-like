
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Translation } from '../types';

interface NavItemProps {
  icon: string;
  label: string;
  path: string;
  active: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, path, active, onClick }) => (
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

export const BottomNav: React.FC<{ translations: Translation }> = ({ translations }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navs = [
    { icon: 'fa-house', label: translations.nav_home, path: '/' },
    { icon: 'fa-compass', label: translations.nav_guide, path: '/guide' },
    { icon: 'fa-map-pin', label: translations.nav_todo, path: '/todo' },
    { icon: 'fa-robot', label: translations.nav_ai, path: '/ai' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3 flex justify-between items-center z-50 safe-bottom shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
      {navs.map((nav) => (
        <NavItem
          key={nav.path}
          {...nav}
          active={location.pathname === nav.path}
          onClick={() => navigate(nav.path)}
        />
      ))}
    </div>
  );
};
