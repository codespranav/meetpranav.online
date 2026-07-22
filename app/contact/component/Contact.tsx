'use client';

import React, { useState, FormEvent } from 'react';
import Link from 'next/link';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  MessageSquare, 
  ChevronDown
} from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

const serviceOptions: string[] = [
  'Web Development',
  'Shopify Store',
  'SaaS Application',
  'UI/UX Design',
  'SEO & Speed',
  'AI Integration'
];

const faqs: FAQ[] = [
  {
    question: 'What is your typical turnaround time for a project?',
    answer: 'Most standard web development and Shopify projects take 1 to 3 weeks depending on scope. Custom full-stack web apps and SaaS applications usually take 3 to 6 weeks.'
  },
  {
    question: 'What are your starting rates?',
    answer: 'Web design and development packages start from ₹4,000 for standard websites and landing pages. Custom e-commerce and full-stack solutions are quoted based on specific feature requirements.'
  },
  {
    question: 'Do you provide post-launch support and maintenance?',
    answer: 'Yes! Every project includes 30 days of free post-launch support. Extended maintenance, hosting management, and performance monitoring plans are also available.'
  },
  {
    question: 'Can you optimize my existing website for speed and SEO?',
    answer: 'Absolutely. We specialize in Core Web Vitals optimization, reducing load times under 1 second, and implementing technical SEO best practices for higher Google rankings.'
  }
];

export default function ContactPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>(['Web Development']);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#030712] text-white pt-32 pb-20 px-6 lg:px-16 relative overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-green-950/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#84CC16]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#0B1E0F] border border-[#84CC16]/30 text-[#84CC16] text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg">
            <Sparkles className="w-3.5 h-3.5" />
            Let&apos;s Collaborate
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Got a Project in Mind? <br />
            <span className="text-[#84CC16] italic font-serif font-normal">Let&apos;s Build It Together.</span>
          </h1>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Have a question, need a project estimate, or looking to transform your online presence? Drop a message below and expect a response within 2 hours.
          </p>
        </div>

        {/* Grid Layout: Contact Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Left Side: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#09131A]/80 backdrop-blur-xl border border-green-900/30 rounded-2xl p-8 space-y-6 shadow-2xl">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#84CC16]" />
                Contact Information
              </h2>
              
              <div className="space-y-5 text-sm">
                <a href="tel:+919745320424" className="flex items-start gap-4 group p-3 rounded-xl hover:bg-white/5 transition-colors">
                  <div className="p-3 bg-[#0B1E0F] border border-green-800/40 rounded-xl text-[#84CC16] group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium">Call or WhatsApp</div>
                    <div className="text-white font-semibold group-hover:text-[#84CC16] transition-colors">+91 9745 320 424</div>
                  </div>
                </a>

                <a href="mailto:contact@pranavbuilds.co" className="flex items-start gap-4 group p-3 rounded-xl hover:bg-white/5 transition-colors">
                  <div className="p-3 bg-[#0B1E0F] border border-green-800/40 rounded-xl text-[#84CC16] group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium">Email Directly</div>
                    <div className="text-white font-semibold group-hover:text-[#84CC16] transition-colors">contact@pranavbuilds.co</div>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-3">
                  <div className="p-3 bg-[#0B1E0F] border border-green-800/40 rounded-xl text-[#84CC16]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium">Location</div>
                    <div className="text-white font-semibold">Kozhikode, Kerala, India</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3">
                  <div className="p-3 bg-[#0B1E0F] border border-green-800/40 rounded-xl text-[#84CC16]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium">Response Time</div>
                    <div className="text-white font-semibold">Within 2 Hours (Mon - Sat)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Guarantees Box */}
            <div className="bg-[#0B1E0F]/60 border border-[#84CC16]/20 rounded-2xl p-6 space-y-3">
              <h3 className="text-sm font-bold text-[#84CC16] uppercase tracking-wider">Why work with me?</h3>
              <ul className="space-y-2 text-xs text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#84CC16]" />
                  100% Custom &amp; High-Performance Code
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#84CC16]" />
                  SEO &amp; Core Web Vitals Guaranteed &gt; 90 Score
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#84CC16]" />
                  Transparent Pricing &amp; No Hidden Fees
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side: Interactive Project Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#09131A]/90 backdrop-blur-xl border border-green-900/40 rounded-2xl p-8 lg:p-10 shadow-2xl relative">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-[#0B1E0F] border-2 border-[#84CC16] rounded-full flex items-center justify-center text-[#84CC16] mx-auto animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-gray-300 text-sm max-w-md mx-auto">
                    Thanks for reaching out! I&apos;ll review your project details and get back to you within 2 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#84CC16] hover:underline pt-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Service Selector */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-3">
                      I&apos;m interested in:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((service) => {
                        const isSelected = selectedServices.includes(service);
                        return (
                          <button
                            type="button"
                            key={service}
                            onClick={() => toggleService(service)}
                            className={`text-xs font-medium px-3.5 py-2 rounded-xl border transition-all duration-200 ${
                              isSelected
                                ? 'bg-[#84CC16] text-black border-[#84CC16] font-bold shadow-lg shadow-green-950/40'
                                : 'bg-[#030712] text-gray-300 border-gray-800 hover:border-green-800'
                            }`}
                          >
                            {service}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full bg-[#030712] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#84CC16] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full bg-[#030712] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#84CC16] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="w-full bg-[#030712] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#84CC16] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1.5">Estimated Budget</label>
                      <select className="w-full bg-[#030712] border border-gray-800 rounded-xl px-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-[#84CC16] transition-colors">
                        <option>₹4,000 - ₹15,000</option>
                        <option>₹15,000 - ₹50,000</option>
                        <option>₹50,000+</option>
                        <option>Flexible / Undecided</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">Project Details / Message *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell me about your business goals, target audience, or specific features you need..."
                      className="w-full bg-[#030712] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#84CC16] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#84CC16] hover:bg-[#73b511] text-black font-bold text-sm py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-green-950/50 transform hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4 -rotate-12" />
                    <span>Send Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto pt-12 border-t border-gray-800/80">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Frequently Asked Questions</h2>
            <p className="text-xs text-gray-400 mt-2">Quick answers to common questions about working together.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-[#09131A] border border-green-900/20 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left text-sm font-semibold text-white hover:text-[#84CC16] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#84CC16]' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-gray-300 leading-relaxed border-t border-gray-800/50 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </main>
  );
}