import { motion } from 'framer-motion';
import { SectionHeader } from './WebsitesSection';

const thumbnails = [
  {
    title: 'Minecraft Server Banner',
    type: 'Server Banner',
    img: '/thumbnail3.webp',
    color: '#ff4d00',
  },
  {
    title: 'Minecraft Server Banner',
    type: 'Server Banner',
    img: '/thumbnail5.webp',
    color: '#00e5ff',
  },
  {
    title: 'Minecraft Server Banner',
    type: 'Server Banner',
    img: '/thumbnail6.webp',
    color: '#ffd700',
  },
];

const logos = [
  {
    title: 'Crackex Network',
    type: 'Server Logo',
    img: '/logoweb (1).png',
    color: '#00ff88',
  },
  {
    title: 'River SMP',
    type: 'Server Logo',
    img: '/logoweb (2).png',
    color: '#a855f7',
  },
  {
    title: 'Skyhigh SMP',
    type: 'Server Logo',
    img: '/logoweb (3).png',
    color: '#00e5ff',
  },
];

function ThumbnailCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="glass-card rounded-lg overflow-hidden group"
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/9', width: '100%' }}>
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full transition-transform duration-500 group-hover:scale-105"
          style={{ objectFit: 'cover', objectPosition: 'center', display: 'block' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/80 via-transparent to-transparent" />
        <div
          className="absolute top-3 right-3 font-mono text-[9px] px-2 py-1 tracking-widest uppercase"
          style={{ background: `${item.color}25`, border: `1px solid ${item.color}50`, color: item.color }}
        >
          {item.type}
        </div>
        <div className="absolute bottom-3 left-3">
          <h3 className="font-display text-white text-sm font-bold tracking-wide drop-shadow-lg">{item.title}</h3>
        </div>
      </div>
      <div className="px-4 py-3 flex items-center justify-between">
        <span className="font-mono text-[10px] text-slate-500 tracking-wider uppercase">16:9</span>
        <div className="h-1 w-10 rounded-full" style={{ background: item.color }} />
      </div>
    </motion.div>
  );
}

function LogoCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="glass-card rounded-lg overflow-hidden group"
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: '1/1', width: '100%' }}>
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full transition-transform duration-500 group-hover:scale-105"
          style={{ objectFit: 'cover', objectPosition: 'center', display: 'block' }}
        />
        <div
          className="absolute top-3 left-3 font-mono text-[9px] px-2 py-1 tracking-widest uppercase"
          style={{ background: `${item.color}25`, border: `1px solid ${item.color}50`, color: item.color }}
        >
          {item.type}
        </div>
      </div>
      <div className="px-4 py-3 flex items-center justify-between">
        <h3 className="font-display text-white text-xs font-bold tracking-wide">{item.title}</h3>
        <span className="font-mono text-[10px] text-slate-500 tracking-wider uppercase">1:1</span>
      </div>
    </motion.div>
  );
}

export default function GraphicsSection() {
  return (
    <section id="graphics" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div
        className="absolute top-0 right-0 w-2/3 h-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 70% at 100% 30%, rgba(168,85,247,0.05), transparent)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="// Visual Design"
          title="AI"
          accent="Graphics"
          sub="Stunning Minecraft visuals generated with AI — Banners & logos that stop the scroll."
        />

        {/* Thumbnails */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#00ff88]/30" />
          <span className="font-mono text-xs text-[#00ff88] tracking-[0.25em] uppercase px-3 py-1.5 border border-[#00ff88]/20 bg-[#00ff88]/5 whitespace-nowrap">
Banners — 16:9
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#00ff88]/30" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {thumbnails.map((t, i) => (
            <ThumbnailCard key={t.title} item={t} index={i} />
          ))}
        </div>

        {/* Logos */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#00e5ff]/30" />
          <span className="font-mono text-xs text-[#00e5ff] tracking-[0.25em] uppercase px-3 py-1.5 border border-[#00e5ff]/20 bg-[#00e5ff]/5 whitespace-nowrap">
            Logos — 1:1
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#00e5ff]/30" />
        </div>

        {/* 3-column full-width logos grid — no gaps/space issues */}
        <div className="grid grid-cols-3 gap-5">
          {logos.map((l, i) => (
            <LogoCard key={l.title} item={l} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <div
            className="inline-block max-w-lg mx-auto p-8 rounded-lg text-center"
            style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(0,255,136,0.12)' }}
          >
            <div className="font-mono text-xs text-[#00ff88] tracking-widest uppercase mb-3">Custom AI Graphics</div>
            <h3 className="font-display text-white text-xl font-bold mb-3">Need Custom Visuals?</h3>
            <p className="font-body text-slate-400 text-sm mb-6">
              From YouTube thumbnails to full brand kits — crafted with AI, tailored to your server&apos;s identity.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex px-7 py-3 bg-[#00ff88] text-[#0a0a0f] font-display font-bold text-xs tracking-widest uppercase pixel-corners"
            >
              Order Graphics
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
