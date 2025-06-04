import React from 'react';

export default function ImageTitleSubtitle({ src, title, subtitle }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <img src={src} alt={title || ''} style={{ width: '100%' }} />
      <div style={{ fontSize: '2em', fontWeight: 'bold', marginTop: '0.5em' }}>{title}</div>
      <div style={{ fontSize: '1.2em', color: '#666', marginTop: '0.5em' }}>{subtitle}</div>
    </div>
  );
} 