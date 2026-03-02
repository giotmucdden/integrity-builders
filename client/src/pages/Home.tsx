import {
  Navbar,
  Hero,
  StatsStrip,
  PhotoGallery,
  Services,
  About,
  Booking,
  Testimonials,
  Footer,
} from "@/components/sections";

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
