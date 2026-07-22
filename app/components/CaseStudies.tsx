'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, TrendingUp, Sparkles, MapPin, Cpu, User } from 'lucide-react';
import CaseStudy1 from "@/public/casestudies/casestudy1.png"
import CaseStudy2 from "@/public/casestudies/casestudy2.png"
import CaseStudy3 from "@/public/casestudies/casestudy3.png"
import CaseStudy4 from "@/public/casestudies/casestudy4.png"

const caseStudies = [
  {
    id: 1,
    title: 'Resort Website Design: Custom WordPress & Tech Stack for Nellari Resort',
    description:
      'Engineered a luxury resort booking web application focused on immersive visual storytelling, high-speed performance, and zero-commission direct bookings.',
    client: 'Nellari Resort LLP',
    location: 'Wayanad, Kerala',
    technology: 'Next.js, WordPress Headless, Tailwind CSS',
    tags: ['Resort Design', 'Headless CMS', 'High Performance'],
    metric: '+185% Direct Bookings',
    image: CaseStudy1,
    slug: '/case-studies/nellari-resort',
  },
  {
    id: 2,
    title: "Modern School Website for Vidya Bharati Public School",
    description:
      "Designed and developed a modern, conversion-focused school website with streamlined admissions, responsive design, engaging visuals, and an improved digital experience for students and parents.",
  
    client: "Vidya Bharati Public School",
    location: "India",
    technology: "Next.js, React, Tailwind CSS",
  
    tags: [
      "School Website",
      "Education",
      "Responsive Design",
    ],
  
    metric: "Responsive Across All Devices",
  
    image: CaseStudy2,
  
    slug: "/case-studies/vidya-bharati-public-school",
  },
  {
    id: 3,
  
    title: "Luxury Editorial Portfolio Concept",
  
    description:
      "A premium editorial portfolio concept crafted for authors, writers, and creatives. The experience focuses on elegant typography, cinematic layouts, subtle motion, and a timeless black-and-white aesthetic.",
  
    client: "Concept Project",
  
    location: "Remote",
  
    technology: "Next.js, Tailwind CSS, GSAP",
  
    tags: [
      "Concept",
      "Editorial",
      "Luxury",
      "Portfolio"
    ],
  
    metric: "Award-Inspired Design",
  
    image: CaseStudy3,
  
    slug: "/case-studies/luxury-editorial-portfolio",
  },
  {
    id: 4,
  
    title: "Creative Portfolio & Agency Website for Pranav Builds",
  
    description:
      "Crafted a high-impact digital portfolio for an independent development studio, combining expressive typography, premium animations, and conversion-focused storytelling to turn visitors into potential clients.",
  
    client: "Pranav Builds",
  
    location: "Jaipur, India",
  
    technology: "Next.js 15, Tailwind CSS, Framer Motion, GSAP",
  
    tags: [
      "Creative Studio",
      "Portfolio",
      "Motion Design",
      "Personal Brand"
    ],
  
    metric: "100% Mobile Responsive",
  
    image: CaseStudy4,
  
    slug: "/case-studies/pranav-builds",
  }
];

export default function CaseStudiesSection() {
  return (
    <section className="relative bg-[#030712] text-white py-24 px-6 lg:px-16 overflow-hidden">
      {/* Background Lighting Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-950/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#0B1E0F] border border-green-800/40 text-[#84CC16] text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            Proven Results
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Featured <span className="text-[#84CC16]">Case Studies</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            See how we help businesses, resorts, and e-commerce brands scale with high-converting designs, lightning-fast performance, and custom tech stacks.
          </p>
        </div>

        {/* Case Studies List */}
        <div className="space-y-10">
          {caseStudies.map((item) => (
            <article
              key={item.id}
              className="group relative bg-[#09131A]/80 backdrop-blur-md border border-green-900/30 hover:border-[#84CC16]/50 rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-green-950/40 overflow-hidden"
            >
              {/* Subtle top border glow on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#84CC16] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Side: Information & Metadata */}
                <div className="lg:col-span-7 space-y-5">
                  
                  {/* Category Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium bg-[#0B1E0F] text-[#84CC16] border border-green-800/30 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight text-white group-hover:text-[#84CC16] transition-colors duration-200">
                    <Link href={item.slug}>{item.title}</Link>
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-normal">
                    {item.description}
                  </p>

                  {/* Impact Metric Badge */}
                  <div className="inline-flex items-center gap-2 bg-green-950/60 border border-green-700/40 text-green-300 text-xs font-semibold px-3 py-1.5 rounded-lg">
                    <TrendingUp className="w-4 h-4 text-[#84CC16]" />
                    <span>{item.metric}</span>
                  </div>

                  {/* Metadata Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-gray-800/80 text-xs text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#84CC16]" />
                      <span><strong className="text-gray-200">Client:</strong> {item.client}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#84CC16]" />
                      <span><strong className="text-gray-200">Location:</strong> {item.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-[#84CC16]" />
                      <span className="truncate"><strong className="text-gray-200">Tech:</strong> {item.technology}</span>
                    </div>
                  </div>

                  {/* Call to Action Link */}
                  <div className="pt-2">
                    <Link
                      href={item.slug}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#84CC16] hover:text-white transition-colors duration-200 group/link"
                    >
                      <span>View full case study</span>
                      <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>

                </div>

                {/* Right Side: Showcase Mockup Image */}
                <div className="lg:col-span-5 relative">
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-gray-800 shadow-xl group-hover:border-green-800/50 transition-colors">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    {/* Dark gradient overlay for visual depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/60 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}