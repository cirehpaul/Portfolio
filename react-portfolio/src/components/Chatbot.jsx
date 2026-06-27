import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import content from '../data/content';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [apiKey, setApiKey] = useState(
    import.meta.env.VITE_GEMINI_API_KEY || localStorage.getItem('VITE_GEMINI_API_KEY') || ''
  );
  const [showSettings, setShowSettings] = useState(!apiKey);
  const [tempKey, setTempKey] = useState(apiKey);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: `Hi there! I'm ${content.hero.name.split(' ')[0]}'s virtual assistant, now powered by Gemini AI. Ask me anything about his resume, experience, skills, or contact info!` }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (!showSettings) {
      scrollToBottom();
    }
  }, [messages, isOpen, isLoading, showSettings]);

  const getGeminiResponse = async (userInput, conversationHistory) => {
    try {
      const { GoogleGenerativeAI } = await import('@google/generative-ai');
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        systemInstruction: `You are a virtual assistant for Cire Paul Bernardo Cruz, a professional Application Support Analyst and Mobile Developer.
Your goal is to answer questions about his resume, experience, skills, education, projects, certifications, or contact info.

Here is Cire's profile and resume data:
${JSON.stringify(content, null, 2)}

Strict Guidelines:
1. Be extremely concise, friendly, and professional.
2. Rely strictly on the provided portfolio data. If the user asks something not present in the data, answer politely that you don't know that specific detail, and suggest they contact Cire directly.
3. Do not make up facts, experiences, or achievements.
4. Keep answers short (usually 1-3 sentences or bullet points) since you are rendering in a small chat widget.
5. Address the user directly and warmly.
`
      });

      // Keep only last 6 messages to keep token context small and context transitions fast
      const recentHistory = conversationHistory.slice(-6);
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
      return `Sorry, I encountered an error while communicating with Gemini. Please make sure your API key is correct and valid. (Details: ${error.message})`;
    }
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!apiKey) {
      setShowSettings(true);
      return;
    }
    if (!input.trim() || isLoading) return;

    const userMsgText = input.trim();
    const userMessage = { sender: 'user', text: userMsgText };

    // Save current message history for Gemini call before updating state
    const currentHistory = [...messages];

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const replyText = await getGeminiResponse(userMsgText, currentHistory);
      setMessages(prev => [...prev, { sender: 'bot', text: replyText }]);
    } catch (err) {
      setMessages(prev => [...prev, { sender: 'bot', text: "I'm sorry, I failed to get a response. Please check your API key." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveKey = (e) => {
    e.preventDefault();
    const cleanKey = tempKey.trim();
    if (cleanKey) {
      localStorage.setItem('VITE_GEMINI_API_KEY', cleanKey);
      setApiKey(cleanKey);
      setShowSettings(false);
    }
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
              className="absolute bottom-16 right-0 w-80 sm:w-96 rounded-2xl border border-white/10 bg-[#0a101d] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col h-[28rem]"
            >
              {/* Header */}
              <div className="bg-cyan/10 border-b border-white/10 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border border-white/10">
                    <img src="/Portfolio/img/2X2.png" alt="Avatar" className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Ask About Me</h3>
                    <p className="text-xs text-cyan flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      Gemini AI Active
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowSettings(!showSettings)}
                    className={`p-1.5 rounded hover:bg-white/5 transition ${showSettings ? 'text-cyan' : 'text-gray-400 hover:text-white'}`}
                    title="Gemini API Key Settings"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.43l-1.003.828c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.43l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-white transition"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Message List / Settings Panel */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {showSettings ? (
                  <div className="h-full flex flex-col justify-center items-center text-center space-y-4 px-4">
                    <div className="p-3 bg-cyan/10 text-cyan rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25h-2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Gemini API Key Required</h4>
                      <p className="text-xs text-gray-400 mt-2 max-w-[240px] mx-auto leading-relaxed">
                        To enable smart responses, please enter your Gemini API Key. It is saved in your browser's local storage and used directly to communicate with Google Gemini.
                      </p>
                    </div>
                    <form onSubmit={handleSaveKey} className="w-full max-w-[260px] space-y-2">
                      <input
                        type="password"
                        value={tempKey}
                        onChange={(e) => setTempKey(e.target.value)}
                        placeholder="Paste AIzaSy... key here"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan/50"
                        required
                      />
                      <div className="flex gap-2">
                        <button
                          type="submit"
                          className="flex-1 bg-cyan text-[#071026] text-xs font-semibold py-2 rounded-lg hover:bg-cyan/90 transition"
                        >
                          Save Key
                        </button>
                        {apiKey && (
                          <button
                            type="button"
                            onClick={() => {
                              localStorage.removeItem('VITE_GEMINI_API_KEY');
                              setApiKey('');
                              setTempKey('');
                              setShowSettings(true);
                            }}
                            className="flex-1 bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold py-2 rounded-lg hover:bg-red-500/20 transition"
                          >
                            Clear
                          </button>
                        )}
                      </div>
                    </form>
                    <div className="space-y-1">
                      <a
                        href="https://aistudio.google.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] text-cyan hover:underline"
                      >
                        Get a free Gemini API key from AI Studio
                      </a>
                      {apiKey && (
                        <button
                          type="button"
                          onClick={() => setShowSettings(false)}
                          className="text-[11px] text-gray-400 hover:text-white underline block mx-auto mt-1"
                        >
                          Back to Chat
                        </button>
                      )}
                    </div>
                  </div>
                ) : (
                  <>
                    {messages.map((msg, idx) => (
                      <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${msg.sender === 'user' ? 'bg-cyan text-[#071026] rounded-br-none font-medium' : 'bg-white/10 text-gray-200 rounded-bl-none border border-white/5'}`}>
                          {msg.text}
                        </div>
                      </div>
                    ))}
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
                  </>
                )}
              </div>

              {/* Input */}
              <form onSubmit={handleSend} className="p-3 border-t border-white/10 bg-black/20">
                <div className="relative">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={apiKey ? "Ask about experience, skills..." : "Please configure API Key..."}
                    disabled={showSettings || isLoading}
                    className="w-full bg-white/5 border border-white/10 rounded-full pl-4 pr-12 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan/50 transition disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={showSettings || isLoading || !input.trim()}
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
