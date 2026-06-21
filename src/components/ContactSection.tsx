import { MapPin, Phone, Mail, Clock, CalendarDays, ExternalLink, PhoneCall } from "lucide-react";
import { useState, useEffect } from "react";

export default function ContactSection() {
  const [isOpenState, setIsOpenState] = useState(false);

  useEffect(() => {
    // Clinic is open Mon-Sat 9 AM to 8 PM (20:00)
    const checkClinicStatus = () => {
      // Use standard PKT (Pakistan Time is UTC+5, let's look at local hours or standard client time)
      const now = new Date();
      const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
      const hours = now.getHours();

      if (day === 0) {
        setIsOpenState(false); // Closed on Sundays
      } else {
        setIsOpenState(hours >= 9 && hours < 20);
      }
    };

    checkClinicStatus();
    const interval = setInterval(checkClinicStatus, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  const handleCall = () => {
    window.location.href = "tel:+923099111870";
  };

  const handleDirections = () => {
    // Open Google Maps search for Dr. Yousaf Dental Clinic Kamra Road Attock
    window.open(
      "https://www.google.com/maps/search/?api=1&query=Asst+Prof+Dr+M+Yousaf+Dental+Implant+Clinic+Attock",
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Information & Details Cards */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1.5 rounded-full font-sans">
                Quick Directions & Hours
              </span>
              <h2 className="text-3xl sm:text-4xl text-zinc-900 font-serif font-semibold mt-4 tracking-tight">
                Visit Dr. Yousaf Dental Clinic
              </h2>
              <p className="text-zinc-600 mt-3 font-sans text-sm sm:text-base leading-relaxed">
                Conveniently located at Old Attock Medical Center on Kamra Road, our modern dental unit serves Attock, Kamra Cantt, and surrounding areas.
              </p>

              {/* Dynamic open/close widget */}
              <div className="mt-6 flex items-center gap-3">
                <span className={`w-3.5 h-3.5 rounded-full ${isOpenState ? "bg-emerald-500 animate-pulse" : "bg-red-500"} block`}></span>
                <span className="text-sm font-bold text-zinc-800 font-sans">
                  {isOpenState ? "Open Now · Closes at 8:00 PM" : "Closed Now · Opens at 9:00 AM tomorrow"}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              
              <div className="bg-slate-50 border border-zinc-100 p-5 rounded-2xl flex flex-col gap-3">
                <MapPin className="text-teal-700" size={24} />
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold">Location</h4>
                  <p className="text-xs sm:text-sm text-zinc-800 font-sans font-medium mt-1 leading-normal">
                    Islamabad Specialist Clinic, Old Attock Medical Center, Kamra Rd, Attock, 43570
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 border border-zinc-100 p-5 rounded-2xl flex flex-col gap-3">
                <Phone className="text-teal-700" size={24} />
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold">Direct Calls</h4>
                  <p className="text-xs sm:text-sm text-zinc-800 font-sans font-medium mt-1 select-all">
                    0309 9111870
                  </p>
                  <p className="text-[10px] text-zinc-400 font-sans mt-0.5">+92 309 9111870</p>
                </div>
              </div>

              <div className="bg-slate-50 border border-zinc-100 p-5 rounded-2xl flex flex-col gap-3">
                <Mail className="text-teal-700" size={24} />
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold">Dental Email</h4>
                  <p className="text-xs sm:text-sm text-zinc-800 font-sans font-medium mt-1 select-all">
                    dryousafdc@gmail.com
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 border border-zinc-100 p-5 rounded-2xl flex flex-col gap-3">
                <CalendarDays className="text-teal-700" size={24} />
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold">Weekly Schedule</h4>
                  <p className="text-xs sm:text-sm text-zinc-800 font-sans font-medium mt-1">
                    Monday – Saturday
                  </p>
                  <p className="text-[10px] text-zinc-400 font-sans mt-0.5">9:00 AM – 8:00 PM PKT (Sunday Closed)</p>
                </div>
              </div>

            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                id="call-now-button"
                onClick={handleCall}
                className="flex-1 bg-teal-950 text-white font-semibold py-3.5 px-6 rounded-xl text-sm transition-all hover:bg-teal-900 shadow-md flex items-center justify-center gap-2 pointer-events-auto cursor-pointer"
              >
                <PhoneCall size={16} />
                Call Dr. Yousaf Directly
              </button>
              <button
                id="get-directions-button"
                onClick={handleDirections}
                className="flex-1 bg-zinc-100 hover:bg-zinc-200 text-teal-950 font-semibold py-3.5 px-6 rounded-xl text-sm transition-all flex items-center justify-center gap-1.5 pointer-events-auto cursor-pointer"
              >
                Get Directions Location
                <ExternalLink size={14} />
              </button>
            </div>
          </div>

          {/* Map mockup column */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div id="clinic-location-card" className="bg-slate-100 rounded-3xl p-4 sm:p-5 flex-1 flex flex-col justify-between border border-zinc-200 relative overflow-hidden min-h-[350px]">
              
              <div className="absolute inset-0 bg-sky-200 opacity-20 pointer-events-none"></div>
              
              {/* Abstract minimalist styled map background */}
              <div className="absolute inset-0 flex flex-col opacity-30 select-none pointer-events-none">
                <div id="grid-row-1" className="h-10 border-b border-zinc-300 flex">
                  <div className="w-1/3 border-r border-zinc-300"></div>
                  <div className="w-1/3 border-r border-zinc-300"></div>
                </div>
                <div id="grid-row-2" className="h-20 border-b border-zinc-300 flex">
                  <div className="w-1/4 border-r border-zinc-300 bg-sky-100"></div>
                  <div className="w-1/2 border-r border-zinc-300"></div>
                </div>
                <div id="grid-row-3" className="h-12 border-b border-zinc-300 flex">
                  <div className="w-2/3 border-r border-zinc-300 bg-emerald-100"></div>
                </div>
                <div id="grid-row-4" className="h-24 border-b border-zinc-300 flex">
                  <div className="w-1/3 border-r border-zinc-300"></div>
                  <div className="w-1/3 border-r border-zinc-300"></div>
                </div>
              </div>

              {/* Pin representation */}
              <div className="m-auto z-10 flex flex-col items-center">
                <div className="p-4 bg-teal-950 text-white rounded-full shadow-2xl relative mb-3 hover:scale-110 transition-transform">
                  <MapPin size={32} className="text-amber-400" />
                  <span className="absolute -bottom-1 left-12 whitespace-nowrap bg-teal-950 text-white text-[10px] font-mono font-bold tracking-wider uppercase py-1 px-2.5 rounded-full shadow">
                    Kamra Road Center
                  </span>
                </div>
              </div>

              {/* Bottom tag */}
              <div className="z-10 bg-white/95 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-zinc-200/50 shadow-lg mt-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h4 className="text-xs font-bold text-zinc-900 font-sans">Old Attock Medical Center</h4>
                  <p className="text-[11px] text-zinc-500 font-sans">Kamra Road, Attock</p>
                </div>
                <button
                  id="map-directions-btn"
                  onClick={handleDirections}
                  className="bg-teal-950 hover:bg-teal-900 text-white text-xs font-medium py-2 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-colors pointer-events-auto cursor-pointer"
                >
                  View on Google Maps
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
