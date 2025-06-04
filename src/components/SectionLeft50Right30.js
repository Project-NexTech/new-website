import React from 'react';
import './SectionLayouts.css';

export default function SectionLeft50Right30({ left, right }) {
  return (
    <section className="section section-50-30">
      <div className="module module-50">{left}</div>
      <div className="module module-30">{right}</div>
    </section>
  );
} 