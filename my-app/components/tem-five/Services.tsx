"use client";
import React from 'react';
import './Services.css';

const projects = [
  {
    id: 1,
    name: 'Quantum X Laptop',
    area: '$1,899',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1000&auto=format&fit=crop',
    size: 'large'
  },
  {
    id: 2,
    name: 'Auralis Pro Earbuds',
    area: '$249',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1000&auto=format&fit=crop',
    size: 'medium'
  },
  {
    id: 3,
    name: 'Nova Smartwatch',
    area: '$399',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop',
    size: 'medium'
  },
  {
    id: 4,
    name: 'Visionary Monitor',
    area: '$899',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=1000&auto=format&fit=crop',
    size: 'large'
  }
];

const Services: React.FC = () => {
  return (
    <section id="work" className="services-section py-section">
      <div className="container">
        <div className="services-header reveal-up">
          <h2 className="title-large">Featured Products</h2>
          <p className="text-lead services-desc">
            Technical precision meets cutting-edge innovation. 
            A curation of devices defined by performance.
          </p>
        </div>

        <div className="masonry-grid mt-20">
          {projects.map((project, index) => (
            <div key={project.id} className={`masonry-item reveal-up delay-${(index % 4 + 1) * 100}`}>
              <div className={`project-card ${project.size}`}>
                <div className="project-image-wrapper">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="img-fluid pencil-sketch"
                  />
                </div>
                <div className="project-info">
                  <h4 className="project-name">{project.name}</h4>
                  <span className="project-area">{project.area}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
