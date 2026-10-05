import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle2, ExternalLink } from 'lucide-react';
import { patientReviews } from '@/content/reviews';
import { siteConfig } from '@/content/site.config';
import { AnimatedCounter } from '@/components/effects/AnimatedCounter';

export function ReviewsSection() {
  const displayedReviews = patientReviews.slice(0, 3);

  return (
    <section id="reviews" className="py-16 lg:py-24 relative bg-[#F7F5EE] border-b border-botanical-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-botanical-100 text-botanical-800 text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-herbal-500 text-herbal-500" />
            Patient Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-botanical-900 tracking-tight">
            Trusted Across Anantapur
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600">
            4.9★ rating from over 920+ verified Google &amp; Justdial patient reviews.
          </p>
        </div>

        {/* 3 Crisp Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {displayedReviews.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="bg-white rounded-3xl p-6 border border-botanical-200 shadow-soft hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex text-herbal-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-herbal-500" />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-botanical-50 text-botanical-800 border border-botanical-100">
                    {review.source}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-botanical-900 mb-1.5">
                  "{review.headline}"
                </h4>

                <p className="text-xs text-charcoal-600 leading-relaxed italic mb-4">
                  "{review.content}"
                </p>
              </div>

              <div className="pt-3 border-t border-botanical-100 flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-charcoal-900">{review.author}</p>
                  <p className="text-[11px] text-charcoal-500">{review.location}</p>
                </div>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-sage-100 text-sage-800">
                  {review.treatmentCategory}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* External review link */}
        <div className="mt-8 text-center">
          <a
            href={siteConfig.contact.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-botanical-300 text-botanical-800 font-bold text-xs hover:bg-botanical-50 transition-colors shadow-xs"
          >
            <Star className="w-3.5 h-3.5 fill-herbal-500 text-herbal-500" />
            <span>Read All Google Reviews</span>
            <ExternalLink className="w-3 h-3 text-botanical-600" />
          </a>
        </div>

      </div>
    </section>
  );
}
