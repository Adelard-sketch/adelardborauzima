import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import PageNavbar from '@/components/layout/PageNavbar';
import { useLanguage } from '@/contexts/LanguageContext';

const Gallery = () => {
  const { t } = useLanguage();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Real gallery images from your journey
  const images = [
    // Leadership & Professional
    { id: 1, url: '/images/sgds.jpeg', title: 'SDGs Advocacy', category: 'Global' },
    { id: 30, url: '/images/nairobiperform.JPG', title: 'Performance in Nairobi', category: 'Art' },
    { id: 18, url: '/images/baobabSummit.jpeg', title: 'Baobab Summit Experience', category: 'Events' },
    { id: 4, url: '/images/Leadership.jpeg', title: 'With the Peacemakers', category: 'Leadership' },
    { id: 52, url: '/images/sdgs2.jpg', title: 'Global Citizenship Connect ', category: 'Global' },
    { id: 50, url: '/images/mastercardFoundationCouncil2.jpg', title: '2025 Mastercard Foundation Council', category: 'Recognition' },
    { id: 27, url: '/images/peacemakersPic.jpeg', title: 'Peacemakers Community', category: 'Art' },
    { id: 15, url: '/images/studyAbroad.jpeg', title: 'Ghana International Students Experience', category: 'Global' },
    { id: 20, url: '/images/baobabAmbassador.jpeg', title: 'Baobab Ambassador', category: 'Leadership' },
    { id: 21, url: '/images/baobabteam.JPG', title: 'Baobab Team', category: 'Events' },
   
    { id: 6, url: '/images/leadershipService.jpeg', title: 'Community Service Leadership', category: 'Leadership' },
    { id: 8, url: '/images/leadershipOutreach.jpeg', title: 'Community Outreach', category: 'Leadership' },
    { id: 25, url: '/images/peacemakers2021.jpeg', title: 'Peacemakers 2023', category: 'Art' },
    { id: 9, url: '/images/leadershipTeach.jpeg', title: 'Teaching & Mentorship', category: 'Leadership' },
    { id: 33, url: '/images/umuziFestival.jpeg', title: 'Umuzi Festival_Johanesburg', category: 'Art' },
    { id: 10, url: '/images/teach.jpeg', title: 'Educational Leadership', category: 'Leadership' },
    { id: 22, url: '/images/baobabteam2.jpg', title: '2025 Ashesi Baobab  Participants', category: 'Events' },

    // Global Experiences & Education
     { id: 13, url: '/images/meltonGermany.jpeg', title: 'Melton Fellowship - Germany', category: 'Global' },
    { id: 14, url: '/images/germany.jpg', title: 'Study Experience in Germany', category: 'Global' },
    
    { id: 16, url: '/images/carineAshesi.jpeg', title: 'Campus Life at Ashesi', category: 'Education' },

    // Baobab Summit & Events
    { id: 17, url: '/images/BaobabSum.jpeg', title: 'Baobab Summit', category: 'Events' },
    
    { id: 19, url: '/images/baobabSummitNairobi.jpeg', title: 'Baobab Summit - Nairobi', category: 'Events' },

    
    

    // Art & Creative Expression
    { id: 23, url: '/images/creativeExpression.jpeg', title: 'Creative Expression Workshop', category: 'Art' },
    { id: 24, url: '/images/peacemakers.jpeg', title: 'The Peacemakers Initiative', category: 'Art' },
    
    { id: 26, url: '/images/peacemakersMusic.jpeg', title: 'Peacemakers Music Program', category: 'Art' },
   
   
    { id: 31, url: '/images/studio.jpeg', title: 'Studio Session', category: 'Art' },
  
    

        // Projects & Presentations
    { id: 40, url: '/images/pitch.png', title: 'Project Pitch', category: 'Projects' },

    { id: 42, url: '/images/rsyFoundation.jpg', title: 'Reliance Soul International Youth Foundation', category: 'Projects' },
    { id: 45, url: '/images/artCenterDream.png', title: 'Art Center Vision', category: 'Projects' },

    // Cultural & Community
    { id: 46, url: '/images/CulturalCollaboration.jpeg', title: 'Cultural Collaboration', category: 'Cultural' },
    { id: 47, url: '/images/congo.jpeg', title: 'Congo Heritage', category: 'Cultural' },
    { id: 48, url: '/images/farm.jpeg', title: 'Community Farm Experience', category: 'Agriculture' },
    

    // Special Moments & Recognition
    
    
   
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/images/backgroundMain.jpg" 
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
            <span className="bg-[#3182bd] text-white px-6 py-2 rounded-lg font-semibold text-sm shadow-lg font-serif">
              {t('gallery').toUpperCase()}
            </span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
            {t('myJourney')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-serif text-justify">
            {t('galleryDescription')}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.02 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setSelectedImage(index)}
                className="relative h-64 rounded-xl overflow-hidden cursor-pointer group bg-white/90 backdrop-blur-sm shadow-lg"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-bold text-sm mb-1 font-serif">{image.title}</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium font-serif ${
                      ['Professional', 'Recognition'].includes(image.category) ? 'bg-[#e6550d]' : 'bg-[#3182bd]'
                    }`}>
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
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={images[selectedImage].url}
                  alt={images[selectedImage].title}
                  className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 rounded-b-lg">
                  <h3 className="text-white text-2xl font-bold mb-2 font-serif">{images[selectedImage].title}</h3>
                  <span className={`inline-block px-4 py-2 rounded-full text-white text-sm font-medium font-serif ${
                    ['Professional', 'Recognition'].includes(images[selectedImage].category) ? 'bg-[#e6550d]' : 'bg-[#3182bd]'
                  }`}>
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