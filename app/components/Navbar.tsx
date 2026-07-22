'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ChevronDown, 
  Search, 
  Send, 
  Menu, 
  X, 
  Sparkles, 
  Code2, 
  ShoppingBag, 
  Zap, 
  Layers 
} from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 inset-x-0 z-50 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Floating Pill Container */}
      <div className="bg-[#050B14]/80 backdrop-blur-xl border border-white/10 rounded-full px-5 py-3 shadow-2xl shadow-black/50 transition-all duration-300">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with Glow */}
          <Link href="/" className="group flex items-center  text-xl font-extrabold tracking-tight text-white">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              meet
            </span>
            <span className="text-[#84CC16] drop-shadow-[0_0_12px_rgba(132,204,22,0.4)]">
            pranav
            </span>
            <span className="text-xs text-gray-400 font-mono font-normal">.com</span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 text-xs font-medium">
            <Link 
              href="/" 
              className="px-3.5 py-2 rounded-full text-gray-300 hover:text-white hover:bg-white/5 transition-all"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group/dropdown py-2">
              <button className="flex items-center gap-1 px-3.5 py-2 rounded-full text-gray-300 hover:text-white hover:bg-white/5 transition-all focus:outline-none">
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover/dropdown:rotate-180 transition-transform duration-200" />
              </button>

              {/* Flyout Menu */}
              <div className="absolute top-full left-0 mt-2 w-64 opacity-0 translate-y-2 pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:translate-y-0 group-hover/dropdown:pointer-events-auto transition-all duration-200 ease-out">
                <div className="bg-[#09131A] border border-white/10 rounded-2xl p-2 shadow-2xl backdrop-blur-2xl space-y-1">
                  <Link href="/services/web-design" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors">
                    <Code2 className="w-4 h-4 text-[#84CC16] mt-0.5" />
                    <div>
                      <div className="text-xs font-semibold text-white">Web Development</div>
                      <div className="text-[10px] text-gray-400">Custom Next.js & React Apps</div>
                    </div>
                  </Link>

                  <Link href="/services/shopify" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors">
                    <ShoppingBag className="w-4 h-4 text-[#84CC16] mt-0.5" />
                    <div>
                      <div className="text-xs font-semibold text-white">Shopify Stores</div>
                      <div className="text-[10px] text-gray-400">High-converting e-commerce</div>
                    </div>
                  </Link>

                  <Link href="/services/seo" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors">
                    <Zap className="w-4 h-4 text-[#84CC16] mt-0.5" />
                    <div>
                      <div className="text-xs font-semibold text-white">Speed & SEO</div>
                      <div className="text-[10px] text-gray-400">Core Web Vitals Optimization</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <Link 
              href="/case-studies" 
              className="px-3.5 py-2 rounded-full text-gray-300 hover:text-white hover:bg-white/5 transition-all"
            >
              Case Studies
            </Link>

            <Link 
              href="/blog" 
              className="px-3.5 py-2 rounded-full text-gray-300 hover:text-white hover:bg-white/5 transition-all"
            >
              Blog
            </Link>

            <Link 
              href="/about" 
              className="px-3.5 py-2 rounded-full text-gray-300 hover:text-white hover:bg-white/5 transition-all"
            >
              About Me
            </Link>

            <Link 
              href="/contact" 
              className="px-3.5 py-2 rounded-full text-gray-300 hover:text-white hover:bg-white/5 transition-all"
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Tools */}
          <div className="flex items-center gap-3">
            {/* Search Trigger Icon */}
            <button 
              aria-label="Search"
              className="p-2 rounded-full text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Glowing CTA Button */}
            <Link
              href="/quote"
              className="relative inline-flex items-center gap-2 bg-[#84CC16] hover:bg-[#73b511] text-black font-bold text-xs px-4 py-2 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(132,204,22,0.3)] hover:shadow-[0_0_25px_rgba(132,204,22,0.5)] transform hover:-translate-y-0.5"
            >
              <Send className="w-3.5 h-3.5 -rotate-12" />
              <span>Get Free Quote</span>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 bg-[#050B14]/95 border border-white/10 rounded-2xl p-5 shadow-2xl backdrop-blur-2xl space-y-3">
          <Link href="/" className="block text-sm text-gray-300 hover:text-[#84CC16]">Home</Link>
          <Link href="/services" className="block text-sm text-gray-300 hover:text-[#84CC16]">Services</Link>
          <Link href="/case-studies" className="block text-sm text-gray-300 hover:text-[#84CC16]">Case Studies</Link>
          <Link href="/blog" className="block text-sm text-gray-300 hover:text-[#84CC16]">Blog</Link>
          <Link href="/about" className="block text-sm text-gray-300 hover:text-[#84CC16]">About Me</Link>
          <Link href="/contact" className="block text-sm text-gray-300 hover:text-[#84CC16]">Contact</Link>
        </div>
      )}
    </header>
  );
}