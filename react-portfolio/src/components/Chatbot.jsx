import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import content from '../data/content';

// Hardcoded API key for direct frontend usage
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';

// Simple markdown-like formatter for bot messages
function formatBotText(text) {
  if (!text) return text;

  // Split into lines
  const lines = text.split('\n');
  const elements = [];
  let listItems = [];
  let listType = null; // 'ul' or 'ol'

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
    // Bold: **text**
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

    // Bullet list: * item or - item
    const bulletMatch = trimmed.match(/^[\*\-]\s+(.+)/);
    if (bulletMatch) {
      if (listType !== 'ul') flushList();
      listType = 'ul';
      listItems.push(<li key={`li-${idx}`}>{formatInline(bulletMatch[1], `li-${idx}`)}</li>);
      return;
    }

    // Numbered list: 1. item
    const numMatch = trimmed.match(/^\d+\.\s+(.+)/);
    if (numMatch) {
      if (listType !== 'ol') flushList();
      listType = 'ol';
      listItems.push(<li key={`li-${idx}`}>{formatInline(numMatch[1], `li-${idx}`)}</li>);
      return;
    }

    // Otherwise flush any pending list and add as paragraph
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

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: `Hi there! 👋 I'm ${content.hero.name.split(' ')[0]}'s AI assistant powered by Gemini. I can answer **any question** you have — whether it's about his experience, skills, projects, or anything else! How can I help you today?`
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isLoading]);

  const getGeminiResponse = async (userInput, conversationHistory) => {
    try {
      const { GoogleGenerativeAI } = await import('@google/generative-ai');
      const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({
        model: 'antigravity-preview-05-2026',
        systemInstruction: `You are a friendly, knowledgeable AI virtual assistant embedded on the portfolio website of Cire Paul Bernardo Cruz.

CORE CAPABILITIES:
You can answer ANY question the user asks — whether it's about Cire's portfolio, general knowledge, technology, coding help, career advice, or anything else.

PORTFOLIO CONTEXT:
When the user asks about Cire, his resume, skills, experience, projects, education, certifications, or contact info, use this data:
${JSON.stringify(content, null, 2)}

BEHAVIORAL GUIDELINES:
1. Be warm, conversational, and helpful — like talking to a knowledgeable friend.
2. For portfolio-related questions, rely on the data provided above. If a specific detail isn't in the data, say so honestly and suggest contacting Cire directly.
3. For general questions (tech, coding, science, math, history, advice, etc.), answer to the best of your ability with accurate, helpful information.
4. Keep responses concise and well-structured since you're in a small chat widget. Use bullet points and bold text for clarity.
5. Use markdown-like formatting: **bold** for emphasis, bullet points with * or -, numbered lists with 1. 2. 3.
6. Never fabricate information about Cire that isn't in the provided data.
7. If asked about things you genuinely don't know, be honest about it.
8. Be proactive — suggest related topics or follow-up questions when appropriate.
`
      });

      // Keep last 10 messages for better context
      const recentHistory = conversationHistory.slice(-10);
      const contents = [
        ...recentHistory.map(m => ({
          role: m.sender === 'user' ? 'user' : 'model',
          parts: [{ text: m.text }]
        })),
        { role: 'user', parts: [{ text: userInput }] }
      ];

      const result = await model.generateContent({ contents });
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Error fetching Gemini response:', error);
      if (error.message?.includes('API key')) {
        return `⚠️ There seems to be an issue with the AI service configuration. Please try again later or contact Cire directly at cirepaulcruz21@gmail.com.`;
      }
      return `Sorry, I encountered an error. Please try again in a moment. If the issue persists, feel free to reach out to Cire directly!`;
    }
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    if (!GEMINI_API_KEY || GEMINI_API_KEY === 'YOUR_GEMINI_API_KEY_HERE') {
      setMessages(prev => [
        ...prev,
        { sender: 'user', text: input.trim() },
        { sender: 'bot', text: '⚠️ The AI assistant is not configured yet. Please contact Cire directly at **cirepaulcruz21@gmail.com** for any questions!' }
      ]);
      setInput('');
      return;
    }

    const userMsgText = input.trim();
    const userMessage = { sender: 'user', text: userMsgText };
    const currentHistory = [...messages];

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const replyText = await getGeminiResponse(userMsgText, currentHistory);
      setMessages(prev => [...prev, { sender: 'bot', text: replyText }]);
    } catch (err) {
      setMessages(prev => [
        ...prev,
        { sender: 'bot', text: "I'm sorry, something went wrong. Please try again!" }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickQuestions = [
    "What are Cire's skills?",
    "Tell me about his experience",
    "What projects has he built?",
  ];

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
              className="absolute bottom-16 right-0 w-80 sm:w-96 rounded-2xl border border-white/10 bg-[#0a101d] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col h-[28rem]"
            >
              {/* Header */}
              <div className="bg-cyan/10 border-b border-white/10 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border border-white/10">
                    <img src="/Portfolio/img/2X2.png" alt="Avatar" className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Ask Me Anything</h3>
                    <p className="text-xs text-cyan flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      Gemini AI Powered
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition"
                >
                  ✕
                </button>
              </div>

              {/* Message List */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-cyan text-[#071026] rounded-br-none font-medium'
                          : 'bg-white/10 text-gray-200 rounded-bl-none border border-white/5'
                      }`}
                    >
                      {msg.sender === 'bot' ? formatBotText(msg.text) : msg.text}
                    </div>
                  </div>
                ))}

                {/* Quick questions - show only when just the welcome message exists */}
                {messages.length === 1 && !isLoading && (
                  <div className="space-y-2 mt-2">
                    <p className="text-xs text-gray-500 font-medium">Quick questions:</p>
                    {quickQuestions.map((q, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setInput(q);
                          // Auto-submit
                          const fakeEvent = { preventDefault: () => {} };
                          setInput('');
                          const userMessage = { sender: 'user', text: q };
                          const currentHistory = [...messages];
                          setMessages(prev => [...prev, userMessage]);
                          setIsLoading(true);
                          getGeminiResponse(q, currentHistory).then(replyText => {
                            setMessages(prev => [...prev, { sender: 'bot', text: replyText }]);
                          }).catch(() => {
                            setMessages(prev => [...prev, { sender: 'bot', text: "Sorry, something went wrong. Please try again!" }]);
                          }).finally(() => {
                            setIsLoading(false);
                          });
                        }}
                        className="block w-full text-left text-xs bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan/30 text-gray-300 hover:text-white rounded-xl px-3 py-2 transition"
                      >
                        💬 {q}
                      </button>
                    ))}
                  </div>
                )}

                {isLoading && (
                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-2xl px-4 py-2 text-sm bg-white/10 text-gray-300 rounded-bl-none border border-white/5 flex items-center space-x-1.5">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <form onSubmit={handleSend} className="p-3 border-t border-white/10 bg-black/20">
                <div className="relative">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask me anything..."
                    disabled={isLoading}
                    className="w-full bg-white/5 border border-white/10 rounded-full pl-4 pr-12 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan/50 transition disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="absolute right-1 top-1 bottom-1 aspect-square bg-cyan rounded-full flex items-center justify-center text-[#071026] hover:bg-cyan/90 transition disabled:opacity-50"
                  >
                    {isLoading ? (
                      <svg className="animate-spin h-4 w-4 text-[#071026]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      "➤"
                    )}
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
