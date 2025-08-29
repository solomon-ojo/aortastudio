import React from "react";

const people = [
  {
    id: 1,
    name: "John Doe",
    position: "Software Engineer",
    img: "staff_1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Product Manager",
    img: "staff_2.jpg",
  },
  {
    id: 3,
    name: "Alex Johnson",
    position: "UI/UX Designer",
    img: "staff_3.jpg",
  },
  {
    id: 4,
    name: "Chris Evans",
    position: "Data Analyst",
    img: "staff_4.jpg",
  },
  {
    id: 5,
    name: "Olivia Brown",
    position: "Backend Developer",
    img: "staff_5.jpg",
  },
  {
    id: 6,
    name: "Liam Wilson",
    position: "Frontend Developer",
    img: "staff_6.jpg",
  },
  {
    id: 7,
    name: "Sophia Lee",
    position: "Project Lead",
    img: "/staff_7.jpg",
  },
  {
    id: 8,
    name: "Michael Clark",
    position: "DevOps Engineer",
    img: "/staff_8.jpg",
  },
];

const TeamCard = () => {
  return (
    <div className="bg-black min-h-screen lg:p-6">
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {people.map((person) => (
          <div
            key={person.id}
            className="border border-gray-700 shadow-lg overflow-hidden p-5"
          >
            {/* Upper Part - Image */}
            <div className="h-48 w-full">
              <img
                src={person.img}
                alt={person.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Lower Part - Name & Position */}
            <div className="p-4 text-center text-white">
              <h2 className="text-lg font-semibold">{person.name}</h2>
              <p className="text-sm text-gray-400">{person.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCard;
