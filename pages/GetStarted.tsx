import React from "react";
import { useNavigate } from "react-router-dom";
import { Translation, Language } from "../types";
import {
  ArrowLeft,
  Sun,
  Home,
  Users,
  Bike,
  ArrowRight
} from "lucide-react";

interface GetStartedProps {
  t: Translation;
  lang: Language;
}

export const GetStarted: React.FC<GetStartedProps> = ({ t, lang }) => {
  const navigate = useNavigate();

  return (
    <div className="pb-24 animate-fadeIn">
      {/* Immersive Header */}
      <div className="relative h-[40vh] w-full">
        <img
          src="./island.webp"
          className="w-full h-full object-cover"
          alt="Vung Tau View"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-sandy via-transparent to-black/30"></div>

        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 w-10 h-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white z-20"
        >
          <ArrowLeft size={20} />
        </button>
      </div>

      <div className="px-6 -mt-12 relative z-10">
        <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-gray-100">
          <h1 className="text-3xl font-black text-deep mb-6 leading-tight">
            {t.get_started_title}
          </h1>

          <p className="text-gray-600 leading-relaxed mb-8 text-lg">
            {t.get_started_intro}
          </p>

          <div className="grid grid-cols-1 gap-6">
            {/* Weather Card */}
            <div className="flex items-start space-x-4 p-5 bg-orange-50 rounded-3xl border border-orange-100">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-sunset shadow-sm shrink-0">
                <Sun size={22} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">
                  {t.weather_title}
                </h3>
                <p className="text-sm text-gray-600">
                  {t.weather_desc}
                </p>
              </div>
            </div>

            {/* Living Card */}
            <div className="flex items-start space-x-4 p-5 bg-blue-50 rounded-3xl border border-blue-100">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-ocean shadow-sm shrink-0">
                <Home size={22} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">
                  {t.living_title}
                </h3>
                <p className="text-sm text-gray-600">
                  {t.living_desc}
                </p>
              </div>
            </div>

            {/* Community Card */}
            <div className="flex items-start space-x-4 p-5 bg-purple-50 rounded-3xl border border-purple-100">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-purple-600 shadow-sm shrink-0">
                <Users size={22} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">
                  {t.community_title}
                </h3>
                <p className="text-sm text-gray-600">
                  {t.community_desc}
                </p>
              </div>
            </div>

            {/* Logistics Card */}
            <div className="flex items-start space-x-4 p-5 bg-green-50 rounded-3xl border border-green-100">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-green-600 shadow-sm shrink-0">
                <Bike size={22} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">
                  {t.logistics_title}
                </h3>
                <p className="text-sm text-gray-600">
                  {t.logistics_desc}
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={() => navigate("/guide")}
            className="w-full mt-10 bg-deep hover:bg-ocean text-white py-4 rounded-2xl font-bold transition-all shadow-lg flex items-center justify-center space-x-2 active:scale-95"
          >
            <span>{t.start_exploring}</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
