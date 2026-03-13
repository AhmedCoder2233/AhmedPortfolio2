import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Intro from '@/components/Intro';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WebsitesSection from '@/components/WebsitesSection';
import AutomationSection from '@/components/AutomationSection';
import GraphicsSection from '@/components/GraphicsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  const [siteVisible, setSiteVisible] = useState(false);

  return (
    <>
      <Head>
        <title>Ahmed Store — Premium Minecraft Services</title>
        <meta name="description" content="Premium Minecraft services: Website Development, AI Automations & AI Graphics. Elevate your server today." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Intro onComplete={() => setSiteVisible(true)} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: siteVisible ? 1 : 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="min-h-screen bg-[#0a0a0f]"
      >
        <Navbar />
        <main>
          <Hero />
          <WebsitesSection />
          <AutomationSection />
          <GraphicsSection />
          <ContactSection />
        </main>
      </motion.div>
    </>
  );
}