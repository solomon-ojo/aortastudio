import React from "react";

const logos = ["unity", "forsta", "onedrop", "borda", "toolchain", "blockparty", "navdy", "banovo"];

const CardMarquee = () => {
  return (
    <div className="w-full overflow-hidden ">
      {/* Top Row */}
      <div className="marquee-row marquee-left">
        <div className="marquee-track">
          {[...logos, ...logos].map((text, i) => (
            <div key={`top-${i}`} className="marquee-card">
              <span className="text-xl md:text-3xl font-bold uppercase ">{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row */}
      <div className="marquee-row marquee-right">
        <div className="marquee-track">
          {[...logos, ...logos].map((text, i) => (
            <div key={`bottom-${i}`} className="marquee-card">
              <span className="text-xl md:text-3xl font-bold uppercase ">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardMarquee;
