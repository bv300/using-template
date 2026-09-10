"use client";

import {  useState, useEffect } from "react";
// import ParallaxGrid from "@/components/tem-two/ParallaxGrid";

const services = [
  {
    number: "01",
    title: "Regenerative Architecture",
    icon: "⌂",
    text: "Full-scale structural planning anchored in mass timber, passive solar orientation, and closed-loop water systems.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "02",
    title: "Biophilic Interior Curation",
    icon: "✿",
    text: "Living botanicals, moss acoustics, and daylight-synced lighting that make wellbeing part of the room.",
    image: "https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "03",
    title: "Carbon-Negative Retrofits",
    icon: "↻",
    text: "Transforming outdated concrete and steel shells into breathable, high-efficiency havens.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "04",
    title: "Sustainable Material R&D",
    icon: "◇",
    text: "Regional rammed earth, mycelium acoustic tiles, lime plasters, and reclaimed stonework.",
    image: "https://images.unsplash.com/photo-1600607688066-890987febe36?auto=format&fit=crop&w=800&q=80",
  },
];

const pillars = [
  [
    "I",
    "Circular Lifecycle Assessment",
    "Every beam, joist, and panel is indexed for deconstructability and circular reuse without landfill waste.",
  ],
  [
    "II",
    "Living Air & Circadian Optimization",
    "Botanical biofilters purge airborne particulates while circadian daylighting supports sleep-wake health.",
  ],
  [
    "III",
    "Verified Passive House & LEED Platinum",
    "Guaranteed airtightness and zero thermal bridge strategies cut heating and cooling energy dramatically.",
  ],
  [
    "IV",
    "Native Ecosystem Reintegration",
    "Each site replaces displaced flora with pollinator corridors, permeable surfaces, and natural perches.",
  ],
  [
    "V",
    "Transparent Material Provenance",
    "Wood, stone, and lime are sourced close to each build, supporting local stewards and lowering freight emissions.",
  ],
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf3ed] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-[#4a7c59]">
      ✦ {children}
    </span>
  );
}

export default function Home() {
  const [activeCol, setActiveCol] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timeout = setTimeout(() => {
      setActiveCol((current) => (current + 1) % 4);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [isHovered, activeCol]);
  return (
    <div className="overflow-hidden bg-[#faf6f0] text-[#2e3230]">
      <section
        id="hero"
        className="relative flex flex-col lg:flex-row h-screen w-full overflow-hidden scroll-mt-20"
        onPointerEnter={(e) => e.pointerType === 'mouse' && setIsHovered(true)}
        onPointerLeave={(e) => e.pointerType === 'mouse' && setIsHovered(false)}
      >
        {[
          {
            // title: "1",
            subtitle: "background-attachment: scroll;",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore necessitatibus possimus fuga voluptate incidunt enim eius sed, ad suscipit error quasi ex blanditiis ipsa, at vero officiis voluptatem a modi!",
            bgClass:
              "bg-[url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center transition-all duration-500",
            bgFixed: false,
          },
          {
            // title: "2",
            subtitle: "background-attachment: fixed;",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore necessitatibus possimus fuga voluptate incidunt enim eius sed, ad suscipit error quasi ex blanditiis ipsa, at vero officiis voluptatem a modi!",
            bgClass:
              "bg-[url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center transition-all duration-500",
            bgFixed: true,
          },
          {
            // title: "3",
            subtitle: "What is lorem ipsum",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore necessitatibus possimus fuga voluptate incidunt enim eius sed, ad suscipit error quasi ex blanditiis ipsa, at vero officiis voluptatem a modi!",
            bgClass:
              "bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center transition-all duration-500",
            bgFixed: true,
          },
          {
            // title: "8",
            subtitle: "What is lorem ipsum",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore necessitatibus possimus fuga voluptate incidunt enim eius sed, ad suscipit error quasi ex blanditiis ipsa, at vero officiis voluptatem a modi!",
            bgClass:
              "bg-[url('https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center transition-all duration-500",
            bgFixed: true,
          },
        ].map((col, idx) => (
          <div
            key={idx}
            className={`group z-10 flex w-full flex-col border-b-2 border-black/50 cursor-pointer transition-all duration-500 last:border-b-0 lg:h-full lg:w-1/4 lg:border-b-0 lg:border-r-2 lg:last:border-r-0 ${activeCol === idx ? "h-[70%] lg:h-full" : "h-[10%] lg:h-full"
              }`}
            onMouseEnter={() => setActiveCol(idx)}
            onClick={() => setActiveCol(idx)}
          >
            <div className="relative h-full w-full overflow-hidden">
              <div
                className={`absolute left-1/2 top-1/2 z-10 box-border w-[90%] -translate-x-1/2 bg-white/70 backdrop-blur-md border border-white/40 rounded-2xl p-4 sm:p-6 text-center shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all duration-500 lg:w-3/4 lg:p-10 ${activeCol === idx
                  ? "opacity-100 -translate-y-1/2"
                  : "translate-y-full opacity-0"
                  }`}
              >
                <h2 className="mb-2 md:mb-4 m-0 p-0 text-xl sm:text-2xl text-[#262626] md:text-3xl">
                  {col.subtitle}
                </h2>
                <p className="m-0 text-xs sm:text-sm text-[#262626] md:text-lg">
                  {col.text}
                </p>
              </div>
            </div>

            {/* Background Image */}
            <div
              className={`pointer-events-none absolute left-0 top-0 -z-10 h-full w-full ${col.bgClass
                } ${col.bgFixed ? "bg-fixed" : ""} ${activeCol === idx ? "opacity-100" : "opacity-0"
                }`}
            />
          </div>
        ))}
      </section>

      {/* <ParallaxGrid /> */}

      <section
        id="about"
        className="scroll-mt-20 bg-[#f5f1ea] px-6 py-20 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="relative lg:col-span-6">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85"
                alt="Natural timber and indoor tree detail"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-6 max-w-sm rounded-2xl bg-white p-6 shadow-xl sm:absolute sm:-bottom-8 sm:-right-6 sm:mt-0">
              <span className="text-3xl text-[#705c30]">“</span>
              <p className="font-serif text-base italic leading-snug">
                We build structures that breathe with nature, not against it.
              </p>
              <div className="mt-4 border-t border-[#c4c8bc]/30 pt-3 text-xs">
                <strong>Elena Lindqvist</strong>
                <br />
                <span className="text-[#646b66]">
                  Principal Architect & Founder
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 lg:col-span-6">
            <Badge>Our Organic Ethos</Badge>
            <h2 className="font-serif text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
              Symbiosis Between Built Architecture & Forest Ecology
            </h2>
            <p className="leading-8 text-[#646b66]">
              Founded in Portland and Stockholm, TERRA was born out of a stark
              realization: contemporary commercial construction accounts for
              nearly 40% of global emissions, while confining inhabitants within
              stagnant, artificial environments.
            </p>
            <p className="leading-8 text-[#646b66]">
              Our multidisciplinary team unites structural timber engineers,
              horticultural scientists, and certified biophilic architects to
              curate spaces that restore human balance and regenerate the
              regional watershed.
            </p>
            <div className="grid grid-cols-3 gap-3 pt-2">
              <Stat value="100%" label="Certified FSC Timber" />
              <Stat value="Zero" label="Toxic VOC Finishes" />
              <Stat value="18 Yrs" label="Ecological R&D" />
            </div>
            <a
              href="#contact"
              className="self-start rounded-full bg-[#4a7c59] px-7 py-3.5 font-semibold text-white transition hover:bg-[#375d42]"
            >
              Read Our Manifesto →
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-20 px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Badge>Our Practice Areas</Badge>
              <h2 className="mt-4 max-w-xl font-serif text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
                Holistic Systems for Conscious Living
              </h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.number}
                className="group flex min-h-[400px] flex-col justify-between rounded-3xl bg-[#f0ece4] transition duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/90 text-xl text-[#4a7c59] shadow-sm backdrop-blur">
                    {service.icon}
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-between p-8 sm:p-10">
                  <div>
                    <h3 className="font-serif text-2xl font-semibold sm:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 max-w-lg leading-7 text-[#646b66]">
                      {service.text}
                    </p>
                  </div>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#4a7c59] transition group-hover:translate-x-1"
                  >
                    Explore the practice →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="why-us"
        className="scroll-mt-20 bg-[#f5f1ea] px-6 py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <Badge>Uncompromising Integrity</Badge>
            <h2 className="mt-4 font-serif text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
              Why Visionary Leaders Choose Terra
            </h2>
            <p className="mt-4 text-[#646b66]">
              Conventional construction settles for greenwashed checkboxes. We
              construct verifiable living ecosystems designed for a 150-year
              lifecycle.
            </p>
          </div>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="flex flex-col gap-4 lg:col-span-7">
              {pillars.map(([number, title, text]) => (
                <div
                  key={number}
                  className="flex items-start gap-5 rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#eaf3ed] font-serif text-lg font-bold text-[#4a7c59]">
                    {number}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#646b66]">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-6 lg:col-span-5">
              <div className="rounded-3xl bg-white p-8 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-[#4a7c59]">
                  Performance Standards
                </p>
                <h3 className="mt-2 font-serif text-2xl font-bold">
                  Terra vs Conventional
                </h3>
                <div className="mt-6 space-y-4 text-sm">
                  {[
                    "Net Negative Embodied Carbon",
                    "Grade 1 Indoor Air Quality",
                    "100% Biophilic Sightline Access",
                    "Zero Toxic VOC Chemicals",
                    "150+ Year Mass Timber",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between gap-3 border-b border-[#c4c8bc]/30 pb-3"
                    >
                      <span className="text-[#646b66]">{item}</span>
                      <span className="shrink-0 font-bold text-[#4a7c59]">
                        ✓
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl bg-[#4a7c59] p-8 text-white shadow-lg">
                <div className="mb-3 text-[#f8e0a8]">★★★★★</div>
                <p className="font-serif text-lg italic leading-relaxed">
                  Our headquarters created by Terra transformed our workplace
                  culture. Employee retention rose 28% and clients are
                  mesmerized by the living interior forest.
                </p>
                <p className="mt-6 text-sm font-bold">Marcus Vance</p>
                <p className="text-xs text-[#c8e8d0]">
                  Chief Experience Officer, Nordic Horizons Group
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-20 px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 rounded-3xl bg-[#f0ece4] p-8 text-center shadow-sm sm:p-12 lg:p-16">
            <Badge>Let&apos;s Co-Create</Badge>
            <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
              Ready to Build a Living Sanctuary?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[#646b66]">
              Let&apos;s design the future together with our master architects
              and biophilic scientists.
            </p>
            <a
              href="#inquiry-form"
              className="mt-8 inline-flex rounded-full bg-[#4a7c59] px-7 py-3.5 font-semibold text-white transition hover:bg-[#375d42]"
            >
              Book Your Discovery Session →
            </a>
          </div>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h3 className="font-serif text-2xl font-semibold sm:text-3xl">
                Connect With Our Studio
              </h3>
              <p className="mt-3 leading-7 text-[#646b66]">
                We accept select residential, institutional, and commercial
                headquarters projects globally.
              </p>
              <div className="mt-8 space-y-4">
                <ContactCard
                  label="Toll-Free Consultation"
                  value="+1 (800) 492-TERRA"
                  detail="Mon - Fri, 8am - 6pm PST"
                />
                <ContactCard
                  label="Direct Correspondence"
                  value="studio@terra-arch.com"
                  detail="Average response within 24 hours"
                />
                <div className="rounded-2xl bg-[#f0ece4] p-5 text-sm">
                  <p className="font-bold uppercase tracking-wider text-[#646b66]">
                    Primary Studios
                  </p>
                  <p className="mt-2 font-semibold">Pacific Northwest Studio</p>
                  <p className="text-[#646b66]">
                    450 Green Street, Portland, OR
                  </p>
                  <p className="mt-2 font-semibold">European Atelier</p>
                  <p className="text-[#646b66]">Skeppsbron 18, Stockholm</p>
                </div>
              </div>
            </div>
            <div
              id="map-container"
              className="min-h-[400px] overflow-hidden rounded-3xl bg-[#f5f1ea] lg:col-span-7"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d179612.9238385617!2d-122.8016467332207!3d45.542811867086885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950b0b7da97427%3A0x1c36b9e6f6d18591!2sPortland%2C%20OR!5e0!3m2!1sen!2sus!4v1716943825835!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "100%" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Metric({
  value,
  label,
  icon,
}: {
  value: string;
  label: string;
  icon: string;
}) {
  return (
    <div className="flex items-center gap-4 sm:px-4">
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#e4e0d8] text-2xl text-[#4a7c59]">
        {icon}
      </span>
      <div>
        <div className="font-serif text-3xl font-bold">{value}</div>
        <div className="text-sm font-semibold text-[#646b66]">{label}</div>
      </div>
    </div>
  );
}
function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl bg-white p-4 text-center shadow-sm">
      <span className="block font-serif text-2xl font-bold text-[#4a7c59]">
        {value}
      </span>
      <span className="text-xs font-semibold text-[#646b66]">{label}</span>
    </div>
  );
}
function ContactCard({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-[#f0ece4] p-5">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#4a7c59] text-xl text-white">
        ✦
      </div>
      <div>
        <div className="text-xs font-bold uppercase tracking-wider text-[#646b66]">
          {label}
        </div>
        <div className="font-bold">{value}</div>
        <div className="text-xs text-[#646b66]">{detail}</div>
      </div>
    </div>
  );
}
function Field({
  label,
  type = "text",
  required = false,
  as = "input",
}: {
  label: string;
  type?: string;
  required?: boolean;
  as?: "input" | "textarea" | "select";
}) {
  const classes =
    "mt-2 w-full rounded-xl border border-[#c4c8bc]/60 bg-white px-4 py-3 text-sm text-[#2e3230] outline-none focus:border-[#4a7c59] focus:ring-2 focus:ring-[#4a7c59]/15";
  return (
    <label className="block text-sm font-semibold text-[#646b66]">
      {label}
      {as === "textarea" ? (
        <textarea required={required} rows={5} className={classes} />
      ) : as === "select" ? (
        <select required={required} className={classes} defaultValue="">
          <option value="" disabled>
            Select one...
          </option>
          <option>Mass Timber Commercial HQ</option>
          <option>Regenerative Private Estate</option>
          <option>Living Botanical Interior</option>
        </select>
      ) : (
        <input required={required} type={type} className={classes} />
      )}
    </label>
  );
}

