import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { NAV_LINKS } from '@/utils/constants';
import { cn } from '@/utils/cn';

const PageNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <div className="px-8 py-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-[#3182bd] rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <span className="font-bold text-gray-900 text-xl hidden sm:block">Adelard</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-sm font-medium transition-colors',
                  location.pathname === link.path
                    ? 'text-[#3182bd]'
                    : 'text-gray-600 hover:text-gray-900'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className={cn(
                'text-sm font-medium transition-colors',
                location.pathname === '/contact'
                  ? 'text-[#3182bd]'
                  : 'text-gray-600 hover:text-gray-900'
              )}
            >
              Contact
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
                Contact
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
            className="md:hidden bg-white border-b border-gray-200"
          >
            <div className="px-8 py-6 space-y-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'block py-2 text-base font-medium',
                    location.pathname === link.path
                      ? 'text-[#3182bd]'
                      : 'text-gray-600'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className={cn(
                  'block py-2 text-base font-medium',
                  location.pathname === '/contact'
                    ? 'text-[#3182bd]'
                    : 'text-gray-600'
                )}
              >
                Contact
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
                <span>Download CV</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PageNavbar;
