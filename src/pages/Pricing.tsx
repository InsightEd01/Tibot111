import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

export function Pricing() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const components = [
    {
      name: "Control Brain (school power)",
      description: "The central unit that manages all automated scheduling and communications, powered by the school's electricity.",
      price: "₦300,000",
    },
    {
      name: "Control Brain (with solar)",
      description: "A more robust, solar-powered control unit that ensures continuous operation even during power outages.",
      price: "₦620,000",
    },
    {
      name: "Audio Distribution Unit",
      description: "These smart, solar-powered speakers are strategically placed throughout the campus to broadcast announcements and bell schedules.",
      price: "₦190,000 / unit",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white dark:from-neutral-900 dark:via-slate-900 dark:to-black text-gray-900 dark:text-slate-100 font-sans antialiased min-h-screen">
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img
                src="/octa-logo.png"
                alt="Octa Node Engineering Ltd"
                className="h-8 w-auto sm:h-10 rounded-lg"
              />
              <div className="hidden sm:block">
                <div className="text-sm font-semibold text-gray-900 dark:text-white">Octa Node Engineering</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">One Intelligence</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200" to="/">Home</Link>
              <a className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200" href="#plans">Components</a>
              <Link className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200" to="/">Testimonials</Link>
              <Link className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200" to="/">Contact</Link>
              <Link to="/login" className="ml-4 px-4 py-2 rounded-full bg-blue-600 text-white font-semibold transition-transform duration-200 hover:scale-105 hover:bg-blue-700">Login</Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-30 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}>
          <div className="fixed top-16 left-0 right-0 bg-white dark:bg-slate-900 shadow-lg border-t border-gray-200 dark:border-slate-700">
            <div className="px-4 py-6 space-y-4">
              <Link 
                to="/" 
                className="block py-3 px-4 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <a 
                href="#plans" 
                className="block py-3 px-4 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Components
              </a>
              <Link 
                to="/" 
                className="block py-3 px-4 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link 
                to="/" 
                className="block py-3 px-4 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 border-t border-gray-200 dark:border-slate-700">
                <Link 
                  to="/login" 
                  className="block w-full py-3 px-4 bg-blue-600 text-white text-center rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* HERO/PRICING HEADER */}
      <header className="relative flex flex-col justify-center items-center min-h-[40vh] sm:min-h-[50vh] text-center p-4 sm:p-6 pt-20 sm:pt-24">
        <div className="absolute inset-0 z-0 opacity-20 dark:opacity-30">
          <div className="absolute top-[10%] left-[20%] w-48 h-48 sm:w-64 sm:w-64 md:w-72 md:h-72 rounded-full bg-blue-500/15 blur-[60px] sm:blur-[80px] md:blur-[100px] animate-pulse-slow"></div>
          <div className="absolute bottom-[10%] right-[20%] w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full bg-blue-400/10 blur-[50px] sm:blur-[70px] md:blur-[100px] animate-pulse-slow-reverse"></div>
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-slate-100 dark:to-slate-400">
            TI-BOT Pricing
          </h1>
          <p className="mt-3 sm:mt-4 text-gray-600 dark:text-slate-300 text-sm sm:text-base md:text-lg">
            Costs depend on power arrangement and number of audio units required.
          </p>
        </div>
      </header>

      {/* SYSTEM COMPONENTS & COSTS */}
      <section id="plans" className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-10 text-gray-900 dark:text-slate-100">System Components & Costs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {components.map((comp, i) => (
            <div key={i} className="p-4 sm:p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800/40 backdrop-blur-sm transition-transform duration-300 hover:scale-[1.02] relative overflow-hidden">
              {/* Tech background pattern */}
              <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  <defs>
                    <pattern id={`tech-pattern-${i}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <circle cx="20" cy="20" r="1" fill="currentColor" />
                      <rect x="18" y="18" width="4" height="4" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="400" height="400" fill={`url(#tech-pattern-${i})`} />
                </svg>
              </div>

              {/* Tech Icon */}
              <div className="relative z-10 flex justify-center mb-3 sm:mb-4">
                {i === 0 && (
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                )}
                {i === 1 && (
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )}
                {i === 2 && (
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                )}
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-slate-200 relative z-10">{comp.name}</h3>
              <p className="mt-2 text-gray-600 dark:text-slate-400 relative z-10 text-sm sm:text-base">{comp.description}</p>
              <div className="mt-4 sm:mt-6 text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 relative z-10">{comp.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ADDITIONAL INFORMATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 bg-gray-50 dark:bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-900 dark:text-slate-100">Additional Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="p-4 sm:p-6 rounded-xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700">
              <h4 className="font-semibold text-gray-900 dark:text-slate-100 text-sm sm:text-base mb-3">Free Services Included</h4>
              <ul className="text-gray-600 dark:text-slate-400 text-sm sm:text-base space-y-2">
                <li>• Free site survey and assessment</li>
                <li>• Installation and setup</li>
                <li>• Staff training and handover</li>
                <li>• 18 months maintenance and updates</li>
              </ul>
            </div>
            <div className="p-4 sm:p-6 rounded-xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700">
              <h4 className="font-semibold text-gray-900 dark:text-slate-100 text-sm sm:text-base mb-3">Timeline</h4>
              <p className="text-gray-600 dark:text-slate-400 text-sm sm:text-base">30-40 days from site survey to full implementation, depending on campus size and complexity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 text-center">
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-gray-900 dark:text-slate-100">Ready to Transform Your School?</h3>
        <p className="text-gray-600 dark:text-slate-400 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
          Contact us today for a free site survey and personalized quote for your school's TI-BOT system.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link to="/" className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-blue-600 text-white rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30">Back to Home</Link>
          <Link to="/login" className="inline-block px-6 sm:px-8 py-2 sm:py-3 border border-gray-300 dark:border-slate-600 rounded-full text-gray-700 dark:text-slate-300 text-sm sm:text-base transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-600 dark:hover:border-blue-400 hover:scale-105">Access Dashboard</Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-100 dark:bg-slate-900/60 border-t border-gray-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-start">
          <div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-slate-100">Octa Node Engineering Ltd (One Intelligence)</h4>
            <p className="text-gray-600 dark:text-slate-400 mt-2">Delivering smart, solar-powered school automation solutions across Nigeria.</p>
            <div className="mt-4 text-sm text-gray-500 dark:text-slate-400">
              <div>Phone: +234910646157</div>
              <div>Email: support@octanode.online</div>
            </div>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 dark:text-slate-100">Quick Links</h5>
            <ul className="mt-2 text-gray-600 dark:text-slate-400">
              <li><Link to="/">Home</Link></li>
              <li><a href="#plans">Pricing</a></li>
              <li><Link to="/">Testimonials</Link></li>
              <li><Link to="/">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 dark:text-slate-100">Book a Free Site Survey</h5>
            <p className="text-gray-600 dark:text-slate-400 mt-2">Fill the form (or contact us directly) and we'll schedule a free site survey across your campus.</p>
            <form className="mt-4 flex flex-col gap-3">
              <input className="p-3 rounded-md bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-700 text-gray-900 dark:text-slate-200" placeholder="Your name" />
              <input className="p-3 rounded-md bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-700 text-gray-900 dark:text-slate-200" placeholder="Email" />
              <input className="p-3 rounded-md bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-700 text-gray-900 dark:text-slate-200" placeholder="Phone" />
              <button className="mt-2 px-4 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700">Request Survey</button>
            </form>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 dark:text-slate-500 py-6 border-t border-gray-200 dark:border-slate-800">© {new Date().getFullYear()} One Intelligence — Octa Node Engineering Ltd. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default Pricing;
