import { useState } from "react";
import { MessageSquare, CalendarClock, ArrowLeft, Send, Sparkles, CheckSquare, HeartHandshake } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Option {
  label: string;
  desc: string;
  value: string;
}

interface Step {
  id: number;
  title: string;
  subtitle: string;
  key: "concern" | "duration" | "pain";
  options: Option[];
}

const ASSESSMENT_STEPS: Step[] = [
  {
    id: 1,
    title: "What is your primary dental concern?",
    subtitle: "Select the option that matches what you are looking to treat.",
    key: "concern",
    options: [
      { label: "Dental Implant & Tooth Replacement", desc: "For missing, cracked, or loose teeth that require a permanent surgical solution.", value: "Dental Implant" },
      { label: "Severe Pain, RCT & Root Canal", desc: "For extreme toothaches, nerve sensitivities, or deep localized cavity infections.", value: "Root Canal Therapy (RCT)" },
      { label: "Cosmetics & Tooth Realignment", desc: "Braces, invisible clear aligners, teeth whitening, veneers, or minor aesthetic reshaping.", value: "Cosmetic / Braces" },
      { label: "General Dentistry & Cleaning", desc: "Routine scale and polish, wisdom teeth checkup, simple cavities, or general consult.", value: "General Checkup" }
    ]
  },
  {
    id: 2,
    title: "How long has this been bothering you?",
    subtitle: "Knowing the timeframe helps establish diagnostic urgency.",
    key: "duration",
    options: [
      { label: "Just a few days", desc: "Slight onset, manageable but seeking professional check to avoid infection development.", value: "Few days" },
      { label: "Several weeks to months", desc: "Intermediate discomfort that has persisted over a long period.", value: "Weeks/Months" },
      { label: "It is a chronic issues / years", desc: "Long-standing dental gaps, chronic wear, or misalignment ready for correction.", value: "Chronic / Long term" }
    ]
  },
  {
    id: 3,
    title: "What level of pain or sensitivity do you feel?",
    subtitle: "Helps Dr. Yousaf triage your appointment for scheduling priority.",
    key: "pain",
    options: [
      { label: "No major pain or discomfort", desc: "Excellent. Primarily cosmetic, preventative, or functional consultation interest.", value: "No continuous pain" },
      { label: "Mild / Moderate sensitivity", desc: "Intermittent sensitivity to cold or hot liquids, dull ache when chewing.", value: "Mild/Moderate sensitivity" },
      { label: "Severe or constant throbbing pain", desc: "High priority. Constant pain, dental abscess, swelling, or infection signs.", value: "Severe continuous pain" }
    ]
  }
];

export default function SmileAssessment() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({
    concern: "",
    duration: "",
    pain: ""
  });
  const [patientName, setPatientName] = useState("");
  const [showSummary, setShowSummary] = useState(false);

  const handleSelectOption = (key: "concern" | "duration" | "pain", value: string) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
    if (currentStep < ASSESSMENT_STEPS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setShowSummary(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const resetAssessment = () => {
    setAnswers({ concern: "", duration: "", pain: "" });
    setCurrentStep(0);
    setShowSummary(false);
  };

  const currentQuestion = ASSESSMENT_STEPS[currentStep];

  const generateWhatsAppMessage = () => {
    const formattedName = patientName ? `Name: ${patientName}` : "Name: Visitor";
    const text = `Asst Prof Dr. Yousaf Dental Clinic Inquiry:
------------------------------------------
${formattedName}
Primary Concern: ${answers.concern}
Duration: ${answers.duration}
Pain/Sensitivity Status: ${answers.pain}
------------------------------------------
Please recommend a suitable consultation slot at Attock Medical Centre.`;
    return encodeURIComponent(text);
  };

  const triggerWhatsApp = () => {
    const url = `https://wa.me/923099111870?text=${generateWhatsAppMessage()}`;
    window.open(url, "_blank");
  };

  return (
    <section id="assessment" className="py-20 bg-slate-50 border-b border-zinc-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1.5 rounded-full font-sans">
            Interactive Diagnostics
          </span>
          <h2 className="text-3xl sm:text-4xl text-zinc-900 font-serif font-semibold mt-4 tracking-tight">
            Consultation Wizard
          </h2>
          <p className="text-zinc-600 mt-3 text-sm sm:text-base font-sans">
            In 1 minute, create a structured pre-clinical report for Dr. Yousaf to accelerate booking your treatment.
          </p>
        </div>

        <div className="bg-white border border-zinc-100 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          
          {/* Progress bar */}
          {!showSummary && (
            <div className="w-full bg-slate-100 h-1.5 rounded-full mb-8 relative">
              <div 
                className="bg-teal-900 h-1.5 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / ASSESSMENT_STEPS.length) * 100}%` }}
              ></div>
              <div className="absolute top-4 right-0 text-[10px] font-mono text-zinc-400">
                Step {currentStep + 1} of {ASSESSMENT_STEPS.length}
              </div>
            </div>
          )}

          <AnimatePresence mode="wait">
            {!showSummary ? (
              <motion.div
                key={currentQuestion.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-zinc-900 tracking-tight">
                    {currentQuestion.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500 font-sans mt-1">
                    {currentQuestion.subtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3.5 mt-8">
                  {currentQuestion.options.map((opt, i) => {
                    const isSelected = answers[currentQuestion.key] === opt.value;
                    return (
                      <button
                        key={i}
                        id={`opt-btn-${currentQuestion.id}-${i}`}
                        onClick={() => handleSelectOption(currentQuestion.key, opt.value)}
                        className={`text-left p-4 sm:p-5 rounded-2xl border transition-all flex flex-col justify-start relative group pointer-events-auto cursor-pointer ${
                          isSelected 
                            ? "bg-teal-50/70 border-teal-800 ring-1 ring-teal-800" 
                            : "bg-white border-zinc-200 hover:border-teal-900 hover:bg-slate-50/50"
                        }`}
                      >
                        <span className="text-sm font-bold text-zinc-900 font-sans group-hover:text-teal-950 transition-colors">
                          {opt.label}
                        </span>
                        <span className="text-xs text-zinc-500 font-sans mt-1 leading-relaxed">
                          {opt.desc}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-100 flex items-center justify-between">
                  <button
                    id="back-step-btn"
                    onClick={handlePrev}
                    disabled={currentStep === 0}
                    className={`flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider font-mono transition-colors pointer-events-auto cursor-pointer ${
                      currentStep === 0 ? "text-zinc-300 pointer-events-none cursor-not-allowed" : "text-zinc-500 hover:text-teal-950"
                    }`}
                  >
                    <ArrowLeft size={14} />
                    Back
                  </button>
                  <span className="text-xs text-zinc-400 font-mono italic">
                    Tap to select and continue
                  </span>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="summary-screen"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col"
              >
                <div className="flex items-center gap-2 mb-4 text-emerald-600 bg-emerald-50 py-1.5 px-3.5 rounded-lg w-fit">
                  <Sparkles size={16} />
                  <span className="text-xs font-bold uppercase tracking-wide font-sans">Report Compiled Successfully</span>
                </div>

                <h3 className="text-2xl font-serif font-bold text-zinc-900">
                  Ready to consult with Dr. Yousaf
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 font-sans mt-1.5 leading-relaxed">
                  We've assembled your dental profile. Simply provide your name below and click to send it to our clinical line.
                </p>

                {/* Profile review values */}
                <div className="mt-6 bg-slate-50 border border-zinc-100 rounded-2xl p-5 sm:p-6 space-y-3.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3.5 border-b border-zinc-200/60">
                    <span className="text-xs text-zinc-400 font-mono uppercase tracking-wider">Primary treatment sought</span>
                    <span className="text-xs sm:text-sm font-bold text-zinc-900 font-sans">{answers.concern}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3.5 border-b border-zinc-200/60">
                    <span className="text-xs text-zinc-400 font-mono uppercase tracking-wider">Duration of discomfort</span>
                    <span className="text-xs sm:text-sm font-bold text-zinc-900 font-sans">{answers.duration}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3.5 border-b border-zinc-200/60">
                    <span className="text-xs text-zinc-400 font-mono uppercase tracking-wider">Pain indicators</span>
                    <span className="text-xs sm:text-sm font-bold text-zinc-900 font-sans">{answers.pain}</span>
                  </div>

                  <div className="pt-2">
                    <label htmlFor="patient-name-field" className="block text-xs font-semibold text-zinc-500 font-sans uppercase mb-1.5 tracking-wide">
                      Patient Name (Optional)
                    </label>
                    <input
                      type="text"
                      id="patient-name-field"
                      placeholder="e.g. Muhammad Asim"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-sans focus:outline-none focus:border-teal-900 transition-colors placeholder:text-zinc-400"
                    />
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <button
                    id="launch-whatsapp-assessment"
                    onClick={triggerWhatsApp}
                    className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3.5 px-6 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 group pointer-events-auto cursor-pointer"
                  >
                    <Send size={16} />
                    Send Report & Book on WhatsApp
                  </button>
                  <button
                    id="reset-assessment-btn"
                    onClick={resetAssessment}
                    className="bg-zinc-100 hover:bg-zinc-200 text-zinc-600 font-semibold py-3.5 px-6 rounded-xl text-sm transition-all pointer-events-auto cursor-pointer"
                  >
                    Restart Wizard
                  </button>
                </div>

                <div className="mt-6 flex items-center gap-2 bg-teal-50/20 py-2.5 px-4 rounded-xl border border-teal-100/30">
                  <HeartHandshake size={16} className="text-teal-700" />
                  <p className="text-[11px] text-zinc-500 leading-normal font-sans">
                    Dr. Yousaf is normally highly responsive. He receives messages securely at Mardan and Attock clinic numbers.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
