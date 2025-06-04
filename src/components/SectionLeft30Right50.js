import React from 'react';
import './SectionLayouts.css';

export default function SectionLeft30Right50({ left, right }) {
  return (
    <section className="section section-30-50">
      <div className="module module-30">{left}</div>
      <div className="module module-50">{right}</div>
    </section>
  );
} 