import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "../../lib/motion";

const socials = [
  { href: "https://github.com/lookmohan", label: "GitHub", Icon: Github },
  { href: "https://www.linkedin.com/in/moganraj", label: "LinkedIn", Icon: Linkedin },
  { href: "https://instagram.com/chennai_coder", label: "Instagram", Icon: Instagram },
  { href: "mailto:chennaicoder.support@gmail.com", label: "Email", Icon: Mail },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface-2">
      <div className="container max-w-content section-pad !py-14">
        <motion.div
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.08)}
        >
          <motion.div variants={fadeUp}>
            <div className="flex items-center gap-2 font-display font-semibold text-lg mb-3">
              <img src="/logo.png" alt="Chennai Coder" width={28} height={28} className="h-7 w-7" />
              Chennai Coder
            </div>
            <p className="text-sm text-text-muted max-w-xs">
              AI, software and automation solutions for businesses and startups,
              alongside practical technical training.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h3 className="font-display font-semibold text-sm mb-4">Explore</h3>
            <ul className="space-y-3 text-sm text-text-muted">
              <li><Link to="/services" className="hover:text-text">Services</Link></li>
              <li><Link to="/work" className="hover:text-text">Work</Link></li>
              
              <li><Link to="/training" className="hover:text-text">Training</Link></li>
              <li><Link to="/about" className="hover:text-text">About</Link></li>
              <li><Link to="/contact" className="hover:text-text">Contact</Link></li>
            </ul>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h3 className="font-display font-semibold text-sm mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-text-muted">
              <li>
                <a href="mailto:chennaicoder.support@gmail.com" className="hover:text-text">
                  chennaicoder.support@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/917395981362" className="hover:text-text">
                  +91 7395981362 (WhatsApp)
                </a>
              </li>
              <li className="text-text-faint leading-relaxed">
                No. 41, A, Mettur 2nd St, Madhuramettur,
                <br />
                Bharathidasan Nagar, Surapet,
                <br />
                Chennai, Tamil Nadu 600066
              </li>
            </ul>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h3 className="font-display font-semibold text-sm mb-4">Elsewhere</h3>
            <div className="flex gap-4">
              {socials.map(({ href, label, Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  whileHover={{ y: -2, color: "#1F4FD8" }}
                  className="text-text-muted"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between gap-4 text-xs text-text-faint">
          <p>
            &copy; {year} Chennai Coder. All rights reserved.
            <span className="hidden sm:inline"> · </span>
            <span className="block sm:inline">Udyam Registered (MSME) · UDYAM-TN-02-0493357</span>
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-text-muted">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-text-muted">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
