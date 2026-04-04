"use client";

import { motion } from "framer-motion";
import { Send, Mail, User, MessageCircle, Phone, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);

    const formData = new FormData(e.currentTarget);
    // Add your Web3Forms Access Key here. Get one for free at https://web3forms.com/
    formData.append("access_key", "3e6d398d-383e-469b-8a6f-1a92796c57fd");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        e.currentTarget.reset();
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative z-20 bg-[#121212] py-32 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24 items-center">

        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-2 space-y-12"
        >
          <div className="max-w-md">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
              Let's build <br />
              <span className="text-[#a0d2eb]">something great.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Have a high-impact project in mind? Reach out and let's turn your vision into a digital reality.
            </p>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=20006shivam@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 group cursor-pointer w-fit"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:bg-purple-600 group-hover:border-purple-500 group-hover:-translate-y-1 shadow-xl">
                <Mail className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black tracking-[0.2em] text-gray-500 uppercase mb-1">Direct Email</span>
                <span className="text-white text-lg font-semibold tracking-tight group-hover:text-[#a0d2eb] transition-colors">20006shivam@gmail.com</span>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-3"
        >
          <form
            onSubmit={handleSubmit}
            className="backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group/form"
          >
            {/* Subtle Gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 transition-opacity duration-500 group-hover/form:opacity-100" />

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10 text-center py-12"
              >
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400">Thank you for reaching out. I'll get back to you shortly.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-sm font-bold text-purple-400 uppercase tracking-widest hover:text-purple-300 transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1 flex items-center gap-2">
                    <User className="w-3 h-3" /> Name
                  </label>
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all hover:bg-white/[0.08]"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1 flex items-center gap-2">
                    <Mail className="w-3 h-3" /> Email Address
                  </label>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all hover:bg-white/[0.08]"
                  />
                </div>

                {/* Mobile Number */}
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1 flex items-center gap-2">
                    <Phone className="w-3 h-3" /> Mobile Number
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="+91 ... ... ...."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all hover:bg-white/[0.08]"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1 flex items-center gap-2">
                    <MessageCircle className="w-3 h-3" /> Message
                  </label>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all hover:bg-white/[0.08] resize-none"
                  />
                </div>

                {error && (
                  <div className="md:col-span-2 text-red-500 text-sm font-medium">
                    Oops! Something went wrong. Please try again.
                  </div>
                )}

                {/* Submit Button */}
                <div className="md:col-span-2 pt-4">
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full bg-white text-black font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all enabled:hover:scale-[1.02] enabled:active:scale-[0.98] enabled:hover:bg-[#a0d2eb] disabled:opacity-50 group"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </form>
        </motion.div>

      </div>
    </section>
  );
}
