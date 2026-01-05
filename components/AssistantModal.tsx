
import React, { useState } from 'react';
import { analyzeHealthJourney, AssessmentResult } from '../services/geminiService';
import { X, Sparkles, Send, Loader2, CheckCircle2 } from 'lucide-react';

interface AssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AssistantModal: React.FC<AssistantModalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setError(null);
    try {
      const data = await analyzeHealthJourney(input);
      setResult(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setInput('');
    setResult(null);
    setError(null);
  };

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-2xl bg-rostani-cream rounded-2xl shadow-2xl overflow-hidden border border-rostani-sage/20">
        <div className="bg-rostani-dark-sage p-6 flex justify-between items-center text-white">
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6" />
            <h2 className="text-xl font-playfair font-bold">Holographic Health Assistant</h2>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-full transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 md:p-8">
          {!result ? (
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-lg text-rostani-slate font-medium">How are you feeling today?</p>
                <p className="text-sm text-rostani-slate/70">
                  Tell me about your physical discomfort, mental blocks, or wellness goals. 
                  Our AI assistant will map your needs to our 5 core departments.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="e.g., 'I've been feeling constantly drained and anxious, and I'm struggling with sleep...'"
                  className="w-full h-32 p-4 rounded-xl border border-rostani-sage/30 bg-white focus:ring-2 focus:ring-rostani-sage outline-none transition-all resize-none text-rostani-slate"
                />
                <button
                  disabled={loading || !input.trim()}
                  className="w-full bg-rostani-dark-sage hover:bg-rostani-deep-slate disabled:opacity-50 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-rostani-dark-sage/20"
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Begin Holographic Analysis
                    </>
                  )}
                </button>
              </form>
              {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            </div>
          ) : (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 space-y-4">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-rostani-sage font-bold">Primary Focus</span>
                    <h3 className="text-2xl font-playfair text-rostani-dark-sage">{result.primaryDepartment}</h3>
                  </div>
                  <div className="bg-white p-5 rounded-xl border-l-4 border-rostani-sage shadow-sm">
                    <p className="text-rostani-slate leading-relaxed italic">"{result.recommendation}"</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-rostani-slate text-sm">Holographic Insight:</h4>
                    <p className="text-sm text-rostani-slate/80">{result.reasoning}</p>
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <h4 className="font-bold text-rostani-dark-sage">Your Next Steps:</h4>
                  <ul className="space-y-3">
                    {result.suggestedSteps.map((step, idx) => (
                      <li key={idx} className="flex gap-3 text-sm text-rostani-slate">
                        <CheckCircle2 className="w-5 h-5 text-rostani-sage flex-shrink-0" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <button
                      onClick={onClose}
                      className="w-full py-3 bg-rostani-sage text-white rounded-lg hover:bg-rostani-dark-sage transition-colors font-bold"
                    >
                      Book a Session Now
                    </button>
                    <button
                      onClick={reset}
                      className="w-full mt-2 py-2 text-sm text-rostani-sage hover:underline"
                    >
                      New Assessment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AssistantModal;
