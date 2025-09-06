import { CapabilitiesCard } from "../utils/card";

const Card = ({ title, icon, items }) => (
  <div className=" h-full w-full border md:border-gray-200  py-10 p-4 flex flex-col gap-4">
    {/* Upper Section */}
    <div className=" w-full flex lg:flex-row flex-col    items-center lg:items-start ">
      {/* Icon */}
      <div className="lg:w-1/5 w-full flex justify-start lg:justify-center mb-2 lg:mb-0">
        <img src={icon} alt="" className="" />
      </div>

      {/* Title */}
      <div className="lg:w-4/5 w-full justify-start lg:justify-center ">
        <h2 className=" text-lg lg:text-xl font-semibold">{title}</h2>
      </div>
    </div>

    {/* Lower Section */}
    <ul className="flex flex-col lg:pl-[20%] pl-0 list-disc list-inside text-gray-700">
      {items.map((item, idx) => (
        <li className="py-2 text-sm lg:text-base" key={idx}>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const GeneralCapabilityCard = () => (
  <div className=" w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
    {CapabilitiesCard.map((card, index) => (
      <Card key={index} {...card} />
    ))}
  </div>
);

export default GeneralCapabilityCard;
