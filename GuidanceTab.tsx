import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChatMessage, UserProfile } from '../../types';
import { 
  Bot, 
  Send, 
  Sparkles, 
  User, 
  Copy, 
  Check, 
  RefreshCw, 
  HelpCircle,
  ExternalLink,
  Target,
  Building2,
  Compass,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface Props {
  user: UserProfile | null;
  initialPrompt?: string;
}

export const GuidanceTab: React.FC<Props> = ({ user, initialPrompt }) => {
  // Onboarding profile state gathered from diagnostic questions
  const [selectedClass, setSelectedClass] = useState<string>(user?.currentClass || 'Class 10');
  const [selectedStream, setSelectedStream] = useState<string>(user?.preferredStream || 'Science (PCM)');
  const [selectedState, setSelectedState] = useState<string>('Delhi NCR');
  const [selectedBudget, setSelectedBudget] = useState<string>('₹1-3 Lakhs/yr');

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'ai',
      text: `### 📌 Summary\nHello ${user ? user.name.split(' ')[0] : 'there'}! I am **MEUU AI**, your dedicated academic counselor and career mentor.\n\n### 🧭 Step-by-Step Guidance\nBefore I construct your tailored roadmap, let me know if you would like to refine your profile details:\n- **Current Class**: ${selectedClass}\n- **Target Stream**: ${selectedStream}\n- **Home Region**: ${selectedState}\n- **Annual Budget**: ${selectedBudget}\n\n### ⏱️ Timeline\n- **Immediate**: Complete diagnostic profile below\n- **Next 3 Months**: Exam strategy & stream finalization\n\n### 🎯 Recommended Next Action\nTap any quick diagnostic button below or ask your specific question!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestions: [
        "Which stream should I choose after Class 10?",
        "Top Entrance Exams for Engineering & Medical",
        "How to prepare for CUET while managing Class 12 Boards?",
        "Government Scholarships for students with 80%+ score"
      ]
    }
  ]);

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [thinkingStep, setThinkingStep] = useState('Analyzing profile...');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    if (initialPrompt) {
      handleSend(initialPrompt);
    }
  }, [initialPrompt]);

  const handleSend = async (textToSend?: string) => {
    const queryText = textToSend || input;
    if (!queryText.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: queryText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsLoading(true);

    // Dynamic thinking steps animation
    const steps = [
      'Searching entrance databases...',
      'Analyzing NIRF cutoffs & eligibility...',
      'Synthesizing personalized career roadmap...'
    ];
    let stepIndex = 0;
    const interval = setInterval(() => {
      stepIndex = (stepIndex + 1) % steps.length;
      setThinkingStep(steps[stepIndex]);
    }, 800);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: queryText,
          context: `Student Class: ${selectedClass}, Target Stream: ${selectedStream}, State: ${selectedState}, Budget: ${selectedBudget}`,
        }),
      });

      const data = await response.json();
      const aiReply: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: data.reply || "### 📌 Summary\nI am analyzing your educational pathway. What specific stream, college, or exam query can I answer for you?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestions: data.suggestions || [
          "Tell me more about preparation strategy",
          "What are the top government scholarships?",
          "Compare Engineering vs Management options"
        ]
      };

      setMessages((prev) => [...prev, aiReply]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'ai',
          text: `### 📌 Summary\nI am here to guide you through your academic journey!\n\n### 🧭 Step-by-Step Guidance\n1. **Evaluate Streams**: Explore Science (PCM/PCB), Commerce, or Arts based on Class 10 aptitude.\n2. **Target Exams**: Keep track of JEE, NEET, CUET, and BITSAT registration dates.\n3. **Explore Colleges**: Target top NIRF-ranked institutions.\n\n### 🎯 Recommended Next Action\nUse our built-in Stream Finder, Exam Tracker, and College Matcher modules in MEUU AI!`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      clearInterval(interval);
      setIsLoading(false);
    }
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleChipSelection = (type: 'class' | 'stream' | 'state' | 'budget', value: string) => {
    if (type === 'class') setSelectedClass(value);
    if (type === 'stream') setSelectedStream(value);
    if (type === 'state') setSelectedState(value);
    if (type === 'budget') setSelectedBudget(value);

    handleSend(`Updated my ${type} to ${value}. Please provide customized recommendations for ${value}.`);
  };

  return (
    <div className="w-full h-[calc(100vh-140px)] flex flex-col justify-between text-left pb-2">
      
      {/* Top Mentor Header */}
      <div className="px-3 py-2 rounded-2xl glass-panel bg-slate-900/90 border border-cyan-500/30 flex items-center justify-between text-xs text-slate-300 mb-2 shadow-md shrink-0">
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center border border-cyan-400/30">
            <Bot className="w-4 h-4 text-cyan-400 animate-pulse" />
          </div>
          <div>
            <span className="font-display font-extrabold text-xs text-white block">MEUU AI Education Mentor</span>
            <span className="text-[9px] text-cyan-300">24/7 Professional Career Guidance</span>
          </div>
        </div>

        <div className="flex items-center space-x-1 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-[10px] text-emerald-300 font-bold">
          <ShieldCheck className="w-3 h-3 text-emerald-400" />
          <span>Verified Mentor</span>
        </div>
      </div>

      {/* Interactive Quick Diagnostic Pills Bar */}
      <div className="p-2.5 rounded-2xl glass-panel bg-slate-950/80 border border-white/10 mb-2 space-y-2 shrink-0">
        <div className="flex items-center justify-between text-[10px] font-bold text-slate-300">
          <span className="flex items-center space-x-1">
            <HelpCircle className="w-3 h-3 text-cyan-400" />
            <span>Diagnostic Profile:</span>
          </span>
          <span className="text-cyan-300 font-mono">{selectedClass} • {selectedStream}</span>
        </div>

        {/* Quick Diagnostic Options */}
        <div className="space-y-1.5 text-[10px]">
          {/* Class selector */}
          <div className="flex items-center space-x-1 overflow-x-auto pb-0.5 scrollbar-none">
            <span className="text-slate-400 shrink-0 font-semibold mr-1">Class:</span>
            {['Class 10', 'Class 11', 'Class 12', 'Undergrad'].map((c) => (
              <button
                key={c}
                onClick={() => handleChipSelection('class', c)}
                className={`px-2 py-0.5 rounded-lg border font-bold transition-all cursor-pointer whitespace-nowrap ${
                  selectedClass === c
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-sm'
                    : 'bg-slate-900 text-slate-300 border-white/10 hover:bg-slate-800'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Stream selector */}
          <div className="flex items-center space-x-1 overflow-x-auto pb-0.5 scrollbar-none">
            <span className="text-slate-400 shrink-0 font-semibold mr-1">Stream:</span>
            {['Science (PCM)', 'Science (PCB)', 'Commerce', 'Arts'].map((s) => (
              <button
                key={s}
                onClick={() => handleChipSelection('stream', s)}
                className={`px-2 py-0.5 rounded-lg border font-bold transition-all cursor-pointer whitespace-nowrap ${
                  selectedStream === s
                    ? 'bg-blue-600 text-white border-blue-400 shadow-sm'
                    : 'bg-slate-900 text-slate-300 border-white/10 hover:bg-slate-800'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Chat Messages Stream (Modern ChatGPT Layout) */}
      <div className="flex-1 overflow-y-auto space-y-3.5 pr-1 py-1 scrollbar-none">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
          >
            {/* Sender Badge */}
            <div className="flex items-center space-x-1.5 mb-1 px-1">
              {msg.sender === 'ai' ? (
                <>
                  <div className="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center border border-cyan-400/30">
                    <Sparkles className="w-2.5 h-2.5 text-cyan-400" />
                  </div>
                  <span className="text-[10px] font-extrabold text-cyan-300 uppercase tracking-wider">MEUU AI</span>
                </>
              ) : (
                <>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">You</span>
                  <div className="w-4 h-4 rounded-full bg-blue-500/20 text-blue-300 flex items-center justify-center border border-blue-400/30">
                    <User className="w-2.5 h-2.5 text-blue-400" />
                  </div>
                </>
              )}
              <span className="text-[9px] text-slate-500">• {msg.timestamp}</span>
            </div>

            {/* Bubble Container */}
            <div
              className={`max-w-[92%] p-4 rounded-3xl text-xs leading-relaxed transition-all ${
                msg.sender === 'user'
                  ? 'bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-slate-950 font-semibold rounded-tr-none shadow-lg'
                  : 'glass-panel border border-cyan-500/25 text-slate-100 rounded-tl-none bg-slate-900/95 shadow-xl'
              }`}
            >
              {/* Render Structured Text cleanly */}
              <div className="space-y-2">
                {msg.text.split('\n\n').map((block, bIdx) => {
                  if (block.startsWith('### ')) {
                    const lines = block.split('\n');
                    const header = lines[0].replace('### ', '');
                    const content = lines.slice(1).join('\n');

                    return (
                      <div key={bIdx} className="space-y-1 my-1.5">
                        <h4 className="font-display font-extrabold text-xs text-cyan-300 uppercase tracking-wider border-b border-white/10 pb-0.5">
                          {header}
                        </h4>
                        <div className="text-slate-200 text-xs leading-relaxed pl-1 whitespace-pre-line font-sans">
                          {content}
                        </div>
                      </div>
                    );
                  }

                  return (
                    <p key={bIdx} className="whitespace-pre-line font-sans text-slate-200">
                      {block}
                    </p>
                  );
                })}
              </div>

              {/* Bottom Actions for AI Message */}
              {msg.sender === 'ai' && (
                <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400">
                  <span className="font-mono text-cyan-400">MEUU AI Verified Advice</span>
                  <button
                    onClick={() => handleCopy(msg.id, msg.text)}
                    className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    {copiedId === msg.id ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400 font-bold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Answer</span>
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* Quick Suggestion Chips */}
            {msg.suggestions && msg.suggestions.length > 0 && (
              <div className="w-full flex flex-wrap gap-1.5 mt-2 px-1">
                {msg.suggestions.map((sug, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(sug)}
                    className="text-[10px] text-cyan-300 bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/30 hover:border-cyan-400 px-3 py-1 rounded-full text-left transition-all cursor-pointer shadow-sm flex items-center space-x-1"
                  >
                    <Sparkles className="w-3 h-3 text-cyan-400 shrink-0" />
                    <span>{sug}</span>
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        ))}

        {/* Loading / Thinking State */}
        {isLoading && (
          <div className="flex items-center space-x-2.5 p-3.5 glass-panel rounded-2xl max-w-[240px] text-xs text-cyan-300 border border-cyan-500/30 shadow-lg">
            <RefreshCw className="w-4 h-4 animate-spin text-cyan-400" />
            <span className="font-semibold text-[11px] animate-pulse">{thinkingStep}</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Box Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="w-full pt-2 shrink-0"
      >
        <div className="relative flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about streams, entrance exams, colleges, scholarships..."
            className="w-full pl-4 pr-12 py-3 rounded-2xl glass-panel bg-slate-950/95 border border-cyan-500/40 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 shadow-2xl"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="absolute right-2 p-2 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-slate-950 disabled:opacity-40 hover:scale-105 transition-transform cursor-pointer shadow-md"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
};
