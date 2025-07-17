import { ISkillListItem, SkillLevel } from "@/types";

const skills: ISkillListItem[] = [
  {
    title: "Programming Languages",
    items: [
      {
        title: "JavaScript",
        level: SkillLevel.Expert,
        icon: "/skills/javascript.svg",
      },
      {
        title: "TypeScript",
        level: SkillLevel.Intermediate,
        icon: "/skills/typescript.svg",
      },
      {
        title: "JAVA",
        level: SkillLevel.Intermediate,
        icon: "/skills/java.svg",
      },
      {
        title: "PHP",
        level: SkillLevel.Intermediate,
        icon: "/skills/php.svg",
      },
      {
        title: "Python",
        level: SkillLevel.Beginner,
        icon: "/skills/python.svg",
      },
    ],
  },
  {
    title: "Frontend Development",
    items: [
      {
        title: "React.js",
        level: SkillLevel.Expert,
        icon: "/skills/react.svg",
      },
      {
        title: "Angular",
        level: SkillLevel.Intermediate,
        icon: "/skills/angular.svg",
      },
      {
        title: "Next.js",
        level: SkillLevel.Intermediate,
        icon: "/skills/nextjs.png",
      },
      {
        title: "HTML",
        level: SkillLevel.Expert,
        icon: "/skills/html.svg",
      },
      {
        title: "CSS",
        level: SkillLevel.Intermediate,
        icon: "/skills/css.svg",
      },
      {
        title: "Tailwind",
        level: SkillLevel.Intermediate,
        icon: "/skills/tailwind.svg",
      },
    ],
  },
  {
    title: "Backend Development",
    items: [
      {
        title: "Spring Boot",
        level: SkillLevel.Intermediate,
        icon: "/skills/springboot.svg",
      },
      {
        title: "J2EE",
        level: SkillLevel.Intermediate,
        icon: "/skills/j2ee.svg",
      },
      {
        title: "Laravel",
        level: SkillLevel.Expert,
        icon: "/skills/laravel.svg",
      },
    
    ],
  },

  {
    title: "Database Management",
    items: [
      {
        title: "MongoDB",
        level: SkillLevel.Intermediate,
        icon: "/skills/mongodb.svg",
      },
      {
        title: "PostgreSQL",
        level: SkillLevel.Intermediate,
        icon: "/skills/postgresql.svg",
      },
      {
        title: "MySQL",
        level: SkillLevel.Intermediate,
        icon: "/skills/mysql.svg",
      },
    ],
  },
  {
    title: "DevOps and Version Control",
    items: [
      {
        title: "Docker",
        level: SkillLevel.Beginner,
        icon: "/skills/docker.png",
      },
      {
        title: "Git",
        level: SkillLevel.Intermediate,
        icon: "/skills/git.svg",
      },
      {
        title: "GitHub",
        level: SkillLevel.Intermediate,
        icon: "/skills/github.svg",
      },
      {
        title: "Bitbucket",
        level: SkillLevel.Intermediate,
        icon: "/skills/bitbucket.svg",
      },
    ],
  },
 
  {
    title: "Nontechnical Skills",
    items: [
      {
        title: "Problem Solving",
        level: SkillLevel.Intermediate,
        icon: "/images/logical-thinking.png",
      },
      {
        title: "Collaboration",
        level: SkillLevel.Expert,
        icon: "/images/collaboration.png",
      },
      {
        title: "Analytical Skills",
        level: SkillLevel.Intermediate,
        icon: "/images/analytical-skills.png",
      },
    ],
  },
];

export default skills;
