import React from 'react';

export default function ImageWithCaption({ src, caption }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <img src={src} alt={caption || ''} style={{ width: '100%' }} />
      {caption && <div className="caption" style={{ marginTop: '8px', fontSize: '0.95em', color: '#555' }}>{caption}</div>}
    </div>
  );
} 