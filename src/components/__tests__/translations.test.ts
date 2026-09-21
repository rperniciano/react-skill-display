import { describe, it, expect } from 'vitest';
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

  it('keeps the Italian AI stack aligned with the CV', () => {
    // The Italian copy is the source of truth; English still carries the older
    // "Azure Cognitive Services, OpenAI GPT, Assembly.AI" line on purpose.
    expect(translations.it.skills.aiSpeechDesc).toBe(
      'Azure OpenAI, Anthropic Claude, Assembly.AI, ElevenLabs',
    );
    expect(translations.es.skills.aiSpeechDesc).toBe(translations.it.skills.aiSpeechDesc);
  });
});
