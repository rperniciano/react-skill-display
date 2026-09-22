import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

import { pageMetadata } from '../../seo';

const PATH = '/servizi';
// Italian-only hub - see generateStaticParams below. Shared by
// generateMetadata's `locales` and <Navbar>'s so both agree on what this
// page's real locale coverage is.
const LOCALES = ['it'] as const;

/**
 * Italian-only hub for the two commercial service pages under /servizi/*.
 * Same mechanics as those two pages (see the note in
 * app/[lang]/servizi/automazione-documentale-pa/page.tsx):
 * `generateStaticParams` returning only `{ lang: 'it' }`, combined with
 * `dynamicParams = false`, means `/en/servizi` and `/es/servizi` 404 rather
 * than rendering.
 */
export function generateStaticParams() {
  return [{ lang: 'it' }];
}

export const dynamicParams = false;

type ServiziPageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: ServiziPageProps): Promise<Metadata> {
  const { lang } = await params;

  if (lang !== 'it') {
    notFound();
  }

  return pageMetadata({
    language: 'it',
    path: PATH,
    // Italian only - see the note on generateStaticParams above.
    locales: LOCALES,
    title: 'Servizi: automazione documentale e consulenza AI/.NET | Riccardo Perniciano',
    description:
      'I due servizi che offro come libero professionista: automazione documentale con AI per la PA, e consulenza AI e .NET per sistemi in produzione.',
  });
}

export default async function ServiziPage({ params }: ServiziPageProps) {
  const { lang } = await params;

  if (lang !== 'it') {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar locales={LOCALES} />
      <main>
        <section className="pb-20 pt-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Link
                href="/it"
                className="mb-8 inline-block text-sm text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
              >
                ← Torna alla home
              </Link>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Servizi
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-12">
                Due tipi di progetto che seguo in proprio, come libero professionista,
                parallelamente al mio ruolo da Solution Architect &amp; Technical Lead in FEDRO
                Software.
              </p>

              <div className="grid gap-8 sm:grid-cols-2">
                <Link
                  href="/it/servizi/automazione-documentale-pa"
                  className="block rounded-2xl border border-gray-200 dark:border-gray-700 p-6 hover:border-purple-400 dark:hover:border-purple-500 transition-colors"
                >
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Automazione documentale per la PA
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    Studio di fattibilità e automazioni documentali per enti pubblici e
                    consorzi, con backend on-premise, accesso all&apos;AI mediato da server MCP
                    e conformità all&apos;AI Act. Caso reale in corso: C.I.S.A., fase 1.
                  </p>
                  <span className="text-purple-600 dark:text-purple-400 text-sm font-medium">
                    Scopri di più →
                  </span>
                </Link>

                <Link
                  href="/it/servizi/consulenza-ai-dotnet"
                  className="block rounded-2xl border border-gray-200 dark:border-gray-700 p-6 hover:border-purple-400 dark:hover:border-purple-500 transition-colors"
                >
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Consulenza AI e .NET
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    Architettura e integrazione AI per portare funzionalità AI dentro un
                    backend .NET in produzione, con un confine esplicito tra lavoro
                    deterministico e lavoro interpretativo. Caso reale: SPRocket, in FEDRO
                    Software, 99.9% di uptime.
                  </p>
                  <span className="text-purple-600 dark:text-purple-400 text-sm font-medium">
                    Scopri di più →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
