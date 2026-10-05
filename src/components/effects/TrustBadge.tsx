import { ShieldCheck, Star } from 'lucide-react';

interface TrustBadgeProps {
  label: string;
  rating?: string;
  reviews?: string;
  className?: string;
}

export function TrustBadge({ label, rating = '4.9', reviews = '920+ Reviews', className = '' }: TrustBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/90 dark:bg-botanical-900/90 backdrop-blur-md border border-herbal-500/30 shadow-soft text-charcoal-900 ${className}`}
    >
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-botanical-700 text-white shadow-sm">
        <ShieldCheck className="w-4 h-4 text-herbal-400" />
      </div>
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1">
          <span className="font-bold text-sm text-botanical-800">{rating}</span>
          <div className="flex text-herbal-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-herbal-500" />
            ))}
          </div>
          <span className="text-xs text-charcoal-500 font-medium">({reviews})</span>
        </div>
        <span className="text-xs font-semibold text-botanical-700">{label}</span>
      </div>
    </div>
  );
}
