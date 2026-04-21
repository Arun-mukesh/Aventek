import { useState, useEffect, useRef } from 'react';
import { Search, X, TrendingUp } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

interface SearchResult {
  id: string;
  title: string;
  category: string;
  description: string;
}

interface SearchBarProps {
  onNavigate: (page: string) => void;
}

const searchableContent: SearchResult[] = [
  {
    id: 'auto-people-counting',
    title: 'Auto People Counting',
    category: 'Solutions',
    description: 'AI-powered people counting system with computer vision'
  },
  {
    id: 'pump-guru',
    title: 'PumpGuru',
    category: 'Solutions',
    description: 'Smart water management IoT solution'
  },
  {
    id: 'security-systems',
    title: 'Security Systems',
    category: 'Solutions',
    description: 'Industrial security and smart surveillance'
  },
  {
    id: 'iot-ai-solutions',
    title: 'IoT & AI Solutions',
    category: 'Solutions',
    description: 'Smart connectivity and analytics platform'
  },
  {
    id: 'blockchain-integration',
    title: 'Blockchain Integration',
    category: 'Solutions',
    description: 'Smart contracts and supply chain solutions'
  },
  {
    id: 'industry-automation',
    title: 'Industrial Automation',
    category: 'Solutions',
    description: 'PLC programming and SCADA systems'
  },
  {
    id: 'about',
    title: 'About Aventek',
    category: 'Company',
    description: '30+ years of automation excellence'
  },
  {
    id: 'innovation',
    title: 'Innovation & OEM',
    category: 'Company',
    description: 'R&D capabilities and partnerships'
  },
  {
    id: 'industries',
    title: 'Industries',
    category: 'Company',
    description: 'Sectors we serve'
  },
  {
    id: 'contact',
    title: 'Contact Us',
    category: 'Company',
    description: 'Get in touch with our team'
  }
];

const popularSearches = ['PumpGuru', 'People Counting', 'IoT', 'Automation', 'Security'];

export function SearchBar({ onNavigate }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.trim().length > 0) {
      const filtered = searchableContent.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (id: string) => {
    onNavigate(id);
    setQuery('');
    setIsOpen(false);
  };

  const handlePopularSearch = (term: string) => {
    setQuery(term);
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-2xl">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" aria-hidden="true" />
        <Input
          type="search"
          placeholder="Search solutions, products, or pages..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query && setIsOpen(true)}
          className="pl-10 pr-10 h-12 text-base"
          aria-label="Search Aventek website"
          aria-expanded={isOpen}
          aria-controls="search-results"
        />
        {query && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
            onClick={() => {
              setQuery('');
              setIsOpen(false);
            }}
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && (
        <Card
          id="search-results"
          className="absolute top-full mt-2 w-full bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-xl max-h-96 overflow-y-auto z-50"
          role="listbox"
        >
          {results.length > 0 ? (
            <div className="p-2">
              {results.map((result) => (
                <button
                  key={result.id}
                  onClick={() => handleSelect(result.id)}
                  className="w-full text-left p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group"
                  role="option"
                  aria-selected="false"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {result.title}
                        </h4>
                        <Badge variant="secondary" className="text-xs">
                          {result.category}
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-1">
                        {result.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="p-6 text-center">
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                No results found for "{query}"
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="text-sm text-slate-500 dark:text-slate-500 flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  Popular:
                </span>
                {popularSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => handlePopularSearch(term)}
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </Card>
      )}
    </div>
  );
}
