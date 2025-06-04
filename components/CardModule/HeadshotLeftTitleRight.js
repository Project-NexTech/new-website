import React from 'react';

export default function HeadshotLeftTitleRight({ imgSrc, title, subtitle }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
      <img src={imgSrc} alt="" style={{ width: '10vw', height: '10vw', borderRadius: '6px', objectFit: 'cover' }} />
      <div style={{ width: '2.5vw' }} />
      <div style={{ width: '12.5vw' }}>
        <div style={{ fontSize: '1.2em', fontWeight: 'bold' }}>{title}</div>
        <div style={{ fontSize: '1em', color: '#666', marginTop: '0.5em' }}>{subtitle}</div>
      </div>
    </div>
  );
} 