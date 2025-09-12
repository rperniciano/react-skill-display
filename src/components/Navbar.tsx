import React from "react";
import { Menu, ChevronDown, Moon, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useTheme } from "../hooks/useTheme";
import { useLanguage } from "./LanguageContext";
import LanguageSelector from "./LanguageSelector";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-portfolio-heading dark:text-white">
            Portfolio
          </a>
          <div className="flex items-center gap-2">
            {/* Language Selector - Always visible */}
            <LanguageSelector />
            
            {/* Theme Toggle */}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme}
              className="rounded-full"
              aria-label={theme === 'dark' ? 'Light mode' : 'Dark mode'}
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
                <span className="hidden sm:inline">Menu</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuItem>
                  <a href="#hero" className="w-full">{t.nav.home}</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#skills" className="w-full">{t.nav.skills}</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#experience" className="w-full">{t.nav.experience}</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#projects" className="w-full">{t.nav.projects}</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#about" className="w-full">{t.nav.about}</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#contact" className="w-full">{t.nav.contact}</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="border-t">
                  <a 
                    href="/CV-Riccardo-Perniciano.pdf" 
                    download 
                    className="w-full font-semibold text-purple-600 dark:text-purple-400"
                  >
                    {t.nav.downloadCV}
                  </a>
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