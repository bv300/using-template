import { NavLink, Project } from "@/components/tem-seven/types";

export const site = {
  name: "DEMO COMPANY",
  logo: "https://placehold.co/400x100?text=DEMO+LOGO", // Add your own logo URL here
  legalName: "Demo Company Technical Services L.L.C",
  shortName: "Demo Tech",
  tagline: "Demo Tagline | Professional Services | Fit-Out Solutions",
  description:
    "Demo company description providing excellent services with a large portfolio of commercial fit-outs and projects across the country.",
  phone2: "+1 234 567 8901",
  landline: "+1 234 567 8900",
  email: "info@demo-company.com",
  contact: "John Doe",
  address: "Demo Building, 1st Floor, Office 112-118, Demo City",
  whatsapp: "971589962180", // Used for wa.me links
  instagram: "https://instagram.com", // Replace with actual Instagram URL
  mapsLink: "https://maps.app.goo.gl/d9FAyzThNKAuyxJm9?g_st=ac",
  url: "https://www.ejaba.ae",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/contact" },
];

// Sourced from the company's project ledger / portfolio
export const projects: Project[] = [
  { name: "Villa L-51", location: "Emirates Hills", value: "900,000", scope: "Landscaping & Interiors" },
  { name: "Villa 905", location: "Green Community West, DIP", value: "600,000", scope: "Landscaping, Extension & Interiors" },
  { name: "Villa 3407", location: "Green Community West, DIP", value: "1,200,000", scope: "Landscaping, Extension & Interiors" },
  { name: "Villa 2005", location: "Green Community West, DIP", value: "550,000", scope: "Landscaping, Extension & Interiors" },
  { name: "Villa 1106", location: "Green Community West, DIP", value: "320,000", scope: "Landscaping, Extension & Interiors" },
  { name: "Villa 3114", location: "Green Community West, DIP", value: "230,000", scope: "Landscaping, Extension & Interiors" },
  { name: "Villa 4034", location: "Green Community West, DIP", value: "355,000", scope: "Landscaping, Extension & Interiors" },
  { name: "Villa 3226", location: "Green Community West, DIP", value: "245,000", scope: "Landscaping, Extension & Interiors" },
  { name: "Al Manara Villa", location: "Jumeirah II", value: "450,000", scope: "Landscaping" },
  { name: "Demo City Realestate Center", location: "DREC", value: "1,530,000", scope: "Interior Fit-out Refurbishment" },
  { name: "Demo City Realestate Center", location: "DREC", value: "1,300,000", scope: "Landscape, Pool & Play Area" },
  { name: "Villa in Al Khawaneej", location: "Al Khawaneej", value: "628,000", scope: "Landscaping Works" },
];