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
  // Handle "Presente" / "Present" / "Presente"
  if (period.includes('Presente') || period.includes('Present')) {
    const present = language === 'it' ? 'Presente' : language === 'en' ? 'Present' : 'Presente';
    return period.replace(/Presente|Present/, present);
  }
  
  // Handle month translations
  let translatedPeriod = period;
  const monthsIt = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 
                    'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
  
  monthsIt.forEach(month => {
    if (translatedPeriod.includes(month)) {
      translatedPeriod = translatedPeriod.replace(month, getMonthTranslation(month, language));
    }
  });
  
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
    case 'ml-course':
      return t.experience.mlCourseDesc;
    case 'react-course':
      return t.experience.reactCourseDesc;
    case 'diploma':
      return t.experience.diplomaDesc;
    default:
      return [];
  }
};

// Export helper for project descriptions
export const getProjectDescription = (projectId: string, t: any): string => {
  switch(projectId) {
    case 'fedro':
      return t.projects.fedroProjectDesc;
    case 'expedia':
      return t.projects.expediaProjectDesc;
    case 'pos':
      return t.projects.posProjectDesc;
    case 'portfolio':
      return t.projects.portfolioProjectDesc;
    default:
      return '';
  }
};

export const getProjectMetrics = (projectId: string, metrics: string[], t: any): string[] => {
  const metricTranslations: Record<string, string[]> = {
    'fedro': t.projects.fedroMetrics,
    'expedia': t.projects.expediaMetrics,
    'pos': t.projects.posMetrics
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