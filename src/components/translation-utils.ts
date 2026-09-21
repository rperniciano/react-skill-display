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

// Metric labels per project. `metrics` carries the figure and its Italian
// label ("2.000+ ore di chiamate/mese"); the figure is kept and the label is
// swapped for the active locale. Keyed by the full project id: the old
// `id.split('-')[0]` key resolved to 'sprocket' for the featured project and
// matched no entry, so its four figures kept their Italian labels everywhere.
export const getProjectMetrics = (projectId: string, metrics: string[], t: any): string[] => {
  const metricTranslations: Record<string, string[]> = {
    'sprocket': t.projects.sprocketMetrics,
    'expedia-components': t.projects.expediaMetrics,
    'pos-system': t.projects.posMetrics
  };
  
  const translations = metricTranslations[projectId];
  if (!translations) return metrics;
  
  return metrics.map((metric, index) => {
    // Keep the number/percentage, replace the description
    const match = metric.match(/^([\d%+.]+\s*)/);
    if (match) {
      return match[1] + (translations[index] || metric.replace(match[1], ''));
    }
    return translations[index] || metric;
  });
};