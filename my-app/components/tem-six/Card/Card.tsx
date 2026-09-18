"use client";
import React from 'react';
import './Card.css';

interface CardProps {
  title: string;
  description: string;
  image: string;
  badge: string;
  link: string;
  linkText: string;
}

const Card: React.FC<CardProps> = ({ title, description, image, badge, link, linkText }) => {
  return (
    <div className="temsix-card">
      <div className="temsix-card-image">
        <img src={image} alt={title} />
        <span className="temsix-card-badge">{badge}</span>
      </div>
      <div className="temsix-card-content">
        <h3 className="temsix-card-title">{title}</h3>
        <p className="temsix-card-desc">{description}</p>
        <a href={link} className="temsix-card-link">{linkText}</a>
      </div>
    </div>
  );
};

export default Card;
