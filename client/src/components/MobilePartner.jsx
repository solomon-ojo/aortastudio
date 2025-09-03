import React from "react";
import PartnersCard from "./PartnerCards";

const partnerLogos = [
  "SQAN App",
  "Ezzra",
  "MindMap",
  "Work Fit",
  "IconPass",
  "Papperboy",
  "BuildArch",
  "Wasabi",
];

const MobilePartner = () => {
  return (
    <section className=" md:hidden relative z-40  pt-20 h-[450px] w-full bg-black mt-[100vh]  border-b-gray-800">
      {/* mobile view */}
      <div className="w-full h-full grid grid-cols-2 pt-10 ">
        {partnerLogos.map((item, index) => (
          <PartnersCard key={index} text={item} />
        ))}
      </div>
    </section>
  );
};

export default MobilePartner;
