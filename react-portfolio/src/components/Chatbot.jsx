import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import content from '../data/content';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: `Hi there! I'm ${content.hero.name.split(' ')[0]}'s virtual assistant. Ask me anything about his resume, experience, skills, or contact info!` }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const getBotResponse = (userInput) => {
    const text = userInput.toLowerCase();
    
    if (text.includes('name') || text.includes('who are you')) {
      return `His full name is ${content.hero.name}.`;
    }
    if (text.includes('email') || text.includes('contact') || text.includes('phone') || text.includes('reach')) {
      return `You can reach him via email at ${content.contact.email.replace('mailto:', '')} or connect on LinkedIn.`;
    }
    if (text.includes('address') || text.includes('location') || text.includes('where')) {
      return `He is currently based in ${content.about.address}.`;
    }
    if (text.includes('education') || text.includes('degree') || text.includes('school') || text.includes('university') || text.includes('college')) {
      const schools = content.education.map(e => e.institution).join(', ');
      return `He has a ${content.about.degree}. His educational background includes: ${schools}.`;
    }
    if (text.includes('experience') || text.includes('work') || text.includes('job') || text.includes('career')) {
      const jobs = content.experience.map(e => `${e.title} at ${e.company}`).join(', and ');
      return `He has experience as: ${jobs}.`;
    }
    if (text.includes('skill') || text.includes('tech') || text.includes('stack')) {
      return `His core skills include: ${content.skills.technical[0].split(': ')[1]}, plus Android development (Jetpack Compose, MVVM) and Web development (React).`;
    }
    if (text.includes('project') || text.includes('portfolio')) {
      return `One of his main projects is "${content.projects.capstone.title}". He also has experience building delivery apps and cognitive development games.`;
    }
    if (text.includes('objective') || text.includes('summary') || text.includes('about')) {
      return content.about.objective;
    }
    if (text.includes('certif')) {
      return `He has ${content.certifications.length} certifications, including topics like Data Analysis, SQL, and AI.`;
    }

    return "I'm not exactly sure about that. You can ask me about his experience, education, skills, projects, or contact info!";
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    setTimeout(() => {
      const botResponse = { sender: 'bot', text: getBotResponse(userMessage.text) };
      setMessages(prev => [...prev, botResponse]);
    }, 600);
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
              className="absolute bottom-16 right-0 w-80 sm:w-96 rounded-2xl border border-white/10 bg-[#0a101d] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col h-[26rem]"
            >
              {/* Header */}
              <div className="bg-cyan/10 border-b border-white/10 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border border-white/10">
                    <img src="/Portfolio/img/2X2.png" alt="Avatar" className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Ask About Me</h3>
                    <p className="text-xs text-cyan">Online</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition"
                >
                  ✕
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${msg.sender === 'user' ? 'bg-cyan text-[#071026] rounded-br-none font-medium' : 'bg-white/10 text-gray-200 rounded-bl-none border border-white/5'}`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <form onSubmit={handleSend} className="p-3 border-t border-white/10 bg-black/20">
                <div className="relative">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about my experience..."
                    className="w-full bg-white/5 border border-white/10 rounded-full pl-4 pr-12 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan/50 transition"
                  />
                  <button 
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 aspect-square bg-cyan rounded-full flex items-center justify-center text-[#071026] hover:bg-cyan/90 transition"
                  >
                    ➤
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="h-14 w-14 rounded-full bg-cyan text-[#071026] shadow-[0_0_20px_rgba(0,212,255,0.4)] flex items-center justify-center text-2xl hover:scale-105 transition transform"
        >
          {isOpen ? '✕' : '💬'}
        </button>
      </div>
    </>
  );
}
