import { ChevronDown } from "lucide-react";
import { ASSETS } from "@/config/assets";

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster={ASSETS.heroBg}
      >
        <source src={ASSETS.heroVideo} type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.75) 100%)",
        }}
      />

      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-green" />

      <div className="relative z-10 container text-white text-left max-w-4xl">
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="trust-badge">LICENSED</span>
          <span className="trust-badge">INSURED</span>
          <span className="trust-badge">BONDED</span>
          <span className="inline-flex items-center gap-1 bg-white/10 text-white text-xs font-bold px-3 py-1 rounded-sm tracking-widest font-display text-[0.85rem]">
            CSLB #1122440
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-normal leading-none mb-4 font-display tracking-wide">
          <span className="block">INTEGRITY</span>
          <span className="block text-brand-green-light">BUILDERS</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/80 mb-2 italic font-body font-light">
          Your Projects, Our Passion
        </p>

        <p className="text-base md:text-lg text-white/70 mb-10 max-w-xl font-body">
          From foundations to finish work — we build with precision, integrity, and craftsmanship that
          stands the test of time.
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="btn-green text-base px-8 py-3" onClick={() => scrollTo("booking")}>
            Book a Free Consultation
          </button>
          <button
            className="text-white border border-white/40 hover:border-green-400 hover:text-green-400 transition-all px-8 py-3 rounded-sm font-display tracking-widest text-[1.05rem]"
            onClick={() => scrollTo("services")}
          >
            Our Services
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 animate-bounce">
        <span className="text-xs tracking-widest font-body">SCROLL</span>
        <ChevronDown size={16} />
      </div>
    </section>
  );
}
