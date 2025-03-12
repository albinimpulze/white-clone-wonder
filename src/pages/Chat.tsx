
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import ChatInterface from '@/components/chat/ChatInterface';
import Sidebar from '@/components/chat/Sidebar';
import { Menu } from 'lucide-react';

// Sample chat history data
const SAMPLE_CHAT_HISTORY = [
  {
    id: '1',
    title: 'Quantum Computing Basics',
    snippet: 'Can you explain quantum computing in simple terms?',
    date: '2h ago',
    isSelected: true
  },
  {
    id: '2',
    title: 'Climate Change Solutions',
    snippet: 'What are the most promising solutions to climate change?',
    date: '5h ago'
  },
  {
    id: '3',
    title: 'JavaScript Frameworks',
    snippet: 'Which JavaScript framework should I learn in 2023?',
    date: 'Yesterday'
  },
  {
    id: '4',
    title: 'Healthy Breakfast Ideas',
    snippet: 'Can you suggest some quick and healthy breakfast recipes?',
    date: '3 days ago'
  }
];

const Chat = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState(SAMPLE_CHAT_HISTORY);
  
  const handleNewChat = () => {
    // Would navigate to a new chat in a real application
    console.log('Creating new chat');
    
    // Update selected chat in the history
    const updatedHistory = chatHistory.map(chat => ({
      ...chat,
      isSelected: false
    }));
    
    const newChat = {
      id: Date.now().toString(),
      title: 'New Chat',
      snippet: 'What would you like to know?',
      date: 'Just now',
      isSelected: true
    };
    
    setChatHistory([newChat, ...updatedHistory]);
    setSidebarOpen(false);
  };
  
  return (
    <div className="flex min-h-screen bg-background">
      <Navbar />
      
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        chatHistory={chatHistory}
        onNewChat={handleNewChat}
      />
      
      <main className="flex-1 pt-16 flex flex-col min-h-screen">
        {/* Mobile menu toggle */}
        <div className="md:hidden fixed left-4 top-[4.5rem] z-30">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-full bg-white shadow-sm hover:bg-secondary/80 transition-colors duration-200"
          >
            <Menu size={20} />
          </button>
        </div>
        
        <ChatInterface className="flex-1 md:ml-72" />
      </main>
    </div>
  );
};

export default Chat;
