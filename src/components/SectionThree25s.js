import React from 'react';
import './SectionLayouts.css';

export default function SectionThree25s({ first, second, third }) {
  return (
    <section className="section section-25-25-25">
      <div className="module module-25">{first}</div>
      <div className="module module-25">{second}</div>
      <div className="module module-25">{third}</div>
    </section>
  );
} 