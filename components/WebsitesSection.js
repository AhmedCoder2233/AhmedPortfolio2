import { motion } from 'framer-motion';

const websites = [
  {
    title: 'Arista MC',
    category: 'Minecraft Website',
    color: '#00ff88',
    img: '/Screenshot (181).png',
    desc: 'Fully animated premium minecraft website.',
    link: 'https://arista-mc.vercel.app/',
  },
  {
    title: 'Ocean SMP',
    category: 'Minecraft Website',
    color: '#00e5ff',
    img: '/Screenshot (182).png',
    desc: 'Fully animated premium minecraft website.',
    link: 'https://mine-craft-website.vercel.app/',
  },
  {
    title: 'Shock SMP',
    category: 'Minecraft Website',
    color: '#ffd700',
    img: '/Screenshot (183).png',
    desc: 'Fully animated premium minecraft website.',
    link: 'https://shock-smp-vy8g.vercel.app/',
  },
  {
    title: 'Season MC',
    category: 'Minecraft Website',
    color: '#ff4d00',
    img: '/Screenshot (185).png',
    desc: 'Fully animated premium minecraft website.',
    link: 'https://season-mc.vercel.app/',
  },
  {
    title: 'Plugin Marketplace Landing Page',
    category: 'Plugin Marketplace',
    color: '#a855f7',
    img: '/Screenshot (186).png',
    desc: 'Fully animated premium minecraft plugin marketplace landing page.',
    link: 'https://plugin-marketplace-iota.vercel.app/',
  },
  {
    title: 'Grand SMP',
    category: 'Minecraft Website',
    color: '#00ff88',
    img: '/Screenshot (187).png',
    desc: 'Fully animated premium minecraft website.',
    link: 'https://grandsmp.netlify.app/',
  },
];

export function SectionHeader({ badge, title, accent, sub }) {
  return (
    <div className="text-center mb-16">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block font-mono text-xs text-[#00ff88] tracking-[0.3em] uppercase mb-4 px-3 py-1.5 border border-[#00ff88]/20 bg-[#00ff88]/5"
      >
        {badge}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight"
      >
        {title} <span className="gradient-text-acid">{accent}</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="font-body text-slate-400 text-lg max-w-xl mx-auto"
      >
        {sub}
      </motion.p>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="w-24 h-px mx-auto mt-6 bg-gradient-to-r from-transparent via-[#00ff88] to-transparent"
      />
    </div>
  );
}

function WebsiteCard({ site, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="glass-card rounded-lg overflow-hidden group cursor-pointer flex flex-col"
    >
      {/* Image */}
      <div className="relative w-full overflow-hidden flex-shrink-0" style={{ aspectRatio: '16/9' }}>
        <img
          src={site.img}
          alt={site.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/20 to-transparent" />
        <div
          className="absolute top-3 left-3 px-2 py-1 font-mono text-[10px] tracking-widest uppercase"
          style={{ background: `${site.color}22`, border: `1px solid ${site.color}55`, color: site.color }}
        >
          {site.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display text-white font-bold text-sm mb-2 tracking-wide">{site.title}</h3>
        <p className="font-body text-slate-400 text-sm leading-relaxed flex-1 mb-4">{site.desc}</p>

        {/* View Live Button */}
        <motion.a
          href={site.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center justify-center gap-2 w-full py-2.5 font-display font-bold text-[10px] tracking-widest uppercase transition-all duration-200 group/btn"
          style={{
            background: `${site.color}12`,
            border: `1px solid ${site.color}40`,
            color: site.color,
          }}
          onMouseEnter={e => { e.currentTarget.style.background = site.color; e.currentTarget.style.color = '#0a0a0f'; }}
          onMouseLeave={e => { e.currentTarget.style.background = `${site.color}12`; e.currentTarget.style.color = site.color; }}
        >
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-3 h-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 2H2v12h12v-4M9 2h5v5M14 2L8 8" />
          </svg>
          View Live
        </motion.a>
      </div>
    </motion.div>
  );
}

export default function WebsitesSection() {
  return (
    <section id="websites" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 60% at 100% 50%, rgba(0,229,255,0.04), transparent)' }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="// Portfolio"
          title="Website"
          accent="Samples"
          sub="Handcrafted Minecraft web experiences that convert visitors into players."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {websites.map((site, i) => (
            <WebsiteCard key={site.title} site={site} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
