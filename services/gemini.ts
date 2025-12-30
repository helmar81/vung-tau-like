
import { GoogleGenAI } from "@google/genai";

// Initialize the Google GenAI client with the mandatory API key from environment variables.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export class GeminiService {
  async getRecommendation(query: string, lang: 'en' | 'vi') {
    try {
      // Use ai.models.generateContent to query GenAI with both the model name and prompt.
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Act as a local Vung Tau expert. The user is asking: "${query}". Provide a helpful response in ${lang === 'en' ? 'English' : 'Vietnamese'}. Be concise and friendly.`,
        config: {
          temperature: 0.7,
        }
      });
      
      // Access the generated text directly via the .text property.
      return response.text;
    } catch (error) {
      console.error("Gemini Error:", error);
      return lang === 'en' 
        ? "I'm sorry, I'm having trouble connecting to my local knowledge base right now." 
        : "Xin lỗi, tôi đang gặp sự cố khi kết nối với kho dữ liệu lúc này.";
    }
  }
}

export const gemini = new GeminiService();
