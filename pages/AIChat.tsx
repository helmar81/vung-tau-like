import React, { useState, useRef, useEffect } from 'react';
import { Translation, Language } from '../types';
import { gemini } from '../services/gemini';

interface AIChatProps {
  t: Translation;
  lang: Language;
}

export const AIChat: React.FC<AIChatProps> = ({ t, lang }) => {
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([
    { text: lang === 'en' ? "Hi! I'm your Vung Tau AI Guide. How can I help you today?" : "Xin chào! Tôi là trợ lý AI Vũng Tàu. Tôi có thể giúp gì cho bạn?", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { text: userMsg, isBot: false }]);
    setLoading(true);

    const botMsg = await gemini.getRecommendation(userMsg, lang);
    setMessages(prev => [...prev, { text: botMsg || '', isBot: true }]);
    setLoading(false);
  };

  return (
    <div className="pt-24 h-screen flex flex-col bg-sandy">
      <div className="flex-1 overflow-y-auto px-6 space-y-4 pb-32 pt-4 no-scrollbar">
        
        {/* --- VIDEO SECTION START --- */}
        <div className="w-full mb-6 bg-white p-2 rounded-[2rem] shadow-sm border border-gray-100">
          <div className="relative w-full aspect-video rounded-[1.5rem] overflow-hidden bg-black">
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              // REPLACE THE URL BELOW WITH YOUR VIDEO ID
             src="https://www.youtube.com/embed/vt8NCW3_vZg" 
              title="Vung Tau Intro Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
        {/* --- VIDEO SECTION END --- */}

        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
            <div className={`max-w-[85%] p-4 rounded-2xl ${
              msg.isBot 
                ? 'bg-white text-gray-800 shadow-sm rounded-tl-none border border-gray-100' 
                : 'bg-ocean text-white rounded-tr-none shadow-md'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-100 flex space-x-1">
              <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce [animation-delay:-.3s]"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce [animation-delay:-.5s]"></div>
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      <div className="fixed bottom-24 left-0 right-0 px-6">
        <div className="bg-white rounded-full shadow-2xl p-2 border border-gray-100 flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder={t.search_placeholder}
            className="flex-1 bg-transparent px-4 py-2 outline-none text-gray-700"
          />
          <button
            onClick={handleSend}
            disabled={loading}
            className="w-10 h-10 bg-sunset text-white rounded-full flex items-center justify-center hover:scale-105 transition-transform"
          >
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChat;

