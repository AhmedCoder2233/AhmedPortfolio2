import { motion } from 'framer-motion';
import { SectionHeader } from './WebsitesSection';

const offerings = [
  { icon: '⚡', label: 'Website Development', desc: 'Custom Minecraft server websites built to convert.' },
  { icon: '🤖', label: 'AI Automations', desc: 'Chatbots, voice bots & ticket systems for your server.' },
  { icon: '🎨', label: 'AI Graphics', desc: 'Thumbnails, logos & banners generated with AI.' },
  { icon: '📦', label: 'Full Package', desc: 'Everything above — bundled at a premium rate.' },
];

export default function ContactSection() {
  return (
    <>
      <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #0a0a0f 0%, #06060a 100%)' }} />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 100% at 50% 0%, rgba(0,255,136,0.08), transparent)' }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="// Contact"
            title="Start Your"
            accent="Project"
            sub="Ready to take your Minecraft server to the next level? Reach out on Discord — I respond within 2 hours."
          />

          {/* Services offered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
          >
            {offerings.map((o, i) => (
              <motion.div
                key={o.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="text-center p-5 rounded-lg"
                style={{ background: 'rgba(0,255,136,0.03)', border: '1px solid rgba(0,255,136,0.1)' }}
              >
                <div className="text-2xl mb-2">{o.icon}</div>
                <div className="font-display text-white text-xs font-bold tracking-wide mb-1.5">{o.label}</div>
                <div className="font-body text-slate-500 text-xs leading-relaxed">{o.desc}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Discord CTA — the main block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden"
            style={{ background: 'rgba(88,101,242,0.07)', border: '1px solid rgba(88,101,242,0.25)' }}
          >
            {/* Glow bg */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(88,101,242,0.08), transparent)' }} />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 p-8 md:p-12">
              {/* Left: Discord icon big */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="flex-shrink-0 w-24 h-24 rounded-2xl flex items-center justify-center"
                style={{ background: 'rgba(88,101,242,0.2)', border: '1px solid rgba(88,101,242,0.4)' }}
              >
                <svg viewBox="0 0 24 24" fill="#5865F2" className="w-12 h-12">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                </svg>
              </motion.div>

              {/* Middle: Text */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
                  <span className="font-mono text-xs text-[#00ff88] tracking-[0.2em] uppercase">Currently Accepting Projects</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-white font-black mb-3 tracking-tight">
                  Let&apos;s Build on <span style={{ color: '#5865F2' }}>Discord</span>
                </h3>
                <p className="font-body text-slate-400 text-base leading-relaxed mb-2">
                  Message me on Discord to discuss your project, get a free quote, and start building something legendary for your Minecraft server.
                </p>
                <p className="font-mono text-xs text-slate-600 tracking-wider">
                  Typical response time: <span className="text-[#00ff88]">under 2 hours</span>
                </p>
              </div>

              {/* Right: CTA Button */}
              <div className="flex-shrink-0 flex flex-col gap-3 items-center">
                <motion.a
                  href="https://discord.com/users/1244352648212254850"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.06, boxShadow: '0 0 40px rgba(88,101,242,0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 px-8 py-4 font-display font-bold text-sm tracking-widest uppercase text-white pixel-corners"
                  style={{ background: '#5865F2' }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                  </svg>
                  Open Discord
                </motion.a>
                <span className="font-mono text-[10px] text-slate-600 tracking-wider">Ahmed Store</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fixed Discord FAB */}
      <motion.a
        href="https://discord.com/users/1244352648212254850"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl"
        style={{
          background: '#5865F2',
          boxShadow: '0 0 0 0 rgba(88,101,242,0.4)',
          animation: 'discordPulse 3s ease-in-out infinite',
        }}
        title="Message on Discord"
      >
        <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
        </svg>
      </motion.a>

      {/* Footer */}
      <footer className="relative border-t border-[#00ff88]/8 py-10 px-4" style={{ background: '#060608' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 relative">
                <div className="absolute inset-0 bg-[#00ff88] pixel-corners opacity-20" />
                <div className="absolute inset-[2px] bg-[#060608] pixel-corners flex items-center justify-center">
                  <span className="font-display text-[#00ff88] text-xs font-bold">A</span>
                </div>
              </div>
              <span className="font-display text-white font-bold tracking-wider">
                AHMED<span className="text-[#00ff88]">STORE</span>
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-6 justify-center">
              {['#home', '#websites', '#automation', '#graphics', '#contact'].map((href, i) => (
                <a key={href} href={href} className="font-mono text-[11px] text-slate-600 hover:text-[#00ff88] transition-colors tracking-widest uppercase">
                  {['Home', 'Websites', 'Automation', 'Graphics', 'Contact'][i]}
                </a>
              ))}
            </div>
            <p className="font-mono text-[11px] text-slate-700 tracking-wider">
              © 2025 AhmedStore
            </p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes discordPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(88,101,242,0.5), 0 8px 32px rgba(88,101,242,0.4); }
          50% { box-shadow: 0 0 0 10px rgba(88,101,242,0), 0 8px 32px rgba(88,101,242,0.4); }
        }
      `}</style>
    </>
  );
}
