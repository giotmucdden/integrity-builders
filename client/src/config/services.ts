import {
  Building2,
  HardHat,
  Hammer,
  Home as HomeIcon,
  Layers,
  Paintbrush,
  Truck,
  Wrench,
} from "lucide-react";

export const SERVICES = [
  {
    icon: Building2,
    title: "New Construction",
    desc: "Ground-up commercial and residential builds delivered on time and within budget.",
  },
  {
    icon: HomeIcon,
    title: "Home Remodeling",
    desc: "Full interior and exterior renovations that transform your living space.",
  },
  {
    icon: Layers,
    title: "Roofing",
    desc: "Expert installation, repair, and replacement for all roofing systems.",
  },
  {
    icon: Hammer,
    title: "Concrete Work",
    desc: "Foundations, slabs, driveways, patios, and structural concrete.",
  },
  {
    icon: Wrench,
    title: "Plumbing & Electrical",
    desc: "Licensed trades coordination for all rough and finish work.",
  },
  {
    icon: Paintbrush,
    title: "Interior Finishing",
    desc: "Drywall, flooring, cabinetry, painting, and all finish carpentry.",
  },
  {
    icon: Truck,
    title: "Commercial Build-Out",
    desc: "Retail, office, and industrial tenant improvements done right.",
  },
  {
    icon: HardHat,
    title: "General Contracting",
    desc: "Full project management from permitting to final inspection.",
  },
] as const;

export const STATS = [
  { value: "500+", label: "Projects Completed" },
  { value: "15+", label: "Years Experience" },
  { value: "100%", label: "Licensed & Bonded" },
  { value: "5★", label: "Client Satisfaction" },
] as const;

export const TESTIMONIALS = [
  {
    name: "Michael T.",
    text: "Integrity Builders transformed our home completely. Professional, on-time, and the quality is outstanding. Highly recommend!",
    stars: 5,
  },
  {
    name: "Sandra R.",
    text: "They handled our commercial build-out from start to finish. Communication was excellent and the result exceeded our expectations.",
    stars: 5,
  },
  {
    name: "James K.",
    text: "Best contractor we've ever worked with. Licensed, bonded, and they actually show up when they say they will. Five stars all the way.",
    stars: 5,
  },
] as const;
