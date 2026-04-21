import { Card } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Quote, Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating?: number;
  avatarUrl?: string;
}

export function TestimonialCard({ 
  quote, 
  author, 
  role, 
  company, 
  rating = 5,
  avatarUrl 
}: TestimonialCardProps) {
  const initials = author.split(' ').map(n => n[0]).join('').toUpperCase();

  return (
    <Card className="p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow h-full flex flex-col">
      {/* Quote Icon */}
      <div className="mb-4">
        <div className="inline-flex p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
          <Quote className="w-6 h-6 text-blue-600 dark:text-blue-400" aria-hidden="true" />
        </div>
      </div>

      {/* Rating */}
      {rating > 0 && (
        <div className="flex gap-1 mb-4" aria-label={`Rating: ${rating} out of 5 stars`}>
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-slate-300 dark:text-slate-600'
              }`}
              aria-hidden="true"
            />
          ))}
        </div>
      )}

      {/* Quote */}
      <blockquote className="flex-1 mb-6">
        <p className="text-slate-700 dark:text-slate-300 italic">
          "{quote}"
        </p>
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-700">
        <Avatar className="w-12 h-12">
          <AvatarImage src={avatarUrl} alt={author} />
          <AvatarFallback className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold text-slate-900 dark:text-white">
            {author}
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {role}, {company}
          </p>
        </div>
      </div>
    </Card>
  );
}
