import React from 'react';

function AnnouncementsBar() {
  return (
    <div className="announcements-bar">
      <div className="announcements-content">
        <span>Welcome to the beta version of our new website! New pages will be added very soon!</span>
        <a
          href="https://discord.gg/6yHhgpC"
          className="announcements-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discord ↗
        </a>
      </div>
    </div>
  );
}

export default AnnouncementsBar; 