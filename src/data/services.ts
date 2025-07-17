import { IServiceItem } from "@/types";

const services: IServiceItem[] = [
  {
    id: 1,
    title: "Frontend Development",
    icons: [
      "/skills/react.svg",
      "/skills/typescript.svg",
      "/skills/angular.svg",
      "/skills/nextjs.png",
      "/skills/tailwind.svg"
    ],
    shortDescription: "Building interactive and responsive user interfaces with modern web technologies.",
    description: "Frontend development involves creating the visual and interactive parts of a website or application. I work with a range of modern technologies such as React, Angular, TypeScript, and Tailwind CSS to build scalable and maintainable user interfaces. My focus is on delivering a seamless and responsive user experience across devices, ensuring performance, accessibility, and usability."
  },
  {
    id: 2,
    title: "Backend Development",
    icons: [
      "/skills/java.svg",
      "/skills/php.svg",
      "/skills/springboot.svg",
      "/skills/laravel.svg",
      "/skills/j2ee.svg",
    ],
    shortDescription: "Building robust and scalable server-side applications with powerful backend technologies.",
    description: "Backend development focuses on building the server-side logic, databases, and APIs that power web applications. I work with Java and Spring Boot to create secure and scalable applications, and use PHP with Laravel for rapid development of dynamic websites and services. My goal is to ensure that the backend is reliable, efficient, and able to handle high volumes of traffic and complex business logic."
  },
  {
    id: 3,
    title: "Product Strategy",
    icons: [
      "/skills/git.svg",
      "/images/collaboration.png",
      "/images/logical-thinking.png",
      "/images/analytical-skills.png",
      "/skills/jira.svg",

    ],
    shortDescription: "Crafting effective product strategies through collaboration, analysis, and logical thinking.",
    description: "Product strategy involves aligning a product's vision with market demands, ensuring its growth, and driving innovation. I leverage my skills in collaboration, logical thinking, and analytical insights to shape strategies that lead to the successful development and delivery of products. By understanding both user needs and business goals, I work to optimize product development cycles and enhance customer satisfaction."
  },
  {
    id: 5,
    title: "DevOps",
    icons: [
      "/skills/",
      "/skills/jenkins.svg",
      "/skills/docker.svg",
      "/skills/github.svg",
    ],
    shortDescription: "I streamline development and operations processes.",
    description:
      "I streamline development and operations processes through effective DevOps practices. I implement continuous integration and deployment pipelines, manage cloud infrastructure, and use containerization to ensure efficient, reliable, and scalable software delivery. Improve your workflow with DevOps solutions.",
  },
  {
    id: 6,
    title: "Database Management",
    icons: [
      "/skills/",
      "/skills/mysql.svg",
      "/skills/postgresql.svg",
      "/skills/mongodb.svg",
    ],
    shortDescription: "I manage and optimize your database systems.",
    description:
      "I manage and optimize your database systems for performance, reliability, and scalability. With expertise in SQL and NoSQL databases, I design schemas, write complex queries, and implement best practices for data integrity and security. Ensure your data is managed effectively and efficiently.",
  },
];

export default services;
