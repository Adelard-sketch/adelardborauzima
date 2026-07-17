import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import PageNavbar from '@/components/layout/PageNavbar';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Placeholder images - replace with actual gallery images
  const images = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    url: `https://picsum.photos/seed/${i + 1}/800/600`,
    title: `Gallery Image ${i + 1}`,
    category: ['Travel', 'Art', 'Events'][i % 3],
  }));

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/src/assets/images/backgroundMain.jpg" 
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-400/20 via-slate-500/20 to-slate-600/20" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12 space-y-6">
        
        {/* Header Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-6xl bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Navbar */}
          <PageNavbar />
          
          <div className="p-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="bg-[#3182bd] text-white px-6 py-2 rounded-lg font-semibold text-sm shadow-lg">
              GALLERY
            </span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-[#3182bd]">Journey</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Moments captured from my journey around the world — art, travel, events, and experiences
          </p>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-6xl pb-12"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setSelectedImage(index)}
                className="relative h-64 rounded-xl overflow-hidden cursor-pointer group bg-white/90 backdrop-blur-sm shadow-lg"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-bold text-lg mb-1">{image.title}</p>
                    <span className="inline-block px-3 py-1 bg-[#3182bd] rounded-full text-xs font-medium">
                      {image.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-5xl w-full"
              >
                <img
                  src={images[selectedImage].url}
                  alt={images[selectedImage].title}
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                  <h3 className="text-white text-2xl font-bold mb-2">{images[selectedImage].title}</h3>
                  <span className="inline-block px-4 py-2 bg-[#3182bd] rounded-full text-white text-sm font-medium">
                    {images[selectedImage].category}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;
