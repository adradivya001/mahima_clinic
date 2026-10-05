import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Sparkles, X, Eye, MapPin } from 'lucide-react';
import { galleryItems, galleryCategories, type GalleryItem } from '@/content/gallery';

export function ClinicGallery() {
  const [activeCategory, setActiveCategory] = useState<string>('All Areas');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeCategory === 'All Areas'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 lg:py-28 relative bg-[#FCFBF8] border-b border-botanical-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-botanical-100 text-botanical-800 text-xs font-bold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5 text-botanical-600" />
            Clinic Environment
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-botanical-900 tracking-tight">
            Inside Sri Mahima Clinic
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
            A serene, hygienic, and welcoming clinical setting located right at Vidyuth Nagar Circle, Anantapur.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-botanical-700 text-white shadow-sm'
                  : 'bg-white text-charcoal-700 hover:bg-botanical-50 border border-botanical-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-3xl overflow-hidden bg-botanical-100 border border-botanical-200/90 shadow-soft hover:shadow-premium cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Hover overlay with details */}
              <div className="absolute inset-0 bg-gradient-to-t from-botanical-950/90 via-botanical-950/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity p-5 flex flex-col justify-end text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider text-herbal-300 mb-1">
                  {item.category}
                </span>
                <h4 className="font-serif font-bold text-base text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-sage-200 line-clamp-2">
                  {item.caption}
                </p>
                
                <div className="mt-2 flex items-center gap-1 text-[11px] text-herbal-300 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Click to expand</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image Modal Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-900/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)}
                className="fixed inset-0"
              />

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative bg-white rounded-3xl overflow-hidden max-w-2xl w-full z-10 shadow-2xl border border-botanical-300"
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors z-20"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="aspect-[16/10] bg-black">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="p-6 bg-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-botanical-700">
                    {selectedImage.category}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-botanical-900 mt-1 mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-sm text-charcoal-600">
                    {selectedImage.caption}
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
