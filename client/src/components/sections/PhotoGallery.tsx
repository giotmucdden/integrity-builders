import { ASSETS } from "@/config/assets";

export function PhotoGallery() {
  const doubled = [...ASSETS.photos, ...ASSETS.photos];

  return (
    <section id="gallery" className="py-16 overflow-hidden bg-[#f8f8f8]">
      <div className="container mb-8">
        <h2 className="section-title text-4xl md:text-5xl pl-4 text-brand-black">Our Work</h2>
        <p className="text-gray-500 mt-2 ml-4 font-body">
          A snapshot of projects we're proud of — from ground-up builds to complete renovations.
        </p>
      </div>

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
                <span className="text-white text-sm font-bold px-3 py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 font-display tracking-widest text-[1rem]">
                  {photo.label}
                </span>
              </div>
              <div className="absolute top-0 left-0 w-1 h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-brand-green" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
