"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Link from 'next/link';

const PricingPlans = () => {
  const plans = [
    {
      name: "Starter",
      price: "$999",
      period: "/project",
      description: "Perfect for small businesses getting started",
      features: ["Landing Page Design", "Responsive Design", "Basic SEO Setup", "1 Month Support", "Source Code Included"],
      popular: false
    },
    {
      name: "Professional",
      price: "$2,499",
      period: "/project",
      description: "Ideal for growing businesses",
      features: ["Multi-page Website", "Advanced UI/UX Design", "SEO Optimization", "3 Months Support", "CMS Integration", "Performance Optimization", "Analytics Setup"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For complex projects and large teams",
      features: ["Custom Web Application", "Advanced Integrations", "Dedicated Team", "12 Months Support", "API Development", "Database Architecture", "Security Audit", "Priority Support"],
      popular: false
    }
  ];

  return (
    <section className="bg-black py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-yellow-400 text-sm font-bold tracking-widest mb-4">PRICING</p>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">Choose Your Plan</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">Transparent pricing for every stage of your business journey</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className={`relative bg-zinc-900 rounded-3xl p-8 ${plan.popular ? 'ring-2 ring-yellow-400' : ''}`}>
              {plan.popular && (<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">POPULAR</div>)}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-zinc-400 text-sm mb-6">{plan.description}</p>
              <div className="mb-8">
                <span className="text-5xl font-black text-yellow-400">{plan.price}</span>
                <span className="text-zinc-400 text-lg">{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (<li key={i} className="flex items-start gap-3 text-zinc-300"><Check className="text-yellow-400 mt-1 flex-shrink-0" size={20} /><span>{feature}</span></li>))}
              </ul>
              <Link href="/contact">
                <button className={`w-full py-4 rounded-full font-bold transition-all ${plan.popular ? 'bg-yellow-400 text-black hover:bg-white' : 'border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black'}`}>Get Started</button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
