import React from 'react';

export default function ImageLeftSmallTextRight({ imgSrc, lines }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
      <img src={imgSrc} alt="" style={{ width: '12.5vw', height: 'auto', objectFit: 'cover' }} />
      <div style={{ width: '2.5vw' }} />
      <div style={{ width: '10vw', textAlign: 'left', fontSize: '0.95em', color: '#333' }}>
        {lines.map((line, idx) => <div key={idx}>{line}</div>)}
      </div>
    </div>
  );
} 