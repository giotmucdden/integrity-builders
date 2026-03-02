import { STATS } from "@/config/services";

export function StatsStrip() {
  return (
    <section className="py-8 bg-brand-black">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-normal font-display text-brand-green-light tracking-wide">
                {value}
              </span>
              <span className="text-white/60 text-sm mt-1 tracking-wide uppercase font-body text-[0.75rem]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
