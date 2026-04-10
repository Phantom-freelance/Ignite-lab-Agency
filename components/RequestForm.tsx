"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="bg-black py-24 px-6 md:px-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <p className="text-yellow-400 text-sm font-bold tracking-widest mb-4">GET IN TOUCH</p>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">Request a Quick Quote</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Tell us about your project and we'll get back to you within 24 hours
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="bg-zinc-900 border border-zinc-700 rounded-xl px-6 py-4 text-white placeholder-zinc-500 focus:border-yellow-400 focus:outline-none transition-colors"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="bg-zinc-900 border border-zinc-700 rounded-xl px-6 py-4 text-white placeholder-zinc-500 focus:border-yellow-400 focus:outline-none transition-colors"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="bg-zinc-900 border border-zinc-700 rounded-xl px-6 py-4 text-white placeholder-zinc-500 focus:border-yellow-400 focus:outline-none transition-colors"
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="bg-zinc-900 border border-zinc-700 rounded-xl px-6 py-4 text-white focus:border-yellow-400 focus:outline-none transition-colors"
            >
              <option value="">Select Service</option>
              <option value="web-development">Web Development</option>
              <option value="mobile-development">Mobile Development</option>
              <option value="ui-ux-design">UI/UX Design</option>
              <option value="branding">Branding</option>
              <option value="marketing">Digital Marketing</option>
              <option value="other">Other</option>
            </select>
          </motion.div>

          <motion.div variants={itemVariants}>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              rows={6}
              required
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-6 py-4 text-white placeholder-zinc-500 focus:border-yellow-400 focus:outline-none transition-colors resize-none"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitted}
              className="bg-yellow-400 text-black font-black uppercase tracking-widest px-16 py-6 rounded-full text-lg transition-all hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
            >
              {isSubmitted ? '✓ Sent!' : 'Send Now'}
            </button>
          </motion.div>
        </form>

        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-6 text-green-400 font-bold"
          >
            Thank you! We'll get back to you soon.
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default RequestForm;
