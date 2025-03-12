
import React from 'react';
import { cn } from '@/lib/utils';
import { Plus, LucideIcon, MessageSquare, Clock, Sparkles, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ChatHistoryItem {
  id: string;
  title: string;
  snippet: string;
  date: string;
  isSelected?: boolean;
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  chatHistory: ChatHistoryItem[];
  onNewChat: () => void;
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  chatHistory,
  onNewChat,
  className
}) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-foreground/5 backdrop-blur-sm z-40 md:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed top-16 left-0 h-[calc(100vh-4rem)] w-72 z-40",
          "bg-sidebar border-r border-border overflow-hidden transition-transform duration-300 ease-apple-in",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
          className
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="py-3 px-4 flex justify-between items-center border-b border-border">
            <h2 className="font-medium text-sm">Chat History</h2>
            <button
              onClick={onNewChat}
              className="p-1.5 rounded-full hover:bg-sidebar-accent transition-colors duration-200"
            >
              <Plus size={18} className="text-sidebar-foreground" />
            </button>
          </div>
          
          {/* Chat list */}
          <div className="flex-1 overflow-y-auto hide-scrollbar p-2">
            {chatHistory.length > 0 ? (
              <div className="space-y-1">
                {chatHistory.map((chat) => (
                  <Link
                    key={chat.id}
                    to={`/chat/${chat.id}`}
                    className={cn(
                      "block p-2 rounded-md transition-colors duration-200 group",
                      chat.isSelected 
                        ? "bg-sidebar-accent text-sidebar-accent-foreground" 
                        : "hover:bg-sidebar-accent/50"
                    )}
                  >
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-sm truncate">{chat.title}</h3>
                      <span className="text-xs text-sidebar-foreground/70 pt-0.5">{chat.date}</span>
                    </div>
                    <p className="text-xs text-sidebar-foreground/70 truncate mt-1">{chat.snippet}</p>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center p-4">
                <MessageSquare size={24} className="text-sidebar-foreground/50 mb-2" />
                <p className="text-sm text-sidebar-foreground/70">No chats yet</p>
                <p className="text-xs text-sidebar-foreground/50 mt-1">
                  Start a new chat to see your history here
                </p>
              </div>
            )}
          </div>
          
          {/* Mobile close button */}
          <div className="md:hidden p-3 border-t border-border">
            <button
              onClick={onClose}
              className="w-full py-2 px-3 rounded-md bg-sidebar-accent hover:bg-sidebar-accent/80 
                         transition-colors duration-200 text-sm font-medium flex items-center justify-center"
            >
              <X size={16} className="mr-2" />
              Close sidebar
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
