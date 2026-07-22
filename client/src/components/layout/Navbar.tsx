import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { cn } from '@/utils/cn';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Only show navbar on home page in the card
  if (location.pathname !== '/') {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#3182bd] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="font-bold text-gray-900 text-lg">Adelard</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={cn(
                  'text-sm font-medium transition-colors',
                  location.pathname === '/'
                    ? 'text-[#3182bd]'
                    : 'text-gray-600 hover:text-gray-900'
                )}
              >
                {t('home')}
              </Link>
              <Link
                to="/about"
                className={cn(
                  'text-sm font-medium transition-colors',
                  location.pathname === '/about'
                    ? 'text-[#3182bd]'
                    : 'text-gray-600 hover:text-gray-900'
                )}
              >
                {t('about')}
              </Link>
              <Link
                to="/projects"
                className={cn(
                  'text-sm font-medium transition-colors',
                  location.pathname === '/projects'
                    ? 'text-[#3182bd]'
                    : 'text-gray-600 hover:text-gray-900'
                )}
              >
                {t('projects')}
              </Link>
              <Link
                to="/gallery"
                className={cn(
                  'text-sm font-medium transition-colors',
                  location.pathname === '/gallery'
                    ? 'text-[#3182bd]'
                    : 'text-gray-600 hover:text-gray-900'
                )}
              >
                {t('gallery')}
              </Link>
              <button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/doc/adelCV.pdf';
                  link.download = 'Adelard_Borauzima_CV.pdf';
                  link.target = '_blank';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="flex items-center space-x-1 text-sm font-medium text-gray-600 hover:text-[#e34a33] transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>CV</span>
              </button>
              <Link to="/contact">
                <button className="bg-[#3182bd] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#3182bd]/90 transition-all shadow-lg">
                  {t('contact')}
                </button>
              </Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-orange-50 text-[#e34a33] hover:text-[#d73527] transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-200"
            >
              <div className="px-4 py-6 space-y-4">
                <Link
                  to="/"
                  className={cn(
                    'block py-2 text-base font-medium',
                    location.pathname === '/'
                      ? 'text-[#3182bd]'
                      : 'text-gray-600'
                  )}
                >
                  {t('home')}
                </Link>
                <Link
                  to="/about"
                  className={cn(
                    'block py-2 text-base font-medium',
                    location.pathname === '/about'
                      ? 'text-[#3182bd]'
                      : 'text-gray-600'
                  )}
                >
                  {t('about')}
                </Link>
                <Link
                  to="/projects"
                  className={cn(
                    'block py-2 text-base font-medium',
                    location.pathname === '/projects'
                      ? 'text-[#3182bd]'
                      : 'text-gray-600'
                  )}
                >
                  {t('projects')}
                </Link>
                <Link
                  to="/gallery"
                  className={cn(
                    'block py-2 text-base font-medium',
                    location.pathname === '/gallery'
                      ? 'text-[#3182bd]'
                      : 'text-gray-600'
                  )}
                >
                  {t('gallery')}
                </Link>
                <Link
                  to="/contact"
                  className={cn(
                    'block py-2 text-base font-medium',
                    location.pathname === '/contact'
                      ? 'text-[#3182bd]'
                      : 'text-gray-600'
                  )}
                >
                  {t('contact')}
                </Link>
                <button
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/doc/adelCV.pdf';
                    link.download = 'Adelard_Borauzima_CV.pdf';
                    link.target = '_blank';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="flex items-center space-x-2 py-2 text-base font-medium text-gray-600 hover:text-[#e34a33] transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>{t('downloadCV')}</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    );
  }

  // Home page navbar (inside the card)
  return (
    <div className="absolute top-0 left-0 right-0 z-20 px-8 py-6">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-[#3182bd] rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-xl">B</span>
          </div>
          <span className="font-bold text-gray-900 text-xl hidden sm:block">Adelard</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            {t('home')}
          </Link>
          <Link
            to="/about"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            {t('about')}
          </Link>
          <Link
            to="/projects"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            {t('projects')}
          </Link>
          <Link
            to="/gallery"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            {t('gallery')}
          </Link>
          <a
            href="/doc/adelCV.pdf"
            download="Adelard_Borauzima_CV.pdf"
            className="flex items-center space-x-1 text-sm font-medium text-gray-600 hover:text-[#e34a33] transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>CV</span>
          </a>
          <Link to="/contact">
            <button className="bg-[#3182bd] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#3182bd]/90 transition-all shadow-lg">
              {t('contact')}
            </button>
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-orange-50 text-[#e34a33] hover:text-[#d73527] transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-4 bg-white rounded-xl shadow-lg p-4"
          >
            <Link
              to="/"
              className="block py-3 text-base font-medium text-gray-600 hover:text-gray-900"
            >
              {t('home')}
            </Link>
            <Link
              to="/about"
              className="block py-3 text-base font-medium text-gray-600 hover:text-gray-900"
            >
              {t('about')}
            </Link>
            <Link
              to="/projects"
              className="block py-3 text-base font-medium text-gray-600 hover:text-gray-900"
            >
              {t('projects')}
            </Link>
            <Link
              to="/gallery"
              className="block py-3 text-base font-medium text-gray-600 hover:text-gray-900"
            >
              {t('gallery')}
            </Link>
            <Link
              to="/contact"
              className="block py-3 text-base font-medium text-gray-600 hover:text-gray-900"
            >
              {t('contact')}
            </Link>
            <a
              href="/doc/adelCV.pdf"
              download="Adelard_Borauzima_CV.pdf"
              className="flex items-center space-x-2 py-3 text-base font-medium text-gray-600 hover:text-[#e34a33] transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>{t('downloadCV')}</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
