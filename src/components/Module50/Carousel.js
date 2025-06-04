import React, { useState } from 'react';

export default function Carousel({ images }) {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx(i => (i - 1 + images.length) % images.length);
  const next = () => setIdx(i => (i + 1) % images.length);
  return (
    <div style={{ textAlign: 'center' }}>
      <img src={images[idx]} alt="carousel" style={{ width: '100%' }} />
      <div style={{ marginTop: 8 }}>
        <button onClick={prev}>&lt;</button>
        <span style={{ margin: '0 1em' }}>{idx + 1} / {images.length}</span>
        <button onClick={next}>&gt;</button>
      </div>
    </div>
  );
} 