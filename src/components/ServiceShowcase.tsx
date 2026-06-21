import { useState } from "react";
import { Service } from "../types";
import { Award, ShieldCheck, Clock, Activity, ArrowRight, Table } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const SERVICES_DATA: Service[] = [
  {
    id: "implant",
    title: "Dental Implants & Implantology",
    shortDesc: "Implants that look, feel, and function just like your natural teeth.",
    fullDesc: "Dr. Yousaf's specialized clinical mastery is dental implants. As a respected Assistant Professor of Dentistry, he utilizes the latest Guided Implant Surgery techniques for maximum surgical safety and stability. Implants restore missing teeth permanently, preventing jaw bone recession and maintaining youthful facial contours.",
    benefits: [
      "Lifetime tooth replacement solution",
      "Prevents bone loss and facial contour change",
      "No slippage – natural bite and chewing retention",
      "High-grade biocompatible titanium fixtures",
      "Single tooth, multiple teeth, or full arch restorations"
    ],
    duration: "2-4 sessions depending on healing profile",
    iconName: "ShieldCheck"
  },
  {
    id: "surgery",
    title: "Advanced Oral Surgery",
    shortDesc: "Stellar minor and major surgical care from an expert Oral Surgeon.",
    fullDesc: "As a registered Oral Surgeon with years of academic and clinical practice, Dr. Yousaf handles complicated tooth extractions, impacted wisdom tooth surgeries, alveoloplastics, and bone grafts. The focus is always on atraumatic, minimally invasive surgical protocols to yield comfortable, rapid healing.",
    benefits: [
      "Safe, pain-free extraction of deep wisdom teeth",
      "Minimally invasive bone grafting for weak ridges",
      "Expert trauma management and cyst removals",
      "Advanced sedation options for high-anxiety patients",
      "Post-operative support and dedicated recovery advisory"
    ],
    duration: "30 - 90 minutes per procedure",
    iconName: "Activity"
  },
  {
    id: "rct",
    title: "Painless Root Canal Treatment (RCT)",
    shortDesc: "Painless, efficient state-of-the-art RCT to rescue damaged teeth.",
    fullDesc: "Save your native tooth from extraction. Using modern computerized rotary systems, digital Apex Locators, and magnification, Dr. Yousaf makes Root Canal Treatments quick, efficient, and completely pain-free. Reviewers frequently laud the clinic for its painless and modern RCT standards.",
    benefits: [
      "Preserves the natural tooth root and structural strength",
      "Computerized rotary system for rapid cleaning",
      "100% painless procedure using advanced local anesthetics",
      "Prevents absolute spread of jaw infections",
      "Usually completed in a single comfortable visit"
    ],
    duration: "45 minutes (Single visit or multiple if needed)",
    iconName: "Clock"
  },
  {
    id: "ortho",
    title: "Orthodontics & Restorative Dentistry",
    shortDesc: "Aesthetic smile aligners, metal braces, and crown/bridge systems.",
    fullDesc: "From traditional high-strength brackets to clear, aesthetic aligners, we straighten teeth for children and adults. We also specialize in cosmetic composites, laser fillings, lithium disilicate veneers, and durable zirconia dental crown placements to fully reconstruct worn smiles.",
    benefits: [
      "Custom metal, ceramic, and premium invisible aligners",
      "Heavy duty zirconia crowns for long-term masticatory support",
      "Aesthetic tooth-colored composites (unnoticeable fillings)",
      "Smile transformations and Hollywood smile design",
      "Pediatric and adult corrective dental alignments"
    ],
    duration: "Varies by case (assessment is requested first)",
    iconName: "Award"
  }
];

export default function ServiceShowcase() {
  const [activeTab, setActiveTab] = useState("implant");

  const selectedService = SERVICES_DATA.find((s) => s.id === activeTab) || SERVICES_DATA[0];

  const getIcon = (name: string) => {
    switch (name) {
      case "ShieldCheck":
        return <ShieldCheck className="text-teal-600" size={24} />;
      case "Activity":
        return <Activity className="text-teal-600" size={24} />;
      case "Clock":
        return <Clock className="text-teal-600" size={24} />;
      default:
        return <Award className="text-teal-600" size={24} />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50 border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1.5 rounded-full font-sans">
            Specialized Care
          </span>
          <h2 className="text-3xl sm:text-4xl text-zinc-900 font-serif font-semibold mt-4 tracking-tight">
            Comprehensive Dental Expertise
          </h2>
          <p className="text-zinc-600 mt-3 sm:text-lg font-sans">
            Bridging academic rigor with compassionate clinical mastery to deliver the finest care in Attock & Mardan.
          </p>
        </div>

        {/* Tab List */}
        <div className="flex overflow-x-auto pb-4 gap-2 scrollbar-none snap-x justify-start md:justify-center">
          {SERVICES_DATA.map((service) => (
            <button
              key={service.id}
              id={`tab-btn-${service.id}`}
              onClick={() => setActiveTab(service.id)}
              className={`px-5 py-3 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-300 pointer-events-auto snap-center flex items-center gap-2 border cursor-pointer ${
                activeTab === service.id
                  ? "bg-teal-950 text-white border-teal-950 shadow-md"
                  : "bg-white text-zinc-600 border-zinc-200 hover:border-teal-900 hover:text-teal-950 shadow-sm"
              }`}
            >
              {getIcon(service.iconName)}
              {service.title.split(" & ")[0]}
            </button>
          ))}
        </div>

        {/* Tab Panel */}
        <div id="service-panel-container" className="mt-8 bg-white border border-zinc-100 rounded-3xl p-6 sm:p-10 shadow-xl max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedService.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="p-3 bg-teal-50 text-teal-800 rounded-xl">
                    {getIcon(selectedService.iconName)}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900">
                    {selectedService.title}
                  </h3>
                </div>

                <p className="text-zinc-700 leading-relaxed font-sans text-sm sm:text-base">
                  {selectedService.fullDesc}
                </p>

                <div className="mt-6 flex items-center gap-2 text-xs bg-slate-50 text-zinc-500 font-mono py-2 px-3 rounded-lg border border-zinc-100 w-fit">
                  <Clock size={14} className="text-teal-700" />
                  <span>Est. Time: {selectedService.duration}</span>
                </div>

                <div className="mt-8">
                  <button
                    id="service-cta-btn"
                    onClick={() => {
                      const msg = encodeURIComponent(`Hello Dr. Yousaf, I would like to book a consultation for "${selectedService.title}"`);
                      window.open(`https://wa.me/923099111870?text=${msg}`, "_blank");
                    }}
                    className="w-full sm:w-auto bg-teal-950 text-white font-semibold py-3.5 px-8 rounded-xl text-sm transition-all hover:bg-teal-900 shadow-lg flex items-center justify-center gap-2 group pointer-events-auto cursor-pointer"
                  >
                    Inquire on WhatsApp
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 bg-teal-50/40 border border-teal-100/50 rounded-2xl p-6">
                <h4 className="text-sm font-semibold tracking-wide uppercase text-teal-950 font-sans mb-4">
                  Targeted Outcomes & Benefits:
                </h4>
                <ul className="space-y-3.5">
                  {selectedService.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-zinc-700 text-sm font-sans">
                      <span className="text-emerald-500 font-bold text-base select-none mt-0.5">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
