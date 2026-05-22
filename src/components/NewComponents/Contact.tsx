"use client";
import React, { useState } from "react";
import { sendContactMessage } from "../../../actions/contact.actions";
import { lora, space_mono, caveat } from "@/lib/fonts";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await sendContactMessage(formData);
      if (response.success) {
        setStatus({
          success: true,
          message: response.message!,
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({
          success: false,
          message: response.error!,
        });
      }
    } catch (err) {
      console.error(err);
      setStatus({ success: false, message: "Message not sent" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 border-t border-[#ebd9c8] dark:border-zinc-800 transition-colors duration-500 bg-[#ebd9c8]/10 dark:bg-zinc-950/10"
    >
      <div className="max-w-2xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <h2
            className={`${space_mono.className} text-xs font-semibold uppercase tracking-wider text-[#d97706]`}
          >
            Send a Letter
          </h2>
          <span className="flex-1 h-[1px] bg-dashed border-t border-[#ebd9c8] dark:border-zinc-800" />
          <span
            className={`${caveat.className} text-xl text-rose-500/70 -rotate-2 select-none`}
          >
            get in touch
          </span>
        </motion.div>

        {/* Ruled Paper Letter Concept Container */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl border border-[#ebd9c8] dark:border-zinc-800 bg-[#f9f5ee] dark:bg-zinc-900/80 shadow-[0_10px_30px_-15px_rgba(235,217,200,0.3)] dark:shadow-none overflow-hidden select-none"
        >
          {/* Notebook Spiral Mock */}
          <div className="absolute top-0 inset-x-0 h-4 flex justify-around px-8 pointer-events-none opacity-60">
            {[...Array(8)].map((_, i) => (
              <span
                key={i}
                className="w-2.5 h-6 rounded-full bg-zinc-300 dark:bg-zinc-700 border border-zinc-400 dark:border-zinc-600 -translate-y-2"
              />
            ))}
          </div>

          <div className="p-8 pt-10 relative">
            {/* Red margin line of ruled paper */}
            <div className="absolute left-8 sm:left-12 top-0 bottom-0 w-[1.5px] bg-rose-400/60 dark:bg-rose-900/40 pointer-events-none" />

            <form
              onSubmit={handleSubmit}
              className="relative z-10 space-y-8 pl-6 sm:pl-10"
            >
              {/* Form Description */}
              <div className="mb-4">
                <h3
                  className={`${caveat.className} text-3xl font-bold text-zinc-800 dark:text-zinc-200`}
                >
                  Hello Harshal,
                </h3>
              </div>

              {/* Ruled Input - Name */}
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="My name is..."
                  className={`${lora.className} w-full bg-transparent border-b border-[#ebd9c8] dark:border-zinc-800 focus:border-[#d97706] dark:focus:border-amber-600 py-2 outline-none text-zinc-800 dark:text-zinc-200 placeholder-zinc-400 dark:placeholder-zinc-600 font-light transition-colors`}
                />
                <span
                  className={`${space_mono.className} text-[9px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest absolute right-0 top-3 pointer-events-none`}
                >
                  Name *
                </span>
              </div>

              {/* Ruled Input - Email */}
              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Reach me back at..."
                  className={`${lora.className} w-full bg-transparent border-b border-[#ebd9c8] dark:border-zinc-800 focus:border-[#d97706] dark:focus:border-amber-600 py-2 outline-none text-zinc-800 dark:text-zinc-200 placeholder-zinc-400 dark:placeholder-zinc-600 font-light transition-colors`}
                />
                <span
                  className={`${space_mono.className} text-[9px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest absolute right-0 top-3 pointer-events-none`}
                >
                  Email *
                </span>
              </div>

              {/* Ruled Input - Subject */}
              <div className="relative group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Writing to you about..."
                  className={`${lora.className} w-full bg-transparent border-b border-[#ebd9c8] dark:border-zinc-800 focus:border-[#d97706] dark:focus:border-amber-600 py-2 outline-none text-zinc-800 dark:text-zinc-200 placeholder-zinc-400 dark:placeholder-zinc-600 font-light transition-colors`}
                />
                <span
                  className={`${space_mono.className} text-[9px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest absolute right-0 top-3 pointer-events-none`}
                >
                  Subject
                </span>
              </div>

              {/* Ruled TextArea - Message */}
              <div className="relative group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Here's my message..."
                  className={`${lora.className} w-full bg-transparent border-b border-[#ebd9c8] dark:border-zinc-800 focus:border-[#d97706] dark:focus:border-amber-600 py-2 outline-none text-zinc-800 dark:text-zinc-200 placeholder-zinc-400 dark:placeholder-zinc-600 font-light resize-none transition-colors leading-relaxed`}
                />
                <span
                  className={`${space_mono.className} text-[9px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest absolute right-0 top-3 pointer-events-none`}
                >
                  Message *
                </span>
              </div>

              {/* Status Notice */}
              <AnimatePresence>
                {status && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className={`flex items-start gap-2.5 p-3 rounded-lg border ${
                      status.success
                        ? "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/50 text-emerald-800 dark:text-emerald-300"
                        : "bg-rose-50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-900/50 text-rose-800 dark:text-rose-300"
                    }`}
                  >
                    {status.success ? (
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                    ) : (
                      <AlertCircle size={16} className="mt-0.5 shrink-0" />
                    )}
                    <span className="text-xs leading-relaxed font-medium">
                      {status.message}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <div className="flex items-center justify-between pt-4">
                <span className={`${caveat.className} text-2xl text-zinc-500`}>
                  Yours truly,
                </span>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-2 text-xs font-semibold px-4.5 py-3 rounded-xl bg-zinc-900 text-zinc-50 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors disabled:opacity-50 select-none shadow-sm cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="inline-block w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full"
                      />
                      <span>Folding letter...</span>
                    </>
                  ) : (
                    <>
                      <Send size={12} />
                      <span>Send Letter</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
