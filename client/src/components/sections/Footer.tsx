import { Phone, Mail, MapPin } from "lucide-react";
import { ASSETS } from "@/config/assets";
import { SERVICES } from "@/config/services";
import { COMPANY } from "@/config/constants";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-green-500/20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <img
              src={ASSETS.logoBw}
              alt="Integrity Builders"
              className="h-20 w-auto object-contain mb-4 brightness-110"
            />
            <p className="text-white/50 text-sm leading-relaxed font-body">
              {COMPANY.tagline}. Building with integrity since day one.
            </p>
            <div className="flex gap-2 mt-4">
              <span className="trust-badge">LICENSED</span>
              <span className="trust-badge">INSURED</span>
              <span className="trust-badge">BONDED</span>
            </div>
          </div>

          <div>
            <h4 className="text-white text-lg mb-4 font-display tracking-widest">Services</h4>
            <ul className="space-y-2">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <span className="text-white/50 text-sm hover:text-green-400 transition-colors cursor-default font-body">
                    {s.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg mb-4 font-display tracking-widest">Contact Us</h4>
            <div className="space-y-3">
              <ContactItem icon={<Phone size={14} />} label={`Phone: ${COMPANY.phone}`} />
              <ContactItem icon={<Mail size={14} />} label={`Email: ${COMPANY.email}`} />
              <ContactItem icon={<MapPin size={14} />} label={`Service Area: ${COMPANY.serviceArea}`} />
            </div>
            <div className="mt-5 pt-5 border-t border-white/10">
              <p className="text-white/40 text-xs font-body">CSLB License {COMPANY.license}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs font-body">
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p className="text-white/30 text-xs font-body">
            Licensed · Insured · Bonded — CSLB {COMPANY.license}
          </p>
        </div>
      </div>
    </footer>
  );
}

function ContactItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-brand-green-light">{icon}</span>
      <span className="text-white/60 text-sm font-body">{label}</span>
    </div>
  );
}
