import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import AISection from '@/components/AISection';
import Solutions from '@/components/Solutions';
import WorkExperience from '@/components/WorkExperience';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

import { isLanguage } from '../i18n';
import { pageMetadata } from '../seo';

type HomePageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { lang } = await params;

  if (!isLanguage(lang)) {
    notFound();
  }

  // path '' => the locale home page. canonical + hreflang come from app/seo.ts.
  return pageMetadata({ language: lang });
}

/**
 * The home page. Built from the pre-migration `src/App.tsx` section tree, minus
 * the providers and <Analytics /> (both hoisted into the root layout so
 * Analytics is mounted once). That file is gone as of Phase 3.
 *
 * Section order reads as capability -> AI deep-dive -> what that builds for a
 * client -> track record -> proof -> who he is -> contact. <AISection /> and
 * <Solutions /> lost their mount point with the layout deleted during the
 * migration and are wired back in here.
 */
export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;

  // `dynamicParams = false` in the layout already 404s unknown segments; this
  // guard makes the page safe on its own too.
  if (!isLanguage(lang)) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <AISection />
        <Solutions />
        <WorkExperience />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
