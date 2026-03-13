import { motion } from 'framer-motion';
import { SectionHeader } from './WebsitesSection';

const automations = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    number: '01',
    title: 'Support Chatbot',
    subtitle: 'Text-Based AI Assistant',
    color: '#00ff88',
    borderColor: 'rgba(0,255,136,0.2)',
    glowColor: 'rgba(0,255,136,0.12)',
    tag: 'Text Chat',
    desc: 'An AI chatbot trained on your server\'s rules and Minecraft knowledge, embedded directly on your website to handle player questions and issues around the clock — no staff needed.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
    number: '02',
    title: 'Voice Support Bot',
    subtitle: 'Voice-Enabled AI Assistant',
    color: '#00e5ff',
    borderColor: 'rgba(0,229,255,0.2)',
    glowColor: 'rgba(0,229,255,0.12)',
    tag: 'Voice Mode',
    desc: 'The same intelligent support experience, fully voice-enabled. Players speak their issue and receive instant spoken responses — integrated right on your server website.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
      </svg>
    ),
    number: '03',
    title: 'AI Ticket Manager',
    subtitle: 'Smart Issue Tracking',
    color: '#ffd700',
    borderColor: 'rgba(255,215,0,0.2)',
    glowColor: 'rgba(255,215,0,0.12)',
    tag: 'Auto Tickets',
    desc: 'Automatically opens a structured support ticket when a player reports an issue, and instantly emails you with the full details — severity, player info, and a suggested fix.',
  },
];

function AutomationCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="relative rounded-lg overflow-hidden group"
      style={{
        background: 'rgba(255,255,255,0.025)',
        border: `1px solid ${item.borderColor}`,
        transition: 'all 0.35s ease',
      }}
    >
      {/* Top glow strip */}
      <div className="absolute top-0 left-0 right-0 h-20 pointer-events-none"
        style={{ background: `linear-gradient(180deg, ${item.color}10, transparent)` }} />

      {/* Hover inner glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg"
        style={{ boxShadow: `inset 0 0 40px ${item.glowColor}` }} />

      <div className="relative z-10 p-6">
        {/* Top row */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="font-display text-3xl font-black opacity-10 leading-none select-none"
              style={{ color: item.color, fontFamily: 'Orbitron, monospace' }}>
              {item.number}
            </div>
            <div className="p-2.5 rounded-lg"
              style={{ background: `${item.color}15`, color: item.color, border: `1px solid ${item.color}28` }}>
              {item.icon}
            </div>
          </div>
          <span className="font-mono text-[9px] px-2.5 py-1.5 tracking-widest uppercase"
            style={{ background: `${item.color}12`, border: `1px solid ${item.color}38`, color: item.color }}>
            {item.tag}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-lg font-bold text-white mb-1 tracking-wide">{item.title}</h3>
        <p className="font-mono text-[9px] tracking-wider mb-4" style={{ color: item.color }}>{item.subtitle}</p>

        {/* Short summary only */}
        <p className="font-body text-slate-400 text-sm leading-relaxed">{item.desc}</p>
      </div>

      {/* Bottom color accent line */}
      <div className="h-px mx-6 mb-0" style={{ background: `linear-gradient(90deg, ${item.color}40, transparent)` }} />
    </motion.div>
  );
}

export default function AutomationSection() {
  return (
    <section id="automation" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #0a0a0f 0%, #08080c 50%, #0a0a0f 100%)' }} />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 60% at 0% 50%, rgba(0,229,255,0.04), transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="// AI Powered"
          title="AI"
          accent="Automations"
          sub="Supercharge your Minecraft server with intelligent automation systems."
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {automations.map((item, i) => (
            <AutomationCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
