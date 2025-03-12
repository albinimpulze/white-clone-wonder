
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import MessageBubble from './MessageBubble';
import SearchInput from './SearchInput';
import { useToast } from '@/hooks/use-toast';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: string;
}

interface ChatInterfaceProps {
  className?: string;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    content: 'Hello! I'm Perplexity, a helpful AI assistant ready to answer your questions and provide information on a wide range of topics. How can I help you today?',
    role: 'assistant',
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }
];

// Simulated AI responses
const AI_RESPONSES = [
  "I'd be happy to help with that. Based on the latest information available, here's what I can tell you...",
  "That's an interesting question. There are several perspectives to consider here...",
  "According to reliable sources, the data shows that...",
  "I understand you're asking about this topic. Let me provide you with a comprehensive answer...",
  "Here's what research indicates on this subject. Several studies have found that..."
];

const ChatInterface: React.FC<ChatInterfaceProps> = ({ className }) => {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const generateRandomResponse = () => {
    return AI_RESPONSES[Math.floor(Math.random() * AI_RESPONSES.length)];
  };
  
  const handleSubmit = (message: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: message,
      role: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: generateRandomResponse(),
        role: 'assistant',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };
  
  return (
    <div className={cn("flex flex-col w-full", className)}>
      {/* Messages container */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto w-full">
          {messages.map((message) => (
            <MessageBubble
              key={message.id}
              content={message.content}
              role={message.role}
              timestamp={message.timestamp}
            />
          ))}
          
          {isLoading && (
            <MessageBubble
              content=""
              role="assistant"
              isLoading={true}
            />
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      {/* Input field */}
      <div className="sticky bottom-0 py-4 px-4 bg-gradient-to-t from-background via-background to-transparent">
        <SearchInput
          onSubmit={handleSubmit}
          disabled={isLoading}
        />
      </div>
    </div>
  );
};

export default ChatInterface;
