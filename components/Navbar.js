import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Websites', href: '#websites' },
  { label: 'AI Automation', href: '#automation' },
  { label: 'AI Graphics', href: '#graphics' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-[#00ff88]/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.03 }}
          >
            <div className="w-9 h-9 relative">
              <div className="absolute inset-0 bg-[#00ff88] pixel-corners opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="absolute inset-[2px] bg-[#0a0a0f] pixel-corners flex items-center justify-center">
                <span className="font-display text-[#00ff88] text-sm font-bold">A</span>
              </div>
            </div>
            <span className="font-display text-white text-base md:text-lg font-bold tracking-wider">
              AHMED<span className="text-[#00ff88]">STORE</span>
            </span>
          </motion.a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body font-semibold text-sm tracking-widest text-slate-400 hover:text-[#00ff88] px-4 py-2 uppercase transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-[#00ff88] group-hover:w-3/4 transition-all duration-300" />
              </a>
            ))}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-5 py-2 bg-[#00ff88] text-[#0a0a0f] font-display font-bold text-xs tracking-widest pixel-corners uppercase hover:bg-[#00e5ff] transition-colors duration-200"
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={
                  menuOpen
                    ? i === 0
                      ? { rotate: 45, y: 8 }
                      : i === 1
                      ? { opacity: 0 }
                      : { rotate: -45, y: -8 }
                    : { rotate: 0, y: 0, opacity: 1 }
                }
                className="block w-6 h-0.5 bg-[#00ff88] origin-center transition-all"
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-t border-[#00ff88]/10"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-body font-semibold text-base tracking-widest text-slate-400 hover:text-[#00ff88] py-2 uppercase transition-colors border-b border-white/5"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-3 px-5 py-3 bg-[#00ff88] text-[#0a0a0f] font-display font-bold text-xs tracking-widest text-center pixel-corners uppercase"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
