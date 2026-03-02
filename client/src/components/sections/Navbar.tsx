import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ASSETS } from "@/config/assets";
import { NAV_LINKS } from "@/config/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(10,10,10,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(60,176,67,0.2)" : "none",
        boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.4)" : "none",
      }}
    >
      <div className="container flex items-center justify-between py-3">
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-2">
          <img src={ASSETS.logoColor} alt="Integrity Builders" className="h-14 w-auto object-contain" />
        </button>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-white font-semibold text-sm tracking-wide hover:text-green-400 transition-colors font-body"
            >
              {label}
            </button>
          ))}
          <button onClick={() => scrollTo("booking")} className="btn-green text-sm px-5 py-2">
            Free Estimate
          </button>
        </div>

        <button className="md:hidden text-white p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-black/95 border-t border-green-800/30 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-white text-left font-semibold text-base py-2 border-b border-white/10 hover:text-green-400 transition-colors"
            >
              {label}
            </button>
          ))}
          <button onClick={() => scrollTo("booking")} className="btn-green mt-2">
            Free Estimate
          </button>
        </div>
      )}
    </nav>
  );
}
