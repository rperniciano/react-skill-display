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
import { Globe } from 'lucide-react';

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
      <SelectTrigger className="w-[110px] sm:w-[140px] bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm">
        <SelectValue>
          {currentLang && (
            <span className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              <span className="hidden sm:inline font-medium">{currentLang.name}</span>
              <span className="sm:hidden font-medium">{currentLang.shortName}</span>
            </span>
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 shadow-lg">
        {languages.map((lang) => (
          <SelectItem 
            key={lang.code} 
            value={lang.code}
            className="text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 focus:bg-purple-50 dark:focus:bg-purple-900/20 cursor-pointer transition-colors"
          >
            <span className="flex items-center gap-2">
              <span className="text-lg">{lang.flag}</span>
              <span className="font-medium">{lang.name}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageSelector;