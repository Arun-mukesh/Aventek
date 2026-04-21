import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Home, Search, ArrowLeft, FileQuestion } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (page: string) => void;
}

export function NotFoundPage({ onNavigate }: NotFoundPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated 404 */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.5,
              ease: [0.68, -0.55, 0.265, 1.55]
            }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-32 h-32 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
              <FileQuestion className="w-16 h-16 text-blue-600 dark:text-blue-400" aria-hidden="true" />
            </div>
            <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 mb-4">
              404
            </h1>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back on track.
            </p>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              onClick={() => {
                window.history.back();
              }}
              variant="outline"
              size="lg"
              className="text-base"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Button>
            <Button
              onClick={() => onNavigate('home')}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white text-base"
            >
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Button>
          </motion.div>

          {/* Popular Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700"
          >
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              Or explore these popular pages:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                onClick={() => onNavigate('solutions')}
                variant="ghost"
                size="sm"
                className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/30"
              >
                Solutions
              </Button>
              <Button
                onClick={() => onNavigate('industries')}
                variant="ghost"
                size="sm"
                className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/30"
              >
                Industries
              </Button>
              <Button
                onClick={() => onNavigate('innovation')}
                variant="ghost"
                size="sm"
                className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/30"
              >
                Innovation
              </Button>
              <Button
                onClick={() => onNavigate('contact')}
                variant="ghost"
                size="sm"
                className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/30"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
