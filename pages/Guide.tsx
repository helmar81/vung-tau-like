import React from "react";
import { Translation, Language } from "../types";
import { CATEGORIES } from "../constants";
import { categoryIcons } from "../icons/categoryIcons";
import { Lightbulb } from "lucide-react";

interface GuideProps {
  t: Translation;
  lang: Language;
  onCategoryClick: (type: string) => void;
}

export const Guide: React.FC<GuideProps> = ({
  t,
  lang,
  onCategoryClick
}) => {
  return (
    <div className="pt-24 px-6 pb-24">
      <h1 className="text-3xl font-bold text-deep mb-2">
        {t.guide}
      </h1>
      <p className="text-gray-500 mb-8 italic">
        {t.guide_subtitle}
      </p>

      <div className="grid grid-cols-2 gap-4">
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => onCategoryClick(cat.type)}
            className="relative flex flex-col items-center justify-center p-8 bg-white rounded-[2.5rem] shadow-sm border border-gray-50 hover:border-ocean hover:shadow-md transition-all group active:scale-95 overflow-hidden min-h-[160px]"
          >
            {/* Background Image */}
            {cat.image && (
              <>
                <div
                  className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${cat.image})` }}
                />
                <div className="absolute inset-0 z-10 bg-black/30 group-hover:bg-black/20 transition-colors" />
              </>
            )}

            {/* Icon */}
            <div
              className={`relative z-20 w-16 h-16 ${
                cat.image ? "bg-white/90" : "bg-sandy"
              } rounded-2xl flex items-center justify-center mb-4 group-hover:bg-ocean transition-colors text-gray-800 group-hover:text-white`}
            >
              {categoryIcons[cat.icon]}
            </div>
            

            {/* Label */}
            <span
              className={`relative z-20 font-bold text-sm ${
                cat.image
                  ? "text-white drop-shadow-md"
                  : "text-gray-700"
              }`}
            >
              {cat.label[lang]}
            </span>
          </button>
        ))}
      </div>

      {/* Local Tip */}
      <div className="mt-12 bg-ocean/10 p-6 rounded-3xl border border-ocean/20">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-ocean shadow-sm">
            <Lightbulb size={22} />
          </div>
          <div>
            <h4 className="font-bold text-ocean">
              {t.local_tip}
            </h4>
            <p className="text-sm text-gray-600 mt-1">
              {t.local_tip_desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;

