'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Star, ShieldCheck, Calendar, Zap, ShoppingBag, Phone, MessageCircle, ArrowUpRight } from 'lucide-react';
import HeroImage from "@/public/pranavsinghheroo.png"

export default function Hero() {
  return (
    <section className="relative bg-[#030712] text-white min-h-[90vh] flex items-center overflow-hidden py-16 px-6 lg:px-16 pt-32">
      
      {/* Dynamic Background Mesh Grids & Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-[500px] h-[500px] bg-green-900/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-[#84CC16]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Headline & Value Proposition */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 bg-[#0B1E0F] border border-[#84CC16]/30 text-[#84CC16] text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg shadow-green-950/50">
            <span className="w-2 h-2 rounded-full bg-[#84CC16] animate-ping" />
            <span>Best Web Developer in Jaipur</span>
          </div>

          {/* Bold Visual Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
            Professional Freelance <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
              Web Developer in Jaipur.
            </span>
            <span className="block text-[#84CC16] italic font-serif mt-2 font-normal">
              Building High-Converting Websites
            </span>
          </h1>

          {/* Description */}
          <p className="border-l-2 border-[#84CC16] pl-4 py-1 text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl font-normal bg-gradient-to-r from-[#0B1E0F]/40 to-transparent rounded-r-lg">
          Full-Stack Web Developer & UI/UX Designer helping businesses build high-performance websites that convert visitors into customers. I create fast, SEO-optimized web applications, landing pages, and custom business solutions starting from ₹4,000.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#84CC16] hover:bg-[#73b511] text-black font-bold px-6 py-3.5 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-green-900/30 text-sm"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <Link
              href="#case-studies"
              className="inline-flex items-center gap-2 bg-[#09131A] hover:bg-[#0F1F2A] text-white border border-gray-800 hover:border-green-800 font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 text-sm"
            >
              <span>View Recent Work</span>
            </Link>
          </div>

          {/* Rating Badge */}
          <div className="flex items-center gap-3 pt-4 border-t border-gray-800/80">
            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center font-bold text-black shadow-md">
              <span className="text-[#4285F4]">G</span>
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-1.5 font-bold text-sm text-white">4.9/5 Google Rating</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>44 Verified Reviews</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Unique Geometric Avatar Frame */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          
          {/* Outer Glowing Polygon Border */}
          <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
            
            {/* Glowing Hexagon Backdrop Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#84CC16]/30 via-emerald-500/10 to-transparent rounded-[40px] rotate-6 blur-xl" />

            {/* Main Glassmorphic Photo Container */}
            <div className="relative w-full h-full bg-[#09131A]/90 border-2 border-[#84CC16]/50 rounded-[36px] overflow-hidden shadow-2xl p-2 flex items-end">
              
              {/* Image Cutout */}
              <div className="relative w-full h-full rounded-[28px] overflow-hidden">
                <Image
                  src= {HeroImage} // Replace with your PNG portrait image path
                  alt="Pranav - Web Developer"
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  priority
                />
                {/* Gradient Shadow overlay at the bottom */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#09131A] via-[#09131A]/60 to-transparent" />
              </div>

              {/* Floating Stat Card 1 (Bottom Left) */}
              <div className="absolute bottom-4 left-4 bg-[#030712]/90 backdrop-blur-md border border-green-800/40 p-2.5 rounded-xl flex items-center gap-2.5 shadow-xl">
                <div className="p-1.5 bg-green-950 rounded-lg text-[#84CC16]">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">500+</div>
                  <div className="text-[10px] text-gray-400">Delivered</div>
                </div>
              </div>

              {/* Floating Stat Card 2 (Top Right) */}
              <div className="absolute top-4 right-4 bg-[#030712]/90 backdrop-blur-md border border-green-800/40 p-2.5 rounded-xl flex items-center gap-2.5 shadow-xl">
                <div className="p-1.5 bg-green-950 rounded-lg text-[#84CC16]">
                  <ShoppingBag className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Shopify</div>
                  <div className="text-[10px] text-gray-400">Partner</div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Floating Sticky Actions */}
      <div className="fixed right-4 bottom-10 z-50 flex flex-col gap-3">
        <a 
          href="tel:+917643067263" 
          className="w-11 h-11 bg-blue-600 hover:bg-blue-700 text-white rounded-xl flex items-center justify-center shadow-lg transition-transform hover:scale-110"
          aria-label="Call"
        >
          <Phone className="w-5 h-5" />
        </a>
        <a 
          href="https://wa.me/917643067263" 
          target="_blank" 
          rel="noreferrer"
          className="w-11 h-11 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl flex items-center justify-center shadow-lg transition-transform hover:scale-110"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
        </a>
      </div>

    </section>
  );
}