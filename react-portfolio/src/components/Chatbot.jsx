import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ─────────────────────────────────────────────────────────────
// Offline Knowledge Base — all answers are coded manually
// ─────────────────────────────────────────────────────────────

const knowledge = {
  intro: {
    keywords: ['who', 'introduce', 'about', 'tell me about', 'cire', 'himself', 'him', 'overview', 'summary', 'background', 'bio', 'biography', 'profile', 'describe', 'info', 'information', 'know him', 'about cire', 'who is', 'about you', 'yourself'],
    answer: `**Cire Paul Bernardo Cruz** is a detail-oriented IT professional based in **Sta. Rosa City, Laguna**, Philippines. 🇵🇭

He holds a **Bachelor of Science in Computer Science** from Our Lady of Fatima University – Laguna Campus (Dean's Lister).

He currently works as an **Application Support Analyst I** at Equitable Computer Services Inc. (deployed at Maxicare), and has experience in Android development, SQL database management, API integration, and AI technologies.

📧 cirepaulcruz21@gmail.com
🔗 linkedin.com/in/cirepaulcruz
🔗 github.com/cirehpaul`
  },

  skills: {
    keywords: ['skill', 'skills', 'tech stack', 'technologies', 'programming', 'languages', 'what can', 'capable', 'proficient', 'know', 'expertise', 'expert', 'competent', 'abilities', 'good at', 'specialization', 'specialize', 'technical', 'tools', 'framework', 'stack', 'strengths', 'strength', 'strong', 'mastered', 'use', 'familiar', 'what does he know', 'what he know', 'knowledge'],
    answer: `Here are **Cire's core technical skills**: 💻

**Programming Languages:**
Java, Kotlin, Python, JavaScript, PHP, C/C++, C#

**Mobile Development:**
Android, Jetpack Compose, MVVM, Material Design, Room Database

**Web Development:**
HTML5, CSS3, React, Node.js, .NET

**Database & Data:**
SQL, Microsoft SQL Server, MySQL, Oracle, ETL, SSIS, Database Design

**IT Support & ITSM:**
Technical Support, Incident Management, Service Desk, ITSM, Jira, SLA Management, Application Support

**API & Integration:**
REST APIs, Postman, Retrofit, OkHttp, Gson

**AI:**
OpenAI API, Google Gemini API, AI Integration

**Tools:**
Android Studio, Visual Studio, Git, GitHub, phpMyAdmin, Excel, Power BI, Antigravity`
  },

  experience: {
    keywords: ['experience', 'work', 'job', 'career', 'employment', 'working', 'position', 'role', 'professional', 'company', 'companies', 'employer', 'history', 'worked', 'occupation', 'employed', 'workplace', 'jobs'],
    answer: `Here's **Cire's professional experience**: 💼

**01 — Application Support Analyst I** (Full-Time)
📍 Equitable Computer Services Inc. — Binondo, Metro Manila
📅 January 2026 – Present
• First-level technical support & incident management
• Ticket monitoring, SLA compliance, incident reporting
• Data validation using Postman and Oracle
• SQL scripting (INSERT, UPDATE, DELETE)
• Tools: SQL, Oracle, Postman, ServiceDesk Plus, Jira, Excel, Power BI, Zoho Zia AI

**02 — Android Developer** (Freelance)
📍 Media Production Company — San Francisco, CA (Remote)
📅 July 2025 – November 2025
• AI Coaching Assistant App using Kotlin & Jetpack Compose
• Integrated OpenAI API & Google Gemini API
• MVVM architecture, Retrofit, OkHttp

**03 — Data Management Intern**
📍 Nexus Technologies Inc. — Makati City
📅 February 2025 – May 2025
• SQL Server administration & query development
• ETL workflows using SSIS
• Data migration & integration`
  },

  projects: {
    keywords: ['project', 'projects', 'built', 'developed', 'portfolio', 'apps', 'applications', 'work sample', 'showcase', 'made', 'created', 'build', 'create', 'develop', 'app', 'website', 'websites', 'software', 'system', 'program'],
    answer: `Here are **Cire's projects**: 🚀

**01 — Android Point of Sale Application**
POS system for small businesses
🔧 React.js, JavaScript, PostgreSQL, Vercel
🔗 foodpos-system.vercel.app

**02 — Timeless Selection**
Clothing e-commerce website
🔧 React.js, JavaScript, HTML5, CSS3, Vercel
🔗 timeless-selection.vercel.app

**03 — Precision Wellness App** (Capstone)
Offline Android app for personalized nutrition & fitness
🔧 Kotlin, Jetpack Compose, Room, SQLite, MVVM
🎓 Presented at 2nd Regional Research Conference

**04 — React Blog Website**
Blog with authentication via Supabase
🔧 React, Vite, TypeScript, Node.js, Supabase

**05 — Custom Delivery App**
Offline delivery management app
🔧 Kotlin, Android Studio, Room, Hilt, MVVM

**06 — Cognitive Development Game**
Web-based educational game
🔧 PHP, HTML, CSS, JavaScript`
  },

  education: {
    keywords: ['education', 'school', 'university', 'degree', 'college', 'study', 'studied', 'academic', 'graduate', 'graduated', 'major', 'alma mater', 'campus', 'fatima', 'benilde', 'student', 'course'],
    answer: `Here's **Cire's educational background**: 🎓

**Bachelor of Science in Computer Science**
Our Lady of Fatima University – Laguna Campus
📅 June 2021 – July 2025
🏆 **Dean's Lister**

**Senior High School & Junior High School**
Saint Benilde International School Inc.
📍 Calamba City, Laguna
📅 July 2014 – March 2021`
  },

  certifications: {
    keywords: ['certification', 'certifications', 'certified', 'certificate', 'training', 'seminar', 'achievement', 'achievements', 'awards', 'award', 'badges', 'credentials', 'accreditation', 'qualified'],
    answer: `Cire has earned **28+ certifications** across multiple years: 🏅

**2026 (12 certifications):**
• Full-Stack Observability Philippines 2026
• FSO Workshop Site 24x7
• ITIL (IT Infrastructure Library)
• BigQuery & Data Studio Training
• Introduction to React JS
• Front-End Web Development with React
• Introduction to Power BI
• SQL for Data Analysis
• SQL Performance Tuning & Query Optimization
• Database Design & Normalization Fundamentals
• And more...

**2025 (8 certifications):**
• 2nd Regional Research Conference (Lead Programmer & Presenter)
• SQL Server for Data Analysis
• AI in Predictive Analytics
• EU AI Act Fundamentals
• Machine Learning in Python
• And more...

**2024 (8 certifications):**
• DICT Web Development courses
• Android Studio Development
• Software Engineering
• And more...`
  },

  contact: {
    keywords: ['contact', 'reach', 'email', 'phone', 'linkedin', 'github', 'connect', 'hire', 'message', 'get in touch', 'call', 'number', 'socials', 'social media', 'follow', 'link', 'links', 'available', 'hiring'],
    answer: `Here's how to **reach Cire**: 📬

📧 **Email:** cirepaulcruz21@gmail.com
📞 **Phone:** 0994-3598-620
🔗 **LinkedIn:** linkedin.com/in/cirepaulcruz
💻 **GitHub:** github.com/cirehpaul
🌐 **Portfolio:** cirehpaul.github.io/Portfolio

He's open to opportunities in application support, data, software development, and technology-driven solutions!`
  },

  currentRole: {
    keywords: ['current', 'now', 'today', 'present', 'doing', 'currently', 'maxicare', 'equitable', 'application support', 'what does he do', 'what do you do', 'recent', 'latest', 'right now'],
    answer: `Cire is currently working as an **Application Support Analyst I** at **Equitable Computer Services Inc.** (deployed to Maxicare). 🏢

**Key responsibilities include:**
• First-level technical support through ticketing systems
• Incident monitoring, tracking & SLA compliance
• Ticket aging analysis and follow-up coordination
• Data validation using Postman and Oracle databases
• SQL scripting (INSERT, UPDATE, DELETE) for production issues
• Cross-functional collaboration for escalation & resolution
• Incident reporting and documentation

**Tools he uses daily:**
SQL, Oracle, Postman, ServiceDesk Plus, Jira, Excel, Power BI, Zoho Zia AI`
  },

  capstone: {
    keywords: ['capstone', 'thesis', 'research', 'precision wellness', 'conference', 'presenter', 'wellness', 'nutrition', 'fitness'],
    answer: `**Precision Wellness App** — Cire's Capstone Project 🔬

**Title:** "Precision Wellness: Investigating the Impact of Data Analytics on Personalized Nutrition and Fitness Strategies"

**Role:** Lead Android Developer & Principal Investigator

**Presented at:** 2nd Regional Research Conference – Laguna University
**Theme:** "Resilience Through Innovation: Navigating the Future in Education, Entrepreneurship, Engineering, and Digital Technology"

**Description:** An offline Android application that leverages data analytics to generate personalized nutrition and fitness recommendations — ensuring privacy, reliability, and accessibility without internet.

**Tech Stack:** Kotlin, Jetpack Compose, Room Database, SQLite, Hilt, MVVM`
  },

  location: {
    keywords: ['where', 'location', 'city', 'address', 'from', 'based', 'live', 'laguna', 'philippines', 'country', 'hometown', 'home', 'residing', 'reside'],
    answer: `Cire is based in **Sta. Rosa City, Laguna**, Philippines 📍🇵🇭

He currently works in **Binondo, Metro Manila** at Equitable Computer Services Inc.`
  },

  resume: {
    keywords: ['resume', 'cv', 'download', 'document', 'pdf'],
    answer: `You can download **Cire's resume** by clicking the **"Download Resume"** button at the top of the portfolio, or by visiting the Contact section. 📄`
  },

  age: {
    keywords: ['age', 'old', 'birthday', 'born', 'birth', 'bday', 'when'],
    answer: `Cire was born on **August 21, 2002** — he's currently **24 years old**! 🎂

He graduated with a **Bachelor of Science in Computer Science** in July 2025 and is now building his career as an Application Support Analyst.`
  },

  hobby: {
    keywords: ['hobby', 'hobbies', 'interest', 'interests', 'passion', 'passionate', 'fun', 'free time', 'leisure', 'enjoy', 'like doing', 'love doing'],
    answer: `Cire is passionate about **technology and continuous learning**! 🎯\n\nHis interests include:\n• 💻 Software development & coding\n• 📱 Android app development\n• 🤖 AI technologies (OpenAI, Gemini)\n• 🗄️ Database management & SQL\n• 📊 Data analysis & visualization\n• 🎓 Earning new tech certifications (28+ so far!)\n\nHe's always exploring new technologies and building projects to expand his skills.`
  },

  goal: {
    keywords: ['goal', 'goals', 'plan', 'plans', 'future', 'aspiration', 'dream', 'ambition', 'aim', 'vision', 'next', 'ahead'],
    answer: `Cire is focused on growing his career in **technology and IT services**. 🎯\n\nHe's open to opportunities in:\n• Application Support & IT Service Management\n• Data Management & Analytics\n• Software Development (Web & Mobile)\n• AI Integration & Technology-driven solutions\n\nHe aims to continuously improve his technical skills and deliver reliable solutions in fast-paced environments.`
  },

  android: {
    keywords: ['android', 'mobile', 'kotlin', 'jetpack', 'compose', 'mobile app', 'phone app'],
    answer: `Cire has strong experience in **Android development**: 📱\n\n**Technologies:** Kotlin, Jetpack Compose, MVVM, Material Design, Room Database, Retrofit, OkHttp, Gson\n\n**Android Projects:**\n• **AI Coaching Assistant App** — Freelance project using OpenAI & Gemini APIs\n• **Precision Wellness App** — Capstone for personalized nutrition & fitness\n• **Custom Delivery App** — Offline delivery management\n• **POS Application** — Android-wrapped Point of Sale system`
  },

  sql: {
    keywords: ['sql', 'database', 'oracle', 'mysql', 'query', 'queries', 'data', 'db', 'ssis', 'etl', 'data management'],
    answer: `Cire has solid experience in **SQL & Database Management**: 🗄️\n\n**Database Technologies:** SQL / T-SQL, Microsoft SQL Server, MySQL, Oracle Database, phpMyAdmin, SQLite & Room Database\n\n**Skills:**\n• Complex SQL queries (SELECT, INSERT, UPDATE, DELETE)\n• Database design & normalization\n• ETL workflows using SSIS\n• Data migration & integration\n• SQL performance tuning & optimization\n• Data validation & integrity checks\n\nHe uses SQL and Oracle daily in his current role.`
  },

  ai: {
    keywords: ['ai', 'artificial intelligence', 'machine learning', 'openai', 'gemini', 'gpt', 'chatbot', 'bot', 'intelligent'],
    answer: `Cire has hands-on experience with **AI technologies**: 🤖\n\n**AI/ML Technologies:** OpenAI API, Google Gemini API, AI Integration\n\n**AI Project:** He built an **AI Coaching Assistant Application** integrating both OpenAI and Google Gemini APIs for personalized coaching, intelligent recommendations, and automated content generation.\n\nHe also earned certifications in **Machine Learning in Python** and **AI in Predictive Analytics**.`
  },

  web: {
    keywords: ['web', 'react', 'html', 'css', 'javascript', 'frontend', 'front-end', 'vite', 'node', 'fullstack'],
    answer: `Cire has experience in **Web Development**: 🌐\n\n**Technologies:** HTML5, CSS3, JavaScript, React, Node.js, Vite, .NET\n\n**Web Projects:**\n• **POS System** — React.js (foodpos-system.vercel.app)\n• **Timeless Selection** — E-commerce site (timeless-selection.vercel.app)\n• **React Blog** — Blog with Supabase auth\n• **Cognitive Development Game** — Educational web game\n• **This Portfolio** — React, Vite, Tailwind CSS`
  },

  softskills: {
    keywords: ['soft skill', 'soft skills', 'communication', 'teamwork', 'team', 'leadership', 'problem solving', 'analytical', 'personality', 'trait', 'character', 'attitude', 'work ethic'],
    answer: `Here are **Cire's professional & soft skills**: 🤝\n\n• 🧠 Problem Solving & Analytical Thinking\n• 💬 Communication & Stakeholder Management\n• 🤝 Cross-Functional Team Collaboration\n• 📋 Technical Documentation\n• 👥 Customer Service & Client Support\n• ⏰ Time Management & Task Prioritization\n• 🔄 Adaptability & Continuous Learning\n• 🔍 Attention to Detail\n• 🏃 Agile Development Practices`
  },

  whyHire: {
    keywords: ['why hire', 'why should', 'why choose', 'value', 'what makes', 'stand out', 'different', 'unique', 'special'],
    answer: `Here's what makes **Cire stand out**: ⭐\n\n• 🏢 **Real-world IT experience** — Application Support Analyst at Maxicare\n• 📱 **Full-stack capability** — Android (Kotlin), Web (React), Database (SQL/Oracle)\n• 🤖 **AI integration** — Hands-on with OpenAI & Gemini APIs\n• 🎓 **Strong academics** — CS degree, Dean's Lister, 28+ certifications\n• 🌏 **International experience** — Freelanced remotely for a US company\n• 📊 **Data-driven** — SQL, ETL, data validation, Power BI\n• 🔄 **Continuous learner** — Always earning new certifications\n• 💡 **Versatile** — Bridges IT support, development, and data management`
  }
};

// ─────────────────────────────────────────────────────────────
// Matching engine
// ─────────────────────────────────────────────────────────────

function findAnswer(input) {
  const lower = input.toLowerCase().trim();

  // Greetings
  if (/^(hi|hello|hey|hola|good morning|good afternoon|good evening|sup|yo|what'?s up|howdy|greetings|kamusta|musta)\b/i.test(lower)) {
    const greetings = [
      "Hello! 👋 Welcome to Cire Paul Cruz's portfolio. How can I help you today? You can ask me about his **skills**, **experience**, **projects**, **education**, **certifications**, or **contact info**!",
      "Hi there! 👋 I'm Cire AI, your portfolio assistant. Feel free to ask me anything about Cire's **skills**, **projects**, **experience**, or **career**!",
      "Hey! 😊 Welcome! I can tell you all about Cire's **background**, **technical skills**, **projects**, and more. What would you like to know?"
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
  }

  // Thanks
  if (/\b(thanks|thank you|ty|appreciate|thx|salamat|grateful)\b/i.test(lower)) {
    return "You're welcome! 😊 Let me know if there's anything else you'd like to know about Cire.";
  }

  // Goodbye
  if (/^(bye|goodbye|see you|take care|later|gtg|ciao|paalam)\b/i.test(lower)) {
    return "Goodbye! 👋 Thank you for visiting Cire's portfolio. Have a great day!";
  }

  // Yes / OK / conversational acknowledgments
  if (/^(yes|yeah|yep|yup|sure|ok|okay|alright|got it|i see|nice|cool|great|awesome|wow|interesting)\b/i.test(lower) && lower.length < 30) {
    return "Glad to help! 😊 Is there anything else you'd like to know? You can ask about his **skills**, **projects**, **experience**, **certifications**, or **contact info**.";
  }

  // How are you / What are you
  if (/\b(how are you|how r u|what are you|what r u|are you real|are you ai|are you a bot)\b/i.test(lower)) {
    return "I'm **Cire AI**, an offline portfolio assistant! 🤖 I'm here to answer any questions about Cire Paul Cruz's professional background, skills, projects, and more. All my knowledge is built right into the website — no internet API needed!";
  }

  // What is this website
  if (/\b(what is this|what's this|this website|this site|this portfolio|about this)\b/i.test(lower)) {
    return "This is **Cire Paul Cruz's professional portfolio website**! 🌐\n\nIt showcases his:\n• **Professional experience** in IT support & development\n• **Technical skills** across multiple technologies\n• **Projects** he has built\n• **Education** & **certifications**\n• **Contact information**\n\nFeel free to explore or ask me anything!";
  }

  // Joke
  if (/\b(joke|funny|lol|haha|humor|laugh)\b/i.test(lower)) {
    return "😄 Here's a tech joke:\n\n**Why do programmers prefer dark mode?**\nBecause light attracts bugs! 🐛\n\nNow, would you like to know about Cire's **skills** or **projects**?";
  }

  // Help
  if (/\b(help|what can you|menu|options|commands|what do you know|what can i ask|guide)\b/i.test(lower)) {
    return `I can answer many questions about **Cire Paul Cruz**! Try asking: 💡\n\n• **"Who is Cire?"** — Introduction\n• **"What are his skills?"** — Technical skills\n• **"What's his expertise?"** — Core competencies\n• **"Tell me about his experience"** — Work history\n• **"What projects has he built?"** — Project showcase\n• **"What's his education?"** — Academic background\n• **"Show me certifications"** — 28+ certs\n• **"How can I contact him?"** — Email, phone, socials\n• **"What is he doing now?"** — Current role\n• **"What are his goals?"** — Future plans\n• **"Why hire him?"** — What makes him stand out\n• **"Does he know Android?"** — Mobile dev\n• **"What about SQL?"** — Database expertise\n• **"AI experience?"** — AI/ML integration`;
  }

  // Score each topic by keyword matches
  let bestMatch = null;
  let bestScore = 0;

  for (const [topic, data] of Object.entries(knowledge)) {
    let score = 0;
    for (const keyword of data.keywords) {
      if (lower.includes(keyword)) {
        score += keyword.length;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = data;
    }
  }

  // Lowered threshold to 2 so shorter keywords like 'ai', 'db', 'cv' still match
  if (bestMatch && bestScore >= 2) {
    return bestMatch.answer;
  }

  // Fallback
  return `I'm not sure about that one, but I know a lot about Cire! 😊\n\nTry asking questions like:\n• **"What are his skills?"** or **"What's his expertise?"**\n• **"Tell me about his experience"**\n• **"What projects has he built?"**\n• **"How can I contact him?"**\n• **"Why should I hire him?"**\n• Or type **"help"** to see all topics!`;
}

// ─────────────────────────────────────────────────────────────
// Text formatter (markdown-like bold)
// ─────────────────────────────────────────────────────────────

function formatBotText(text) {
  if (!text) return text;

  const lines = text.split('\n');
  const elements = [];
  let listItems = [];
  let listType = null;

  const flushList = () => {
    if (listItems.length > 0) {
      if (listType === 'ol') {
        elements.push(
          <ol key={`ol-${elements.length}`} className="list-decimal list-inside space-y-1 my-1">
            {listItems}
          </ol>
        );
      } else {
        elements.push(
          <ul key={`ul-${elements.length}`} className="list-disc list-inside space-y-1 my-1">
            {listItems}
          </ul>
        );
      }
      listItems = [];
      listType = null;
    }
  };

  const formatInline = (str, keyPrefix) => {
    const parts = [];
    const regex = /\*\*(.+?)\*\*/g;
    let lastIndex = 0;
    let match;
    let i = 0;

    while ((match = regex.exec(str)) !== null) {
      if (match.index > lastIndex) {
        parts.push(str.slice(lastIndex, match.index));
      }
      parts.push(<strong key={`${keyPrefix}-b-${i}`} className="font-semibold text-white">{match[1]}</strong>);
      lastIndex = regex.lastIndex;
      i++;
    }
    if (lastIndex < str.length) {
      parts.push(str.slice(lastIndex));
    }
    return parts.length > 0 ? parts : str;
  };

  lines.forEach((line, idx) => {
    const trimmed = line.trim();

    const bulletMatch = trimmed.match(/^[•\*\-]\s+(.+)/);
    if (bulletMatch) {
      if (listType !== 'ul') flushList();
      listType = 'ul';
      listItems.push(<li key={`li-${idx}`}>{formatInline(bulletMatch[1], `li-${idx}`)}</li>);
      return;
    }

    const numMatch = trimmed.match(/^\d+\.\s+(.+)/);
    if (numMatch) {
      if (listType !== 'ol') flushList();
      listType = 'ol';
      listItems.push(<li key={`li-${idx}`}>{formatInline(numMatch[1], `li-${idx}`)}</li>);
      return;
    }

    flushList();

    if (trimmed === '') {
      elements.push(<br key={`br-${idx}`} />);
    } else {
      elements.push(
        <p key={`p-${idx}`} className="my-0.5">{formatInline(trimmed, `p-${idx}`)}</p>
      );
    }
  });

  flushList();
  return elements;
}

// ─────────────────────────────────────────────────────────────
// Chatbot Component
// ─────────────────────────────────────────────────────────────

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hello! 👋 Welcome to Cire Paul Cruz's portfolio. I'm Cire AI — your portfolio assistant. Ask me anything about his skills, experience, projects, education, or career!"
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    const reply = findAnswer(userText);

    setMessages(prev => [
      ...prev,
      { sender: 'user', text: userText },
      { sender: 'bot', text: reply }
    ]);
    setInput('');
  };

  const quickQuestions = [
    "What are Cire's skills?",
    "Tell me about his experience",
    "What projects has he built?",
  ];

  const handleQuick = (q) => {
    const reply = findAnswer(q);
    setMessages(prev => [
      ...prev,
      { sender: 'user', text: q },
      { sender: 'bot', text: reply }
    ]);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-16 right-0 w-80 sm:w-96 rounded-2xl border border-white/[0.08] bg-surface-100 shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col h-[30rem]"
            >
              {/* Header */}
              <div className="bg-accent/[0.04] border-b border-white/[0.06] p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-9 w-9 shrink-0 overflow-hidden rounded-xl border border-accent/20 bg-accent/[0.06]">
                    <img src="/Portfolio/img/2X2.png" alt="Avatar" className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Cire AI</h3>
                    <p className="text-[0.65rem] text-accent flex items-center gap-1">
                      <span className="pulse-dot" style={{ width: 4, height: 4 }} />
                      Portfolio Assistant
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex h-7 w-7 items-center justify-center rounded-lg text-white/30 hover:text-white/60 hover:bg-white/[0.04] transition"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Message List */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-[0.8rem] leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-accent text-surface rounded-br-sm font-medium'
                          : 'bg-white/[0.04] text-white/65 rounded-bl-sm border border-white/[0.06]'
                      }`}
                    >
                      {msg.sender === 'bot' ? formatBotText(msg.text) : msg.text}
                    </div>
                  </div>
                ))}

                {/* Quick questions - show only when just the welcome message */}
                {messages.length === 1 && (
                  <div className="space-y-1.5 mt-2">
                    <p className="text-[0.65rem] text-white/25 font-medium">Quick questions:</p>
                    {quickQuestions.map((q, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleQuick(q)}
                        className="block w-full text-left text-[0.75rem] bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] hover:border-accent/15 text-white/45 hover:text-white/65 rounded-xl px-3 py-2 transition-all duration-200"
                      >
                        💬 {q}
                      </button>
                    ))}
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <form onSubmit={handleSend} className="p-3 border-t border-white/[0.06] bg-surface/50">
                <div className="relative">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask me anything..."
                    className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl pl-4 pr-12 py-2.5 text-[0.8rem] text-white placeholder-white/25 focus:outline-none focus:border-accent/30 transition"
                  />
                  <button
                    type="submit"
                    disabled={!input.trim()}
                    className="absolute right-1.5 top-1.5 bottom-1.5 aspect-square bg-accent rounded-lg flex items-center justify-center text-surface hover:bg-accent-dim transition disabled:opacity-40"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="h-12 w-12 rounded-xl bg-accent/10 border border-accent/20 text-accent shadow-[0_0_24px_rgba(34,197,94,0.15)] flex items-center justify-center hover:bg-accent/20 hover:shadow-[0_0_32px_rgba(34,197,94,0.25)] transition-all duration-300"
          aria-label="Toggle chat"
        >
          {isOpen ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
          )}
        </button>
      </div>
    </>
  );
}
