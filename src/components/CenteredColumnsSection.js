import React from 'react';
import '../App.css';  // Updated path to correctly reference App.css from src/components

const CenteredColumnsSection = ({ numColumns = 3, columnsContent }) => {
  const gridTemplate = numColumns === 2 ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)';
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0', width: '100%', border: '1px solid #fff' }}>
      <div style={{ display: 'grid', gridTemplateColumns: gridTemplate, gap: '1rem', maxWidth: '85vw', width: '100%' }}>
        {columnsContent.map((content, index) => (
          <div key={index} style={{ textAlign: 'center', padding: '1rem', color: '#fff', border: '1px solid #fff' }}>
            {content}  // Each item in columnsContent should be a React element, e.g., text or images
          </div>
        ))}
      </div>
    </div>
  );
};

export default CenteredColumnsSection; 