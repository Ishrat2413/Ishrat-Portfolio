"use client";

import { personalInfo } from "@/data";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage(null);
    setSubmitSuccess(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.error || "Failed to send message.");
      }

      setSubmitSuccess(true);
      setStatusMessage(
        "Message sent successfully. I will get back to you soon.",
      );
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitSuccess(false);
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong while sending your message.",
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id='contact' className='py-20 px-4'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className='text-center mb-16'>
          <h2 className='font-[var(--font-display)] text-3xl md:text-4xl mb-4'>
            <span className='shimmer-text'>Get In Touch</span>
          </h2>
          <p className='text-lg text-[color:var(--muted)]'>
            I would love to hear from you. Lets work together!
          </p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            whileHover={{ y: -4 }}
            className='section-shell play-card rounded-3xl p-6 sm:p-8'>
            <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>

            <div className='space-y-6'>
              <div className='flex items-start'>
                <Mail className='h-6 w-6 text-[color:var(--primary)] mr-4 mt-1' />
                <div>
                  <h4 className='text-lg font-medium'>Email</h4>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className='text-[color:var(--muted)] hover:text-[color:var(--primary)]'>
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className='flex items-start'>
                <Phone className='h-6 w-6 text-[color:var(--primary)] mr-4 mt-1' />
                <div>
                  <h4 className='text-lg font-medium'>Phone</h4>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className='text-[color:var(--muted)] hover:text-[color:var(--primary)]'>
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className='flex items-start'>
                <MapPin className='h-6 w-6 text-[color:var(--primary)] mr-4 mt-1' />
                <div>
                  <h4 className='text-lg font-medium'>Location</h4>
                  <p className='text-[color:var(--muted)]'>
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>

            <div className='mt-8'>
              <h4 className='text-lg font-medium mb-4'>Connect with me</h4>
              <div className='flex space-x-4'>
                <a
                  href={`https://github.com/${personalInfo.github}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='play-card p-3 border border-emerald-900/15 rounded-lg hover:bg-[color:var(--primary)] hover:text-white'>
                  <span className='sr-only'>GitHub</span>
                  <Github />
                </a>
                <a
                  href={`https://linkedin.com/in/${personalInfo.linkedin}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='play-card p-3 border border-emerald-900/15 rounded-lg hover:bg-[color:var(--primary)] hover:text-white'>
                  <span className='sr-only'>LinkedIn</span>
                  <Linkedin />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            whileHover={{ y: -4 }}
            className='section-shell play-card rounded-3xl p-6 sm:p-8'>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium mb-2 text-[color:var(--muted)]'>
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 border border-emerald-900/15 rounded-lg bg-white/50 dark:bg-black/20 focus:outline-none focus:soft-ring'
                  placeholder='Your Name'
                />
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium mb-2 text-[color:var(--muted)]'>
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 border border-emerald-900/15 rounded-lg bg-white/50 dark:bg-black/20 focus:outline-none focus:soft-ring'
                  placeholder='your.email@example.com'
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium mb-2 text-[color:var(--muted)]'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className='w-full px-4 py-3 border border-emerald-900/15 rounded-lg bg-white/50 dark:bg-black/20 focus:outline-none focus:soft-ring'
                  placeholder='Your message here...'></textarea>
              </div>

              <button
                type='submit'
                disabled={isSending}
                className='w-full bg-[color:var(--primary)] text-white py-3 px-6 rounded-lg hover:brightness-110 transition-colors flex items-center justify-center'>
                <MessageCircle size={20} className='mr-2' />
                {isSending ? "Sending..." : "Send Message"}
              </button>

              {statusMessage && (
                <p
                  className={`text-sm ${submitSuccess ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}`}>
                  {statusMessage}
                </p>
              )}

              <a
                href={`mailto:${personalInfo.email}`}
                className='inline-flex items-center gap-2 text-sm text-[color:var(--muted)] hover:text-[color:var(--primary)]'>
                <Send size={15} />
                Prefer email? Send directly
              </a>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
