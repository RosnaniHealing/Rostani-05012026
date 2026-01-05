
import React, { useState } from 'react';
import { Menu, X, Instagram, Linkedin, Mail, ArrowRight, Brain, Zap, Activity, Wind, Home as HomeIcon, ChevronRight, Sparkles } from 'lucide-react';
import AssistantModal from './components/AssistantModal';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  // Logo Component for reuse
  const Logo = ({ className = "h-8" }: { className?: string }) => (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/resources/logo.png" 
        alt="Rostani Logo" 
        className="h-full w-auto object-contain"
        onError={(e) => {
          // Fallback if image fails to load
          e.currentTarget.style.display = 'none';
        }}
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-rostani-cream selection:bg-rostani-sage selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-[1000] glass border-b border-rostani-sage/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="hover:opacity-80 transition-opacity">
            <Logo className="h-10 md:h-12" />
          </a>
          
          <nav className="hidden md:flex items-center gap-8">
            {['Method', 'About', 'Clinic', 'Academy', 'FAQ'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs uppercase tracking-widest font-bold text-rostani-slate hover:text-rostani-sage transition-colors"
              >
                {item}
              </a>
            ))}
            <button
              onClick={() => setIsAssistantOpen(true)}
              className="bg-rostani-dark-sage text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-rostani-deep-slate transition-all shadow-md hover:shadow-lg"
            >
              Book Now
            </button>
          </nav>

          <button className="md:hidden p-2 text-rostani-dark-sage" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-rostani-sage/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
             {['Method', 'About', 'Clinic', 'Academy', 'FAQ'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm uppercase tracking-widest font-bold text-rostani-slate"
              >
                {item}
              </a>
            ))}
            <button onClick={() => { setIsAssistantOpen(true); setIsMenuOpen(false); }} className="bg-rostani-dark-sage text-white py-3 rounded-xl font-bold">
              Book Now
            </button>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center brightness-[0.7]"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-rostani-slate/40 to-rostani-cream" />
        
        <div className="container mx-auto px-6 relative z-10 text-center space-y-8">
          <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full border border-white/30 mb-4 animate-in fade-in slide-in-from-top duration-700">
            <span className="text-white text-xs uppercase tracking-[0.2em] font-bold">The Holographic Approach to Wholeness</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-playfair text-white font-bold leading-tight drop-shadow-sm max-w-5xl mx-auto">
            Where Science <span className="italic font-normal">Meets Soul</span>
          </h1>
          <p className="text-xl md:text-2xl text-rostani-slate max-w-3xl mx-auto font-light leading-relaxed">
            Rooted in Biology. Expanded by Psychology. Elevated by Energy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button 
              onClick={() => setIsAssistantOpen(true)}
              className="w-full sm:w-auto px-10 py-4 bg-rostani-dark-sage text-white font-bold rounded-full hover:bg-rostani-deep-slate transition-all shadow-xl shadow-rostani-dark-sage/20"
            >
              Begin Your Journey
            </button>
            <a href="#method" className="w-full sm:w-auto px-10 py-4 bg-white/80 hover:bg-white text-rostani-dark-sage font-bold rounded-full transition-all border border-rostani-sage/20">
              Explore The Method
            </a>
          </div>
        </div>
      </section>

      {/* Philosophy (Method) */}
      <section id="method" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20 space-y-6">
            <h2 className="text-4xl md:text-5xl font-playfair text-rostani-dark-sage">You Are A Holographic Whole</h2>
            <p className="text-lg text-rostani-slate/80 leading-relaxed">
              You cannot silence a racing Mind if your Energy field is congested. 
              At Rostani, we integrate your entire existence through 5 specialized departments to restore your authentic flow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: <Brain />, title: 'Mind & Wisdom', desc: 'Psychology & Archetypes', color: 'border-blue-200' },
              { icon: <Zap />, title: 'Energy & Soul', desc: 'Pranic Healing & Clearing', color: 'border-amber-200' },
              { icon: <Activity />, title: 'Body & Biology', desc: 'Ayurveda & Somatics', color: 'border-green-200' },
              { icon: <Wind />, title: 'Movement & Breath', desc: 'Qigong & Yoga Flow', color: 'border-teal-200' },
              { icon: <HomeIcon />, title: 'Environment', desc: 'Sleep & Lifestyle container', color: 'border-slate-200' },
            ].map((pillar, i) => (
              <div 
                key={i} 
                className={`bg-white p-8 rounded-2xl border-t-4 ${pillar.color} shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group`}
              >
                <div className="w-12 h-12 rounded-xl bg-rostani-cream flex items-center justify-center text-rostani-sage mb-6 group-hover:bg-rostani-sage group-hover:text-white transition-all">
                  {pillar.icon}
                </div>
                <h4 className="font-playfair text-xl text-rostani-dark-sage mb-2">{pillar.title}</h4>
                <p className="text-sm text-rostani-slate/70">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#F4F9F4] overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-1/2 space-y-8 animate-in fade-in slide-in-from-left duration-1000">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-rostani-sage/10 text-rostani-sage text-[10px] font-bold uppercase tracking-widest rounded-full">
                  <Sparkles className="w-3 h-3" />
                  Our Essence
                </div>
                <h2 className="text-4xl md:text-5xl font-playfair text-rostani-dark-sage leading-tight">
                  Not just a clinic.<br />A <span className="italic font-normal">sanctuary</span> for the soul.
                </h2>
                <p className="text-lg text-rostani-slate/80 leading-relaxed">
                  Rostani is an Integrative Ecosystem designed for human flourishing. 
                  We bridge the gap between Ancient Wisdom (Pranic Healing) and Modern Science (Personality Psychology) to help you return to your original state of health.
                </p>
              </div>

              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-rostani-slate/5 border border-rostani-sage/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-rostani-sage/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-700" />
                <h3 className="text-xs uppercase tracking-widest text-rostani-sage font-bold mb-6 flex items-center gap-3">
                  <div className="w-8 h-[1px] bg-rostani-sage/30"></div>
                  The Founder
                </h3>
                <h4 className="text-3xl font-playfair text-rostani-dark-sage mb-1">Shadi Servat</h4>
                <p className="text-sm font-medium text-rostani-slate/60 mb-6 italic tracking-wide">M.A. Personality Psychology | ICF Coach | Pranic Healer</p>
                <div className="relative">
                  <span className="absolute -top-4 -left-2 text-6xl text-rostani-sage/10 font-serif leading-none">“</span>
                  <p className="text-rostani-slate leading-relaxed relative z-10 italic">
                    I founded Rostani to ensure that no part of your existence—from your cellular health to your soul's purpose—is ever ignored. Healing is not a destination, but a return to your original state of holographic wholeness.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="relative group">
                <div className="absolute -top-12 -left-12 w-48 h-48 border border-rostani-sage/20 rounded-full animate-pulse" />
                <div className="absolute -bottom-12 -right-12 w-72 h-72 bg-rostani-dark-sage/5 rounded-full" />
                
                <div className="relative rounded-[2.5rem] rounded-tr-[10rem] overflow-hidden shadow-2xl transition-all duration-700 group-hover:shadow-rostani-sage/30">
                  <img 
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80" 
                    alt="Shadi Servat - Founder"
                    className="w-full h-[500px] object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rostani-dark-sage/20 via-transparent to-transparent opacity-60" />
                </div>
                
                <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white/90 backdrop-blur-lg p-6 rounded-2xl shadow-2xl border border-rostani-sage/20 animate-in fade-in slide-in-from-left duration-1000 delay-500">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-rostani-sage/10 flex items-center justify-center text-rostani-sage">
                      <Wind className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-bold text-rostani-slate/50">Core Philosophy</p>
                      <p className="text-base font-playfair text-rostani-dark-sage font-bold">Holographic Health</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Section */}
      <section id="clinic" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-playfair text-rostani-dark-sage">The Clinic: Active Services</h2>
            <p className="text-rostani-slate/70">Choose Your Pathway to Wholeness</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Integrative Private Session',
                sub: 'Psychotherapy + Coaching',
                desc: 'Don’t choose between healing the past and building the future. Using depth psychology and actionable coaching, we address your patterns from both ends.',
                price: '$55 USD / Session',
                cta: 'Book Session'
              },
              {
                title: 'Energy Balance & Cleansing',
                sub: 'Remote Pranic Healing',
                desc: 'Reset your nervous system and restore your flow without physical contact. Includes aura cleansing, chakra balancing, and energetic cord removal.',
                price: '$294 USD / 21-Day Package',
                cta: 'Start Healing',
                featured: true
              },
              {
                title: 'Community Growth Circles',
                sub: 'Group Coaching',
                desc: 'Safe spaces to build resilience, overcome procrastination, and connect with like-minded souls on the path to holographic health.',
                price: '$20 USD / Month',
                cta: 'Join Waitlist'
              }
            ].map((service, i) => (
              <div 
                key={i} 
                className={`flex flex-col bg-white p-10 rounded-3xl border ${service.featured ? 'border-rostani-sage ring-4 ring-rostani-sage/5' : 'border-rostani-sage/10'} shadow-sm hover:shadow-xl transition-all h-full`}
              >
                <div className="mb-6">
                  {service.featured && (
                    <span className="inline-block px-3 py-1 bg-rostani-sage text-white text-[10px] font-bold uppercase tracking-wider rounded-full mb-4">Most Transformative</span>
                  )}
                  <h3 className="text-2xl font-playfair text-rostani-dark-sage mb-2">{service.title}</h3>
                  <p className="text-rostani-sage font-bold text-sm tracking-wide">{service.sub}</p>
                </div>
                <p className="text-rostani-slate/70 mb-8 flex-grow leading-relaxed">{service.desc}</p>
                <div className="pt-8 border-t border-rostani-sage/10 mt-auto">
                  <p className="text-lg font-bold text-rostani-dark-sage mb-6">{service.price}</p>
                  <button 
                    onClick={() => setIsAssistantOpen(true)}
                    className={`w-full py-4 rounded-xl font-bold transition-all ${service.featured ? 'bg-rostani-dark-sage text-white hover:bg-rostani-deep-slate shadow-lg shadow-rostani-dark-sage/20' : 'bg-rostani-cream text-rostani-dark-sage border border-rostani-sage/30 hover:bg-rostani-sage hover:text-white'}`}
                  >
                    {service.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academy Section */}
      <section id="academy" className="py-24 bg-rostani-slate text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20 space-y-6">
            <h2 className="text-4xl md:text-5xl font-playfair text-white">Rostani Academy</h2>
            <p className="text-white/60 text-lg">
              The Library of Wholeness. Our curriculum is translated across languages and dimensions of being. Choose a department to start learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { dept: 'Mind & Wisdom', sub: 'Psychology & Archetypes' },
              { dept: 'Energy & Soul', sub: 'Chakras & Hygiene' },
              { dept: 'Body & Biology', sub: 'Ayurveda & Hormones' },
              { dept: 'Movement & Breath', sub: 'Qigong & Somatic' },
              { dept: 'Environment', sub: 'Sleep & Home Container' },
              { dept: 'Spiritual Business', sub: 'Ethical Flourishing' },
            ].map((item, i) => (
              <div key={i} className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <h4 className="text-xl font-playfair text-rostani-sage mb-2">{item.dept}</h4>
                <p className="text-sm text-white/50 mb-6">{item.sub}</p>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest px-4 py-2 bg-white/5 rounded hover:bg-white hover:text-rostani-slate transition-all">
                    <span>🇬🇧 EN</span>
                  </button>
                  <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest px-4 py-2 bg-white/5 rounded hover:bg-white hover:text-rostani-slate transition-all">
                    <span>🇮🇷 FA</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-rostani-cream">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-playfair text-rostani-dark-sage text-center mb-16">Curiosities & Clarifications</h2>
          
          <div className="space-y-4">
            {[
              { q: 'What is the Holographic Approach?', a: 'It means we treat the whole system. We believe your life story is reflected in your "Here & Now" patterns across Mind, Body, and Energy. A blockage in your digestive system (Body) often correlates with a boundary issue (Psychology) and a leakage in your solar plexus (Energy).' },
              { q: 'How does Remote Healing work?', a: 'Energy follows thought and is not limited by distance, similar to Wi-Fi. In Pranic Healing, we work with the bio-electromagnetic field (Aura) which permeates physical matter. We use focused intention and protocols to cleanse and energize this field remotely.' },
              { q: 'How can I pay from outside Iran?', a: 'We bridge global gaps. We accept secure payments via Stripe (International Credit Cards), Interac e-Transfer (Canada), and major cryptocurrencies for maximum accessibility.' },
              { q: 'Is this a medical treatment?', a: 'No. Our services are complementary and integrative. We aim to support your recovery and well-being alongside traditional medicine. Please do not stop your medical prescriptions without consulting your physician.' }
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-rostani-sage/10 overflow-hidden shadow-sm transition-all hover:shadow-md">
                <summary className="p-6 flex justify-between items-center cursor-pointer list-none">
                  <span className="font-bold text-rostani-slate pr-4">{faq.q}</span>
                  <ChevronRight className="w-5 h-5 text-rostani-sage group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-rostani-slate/70 leading-relaxed border-t border-rostani-sage/5 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-rostani-slate text-white/80 py-20 border-t border-white/5">
        <div className="container mx-auto px-6 text-center space-y-12">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center justify-center gap-4 bg-white/5 p-4 rounded-3xl backdrop-blur-sm border border-white/10">
              <img 
                src="https://raw.githubusercontent.com/shadservat/rostani-assets/main/logo.png" 
                alt="Rostani Logo" 
                className="h-16 w-auto"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="text-left">
                <h3 className="text-2xl font-playfair font-bold text-white tracking-tighter leading-none mb-1">ROSTANI</h3>
                <p className="text-[10px] tracking-[0.3em] uppercase font-light text-rostani-sage">Integrative Health</p>
              </div>
            </div>
            <p className="text-sm tracking-widest uppercase font-light text-rostani-sage max-w-md">Science meets Soul. Rooted in Truth. Blooming in Wholeness.</p>
          </div>

          <div className="flex justify-center gap-8">
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-rostani-sage transition-all"><Instagram className="w-5 h-5 text-white" /></a>
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-rostani-sage transition-all"><Linkedin className="w-5 h-5 text-white" /></a>
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-rostani-sage transition-all"><Mail className="w-5 h-5 text-white" /></a>
          </div>

          <div className="space-y-2 border-t border-white/5 pt-12">
            <p className="text-xs font-light">Designed by Shadi Servat © 2026. All Rights Reserved.</p>
            <div className="flex justify-center gap-6 text-[10px] uppercase tracking-[0.2em] font-medium">
              <a href="#" className="hover:text-rostani-sage transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-rostani-sage transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      <AssistantModal isOpen={isAssistantOpen} onClose={() => setIsAssistantOpen(false)} />
    </div>
  );
};

export default App;
