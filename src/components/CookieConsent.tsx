import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { Cookie, X } from 'lucide-react';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after a short delay
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'all');
    setShowBanner(false);
  };

  const acceptEssential = () => {
    localStorage.setItem('cookie-consent', 'essential');
    setShowBanner(false);
  };

  const dismiss = () => {
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-7xl mx-auto bg-white dark:bg-slate-800 rounded-lg shadow-2xl border border-slate-200 dark:border-slate-700 p-4 md:p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <Cookie className="w-6 h-6 text-blue-600 dark:text-blue-400" aria-hidden="true" />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Cookie Preferences
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                  We use cookies to enhance your browsing experience, analyze site traffic, 
                  and personalize content. By clicking "Accept All", you consent to our use 
                  of cookies. View our{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-700 underline">
                    Privacy Policy
                  </a>{' '}
                  for more information.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <Button
                    onClick={acceptAll}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    aria-label="Accept all cookies"
                  >
                    Accept All
                  </Button>
                  <Button
                    onClick={acceptEssential}
                    variant="outline"
                    className="border-slate-300 hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-700"
                    aria-label="Accept essential cookies only"
                  >
                    Essential Only
                  </Button>
                  <Button
                    onClick={dismiss}
                    variant="ghost"
                    size="sm"
                    className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                    aria-label="Close cookie banner"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
