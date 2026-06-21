import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000); // Popup after 4 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello Dr. M. Yousaf, I visited your clinic website and would like to ask a question / schedule an appointment."
    );
    window.open(`https://wa.me/923099111870?text=${message}`, "_blank");
  };

  return (
    <div id="whatsapp-widget-container" className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            id="whatsapp-tooltip"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="pointer-events-auto bg-white text-zinc-800 p-4 rounded-2xl shadow-xl border border-zinc-100 max-w-xs mb-3 flex flex-col relative"
          >
            <button
              id="close-whatsapp-tooltip"
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 p-1 text-zinc-400 hover:text-zinc-600 rounded-full transition-colors"
              aria-label="Close message popup"
            >
              <X size={14} />
            </button>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-semibold text-teal-800 font-sans tracking-wide uppercase">
                Asst Prof Dr M Yousaf Clinic
              </span>
            </div>
            <p className="text-xs text-zinc-600 font-sans leading-relaxed">
              👋 Assalamu Alaikum! Have a question about Dental Implants, Painless RCT, or clinic timings? Ask Dr. Yousaf on WhatsApp.
            </p>
            <button
              id="whatsapp-tooltip-action"
              onClick={handleWhatsAppClick}
              className="mt-2.5 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-medium py-1.5 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all shadow-sm"
            >
              <MessageCircle size={14} />
              Start Chat
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        id="floating-whatsapp-btn"
        onClick={handleWhatsAppClick}
        className="pointer-events-auto bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center relative hover:scale-110 active:scale-95 transition-transform group cursor-pointer"
        aria-label="Chat with Dr M Yousaf on WhatsApp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 border border-white rounded-full flex items-center justify-center">
          <span className="absolute w-full h-full bg-red-500 rounded-full animate-ping opacity-75"></span>
        </span>
        <MessageCircle size={28} className="transition-transform duration-300" />
      </motion.button>
    </div>
  );
}
