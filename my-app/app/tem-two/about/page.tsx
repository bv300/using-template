export default function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-32 lg:px-12">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4a7c59]">
            About Terra
          </p>
          <h1 className="mt-6 font-serif text-5xl font-medium leading-tight text-[#2e3230] sm:text-6xl">
            Building in harmony with the earth.
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-[#646b66]">
            We pair architectural mastery with ecological science to design spaces that give back more than they take. Every structure we create is a living system.
          </p>
        </div>
        
        {/* Image with continuous zoom in/out animation */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
            alt="Modern Biophilic Architecture"
            className="h-full w-full object-cover animate-continuous-zoom will-change-transform"
          />
        </div>
      </div>
    </section>
  );
}
