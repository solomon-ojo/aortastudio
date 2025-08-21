import { FaLinux, FaWindows, FaApple } from "react-icons/fa";

const cardData = [
  {
    title: "General",
    icon: <FaLinux className="text-4xl text-green-600" />,
    items: [
      "Web applications",
      "Real-time communication systems",
      "Video streaming",
      "Legacy systems reengineering",
      "IoT/embedded development",
      "Mobile applications",
      "Machine learning",
      "CMS customization",
    ],
  },
  {
    title: "Programming Languages",
    icon: <FaWindows className="text-4xl text-blue-500" />,
    items: [
      "JavaScript (Node, React, Angular, Vue)",
      "TypeScript",
      "C#",
      "Java (Spring, Hibernate), Kotlin",
      "PHP (Laravel, Symphony)",
      "Python (Django, Flask)",
      "Swift/Objective-C",
      "C/C++",
    ],
  },
  {
    title: "Databases",
    icon: <FaApple className="text-4xl text-gray-700" />,
    items: [
      "PostgreSQL",
      "MariaDB/MySQL",
      "Microsoft SQL Servering",
      "Elasticsearch",
      "MongoDB",
      "Redis",
    ],
  },
  {
    title: "Operating Systems",
    icon: <FaLinux className="text-4xl text-green-600" />,
    items: ["Microsoft Windows", "GNU/Linux", "iOS", "Android"],
  },
  {
    title: "Cloud",
    icon: <FaWindows className="text-4xl text-blue-500" />,
    items: ["AWS", "Azure", "GCP", "Heroku"],
  },
  {
    title: "DevOps",
    icon: <FaApple className="text-4xl text-gray-700" />,
    items: ["Ansible", "Docker", "Kubernetes", "Terraform", "Jenkins"],
  },
  {
    title: "Streaming",
    icon: <FaLinux className="text-4xl text-green-600" />,
    items: ["Wowza", "Nginx", "Janus", "FFmpeg"],
  },
  {
    title: "Messaging",
    icon: <FaWindows className="text-4xl text-blue-500" />,
    items: ["AMQP (RabbitMQ)", "MQTT", "Next.js", "TSX"],
  },
  {
    title: "Methodologies",
    icon: <FaApple className="text-4xl text-gray-700" />,
    items: ["Agile", "Scrum", "Continuous Integration"],
  },
];

const Card = ({ title, icon, items }) => (
  <div className=" h-full w-full border md:border-gray-200  py-10 p-4 flex flex-col gap-4">
    {/* Upper Section */}
    <div className=" w-full flex lg:flex-row flex-col    items-center lg:items-start ">
      {/* Icon */}
      <div className="lg:w-1/5 w-full flex justify-start lg:justify-center mb-2 lg:mb-0">
        {icon}
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
  <div className=" w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
    {cardData.map((card, index) => (
      <Card key={index} {...card} />
    ))}
  </div>
);

export default GeneralCapabilityCard;
