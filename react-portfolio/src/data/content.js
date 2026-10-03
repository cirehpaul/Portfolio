const content = {
  hero: {
    name: 'Cire Paul Cruz',
    fullName: 'Cire Paul Bernardo Cruz',
    title: 'Application Support Analyst | Data & Technology Professional',
    intro: 'Building reliable technical solutions through application support, data management, SQL, API integration, and modern software development.',
    location: 'Sta. Rosa City, Laguna',
    resume: 'https://drive.google.com/file/d/1oWffMAhm6RcdZF6djC0RMrbsEFx7NuAF/view?usp=drive_link',
    email: 'mailto:cirepaulcruz21@gmail.com',
    github: 'https://github.com/cirehpaul',
    linkedin: 'https://linkedin.com/in/cirepaulcruz',
    portfolio: 'https://cirehpaul.github.io/Portfolio'
  },

  nav: ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Certifications', 'Contact'],

  about: {
    summary: 'Detail-oriented IT professional with experience in Service Desk Support, Android development, SQL database management, and application support. Skilled in incident management, technical troubleshooting, API validation, SQL query execution, Oracle database management, and mobile application development using Kotlin and Jetpack Compose. Experienced in integrating REST APIs and AI technologies, including OpenAI and Google Gemini APIs. Strong analytical, problem-solving, and communication skills with a commitment to delivering reliable technical solutions in fast-paced environments.',
    highlights: [
      'Application Support',
      'Service Desk Operations',
      'Incident Management',
      'SQL & Database Management',
      'Data Validation',
      'API Testing',
      'Android Development',
      'AI Integration'
    ]
  },

  experience: [
    {
      id: 1,
      current: true,
      type: 'Full-Time',
      title: 'Application Support Analyst I',
      company: 'Equitable Computer Services Inc.',
      location: 'Binondo, Metro Manila, Philippines',
      period: 'January 2026 – Present',
      project: 'IT Service Management, Incident Management, Application Support, and Data Validation',
      responsibilities: [
        'Provided first-level technical support by handling incidents, service requests, and user inquiries through ticketing systems while ensuring timely resolution and customer satisfaction.',
        'Managed and monitored incidents throughout their lifecycle, ensuring proper categorization, prioritization, assignment, documentation, and timely follow-up.',
        'Monitored ticket aging and SLA compliance, identifying overdue and approaching-SLA incidents and coordinating with assigned teams for timely action.',
        'Created and maintained incident management reports to track ticket volume, aging tickets, SLA performance, open incidents, and resolution progress.',
        'Conducted regular follow-ups with technicians and support teams regarding pending, aging, and escalated tickets to help prevent SLA breaches.',
        'Validated application data using Postman and Oracle databases to maintain data accuracy and integrity.',
        'Executed SQL scripts, including INSERT, UPDATE, and DELETE, to resolve production and testing data issues.',
        'Diagnosed and investigated application errors, user access issues, account-related concerns, and other technical incidents.',
        'Collaborated with cross-functional teams to investigate, escalate, and resolve application and infrastructure-related issues.',
        'Provided timely updates to clients, users, and internal stakeholders throughout the incident resolution process.',
        'Assisted in system testing, data validation, and issue verification to ensure application reliability and data integrity.',
        'Maintained accurate incident documentation, resolution details, and ticket records in accordance with IT Service Management and SLA processes.'
      ],
      activities: [
        'Incident Monitoring & Tracking',
        'Ticket Aging Monitoring',
        'SLA Monitoring & Compliance',
        'Incident Follow-ups',
        'Escalation Management',
        'Incident Reporting',
        'Open/Pending Ticket Monitoring',
        'Technician Performance Tracking',
        'Ticket Categorization & Prioritization',
        'Incident Documentation',
        'Service Desk Plus Reporting'
      ],
      tools: ['SQL', 'T-SQL', 'Microsoft SQL Server', 'MySQL Workbench', 'phpMyAdmin', 'Oracle Database', 'Postman', 'ServiceDesk Plus', 'Jira', 'Microsoft Excel', 'Power BI', 'Zoho Zia AI']
    },
    {
      id: 2,
      current: false,
      type: 'Freelance',
      title: 'Android Developer',
      company: 'Media Production Company',
      location: 'San Francisco, California, United States (Remote)',
      period: 'July 2025 – November 2025',
      project: 'AI Coaching Assistant Application',
      responsibilities: [
        'Developed and enhanced core features of an AI-powered coaching and assistant application using Kotlin and Jetpack Compose, delivering a clean, modern, and responsive user interface.',
        'Designed intuitive navigation and optimized user experience following Material Design principles.',
        'Implemented the MVVM (Model-View-ViewModel) architecture to ensure scalability, maintainability, and separation of concerns.',
        'Integrated RESTful APIs using Retrofit, OkHttp, and Gson for secure and efficient network communication.',
        'Built AI-powered functionalities using OpenAI API and Google Gemini API, enabling personalized coaching, intelligent recommendations, conversational assistance, and automated content generation.',
        'Managed asynchronous data flow and state management to provide real-time updates and seamless application performance.',
        'Performed comprehensive testing, debugging, and performance optimization to ensure reliability and compatibility across a wide range of Android devices.',
        'Collaborated remotely with stakeholders to gather requirements, implement enhancements, and deliver project milestones on schedule.'
      ],
      tools: ['Kotlin', 'Android Studio', 'Jetpack Compose', 'MVVM', 'Retrofit', 'OkHttp', 'Gson', 'OpenAI API', 'Gemini API', 'Git', 'GitHub']
    },
    {
      id: 3,
      current: false,
      type: 'Internship',
      title: 'Data Management Intern',
      company: 'Nexus Technologies Inc.',
      location: 'Makati City, Philippines',
      period: 'February 2025 – May 2025',
      project: 'SQL Server Management, Data Integration, and Query Development',
      responsibilities: [
        'Assisted in SQL Server administration, installation, configuration, indexing, and database optimization.',
        'Developed SQL queries for reporting, validation, and data analysis.',
        'Designed ETL workflows using SQL Server Integration Services (SSIS).',
        'Assisted in data migration and integration between multiple systems.',
        'Participated in SSIS package testing and deployment.',
        'Applied SQL performance tuning and execution plan optimization.',
        'Supported troubleshooting of SQL Server and SSIS-related issues.'
      ],
      tools: ['SSMS', 'SQL Server Configuration Manager', 'SSIS', 'Visual Studio 2022', 'Microsoft Excel']
    }
  ],

  projects: [
    {
      id: 1,
      title: 'Android Point of Sale Application',
      subtitle: 'POS System for Small Business',
      role: 'Android Developer',
      description: 'Developed an Android-based Point of Sale (POS) application by integrating a web-based POS system into an Android APK, providing small businesses with a convenient solution for managing sales, inventory, and products.',
      tech: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Antigravity', 'Neon PostgreSQL', 'Vercel'],
      liveUrl: 'https://foodpos-system.vercel.app/',
      githubUrl: null,
      featured: true
    },
    {
      id: 2,
      title: 'Timeless Selection',
      subtitle: 'Clothing E-Commerce Website',
      role: 'Web Developer',
      description: 'Developed a responsive clothing e-commerce website that showcases fashion products through a modern and intuitive shopping experience with product collections and seamless navigation.',
      tech: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Vercel'],
      liveUrl: 'https://timeless-selection.vercel.app/',
      githubUrl: null,
      featured: true
    },
    {
      id: 3,
      title: 'Precision Wellness App',
      subtitle: 'Capstone — Android Mobile Application',
      role: 'Lead Android Developer',
      description: 'Developed an offline Android mobile application that leverages data analytics to generate personalized nutrition and fitness recommendations. Ensures privacy, reliability, and accessibility without internet.',
      tech: ['Kotlin', 'Jetpack Compose', 'Room Database', 'SQLite', 'Hilt', 'MVVM'],
      liveUrl: null,
      githubUrl: null,
      featured: true,
      images: ['/Portfolio/img/F.jpg', '/Portfolio/img/L.jpg', '/Portfolio/img/d.jpg', '/Portfolio/img/m1.jpg']
    },
    {
      id: 4,
      title: 'React Blog Website',
      subtitle: 'Web Application (Vite)',
      role: 'Lead Developer',
      description: 'Developed a responsive blog application using React and Vite with authentication and database integration through Supabase.',
      tech: ['React', 'Vite', 'TypeScript', 'Node.js', 'Supabase', 'Postman', 'Vercel'],
      liveUrl: null,
      githubUrl: null,
      featured: false
    },
    {
      id: 5,
      title: 'Custom Delivery App',
      subtitle: 'Android Mobile Application',
      role: 'Lead Android Developer',
      description: 'Developed an offline delivery management application with user-friendly interfaces, Room Database integration, and optimized delivery workflow.',
      tech: ['Kotlin', 'Android Studio', 'XML', 'Room Database', 'Hilt', 'MVVM'],
      liveUrl: null,
      githubUrl: null,
      featured: false
    },
    {
      id: 6,
      title: 'Cognitive Development Game',
      subtitle: 'Web Game Application',
      role: 'Lead Developer',
      description: 'Developed a web-based educational game for a university client with interactive gameplay, progress tracking, and responsive frontend.',
      tech: ['PHP', 'HTML', 'CSS', 'JavaScript'],
      liveUrl: null,
      githubUrl: null,
      featured: false
    }
  ],

  skills: {
    categories: [
      {
        name: 'Programming',
        icon: '{ }',
        items: ['Java', 'Kotlin', 'Python', 'JavaScript', 'PHP', 'C/C++', 'C#']
      },
      {
        name: 'Mobile Development',
        icon: '📱',
        items: ['Android', 'Jetpack Compose', 'MVVM', 'Material Design', 'Room Database']
      },
      {
        name: 'Web Development',
        icon: '🌐',
        items: ['HTML5', 'CSS3', 'React', 'Node.js', '.NET']
      },
      {
        name: 'Database & Data',
        icon: '🗄️',
        items: ['SQL', 'Microsoft SQL Server', 'MySQL', 'Oracle', 'ETL', 'SSIS', 'Database Design']
      },
      {
        name: 'IT Support & ITSM',
        icon: '🛠️',
        items: ['Technical Support', 'Incident Management', 'Service Desk', 'ITSM', 'Jira', 'SLA Management', 'Application Support']
      },
      {
        name: 'API & Integration',
        icon: '🔗',
        items: ['REST APIs', 'Postman', 'Retrofit', 'OkHttp', 'Gson']
      },
      {
        name: 'AI',
        icon: '🤖',
        items: ['OpenAI API', 'Google Gemini API', 'AI Integration']
      },
      {
        name: 'Tools',
        icon: '⚙️',
        items: ['Android Studio', 'Visual Studio', 'Git', 'GitHub', 'phpMyAdmin', 'Excel', 'Power BI', 'Antigravity']
      }
    ],
    professional: [
      'Technical Support & Application Support',
      'Incident & Service Request Management',
      'Service Desk Operations (ITSM)',
      'Technical Troubleshooting & Root Cause Analysis',
      'SQL Query Optimization & Database Management',
      'Data Validation & Data Integrity',
      'REST API Integration & API Testing',
      'Mobile Application Development',
      'AI Integration (OpenAI & Google Gemini)',
      'Problem Solving & Analytical Thinking',
      'Customer Service & Client Support',
      'Cross-Functional Team Collaboration',
      'Technical Documentation',
      'Agile Development Practices',
      'Communication & Stakeholder Management',
      'Time Management & Task Prioritization',
      'Adaptability & Continuous Learning',
      'Attention to Detail'
    ]
  },

  education: [
    {
      institution: 'Our Lady of Fatima University – Laguna Campus',
      degree: 'Bachelor of Science in Computer Science',
      period: 'June 2021 – July 2025',
      achievement: "Dean's Lister"
    },
    {
      institution: 'Saint Benilde International School Inc.',
      location: 'Calamba City, Laguna',
      period: 'July 2014 – March 2021',
      achievement: null
    }
  ],

  certifications: {
    2026: [
      'Full-Stack Observability Philippines 2026',
      'FSO Workshop Site 24x7',
      'Operational Manager',
      'Application Manager',
      'BigQuery and Data Studio Training Workshop',
      'Introduction to React JS',
      'Front-End Web Development with React',
      'Information Technology Infrastructure Library (ITIL)',
      'Introduction to Power BI',
      'SQL for Data Analysis',
      'SQL Performance Tuning and Query Optimization',
      'Database Design and Normalization Fundamentals'
    ],
    2025: [
      '2nd Regional Research Conference – Laguna University (Lead Programmer & Presenter)',
      'SQL Server for Data Analysis',
      'Leveraging AI in Predictive Analytics, Automation, and Data Management',
      'EU AI Act – Fundamentals of Laws on Artificial Intelligence',
      'Blockchain as a Service Using AWS',
      'Machine Learning in Python Environment',
      'Database DML Statements and SQL Server Administration',
      'SQL Server 2014: Security Fundamentals'
    ],
    2024: [
      'DICT – Principles of Web Development',
      'DICT – Introduction to HTML',
      'DICT – Software Engineering',
      'DICT – Android Studio Application Development',
      'DICT – HTML & CSS Website Design',
      'DICT – Android UI Building Blocks',
      'DICT – Android Fragments',
      'The Cutting Edge: Trends Shaping the Future of Computing'
    ]
  },

  dashboard: {
    metrics: [
      { label: 'Total Tickets', value: '2,847', change: '+12%', icon: '📋' },
      { label: 'Open Tickets', value: '142', change: '-8%', icon: '📂' },
      { label: 'Pending', value: '38', change: '-15%', icon: '⏳' },
      { label: 'SLA Compliance', value: '96.4%', change: '+2.1%', icon: '✅' }
    ],
    categories: [
      { name: 'Application Error', count: 312, color: '#22c55e' },
      { name: 'User Access', count: 245, color: '#3b82f6' },
      { name: 'Data Validation', count: 198, color: '#8b5cf6' },
      { name: 'API Integration', count: 156, color: '#f59e0b' },
      { name: 'Account Issues', count: 134, color: '#ef4444' },
      { name: 'System Config', count: 89, color: '#06b6d4' }
    ],
    resolutionProgress: [
      { label: 'Resolved', pct: 87 },
      { label: 'In Progress', pct: 9 },
      { label: 'Escalated', pct: 4 }
    ],
    ticketAging: [
      { range: '0-24h', count: 89 },
      { range: '1-3d', count: 34 },
      { range: '3-7d', count: 12 },
      { range: '7d+', count: 7 }
    ]
  },

  contact: {
    email: 'cirepaulcruz21@gmail.com',
    phone: '0994-3598-620',
    linkedin: 'linkedin.com/in/cirepaulcruz',
    linkedinUrl: 'https://linkedin.com/in/cirepaulcruz',
    github: 'cirehpaul',
    githubUrl: 'https://github.com/cirehpaul',
    portfolio: 'cirehpaul.github.io/Portfolio',
    portfolioUrl: 'https://cirehpaul.github.io/Portfolio'
  },

  footer: {
    copyright: '© 2026 Cire Paul Cruz'
  }
}

export default content
