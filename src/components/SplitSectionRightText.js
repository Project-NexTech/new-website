import React from 'react';
import '../App.css';  // Keep for shared styles if needed

const SplitSectionRightText = ({ imageSrc, textContent }) => {
  return (
    <div style={{ width: '100%', maxWidth: '85vw', margin: '0 auto', border: '1px solid #fff' }}>  // Outermost border
      <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>  // Maintain reverse order
        <div style={{ width: '50%', padding: '1rem', border: '1px solid #fff' }}>  // Added border to image area
          <img src={imageSrc} alt="Section graphic" style={{ width: '100%' }} />
        </div>
        <div style={{ width: '32.5%', padding: '1rem', color: '#fff', border: '1px solid #fff' }}>  // Added border to text area
          {textContent}
        </div>
      </div>
    </div>
  );
};

export default SplitSectionRightText; 