
import React, { useState, useRef, useEffect } from 'react';
import { ArrowUp, Sparkles, Search, Image, Mic } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SearchInputProps {
  onSubmit: (message: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  onSubmit,
  placeholder = "Ask anything...",
  disabled = false,
  className
}) => {
  const [input, setInput] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
  // Auto-resize textarea based on content
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(120, textareaRef.current.scrollHeight)}px`;
    }
  }, [input]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !disabled) {
      onSubmit(input.trim());
      setInput('');
      
      // Reset textarea height
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };
  
  return (
    <form 
      onSubmit={handleSubmit}
      className={cn(
        "w-full max-w-3xl mx-auto relative glass rounded-xl transition-all duration-300",
        "hover:shadow-md focus-within:shadow-md",
        disabled && "opacity-75",
        className
      )}
    >
      <div className="relative flex items-end w-full">
        <div className="flex-none pl-3 py-3">
          <Search className="h-5 w-5 text-muted-foreground" />
        </div>
        
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          rows={1}
          className={cn(
            "flex-1 resize-none bg-transparent border-0 focus:ring-0 focus:outline-none",
            "py-3 px-2 text-base placeholder:text-muted-foreground",
            "max-h-[120px] overflow-y-auto hide-scrollbar"
          )}
        />
        
        <div className="flex items-center space-x-1 px-2 py-2">
          <button 
            type="button"
            className="p-1.5 rounded-full hover:bg-secondary transition-colors duration-200"
            disabled={disabled}
          >
            <Image size={18} className="text-muted-foreground" />
          </button>
          
          <button 
            type="button"
            className="p-1.5 rounded-full hover:bg-secondary transition-colors duration-200"
            disabled={disabled}
          >
            <Mic size={18} className="text-muted-foreground" />
          </button>
          
          <button 
            type="submit"
            className={cn(
              "p-2 rounded-full transition-colors duration-200",
              input.trim() 
                ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                : "bg-secondary text-muted-foreground hover:bg-secondary/80"
            )}
            disabled={disabled || !input.trim()}
          >
            {input.trim() ? <ArrowUp size={18} /> : <Sparkles size={18} />}
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchInput;
