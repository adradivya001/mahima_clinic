import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="pt-36 pb-24 min-h-[75vh] flex items-center justify-center bg-[#F7F5EE] px-4">
      <div className="max-w-md w-full text-center bg-white rounded-3xl p-8 sm:p-10 border border-botanical-200 shadow-premium space-y-4">
        <div className="w-16 h-16 rounded-full bg-botanical-100 text-botanical-800 flex items-center justify-center mx-auto text-2xl font-serif font-bold">
          404
        </div>
        <h1 className="text-2xl font-serif font-bold text-botanical-900">
          Page Not Found
        </h1>
        <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
          The clinic page you are attempting to visit does not exist or may have been relocated.
        </p>
        <div className="pt-2 flex justify-center gap-3">
          <Link
            to="/"
            className="px-6 py-3 rounded-full bg-botanical-700 hover:bg-botanical-800 text-white font-bold text-xs shadow-botanical transition-all inline-flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
