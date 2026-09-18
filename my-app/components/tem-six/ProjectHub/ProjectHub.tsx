"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Card from '../Card/Card';
import './ProjectHub.css';

const projects = [
  {
    id: 1,
    title: "Luxury Interior Upgrade",
    description: "Complete interior transformation featuring premium Italian leather and custom stitching for a Range Rover.",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1920&q=80",
    badge: "Upholstery",
    link: "#"
  },
  {
    id: 2,
    title: "Advanced Multimedia Integration",
    description: "Installation of a state-of-the-art 12-inch Android infotainment system with OEM integration.",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1920&q=80",
    badge: "Tech",
    link: "#"
  },
  {
    id: 3,
    title: "Full Body Starlight Headliner",
    description: "Bespoke starlight headliner installation with over 1000 individually placed fiber optic stars.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1920&q=80",
    badge: "Lighting",
    link: "#"
  },
  {
    id: 4,
    title: "360° Camera System",
    description: "Seamless integration of high-definition 360-degree cameras for enhanced safety and parking.",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1920&q=80", 
    badge: "Safety",
    link: "#"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as any } }
};

const ProjectHub: React.FC = () => {
  return (
    <section className="temsix-project-hub">
      <div className="temsix-project-hub-container">
        <motion.div 
          className="temsix-project-hub-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="temsix-project-hub-title">Our Recent <span>Projects</span></h2>
          <p className="temsix-project-hub-subtitle">
            Explore our latest transformations and see how we elevate vehicles to new heights of luxury and performance.
          </p>
        </motion.div>

        <motion.div 
          className="temsix-project-hub-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card 
                title={project.title}
                description={project.description}
                image={project.image}
                badge={project.badge}
                link={project.link}
                linkText="View Details"
              />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="temsix-project-hub-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a href="#projects" className="temsix-btn-outline">View All Projects</a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectHub;
