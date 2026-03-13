import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const BLOCKS = [
  { char: 'A', color: '#00ff88' },
  { char: 'H', color: '#00e5ff' },
  { char: 'M', color: '#ffd700' },
  { char: 'E', color: '#00ff88' },
  { char: 'D', color: '#a855f7' },
];

export default function Intro({ onComplete }) {
  const [phase, setPhase] = useState('blocks');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('logo'), 500);
    const t2 = setTimeout(() => setPhase('exit'), 800);
    const t2b = setTimeout(() => setPhase('done'), 1300);
    const t3 = setTimeout(() => onComplete(), 1100);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t2b); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden"
          style={{ background: '#060608' }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(rgba(0,255,136,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,136,0.05) 1px,transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,255,136,0.1), transparent)' }}
          />

          {[
            'top-8 left-8 border-l-2 border-t-2',
            'top-8 right-8 border-r-2 border-t-2',
            'bottom-8 left-8 border-l-2 border-b-2',
            'bottom-8 right-8 border-r-2 border-b-2',
          ].map((cls, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
              className={`absolute w-10 h-10 md:w-16 md:h-16 border-[#00ff88]/30 ${cls}`}
            />
          ))}

          <AnimatePresence mode="wait">
            {phase === 'blocks' && (
              <motion.div
                key="blocks"
                exit={{ opacity: 0, y: -30, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="flex items-center gap-2 md:gap-4"
              >
                {BLOCKS.map((b, i) => (
                  <motion.div
                    key={b.char}
                    initial={{ y: -80, opacity: 0, rotateX: -90 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    transition={{
                      delay: i * 0.1,
                      duration: 0.5,
                      type: 'spring',
                      stiffness: 200,
                      damping: 15,
                    }}
                    className="relative w-14 h-14 md:w-20 md:h-20 flex items-center justify-center"
                    style={{
                      background: `${b.color}15`,
                      border: `2px solid ${b.color}50`,
                      boxShadow: `0 0 20px ${b.color}30, inset 0 0 20px ${b.color}08`,
                    }}
                  >
                    <div className="absolute top-0 left-0 w-2 h-2" style={{ background: '#060608' }} />
                    <div className="absolute top-0 right-0 w-2 h-2" style={{ background: '#060608' }} />
                    <div className="absolute bottom-0 left-0 w-2 h-2" style={{ background: '#060608' }} />
                    <div className="absolute bottom-0 right-0 w-2 h-2" style={{ background: '#060608' }} />
                    <span
                      className="font-display text-2xl md:text-3xl font-black"
                      style={{ fontFamily: 'Orbitron, monospace', color: b.color, textShadow: `0 0 20px ${b.color}` }}
                    >
                      {b.char}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {(phase === 'logo' || phase === 'exit') && (
              <motion.div
                key="logo"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
                className="text-center"
              >
                <motion.h1
                  className="font-display text-5xl md:text-7xl font-black tracking-tighter mb-3"
                  style={{ fontFamily: 'Orbitron, monospace' }}
                >
                  <span className="text-white">AHMED</span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.4 }}
                    style={{
                      background: 'linear-gradient(135deg, #00ff88, #00e5ff)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      textShadow: 'none',
                    }}
                  >
                    {' '}STORE
                  </motion.span>
                </motion.h1>

                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="h-px mx-auto mb-4"
                  style={{
                    width: '200px',
                    background: 'linear-gradient(90deg, transparent, #00ff88, #00e5ff, transparent)',
                  }}
                />

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center justify-center gap-3"
                >
                  <span
                    className="font-mono text-xs text-slate-500 tracking-[0.25em] uppercase"
                    style={{ fontFamily: 'Space Mono, monospace' }}
                  >
                    Premium Minecraft Services
                  </span>
                </motion.div>

                <motion.div
                  className="mt-8 mx-auto h-px overflow-hidden"
                  style={{ width: '160px', background: 'rgba(255,255,255,0.06)' }}
                >
                  <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: '0%' }}
                    transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
                    className="h-full"
                    style={{ background: 'linear-gradient(90deg, #00ff88, #00e5ff)' }}
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ top: '-4px' }}
            animate={{ top: '100%' }}
            transition={{ duration: 2.5, ease: 'linear', repeat: Infinity }}
            className="absolute left-0 right-0 h-px pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(0,255,136,0.4), transparent)',
              boxShadow: '0 0 8px rgba(0,255,136,0.3)',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}