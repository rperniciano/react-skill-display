// Enhanced Language Selector Component with responsive design
import React from 'react';
import { useLanguage } from './LanguageContext';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'it', name: 'Italiano', shortName: 'IT', flag: '🇮🇹' },
    { code: 'en', name: 'English', shortName: 'EN', flag: '🇬🇧' },
    { code: 'es', name: 'Español', shortName: 'ES', flag: '🇪🇸' }
  ];

  const currentLang = languages.find(l => l.code === language);

  return (
    <Select value={language} onValueChange={(value) => setLanguage(value as 'it' | 'en' | 'es')}>
      <SelectTrigger className="w-[110px] sm:w-[140px] bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20 transition-colors dark:bg-gray-800/50 dark:border-gray-700 dark:hover:bg-gray-700">
        <SelectValue>
          {currentLang && (
            <span className="flex items-center gap-2">
              <span className="text-lg">{currentLang.flag}</span>
              <span className="hidden sm:inline">{currentLang.name}</span>
              <span className="sm:hidden">{currentLang.shortName}</span>
            </span>
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
        {languages.map((lang) => (
          <SelectItem 
            key={lang.code} 
            value={lang.code}
            className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <span className="text-lg">{lang.flag}</span>
              <span>{lang.name}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageSelector;