import React from 'react';

export default function BigTitleMultiSubtitle({ title, subtitles }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '2em', fontWeight: 'bold' }}>{title}</div>
      <div style={{ fontSize: '1.1em', color: '#666', marginTop: '0.5em' }}>
        {subtitles.map((line, idx) => <div key={idx}>{line}</div>)}
      </div>
    </div>
  );
} 