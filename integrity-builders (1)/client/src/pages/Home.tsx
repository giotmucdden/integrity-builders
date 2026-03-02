/**
 * Integrity Builders — Home Page
 * Design: Premium Green & Black Craftsmanship
 * Sections: Navbar, Hero, Trust Strip, Photo Gallery, Services, About, Booking, Footer
 */
import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, Mail, MapPin, ChevronDown, CheckCircle, HardHat, Building2, Home as HomeIcon, Wrench, Layers, Hammer, Paintbrush, Truck, Shield, Star, Calendar, Clock, User } from "lucide-react";
import { toast } from "sonner";

// ─── CDN Asset URLs ───────────────────────────────────────────────
const ASSETS = {
  logoColor: "https://d2xsxph8kpxj0f.cloudfront.net/310519663316746160/nEowjah59ptAuJnyRk4DM7/logo-v3-transparent_16a45e5e.png",
  logoBw: "https://d2xsxph8kpxj0f.cloudfront.net/310519663316746160/nEowjah59ptAuJnyRk4DM7/logo-v3-transparent_16a45e5e.png",
  heroVideo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663316746160/nEowjah59ptAuJnyRk4DM7/hero-loop-seamless_2934e5a2.mp4",
  heroBg: "https://d2xsxph8kpxj0f.cloudfront.net/310519663316746160/nEowjah59ptAuJnyRk4DM7/hero-bg-djW9LRJwHyhNZu9xXoDt7m.webp",
  aboutBg: "https://d2xsxph8kpxj0f.cloudfront.net/310519663316746160/nEowjah59ptAuJnyRk4DM7/about-bg-asian_85403e3c.png",
  photos: [
    { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663316746160/nEowjah59ptAuJnyRk4DM7/construction-aerial_887730cf.jpeg", label: "Commercial Construction" },
    { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663316746160/nEowjah59ptAuJnyRk4DM7/construction-steel_3a3eb0ce.webp", label: "Steel Framing" },
    { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663316746160/nEowjah59ptAuJnyRk4DM7/remodeling_bf758e6e.jpg", label: "Interior Remodeling" },
    { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663316746160/nEowjah59ptAuJnyRk4DM7/commercial-exterior_fb4db54e.jpeg", label: "Commercial Exterior" },
    { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663316746160/nEowjah59ptAuJnyRk4DM7/roofing_920a0a7e.jpg", label: "Roofing" },
    { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663316746160/nEowjah59ptAuJnyRk4DM7/concrete-foundation_a127d63c.jpg", label: "Concrete Foundation" },
    { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663316746160/nEowjah59ptAuJnyRk4DM7/framing_55c117bc.jpg", label: "Residential Framing" },
    { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663316746160/nEowjah59ptAuJnyRk4DM7/framing2_8ea19016.jpg", label: "New Construction" },
    { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663316746160/nEowjah59ptAuJnyRk4DM7/commercial-reno_df3b3aa0.webp", label: "Commercial Renovation" },
    { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663316746160/nEowjah59ptAuJnyRk4DM7/roofing2_9a332d56.webp", label: "Roof Installation" },
  ],
};

const SERVICES = [
  { icon: Building2, title: "New Construction", desc: "Ground-up commercial and residential builds delivered on time and within budget." },
  { icon: HomeIcon, title: "Home Remodeling", desc: "Full interior and exterior renovations that transform your living space." },
  { icon: Layers, title: "Roofing", desc: "Expert installation, repair, and replacement for all roofing systems." },
  { icon: Hammer, title: "Concrete Work", desc: "Foundations, slabs, driveways, patios, and structural concrete." },
  { icon: Wrench, title: "Plumbing & Electrical", desc: "Licensed trades coordination for all rough and finish work." },
  { icon: Paintbrush, title: "Interior Finishing", desc: "Drywall, flooring, cabinetry, painting, and all finish carpentry." },
  { icon: Truck, title: "Commercial Build-Out", desc: "Retail, office, and industrial tenant improvements done right." },
  { icon: HardHat, title: "General Contracting", desc: "Full project management from permitting to final inspection." },
];

const STATS = [
  { value: "500+", label: "Projects Completed" },
  { value: "15+", label: "Years Experience" },
  { value: "100%", label: "Licensed & Bonded" },
  { value: "5★", label: "Client Satisfaction" },
];

// ─── Navbar ───────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
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
        {/* Logo */}
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-2">
          <img src={ASSETS.logoColor} alt="Integrity Builders" className="h-14 w-auto object-contain" />
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {[["Services", "services"], ["Projects", "gallery"], ["About", "about"], ["Book a Consult", "booking"]].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-white font-semibold text-sm tracking-wide hover:text-green-400 transition-colors"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("booking")}
            className="btn-green text-sm px-5 py-2"
          >
            Free Estimate
          </button>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-white p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/95 border-t border-green-800/30 px-6 py-4 flex flex-col gap-4">
          {[["Services", "services"], ["Projects", "gallery"], ["About", "about"], ["Book a Consult", "booking"]].map(([label, id]) => (
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

// ─── Hero Section ─────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Looping video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster={ASSETS.heroBg}
      >
        <source src={ASSETS.heroVideo} type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.75) 100%)" }} />

      {/* Green accent line left */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ background: "oklch(0.55 0.18 142)" }} />

      <div className="relative z-10 container text-white text-left max-w-4xl">
        {/* Trust badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="trust-badge">LICENSED</span>
          <span className="trust-badge">INSURED</span>
          <span className="trust-badge">BONDED</span>
          <span className="inline-flex items-center gap-1 bg-white/10 text-white text-xs font-bold px-3 py-1 rounded-sm tracking-widest" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.85rem" }}>
            CSLB #1122440
          </span>
        </div>

        <h1
          className="text-6xl md:text-8xl lg:text-9xl font-normal leading-none mb-4"
          style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.03em" }}
        >
          <span className="block">INTEGRITY</span>
          <span className="block" style={{ color: "oklch(0.65 0.18 142)" }}>BUILDERS</span>
        </h1>

        <p
          className="text-xl md:text-2xl text-white/80 mb-2 italic"
          style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 300 }}
        >
          Your Projects, Our Passion
        </p>

        <p className="text-base md:text-lg text-white/70 mb-10 max-w-xl" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
          From foundations to finish work — we build with precision, integrity, and craftsmanship that stands the test of time.
        </p>

        <div className="flex flex-wrap gap-4">
          <button
            className="btn-green text-base px-8 py-3"
            onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
          >
            Book a Free Consultation
          </button>
          <button
            className="text-white border border-white/40 hover:border-green-400 hover:text-green-400 transition-all px-8 py-3 rounded-sm text-base"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.08em", fontSize: "1.05rem" }}
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
          >
            Our Services
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 animate-bounce">
        <span className="text-xs tracking-widest" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>SCROLL</span>
        <ChevronDown size={16} />
      </div>
    </section>
  );
}

// ─── Stats Strip ──────────────────────────────────────────────────
function StatsStrip() {
  return (
    <section className="py-8" style={{ background: "oklch(0.12 0 0)" }}>
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <span
                className="text-4xl md:text-5xl font-normal"
                style={{ fontFamily: "'Bebas Neue', sans-serif", color: "oklch(0.65 0.18 142)", letterSpacing: "0.04em" }}
              >
                {s.value}
              </span>
              <span className="text-white/60 text-sm mt-1 tracking-wide uppercase" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: "0.75rem" }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Photo Gallery Strip ──────────────────────────────────────────
function PhotoGallery() {
  const doubled = [...ASSETS.photos, ...ASSETS.photos];

  return (
    <section id="gallery" className="py-16 overflow-hidden" style={{ background: "#f8f8f8" }}>
      <div className="container mb-8">
        <h2 className="section-title text-4xl md:text-5xl pl-4" style={{ color: "oklch(0.12 0 0)" }}>
          Our Work
        </h2>
        <p className="text-gray-500 mt-2 ml-4" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
          A snapshot of projects we're proud of — from ground-up builds to complete renovations.
        </p>
      </div>

      {/* Scrolling strip */}
      <div className="relative overflow-hidden">
        <div className="photo-strip-track flex gap-4" style={{ width: "max-content" }}>
          {doubled.map((photo, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 overflow-hidden rounded-sm group"
              style={{ width: "320px", height: "220px" }}
            >
              <img
                src={photo.url}
                alt={photo.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                <span
                  className="text-white text-sm font-bold px-3 py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.08em", fontSize: "1rem" }}
                >
                  {photo.label}
                </span>
              </div>
              {/* Green accent corner */}
              <div className="absolute top-0 left-0 w-1 h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "oklch(0.55 0.18 142)" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Services Section ─────────────────────────────────────────────
function Services() {
  return (
    <section id="services" className="py-20" style={{ background: "oklch(0.12 0 0)" }}>
      <div className="container">
        <div className="mb-12">
          <h2 className="section-title text-4xl md:text-5xl pl-4 text-white">
            What We Build
          </h2>
          <p className="text-white/50 mt-3 ml-4 max-w-xl" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
            Comprehensive construction services backed by decades of expertise and a commitment to quality on every project.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="group relative p-6 rounded-sm border border-white/10 hover:border-green-500/50 transition-all duration-300 cursor-default"
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                {/* Green top border on hover */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-sm" />

                <div
                  className="w-12 h-12 rounded-sm flex items-center justify-center mb-4 transition-colors duration-300"
                  style={{ background: "rgba(60,176,67,0.12)" }}
                >
                  <Icon size={22} style={{ color: "oklch(0.65 0.18 142)" }} />
                </div>

                <h3
                  className="text-white text-xl mb-2 group-hover:text-green-400 transition-colors duration-300"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
                >
                  {service.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── About Section ────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="py-20 overflow-hidden" style={{ background: "#fff" }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative">
            <img
              src={ASSETS.aboutBg}
              alt="Integrity Builders team"
              className="w-full h-80 lg:h-96 object-cover rounded-sm shadow-2xl"
            />
            {/* Floating badge */}
            <div
              className="absolute -bottom-6 -right-4 md:-right-8 p-5 rounded-sm shadow-xl text-white"
              style={{ background: "oklch(0.12 0 0)" }}
            >
              <div className="flex items-center gap-3">
                <Shield size={28} style={{ color: "oklch(0.65 0.18 142)" }} />
                <div>
                  <p className="text-xs text-white/60 uppercase tracking-widest" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>CSLB License</p>
                  <p className="text-white font-bold text-lg" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}>#1122440</p>
                </div>
              </div>
            </div>
            {/* Green accent bar */}
            <div className="absolute top-0 left-0 w-1.5 h-full rounded-l-sm" style={{ background: "oklch(0.55 0.18 142)" }} />
          </div>

          {/* Text side */}
          <div>
            <h2 className="section-title text-4xl md:text-5xl pl-4 mb-6" style={{ color: "oklch(0.12 0 0)" }}>
              Built on Integrity
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              At Integrity Builders, we believe every project — no matter the size — deserves the same level of care, precision, and professionalism. Our team of licensed craftsmen brings decades of combined experience to every job site.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              We are fully licensed, insured, and bonded in California, giving our clients complete peace of mind from the first consultation through final walkthrough.
            </p>

            <div className="space-y-3">
              {[
                "Licensed General Contractor — CSLB #1122440",
                "Fully insured with comprehensive liability coverage",
                "Transparent pricing with no hidden fees",
                "On-time delivery and clean job sites",
                "Serving residential and commercial clients",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="mt-0.5 flex-shrink-0" style={{ color: "oklch(0.55 0.18 142)" }} />
                  <span className="text-gray-700 text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Booking / Calendar Section ───────────────────────────────────
function Booking() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", notes: "" });
  const [submitted, setSubmitted] = useState(false);

  const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const DAYS = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const TIME_SLOTS = ["8:00 AM","9:00 AM","10:00 AM","11:00 AM","1:00 PM","2:00 PM","3:00 PM","4:00 PM"];

  const getDaysInMonth = (month: number, year: number) => new Date(year, month + 1, 0).getDate();
  const getFirstDay = (month: number, year: number) => new Date(year, month, 1).getDay();

  const prevMonth = () => {
    if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(y => y - 1); }
    else setCurrentMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(y => y + 1); }
    else setCurrentMonth(m => m + 1);
  };

  const isDisabled = (day: number) => {
    const d = new Date(currentYear, currentMonth, day);
    const t = new Date(); t.setHours(0,0,0,0);
    return d < t || d.getDay() === 0; // disable past dates and Sundays
  };

  const formatDate = (day: number) => `${MONTHS[currentMonth]} ${day}, ${currentYear}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      toast.error("Please select a date and time for your consultation.");
      return;
    }
    if (!form.name || !form.phone) {
      toast.error("Please provide your name and phone number.");
      return;
    }
    setSubmitted(true);
    toast.success("Consultation request submitted! We'll call you to confirm.");
  };

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDay = getFirstDay(currentMonth, currentYear);

  return (
    <section id="booking" className="py-20" style={{ background: "#f4f4f4" }}>
      <div className="container">
        <div className="mb-12 text-center">
          <h2
            className="text-4xl md:text-5xl font-normal"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em", color: "oklch(0.12 0 0)" }}
          >
            Book a Free Consultation
          </h2>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
            Pick a date and time that works for you. Our team will call you back to confirm your appointment.
          </p>
        </div>

        {submitted ? (
          <div className="max-w-lg mx-auto text-center py-16">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "oklch(0.55 0.18 142 / 0.15)" }}>
              <CheckCircle size={40} style={{ color: "oklch(0.55 0.18 142)" }} />
            </div>
            <h3 className="text-3xl mb-3" style={{ fontFamily: "'Bebas Neue', sans-serif", color: "oklch(0.12 0 0)", letterSpacing: "0.04em" }}>
              Request Received!
            </h3>
            <p className="text-gray-600 mb-2" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              Thank you, <strong>{form.name}</strong>! We've received your consultation request for:
            </p>
            <p className="font-bold text-green-700 mb-2" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              {selectedDate} at {selectedTime}
            </p>
            <p className="text-gray-500 text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              We'll call you at <strong>{form.phone}</strong> to confirm your appointment.
            </p>
            <button
              className="btn-green mt-8"
              onClick={() => { setSubmitted(false); setSelectedDate(null); setSelectedTime(null); setForm({ name: "", phone: "", email: "", service: "", notes: "" }); }}
            >
              Book Another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Calendar */}
            <div className="bg-white rounded-sm shadow-lg p-6">
              <div className="flex items-center justify-between mb-5">
                <button type="button" onClick={prevMonth} className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 transition-colors text-gray-600 font-bold text-lg">‹</button>
                <span className="font-bold text-gray-800" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.06em", fontSize: "1.2rem" }}>
                  {MONTHS[currentMonth]} {currentYear}
                </span>
                <button type="button" onClick={nextMonth} className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 transition-colors text-gray-600 font-bold text-lg">›</button>
              </div>

              {/* Day headers */}
              <div className="grid grid-cols-7 mb-2">
                {DAYS.map(d => (
                  <div key={d} className="text-center text-xs font-bold text-gray-400 py-1 uppercase tracking-wide" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>{d}</div>
                ))}
              </div>

              {/* Calendar grid */}
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: firstDay }).map((_, i) => <div key={`empty-${i}`} />)}
                {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => {
                  const dateStr = formatDate(day);
                  const disabled = isDisabled(day);
                  const selected = selectedDate === dateStr;
                  return (
                    <button
                      key={day}
                      type="button"
                      disabled={disabled}
                      onClick={() => setSelectedDate(dateStr)}
                      className="aspect-square flex items-center justify-center rounded-sm text-sm font-semibold transition-all duration-150"
                      style={{
                        fontFamily: "'Nunito Sans', sans-serif",
                        background: selected ? "oklch(0.55 0.18 142)" : "transparent",
                        color: disabled ? "#ccc" : selected ? "white" : "#333",
                        cursor: disabled ? "not-allowed" : "pointer",
                        border: selected ? "none" : "1px solid transparent",
                      }}
                      onMouseEnter={e => { if (!disabled && !selected) (e.target as HTMLButtonElement).style.background = "oklch(0.55 0.18 142 / 0.12)"; }}
                      onMouseLeave={e => { if (!disabled && !selected) (e.target as HTMLButtonElement).style.background = "transparent"; }}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>

              {/* Time slots */}
              {selectedDate && (
                <div className="mt-5 pt-5 border-t border-gray-100">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3 flex items-center gap-2" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                    <Clock size={12} /> Available Times — {selectedDate}
                  </p>
                  <div className="grid grid-cols-4 gap-2">
                    {TIME_SLOTS.map(time => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className="py-2 px-1 text-xs font-semibold rounded-sm border transition-all duration-150"
                        style={{
                          fontFamily: "'Nunito Sans', sans-serif",
                          background: selectedTime === time ? "oklch(0.55 0.18 142)" : "white",
                          color: selectedTime === time ? "white" : "#444",
                          borderColor: selectedTime === time ? "oklch(0.55 0.18 142)" : "#e5e7eb",
                        }}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-sm shadow-lg p-6 flex flex-col gap-4">
              <h3 className="text-2xl text-gray-800 mb-1" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}>
                Your Information
              </h3>

              {selectedDate && selectedTime && (
                <div className="flex items-center gap-2 p-3 rounded-sm text-sm font-semibold" style={{ background: "oklch(0.55 0.18 142 / 0.1)", color: "oklch(0.40 0.16 142)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  <Calendar size={14} />
                  {selectedDate} at {selectedTime}
                </div>
              )}

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Full Name *</label>
                <div className="relative">
                  <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    required
                    placeholder="John Smith"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-green-500 transition-colors"
                    style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Phone Number *</label>
                <div className="relative">
                  <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="tel"
                    required
                    placeholder="(555) 000-0000"
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-green-500 transition-colors"
                    style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Email Address</label>
                <div className="relative">
                  <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    placeholder="john@email.com"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-green-500 transition-colors"
                    style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Service Needed</label>
                <select
                  value={form.service}
                  onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-green-500 transition-colors bg-white"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  <option value="">Select a service...</option>
                  {SERVICES.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                  <option value="Other">Other / Not Sure</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Project Notes</label>
                <textarea
                  rows={3}
                  placeholder="Brief description of your project..."
                  value={form.notes}
                  onChange={e => setForm(f => ({ ...f, notes: e.target.value }))}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-green-500 transition-colors resize-none"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                />
              </div>

              <button type="submit" className="btn-green w-full mt-2 flex items-center justify-center gap-2">
                <Calendar size={16} />
                Request Consultation
              </button>

              <p className="text-xs text-gray-400 text-center" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                We'll call you within 24 hours to confirm your appointment.
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────
function Testimonials() {
  const reviews = [
    { name: "Michael T.", text: "Integrity Builders transformed our home completely. Professional, on-time, and the quality is outstanding. Highly recommend!", stars: 5 },
    { name: "Sandra R.", text: "They handled our commercial build-out from start to finish. Communication was excellent and the result exceeded our expectations.", stars: 5 },
    { name: "James K.", text: "Best contractor we've ever worked with. Licensed, bonded, and they actually show up when they say they will. Five stars all the way.", stars: 5 },
  ];

  return (
    <section className="py-20" style={{ background: "oklch(0.12 0 0)" }}>
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl text-white" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}>
            What Our Clients Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="p-6 rounded-sm border border-white/10" style={{ background: "rgba(255,255,255,0.05)" }}>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.stars }).map((_, j) => (
                  <Star key={j} size={14} fill="oklch(0.65 0.18 142)" style={{ color: "oklch(0.65 0.18 142)" }} />
                ))}
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-5 italic" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                "{r.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ background: "oklch(0.55 0.18 142)", fontFamily: "'Bebas Neue', sans-serif" }}>
                  {r.name[0]}
                </div>
                <span className="text-white font-semibold text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>{r.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: "#0a0a0a", borderTop: "1px solid rgba(60,176,67,0.2)" }}>
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <img src={ASSETS.logoBw} alt="Integrity Builders" className="h-20 w-auto object-contain mb-4" style={{ filter: "brightness(1.1)" }} />
            <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              Your Projects, Our Passion. Building with integrity since day one.
            </p>
            <div className="flex gap-2 mt-4">
              <span className="trust-badge">LICENSED</span>
              <span className="trust-badge">INSURED</span>
              <span className="trust-badge">BONDED</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-lg mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.06em" }}>Services</h4>
            <ul className="space-y-2">
              {SERVICES.slice(0, 6).map(s => (
                <li key={s.title}>
                  <span className="text-white/50 text-sm hover:text-green-400 transition-colors cursor-default" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                    {s.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-lg mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.06em" }}>Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={14} style={{ color: "oklch(0.65 0.18 142)" }} />
                <span className="text-white/60 text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Phone: To Be Updated</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} style={{ color: "oklch(0.65 0.18 142)" }} />
                <span className="text-white/60 text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Email: To Be Updated</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={14} style={{ color: "oklch(0.65 0.18 142)" }} />
                <span className="text-white/60 text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Service Area: To Be Updated</span>
              </div>
            </div>
            <div className="mt-5 pt-5 border-t border-white/10">
              <p className="text-white/40 text-xs" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>CSLB License #1122440</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
            © {new Date().getFullYear()} Integrity Builders. All rights reserved.
          </p>
          <p className="text-white/30 text-xs" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
            Licensed · Insured · Bonded — CSLB #1122440
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Main Page ────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsStrip />
      <PhotoGallery />
      <Services />
      <About />
      <Booking />
      <Testimonials />
      <Footer />
    </div>
  );
}
