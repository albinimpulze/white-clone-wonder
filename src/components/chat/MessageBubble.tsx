
import React from 'react';
import { cn } from '@/lib/utils';
import { Sparkles, User, Copy, ThumbsUp, ThumbsDown } from 'lucide-react';

export interface MessageProps {
  content: string;
  role: 'user' | 'assistant';
  timestamp?: string;
  isLoading?: boolean;
}

const MessageBubble: React.FC<MessageProps> = ({
  content,
  role,
  timestamp,
  isLoading = false
}) => {
  const isAI = role === 'assistant';
  
  return (
    <div className={cn(
      "flex w-full p-4 animate-fade-in",
      isAI ? "bg-secondary/50" : "bg-white"
    )}>
      <div className="flex-shrink-0 mr-4">
        <div className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center",
          isAI ? "bg-primary text-primary-foreground" : "bg-secondary"
        )}>
          {isAI ? <Sparkles size={16} /> : <User size={16} />}
        </div>
      </div>
      
      <div className="flex-1 max-w-3xl">
        <div className="flex items-center mb-1">
          <span className="font-medium text-sm">
            {isAI ? "Perplexity" : "You"}
          </span>
          {timestamp && (
            <span className="text-xs text-muted-foreground ml-2">
              {timestamp}
            </span>
          )}
        </div>
        
        <div className="prose prose-sm max-w-none">
          {isLoading ? (
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary/40 rounded-full animate-pulse-subtle" />
              <div className="w-2 h-2 bg-primary/40 rounded-full animate-pulse-subtle [animation-delay:0.2s]" />
              <div className="w-2 h-2 bg-primary/40 rounded-full animate-pulse-subtle [animation-delay:0.4s]" />
            </div>
          ) : (
            <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
              {content}
            </p>
          )}
        </div>
        
        {isAI && !isLoading && (
          <div className="flex items-center mt-3 space-x-2">
            <button className="p-1.5 rounded-full hover:bg-secondary transition-colors duration-200">
              <Copy size={14} className="text-muted-foreground" />
            </button>
            <button className="p-1.5 rounded-full hover:bg-secondary transition-colors duration-200">
              <ThumbsUp size={14} className="text-muted-foreground" />
            </button>
            <button className="p-1.5 rounded-full hover:bg-secondary transition-colors duration-200">
              <ThumbsDown size={14} className="text-muted-foreground" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;
