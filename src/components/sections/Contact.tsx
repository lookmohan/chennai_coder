import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import Reveal from "../Reveal";
import { fadeUp, slideInLeft, stagger, viewportOnce } from "../../lib/motion";

const services = ["AI Development", "Software Development", "Automation", "Technical Training", "Other"];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: services[0],
    message: "",
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // No backend is connected yet, so this opens WhatsApp with the enquiry
    // pre-filled, rather than pretending to "send" it server-side. Swap
    // this for a real endpoint later if you want in-page submission —
    // the fields below are already structured for that.
    const text = encodeURIComponent(
      `New enquiry from ${form.name} (${form.email})${form.company ? `, ${form.company}` : ""}\nService: ${form.service}\n\n${form.message}`
    );
    window.open(`https://wa.me/917395981362?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contact" className="pt-10 pb-20 sm:pt-14 sm:pb-28">
      <div className="container max-w-content">
        <div className="grid gap-14 lg:grid-cols-[1fr,1.3fr]">
          <Reveal variants={slideInLeft}>
            <p className="eyebrow mb-3">Contact</p>
            <h1 className="font-display text-3xl sm:text-4xl font-semibold leading-tight mb-6">
              Start a project
            </h1>
            <p className="text-text-muted leading-relaxed mb-8 max-w-sm">
              Send a short description of what you need — you'll hear back
              directly from Mohanraj.
            </p>

            <motion.ul
              className="space-y-4 text-sm"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={stagger(0.1)}
            >
              <motion.li variants={fadeUp} whileHover={{ x: 4 }} className="flex items-center gap-3 text-text-muted">
                <Mail size={18} className="text-primary" />
                <a href="mailto:chennaicoder.support@gmail.com" className="hover:text-text">
                  chennaicoder.support@gmail.com
                </a>
              </motion.li>
              <motion.li variants={fadeUp} whileHover={{ x: 4 }} className="flex items-center gap-3 text-text-muted">
                <MessageCircle size={18} className="text-primary" />
                <a href="https://wa.me/917395981362" className="hover:text-text">
                  +91 7395981362 (WhatsApp)
                </a>
              </motion.li>
              <motion.li variants={fadeUp} className="flex items-center gap-3 text-text-muted">
                <MapPin size={18} className="text-primary" />
                Chennai, Tamil Nadu, India
              </motion.li>
            </motion.ul>
          </Reveal>

          <Reveal delay={0.1} as="div">
            <form onSubmit={handleSubmit} className="card grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm">
                  Name
                  <input
                    required
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="rounded-lg bg-surface-2 border border-border px-4 py-2.5 text-text focus:border-primary outline-none transition-colors"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm">
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="rounded-lg bg-surface-2 border border-border px-4 py-2.5 text-text focus:border-primary outline-none transition-colors"
                  />
                </label>
              </div>

              <label className="flex flex-col gap-2 text-sm">
                Company / organization (optional)
                <input
                  name="company"
                  autoComplete="organization"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="rounded-lg bg-surface-2 border border-border px-4 py-2.5 text-text focus:border-primary outline-none transition-colors"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm">
                Service
                <select
                  name="service"
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="rounded-lg bg-surface-2 border border-border px-4 py-2.5 text-text focus:border-primary outline-none transition-colors"
                >
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </label>

              <label className="flex flex-col gap-2 text-sm">
                Message
                <textarea
                  required
                  rows={4}
                  name="message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="rounded-lg bg-surface-2 border border-border px-4 py-2.5 text-text focus:border-primary outline-none resize-none transition-colors"
                />
              </label>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="btn-primary justify-center"
              >
                Send enquiry
              </motion.button>
              <p className="text-xs text-text-faint text-center">
                Opens WhatsApp with this enquiry pre-filled.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
