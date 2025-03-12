
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 h-16 px-4 glass border-b border-border/40",
      className
    )}>
      <nav className="h-full max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link 
            to="/"
            className="font-medium text-xl tracking-tight hover:opacity-80 transition-opacity duration-200"
          >
            Perplexity
          </Link>
          
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              to="/chat"
              className="px-3 py-2 rounded-md text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-secondary/80 transition-all duration-200"
            >
              Chat
            </Link>
            <Link 
              to="/discover"
              className="px-3 py-2 rounded-md text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-secondary/80 transition-all duration-200"
            >
              Discover
            </Link>
            <Link 
              to="/library"
              className="px-3 py-2 rounded-md text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-secondary/80 transition-all duration-200"
            >
              Library
            </Link>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-secondary/80 transition-all duration-200">
            <Search className="h-5 w-5 text-foreground/80" />
          </button>
          
          <button className="hidden md:block p-2 rounded-full hover:bg-secondary/80 transition-all duration-200">
            <User className="h-5 w-5 text-foreground/80" />
          </button>
          
          <button className="md:hidden p-2 rounded-full hover:bg-secondary/80 transition-all duration-200">
            <Menu className="h-5 w-5 text-foreground/80" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
