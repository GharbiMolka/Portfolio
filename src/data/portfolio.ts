export interface Skill {
  name: string;
  category: "Langages de programmation" | "Framework" | "Base de données" | "Outils & Autres" | "Business Intelligence & Data";
  iconName: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
  logoUrl?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  description?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  subTitle: string;
  avatarUrl: string;
  email: string;
  phone: string;
  location: string;
  role:String;
  about: {
    bio: string[];
    skillsSummary: string;
    stats: { label: string; value: string }[];
      strengths: {
    icon: string; // ou un nom d'icône, voir option ci-dessous
    title: string;
    description: string;
  }[];
  };
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
  skills: Skill[];
  projects: Project[];
  experiences: Experience[];
  educations: Education[];
  certifications: Certification[];
}

export const portfolioData: PortfolioData = {
  name: "Molka Gharbi",
  title: "Business intelligence & data engineer",
  subTitle: "Étudiante passionnée par la Data, la Business Intelligence et les nouvelles technologies,\nToujours curieuse d'apprendre et de créer.\nN'hésitez pas à me contacter pour collaborer sur des projets.",
  avatarUrl: "/images/avatar2.png", // ma photo de profil
  role: "BI & Data Engineer",
  email: "Molka.Gharbi@esprit.tn",
  phone: "+216 53 462 002",
  location: "Ariana, Tunisie",
  about: {
    bio: [
      "Étudiante en dernière année du cycle ingénieur à l’École Supérieure Privée d’Ingénierie et de Technologie, spécialité ERP-BI.",
      "Mon objectif est de mettre en pratique mes compétences techniques, de participer à des projets concrets et d’évoluer dans un environnement stimulant qui favorise l’apprentissage et l’innovation."
    ],
    skillsSummary: "Specialized in React, Next.js, Node.js, and cloud deployments, with a keen eye for visual design and accessibility standards.",
    stats: [
      { label: "Years of Experience", value: "3+" },
      { label: "Projects Completed", value: "15+" },
      { label: "Happy Clients", value: "10+" },
      { label: "Certifications", value: "6+" }
    ],
    strengths: [
      {
        icon: "Brain",
        title: "Esprit logique et analytique",
        description: "Capacité à comprendre et résoudre efficacement les problèmes techniques",
      },
      {
        icon: "Laptop",
        title: "Passion pour la Data et la BI",
        description: "Création de solutions analytiques modernes, avec une attention particulière à la qualité des données et à l'aide à la prise de décision.",
      },
      {
        icon: "Rocket",
        title: "Motivation et ambition",
        description: "Toujours prête à relever de nouveaux défis et à apprendre",
      },
    ],
  },
  socialLinks: {
    github: "https://github.com/GharbiMolka",
    linkedin: "https://www.linkedin.com/in/molka-gharbi-a2593026a/",

    email: "molka.Gharbi@esprit.tn"
  },
  skills: [
    // Langages de programmation
    { name: "Java", category: "Langages de programmation", iconName: "Java" },
    { name: "JavaScript", category: "Langages de programmation", iconName: "JavaScript" },
    { name: "TypeScript", category: "Langages de programmation", iconName: "TypeScript" },
    { name: "PHP", category: "Langages de programmation", iconName: "PHP" },
    { name: "Python", category: "Langages de programmation", iconName: "Python" },

    // Framework
    { name: "Angular", category: "Framework", iconName: "Angular" },
    { name: "Spring Boot", category: "Framework", iconName: "SpringBoot" },
    { name: "Symfony", category: "Framework", iconName: "Symfony" },
    { name: "Flutter", category: "Framework", iconName: "Flutter" },
    { name: "FlutterFlow", category: "Framework", iconName: "FlutterFlow" },
    { name: "FastApi", category: "Framework", iconName: "FastApi" },
    { name: ".NET", category: "Framework", iconName: "DotNet" },
    { name: "Laravel", category: "Framework", iconName: "Laravel" },


    // Base de données
    { name: "MySQL", category: "Base de données", iconName: "MySQL" },
    { name: "MongoDB", category: "Base de données", iconName: "MongoDB" },
    { name: "PostgreSQL", category: "Base de données", iconName: "PostgreSQL" },
    { name: "Firebase", category: "Base de données", iconName: "Firebase" },
    { name: "Oracle", category: "Base de données", iconName: "Oracle" },
    { name: "SSMS", category: "Base de données", iconName: "SSMS" },
    // Outils & Autres
    { name: "Git & GitHub", category: "Outils & Autres", iconName: "Git" },
    { name: "Docker", category: "Outils & Autres", iconName: "Docker" },
    { name: "Figma", category: "Outils & Autres", iconName: "Figma" },
    { name: "Postman", category: "Outils & Autres", iconName: "Postman" },
    { name: "Grafana", category: "Outils & Autres", iconName: "Grafana" },
    { name: "Prometheus", category: "Outils & Autres", iconName: "Prometheus" },

    // Business Intelligence & Data
    { name: "Power BI", category: "Business Intelligence & Data", iconName: "PowerBI" },
    { name: "SSIS", category: "Business Intelligence & Data", iconName: "SSIS" },
    { name: "Talend", category: "Business Intelligence & Data", iconName: "Talend" },
    { name: "n8n", category: "Business Intelligence & Data", iconName: "N8N" },
  ],
  projects: [

        {
      id: "project-6",
      title: "Tableau de bord pour l'analyse de la performance des conseillers bancaires",
      description: "Une plateforme de gestion des livraisons permettant de gérer les commandes, les demandes et offres de livraison, ainsi que la prise en charge des commandes entre les clients, les fournisseurs et les transporteurs.",
      longDescription: "SyncTask is a multi-user visual workspace modeled after Trello. Built with Next.js and React DnD, it handles live synchronization across clients using WebSockets. Users can create customizable workspaces, invite colleagues, assign tasks, attach files, and communicate through an inline chat sidebar.",
      technologies: ["SSMS", "Talend", "Power BI", "Python"],
      githubUrl: "https://github.com/GharbiMolka/Stage-Ingenieur",
      liveUrl: "https://synctask.vercel.app",
      imageUrl: "/images/Bank.png",
      featured: false
    },
    {
      id: "project-1",
      title: "EventZella - Event Management Platform",
      description: "Une application d’aide à la décision permettant de centraliser les données, visualiser les indicateurs clés, prévoir la demande, optimiser les prix grâce à l’intelligence artificielle, détecter les anomalies et suivre les performances des modèles en temps réel.",
      longDescription: "EventZella is a full-featured event planning platform that simplifies event creation, ticket sales, and guest management. Built with Next.js, Tailwind CSS, PostgreSQL, and Prisma, it features real-time updates via WebSockets, interactive seating charts, secure payment integration through Stripe, and an intuitive dashboard for organizers to track analytics and sales metrics.",
      technologies: ["SQL Server","Talend","Python","Power BI","XGBoost","ARIMA","Flask", "Angular","Docker","MLflow","Grafana","Prometheus","n8n"],
      githubUrl: "https://github.com/Chaima-Cherif391/Esprit-PABI-4ERPBI7-2526-EventZella/tree/EventzellaApplication-Molka/Desktop/Esprit/4%20ERP%20BI/ProjetBI/EventZellaApp",
      liveUrl: "https://eventzella.vercel.app",
      imageUrl: "/images/login.jpg",
      featured: true
    },
    {
      id: "project-2",
      title: "Tableau de bord d'analyse des prix des données",
      description: "Une application d’analyse décisionnelle permettant de comparer les prix, suivre les KPI et le chiffre d’affaires, analyser les ventes et identifier les opportunités d’optimisation commerciale.",
      longDescription: "An advanced ERP visualizer built for Esprit PABI. It consolidates metrics across finance, human resources, and supply chain modules. Designed with Next.js and Chart.js, it offers modular widget arrangements, exporting to PDF/CSV, real-time KPI alerts, and granular role-based access control.",
      technologies: ["SSMS", "SSIS", "Power BI" ,"SQL"],
      // githubUrl: "https://github.com",
      liveUrl: "https://pabi-dashboard.vercel.app",
      imageUrl: "/images/price.png",
      featured: true
    },
    {
      id: "project-3",
      title: "Student Mental Health",
      description: "Une plateforme intelligente permettant d’analyser les facteurs influençant la santé mentale des étudiants, d’estimer le risque de dépression grâce au Machine Learning et de visualiser les résultats via une interface interactive.",
      longDescription: "Zenith is a modernheadless storefront built with Shopify's Storefront API, Next.js App Router, and Framer Motion. It features instantaneous page loads, client-side cart operations, predictive search, dynamic filters, and custom product builders.",
      technologies: [ "ACP", "K-Means", "DBSCAN", "SVM", "Random Forest", "XGBoost" , "FastAPI"],
      githubUrl: "https://github.com/GharbiMolka/Student-Mental-Health",
      liveUrl: "https://zenith-commerce.vercel.app",
      imageUrl: "/images/student.png",
      featured: false
    },
    {
      id: "project-4",
      title: "WorkSphere",
      description: "Application web pour gérer les employés, événements, formations et projets. Inclut authentification sécurisée, gestion des équipes, systèmes de feedback et outils RH avancés.",
      longDescription: "SyncTask is a multi-user visual workspace modeled after Trello. Built with Next.js and React DnD, it handles live synchronization across clients using WebSockets. Users can create customizable workspaces, invite colleagues, assign tasks, attach files, and communicate through an inline chat sidebar.",
      technologies: ["MySQL", "Java", "Symfony", "Bootstrap", "javascript" , "Python","OpenCV" ,'Git'],
      githubUrl: "https://github.com/jjacem/PidevWorksphere",
      liveUrl: "https://synctask.vercel.app",
      imageUrl: "/images/work.png",
      featured: false
    },

       {
      id: "project-5",
      title: "Transly",
      description: "Une plateforme de gestion des livraisons permettant de gérer les commandes, les demandes et offres de livraison, ainsi que la prise en charge des commandes entre les clients, les fournisseurs et les transporteurs.",
      longDescription: "SyncTask is a multi-user visual workspace modeled after Trello. Built with Next.js and React DnD, it handles live synchronization across clients using WebSockets. Users can create customizable workspaces, invite colleagues, assign tasks, attach files, and communicate through an inline chat sidebar.",
      technologies: [".Net", "C#", "SSMS", "Angular", "javascript" , "Bootstrap","Html5" ,'Css3'],
      githubUrl: "https://github.com/GharbiMolka/TranslyProject",
      liveUrl: "https://synctask.vercel.app",
      imageUrl: "/images/transly.png",
      featured: false
    }


  ],
  experiences: [
    {
      id: "exp-1",
      role: "Stage ingénieur",
      company: "BTK Bank",
      location: "Tunis",
      period: "06/2026 - 08/2026",
      description: [
        " Analyse de la performance des conseillers bancaires dans l’entrée en relation avec de nouveaux clients, avec une vision consolidée au niveau des agences.",
      ],
      skills: ["Python", "Talend", "SSMS", "Power BI"],
      logoUrl: "/images/Logo_btk.png" 
    },
    {
      id: "exp-2",
      role: "Stage d’immersion en entreprise",
      company: "VIRTUAL DEV",
      location: "Tunis ",
      period: "06/2025 - 08/2025",
      description: [
        "Conception et développement d’une application de gestion des processus de livraison dans un environnement Agile.",
      ],
      skills: [".Net", "Angular", "SSMS", "Scrum"],
         logoUrl: "/images/logo_vd.png" 
    },

    {
      id: "exp-3",
      role: "Stage de fin d’études",
      company: "Tunisie télécom",
      location: "Tunis ",
      period: "02/2024 - 06/2024",
      description: [
        "Conception et développement d’une plateforme de détection des cartes SIM impliquées dans un trafic suspect ou frauduleux, en environnement Agile avec Scrum.",
      ],
      skills: [".Net", "Angular", "SSMS", "Scrum"],
          logoUrl: "/images/logo_tt.jpg" 
    },
    {
      id: "exp-4",
      role: "Stage de perfectionnement",
      company: "1waydev",
      location: "Tunis",
      period: "01/2023 - 02/2023",
      description: [
        "Conception et réalisation d'une application de gestion des salles de réunions et réservations.",
        "Utilisation de Laravel pour le développement back-end, avec Twig pour le rendu front-end et MySQL pour la gestion de la base de données.",
      ],
      skills: ["Laravel", "Twig", "MySQL"],
      logoUrl: "/images/1waydev_logo.jpg" 

      
    },
    {
      id: "exp-5",
      role: "Stage d'initiation",
      company: "Office du commerce de la tunisie",
      location: "Tunis",
      period: "01/2022 - 02/2022",
      description: [
        "La découverte de la salle serveur et des différents équipements de réseau informatique ainsi la gestion des logiciels.",
        "La découverte du milieu professionnel.",
      ],
      skills: [],
      logoUrl: "/images/office.jpg" 
    }
  ],

  certifications: [
    {
      id: "cert-1",
      name: "AWS Certified Developer – Associate",
      issuer: "Amazon Web Services (AWS)",
      date: "2025",
      credentialUrl: "https://aws.amazon.com"
    },
    {
      id: "cert-2",
      name: "Meta Front-End Developer Professional Certificate",
      issuer: "Meta / Coursera",
      date: "2024",
      credentialUrl: "https://coursera.org"
    },
    {
      id: "cert-3",
      name: "Prisma Certified developer",
      issuer: "Prisma.io",
      date: "2024",
      credentialUrl: "https://prisma.io"
    },
    {
      id: "cert-4",
      name: "Next.js App Router Certification",
      issuer: "Vercel",
      date: "2024",
      credentialUrl: "https://vercel.com"
    }
  ],
  educations: []
};
