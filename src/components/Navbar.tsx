import { Phone, CheckSquare, MessageCircle, Star } from "lucide-react";

export default function Navbar() {
  const handleBooking = () => {
    const msg = encodeURIComponent("Hello Dr. M. Yousaf, I would like to schedule a dental checkup at your Attock Clinic.");
    window.open(`https://wa.me/923099111870?text=${msg}`, "_blank");
  };

  return (
    <header id="site-header" className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand area */}
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-700"></span>
              <span className="text-base sm:text-lg font-serif font-bold text-zinc-900 tracking-tight leading-none">
                Dr. Yousaf Dental Clinic
              </span>
            </div>
            <p className="text-[10px] text-teal-800 font-sans tracking-wide font-medium mt-0.5 ml-4">
              Asst Prof · Oral Surgeon & Implant Specialist
            </p>
          </div>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#services" className="text-xs font-semibold uppercase tracking-wider text-zinc-600 hover:text-teal-900 transition-colors">
              Specialties
            </a>
            <a href="#assessment" className="text-xs font-semibold uppercase tracking-wider text-zinc-600 hover:text-teal-900 transition-colors">
              Consultation Wizard
            </a>
            <a href="#reviews" className="text-xs font-semibold uppercase tracking-wider text-zinc-600 hover:text-teal-900 transition-colors">
              Reviews
            </a>
            <a href="#contact" className="text-xs font-semibold uppercase tracking-wider text-zinc-600 hover:text-teal-900 transition-colors" >
              Find Us
            </a>
          </nav>

          {/* Header Action CTA */}
          <div className="flex items-center gap-2">
            <a
              id="header-phone-ref"
              href="tel:+923099111870"
              className="flex items-center gap-1 bg-slate-50 border border-zinc-100 hover:bg-slate-100 text-zinc-800 text-xs font-semibold py-2 px-3 sm:px-4 rounded-xl transition-all"
            >
              <Phone size={13} className="text-teal-800" />
              <span className="hidden sm:inline">0309 9111870</span>
            </a>
            <button
              id="header-booking"
              onClick={handleBooking}
              className="bg-teal-950 hover:bg-teal-900 text-white text-xs font-semibold py-2.5 px-3.5 sm:px-5 rounded-xl shadow-sm transition-all pointer-events-auto cursor-pointer"
            >
              Book Free Checkup
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
