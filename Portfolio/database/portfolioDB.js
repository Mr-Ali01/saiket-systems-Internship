export const portfolioDB = {
  hero: {
    greeting: "👋 Hi, I'm Samir Ali",
    titleMain: "FullStack",
    titleGradient: "Developer.",
    bio: "Full Stack Developer building fast, beautiful, and purposeful web experiences.",
    ctas: [
      {
        text: "Get in Touch",
        href: "#contact",
        classes: "theme-btn-primary px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
      },
      {
        text: "View Projects",
        href: "#projects",
        classes: "border theme-border theme-bg-card px-6 theme-text-primary font-semibold rounded-xl shadow-sm hover:-translate-y-0.5 transition-all duration-300 text-sm sm:text-base py-3"
      },
      {
        text: "Resume",
        href: "#resume",
        classes: "border theme-border theme-bg-card px-6 theme-text-primary font-semibold rounded-xl shadow-sm hover:-translate-y-0.5 transition-all duration-300 text-sm sm:text-base py-3"
      }
    ],
    stats: [
      { id: "hero-stat-1", value: "2+", label: "Years coding" },
      { id: "hero-stat-2", value: "15+", label: "Projects built" },
      { id: "hero-stat-3", value: "100%", label: "Passion driven" }
    ],
    image: {
      src: "img/samir-hero.png",
      alt: "Samir Ali"
    }
  },
  about: {
    titleMain: "About",
    titleHighlight: "Me",
    bio: "I am a passionate and innovative developer dedicated to crafting immersive digital experiences. With a strong foundation in core web technologies, I build solutions that are fast, scalable, and user-focused.",
    ctas:{
      text: "Hire Me",
      href: "#contact",
      classes:"inline-flex items-center space-x-2 theme-btn-primary px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 group",
      icon: "arrow-right"
    },
    stats:[
      { icon: "smile",
        value: "2+",
        label: "Years Experience" },
      { 
      icon: "rocket", 
      value: "15+", 
      label: "Projects Completed" 
    }
    ]
    ,
    services: [
      {
      icon: "database", title: "Full-Stack Development", description: "Custom scalable web applications."
      },
       {
      icon: "layers", title: "Custom Theme Websites", description: "Bespoke personalized website themes."
      },
       {
      icon: "file-code", title: "Static Website Development", description: "Fast, lightweight HTML sites."
      },
       {
      icon: "smartphone", title: "Responsive Web Design", description: "Flawless cross-device responsive performance."
      }
    ]
    
  },
  projects:[
    {
      id:"card-1",
      title: "Developer Portfolio System",
      description: "Responsive portfolio built with custom Luxury Beige design variables and smooth theme switching.",
      category: "website",
      isTopRated: true,
      image: "img/portfolio.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "#live",
      codeUrl: "#source-code"
    },
    {
      id: "card-2",
      title: "Developer Portfolio System",
      description: "Custom utility platform configured for modular components and responsive layouts.",
      category: "tools",
      isTopRated: false,
      image: "img/portfolio.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "#live",
      codeUrl: "#source-code"
    },
    {
      id: "card-3",
      title: "Developer Portfolio System",
      description: "Mobile-optimized layout interface featuring touch-friendly gestures and responsive sidebar routing.",
      category: "mobiles",
      isTopRated: true,
      image: "img/prime-local1.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "#live",
      codeUrl: "#source-code"
    }
  ],
  experience: [
    {
      id: "exp-1",
      role: "Web Development Intern",
      company: "Business Labs",
      type: "Internship",
      period: "Nov 2025 – Mar 2026",
      icon: "fa-code",
      responsibilities: [
        "Developed responsive websites using HTML, CSS, JavaScript, and Tailwind CSS.",
        "Built reusable UI components and optimized performance.",
        "Collaborated with developers to deliver responsive interfaces."
      ]
    }
    // You can easily add Experience 2, 3 here as objects!
  ],
  skills: [
    {
      id: "frontend",
      title: "Frontend Development",
      categoryIcon: "fa-solid fa-code",
      items: [
        { name: "HTML5", type: "fa", iconClass: "fa-brands fa-html5 text-3xl text-orange-500" },
        { name: "CSS3", type: "fa", iconClass: "fa-brands fa-css3-alt text-3xl text-sky-500" },
        { name: "JavaScript", type: "fa", iconClass: "fa-brands fa-js text-3xl text-yellow-400" },
        { name: "React", type: "fa", iconClass: "fa-brands fa-react text-3xl text-cyan-400" },
        { name: "Tailwind CSS", type: "img", src: "https://cdn.simpleicons.org/tailwindcss/06B6D4" }
      ]
    },
    {
      id: "backend",
      title: "Backend Development",
      categoryIcon: "fa-solid fa-server",
      items: [
        { name: "Java", type: "fa", iconClass: "fa-brands fa-java text-red-500 text-3xl" },
        { name: "PHP", type: "fa", iconClass: "fa-brands fa-php text-indigo-400 text-3xl" },
        { name: "MySQL", type: "fa", iconClass: "fa-solid fa-database text-sky-400 text-3xl" },
        { name: "REST API", type: "fa", iconClass: "fa-solid fa-plug text-amber-500 text-3xl" }
      ]
    },
    {
      id: "frameworks",
      title: "Frameworks",
      categoryIcon: "fa-solid fa-cubes",
      items: [
        { name: "Bootstrap", type: "fa", iconClass: "fa-brands fa-bootstrap text-purple-500 text-3xl" },
        { name: "Spring", type: "img", src: "https://cdn.simpleicons.org/spring/6DB33F" },
        { name: "Hibernate", type: "img", src: "https://cdn.simpleicons.org/hibernate/59666C" },
        { name: "JPA", type: "fa", iconClass: "fa-solid fa-layer-group text-amber-500 text-3xl" }
      ]
    },
    {
      id: "tools",
      title: "Tools & Others",
      categoryIcon: "fa-solid fa-screwdriver-wrench",
      items: [
        { name: "Git", type: "fa", iconClass: "fa-brands fa-git-alt text-orange-500 text-3xl" },
        { name: "GitHub", type: "fa", iconClass: "fa-brands fa-github theme-text-primary text-3xl" },
        { name: "VS Code", type: "img", src: "https://cdn.simpleicons.org/visualstudiocode/007ACC" },
        { name: "Figma", type: "fa", iconClass: "fa-brands fa-figma text-pink-500 text-3xl" }
      ]
    }
  ],
  education: {
    academic: [
      {
        id: "edu-1",
        degree: "Master of Computer Applications (MCA)",
        institution: "Osmania University, Hyderabad",
        period: "Nov 2025 – Mar 2027",
        status: "Pursuing"
      },
      {
        id: "edu-2",
        degree: "Bachelor of Computer Applications (BCA)",
        institution: "Osmania University, Hyderabad",
        period: "Oct 2022 – Jul 2025",
        status: "Completed"
      }
    ],
    certifications: [
      {
        id: "cert-1",
        title: "Full Stack Java Development",
        institution: "JSpiders Training Institute",
        period: "May 2025 – May 2026",
        status: "Completed"
      },
      {
        id: "cert-2",
        title: "Web Development Bootcamp",
        institution: "Udemy",
        period: "Jan 2026 – Jul 2026",
        status: "Completed"
      }
    ]
  },
  contact: {
    bio: "Have a project in mind, an opportunity to discuss, or just want to say hello? Send a message and let's work together.",
    details: [
      {
        title: "Email",
        value: "samirali@example.com",
        icon: "fa-regular fa-envelope"
      },
      {
        title: "Phone",
        value: "+91 98765 43210",
        icon: "fa-solid fa-phone"
      },
      {
        title: "Location",
        value: "Hyderabad, Telangana, India",
        icon: "fa-solid fa-location-dot"
      }
    ]
  }
};