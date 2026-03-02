import { Shield, CheckCircle } from "lucide-react";
import { ASSETS } from "@/config/assets";
import { ABOUT_POINTS, COMPANY } from "@/config/constants";

export function About() {
  return (
    <section id="about" className="py-20 overflow-hidden bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={ASSETS.aboutBg}
              alt="Integrity Builders team"
              className="w-full h-80 lg:h-96 object-cover rounded-sm shadow-2xl"
            />

            <div className="absolute -bottom-6 -right-4 md:-right-8 p-5 rounded-sm shadow-xl text-white bg-brand-black">
              <div className="flex items-center gap-3">
                <Shield size={28} className="text-brand-green-light" />
                <div>
                  <p className="text-xs text-white/60 uppercase tracking-widest font-body">
                    CSLB License
                  </p>
                  <p className="text-white font-bold text-lg font-display tracking-wide">
                    {COMPANY.license}
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute top-0 left-0 w-1.5 h-full rounded-l-sm bg-brand-green" />
          </div>

          <div>
            <h2 className="section-title text-4xl md:text-5xl pl-4 mb-6 text-brand-black">
              Built on Integrity
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5 font-body">
              At Integrity Builders, we believe every project — no matter the size — deserves the same
              level of care, precision, and professionalism. Our team of licensed craftsmen brings
              decades of combined experience to every job site.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 font-body">
              We are fully licensed, insured, and bonded in California, giving our clients complete
              peace of mind from the first consultation through final walkthrough.
            </p>

            <div className="space-y-3">
              {ABOUT_POINTS.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="mt-0.5 flex-shrink-0 text-brand-green" />
                  <span className="text-gray-700 text-sm font-body">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
