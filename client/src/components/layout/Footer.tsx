import { motion } from 'framer-motion';
import { Linkedin, Facebook, Instagram, Github, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '@/utils/constants';

const Footer = () => {
  const socialIcons = [
    { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Facebook, href: SOCIAL_LINKS.facebook, label: 'Facebook', color: 'hover:text-blue-600' },
    { icon: Instagram, href: SOCIAL_LINKS.instagram, label: 'Instagram', color: 'hover:text-[#3182bd]' },
    { icon: Github, href: SOCIAL_LINKS.github, label: 'GitHub', color: 'hover:text-gray-900' },
    { icon: Mail, href: `mailto:${SOCIAL_LINKS.email}`, label: 'Email', color: 'hover:text-red-600' },
  ];

  return (
    <footer className="bg-[#3182bd] text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand and Copyright */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
              <span className="text-[#3182bd] font-bold text-lg">B</span>
            </div>
            <div>
              <span className="font-bold text-lg">Adelard Borauzima</span>
              <p className="text-blue-200 text-sm">© {new Date().getFullYear()} All rights reserved.</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center space-x-4">
            {socialIcons.map(({ icon: Icon, href, label, color }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2 rounded-lg bg-white/10 text-white transition-colors hover:bg-white/20 ${color}`}
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Made with love */}
        <div className="text-center mt-4 pt-4 border-t border-white/20">
          <p className="text-blue-200 text-sm flex items-center justify-center gap-2">
            Made by in Adelard
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;