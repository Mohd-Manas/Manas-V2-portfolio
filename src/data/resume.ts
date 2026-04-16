import ManasProfile from '@/assets/ManasProfile2.jpeg';
import CV from '@/assets/Mohammed_Manas__CV.pdf';
import ThreeKeysCover from '@/assets/ThreeKeysConsultingCover.png';
import MinagaramCover from '@/assets/MinagaramCover.png';
import FaceGramCover from '@/assets/SocialMediaCover.png';
import WeatherCover from '@/assets/WeatherCover.png';
import NikeLandingCover from '@/assets/NikeLandingCover.png';


export const resumeData = {
  profile: {
    name: 'Mohammed Manas',
    role: 'Full-Stack Developer | IT Officer',
    tagline:
      'Passionate Full-Stack Developer and IT Officer building end-to-end web and mobile apps with modern technologies.',
    bio: 'A versatile developer and IT professional with over 3 years of experience. Expert in React, PHP, and modern web technologies, combined with strong server administration and IT infrastructure skills. Currently based in Dubai, I specialize in creating seamless digital experiences that bridge the gap between high-performance software and robust technical infrastructure. My approach combines analytical problem-solving with a keen eye for user-centric design.',
    location: 'United Arab Emirates',
    nationality: 'Indian',
    languages: ['Tamil', 'English', 'Malayalam'],
    email: 'mohamedmanas2306@gmail.com',
    phone: '+971 50 204 4687',
    yearsOfExperience: '3+',
    image: ManasProfile,
    cvUrl: CV,
  },

  experience: [
    {
      role: 'IT Officer',
      company: 'Sky Links Capital Groups',
      location: 'Dubai, UAE',
      date: 'January 2025 – Present',
      description: [
        'Manage and maintain company IT infrastructure, including servers, networks, and hardware.',
        'Oversee software systems and ensure they are up-to-date and functioning optimally.',
        'Provide technical support and troubleshooting for hardware and software issues.',
        'Implement and monitor cybersecurity measures to protect company data.',
        'Manage IT vendor relationships and procurement of technology resources.',
        'Develop and implement IT policies and procedures to improve operational efficiency.',
        'Assist in the integration of new technologies and digital transformation initiatives.',
        'Regularly back up data and ensure disaster recovery plans are in place.',
      ],
    },
    {
      role: 'Junior Front-end Developer',
      company: 'Z-Soft Consultancy Services Pvt Ltd',
      location: 'Chennai, India',
      date: 'Jan 2022 – April 2024',
      description: [
        'Collaborated with the design team to transform UI/UX designs into functional, responsive web interfaces.',
        'Developed and maintained cross-platform mobile applications using React Native.',
        'Utilized React.js and modern JavaScript (ES6+) to build dynamic and interactive web components.',
        'Ensured consistent performance and visual fidelity across various browsers and mobile devices.',
        'Optimized web and mobile applications for maximum speed and scalability.',
        'Integrated RESTful APIs to connect front-end components with back-end services.',
        'Participated in code reviews and worked closely with senior developers to improve code quality.',
        'Assisted in debugging and resolving front-end issues to enhance user experience.',
        'Stayed current with emerging front-end technologies and industry best practices.',
        'Supported the deployment process and maintained version control using Git/GitHub.',
      ],
    },
  ],

  projects: [
    {
      title: 'Three Keys Consulting',
      tech: ['React', 'Node.js', 'Firebase', 'Tailwind CSS', 'JavaScript'],
      description: 'Project Management and Consulting Portal.',
      bullets: [
        'Developed a comprehensive project management tool tailored for industry-specific workflows.',
        'Implemented secure authentication and real-time data updates using Firebase.',
        'Optimized frontend performance to handle large datasets and complex project views.',
      ],
      github: 'https://github.com/Mohd-Manas/threekeys-consulting',
      link: 'https://tkcfzllc.com',
      image: ThreeKeysCover,
    },
    {
      title: 'Minagaram - Tamil Dictionary App' ,
      tech: ['React Native', 'SQLite', 'Node.js', 'Express', 'Android'],
      description: 'Mobile Dictionary Application for Tamil Language.',
      bullets: [
        'Engineered a fast, offline-first dictionary application for mobile users.',
        'Utilized SQLite for high-performance local data querying and storage.',
        'Implemented smooth navigation and search features for an enhanced learning experience.',
      ],
      github: 'https://github.com/Mohd-Manas/Minagaram',
      link: 'https://minagaram.com/Index',
      image: MinagaramCover,
    },
    {
      title: 'FACE GRAM - Social Media Platform',
      tech: ['React Native', 'SQLite', 'Node.js', 'Express', 'Android'],
      description: 'Mobile Social Media Application.',
      "bullets": [
        "Developed FACE GRAM, a dynamic social media platform combining core features of Facebook, Twitter, and Instagram.",
        "Implemented user authentication, profile management, and secure login/logout functionality.",
        "Built a responsive and visually appealing UI using React, Mantine, Material UI, and Ant Design.",
      ],
      github: 'https://github.com/MohdManas/Social-Media-App-Frontend',
      link: 'https://iamvijay98.github.io/Social-Media-App-Frontend',
      image: FaceGramCover,
    },
    {
      title: "Weather App - Real-Time Forecast",
      tech: ["React", "Tailwind CSS", "Vite", "Open-Meteo API", "React Icons"],
      description: "A responsive weather web application built with React and Tailwind CSS that provides real-time weather updates for cities worldwide. Users can search any city and instantly view current temperature, wind speed, humidity, and dynamic weather icons, all presented in an intuitive and mobile-friendly interface.",
      bullets: [
        "Built a fully responsive weather app with a clean and modern UI using React and Tailwind CSS.",
        "Integrated Open-Meteo API to fetch accurate weather data including temperature, wind speed, and humidity.",
        "Optimized performance and smooth interactions using Vite and modern React best practices."
      ],
      github: "https://github.com/MohdManas/Weatherapp",
      link: "https://weatherwebste.netlify.app",
      image: WeatherCover,
    },
    {
      title: "Nike Landing Page - Product Showcase",
      tech: ["React", "Tailwind CSS", "React Icons", "React Scripts"],
      description: "A responsive Nike product landing page built with React and Tailwind CSS. The website showcases Nike products with modern design elements, intuitive navigation, and interactive UI components, providing a visually appealing shopping experience.",
      bullets: [
        "Developed a fully responsive landing page for Nike product showcase using React and Tailwind CSS.",
        "Implemented smooth navigation, interactive UI elements, and responsive layouts for desktop and mobile.",
        "Designed product cards and sections with React Icons for a modern and visually engaging interface.",
        "Optimized performance and fast loading with React Scripts for seamless user experience."
      ],
      github: "https://github.com/MohdManas/Nike-Landing-Page",
      link: "https://nike-landing-website.netlify.app/",
      image: NikeLandingCover,
    }
  ],

  skills: [
    'React.js',
    'React Native',
    'Next.js',
    'JavaScript',
    'TypeScript',
    'WordPress',
    'HTML',
    'CSS',
    'Tailwind CSS',
    'Bootstrap',
    'Node.js',
    'PHP',
    'MySQL Server',
    'MongoDB',
    'cPanel',
    'Git',
    'GitHub',
    'Postman',
    'Figma',
  ],

  education: [
    {
      role: 'BCA (Bachelor of Computer Application, 8.02/10)',
      company: 'University of Madras',
      date: 'June 2017 – Sep 2020',
      description: ['Computer Application'],
    },
  ],

  certifications: [
    {
      role: 'Full Stack Developer',
      company: 'Besant Technologies',
      date: 'Sep 2021 - Feb 2022',
      description: [
        'Certification of Professional Achievement in Full Stack Developer',
      ],
    },
  ],

  socials: {
    github: 'https://github.com/MOhdManas',
    linkedin: 'https://linkedin.com/in/mohammed-manas-5692061ba',
    email: 'mohamedmanas2306@gmail.com',
  },
};
