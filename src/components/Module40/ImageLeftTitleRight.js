import React from 'react';

export default function ImageLeftTitleRight({ imgSrc, title, subtitle }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
      <img src={imgSrc} alt="" style={{ width: '20vw', height: 'auto', objectFit: 'cover' }} />
      <div style={{ width: '5vw' }} />
      <div style={{ width: '15vw', textAlign: 'center' }}>
        <div style={{ fontSize: '2em', fontWeight: 'bold' }}>{title}</div>
        <div style={{ fontSize: '1.2em', color: '#666', marginTop: '0.5em' }}>{subtitle}</div>
      </div>
    </div>
  );
} 