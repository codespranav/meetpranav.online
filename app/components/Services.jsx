'use client';

import Link from 'next/link';
import { 
  Layout, 
  ShoppingBag, 
  ShoppingCart, 
  ArrowRight, 
  Sparkles, 
  Code2, 
  Search, 
  Server 
} from 'lucide-react';

const services = [
  {
    icon: Layout,
    title: 'Website Design & Development',
    description: 'Custom, high-speed, accessible websites crafted to reflect your brand identity and convert visitors into loyal clients.',
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    href: '/web-design',
  },
  {
    icon: ShoppingBag,
    title: 'Shopify Website Development',
    description: 'High-converting Shopify stores with custom liquid themes, optimized checkout flows, and seamless app integrations.',
    tags: ['Shopify Plus', 'Custom Themes', 'Liquid'],
    href: '/shopify-development',
  },
  {
    icon: ShoppingCart,
    title: 'Ecommerce Development',
    description: 'Scalable custom e-commerce solutions built on WooCommerce, Adobe Commerce, or custom full-stack architectures.',
    tags: ['WooCommerce', 'Stripe', 'Headless Commerce'],
    href: '/ecommerce-development',
  },
];

export default function Services() {
  return (
    <section className="relative bg-[#030712] text-white py-24 px-6 lg:px-16 overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-green-900/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#84CC16]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#0B1E0F] border border-green-800/40 text-[#84CC16] text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            What We Deliver
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Explore Our Web & <br className="hidden sm:inline" />
            <span className="text-[#84CC16]">Digital Services</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            From custom high-performance web development to Shopify stores and technical SEO, we build scalable digital solutions engineered for measurable growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-[#09131A]/80 backdrop-blur-md border border-green-900/20 hover:border-[#84CC16]/40 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-green-950/30 flex flex-col justify-between"
              >
                {/* Top Glowing Accent Line on Hover */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#84CC16] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Icon Badge */}
                  <div className="w-14 h-14 rounded-xl bg-[#0B1E0F] border border-green-800/30 flex items-center justify-center text-[#84CC16] group-hover:bg-[#84CC16] group-hover:text-black transition-colors duration-300 mb-6 shadow-inner">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-[#84CC16] transition-colors duration-200 mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Footer Content: Tech Tags + CTA Link */}
                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium bg-[#030712] text-gray-300 border border-gray-800 px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link CTA */}
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#84CC16] hover:text-white transition-colors duration-200 group/link"
                  >
                    <span>Learn detail</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}