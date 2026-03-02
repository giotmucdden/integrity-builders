import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/config/services";

export function Testimonials() {
  return (
    <section className="py-20 bg-brand-black">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl text-white font-display tracking-wide">
            What Our Clients Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((review, i) => (
            <div key={i} className="p-6 rounded-sm border border-white/10 bg-white/5">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.stars }).map((_, j) => (
                  <Star key={j} size={14} fill="oklch(0.65 0.18 142)" className="text-brand-green-light" />
                ))}
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-5 italic font-body">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm bg-brand-green font-display">
                  {review.name[0]}
                </div>
                <span className="text-white font-semibold text-sm font-body">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
