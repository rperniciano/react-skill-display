import { describe, it, expect } from 'vitest';
import { portfolioData } from '../portfolio-data';
import { translations } from '../translations';

// The dictionary is typed as `typeof translations.it`, so TypeScript already
// rejects a locale that is *missing* a key. It says nothing about extra keys,
// about array members, or about Spanish quietly holding the English string -
// which is exactly what used to happen while the copy lived in two-branch
// `language === 'it' ? ... : ...` ternaries inside the components. These tests
// cover that gap.

const LANGUAGES = ['it', 'en', 'es'] as const;
type Language = (typeof LANGUAGES)[number];

type Leaf = string | number | boolean | string[];

/**
 * Flattens one locale into `path -> leaf`. Arrays are kept whole so a bullet
 * list that lost an item in one locale shows up as a mismatch rather than
 * silently passing.
 */
function flatten(node: unknown, prefix = '', out: Record<string, Leaf> = {}) {
  for (const [key, value] of Object.entries(node as Record<string, unknown>)) {
    const path = prefix ? `${prefix}.${key}` : key;

    if (Array.isArray(value)) {
      out[path] = value as string[];
    } else if (value !== null && typeof value === 'object') {
      flatten(value, path, out);
    } else {
      out[path] = value as Leaf;
    }
  }

  return out;
}

const flat = {
  it: flatten(translations.it),
  en: flatten(translations.en),
  es: flatten(translations.es),
} satisfies Record<Language, Record<string, Leaf>>;

const paths = {
  it: Object.keys(flat.it),
  en: Object.keys(flat.en),
  es: Object.keys(flat.es),
};

/**
 * Leaves where Spanish legitimately reads the same as English even though the
 * Italian differs. Anything not listed here and identical to English is a
 * missing translation, not a coincidence.
 */
const SPANISH_MATCHES_ENGLISH = new Set([
  // it: "Personale" / en: "Personal" - and "Personal" is also the Spanish word.
  'projects.personal',
]);

describe('translations dictionaries', () => {
  it('exposes exactly the three site locales', () => {
    expect(Object.keys(translations)).toEqual([...LANGUAGES]);
  });

  it('gives every locale the same leaf paths, in the same order', () => {
    expect(paths.en).toEqual(paths.it);
    expect(paths.es).toEqual(paths.it);
  });

  it('gives every locale the same shape for each leaf', () => {
    const mismatched: string[] = [];

    for (const path of paths.it) {
      const shape = (value: Leaf) => (Array.isArray(value) ? `array(${value.length})` : typeof value);
      const expected = shape(flat.it[path]);

      for (const language of ['en', 'es'] as const) {
        if (shape(flat[language][path]) !== expected) {
          mismatched.push(`${path} (it: ${expected}, ${language}: ${shape(flat[language][path])})`);
        }
      }
    }

    expect(mismatched).toEqual([]);
  });

  it('has no empty value in any locale', () => {
    const empty: string[] = [];

    for (const language of LANGUAGES) {
      for (const [path, value] of Object.entries(flat[language])) {
        const values = Array.isArray(value) ? value : [value];

        if (values.length === 0 || values.some((entry) => String(entry).trim() === '')) {
          empty.push(`${language}.${path}`);
        }
      }
    }

    expect(empty).toEqual([]);
  });

  it('never leaves Spanish holding the English string', () => {
    const untranslated: string[] = [];

    for (const path of paths.it) {
      if (SPANISH_MATCHES_ENGLISH.has(path)) continue;

      const italian = JSON.stringify(flat.it[path]);
      const english = JSON.stringify(flat.en[path]);
      const spanish = JSON.stringify(flat.es[path]);

      // Only meaningful where the copy is language-dependent at all: plenty of
      // leaves are product or technology names and read the same everywhere.
      if (italian !== english && spanish === english) {
        untranslated.push(path);
      }
    }

    expect(untranslated).toEqual([]);
  });

  it('covers the copy that used to be inline in the components', () => {
    const lifted = [
      'skills.stackTitle',
      'skills.stackSubtitle',
      'skills.methodologiesTitle',
      'skills.aiSpeechDesc',
      'skills.aiSpeechDetails',
      'skills.moreInfo',
      'skills.proficiency',
      'ai.badge',
      'ai.title',
      'ai.intro1',
      'ai.intro2',
      'solutions.title',
      'solutions.cta',
      'about.profile1',
      'about.softSkillsTitle',
      'about.languageSkillsTitle',
      'experience.altenLocation',
      'experience.diplomaTitle',
      'footer.tagline',
      'footer.quickLinks',
      'footer.rights',
    ];

    for (const path of lifted) {
      expect(paths.it, path).toContain(path);
    }
  });

  it('keeps the AI stack aligned with the CV in every locale', () => {
    // The Italian copy is the source of truth. English used to carry an older
    // "Azure Cognitive Services, OpenAI GPT, Assembly.AI" line; it has been
    // brought up to the Italian, so all three now name the same providers.
    expect(translations.it.skills.aiSpeechDesc).toBe(
      'Azure OpenAI, Anthropic Claude, Assembly.AI, ElevenLabs',
    );
    expect(translations.en.skills.aiSpeechDesc).toBe(translations.it.skills.aiSpeechDesc);
    expect(translations.es.skills.aiSpeechDesc).toBe(translations.it.skills.aiSpeechDesc);
  });

  it('gives every locale its own <title>', () => {
    // app/seo.ts used to build the page title from `hero.title`, which is the
    // same English job title in all three dictionaries - so /it, /en and /es
    // shipped an identical <title>. `meta.title` is the per-locale replacement;
    // `hero.title` stays as it is, because it is the on-page H1.
    const titles = LANGUAGES.map((language) => translations[language].meta.title);

    expect(new Set(titles).size).toBe(LANGUAGES.length);

    for (const title of titles) {
      expect(title, title).toContain('Riccardo Perniciano');
      // Google truncates the SERP title on pixel width, around 60 characters.
      // The Spanish one runs a little past that on the standard "sistemas de
      // IA" form, which is worth the three characters - hence the 65 ceiling.
      expect(title.length, title).toBeGreaterThanOrEqual(45);
      expect(title.length, title).toBeLessThanOrEqual(65);
    }
  });

  it('gives every locale its own SERP description', () => {
    // app/seo.ts used to build the description from `hero.description`, which
    // is the on-page hero paragraph - so the SERP budget and the copy the owner
    // wrote were pulling on one string. `meta.description` is the per-locale
    // SERP copy; the hero paragraph is free to run longer.
    const descriptions = LANGUAGES.map((language) => translations[language].meta.description);

    expect(new Set(descriptions).size).toBe(LANGUAGES.length);

    for (const description of descriptions) {
      expect(description, description).toContain('FEDRO Software');
      // Google renders roughly 150-160 characters of the description.
      expect(description.length, description).toBeGreaterThanOrEqual(140);
      expect(description.length, description).toBeLessThanOrEqual(160);
    }

    for (const language of LANGUAGES) {
      // Two keys, not an alias of one.
      expect(translations[language].meta.description, language).not.toBe(
        translations[language].hero.description,
      );
    }
  });

  it('carries each metric chip whole, figure included, in every locale', () => {
    // The figure used to live in portfolio-data.ts as a single
    // locale-independent string and only the *label* was swapped by index, so
    // /en rendered "1.000.000+ users served" - Italian digit grouping in
    // English - and a chip opening with a word instead of a number shifted
    // every label after it by one. The whole chip now lives in the dictionary,
    // one string per locale, and portfolio-data.ts carries no figures at all.
    const metricKeys = ['sprocketMetrics', 'expediaMetrics', 'posMetrics'] as const;

    for (const project of portfolioData.projects) {
      expect(project, project.id).not.toHaveProperty('metrics');
    }

    for (const key of metricKeys) {
      const italian = translations.it.projects[key];

      expect(italian.length, key).toBeGreaterThan(0);

      for (const language of LANGUAGES) {
        const chips = translations[language].projects[key];

        // Same number of chips everywhere: a locale one short would drop a
        // figure from that card rather than only its label.
        expect(chips, `${language}.${key}`).toHaveLength(italian.length);

        for (const chip of chips) {
          // Thousands separator: '.' in Italian and Spanish, ',' in English.
          const wrongGrouping = language === 'en' ? /\d\.\d{3}/ : /\d,\d{3}/;

          expect(chip, `${language}.${key}: ${chip}`).not.toMatch(wrongGrouping);
        }
      }
    }

    // The chip that carried the bug, pinned in all three locales.
    expect(translations.it.projects.expediaMetrics[0]).toMatch(/^1\.000\.000\+ /);
    expect(translations.es.projects.expediaMetrics[0]).toMatch(/^1\.000\.000\+ /);
    expect(translations.en.projects.expediaMetrics[0]).toMatch(/^1,000,000\+ /);
  });

  it('covers the copy that was hardcoded Italian with no ternary at all', () => {
    // These rendered Italian on /en and /es because nothing ever branched on
    // the language - there was no ternary to lift, just a literal in the JSX
    // (or, for the project entries, a literal in portfolio-data.ts).
    const lifted = [
      'nav.bookCall',
      'about.greetingPrefix',
      'about.greetingSuffix',
      'about.levelB2',
      'about.softSkillOwnershipTitle',
      'contact.calendlyPitch',
      'contact.bookOnCalendly',
      'contact.freeConsultation',
      'contact.preferWriting',
      'contact.preferWritingDesc',
      'projects.sprocketMetrics',
      'projects.projectItems.sprocket.title',
      'projects.projectItems.sprocket.description',
      'projects.projectItems.sprocket.features',
      'projects.projectItems.pos-system.title',
      'projects.projectItems.react-portfolio.description',
    ];

    for (const path of lifted) {
      expect(paths.it, path).toContain(path);
    }
  });

  it('has retired the dead about.bio* paragraphs', () => {
    // Nothing rendered them since About.tsx moved to profile1-profile4, and
    // they still described an outdated role.
    for (const language of LANGUAGES) {
      expect(paths[language].filter((path) => /^about\.bio\d$/.test(path))).toEqual([]);
    }
  });

  it('carries copy for every portfolioData project, keyed by id', () => {
    // Projects.tsx looks the copy up by `project.id`, so a project without an
    // entry here (or a renamed id) would render `undefined` rather than fail
    // to compile.
    const ids = portfolioData.projects.map((project) => project.id);

    for (const language of LANGUAGES) {
      expect(Object.keys(translations[language].projects.projectItems)).toEqual(ids);
    }
  });
});
