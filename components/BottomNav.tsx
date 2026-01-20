import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Translation } from "../types";
import {
  Home,
  Compass,
  MapPin,
  Bot,
  Info
} from "lucide-react";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
  icon,
  label,
  active,
  onClick
}) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center justify-center space-y-1 flex-1 transition-all duration-300 ${
      active ? "text-ocean scale-110" : "text-gray-400"
    }`}
  >
    <div className="w-6 h-6 flex items-center justify-center">
      {icon}
    </div>

    <span className="text-[10px] font-medium uppercase tracking-wider whitespace-nowrap">
      {label}
    </span>

    {active && (
      <div className="w-1 h-1 bg-ocean rounded-full mt-0.5" />
    )}
  </button>
);

const FooterOverlay: React.FC = () => (
  <div className="absolute bottom-full mb-4 left-4 right-4 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-50">
    <div className="text-center text-gray-500 text-sm space-y-2">
      <p>
        © {new Date().getFullYear()} Built by{" "}
        <a
          href="https://uspekhi.web.app"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-blue-600 font-bold"
        >
          USPEKHI
        </a>
      </p>

      <div className="w-8 h-0.5 bg-gray-100 mx-auto my-2"></div>

      <a
        href="/privacy-policy.html"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs hover:underline text-gray-400 hover:text-ocean"
      >
        Privacy Policy
      </a>
    </div>

    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b border-r border-gray-100 rotate-45"></div>
  </div>
);

export const BottomNav: React.FC<{ translations: Translation }> = ({
  translations
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showFooter, setShowFooter] = useState(false);

  const navs = [
    {
      icon: <Home size={20} />,
      label: translations.nav_home,
      path: "/"
    },
    {
      icon: <Compass size={20} />,
      label: translations.nav_guide,
      path: "/guide"
    },
    {
      icon: <MapPin size={20} />,
      label: translations.nav_todo,
      path: "/todo"
    },
    {
      icon: <Bot size={20} />,
      label: translations.nav_ai,
      path: "/ai"
    }
  ];

  const handleNavigation = (path: string) => {
    setShowFooter(false);
    navigate(path);
  };

  return (
    <>
      {showFooter && (
        <div
          className="fixed inset-0 z-40 bg-black/5"
          onClick={() => setShowFooter(false)}
        />
      )}

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3 flex z-50 safe-bottom shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">

        {showFooter && <FooterOverlay />}

        {navs.map(nav => (
          <NavItem
            key={nav.path}
            icon={nav.icon}
            label={nav.label}
            active={location.pathname === nav.path && !showFooter}
            onClick={() => handleNavigation(nav.path)}
          />
        ))}

        <NavItem
          icon={<Info size={20} />}
          label={translations.about || "About"}
          active={showFooter}
          onClick={() => setShowFooter(!showFooter)}
        />
      </div>
    </>
  );
};
