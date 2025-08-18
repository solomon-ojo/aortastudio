import React from "react";

const HistoryMarquee = () => {
  return (
    <div className="overflow-hidden w-full py-4">
      <div className="relative w-full">
        <div className="flex gap-8 items-center animate-marquee">
          <MarqueeContent />
          <MarqueeContent /> {/* Duplicate for seamless loop */}
        </div>
      </div>
    </div>
  );
};

const MarqueeContent = () => (
  <>
    <MarqueeItem
      text="200+ Projects"
      videoSrc="https://www.w3schools.com/howto/rain.mp4"
    />
    <MarqueeItem
      text="150+ Employers"
      videoSrc="https://www.w3schools.com/howto/rain.mp4"
    />
    <MarqueeItem
      text="15+ Years"
      videoSrc="https://www.w3schools.com/howto/rain.mp4"
    />
    <MarqueeItem
      text="90+ Clients"
      videoSrc="https://www.w3schools.com/howto/rain.mp4"
    />
  </>
);

const MarqueeItem = ({ text, videoSrc }) => (
  <div className="flex items-center gap-4 min-w-max">
    <span className="text-white text-xl md:text-2xl lg:text-4xl font-semibold">
      {text}
    </span>
    <video
      src={videoSrc}
      className=" w-24 lg:w-28 h-28 lg:h-32 object-cover "
      autoPlay
      loop
      muted
      playsInline
    />
  </div>
);

export default HistoryMarquee;
