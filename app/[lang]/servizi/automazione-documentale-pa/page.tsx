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

const PATH = '/servizi/automazione-documentale-pa';

/**
 * Italian-only commercial page. Unlike the home page (all three locales) or a
 * blog article (locale of whichever MDX file exists), this route exists in
 * exactly one locale by design - see CLAUDE.md. `generateStaticParams`
 * returning only `{ lang: 'it' }`, combined with `dynamicParams = false`,
 * means `/en/servizi/automazione-documentale-pa` and
 * `/es/servizi/automazione-documentale-pa` 404 rather than rendering: there is
 * no dynamic fallback left for a direct visit to either to hit, the same
 * mechanism app/[lang]/blog/[slug]/page.tsx uses to keep a draft unreachable.
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
    // Italian only - see the note on generateStaticParams above. Passing
    // anything wider here would advertise an hreflang alternate that 404s.
    locales: ['it'],
    title: 'Automazione documentale e AI per la PA | Riccardo Perniciano',
    description:
      "Automazione documentale e AI per enti pubblici e consorzi: backend on-premise, MCP con accesso controllato, conformità AI Act. Caso reale: C.I.S.A., fase 1.",
  });
}

export default async function DocumentAutomationPaPage({ params }: ServicePageProps) {
  const { lang } = await params;

  if (lang !== 'it') {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <JsonLd
        data={serviceJsonLd({
          name: 'Automazione documentale e AI per la pubblica amministrazione',
          description:
            "Studio di fattibilità, architettura e sviluppo di automazioni documentali con AI per enti pubblici e consorzi: accesso all'AI mediato da server MCP con permessi controllati, infrastruttura on-premise, governance AI Act.",
          serviceType: 'Automazione documentale e intelligenza artificiale per la pubblica amministrazione',
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
                Pubblica Amministrazione
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Automazione documentale e AI per la pubblica amministrazione
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-12">
                Lavoro con enti pubblici, consorzi e strutture che vogliono togliere lavoro
                ripetitivo da protocollo, archivio e contabilità senza far uscire i propri
                documenti dai propri sistemi. Non è il servizio giusto per chi cerca un prodotto
                SaaS pronto all&apos;uso o un&apos;integrazione AI generica senza vincoli di
                residenza dei dati.
              </p>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Il problema
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Negli enti pubblici gran parte del lavoro quotidiano è documentale e
                  ripetitivo: protocollare la posta in arrivo, smistare i compiti ai referenti
                  giusti, tenere in ordine un archivio che cresce ogni anno, acquisire le
                  fatture e tenerne le scadenze, riconciliare i pagamenti. È lavoro che va
                  fatto bene e in tempo, ma che raramente ha bisogno di una decisione umana ad
                  ogni singolo passaggio - e che oggi assorbe ore di personale che potrebbero
                  andare altrove.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Cosa consegno
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  Il punto di partenza è sempre uno studio di fattibilità e un piano operativo:
                  mappo i processi reali, non quelli sulla carta, e disegno le automazioni
                  intorno a un backend che resta l&apos;unica fonte di verità.
                </p>
                <ul className="space-y-3">
                  {[
                    "Backend proprietario su ABP Framework (.NET): il database è l'unica fonte di verità, non un modello linguistico.",
                    'Un server MCP di dominio: gli assistenti AI scrivono solo attraverso tool controllati e autorizzati per permesso - mai in SQL diretto.',
                    "Un secondo server MCP, separato, che legge le condivisioni file con l'identità dell'utente loggato: le ACL NTFS le applica il file server, non il codice applicativo.",
                    'Infrastruttura interamente on-premise, PostgreSQL come database.',
                    "Un impianto di governance AI Act: policy interna, registro dei sistemi AI, piano di formazione art. 4.",
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
                  Perché on-premise, e perché due server MCP separati
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Per un ente pubblico il vincolo che conta di più, di solito, non è quale
                  modello AI si usa: è dove vivono i documenti e chi può leggerli. Per questo
                  l&apos;infrastruttura resta on-premise, e per questo divido l&apos;accesso in
                  due canali con superfici di fiducia diverse. Il server MCP di dominio espone
                  all&apos;AI solo operazioni esplicitamente autorizzate, mai una query libera
                  sul database. Il server MCP che legge le condivisioni file, invece, non
                  implementa permessi propri: gira con l&apos;identità dell&apos;utente
                  loggato, cosicché sia il file server - con le sue ACL NTFS esistenti - a
                  decidere chi vede cosa, non una lista di permessi scritta a mano nel codice
                  applicativo.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Cosa dice la normativa
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  Chi valuta un progetto come questo in un ente pubblico si scontra presto con
                  l&apos;AI Act e con la normativa italiana di recepimento. Quello che segue è
                  verificato sul testo consolidato EUR-Lex (CELEX:02024R1689, versione
                  27.07.2026) e sulla Legge 132/2025, controllato il 21-22 settembre 2026:
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-purple-600 dark:text-purple-400 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      <strong className="text-gray-900 dark:text-white">
                        Art. 4 (alfabetizzazione in materia di IA):
                      </strong>{' '}
                      in vigore dal 2 febbraio 2025, vincola sia i fornitori sia gli
                      utilizzatori. Dal Digital Omnibus (Regolamento (UE) 2026/1744, in vigore
                      dal 27 luglio 2026) il testo è cambiato: oggi si parla di «adottare
                      misure a sostegno dello sviluppo» dell&apos;alfabetizzazione IA, e non si
                      richiede più di garantire un livello specifico in ogni singola persona.
                      Buona parte del materiale italiano in circolazione cita ancora la
                      formulazione del 2024 («garantire un livello sufficiente»), superata da
                      luglio 2026.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-purple-600 dark:text-purple-400 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      <strong className="text-gray-900 dark:text-white">
                        Obblighi per i sistemi ad alto rischio
                      </strong>{' '}
                      (capo III, sezioni 1-3): rinviati al 2 dicembre 2027 per i sistemi
                      standalone dell&apos;Allegato III, e al 2 agosto 2028 per quelli
                      incorporati nei prodotti dell&apos;Allegato I.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-purple-600 dark:text-purple-400 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      <strong className="text-gray-900 dark:text-white">
                        Art. 27 (valutazione d&apos;impatto sui diritti fondamentali, FRIA):
                      </strong>{' '}
                      nomina esplicitamente gli enti pubblici tra i soggetti tenuti a
                      effettuarla, e segue lo stesso rinvio del capo III.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-purple-600 dark:text-purple-400 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      <strong className="text-gray-900 dark:text-white">
                        Legge 132/2025
                      </strong>{' '}
                      (in vigore dal 10 ottobre 2025), art. 14 comma 2: l&apos;uso dell&apos;IA
                      nella pubblica amministrazione è «in funzione strumentale e di supporto»
                      e chi decide «resta l&apos;unica responsabile» della decisione. Il comma
                      4 aggiunge che gli enti devono rispettare questi obblighi con le risorse
                      già disponibili, senza un budget dedicato.
                    </span>
                  </li>
                </ul>
                <p className="mt-6 text-sm text-gray-500 dark:text-gray-500">
                  Informazioni aggiornate a settembre 2026 - la materia cambia in fretta,
                  verificale prima di usarle come riferimento operativo.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Il caso reale
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Per il consorzio C.I.S.A. sto seguendo la fase 1 - studio di fattibilità e
                  piano operativo - per cinque automazioni: protocollazione assistita della
                  posta in arrivo, smistamento dei compiti ai referenti, riordino e
                  indicizzazione dell&apos;archivio documentale, acquisizione delle fatture con
                  scadenzari, riconciliazione dei pagamenti. Il backend è in C# su ABP
                  Framework, con il database come unica fonte di verità e un server MCP di
                  dominio per l&apos;accesso dell&apos;AI. Un secondo server MCP, a parte, legge
                  le condivisioni file con l&apos;identità dell&apos;utente loggato. Ogni
                  decisione persistita registra la propria origine - AI o operatore - con
                  conferma umana obbligatoria sui passaggi contabili. L&apos;infrastruttura è
                  interamente on-premise, con il lavoro di governance EU AI Act incluso. È la
                  fase 1: uno studio di fattibilità e un piano operativo, non un sistema già in
                  produzione.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
                  Per un riferimento su cosa intendo per &laquo;portato in produzione davvero&raquo;:
                  con SPRocket, in FEDRO Software, sono passato da zero a produzione in 3 mesi,
                  con un sistema che oggi gestisce 2.000+ ore di audio al mese al 99.9% di
                  uptime.
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
