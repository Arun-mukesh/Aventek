import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Construction, Clock, Mail, RefreshCw } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';

export function MaintenancePage() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setIsSubscribed(true);
      toast.success('Thank you! We\'ll notify you when we\'re back online.');
      setEmail('');
    } else {
      toast.error('Please enter a valid email address');
    }
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated Icon */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.5,
              ease: [0.68, -0.55, 0.265, 1.55]
            }}
            className="mb-8"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
              className="inline-flex items-center justify-center w-32 h-32 bg-yellow-100 dark:bg-yellow-900/30 rounded-full mb-6"
            >
              <Construction className="w-16 h-16 text-yellow-600 dark:text-yellow-400" aria-hidden="true" />
            </motion.div>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              We'll Be Back Soon
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-2">
              Our site is currently undergoing scheduled maintenance.
            </p>
            <p className="text-base text-slate-500 dark:text-slate-400 mb-8">
              We're working hard to improve your experience. Thank you for your patience!
            </p>
          </motion.div>

          {/* Status Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 p-6 mb-8"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Estimated Downtime
              </p>
            </div>
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              2 Hours
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Expected to complete by 11:00 PM IST
            </p>
          </motion.div>

          {/* Email Notification */}
          {!isSubscribed ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-6 mb-8"
            >
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center justify-center gap-2">
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Get Notified
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                Enter your email to be notified when we're back online
              </p>
              <form onSubmit={handleNotify} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  required
                />
                <Button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Notify Me
                </Button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-8"
            >
              <p className="text-green-700 dark:text-green-300">
                ✓ You're subscribed! We'll send you an email when we're back.
              </p>
            </motion.div>
          )}

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              onClick={handleRefresh}
              variant="outline"
              size="lg"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Refresh Page
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700"
          >
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
              Need urgent assistance?
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a
                href="tel:+912023456789"
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
              >
                📞 +91 20 2345 6789
              </a>
              <a
                href="mailto:support@aventek.com"
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
              >
                ✉️ support@aventek.com
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
