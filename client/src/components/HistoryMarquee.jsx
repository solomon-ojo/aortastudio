import React from "react";
const vidoeSrc =
  "https://res.cloudinary.com/dc6iqn3mn/video/upload/v1756458195/hero_kygerx.mp4";

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
    <MarqueeItem text="200+ Ideas " videoSrc={vidoeSrc} />
    <MarqueeItem text="20+ Employees" videoSrc={vidoeSrc} />
    <MarqueeItem text="15+ Countries" videoSrc={vidoeSrc} />
    <MarqueeItem text="30+ Startups" videoSrc={vidoeSrc} />
  </>
);

const MarqueeItem = ({ text, videoSrc }) => (
  <div className="flex items-center gap-4 min-w-max">
    <span className="text-white text-xl md:text-2xl lg:text-4xl font-semibold">
      {text}
    </span>
    <video
      src={videoSrc}
      className=" w-20 h-20 lg:w-24 lg:h-24 object-cover "
      autoPlay
      loop
      muted
      playsInline
    />
  </div>
);

export default HistoryMarquee;
