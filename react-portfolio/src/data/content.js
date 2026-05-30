const content = {
  hero: {
    name: 'Cire Paul Bernardo Cruz',
    title: 'Application Support Analyst | Mobile Developer',
    intro: 'Application Support Analyst professional at Maxicare with experience in application troubleshooting, incident management, system monitoring, and technical support for business-critical applications. Skilled in diagnosing and resolving technical issues, ensuring system reliability, and collaborating with cross-functional teams to maintain operational efficiency. Backed by a Computer Science degree and a foundation in software development, with a commitment to delivering high-quality solutions and continuous professional growth.',
    resume: '/resume/Cire Paul Cruz (Resume).pdf',
    email: 'mailto:cirepaulcruz21@gmail.com',
    github: 'https://github.com/cirehpaul'
  },
  heroStats: [
    { label: 'Experience', value: '1 year' },
    { label: 'Projects', value: '5+' },
    { label: 'Certifications', value: '18' },
    { label: 'Technologies', value: 'Kotlin · SQL · React' }
  ],
  nav: ['About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'],
  about: {
    name: 'Cire Paul Bernardo Cruz',
    degree: 'Bachelor of Science in Computer Science',
    address: 'Santa Rosa City, Laguna',
    objective: 'Application Support Analyst professional at Maxicare with experience in application troubleshooting, incident management, system monitoring, and technical support for business-critical applications. Skilled in diagnosing and resolving technical issues, ensuring system reliability, and collaborating with cross-functional teams to maintain operational efficiency. Backed by a Computer Science degree and a foundation in software development, with a commitment to delivering high-quality solutions and continuous professional growth.'
  },
  skills: {
    relevant: [
      'Problem-Solving: Ability to debug and optimize code efficiently',
      'Collaboration: Working effectively in cross functional teams',
      'Adaptability: Learning new frameworks and tools quickly',
      'Communication: Explaining technical concepts clearly to non-technical stakeholders',
      'Continuous Learning: Staying updated with emerging technologies and best practices.'
    ],
    technical: [
      'Programming Languages: Java, Python, JavaScript, Kotlin,C/C++, C#, PHP',
      'Ticketing Systems: Jira, Service Desk, IT Service Management (ITSM)',
      'Mobile Development: Android Jetpack Compose, MVVM architecture',
      'Web Development: HTML, CSS, React, Node.js, .NET Framework, JavaScript',
      'Data Management: SQL, ETL workflows, Database design, SSIS',
      'APIs & Networking: RESTful APIs, Retrofit, OkHttp',
      'AI/ML Integration: Familiarity with OpenAI and Gemini',
      'Version Control: Git, GitHub'
    ]
  },
  education: [
    {
      institution: 'Our Lady of Fatima University - Laguna Campus',
      period: 'June 2021 – July 2025',
      achievement: 'Dean’s Lister'
    },
    {
      institution: 'Saint Benilde International School Inc.',
      period: '2014 – 2021'
    },
    {
      institution: 'Jose Rizal Memorial School',
      period: '2013 – 2014'
    },
    {
      institution: 'Segundo Esguerra Memorial Elementary School',
      period: '2007 – 2013'
    }
  ],
  experience: [
    {
      section: 'Internship',
      title: 'Apps Section, Data Management Intern',
      company: 'Nexus Technologies Inc',
      location: '1010 Metropolitan Avenue, San Antonio, Makati City 1203',
      period: 'February 2025 - May 2025',
      project: 'SQL Server, Data Integration, and Querying Training.',
      contributions: [
        'Assisted in managing and configuring SQL Server databases, including installation, indexing, performance tuning, and data querying. Participated in the design, development, and deployment of data integration solutions using Microsoft SSIS (SQL Server Integration Services) within Visual Studio to efficiently move, transform, and analyze data across systems.',
        'Supported the configuration and administration of SQL Server environments, ensuring optimal setup, secure access, and performance tuning.',
        'Learned and applied database best practices, including indexing, query optimization, execution planning, and structured SQL for reporting and analytics.',
        'Developed and optimized SQL queries to retrieve, validate, and manipulate data for business operations and project deliverables.',
        'Designed and implemented ETL workflows using SSIS in Visual Studio, including data extraction from various sources, transformation logic, and loading into target systems.',
        'Contributed to SSIS package development, testing, and deployment, helping streamline data migration and integration processes.',
        'Gained hands-on experience with enterprise-level data tools and actively participated in troubleshooting and resolving SQL and SSIS-related issues.'
      ],
      tools: ['SQL Server Management Studio (SSMS)', 'SQL Server Configuration Manager', 'SQL Server Integration Services (SSIS)', 'Visual Studio 2013', 'Microsoft Excel']
    },
    {
      section: 'Work',
      title: 'Fulltime - Application Support Analyst I',
      company: 'Equitable Computer Services Inc',
      location: 'Binondo, Metro Manila',
      period: 'January 2026 - Present',
      project: 'eMedCore+ (Maxicare)',
      contributions: [
        'Provide application support for Maxicare\'s eMedCore+ system, ensuring the availability and reliability of business-critical services.',
        'Investigate, troubleshoot, and resolve application-related issues reported by end users and stakeholders.',
        'Monitor system performance and analyze logs, database records, and API responses to identify root causes of incidents.',
        'Manage and track incidents, service requests, and escalations through ITSM ticketing systems.',
        'Coordinate with development, infrastructure, and business teams to implement fixes and system enhancements.',
        'Perform database queries and data validation using SQL to support issue resolution and operational requirements.',
        'Test and validate API integrations using Postman and internal APIs.',
        'Prepare reports and documentation to support operational processes and knowledge sharing.'
      ],
      tools: ['Oracle API', 'Maxi API', 'SQL', 'Microsoft SQL Server', 'Postman', 'Jira Service Management (JSM)', 'IT Service Management (ITSM)', 'Microsoft Excel', 'phpMyAdmin']
    },
    {
      section: 'Work',
      title: 'Freelance - Android Developer',
      company: 'Media Production Company',
      location: 'San Francisco, California, United States',
      period: 'July 2025 - November 2025',
      project: 'AI Coaching Assistant App',
      contributions: [
        'Developed and enhanced core functionalities for the company’s AI coaching and assistant application, ensuring clean UI, intuitive navigation, and responsive layouts using Jetpack Compose.',
        'Implemented robust data handling, network communication, and real-time updates through MVVM architecture, Retrofit, and OkHttp.',
        'Integrated AI-powered features leveraging OpenAI and Gemini to deliver personalization, recommendation systems, and automated content generation.',
        'Conducted testing, debugging, and performance tuning to maintain high reliability and scalability across diverse Android devices.'
      ],
      tools: ['Kotlin', 'Android Studio', 'Jetpack Compose', 'MVVM (Model-View-ViewModel)', 'Retrofit', 'OkHttp', 'Gson', 'OpenAI API', 'Gemini API']
    }
  ],
  projects: {
    capstone: {
      title: 'Precision Wellness: Investigating the Impact of Data Analytics on Personalized Nutrition and Fitness Strategies',
      conference: '2nd Regional Research Conference – Laguna University',
      theme: 'Resilience Through Innovation: Navigating the Future in Education, Entrepreneurship, Engineering, and Digital Technology',
      participation: 'Presenter',
      role: 'Lead Android Developer | Principal Investigator',
      summary: 'Designed and developed an offline application that leverages data analytics to create personalized nutrition and fitness strategies. The application processes user-specific data locally to generate tailored wellness plans, ensuring privacy and accessibility without requiring an internet connection.',
      tech: ['Kotlin', 'Android Studio', 'Room DB', 'Jetpack Compose', 'MVVM', 'Figma', 'SQLite'],
      hardware: ['Laptop', 'Cellphone (Android Only)'],
      images: ['/img/F.jpg', '/img/L.jpg', '/img/d.jpg', '/img/w1.jpg', '/img/w2.jpg', '/img/m1.jpg', '/img/m2.jpg', '/img/O.jpg']
    },
    other: [
      {
        title: 'Delivery App - "Project Based"',
        description: 'A delivery application developed as a project during college, designed to facilitate efficient order placements and deliveries.',
        role: 'Android Developer',
        tools: ['Kotlin', 'Android Studio', 'Room DB', 'XML'],
        images: ['/img/log (1).png', '/img/log (2).png', '/img/log (3).png', '/img/log (4).png', '/img/log (5).png']
      },
      {
        title: 'Cognitive Development Game - "Commission Based"',
        description: 'A cognitive development game system created during college, developed for a student from NU who requested a complete system build.',
        role: 'Lead Programmer',
        tools: ['HTML', 'CSS', 'JavaScript', 'PHP'],
        images: ['/img/main.png', '/img/main1.png', '/img/main2.png', '/img/main3.png', '/img/main4.png', '/img/main5.png', '/img/main6.png']
      },
      {
        title: 'Location Finder',
        description: 'The User Location Tracker is a web-based application that allows users to securely share their real-time geographic location. Users provide their Gmail address for identification purposes and grant permission for the browser to access their device’s GPS. Upon approval, the application captures the user’s exact latitude and longitude and displays it on an interactive map powered by Leaflet and OpenStreetMap, ensuring a fast, reliable, and free mapping solution without requiring any API key.',
        role: 'Web Developer',
        tools: ['HTML5', 'CSS3 / Bootstrap', 'JavaScript', 'Google Maps Embed API', 'Browser Geolocation API', 'Google Geocoding API'],
        images: ['/img/location.png']
      }
    ]
  },
  certifications: [
    { date: 'APRIL 2025', title: '2nd Regional Research Conference – Laguna University', detail: 'Theme: "Resilience Through Innovation: Navigating the Future in Education, Entrepreneurship, Engineering, and Digital Technology" - Certificate of Participation: Lead Programmer and Presenter' },
    { date: 'MAY 2022', title: 'Unlocked: Password @ Authentication' },
    { date: 'MAY 2023', title: 'T.R.U.S.T: Tackling Risks and Understanding Security in AI Technology' },
    { date: 'MAY 2024', title: 'The cutting edge: Trends Shaping the Future of Computing' },
    { date: 'MAY 2024', title: 'DICT-WD001: Principles of Web Development and Introduction to HTML' },
    { date: 'MAY 2024', title: 'DICT-ICT018: Basic Level of Software Engineering' },
    { date: 'MAY 2024', title: 'DICT-MAD006: Introduction to Android Studio Application Development' },
    { date: 'MAY 2024', title: 'DICT-WD002: Using HTML and CSS to Design a Website' },
    { date: 'MAY 2024', title: 'DICT-MAD007: Basic Building Blocks of the User Interface' },
    { date: 'MAY 2024', title: 'DICT-MAD008: Android Fragments' },
    { date: 'MAR 2025', title: 'DATABASE – DML Statements and SQL Server Administration' },
    { date: 'MAR 2025', title: 'SQL SERVER 2014: Security Fundamentals' },
    { date: 'OCT 2025', title: 'EU AI Act - Fundamentals of Laws on Artificial Intelligence' },
    { date: 'OCT 2025', title: 'Blockchain as a Service Using AWS' },
    { date: 'OCT 2025', title: 'Machine Learning in Python Environment' },
    { date: 'NOV 2025', title: 'SQL Server for Data Analysis' },
    { date: 'NOV 2025', title: 'Fundamental Data Analysis using Power BI' },
    { date: 'NOV 2025', title: 'Leveraging AI in Predictive Analytics, Automation, and Data Management' }
  ],
  contact: {
    email: 'mailto:cirepaulcruz21@gmail.com',
    whatsapp: 'https://wa.me/639943598620',
    linkedin: 'https://www.linkedin.com/in/cirepaulcruz/',
    github: 'https://github.com/cirehpaul',
    facebook: 'https://www.facebook.com/cirepaulcruz21/'
  },
  footer: {
    title: 'Get in Touch',
    subtitle: 'Have a project or idea? Let\'s connect!',
    copyright: '© 2025 Cire Paul B. Cruz | Portfolio'
  }
}

export default content;
