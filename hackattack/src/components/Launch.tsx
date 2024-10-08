import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './../styles/LaunchPage.css';

const LaunchPage: React.FC = () => {
  const [countdown, setCountdown] = useState<number | null>(null);
  const [showVideo, setShowVideo] = useState(false);
  const [videoPlayed, setVideoPlayed] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const [showLaunchButton, setShowLaunchButton] = useState(true);
  const [showTitle, setShowTitle] = useState(true); // Added state for controlling title visibility
  const navigate = useNavigate();

  const handleLaunch = () => {
    setShowTimer(true);
    setShowVideo(false);
    setVideoPlayed(false);
    setShowLaunchButton(false);
    setShowTitle(false); // Hide the title when countdown starts
    setCountdown(5);

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          setShowVideo(true);
          setShowTimer(false);
          return 0;
        }
        return (prev || 0) - 1;
      });
    }, 1000);
  };

  const handleVideoEnd = () => {
    setVideoPlayed(true);
    setTimeout(() => navigate('/'), 2000); // Delay for smooth transition
  };

  return (
    <div className="launch-container">
      {showTitle && (
        <h1 className="section-title-launch"> Hack Attack 2024 Launch </h1> // Title will disappear after countdown starts
      )}
      {showVideo ? (
        <div className="video-section">
          <video
            src="/launch-video.mp4"
            autoPlay
            onEnded={handleVideoEnd}
            className="launch-video"
          />
        </div>
      ) : (
        <div className="content">
          {showLaunchButton && (
            <button className="launch-button" onClick={handleLaunch}>
              Launch
            </button>
          )}
          {showTimer && countdown !== null && (
            <div className="countdown-timer">
              {countdown !== 0 ? countdown : "Video Starting..."}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LaunchPage;