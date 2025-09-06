import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Welcome: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showTibotImage, setShowTibotImage] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const features = [
    {
      title: "Automated Scheduling",
      desc: "Ensure classes start and end on time — replaces manual bell systems to support punctuality and discipline.",
      cta: "View More"
    },
    {
      title: "Campus Communication",
      desc: "Clear announcements and emergency notifications across classrooms, offices, hostels and outdoor areas.",
      cta: "View More"
    },
    {
      title: "Safety & Security",
      desc: "Emergency push button triggers immediate campus-wide alerts with pre-recorded or live messages.",
      cta: "View More"
    }
  ];

  const testimonials = [
    {
      name: "School Principal",
      quote: "With TI-BOT our operations became seamless — punctuality improved and staff can focus on teaching. The emergency alerts give us confidence.",
    },
    {
      name: "Head of Admin",
      quote: "Solar-powered reliability meant no interruptions to announcements during outages. Installation was smooth and support was excellent.",
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

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
              <a className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200" href="#features">Features</a>
              <Link className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200" to="/pricing">Pricing</Link>
              <a className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200" href="#testimonials">Testimonials</a>
              <a className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200" href="#contact">Contact</a>
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
              <a 
                href="#features" 
                className="block py-3 px-4 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <Link 
                to="/pricing" 
                className="block py-3 px-4 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <a 
                href="#testimonials" 
                className="block py-3 px-4 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#contact" 
                className="block py-3 px-4 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
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

      {/* HERO */}
      <header ref={heroRef} className="relative flex flex-col justify-center items-center overflow-hidden min-h-screen text-center pt-16 sm:pt-20 px-4">
        {/* 3D Interactive Background Elements */}
        <div className="absolute inset-0 z-0">
          {/* Primary large orb - follows mouse */}
          <div
            className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-blue-500/25 to-blue-600/20 blur-[80px] sm:blur-[100px] md:blur-[120px] transition-all duration-700 ease-out"
            style={{
              top: '15%',
              left: `${25 + (mousePosition.x / 20)}%`,
              transform: `translate(-50%, -50%) scale(${1 + (mousePosition.x + mousePosition.y) / 2500})`,
            }}
          ></div>

          {/* Secondary orb - opposite movement */}
          <div
            className="absolute w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-r from-indigo-400/15 to-purple-500/10 blur-[60px] sm:blur-[80px] md:blur-[100px] transition-all duration-500 ease-out"
            style={{
              bottom: '25%',
              right: `${15 - (mousePosition.x / 30)}%`,
              transform: `translate(50%, 50%) scale(${0.8 + (mousePosition.y / 2000)})`,
            }}
          ></div>

          {/* Floating geometric shapes */}
          <div
            className="absolute w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border border-blue-400/30 rounded-full transition-all duration-1000 ease-out"
            style={{
              top: `${35 + (mousePosition.y / 50)}%`,
              left: `${10 + (mousePosition.x / 70)}%`,
              transform: `scale(${1 + (mousePosition.x + mousePosition.y) / 3500})`,
            }}
          ></div>

          <div
            className="absolute w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 border border-indigo-400/20 rotate-45 transition-all duration-800 ease-out"
            style={{
              top: `${65 + (mousePosition.x / 60)}%`,
              right: `${20 + (mousePosition.y / 55)}%`,
              transform: `rotate(${45 + (mousePosition.x / 12)}deg) scale(${0.9 + (mousePosition.y / 2200)})`,
            }}
          ></div>

          {/* Additional floating particles */}
          <div
            className="absolute w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-blue-400/20 rounded-full blur-sm transition-all duration-600 ease-out"
            style={{
              top: `${45 + (mousePosition.x / 90)}%`,
              left: `${70 + (mousePosition.y / 80)}%`,
            }}
          ></div>

          <div
            className="absolute w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-indigo-400/15 rounded-full blur-sm transition-all duration-900 ease-out"
            style={{
              bottom: `${30 + (mousePosition.y / 70)}%`,
              left: `${40 + (mousePosition.x / 100)}%`,
            }}
          ></div>
        </div>

        {/* Robot Head SVG */}
        <div className="relative z-20 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-[-2rem] sm:mb-[-3rem] md:mb-[-4rem] lg:mb-[-5rem] animate-float">
          <svg viewBox="0 0 100 100" className="w-full h-full text-gray-800 dark:text-slate-200 drop-shadow-lg">
            {/* Main head shape */}
            <path d="M 20 30 Q 50 10 80 30 L 80 70 Q 50 90 20 70 L 20 30"
              className="fill-gray-200 dark:fill-slate-800 stroke-gray-400 dark:stroke-slate-600 stroke-2" />

            {/* Glowing visor/eyes */}
            <rect x="30" y="40" width="40" height="15" rx="5" ry="5"
              className="fill-blue-400 opacity-90" style={{ filter: "drop-shadow(0 0 8px #3B82F6)" }} />
            <path d="M 35 48 L 45 48 M 55 48 L 65 48"
              className="stroke-black stroke-[3px]" />
          </svg>
        </div>

        {/* Hero Title and Text */}
        <div className="relative z-10 p-4">
          <h1 className="relative text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[12rem] xl:text-[16rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-slate-100 dark:to-slate-400">
            Ti-Bot Ai
          </h1>
          <p className="mt-2 md:mt-4 max-w-xs sm:max-w-md md:max-w-xl mx-auto text-sm sm:text-base md:text-lg font-semibold text-gray-600 dark:text-slate-300">Ti-Bot Ai makes your school super smart and creates a safe, conducive learning environment for schools and organisations.</p>
        </div>

        {/* Hero CTAs */}
        <div className="mt-4 sm:mt-6 md:mt-8 relative z-10 flex flex-col sm:flex-row gap-3 sm:gap-4 px-4">
          <a href="#features" className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-blue-600 text-white rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30">Explore TI-Bot Ai</a>
          <button
            onClick={() => setShowTibotImage(true)}
            className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
          >
            View TI-Bot Ai Image
          </button>
          <a href="#contact" className="inline-block px-6 sm:px-8 py-2 sm:py-3 border border-gray-300 dark:border-slate-600 rounded-full text-gray-700 dark:text-slate-300 text-sm sm:text-base transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-600 dark:hover:border-blue-400 hover:scale-105">Book Free Site Survey</a>
        </div>
      </header>

      {/* FEATURES / SOLUTIONS */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-slate-100">Featured Solutions</h3>
        <p className="text-center text-gray-500 dark:text-slate-400 mt-3 text-sm sm:text-base">Explore our latest creations — designed for Nigerian schools to enhance campus efficiency and safety.</p>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((f, i) => (
            <article key={i} className="rounded-2xl bg-white dark:bg-slate-800/60 p-4 sm:p-6 border border-gray-200 dark:border-slate-700 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-200/20 dark:hover:shadow-slate-800/20">
              <div className="h-32 sm:h-40 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-700 border border-gray-200 dark:border-slate-600 flex items-center justify-center relative overflow-hidden">
                {/* Tech SVG Icons */}
                {i === 0 && (
                  <svg className="w-12 h-12 sm:w-16 sm:h-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                {i === 1 && (
                  <svg className="w-12 h-12 sm:w-16 sm:h-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                )}
                {i === 2 && (
                  <svg className="w-12 h-12 sm:w-16 sm:h-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                {/* Fallback text */}
                {!i && <div className="text-gray-500 dark:text-slate-400 text-sm">.</div>}
              </div>
              <h4 className="mt-3 sm:mt-4 font-semibold text-lg sm:text-xl text-gray-900 dark:text-slate-100">{f.title}</h4>
              <p className="mt-2 text-gray-600 dark:text-slate-400 text-sm sm:text-base">{f.desc}</p>
              <button className="mt-3 sm:mt-4 px-3 sm:px-4 py-2 rounded-full bg-blue-600 text-white font-semibold text-sm sm:text-base transition-transform duration-200 hover:scale-105 hover:bg-blue-700">
                {f.cta}
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 bg-gray-50 dark:bg-slate-900/30">
        <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-slate-100">Client Testimonials</h3>
        <p className="text-center text-gray-500 dark:text-slate-400 mt-2 text-sm sm:text-base">See what our partners say about TI-BOT</p>

        <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700">
              <p className="text-gray-700 dark:text-slate-200 text-sm sm:text-base">"{t.quote}"</p>
              <div className="mt-3 sm:mt-4 text-sm text-gray-500 dark:text-slate-400">— {t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* IMPLEMENTATION PLAN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 bg-gray-50 dark:bg-slate-900/30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700">
            <h5 className="font-semibold text-gray-900 dark:text-slate-100 text-base sm:text-lg">Site Survey</h5>
            <p className="text-gray-600 dark:text-slate-400 mt-2 text-sm sm:text-base">Free comprehensive assessment of the school's campus layout and infrastructure.</p>
          </div>
          <div className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700">
            <h5 className="font-semibold text-gray-900 dark:text-slate-100 text-base sm:text-lg">Installation</h5>
            <p className="text-gray-600 dark:text-slate-400 mt-2 text-sm sm:text-base">Deploy TI-BOT Control Brain and Audio Distribution Units across the campus.</p>
          </div>
          <div className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700">
            <h5 className="font-semibold text-gray-900 dark:text-slate-100 text-base sm:text-lg">Testing & Training</h5>
            <p className="text-gray-600 dark:text-slate-400 mt-2 text-sm sm:text-base">Verify system functionality and provide staff training for smooth handover.</p>
          </div>
        </div>
        <p className="mt-4 sm:mt-6 text-gray-600 dark:text-slate-400 text-sm sm:text-base">Timeline: <strong>30–40 days</strong> (dependent on campus size).</p>
      </section>

      {/* CONTACT */}
      <footer id="contact" className="bg-gray-100 dark:bg-slate-900/60 border-t border-gray-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-start">
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
              <li><Link to="/pricing">Pricing</Link></li>
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

      {/* TI-BOT Image Modal */}
      {showTibotImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden">
              <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-slate-700">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">TI-BOT System</h3>
                  <button
                    onClick={() => setShowTibotImage(false)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="relative bg-gray-100 dark:bg-slate-700 rounded-xl overflow-hidden">
                  <img
                    src="/Tibot.png"
                    alt="TI-BOT System"
                    className="w-full h-auto max-h-[60vh] object-contain"
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    The TI-BOT system - Advanced school automation technology for enhanced campus management and student safety.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Welcome;
