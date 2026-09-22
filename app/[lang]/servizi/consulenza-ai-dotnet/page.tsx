import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle } from 'lucide-react';

import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

import { pageMetadata } from '../../../seo';
import { serviceJsonLd } from '../../../json-ld';
import JsonLd from '../../../JsonLd';

const PATH = '/servizi/consulenza-ai-dotnet';

/**
 * Italian-only commercial page - see the same note in
 * app/[lang]/servizi/automazione-documentale-pa/page.tsx.
 * `generateStaticParams` returning only `{ lang: 'it' }`, combined with
 * `dynamicParams = false`, means `/en/servizi/consulenza-ai-dotnet` and
 * `/es/servizi/consulenza-ai-dotnet` 404 rather than rendering.
 */
export function generateStaticParams() {
  return [{ lang: 'it' }];
}

export const dynamicParams = false;

type ServicePageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { lang } = await params;

  if (lang !== 'it') {
    notFound();
  }

  return pageMetadata({
    language: 'it',
    path: PATH,
    locales: ['it'],
    title: 'Consulenza AI e .NET per sistemi in produzione | Riccardo Perniciano',
    description:
      'Consulenza AI e .NET per portare funzionalità AI in produzione: architettura, integrazione LLM, resilienza. Caso reale: SPRocket, FEDRO Software, 99.9% uptime.',
  });
}

export default async function AiDotnetConsultingPage({ params }: ServicePageProps) {
  const { lang } = await params;

  if (lang !== 'it') {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <JsonLd
        data={serviceJsonLd({
          name: 'Consulenza AI e .NET per sistemi in produzione',
          description:
            'Architettura, integrazione LLM e sviluppo .NET per portare funzionalità AI in produzione, con un confine esplicito tra lavoro deterministico e lavoro interpretativo.',
          serviceType: 'Consulenza per applicazioni AI su .NET',
          path: PATH,
        })}
      />
      <Navbar />
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

              <span className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/50 rounded-full text-purple-700 dark:text-purple-300 text-sm mb-4">
                Consulenza
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Consulenza AI e .NET per sistemi che devono reggere la produzione
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-12">
                Lavoro con team che devono portare funzionalità AI dentro un backend .NET
                esistente, o costruirne uno da zero, e farlo arrivare in produzione con un
                confine chiaro tra quello che decide il codice e quello che decide il modello.
                Non è il servizio giusto per chi cerca una landing page o un sito vetrina: è un
                lavoro diverso, con professionisti più adatti a farlo - il mio campo sono i
                sistemi, le architetture e le integrazioni con vincoli reali di produzione.
              </p>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Il problema
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Un prototipo AI che funziona in una demo e uno che regge in produzione sono
                  due cose diverse. Il primo ha bisogno di un modello che risponda bene alla
                  maggior parte dei casi; il secondo ha bisogno di sapere cosa succede quando il
                  modello sbaglia, quando il provider è lento o irraggiungibile, e di un confine
                  chiaro tra cosa decide il codice in modo deterministico e cosa viene lasciato
                  all&apos;interpretazione dell&apos;AI. È la parte che spesso manca nei
                  progetti che arrivano da un proof of concept.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Cosa consegno
                </h2>
                <ul className="space-y-3">
                  {[
                    "Revisione o progettazione dell'architettura per applicazioni AI su .NET: Clean Architecture, DDD, CQRS, ABP.io dove ha senso.",
                    "Confine esplicito tra lavoro deterministico (API, job schedulati, parsing) tenuto nel backend, e lavoro interpretativo lasciato all'AI (classificazione, matching semantico, question answering) - con l'origine di ogni decisione tracciata.",
                    'Integrazione di servizi AI (Azure Cognitive Services, Azure OpenAI, Anthropic Claude, Assembly.AI) dietro un layer di astrazione multi-provider, così un fornitore si sostituisce senza riscrivere il dominio.',
                    'Resilienza pensata per la produzione: retry policy, circuit breaker, multi-tenancy con RBAC granulare, monitoring con Application Insights.',
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-purple-600 dark:text-purple-400 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Il principio
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Il principio che uso è semplice da dire e più difficile da applicare con
                  disciplina: non far decidere al modello quello che il codice può decidere in
                  modo affidabile. L&apos;AI entra dove il lavoro è davvero interpretativo -
                  capire il contenuto di un&apos;email, abbinare una transazione bancaria,
                  classificare un documento - e ogni sua decisione persistita registra la
                  propria origine, con conferma umana obbligatoria sui passaggi che contano. Il
                  resto - instradamento, validazione, scheduling, integrazioni - resta codice
                  deterministico, testabile e prevedibile. È questo confine, non la scelta del
                  modello, a fare la differenza tra un sistema che regge la produzione e uno che
                  si rompe alla prima settimana.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Il caso reale
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Con SPRocket e SprocketLive, in FEDRO Software, sono passato da zero a
                  produzione in 3 mesi: una piattaforma per l&apos;analisi AI e
                  l&apos;assistenza live nei call center, costruita da zero su ABP.io. Oggi
                  gestisce 4.000+ ore di audio al mese, è multi-tenant, lavora al 99.9% di
                  uptime e processa 500+ file audio in parallelo. Stack: .NET 9, ABP.io (Clean
                  Architecture, DDD, CQRS), Angular, Elasticsearch, Hangfire, Azure Cognitive
                  Services, Azure OpenAI, Anthropic Claude, Assembly.AI, Docker.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
                  Per il consorzio C.I.S.A. sto applicando lo stesso principio sul lato
                  documentale: un backend C# su ABP Framework che resta l&apos;unica fonte di
                  verità, un server MCP di dominio che espone all&apos;AI solo tool controllati
                  e mai SQL diretto, e ogni decisione che registra la propria origine - AI o
                  operatore. È la fase 1 del progetto: studio di fattibilità e piano operativo,
                  non ancora un sistema in produzione.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
                  Prima di specializzarmi in AI ho lavorato come sviluppatore frontend per
                  Expedia Group tramite ALTEN, su una codebase React servita a 1.000.000+
                  utenti - la stessa attenzione alla produzione, applicata al frontend.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Chi sono
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Sono Solution Architect &amp; Technical Lead in FEDRO Software, dove lavoro da
                  7+ anni su sistemi .NET enterprise. Questo tipo di progetto lo seguo in
                  proprio, come libero professionista con partita IVA, parallelamente al ruolo
                  in FEDRO.
                </p>
              </section>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Se il problema che stai affrontando è simile, il modo più rapido per capire se
                ha senso lavorare insieme è una chiamata.
              </p>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
