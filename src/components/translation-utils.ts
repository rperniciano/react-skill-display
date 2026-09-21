// Complete translation utilities for dates and formatting
export const getMonthTranslation = (month: string, language: 'it' | 'en' | 'es'): string => {
  const months: Record<string, Record<'it' | 'en' | 'es', string>> = {
    'Gennaio': { it: 'Gennaio', en: 'January', es: 'Enero' },
    'Febbraio': { it: 'Febbraio', en: 'February', es: 'Febrero' },
    'Marzo': { it: 'Marzo', en: 'March', es: 'Marzo' },
    'Aprile': { it: 'Aprile', en: 'April', es: 'Abril' },
    'Maggio': { it: 'Maggio', en: 'May', es: 'Mayo' },
    'Giugno': { it: 'Giugno', en: 'June', es: 'Junio' },
    'Luglio': { it: 'Luglio', en: 'July', es: 'Julio' },
    'Agosto': { it: 'Agosto', en: 'August', es: 'Agosto' },
    'Settembre': { it: 'Settembre', en: 'September', es: 'Septiembre' },
    'Ottobre': { it: 'Ottobre', en: 'October', es: 'Octubre' },
    'Novembre': { it: 'Novembre', en: 'November', es: 'Noviembre' },
    'Dicembre': { it: 'Dicembre', en: 'December', es: 'Diciembre' }
  };
  
  return months[month]?.[language] || month;
};

export const formatPeriod = (period: string, language: 'it' | 'en' | 'es', t: any): string => {
  // Month translations first. They used to run *after* the "Presente" branch
  // below, which returns early - so "Gennaio 2025 - Presente" kept its Italian
  // month on /en ("Gennaio 2025 - Present") and on /es.
  let translatedPeriod = period;
  const monthsIt = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 
                    'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
  
  monthsIt.forEach(month => {
    if (translatedPeriod.includes(month)) {
      translatedPeriod = translatedPeriod.replace(month, getMonthTranslation(month, language));
    }
  });
  
  // Handle "Presente" / "Present" / "Presente"
  if (translatedPeriod.includes('Presente') || translatedPeriod.includes('Present')) {
    const present = language === 'it' ? 'Presente' : language === 'en' ? 'Present' : 'Presente';
    return translatedPeriod.replace(/Presente|Present/, present);
  }
  
  return translatedPeriod;
};

// Export helper for getting job descriptions based on language
export const getJobDescription = (jobId: string, t: any): string[] => {
  switch(jobId) {
    case 'fedro':
      return t.experience.fedroDesc;
    case 'alten':
      return t.experience.altenDesc;
    case 'softwarelab':
      return t.experience.softwarelabDesc;
    case 'virtuard':
      return t.experience.virtuardDesc;
    case 'epicode':
      return t.experience.epicodeDesc;
    case 'react-course':
      return t.experience.reactCourseDesc;
    case 'css-course':
      return t.experience.cssCourseDesc;
    case 'typescript-course':
      return t.experience.typescriptCourseDesc;
    case 'diploma':
      return t.experience.diplomaDesc;
    default:
      return [];
  }
};

// NOTE: `getProjectMetrics` lived here. It kept one locale-independent
// figure from portfolio-data.ts and swapped only the label by index, so /en
// rendered "1.000.000+ users served" - Italian digit grouping in English -
// and a chip opening with a word instead of a number shifted every label
// after it by one. The whole chip, figure included, now lives in
// translations.ts under `projects.sprocketMetrics` / `expediaMetrics` /
// `posMetrics`, one string per locale, and Projects.tsx reads it directly.