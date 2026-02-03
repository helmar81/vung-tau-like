
import React from 'react';
import { Language } from '../types';

interface LanguageSwitcherProps {
  current: Language;
  onSwitch: (lang: Language) => void;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ current, onSwitch }) => {
  return (
    <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-md rounded-full p-1 border border-white/20">
      <button
        onClick={() => onSwitch('en')}
        className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
          current === 'en' ? 'bg-sunset text-white' : 'text-white hover:bg-white/10'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => onSwitch('vi')}
        className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
          current === 'vi' ? 'bg-sunset text-white' : 'text-white hover:bg-white/10'
        }`}
      >
        VI
      </button>
    </div>
  );
};

export default LanguageSwitcher;


