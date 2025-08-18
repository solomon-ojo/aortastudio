import React from "react";

const Video = () => {
  return (
    <video
      className="absolute top-0 right-10 w-[100px] h-[100px] object-cover"
      src="https://www.w3schools.com/howto/rain.mp4"
      autoPlay
      loop
      muted
      playsInline
    />
  );
};

export default Video;
