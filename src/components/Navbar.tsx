
import React from "react";
import { Menu, ChevronDown, Moon, Sun, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useTheme } from "../hooks/useTheme";
import { useLanguage } from "../hooks/useLanguage";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-portfolio-heading dark:text-white">
            Portfolio
          </a>
          <div className="flex items-center gap-2">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" aria-label="Seleziona lingua">
                <Globe className="h-5 w-5" />
                <span className="uppercase text-xs font-medium">{language}</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-32">
                <DropdownMenuItem className={language === 'it' ? 'bg-gray-100 dark:bg-gray-800' : ''} onClick={() => setLanguage('it')}>
                  🇮🇹 Italiano
                </DropdownMenuItem>
                <DropdownMenuItem className={language === 'en' ? 'bg-gray-100 dark:bg-gray-800' : ''} onClick={() => setLanguage('en')}>
                  🇬🇧 English
                </DropdownMenuItem>
                <DropdownMenuItem className={language === 'es' ? 'bg-gray-100 dark:bg-gray-800' : ''} onClick={() => setLanguage('es')}>
                  🇪🇸 Español
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Theme Toggle */}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme}
              className="rounded-full"
              aria-label={theme === 'dark' ? 'Attiva modalità chiara' : 'Attiva modalità scura'}
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            
            {/* Menu Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <Menu className="h-5 w-5" />
                <span>{t('menu')}</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuItem>
                  <a href="#hero" className="w-full">{t('home')}</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#about" className="w-full">{t('about')}</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#experience" className="w-full">{t('experience')}</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#skills" className="w-full">{t('skills')}</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#contact" className="w-full">{t('contact')}</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
