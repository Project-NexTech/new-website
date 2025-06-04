import React from 'react';

export default function BigTitleSubtitle({ title, subtitle }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '2em', fontWeight: 'bold' }}>{title}</div>
      <div style={{ fontSize: '1.2em', color: '#666', marginTop: '0.5em' }}>{subtitle}</div>
    </div>
  );
} 