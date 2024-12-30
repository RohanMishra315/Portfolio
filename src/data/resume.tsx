import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Rohan Mishra",
  initials: "DV",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "A developer driven by a passion for open-sources, community building, and advancing cloud-native technologies..",
  summary:
    "Rohan, a junior pursuing his Bachelor's degree, is passionate about building scalable applications and mastering DevOps. As an active contributor to open-source projects, he has been involved with various CNCF initiatives and thrives on solving complex problems with innovative solutions.",
  avatarUrl: "",
  skills: [
    "React",
    "Typescript",
    "Node.js",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "AWS",
    "Github Actions",
    "Prometheus",
    "Argo-CD",
    "Istio",
    "Ansible",
    "many more.."
    
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "315scisyb2020rohanmishra@gmail.com",
    tel: "+918652594776",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/RohanMishra315",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rohan-mishra-97a959233/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/315rohanM",
        icon: Icons.x,

        navbar: true,
      },
      
    },
  },

  work: [
    {
      company: "Data on Kubernetes",
      href: "https://dok.community/",
      badges: [],
      location: "Remote",
      title: "DevRel",
      logoUrl: "https://dok.community/wp-content/uploads/2021/09/DoKC.jpeg",
      start: "Jan 2023",
      end: "April 2023",
      description:
      "Cultivated profound understanding of Kubernetes-driven streaming technologies,immersing in the intricacies of real-data processing within dynamic cloud-native environments.",
    },
  ],
  education: [
    {
      school: "KJ Somaiya Institute of Technology",
      href: "https://kjsit.somaiya.edu.in/en",
      degree: "Bachelor's of Technology in Electronics and Telecommunication Engineering",
      logoUrl: "https://d2lk14jtvqry1q.cloudfront.net/media/large_KJ_Somaiya_College_of_Engineering_Mumbai_7ff486798c_9b4de395b4.png",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "Connect",
      href: "https://chatcollect.com",
      dates: "Sep 2024 - Oct 2024",
      active: true,
      description:
        "Connect is a fast, simple platform that empowers writers, creators, and readers to effortlessly share stories, ideas, and expertise.",
      technologies: [
        "React",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Zod",
        "JWT",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "",
    },
    
  ],
  Contributions: [
    {
      title: "Pieces Copilot",
      dates: "Jan 2024 - April 2024",
      location: "Remote",
      description:
        "Contributed to Github workflow and build.yaml to provision workflow of the system,Successfully got merged 4+ Pull Requests, encompassing both code and non-code contributions,demonstrating a commitment to the continuous improvement of Pieces and its ecosystem",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQo3_chkR3FcOWOKt86U6TukReVloqcxLo0U_ZWVDy7rsFk0Ry8Csw4LN4v3Q8zvUeoJI&usqp=CAU",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   
  ],
} as const;
