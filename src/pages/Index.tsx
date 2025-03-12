
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import SearchInput from '@/components/chat/SearchInput';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Search, Sparkles, Globe, Zap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleSearch = (query: string) => {
    toast({
      title: "Starting new chat",
      description: `Searching for: ${query}`,
    });
    navigate('/chat');
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16 px-4">
        {/* Hero section */}
        <section className="max-w-5xl mx-auto pt-16 pb-12 md:pt-24 md:pb-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-in">
            Find answers fast with Perplexity AI
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in [animation-delay:0.1s]">
            Get comprehensive answers from across the web and AI in seconds
          </p>
          
          <div className="mt-10 md:mt-12 max-w-2xl mx-auto animate-fade-in [animation-delay:0.2s]">
            <SearchInput 
              onSubmit={handleSearch}
              placeholder="Ask anything..."
              className="shadow-lg"
            />
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-3 animate-fade-in [animation-delay:0.3s]">
            <button 
              onClick={() => handleSearch("What is Perplexity AI?")}
              className="px-4 py-2 bg-secondary rounded-full text-sm text-foreground/80 hover:bg-secondary/70 transition-colors duration-200"
            >
              What is Perplexity AI?
            </button>
            <button
              onClick={() => handleSearch("Latest advancements in AI")} 
              className="px-4 py-2 bg-secondary rounded-full text-sm text-foreground/80 hover:bg-secondary/70 transition-colors duration-200"
            >
              Latest advancements in AI
            </button>
            <button
              onClick={() => handleSearch("How to learn programming")} 
              className="px-4 py-2 bg-secondary rounded-full text-sm text-foreground/80 hover:bg-secondary/70 transition-colors duration-200"
            >
              How to learn programming
            </button>
          </div>
        </section>
        
        {/* Features section */}
        <section className="max-w-6xl mx-auto py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-border/50 animate-fade-in [animation-delay:0.4s]">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-5">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Search</h3>
              <p className="text-muted-foreground">
                Get comprehensive answers with sources from across the web, organized for quick understanding.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-border/50 animate-fade-in [animation-delay:0.5s]">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-5">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered</h3>
              <p className="text-muted-foreground">
                Advanced AI technology understands your questions and provides clear, accurate responses.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-border/50 animate-fade-in [animation-delay:0.6s]">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-5">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Get answers in seconds, not minutes. Perplexity does the research so you don't have to.
              </p>
            </div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="max-w-4xl mx-auto py-12 md:py-16 px-4">
          <div className="bg-secondary/50 rounded-xl p-8 md:p-12 text-center border border-border/50 animate-fade-in [animation-delay:0.7s]">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Start exploring with Perplexity AI
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're researching, learning, or just curious, Perplexity helps you find what you're looking for.
            </p>
            <Link 
              to="/chat"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium shadow-sm hover:bg-primary/90 transition-colors duration-200"
            >
              Start chatting now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © 2023 Perplexity AI Clone. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
              Terms
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
              About
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
