'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Send, Code, Heart } from 'lucide-react';
import { FaInstagram, FaTwitter, FaLinkedin  } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-[#030712] text-gray-300 pt-16 pb-8 px-6 lg:px-16 border-t border-green-900/30 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-green-950/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Trust Badges / Tech Stack Row */}
        <div className="flex flex-wrap items-center justify-between gap-6 pb-12 mb-12 border-b border-gray-800/80">
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            <span className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse" />
            <span>Tech Stack & Competencies:</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-gray-400">
            <span className="px-3 py-1.5 rounded-lg bg-[#09131A] border border-gray-800 text-gray-200">Next.js 14 / React</span>
            <span className="px-3 py-1.5 rounded-lg bg-[#09131A] border border-gray-800 text-gray-200">Tailwind CSS</span>
            <span className="px-3 py-1.5 rounded-lg bg-[#09131A] border border-gray-800 text-gray-200">Python & YOLO</span>
            <span className="px-3 py-1.5 rounded-lg bg-[#09131A] border border-gray-800 text-gray-200">Shopify & Liquid</span>
            <span className="px-3 py-1.5 rounded-lg bg-[#09131A] border border-gray-800 text-gray-200">REST APIs</span>
          </div>
        </div>

        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
          
          {/* Column 1: Contact / Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="text-2xl font-bold tracking-wide text-white inline-block">
              pranav<span className="text-[#84CC16]">builds</span><span className="text-gray-400 text-lg">.co</span>
            </Link>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Full-Stack Developer and UI/UX enthusiast specializing in modern web applications, AI integration, and high-converting performance-focused websites.
            </p>

            <div className="space-y-3 pt-2 text-xs text-gray-300">
              <a href="tel:+910000000000" className="flex items-center gap-3 hover:text-[#84CC16] transition-colors">
                <div className="p-2 rounded-lg bg-[#09131A] border border-gray-800 text-[#84CC16]">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>+91 9745 320 424</span>
              </a>

              <a href="mailto:contact@pranavbuilds.co" className="flex items-center gap-3 hover:text-[#84CC16] transition-colors">
                <div className="p-2 rounded-lg bg-[#09131A] border border-gray-800 text-[#84CC16]">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span>contact@pranavbuilds.co</span>
              </a>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#09131A] border border-gray-800 text-[#84CC16]">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span>Kozhikode, Kerala, India</span>
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">Services</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><Link href="/services/web-development" className="hover:text-[#84CC16] transition-colors">Web Design & Development</Link></li>
              <li><Link href="/services/shopify" className="hover:text-[#84CC16] transition-colors">Shopify Store Setup</Link></li>
              <li><Link href="/services/saas-apps" className="hover:text-[#84CC16] transition-colors">Full-Stack SaaS Applications</Link></li>
              <li><Link href="/services/ai-solutions" className="hover:text-[#84CC16] transition-colors">AI & Computer Vision Integration</Link></li>
              <li><Link href="/services/speed-seo" className="hover:text-[#84CC16] transition-colors">Core Web Vitals & SEO</Link></li>
            </ul>
          </div>

          {/* Column 3: Solutions & Projects */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">Solutions</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><Link href="/projects/trekker" className="hover:text-[#84CC16] transition-colors">Road Health Tracking Platform</Link></li>
              <li><Link href="/projects/ecommerce" className="hover:text-[#84CC16] transition-colors">E-Commerce Platforms</Link></li>
              <li><Link href="/resources/checklists" className="hover:text-[#84CC16] transition-colors">Web Launch Checklists</Link></li>
              <li><Link href="/resources/components" className="hover:text-[#84CC16] transition-colors">UI Component Library</Link></li>
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">Navigation</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><Link href="/" className="hover:text-[#84CC16] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#84CC16] transition-colors">About Me</Link></li>
              <li><Link href="/case-studies" className="hover:text-[#84CC16] transition-colors">Case Studies</Link></li>
              <li><Link href="/contact" className="hover:text-[#84CC16] transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-[#84CC16] transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Social Links */}
        <div className="pt-8 border-t border-gray-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          
          <div className="flex items-center gap-1">
            <span>Copyright © {new Date().getFullYear()}</span>
            <span className="text-white font-semibold">pranavbuilds.co</span>
            <span>All rights reserved.</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-[#09131A] hover:text-[#84CC16] transition-colors border border-gray-800">
              <FaInstagram className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-[#09131A] hover:text-[#84CC16] transition-colors border border-gray-800">
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-[#09131A] hover:text-[#84CC16] transition-colors border border-gray-800">
              <FaTwitter className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}