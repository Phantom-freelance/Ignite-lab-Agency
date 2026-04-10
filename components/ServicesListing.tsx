"use client"
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ServicesListing = () => {
  const services = [
    { name: "Web Development", slug: "web-development", icon: "🌐" },
    { name: "Mobile Apps", slug: "mobile-apps", icon: "📱" },
    { name: "UI/UX Design", slug: "ui-ux-design", icon: "🎨" },
    { name: "Branding", slug: "branding", icon: "✨" },
    { name: "Digital Marketing", slug: "digital-marketing", icon: "📈" },
    { name: "Content Creation", slug: "content-creation", icon: "✍️" },
  ];

  return (
    <section className="bg-black py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-zinc-900 rounded-3xl p-8 hover:bg-zinc-800 transition-all cursor-pointer group border border-zinc-800 hover:border-yellow-400"
              >
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                  {service.name}
                </h3>
                <p className="text-zinc-400">
                  Professional {service.name.toLowerCase()} services tailored to your needs
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesListing;
