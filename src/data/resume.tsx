import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
export const DATA = {
  name: "Mohammad",
  initials: "MT",
  url: "https://dillion.io",
  location: "Perth Australia, WA",
  description:
    "Software engineer/frontend developer loves learning and building complex things to learn more",
  summary:
    "As a software engineer, I am passionate about building web applications with great user experiences. I use React, TypeScript, Node.js, Express.js, MongoDB, SQL, and TailwindCSS to create responsive, dynamic, and performant web pages and services. I also follow clean coding practices, such as ESLint, and use version control, CI/CD, and REST APIs to ensure the quality and reliability of my code.",
  avatarUrl: "https://media.licdn.com/dms/image/v2/D5603AQGK1fPJh4OD5g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715053797014?e=1733356800&v=beta&t=TrfVY3My8pKJE0ytSYervX_k2pItlmQoE9J5dNrVd-0",
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
    "React-testing"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/dillion-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
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
      logoUrl: "https://versent.com.au/wp-content/uploads/2021/03/versent-logo-fb.jpg",
      start: "January 2023",
      end: "current",
      description:
        "Next.js was used to build an internal employee bio application and Node.js with TypeScript to migrate MuleSoft to AWS. I developed APIs and structured flexible error-handling mechanisms. Jest was implemented for unit testing, while Cypress and Postman were used for automated and manual testing. I actively participated in daily stand-ups, integrated Slack and Confluence for better team collaboration, and contributed to sprint retrospectives. Working closely with cross-functional teams, I helped deliver high-quality products in an agile environment",
    },
    {
      company: "Frontend Simplified",
      badges: [],
      href: "https://frontendsimplified.com/",
      location: "Remote",
      title: "Frontend Engineer",
      logoUrl: "https://media.licdn.com/dms/image/v2/C560BAQGuzLomDSVnKw/company-logo_200_200/company-logo_200_200/0/1648018204916/frontend_simplified_logo?e=1735776000&v=beta&t=Dj3lHDuAB6-vRjI2GlkEM8QIkl9J2nxmtFIGIvkuk4Y",
      start: "April 2022",
      end: "January 2023",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    // {
    //   company: "Nvidia",
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
    // {
    //   company: "Splunk",
    //   href: "https://splunk.com",
    //   badges: [],
    //   location: "San Jose, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/splunk.svg",
    //   start: "January 2019",
    //   end: "April 2019",
    //   description:
    //     "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    // },
    // {
    //   company: "Lime",
    //   href: "https://li.me/",
    //   badges: [],
    //   location: "San Francisco, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/lime.svg",
    //   start: "January 2018",
    //   end: "April 2018",
    //   description:
    //     "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    // },
    // {
    //   company: "Mitre Media",
    //   href: "https://mitremedia.com/",
    //   badges: [],
    //   location: "Toronto, ON",
    //   title: "Software Engineer",
    //   logoUrl: "/mitremedia.png",
    //   start: "May 2017",
    //   end: "August 2017",
    //   description:
    //     "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    // },
  ],
  education: [
    {
      school: "DataCore Jam 2024 - Participant",
      href: "https://www.credly.com/badges/def36888-af7e-4ec9-b454-521d436aaa12/linked_in_profile",
      degree: "Versent",
      logoUrl: "https://images.credly.com/size/340x340/images/d7e65403-e1b3-48c0-ab55-738d16848f12/image.png",
      start: "2024",
      end: "2029",
    },
    {
      school: "AWS Certified Cloud Practitioner",
      href: "https://www.credly.com/badges/5c21952e-8d55-4d04-a3e3-6f39ecb75d0b/public_url",
      degree: "Amazon Web Services Training and Certification",
      logoUrl: "https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
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
      image:'',
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
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
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    // {
    //   title: "llm.report",
    //   href: "https://llm.report",
    //   dates: "April 2023 - September 2023",
    //   active: true,
    //   description:
    //     "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://llm.report",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/dillionverma/llm.report",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "https://cdn.llm.report/openai-demo.mp4",
    // },
    // {
    //   title: "Automatic Chat",
    //   href: "https://automatic.chat",
    //   dates: "April 2023 - March 2024",
    //   active: true,
    //   description:
    //     "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://automatic.chat",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    // },
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