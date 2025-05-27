import React from 'react';

function AnnouncementsBar() {
  return (
    <div className="announcements-bar">
      <div className="announcements-content">
        <span>This is a news bar for temporary messages that people visiting the site may need to see!</span>
        <a
          href="https://discord.gg/6yHhgpC"
          className="announcements-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Button ↗
        </a>
      </div>
    </div>
  );
}

export default AnnouncementsBar; 