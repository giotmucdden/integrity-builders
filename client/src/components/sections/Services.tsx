import { SERVICES } from "@/config/services";

export function Services() {
  return (
    <section id="services" className="py-20 bg-brand-black">
      <div className="container">
        <div className="mb-12">
          <h2 className="section-title text-4xl md:text-5xl pl-4 text-white">What We Build</h2>
          <p className="text-white/50 mt-3 ml-4 max-w-xl font-body">
            Comprehensive construction services backed by decades of expertise and a commitment to
            quality on every project.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="group relative p-6 rounded-sm border border-white/10 hover:border-green-500/50 transition-all duration-300 cursor-default bg-white/[0.04]"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-sm" />

                <div className="w-12 h-12 rounded-sm flex items-center justify-center mb-4 transition-colors duration-300 bg-green-500/10">
                  <Icon size={22} className="text-brand-green-light" />
                </div>

                <h3 className="text-white text-xl mb-2 group-hover:text-green-400 transition-colors duration-300 font-display tracking-wide">
                  {service.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed font-body">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
