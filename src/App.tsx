import { Star, ShieldAlert, Award, BookmarkCheck, Stethoscope, ChevronRight, Check } from "lucide-react";
import { motion } from "motion/react";
import Navbar from "./components/Navbar";
import ServiceShowcase from "./components/ServiceShowcase";
import SmileAssessment from "./components/SmileAssessment";
import ReviewsList from "./components/ReviewsList";
import ContactSection from "./components/ContactSection";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  const handleConsultationClick = () => {
    document.getElementById("assessment")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWhatsAppInstant = () => {
    const text = encodeURIComponent("Hello Dr. M. Yousaf, I would like to book a dental implant consultation.");
    window.open(`https://wa.me/923099111870?text=${text}`, "_blank");
  };

  return (
    <div id="clinic-viewport" className="min-h-screen bg-slate-50/50 flex flex-col antialiased selection:bg-teal-900 selection:text-white pb-32">
      {/* Decorative top ambient bar */}
      <div className="bg-teal-950 text-white text-[11px] font-sans text-center py-2 px-4 select-none tracking-wide flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>Asst Prof Dr. M Yousaf Dental Clinic offers premium implant treatments in Attock & Mardan</span>
      </div>

      {/* Header Bar */}
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative py-16 sm:py-24 bg-white overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Column 1: Copy with beautiful pairings */}
            <div className="lg:col-span-7 flex flex-col text-left">
              
              {/* Google Reviews rating chip */}
              <div className="flex items-center gap-2 bg-slate-50 border border-zinc-200/50 w-fit px-3.5 py-1.5 rounded-full mb-6">
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} fill="currentColor" size={13} />
                  ))}
                </div>
                <span className="text-xs font-semibold text-zinc-900 font-sans">
                  4.9 Rating <span className="text-zinc-400">(207 Reviews)</span>
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-zinc-900 font-serif font-black tracking-tight leading-[1.1]">
                Specialized Oral Surgery & <span className="text-teal-950 underline decoration-teal-700 decoration-3">Dental Implants</span>
              </h1>
              
              <p className="text-zinc-600 mt-5 text-sm sm:text-base lg:text-lg font-sans max-w-2xl leading-relaxed">
                Meet <strong className="text-zinc-900 font-semibold">Assistant Professor Dr. M. Yousaf</strong>, an esteemed academician (MMC/BKCD Mardan) and premium oral surgeon, delivering sterile, painless root canal treatments (RCT), advanced implant placements, and orthodontics at Old Attock Medical Center.
              </p>

              {/* Action grid */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3.5 max-w-md">
                <button
                  id="hero-whatsapp-btn"
                  onClick={handleWhatsAppInstant}
                  className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 px-6 rounded-2xl text-sm shadow-xl transition-all flex items-center justify-center gap-2 hover:translate-y-[-1px] active:translate-y-0 group pointer-events-auto cursor-pointer"
                >
                  Message Dr. Yousaf on WhatsApp
                  <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  id="hero-wizard-btn"
                  onClick={handleConsultationClick}
                  className="bg-zinc-100 hover:bg-zinc-200 text-teal-950 font-semibold py-4 px-6 rounded-2xl text-sm transition-all pointer-events-auto cursor-pointer"
                >
                  Consultation Wizard
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-10 pt-8 border-t border-zinc-100 grid grid-cols-3 gap-4">
                <div>
                  <h4 className="text-xl sm:text-2xl font-serif font-bold text-zinc-950">4.9★</h4>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono mt-0.5">Google Summary</p>
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-serif font-bold text-zinc-950">Asst Prof</h4>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono mt-0.5">Academic Tenure</p>
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-serif font-bold text-zinc-950">100%</h4>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono mt-0.5">Painless RCT Rate</p>
                </div>
              </div>

            </div>

            {/* Column 2: Premium Visual Card Representing Patient Confidence */}
            <div className="lg:col-span-5 relative">
              <div className="bg-slate-50 border border-zinc-200/60 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/10 rounded-full blur-2xl"></div>
                
                <h3 className="text-lg font-serif font-bold text-zinc-950 tracking-tight flex items-center gap-2 mb-4">
                  <Stethoscope className="text-teal-700" size={18} />
                  Clinic Care Standard
                </h3>

                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="w-5 h-5 rounded-full bg-teal-50 border border-teal-100 text-teal-800 flex items-center justify-center font-bold text-xs">✓</span>
                    <div>
                      <h4 className="text-xs font-bold text-zinc-900 font-sans">Academic Surgical Mastery</h4>
                      <p className="text-[11px] text-zinc-500 font-sans">Assistant Professor at MMC/BKCD Mardan Medical College, offering research-backed implants.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-5 h-5 rounded-full bg-teal-50 border border-teal-100 text-teal-800 flex items-center justify-center font-bold text-xs">✓</span>
                    <div>
                      <h4 className="text-xs font-bold text-zinc-900 font-sans">Modernized Painless RCT</h4>
                      <p className="text-[11px] text-zinc-500 font-sans">Leveraging high-precision rotary tool systems and apex finders for comfortable treatment.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-5 h-5 rounded-full bg-teal-50 border border-teal-100 text-teal-800 flex items-center justify-center font-bold text-xs">✓</span>
                    <div>
                      <h4 className="text-xs font-bold text-zinc-900 font-sans">Zero Germ Sterilization</h4>
                      <p className="text-[11px] text-zinc-500 font-sans">Strictest clinical autoclaves, sanitized rooms, and sterile packaging for patient protection.</p>
                    </div>
                  </li>
                </ul>

                <div className="mt-6 pt-5 border-t border-zinc-200/50 flex items-center justify-between">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-400">Available Location</span>
                  <span className="text-[11px] font-sans font-bold text-teal-900">Kamra Road, Attock</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Specialties Services Section */}
      <ServiceShowcase />

      {/* Doctor Bio Card Segment */}
      <section id="bio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 border border-zinc-100 rounded-[36px] p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-widest font-sans">Academic Leader</span>
              <h2 className="text-3xl sm:text-4xl text-zinc-950 font-serif font-black tracking-tight mt-3">
                Asst Prof Dr. M Yousaf
              </h2>
              <p className="text-xs text-zinc-400 font-mono uppercase tracking-widest mt-1">
                MMC/BKCD Mardan Medical College
              </p>

              <div className="mt-6 space-y-4">
                <p className="text-zinc-600 text-sm leading-relaxed font-sans">
                  Dr. Yousaf is not your average dentist; his clinical knowledge is enriched by his ongoing role as an active Assistant Professor. He trains future oral surgeons, bringing peer-reviewed excellence directly to patients in Attock.
                </p>
                <p className="text-zinc-600 text-sm leading-relaxed font-sans">
                  With specific qualifications in Dental Implantology and restorative mechanics, he has designed and executed thousands of aesthetic and therapeutic treatments with a near-perfect patient satisfaction index.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  id="bio-schedule-btn"
                  href="tel:+923099111870"
                  className="bg-teal-950 text-white font-semibold py-3 px-6 rounded-xl text-xs text-center transition-all hover:bg-teal-900 pointer-events-auto cursor-pointer"
                >
                  Call Clinic Directly
                </a>
                <button
                  id="bio-whatsapp-btn"
                  onClick={handleWhatsAppInstant}
                  className="bg-emerald-500 text-white font-semibold py-3 px-6 rounded-xl text-xs text-center transition-all hover:bg-emerald-600 pointer-events-auto cursor-pointer"
                >
                  WhatsApp Consultation
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white border border-zinc-200/50 p-6 rounded-2xl">
                <Award className="text-amber-500" size={28} />
                <h4 className="text-sm font-bold text-zinc-900 font-sans mt-3">Orthodontic Mastery</h4>
                <p className="text-xs text-zinc-500 font-sans mt-1">Braces, clear aligners, and bone management alignments.</p>
              </div>
              <div className="bg-white border border-zinc-200/50 p-6 rounded-2xl">
                <BookmarkCheck className="text-teal-700" size={28} />
                <h4 className="text-sm font-bold text-zinc-900 font-sans mt-3">Implant Precision</h4>
                <p className="text-xs text-zinc-500 font-sans mt-1">Guided titanium screw integrations that last a lifetime.</p>
              </div>
              <div className="bg-white border border-zinc-200/50 p-6 rounded-2xl">
                <Star className="text-teal-700" size={28} />
                <h4 className="text-sm font-bold text-zinc-900 font-sans mt-3">207 Verified Reviews</h4>
                <p className="text-xs text-zinc-500 font-sans mt-1">Highly celebrated dentist for pediatric and adult cases.</p>
              </div>
              <div className="bg-white border border-zinc-200/50 p-6 rounded-2xl">
                <Stethoscope className="text-teal-700" size={28} />
                <h4 className="text-sm font-bold text-zinc-900 font-sans mt-3">Clinical Pathology</h4>
                <p className="text-xs text-zinc-500 font-sans mt-1">Cyst excisions, wisdom teeth recoveries, and trauma care.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Consultation Wizard */}
      <SmileAssessment />

      {/* Verified Local Reviews Section */}
      <ReviewsList />

      {/* Contact, Schedule, MAP Container */}
      <ContactSection />

      {/* Persistent professional clinic footer */}
      <footer id="site-footer" className="bg-teal-950 text-white py-12 border-t border-teal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-teal-900">
            <div>
              <h3 className="text-base sm:text-lg font-serif font-bold text-zinc-100">
                Dr. Yousaf Dental Implant Clinic
              </h3>
              <p className="text-xs text-teal-300 font-sans mt-1">
                Asst Prof at MMC/BKCD Mardan · Islamabad Specialist Clinic Attock
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <a href="#services" className="text-xs font-semibold text-zinc-300 hover:text-white transition-colors">Specialties</a>
              <a href="#assessment" className="text-xs font-semibold text-zinc-300 hover:text-white transition-colors">Wizard</a>
              <a href="#reviews" className="text-xs font-semibold text-zinc-300 hover:text-white transition-colors">Reviews</a>
              <a href="#contact" className="text-xs font-semibold text-zinc-300 hover:text-white transition-colors">Location</a>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-[10px] text-teal-400 font-mono tracking-wide">
              &copy; {new Date().getFullYear()} Asst Prof Dr M Yousaf. All Dental Clinical Rights Reserved.
            </p>
            <p className="text-[10px] text-teal-400 font-sans leading-normal max-w-sm sm:text-right">
              Disclaimer: The local aggregate rating represents the authentic Attock clinic review portfolio on Google profile maps (4.9 stars, 207 reviews).
            </p>
          </div>
        </div>
      </footer>

      {/* Floating active WhatsApp widget */}
      <WhatsAppButton />
    </div>
  );
}
