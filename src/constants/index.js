
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,

    meta,
    starbucks,
    tesla,
    shopify,

    rbc,
    blackberry,
    codeninja,

    comming_soon,
    klink,
    jobit,
    tripguide,
    threejs,
    mino,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "System Design",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer",
      company_name: "Royal Bank of Canada",
      icon: rbc,
      iconBg: "#383E56",
      date: "Jan 2024 – April 2024",
      points: [
        "Configured DAG files and onboarded legacy email codebase (Jinja2 templates, EWS, Pydantics) to Airflow server for email automation.",
        "Developed REST APIs to interact with threat dataset (Archer) and managed 3000+ connections violation using Django, Pydantic library (Python) with a task queue distributed architecture through RabbitMQ, Redis, and Celery.",
        "Engineered a parsing utility (web-based) to validate firewall rule requests using ReactJS, Redux, and ExpressJS; optimized builds with Webpack and utilized MongoDB Atlas for analytics storage.",
        "Optimized 5 python codebases, assessed security vulnerabilities (Pylint, Bandit), and deployed to RedHat OCP containers.",
      ],
    },
    {
      title: "Cyber Security Engineering Intern",
      company_name: "BlackBerry",
      icon: blackberry,
      iconBg: "#E6DEDD",
      date: "May 2023 – Aug 2023",
      points: [
        "Designed a terminal app (PyCli, Bash) to automate vulnerability assessment of python codebases using pyTenable API and covered 200+ attack techniques curated from MITRE ATT&CK.",
        "Containerized and deployed internal security tools on serverless Kubernetes clusters, leveraged PostgreSQL for threat data storage.",
        "Collaborated to build Python scripts (pytest, unittest) based from NIST guidelines to assess the security posture of internal tools, improving former detection accuracy by 25%.",
      ],
    },
    {
      title: "Cyber Security Engineering Intern",
      company_name: "BlackBerry",
      icon: blackberry,
      iconBg: "#383E56",
      date: "Jan 2022 – April 2022",
      points: [
        "Configured Proofpoint DLP rules for 14 use cases aligned with BlackBerry’s data governance policies, reducing false positives to 1.2%.",
        "Conducted weekly Security Risk Assessments (SOC2, ISO27001, ITSG-33) for 20+ vendors and 3rd party software, in collaboration with the SOC team.",
        "Developed an IAM enhancement project using SAML for SSO, OAuth 2.0 for secure access, and OpenID Connect for streamlined authentication.",
        "Deployed the IAM project on serverless Kubernetes clusters with HashiCorp Vault for secure secret management, reducing authentication latency by 35% and improving system uptime by 25%.",
      ],
    },
    {
      title: "Coding Instructor",
      company_name: "Code Ninjas",
      icon: codeninja,
      iconBg: "#E6DEDD",
      date: "Aug 2021 – Sept 2022",
      points: [
        "Designed an 8-month curriculum for 3D game development, focusing on object game design via Lua scripts & dynamic character development.",
        "Improved 70+ students on development skills for JavaScript, Unity, and C via project-based learning.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:"Alex is an extremely motivated student who is always down to learn new things, from all areas of the industry. I’ve worked with him on multiple projects, all of which he was able to show his leadership and commitment to produce the best possible outcome for our products. He has an exceptional ability to self-teach new technical concepts and is able to apply them well in his projects.",
      name: "Minh Vu",
      designation: "Data Scientist",
      company: "RBC Toronto",
      image: mino,
      profile: "https://www.linkedin.com/in/minhvu03/",
    },
    {
      testimonial:
        ".",
      name: "Justin Lau",
      designation: "SWE",
      company: "SPS Commerce",
      image: "https://media.licdn.com/dms/image/D5603AQG7bAir__6zRQ/profile-displayphoto-shrink_400_400/0/1721664242310?e=1727308800&v=beta&t=1q4p-SgXRpFTF30gSPqEEimR8Cl27MeBEBrbOyG56Uc",
    },
    {
      testimonial:
        ".",
      name: "Samuel",
      designation: "CEO",
      company: "Klink",
      image: "https://www.klinkapp.com/sam.png",
    },
    {
      testimonial:
        ".",
      name: "Artine",
      designation: "Senior Manager -- TPC & Development",
      company: "RBC Toronto",
      image: "https://media.licdn.com/dms/image/D5603AQFL6NIBrrDugA/profile-displayphoto-shrink_400_400/0/1698704833014?e=1727308800&v=beta&t=dSuskPdDuCb8ckenyodUtQoGpXUPLt7UeXeJZVLT1Zg",
    },
    {
      testimonial:
        ".",
      name: "Scott Forsyth",
      designation: "Senior Cyber Security Network Security Analyst",
      company: "RBC Toronto",
      image: "https://media.licdn.com/dms/image/C5603AQFL4V5OPcwUVw/profile-displayphoto-shrink_400_400/0/1636571548723?e=1727308800&v=beta&t=iqAFWhTSGZ1y3L4l7iCfdXDobMoeP-cyZQB5gX204SA",
    },
    {
      testimonial:
        ".",
      name: "Khoi Vo Thanh",
      designation: "Senior Manager Networking Engineer",
      company: "Kinder",
      image: "",
    },
  ];
  
  const projects = [
    {
      name: "Klink",
      description:
        "Social Media for Content Creators!",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "nextjs",
          color: "pink-text-gradient",
        },
      ],
      image: klink,
      source_code_link: "https://github.com/samuelhan713/klink",
      demo_link: "https://klinkapp.com",

    },
    {
      name: "GPUit",
      description:
        "Web-based platform that enables users to share / use the GPU Processing power.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: comming_soon,
      source_code_link: "https://github.com/",
    },
    {
      name: "ScholarScreen",
      description:
        "A scholar tool used to convert lectures to video, with AI-generated voice.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: comming_soon,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
