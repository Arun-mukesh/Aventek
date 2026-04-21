import image_b47406a74f8141bef81ff8c2f65c27e157d4b67d from 'figma:asset/b47406a74f8141bef81ff8c2f65c27e157d4b67d.png';
import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Menu, X } from "lucide-react";
import aventekLogo from 'figma:asset/b3b86917844d28c910788570e55020a2a559114b.png';
import { DarkModeToggle } from './DarkModeToggle';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({
  currentPage,
  onNavigate,
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  const menuItems = [
    { id: "home", label: "Home", shortLabel: "Home" },
    {
      id: "solutions",
      label: "Solutions",
      shortLabel: "Solutions",
    },
    {
      id: "industries",
      label: "Industries",
      shortLabel: "Industries",
    },
    {
      id: "innovation",
      label: "Innovation",
      shortLabel: "Innovation",
    },
    { id: "about", label: "About", shortLabel: "About" },
    {
      id: "insights",
      label: "Insights",
      shortLabel: "Insights",
    },
    { id: "contact", label: "Contact", shortLabel: "Contact" },
  ];

  return (
    <header className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm shadow-lg border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center py-3">
          {/* Brand Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => onNavigate("home")}
              className="flex items-center hover:opacity-80 transition-all duration-200 hover:scale-105"
              aria-label="Aventek - Go to homepage"
            >
              <img
                src={aventekLogo}
                alt="Aventek Logo"
                className="h-8 w-auto sm:h-10 lg:h-12 object-contain"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center space-x-1 flex-1 justify-center ml-8"
            role="navigation"
          >
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2.5 rounded-lg text-sm transition-all duration-200 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 relative ${
                  currentPage === item.id
                    ? "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 shadow-sm"
                    : "text-slate-700 dark:text-slate-200 hover:scale-105"
                }`}
                aria-current={
                  currentPage === item.id ? "page" : undefined
                }
              >
                {item.shortLabel}
                {currentPage === item.id && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                )}
              </button>
            ))}
          </nav>

          {/* Dark Mode Toggle - Desktop */}
          <div className="hidden lg:block ml-4">
            <DarkModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden ml-auto flex items-center gap-2">
            <DarkModeToggle />
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                setIsMobileMenuOpen(!isMobileMenuOpen)
              }
              className="border-slate-300 dark:border-slate-600"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden border-t border-slate-200 dark:border-slate-700 py-4 space-y-1"
            role="navigation"
          >
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm transition-colors ${
                  currentPage === item.id
                    ? "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300"
                    : "text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
                aria-current={
                  currentPage === item.id ? "page" : undefined
                }
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}