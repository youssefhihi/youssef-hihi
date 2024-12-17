import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "easy-car",
    title: "Easy Car",
    description: "A car rental web application built using JavaScript, HTML, CSS, and Tailwind CSS. It uses local storage to manage car data and offers a responsive, interactive UI for users to browse and select rental cars.",
    icon: "/skills/javascript.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Code-Kampfer/easyCar",
    url: "https://code-kampfer.github.io/easyCar",
    tags: ["Flutter", "HTML", "Css", "Tailwind Css"],
  },
  {
    id: "bookify",
    title: "Bookify",
    description: "A library management platform with an integrated interactive community. Built using Laravel, Blade, JavaScript, AJAX, jQuery, HTML, and Tailwind CSS, it allows efficient management of book borrowing and user interactions.",
    icon: "/skills/laravel.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/youssefhihi/Fil-Rouge",
    tags: ["Laravel", "Blade", "JavaScript", "AJAX", "jQuery", "HTML", "Tailwind CSS"],
  },
  {
    id: "pigeon-sky-race",
    title: "Pigeon Sky Race",
    description: "A management system for pigeon racing, handling pigeon registration, lofts, competitions, and result calculations. Built using Spring Boot and MongoDB with a scalable architecture based on Domain-Driven Design (DDD).",
    icon: "/skills/springboot.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/youssefhihi/PigeonSkyRace",
    tags: ["Spring Boot", "MongoDB", "DDD", "CI/CD", "GitHub Actions", "Backend Development"],
  },
  {
    id: "evento",
    title: "Evento",
    description: "An all-in-one platform for managing and booking events, offering features for participants, organizers, and administrators to streamline event workflows.",
    icon: "/skills/laravel.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/youssefhihi/evento",
    tags: ["Laravel", "Blade", "JavaScript", "Tailwind CSS", "Event Management", "Full Stack"],
  },

];
export default projects;
