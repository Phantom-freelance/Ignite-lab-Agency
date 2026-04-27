"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FAQ_DATA = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "How do I place an order?",
        a: "Simply browse our services, select what you need, customize your requirements, and proceed to checkout. We'll contact you within 24 hours to confirm details."
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards, PayPal, and bank transfers for larger projects. Payment is secure and processed through Stripe."
      },
      {
        q: "How long does it take to complete a project?",
        a: "Timelines vary by service complexity. Simple websites take 1-2 weeks, while complex applications can take 4-8 weeks. We'll provide an exact timeline during consultation."
      },
    ]
  },
  {
    category: "Services & Pricing",
    questions: [
      {
        q: "Can I customize a package?",
        a: "Absolutely! All our packages are customizable. Use the pricing calculator or contact us to create a package that fits your exact needs."
      },
      {
        q: "Do you offer refunds?",
        a: "We offer a 14-day money-back guarantee if you're not satisfied with the initial deliverables. See our refund policy for details."
      },
      {
        q: "Are there any hidden fees?",
        a: "No hidden fees! The price you see is what you pay. Any additional costs (like premium plugins or third-party services) will be discussed upfront."
      },
    ]
  },
  {
    category: "Project Management",
    questions: [
      {
        q: "How do I track my project progress?",
        a: "You'll have access to a dedicated dashboard where you can see real-time updates, milestones, and communicate with your team."
      },
      {
        q: "Can I request revisions?",
        a: "Yes! Each package includes a set number of revision rounds. Additional revisions can be purchased if needed."
      },
      {
        q: "What if I need to pause my project?",
        a: "We understand things come up. You can pause your project for up to 30 days. Contact your project manager to arrange this."
      },
    ]
  },
  {
    category: "Technical Support",
    questions: [
      {
        q: "Do you provide ongoing maintenance?",
        a: "Yes! We offer monthly maintenance packages starting at $99/month covering updates, backups, and minor changes."
      },
      {
        q: "What technologies do you use?",
        a: "We use modern, industry-standard technologies: React, Next.js, Node.js, Python, MongoDB, PostgreSQL, and more depending on project needs."
      },
      {
        q: "Will I own the source code?",
        a: "Yes! Upon final payment, you receive full ownership of all source code, designs, and assets."
      },
    ]
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <main className="w-full min-h-screen flex flex-col bg-black">
      <Navbar />

      <div className="flex-1 w-full pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          
          <div className="mb-16 text-center">
            <p className="text-yellow-400 font-black uppercase tracking-widest text-sm mb-4">
              Help Center
            </p>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
              Got questions? We've got answers. Can't find what you're looking for? Contact our support team.
            </p>
          </div>

          <div className="space-y-12">
            {FAQ_DATA.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h2 className="text-3xl font-black text-yellow-400 mb-6">
                  {section.category}
                </h2>
                <div className="space-y-4">
                  {section.questions.map((item, itemIdx) => {
                    const id = `${sectionIdx}-${itemIdx}`;
                    const isOpen = openItems.includes(id);
                    
                    return (
                      <div
                        key={id}
                        className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-yellow-400 transition-all"
                      >
                        <button
                          onClick={() => toggleItem(id)}
                          className="w-full px-8 py-6 flex items-center justify-between text-left"
                        >
                          <span className="text-xl font-bold text-white pr-8">
                            {item.q}
                          </span>
                          <span className={`text-yellow-400 text-2xl transition-transform ${isOpen ? 'rotate-45' : ''}`}>
                            +
                          </span>
                        </button>
                        
                        {isOpen && (
                          <div className="px-8 pb-6">
                            <p className="text-zinc-400 text-lg leading-relaxed">
                              {item.a}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-zinc-900 border border-zinc-800 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-black text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-zinc-400 text-lg mb-8">
              Our support team is available 24/7 to help you out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
<a href="mailto:support@JOB-N-ME.com"
                className="px-8 py-4 bg-yellow-400 text-black rounded-full font-bold text-lg hover:bg-yellow-500 transition-all"
              >
                Email Support
              </a>
              
<a href="/contact"
                className="px-8 py-4 bg-black border border-zinc-700 text-white rounded-full font-bold text-lg hover:border-yellow-400 transition-all"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
