import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  MapPin,
  Check,
  Copy,
  Send,
  ExternalLink,
} from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data/portfolio';

export default function Contact() {
  const { identity, contact } = portfolioData;

  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleCopyEmail = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(identity.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const hasEmailJsKeys = Boolean(serviceId && templateId && publicKey);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus({
        type: 'error',
        message: 'Please complete all fields before sending.',
      });
      return;
    }

    if (!hasEmailJsKeys) {
      // Graceful fallback to mailto if EmailJS is not configured
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Hi Shubham,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
      );
      window.location.href = `mailto:${identity.email}?subject=${subject}&body=${body}`;
      setFormStatus({
        type: 'success',
        message: 'Opening your mail client...',
      });
      return;
    }

    setLoading(true);
    setFormStatus({ type: '', message: '' });

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setFormStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.',
      });
      setFormData({ name: '', email: '', message: '' });
    } catch {
      // Fallback on API error
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Hi Shubham,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
      );
      window.location.href = `mailto:${identity.email}?subject=${subject}&body=${body}`;
      setFormStatus({
        type: 'info',
        message: 'Message ready in your email client.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-[1120px] mx-auto px-6">
        <SectionHeading
          number="07"
          title={contact.heading}
          intro={contact.line}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column (5 cols): Direct channels */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card with Copy button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-6 rounded-[20px] editorial-card"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-muted uppercase tracking-wider">
                  Direct Email
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-2 min-h-[44px] rounded-md bg-chip border border-border text-xs font-mono text-text hover:text-accent hover:border-accent transition-colors cursor-pointer"
                  title="Copy email address"
                  aria-label="Copy email"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-success" />
                      <span className="text-success">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${identity.email}`}
                className="text-base sm:text-lg font-mono font-medium text-text hover:text-accent transition-colors break-all inline-flex items-center min-h-[44px]"
              >
                {identity.email}
              </a>
            </motion.div>

            {/* Social & Professional Links */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="p-6 rounded-[20px] editorial-card space-y-4"
            >
              <span className="text-xs font-mono text-muted uppercase tracking-wider block">
                Profiles &amp; Location
              </span>

              {/* LinkedIn */}
              <a
                href={identity.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-chip/60 border border-border hover:border-accent text-text group transition-colors"
              >
                <div className="flex items-center gap-3">
                  <FaLinkedin className="w-4 h-4 text-accent" aria-hidden="true" />
                  <span className="text-sm font-medium font-sans">LinkedIn</span>
                </div>
                <ExternalLink className="w-4 h-4 text-muted group-hover:text-accent transition-colors" />
              </a>

              {/* GitHub */}
              <a
                href={identity.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-chip/60 border border-border hover:border-accent text-text group transition-colors"
              >
                <div className="flex items-center gap-3">
                  <SiGithub className="w-4 h-4 text-text" aria-hidden="true" />
                  <span className="text-sm font-medium font-sans">GitHub</span>
                </div>
                <ExternalLink className="w-4 h-4 text-muted group-hover:text-accent transition-colors" />
              </a>

              {/* LeetCode - only rendered if identity.leetcodeUrl is non-empty */}
              {identity.leetcodeUrl && (
                <a
                  href={identity.leetcodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-chip/60 border border-border hover:border-accent text-text group transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-4 h-4 text-accent font-bold text-xs flex items-center justify-center font-mono">
                      LC
                    </span>
                    <span className="text-sm font-medium font-sans">LeetCode</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted group-hover:text-accent transition-colors" />
                </a>
              )}

              {/* Location */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-chip/40 border border-border text-muted text-sm">
                <MapPin className="w-4 h-4 text-spark shrink-0" strokeWidth={1.75} />
                <span>{identity.location}</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column (7 cols): Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-[20px] editorial-card"
          >
            <h3 className="text-xl font-bold font-heading text-text mb-1">
              Send a message
            </h3>
            <p className="text-xs text-muted font-mono mb-6">
              Drop a note regarding opportunities or projects.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-mono text-text mb-1.5 font-medium"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Shubham Kumar"
                  className="w-full px-4 py-2.5 min-h-[44px] rounded-lg bg-chip border border-border text-text placeholder:text-muted/60 text-sm focus:outline-none focus:border-accent transition-colors font-sans"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-mono text-text mb-1.5 font-medium"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="name@example.com"
                  className="w-full px-4 py-2.5 min-h-[44px] rounded-lg bg-chip border border-border text-text placeholder:text-muted/60 text-sm focus:outline-none focus:border-accent transition-colors font-sans"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono text-text mb-1.5 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message here..."
                  className="w-full px-4 py-2.5 rounded-lg bg-chip border border-border text-text placeholder:text-muted/60 text-sm focus:outline-none focus:border-accent transition-colors font-sans resize-y"
                />
              </div>

              {formStatus.message && (
                <div
                  className={`p-3 rounded-lg text-xs font-mono ${
                    formStatus.type === 'error'
                      ? 'bg-error/10 border border-error/30 text-error'
                      : 'bg-success/10 border border-success/30 text-success'
                  }`}
                >
                  {formStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full justify-center cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send message</span>
                    <Send className="w-4 h-4" strokeWidth={1.75} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
