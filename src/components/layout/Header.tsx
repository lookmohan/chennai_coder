import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { startingPrice } from "../../data/training";

const navItems = [
  { label: "Services", to: "/services" },
  { label: "Work", to: "/work" },
  
  { label: "Training", to: "/training" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const OFFER_HEIGHT = 40;

export default function Header({
  offerOpen,
  onCloseOffer,
}: {
  offerOpen: boolean;
  onCloseOffer: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Course-offer banner. Closing it slides the header (and page
          content, via App.tsx) back up to the very top. */}
      <AnimatePresence>
        {offerOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: OFFER_HEIGHT, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-0 z-[60] overflow-hidden bg-text text-white"
          >
            <div className="relative h-10 container max-w-content flex items-center justify-center px-12 sm:px-14">
              <Link to="/training" className="text-xs sm:text-sm font-medium text-center leading-tight hover:underline">
                Courses start from <strong className="font-display">{startingPrice}</strong>
                <span className="hidden sm:inline"> — message now to join</span>
              </Link>
              <button
                onClick={onCloseOffer}
                aria-label="Close offer"
                className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-white/15 transition-colors"
              >
                <X size={15} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.header
        animate={{ top: offerOpen ? OFFER_HEIGHT : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 z-50 transition-colors duration-200 ${
          scrolled || open ? "bg-white/95 backdrop-blur border-b border-border shadow-sm" : "bg-white/95 backdrop-blur border-b border-border"
        }`}
      >
        <div className="container max-w-content flex items-center justify-between h-16">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 font-display font-semibold text-lg shrink-0 group"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              src="/logo.png"
              alt="Chennai Coder"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            Chennai Coder
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className="relative py-1 group">
                {({ isActive }) => (
                  <>
                    <span className={`text-sm transition-colors ${isActive ? "text-text" : "text-text-muted group-hover:text-text"}`}>
                      {item.label}
                    </span>
                    <span
                      className={`absolute -bottom-0.5 left-0 h-[2px] bg-brand-gradient transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="hidden md:block">
            <Link to="/contact" className="btn-primary text-sm !px-5 !py-2.5">
              Start a Project
            </Link>
          </motion.div>

          <button
            className="md:hidden text-text p-1"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  <X size={24} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  <Menu size={24} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden border-t border-border bg-bg overflow-y-auto"
              style={{ maxHeight: `calc(100dvh - 4rem - ${offerOpen ? OFFER_HEIGHT : 0}px)` }}
            >
              <div className="px-6 py-6 flex flex-col gap-1">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <NavLink
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `block py-3 text-lg border-b border-border/60 ${
                          isActive ? "text-text" : "text-text-muted"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.05, duration: 0.3 }}
                >
                  <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-6 justify-center">
                    Start a Project
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
