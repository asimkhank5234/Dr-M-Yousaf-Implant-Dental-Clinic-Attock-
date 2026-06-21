import { useState } from "react";
import { Review } from "../types";
import { Star, MessageSquareCode, Quote, MapPin, BadgeCheck } from "lucide-react";
import { motion } from "motion/react";

const REVIEWS_DATA: Review[] = [
  {
    id: "rev1",
    author: "Patient Testimonial",
    rating: 5,
    text: "Dr Yousaf is an outstanding dentist who genuinely cares for his patients. From the moment I walked into the office, I felt heard and respected. He took the time to explain every option and didn't rush anything. The transplant went flawlessly.",
    source: "Google Local Review",
    date: "June 2026"
  },
  {
    id: "rev2",
    author: "Attock Resident",
    rating: 5,
    text: "I had a great experience with Dr M Yousaf and the entire clinic team. The doctor is very professional, gentle, and explains everything clearly. The clinic is clean, well-equipped and has advanced equipment.",
    source: "Google Verified Review",
    date: "May 2026"
  },
  {
    id: "rev3",
    author: "RCT Patient",
    rating: 5,
    text: "The clinic is clean and modern, and they explained everything clearly before starting treatment. I had an RCT done, and it was painless and efficient. Highly recommended clinic in Kamra Road Attock!",
    source: "Google Maps Review",
    date: "June 2026"
  },
  {
    id: "rev4",
    author: "Zahid Khan",
    rating: 5,
    text: "Asst Prof Dr Yousaf has deep surgeon skills. He placed my dental implant on my lower molar list. The operation was totally sterile, absolutely clean center. A rare gem dentist in Mardan and Attock.",
    source: "Verified Patient",
    date: "April 2026"
  },
  {
    id: "rev5",
    author: "Saman Malik",
    rating: 5,
    text: "One of the best oral surgeons in Islamabad and Attock specialization area. Clean premises, Old Attock Medical Center, wonderful pricing structure. He handles pediatric dental pain so gently.",
    source: "Google Reviewer",
    date: "March 2026"
  }
];

export default function ReviewsList() {
  const [filterRating, setFilterRating] = useState<number | null>(null);

  const filteredReviews = filterRating 
    ? REVIEWS_DATA.filter(r => r.rating === filterRating)
    : REVIEWS_DATA;

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Summary Column */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1.5 rounded-full font-sans w-fit">
              Patient Voices
            </span>
            <h2 className="text-3xl sm:text-4xl text-zinc-900 font-serif font-semibold mt-4 tracking-tight">
              Stellar Trust & Patient Feedback
            </h2>
            <p className="text-zinc-600 mt-3 font-sans text-sm sm:text-base leading-relaxed">
              Serving the Attock and Mardan region with professional oral care. Rated extraordinarily high by our clinical patients.
            </p>

            {/* Premium aggregate box */}
            <div id="aggregate-reviews-card" className="mt-8 bg-gradient-to-br from-teal-950 to-teal-900 text-white rounded-3xl p-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Quote size={120} />
              </div>
              <div className="flex items-center gap-1.5 text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill="currentColor" size={20} />
                ))}
              </div>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-5xl font-bold font-serif">4.9</span>
                <span className="text-zinc-300 text-sm">out of 5</span>
              </div>
              <p className="text-xs text-teal-200 uppercase font-mono tracking-widest mt-1">
                Based on 207 google reviews
              </p>

              <div id="badge-container" className="mt-6 pt-6 border-t border-teal-800/60 flex items-center gap-3">
                <div className="p-2 bg-teal-800/50 rounded-lg">
                  <BadgeCheck className="text-emerald-400" size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-zinc-100">Verified Local Speciality</p>
                  <p className="text-[10px] text-teal-300">Dr M. Yousaf Dental Clinic</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial List Column */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredReviews.map((rev, idx) => (
                <motion.div
                  key={rev.id}
                  id={`review-item-${rev.id}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="bg-slate-50 border border-zinc-100 rounded-2xl p-6 relative flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1 text-amber-400">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} fill="currentColor" size={14} />
                        ))}
                      </div>
                      <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider bg-white py-1 px-2.5 rounded-full border border-zinc-100">
                        {rev.source}
                      </span>
                    </div>

                    <p className="text-zinc-700 italic font-sans text-[13px] leading-relaxed mb-6">
                      "{rev.text}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-zinc-200/55">
                    <div>
                      <h4 className="text-xs font-bold text-zinc-900 font-sans">{rev.author}</h4>
                      <p className="text-[10px] text-teal-800 font-medium">Verified Patient</p>
                    </div>
                    <span className="text-[10px] text-zinc-400 font-mono">{rev.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
