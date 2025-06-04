import React from 'react';
import './SectionLayouts.css';

export default function SectionCardGrid({ cards }) {
  return (
    <section className="section section-card-grid">
      {cards.map((card, idx) => (
        <div className="card-module" key={idx}>{card}</div>
      ))}
    </section>
  );
} 