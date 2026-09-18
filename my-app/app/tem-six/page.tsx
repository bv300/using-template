"use client";
import React, { useEffect, useRef, useState } from 'react';
import {
    FaAward, FaShieldAlt,
    FaBolt, FaStar, FaMapMarkerAlt, FaPhoneAlt,
    FaClock, FaEnvelope, 
} from 'react-icons/fa';
import HeroSlider from '@/components/tem-six/HeroSlider/HeroSlider';
import MarqueeBar from '@/components/tem-six/MarqueeBar/MarqueeBar';
import useSeo from '@/components/tem-six/hooks/useSeo';
import './HomePage.css';


const useReveal = () => {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.06 }
        );
        const elements = ref.current?.querySelectorAll('.reveal');
        elements?.forEach((el) => observer.observe(el));
        return () => elements?.forEach((el) => observer.unobserve(el));
    }, []);
    return ref;
};

interface CountUpProps {
    target: number;
    suffix: string;
}

const CountUp: React.FC<CountUpProps> = ({ target, suffix }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const started = useRef(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    const steps = 60;
                    const increment = target / steps;
                    let current = 0;
                    const interval = setInterval(() => {
                        current += increment;
                        if (current >= target) { setCount(target); clearInterval(interval); }
                        else setCount(Math.floor(current));
                    }, 1800 / steps);
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);
    return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const services = [
    { img: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80',  title: 'Android Upgrade',      desc: 'Latest infotainment with GPS, Apple CarPlay, streaming & full touchscreen control.' },
    { img: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=800&q=80',       title: '360° Camera System',   desc: "Bird's-eye surround view for safe parking and effortless maneuvering."              },
    { img: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=800&q=80',      title: 'Premium Seat Covers',  desc: 'Luxury leather & diamond-stitched custom covers that transform your cabin.'          },
    { img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',  title: 'Upholstery Works',     desc: 'Professional restoration for seats, door panels and interior trim.'                  },
    { img: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=800&q=80',      title: 'Premium Car Tinting',  desc: 'UV & heat-rejecting films for privacy, comfort and style.'                          },
    { img: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80',      title: 'LED Lighting Upgrade',  desc: 'Upgraded look with energy-efficient, premium LED lighting for enhanced visibility and modern style.'                },
    { img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',      title: 'Sound Horns',          desc: 'Dual-tone & multi-tone horn systems for enhanced audibility and modern style.'        },
    { img: 'https://images.unsplash.com/photo-1644242833305-78d43be57728?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',       title: 'Car Stereo Upgrade',   desc: 'High-fidelity speakers, subwoofers, and amps for immersive sound.'                   },
    { img: 'https://media.istockphoto.com/id/2242115275/photo/close-up-of-a-person-holding-a-car-key-with-a-remote-control-in-front-of-an-open-vehicle-door.jpg?s=1024x1024&w=is&k=20&c=0Ofl1hU2oQK1jYRXlb2k14Bqioa1mtPqFPigUgxRBfE=',      title: 'Smart Lock Systems',   desc: 'Keyless entry, alarm features and smart security for maximum protection.'            },
    { img: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80',    title: 'Car Batteries',        desc: 'Premium automotive batteries built for all-weather reliability.'                     },
];

const stats = [
    { num: 5000, suffix: '+', label: 'Cars Upgraded'    },
    { num: 50,   suffix: '+', label: 'Premium Products' },
    { num: 100,  suffix: '%', label: 'Satisfaction'     },
    { num: 15,   suffix: '+', label: 'Expert Staff'     },
];

const features = [
    { icon: <FaAward />,     label: 'Certified Professionals', sub: 'Factory-trained technicians' },
    { icon: <FaShieldAlt />, label: 'Warranty Covered',        sub: 'All work fully guaranteed'   },
    { icon: <FaBolt />,      label: 'Fast Installation',       sub: 'Same-day service available'  },
    { icon: <FaStar />,      label: 'Premium Quality',         sub: 'Top-grade materials only'    },
];

const HomePage: React.FC = () => {
    const pageRef = useReveal();

    useEffect(() => {
        if (window.location.hash) {
            const el = document.querySelector(window.location.hash);
            if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
        }
    }, []);

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://bmw-demo.com/#organization",
        "name": "BMW Motors",
        "legalName": "BMW Motors",
        "url": "https://bmw-demo.com/",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
        "image": "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80",
        "description": "Premium car accessories shop in Demo City. Specializing in Android screen upgrades, 360 camera installation, seat covers, custom upholstery, window tinting, and audio upgrades.",
        "telephone": "+1 234 567 8900",
        "email": "info@bmw-demo.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 BMW Avenue, Auto City",
            "addressLocality": "Demo City",
            "addressRegion": "Demo State",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 25.19,
            "longitude": 55.35
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
                "opens": "09:30",
                "closes": "22:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Friday",
                "opens": "16:30",
                "closes": "22:30"
            }
        ],
        "sameAs": [
            "https://www.instagram.com/bmw_accessories"
        ]
    };

    useSeo({
        title: "BMW Motors | Premium Auto Upgrades in Demo City",
        description: "Upgrade your ride at Demo City's #1 car accessories shop. We specialize in plug-and-play Android screens, 360° surround-view cameras, custom leather seat covers, full upholstery, heat-rejecting ceramic tinting, and audio upgrades in Auto City.",
        canonicalUrl: "https://bmw-demo.com/",
        ogType: "website",
        ogImage: "https://bmw-demo.comhttps://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
        schemas: [localBusinessSchema]
    });

    return (
        <div ref={pageRef} className="hp-root">
            <HeroSlider />
            <MarqueeBar />

            <section className="hp-stats">
                <div className="hp-stats-inner container">
                    {stats.map((s, i) => (
                        <div className="hp-stat reveal" key={i} style={{ '--delay': `${i * 0.1}s` } as React.CSSProperties}>
                            <div className="hp-stat-num"><CountUp target={s.num} suffix={s.suffix} /></div>
                            <div className="hp-stat-bar" />
                            <div className="hp-stat-label">{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="hp-services section" id="services">
                <div className="container">
                    <div className="hp-section-eyebrow reveal">
                        <span className="hp-eyebrow-line" />
                        <span className="hp-eyebrow-text">What We Offer</span>
                        <span className="hp-eyebrow-line" />
                    </div>
                    <h2 className="hp-section-heading reveal">Our <em>Services</em></h2>

                    <div className="hp-services-grid">
                        {services.map((svc, i) => (
                            <div
                                className="hp-svc-card reveal"
                                key={i}
                                style={{ '--delay': `${(i % 5) * 0.07}s` } as React.CSSProperties}
                            >
                                <div className="hp-svc-img-wrap">
                                    <img src={svc.img} alt={svc.title} loading="lazy" />
                                    <div className="hp-svc-overlay" />
                                </div>
                                <div className="hp-svc-body">
                                    <h3 className="hp-svc-title">{svc.title}</h3>
                                    <p className="hp-svc-desc">{svc.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="hp-about section" id="about">
                <div className="hp-about-slash" aria-hidden="true" />
                <div className="container hp-about-grid">
                    <div className="hp-about-visual reveal">
                        <div className="hp-about-img-frame">
                            <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80" alt="BMW workshop" />
                        </div>
                    </div>
                    <div className="hp-about-text reveal">
                        <div className="hp-section-eyebrow hp-eyebrow-left">
                            <span className="hp-eyebrow-line" />
                            <span className="hp-eyebrow-text">Why BMW</span>
                        </div>
                        <h2 className="hp-section-heading">
                            Demo City's #1<br /><em>Car Accessories</em><br />Specialist
                        </h2>
                        <p>
                            With over a decade in the UAE automotive market, BMW has built a
                            reputation for premium quality, expert installations, and service that
                            never compromises.
                        </p>
                        <p>
                            Our technicians use only the finest materials and latest technology —
                            because your car deserves nothing less.
                        </p>
                        <div className="hp-features-grid">
                            {features.map((f, i) => (
                                <div className="hp-feature reveal" key={i} style={{ '--delay': `${i * 0.08}s` } as React.CSSProperties}>
                                    <div className="hp-feature-icon">{f.icon}</div>
                                    <div>
                                        <strong>{f.label}</strong>
                                        <span>{f.sub}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="hp-contact section" id="contact">
                <div className="container">
                    <div className="hp-section-eyebrow reveal">
                        <span className="hp-eyebrow-line" />
                        <span className="hp-eyebrow-text">Get In Touch</span>
                        <span className="hp-eyebrow-line" />
                    </div>
                    <h2 className="hp-section-heading reveal">Visit <em>Our Showroom</em></h2>
                    <div className="hp-contact-layout">
                        <div className="hp-contact-cards reveal">
                            {[
                                {
                                    icon: <FaMapMarkerAlt />, title: 'Find Us',
                                    lines: ['123 BMW Avenue','Nad Al Hmmar, Demo City — UAE','Auto City, Demo State — UAE'],
                                },
                                {
                                    icon: <FaPhoneAlt />, title: 'Call Us',
                                    links: [{ href: 'tel:+0042711275', label: '+(04) 271 1275' },{ href: 'tel:+12345678900', label: '+1 234 567 8900' }],
                                },
                                {
                                    icon: <FaClock />, title: 'Open Hours',
                                    lines: ['Sat – Thu: 9:30 AM – 10:00 PM','Friday: 4:30 PM – 10:30 PM'],
                                },
                                {
                                    icon: <FaEnvelope />, title: 'Email',
                                    links: [{ href: 'mailto:info@bmw-demo.com', label: 'info@bmw-demo.com' }],
                                },
                            ].map((item, i) => (
                                <div className="hp-contact-card" key={i}>
                                    <div className="hp-contact-card-icon">{item.icon}</div>
                                    <div className="hp-contact-card-body">
                                        <h4>{item.title}</h4>
                                        {item.lines?.map((l, j) => <p key={j}>{l}</p>)}
                                        {item.links?.map((l, j) => <p key={j}><a href={l.href}>{l.label}</a></p>)}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="hp-map reveal">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.0!2d55.35!3d25.19!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDExJzI0LjAiTiA1NcKwMjEnMDAuMCJF!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                                allowFullScreen={false} loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="BMW location"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
