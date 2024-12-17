import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Full stack Developer",
    company: "YouCode Maroc",
    startDate: "Sep 2023",
    isCurrentJob: true,
    location: "Safi, Morocco",
    description: [
      "Learning and applying full-stack development skills through hands-on projects.",
      "Collaborating with instructors and peers on coding assignments and problem-solving.",
      "Enhancing proficiency in front-end and back-end technologies, including Angular, Java, and databases."
    ],
  },
  {
    designation: "Full Stack Developer Intern",
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
