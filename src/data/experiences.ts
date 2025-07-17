import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Full stack Java/Angular Developer Intern",
    company: "BI NEWVISION",
    startDate: "Apr 2025",
    isCurrentJob: true,
    location: "Casablanca, Morocco",
    description: [
      "Contributed to a Digital Twin project simulating real-world assets in a 3D environment using Angular and Three.js.",
      "Developed RestFul microservices with Spring Boot to manage simulation data and real-time interactions.",
      "Integrated 3D models into a responsive Angular frontend to visualize dynamic system states.",
      "Collaborated in a microservices-based architecture, enhancing modularity and scalability of the application.",
    ]
  },
  {
    designation: "Full stack Developer",
    company: "YouCode Maroc",
    startDate: "Sep 2023",
    endDate: "Apr 2025",
    isCurrentJob: false,
    location: "Safi, Morocco",
    description: [
      "Learning and applying full-stack development skills through hands-on projects.",
      "Collaborating with instructors and peers on coding assignments and problem-solving.",
      "Enhancing proficiency in front-end and back-end technologies, including Angular, Java, and databases."
    ],
  },
  {
    designation: "Full Stack PHP/React Developer Intern",
    company: "AlloBaba, Marrackesh",
    startDate: "May 2024",
    endDate: "July 2024",
    isCurrentJob: false,
    location: "Marrackesh, Morocco",
    description: [
      "Developed an OCR extension using Tesseract.js to extract text from images.",
      "Built an intuitive user interface using React and TypeScript for frontend development.",
      "Implemented a Laravel backend to efficiently process image-to-text data."
    ],
  },
];

export default experiences;
