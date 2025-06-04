import React from 'react';

export default function SmallTextLines({ lines }) {
  return (
    <div style={{ textAlign: 'left', fontSize: '0.95em', color: '#333' }}>
      {lines.map((line, idx) => <div key={idx}>{line}</div>)}
    </div>
  );
} 