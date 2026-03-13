import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const services = ['Website Development', 'AI Automations', 'AI Graphics'];

function MinecraftBlock({ className, color = '#00ff88', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4 }}
      className={`absolute w-8 h-8 md:w-12 md:h-12 ${className}`}
      style={{
        background: `${color}22`,
        border: `1px solid ${color}44`,
        boxShadow: `0 0 12px ${color}33`,
      }}
    />
  );
}

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.1,
      color: Math.random() > 0.6 ? '#00ff88' : Math.random() > 0.5 ? '#00e5ff' : '#ffffff',
    }));

    let animId;
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });
      animId = requestAnimationFrame(draw);
    }
    draw();

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Canvas particles */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }} />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060608] via-transparent to-[#0a0a0f]" style={{ zIndex: 1 }} />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(0,255,136,0.12), transparent)',
          zIndex: 1,
        }}
      />

      {/* Floating MC Blocks */}
      <MinecraftBlock className="top-[20%] left-[8%] animate-float" color="#00ff88" delay={0.5} />
      <MinecraftBlock className="top-[35%] left-[5%] animate-float" color="#00e5ff" delay={0.8} style={{ animationDelay: '1s' }} />
      <MinecraftBlock className="top-[60%] left-[10%] animate-float" color="#ffd700" delay={1.0} />
      <MinecraftBlock className="top-[15%] right-[8%] animate-float" color="#ff4d00" delay={0.6} />
      <MinecraftBlock className="top-[40%] right-[6%] animate-float" color="#00ff88" delay={0.9} />
      <MinecraftBlock className="top-[65%] right-[9%] animate-float" color="#00e5ff" delay={1.1} />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-[#00ff88]/20 rounded-full bg-[#00ff88]/5"
        >
          <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
          <span className="font-mono text-[#00ff88] text-xs tracking-[0.2em] uppercase">Available for Projects</span>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 leading-none tracking-tighter">
            <span className="text-white">AHMED</span>
            <span className="gradient-text-acid text-glow-acid"> STORE</span>
          </h1>
          <div className="w-32 h-1 mx-auto bg-gradient-to-r from-[#00ff88] to-[#00e5ff] mb-6" style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 100%, 4px 100%)' }} />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-body text-lg md:text-xl lg:text-2xl text-slate-400 mb-4 max-w-2xl mx-auto font-light tracking-wide"
        >
          Premium Minecraft Services for the Next Generation
        </motion.p>

        {/* Service tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          {services.map((s, i) => (
            <span
              key={s}
              className="font-mono text-xs px-3 py-1.5 tracking-widest uppercase"
              style={{
                background: 'rgba(0,255,136,0.05)',
                border: '1px solid rgba(0,255,136,0.2)',
                color: ['#00ff88', '#00e5ff', '#ffd700'][i],
              }}
            >
              {['⚡', '🤖', '🎨'][i]} {s}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#websites"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,255,136,0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-[#00ff88] text-[#0a0a0f] font-display font-bold text-sm tracking-widest uppercase pixel-corners w-full sm:w-auto text-center"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 font-display font-bold text-sm tracking-widest uppercase text-[#00ff88] w-full sm:w-auto text-center"
            style={{ border: '1px solid rgba(0,255,136,0.4)', background: 'rgba(0,255,136,0.05)' }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] text-slate-600 tracking-[0.3em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-10 bg-gradient-to-b from-[#00ff88]/60 to-transparent"
          />
        </motion.div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-20 left-6 w-16 h-16 border-l-2 border-t-2 border-[#00ff88]/20 pointer-events-none" style={{ zIndex: 2 }} />
      <div className="absolute top-20 right-6 w-16 h-16 border-r-2 border-t-2 border-[#00ff88]/20 pointer-events-none" style={{ zIndex: 2 }} />
    </section>
  );
}
