import React from 'react';
import './SectionLayouts.css';

export default function SectionTwo40s({ left, right }) {
  return (
    <section className="section section-40-40">
      <div className="module module-40">{left}</div>
      <div className="module module-40">{right}</div>
    </section>
  );
} 