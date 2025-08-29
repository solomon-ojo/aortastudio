import React from "react";

const Video = ({ className }) => {
  return (
    <video
      className={className}
      src="https://res.cloudinary.com/dc6iqn3mn/video/upload/v1756458195/hero_kygerx.mp4"
      autoPlay
      loop
      muted
      playsInline
    />
  );
};

export default Video;
