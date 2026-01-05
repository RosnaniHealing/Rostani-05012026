
import { GoogleGenAI, Type } from "@google/genai";

const MODEL_NAME = 'gemini-3-flash-preview';

export interface AssessmentResult {
  primaryDepartment: string;
  recommendation: string;
  reasoning: string;
  suggestedSteps: string[];
}

export const analyzeHealthJourney = async (userInput: string): Promise<AssessmentResult> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `
    Analyze the following user health/wellness concern: "${userInput}".
    Map their concern to one of the following 5 Departments:
    1. Mind & Wisdom (Psychology, Archetypes, Mental Clarity)
    2. Energy & Soul (Pranic Healing, Chakras, Energy Hygiene)
    3. Body & Biology (Ayurveda, Hormones, Nutrition, Physical Health)
    4. Movement & Breath (Qigong, Yoga, Breathwork)
    5. Environment (Sleep, Home, Lifestyle, Habits)

    Provide a professional, empathetic response in the style of Rostani Integrative Health (Shadi Servat's philosophy).
  `;

  try {
    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            primaryDepartment: { type: Type.STRING, description: "The department that most closely fits the concern." },
            recommendation: { type: Type.STRING, description: "A high-level therapeutic recommendation." },
            reasoning: { type: Type.STRING, description: "Why this department was chosen based on their words." },
            suggestedSteps: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "3 actionable steps based on Rostani methodology."
            }
          },
          required: ["primaryDepartment", "recommendation", "reasoning", "suggestedSteps"]
        }
      }
    });

    const result = JSON.parse(response.text || '{}');
    return result as AssessmentResult;
  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    throw new Error("I'm having trouble connecting to your energetic field right now. Please try again.");
  }
};
