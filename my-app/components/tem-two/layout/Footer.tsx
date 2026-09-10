export default function Footer() {
  return (
    <footer className="bg-[#f5f1ea] px-6 pb-12 pt-20 text-[#2e3230]">
      <div className="mx-auto grid max-w-7xl gap-12 border-b border-[#c4c8bc]/40 pb-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4a7c59] font-serif font-bold text-white">
              T
            </span>
            <span className="font-serif text-2xl font-semibold tracking-[0.2em]">
              TERRA
            </span>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-[#646b66]">
            Crafting sustainable architecture, mindful landscapes, and organic
            spaces rooted in enduring natural materials.
          </p>
          <div className="mt-5 space-y-2 text-sm text-[#646b66]">
            <p>742 Evergreen Studio Way, Portland, OR</p>
            <p>studio@terra-design.com</p>
            <p>+1 (503) 842-1904</p>
          </div>
        </div>
        <div className="lg:col-span-3">
          <h3 className="font-serif font-semibold">Quick Links</h3>
          <div className="mt-4 flex flex-col gap-2.5 text-sm text-[#646b66]">
            <a href="#hero" className="hover:text-[#4a7c59]">
              Home
            </a>
            <a href="#about" className="hover:text-[#4a7c59]">
              About Us
            </a>
            <a href="#services" className="hover:text-[#4a7c59]">
              Our Services
            </a>
            <a href="#why-us" className="hover:text-[#4a7c59]">
              Why Terra
            </a>
            <a href="#contact" className="hover:text-[#4a7c59]">
              Contact
            </a>
          </div>
        </div>
        <div className="lg:col-span-4">
          <h3 className="font-serif font-semibold">Stay Rooted</h3>
          <p className="mt-4 text-sm leading-relaxed text-[#646b66]">
            Receive curated essays on biophilic design, mindful engineering, and
            quarterly architecture notes.
          </p>
          <form className="mt-4 flex gap-2">
            <input
              aria-label="Email address"
              type="email"
              placeholder="Enter your email"
              className="min-w-0 flex-1 rounded-xl bg-white px-4 py-3 text-sm outline-none ring-[#4a7c59] focus:ring-2"
            />
            <button
              type="submit"
              className="rounded-xl bg-[#4a7c59] px-5 py-3 text-sm font-medium text-white hover:bg-[#375d42]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 pt-8 text-xs text-[#646b66] sm:flex-row">
        <p>© 2024 TERRA Design Collective. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#contact">Privacy Policy</a>
          <a href="#contact">Accessibility</a>
        </div>
      </div>
    </footer>
  );
}
