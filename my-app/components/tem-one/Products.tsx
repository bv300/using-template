import { SectionTitle } from "./shared";
import { ScrollReveal } from "./ScrollReveal";
import "./Products.css";

const businessProducts = [
  {
    title: "Idea Validator AI",
    description: "Instantly analyze market trends and validate your business ideas with real-time data insights.",
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" width="24" height="24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.82 1.508-2.316a7.5 7.5 0 10-7.516 0c.85.496 1.508 1.333 1.508 2.316V18" />
      </svg>
    )
  },
  {
    title: "Pitch Deck Generator",
    description: "Automatically generate compelling pitch decks using proven templates and your core business metrics.",
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" width="24" height="24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    )
  },
  {
    title: "Market Analyzer",
    description: "Deep dive into competitor strategies and identify untapped market opportunities effortlessly.",
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" width="24" height="24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    )
  },
  {
    title: "Financial Modeler",
    description: "Build robust financial projections and scenario planning tools for your startup's future.",
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" width="24" height="24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    )
  },
  {
    title: "Brand Voice Architect",
    description: "Establish a unique corporate identity and maintain consistent messaging across all channels.",
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" width="24" height="24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688 0-1.37-.043-2.05-.125m0 0A3.375 3.375 0 115.125 13.5m4.165 2.215a5.626 5.626 0 01-1.045 2.969.75.75 0 01-1.242.06A2.65 2.65 0 015.89 17.5m5.45-1.66A9.13 9.13 0 0112 15.75c3.09 0 5.86-1.353 7.735-3.5m-14.47 0A9.13 9.13 0 0112 6.75c3.09 0 5.86 1.353 7.735 3.5m-14.47 0c-.394 1.134-.394 2.366 0 3.5" />
      </svg>
    )
  },
  {
    title: "Growth Predictor",
    description: "Leverage machine learning to forecast customer acquisition and revenue growth trajectories.",
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" width="24" height="24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.499 4.499 0 00-1.757 4.306 4.499 4.499 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    )
  }
];

export function ProductsSection() {
  return (
    <section id="products" className="products-section">
      <div className="products-container">
        <ScrollReveal variant="fade-up" duration="slow">
          <div className="products-header">
            <SectionTitle>Our Products</SectionTitle>
            <p className="products-subtitle">
              Discover our suite of animated business idea products. Hover over the lens to see how we deconstruct complex problems into clear, focused solutions.
            </p>
          </div>
        </ScrollReveal>

        <div className="products-layout">
          {/* Left Column: Exploded Camera Lens Animation */}
          <ScrollReveal className="lens-scene" variant="fade-right" duration="slow">
            <div className="lens-assembly">
              <div className="lens-element lens-body lens-1"></div>
              <div className="lens-element glass-disk lens-2"></div>
              <div className="lens-element glass-disk glass-tint-blue lens-3"></div>
              <div className="lens-element glass-disk lens-4"></div>
              <div className="lens-element glass-disk glass-tint-purple lens-5"></div>
            </div>
          </ScrollReveal>

          {/* Right Column: Products List */}
          <ScrollReveal className="products-list" variant="fade-left" duration="slow">
            {businessProducts.map((product, index) => (
              <div key={index} className="product-card">
                <div className="product-icon">{product.icon}</div>
                <div className="product-info">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
