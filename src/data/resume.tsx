import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import kat from '../../public/kat.png'
import ecom from "../../public/ecom.png";

export const DATA = {
  name: "Mohammad",
  initials: "MT",
  url: "https://dillion.io",
  location: "Perth Australia, WA",
  description:
    "Software Engineer/Frontend Developer loves learning and building complex things.",
  summary:
    "As a software engineer, I am passionate about building web applications with great user experiences. I use React, TypeScript, Node.js, Express.js, MongoDB, SQL, and TailwindCSS to create responsive, dynamic, and performant web pages and services. I also follow clean coding practices, such as ESLint, and use version control, CI/CD, and REST APIs to ensure the quality and reliability of my code.",
  avatarUrl: "https://api.dicebear.com/9.x/notionists-neutral/svg?seed=Leo",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Postgres",
    "Tailwindcss",
    "HTML",
    "CSS",
    "storybook",
    "React-testing",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Mohtoto",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mohammad-totonchy-622912250/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Versent",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl:
        "https://versent.com.au/wp-content/uploads/2021/03/versent-logo-fb.jpg",
      start: "January 2023",
      end: "current",
      description: `
        • Built new features for a Next.js application using TypeScript, TailwindCSS, NextUI, and Zustand for state management in a monorepo structure.
        • Developed a pagination feature and implemented a large property UI module.
        • Utilized SWR for efficient data fetching and caching.
        • Tested user interactions with React Testing Library.
        • Collaborated with the client in standups and meetings, using Confluence for documentation and Jira for ticket tracking.
        `,

      // [
      //   `
      // Project: Greenpages
      // • Developed an internal application for employee bios using Next.js.
      // • Integrated Slack and Confluence to streamline team communication and collaboration.
      // • Refactored over 500 lines of repetitive code into readable, maintainable code blocks.
      // • Actively participated in daily standups, ensuring progress alignment with project goals.
      // `,
      // ],
      // [
      //   `
      // Project: CurBn
      // • Migrated Mulesoft to AWS using Node.js, TypeScript, and AWS CDK.
      // • Created APIs and structured error handling to improve flexibility and reliability in code.
      // • Implemented unit testing with Jest, mocking API endpoints to ensure functionality.
      // • Used Cypress and Postman for automated and manual testing of the application.
      // • Played an active role in daily standups and retrospectives, facilitating communication across teams.
      //   `,
      // ],
      // [
      //   `
      // Project: HBF
      // • Developed 3 APIs using C# for the project, ensuring smooth backend functionality.
      // `,
      // ],
    },
    {
      company: "Frontend Simplified",
      badges: [],
      href: "https://frontendsimplified.com/",
      location: "Remote",
      title: "Frontend Engineer",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/C560BAQGuzLomDSVnKw/company-logo_200_200/company-logo_200_200/0/1648018204916/frontend_simplified_logo?e=1735776000&v=beta&t=Dj3lHDuAB6-vRjI2GlkEM8QIkl9J2nxmtFIGIvkuk4Y",
      start: "April 2022",
      end: "January 2023",
      description: `Delivered 5 professional websites using HTML5, CSS3 (+ SCSS, BEM), JavaScript and React best practices. 
        Improved website performance by compressing caching and lazy loading images and components.
        Included SEO, responsive, multiplatform and hosting support, enabling their website to be used by any browser or device in the world. 
        `,
      // {
      //   company: "Nvidia",F
      //   href: "https://nvidia.com/",
      //   badges: [],
      //   location: "Santa Clara, CA",
      //   title: "Software Engineer",
      //   logoUrl: "/nvidia.png",
      //   start: "January 2020",
      //   end: "April 2020",
      //   description:
      //     "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
      // },
    },
  ],
  education: [
    {
      school: "DataCore Jam 2024 - Participant",
      href: "https://www.credly.com/badges/def36888-af7e-4ec9-b454-521d436aaa12/linked_in_profile",
      degree: "Versent",
      logoUrl:
        "https://images.credly.com/size/340x340/images/d7e65403-e1b3-48c0-ab55-738d16848f12/image.png",
      start: "2024",
      end: "2029",
    },
    {
      school: "AWS Certified Cloud Practitioner",
      href: "https://www.credly.com/badges/5c21952e-8d55-4d04-a3e3-6f39ecb75d0b/public_url",
      degree: "Amazon Web Services Training and Certification",
      logoUrl:
        "https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
      start: "2024",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "Ecom-React",
      href: "https://github.com/Mohtoto/E-com-React",
      dates: "Jan 2024 - Present",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: {ecom},
      video:
        "",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: {kat},
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
