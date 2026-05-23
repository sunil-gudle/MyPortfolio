import tcsLogo from "../images/tcs.png";
import wiproLogo from "../images/wipro.png";
import bitsLogo from "../images/BITS.jpeg";
import cocsitLogo from "../images/cocsit.jpg";
import dsclLogo from "../images/DSCL.png";
import expenseTrackerCover from "../images/expense_tracker_cover.png";
import springJpaCover from "../images/spring_jpa_cover.png";
import springBootCover from "../images/spring_boot_cover.png";

export const Bio = {
  name: "Sunil Gudle",
  roles: [
    "Backend Developer",
  ],
  description:
    "A Java Backend Developer with 3+ years of hands-on experience in building scalable and efficient server-side applications using Java and Spring Boot. Proficient in developing RESTful APIs, integrating databases like MongoDB, and implementing caching solutions with Redis. Passionate about writing clean, maintainable code and delivering high-performance backend systems that support dynamic web applications!",
  github: "https://github.com/sunil-gudle",
  resume: "https://drive.google.com/file/d/1L6RFxycSdS1lRgO9tKzxcwl-89EkRrvZ/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/sunil-gudle/",
  twitter: "https://x.com/SuNilGudle1",
  insta: "https://www.instagram.com/sunil_gudle/",
};

export const skills = [
  {
    title: "Backend",
    skills: [
      {
        name: "Core Java",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "Spring Boot",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      },
      {
        name: "Microservices",
        image: "https://img.icons8.com/color/120/api.png",
      },
      {
        name: "MySQL",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "Apache Kafka",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg",
      },
      {
        name: "Hibernate",
        image: "https://www.vectorlogo.zone/logos/hibernate/hibernate-icon.svg",
      },
      {
        name: "Redis",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      },
      {
        name: "MongoDB",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "AWS",
        image: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
      },
      {
        name: "Docker",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "Kubernetes",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
      },
      {
        name: "Git",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "Postman",
        image: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      },
      {
        name: "Intellij IDEA",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: tcsLogo,
    role: "It Analyst (Java Backend Developer)",
    company: "TCS",
    date: "Jan 2025 - Present",
    desc: "Currently working on the Cloud Migration for existing Spring Apps and also Upgrading the apps with Latest stacks",
    skills: [
      "Java",
      "Spring boot",
      "Microservice",
      "Docker",
      "Apache Kafka",
      "CI/CD Jenkins",
      "Junit",
      "AWS"
    ],
  },
  {
    id: 1,
    img: wiproLogo,
    role: "Senior Project Engineer (Java Back-End Developer)",
    company: "Wipro Limited",
    date: "Oct 2021 - Jan 2025",
    desc: "Worked on the modernization of mainframe legacy services to Java-spring boot microservices",
    skills: [
      "Java",
      "Spring boot",
      "Microservice",
      "Apache Kafka",
      "CI/CD Bamboo",
      "Junit",
      "Bitbucket",
    ],
  },
  {
    id: 2,
    img: wiproLogo,
    role: "Test Engineer (Automation Testing)",
    company: "Wipro Limited",
    date: "Nov 2019 - Sept 2021",
    desc: "Worked on Automation Testing for REST API",
    skills: [
      "Java",
      "Spring boot",
      "BDD Cucumber",
      "API Testing",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: bitsLogo,
    school: "M-Tech From BITS Pilani",
    date: "Jun 2020 - Nov 2023",
    desc: "I have done my MTech in Software Engineering at BITS Pilani University. This was an integrated program in Wipro. ",
    degree: "Master of Technology - MTech, Software Engineering",
  },
  {
    id: 1,
    img: cocsitLogo,
    school: "COCSIT College Latur",
    date: "Jun 2016 - May 2019",
    desc: "I completed my B Sc graduation in Computer Science from COCSIT College Latur",
    degree: "B. Sc. (Computer Science)",
  },
  {
    id: 2,
    img: dsclLogo,
    school: "Dayanand Science College Latur",
    date: "Jun 2013 - Mar 2015",
    desc: "I completed my class 12th education at Dayanand Science College, Latur, where I studied Science with Electronic Science.",
    degree: "HSC Board, Science with Electronics",
  },
];

export const projects = [
  {
    id: 9,
    title: "Expense Tracking API",
    date: "Jan 2025 - Feb 2025",
    description:
      "Tried to implement the possible functionalities for expense tracking application in the backend.",
    image: expenseTrackerCover,
    tags: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "Msql",
    ],
    category: "Backend API",
    github: "https://github.com/sunil-gudle/expenseTrackerApi",
  },
  {
    id: 0,
    title: "Spring Data JPA",
    date: "Dec 2024 - Feb 2025",
    description:
      "Tried to implement CRUD operations using Spring Data JPA",
    image: springJpaCover,
    tags: ["Java", "Spring Boot", "Data JPA", "Hibernate", "MySQL"],
    category: "Backend API",
    github: "https://github.com/sunil-gudle/spring-data-jpa-tutorial",
  },
  {
    id: 1,
    title: "Spring Boot Application",
    date: "Apr 2024 - Present",
    description:
      "Basic Spring Boot Application",
    image: springBootCover,
    tags: [
      "Spring Boot",
      "Java",
      "Spring Security",
    ],
    category: "Backend API",
    github: "https://github.com/sunil-gudle/spring-boot-tutorial",
  }
];

export const TimeLineData = [
  { year: 2019, text: "Started my career in Wipro" },
  { year: 2025, text: "Switched the Organization" },
];
