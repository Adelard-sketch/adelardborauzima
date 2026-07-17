import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '@/utils/constants';
import { cn } from '@/utils/cn';
import { Menu } from 'lucide-react';

const PageNavbar = () => {
  const location = useLocation();

  return (
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
          <Link to="/contact">
            <button className="bg-[#3182bd] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#3182bd]/90 transition-all shadow-lg">
              Contact
            </button>
          </Link>
        </div>

        <button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default PageNavbar;
