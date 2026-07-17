import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Instagram, Github, Mail, Twitter, Download } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import Button from '@/components/ui/Button';
import { FadeIn } from '@/components/animations/AnimatedText';
import { NAV_LINKS, SOCIAL_LINKS } from '@/utils/constants';

// Custom TikTok Icon Component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const AnimatedCounter = ({ end, label, delay = 0 }: { end: number; label: string; delay?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        let start = 0;
        const duration = 2000; // 2 seconds
        const increment = end / (duration / 16); // 60fps
        
        const counter = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(counter);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
        
        return () => clearInterval(counter);
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [isInView, end, delay]);

  const formatCount = (num: number): string => {
    if (label.includes('Youth')) {
      return num >= 1000 ? `${Math.floor(num / 1000)}k+` : `${num}+`;
    }
    return num.toString();
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: delay / 1000 }}
      className="text-center"
    >
      <div className="text-3xl md:text-4xl font-bold text-[#e34a33] mb-2 font-serif">
        {formatCount(count)}
      </div>
      <div className="text-sm text-gray-600 font-medium font-serif">
        {label}
      </div>
    </motion.div>
  );
};

const Home = () => {
  const stats = [
    { value: 6, label: 'Years of Experience' },
    { value: 10, label: 'Projects Completed' },
    { value: 5000, label: 'Youth Impacted' },
    { value: 5, label: 'Organizations Worked With' },
  ];

  const socialIcons = [
    { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn', color: 'text-[#0A66C2]' },
    { icon: Facebook, href: SOCIAL_LINKS.facebook, label: 'Facebook', color: 'text-[#1877F2]' },
    { icon: Instagram, href: SOCIAL_LINKS.instagram, label: 'Instagram', color: 'text-[#E4405F]' },
    { icon: Twitter, href: SOCIAL_LINKS.x, label: 'X', color: 'text-[#000000]' },
    { icon: TikTokIcon, href: SOCIAL_LINKS.tiktok, label: 'TikTok', color: 'text-[#FF0050]' },
    { icon: Github, href: SOCIAL_LINKS.github, label: 'GitHub', color: 'text-[#181717]' },
    { icon: Mail, href: `mailto:${SOCIAL_LINKS.email}`, label: 'Email', color: 'text-[#EA4335]' },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/images/backgroundMain.jpg" 
          alt="Background"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-400/20 via-slate-500/20 to-slate-600/20" />
      </div>

      {/* Main Content Card */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-6xl bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Navbar inside card */}
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
                    className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link to="/contact">
                  <button className="bg-[#e6550d] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#e6550d]/90 transition-all shadow-lg">
                    Contact
                  </button>
                </Link>
              </div>

              <button className="md:hidden p-2 rounded-lg bg-[#e6550d] text-white hover:bg-[#e6550d]/90 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Right Image Section - appears first on mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center p-8 lg:p-12 order-1 lg:order-2"
            >
              {/* Social Media Icons */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mb-6"
              >
                <div className="flex items-center space-x-3">
                  {socialIcons.map(({ icon: Icon, href, label, color }, index) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                      whileHover={{ scale: 1.15, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 rounded-xl bg-white/90 ${color} transition-all shadow-md hover:shadow-lg`}
                      aria-label={label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Profile image */}
              <div className="relative w-full max-w-md">
                <div className="aspect-[3/4] bg-gradient-to-br from-brand-tertiary to-brand-quaternary rounded-2xl shadow-2xl overflow-hidden">
                  <img 
                    src="/images/adelard.png" 
                    alt="Adelard Borauzima"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Download CV Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="mt-6"
              >
                <motion.a
                  href="/cv.pdf"
                  download="Adelard_Borauzima_CV.pdf"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 bg-[#e6550d] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#e6550d]/90 transition-all font-serif"
                >
                  <Download className="w-5 h-5" />
                  <span>Download CV</span>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Left Content Section - appears second on mobile */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
              {/* Roles Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-8"
              >
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    'Artist',
                    'Social Entrepreneur', 
                    'Software Engineer',
                    'AI Coach',
                    'Global Citizen',
                    'Intercultural Collaborator',
                    'Leadership as Service',
                    'Tour Guide Certified',
                    'Design Thinking'
                  ].map((role, index) => (
                    <motion.div
                      key={role}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center space-x-2 p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-gray-200 hover:shadow-md transition-all"
                    >
                      <div className="w-2 h-2 bg-[#e34a33] rounded-full"></div>
                      <span className="text-sm font-medium text-gray-700 font-serif">{role}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Main Heading */}
              <FadeIn delay={0.7}>
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 leading-tight font-serif">
                  Greetings, I am
                  <br />
                  <span className="text-[#3182bd]">Adelard Borauzima Hanzira</span>
                </h1>
              </FadeIn>

              {/* Description */}
              <FadeIn delay={0.8}>
                <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed max-w-lg font-serif text-justify">
                  I am an <span className="font-semibold text-gray-800">AI Coach</span>, 
                  <span className="font-semibold text-gray-800"> Social Entrepreneur</span>, 
                  <span className="font-semibold text-gray-800"> Software Engineer</span>, and 
                  <span className="font-semibold text-gray-800"> Artist</span> dedicated to leveraging 
                  technology and innovation to advance social good. My academic foundation in computer science 
                  at Ashesi University, supported by the Mastercard Foundation Scholarship, has equipped me 
                  with both technical expertise and leadership acumen to address critical societal challenges.
                </p>

                <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed max-w-lg font-serif text-justify">
                  In my capacity as <span className="font-semibold text-gray-800">Co-Founder and Chief Executive Officer 
                  of Reliance Soul International Youth Foundation</span> and 
                  <span className="font-semibold text-gray-800"> Founder of The Peacemakers</span>, 
                  I spearhead transformative initiatives designed to empower displaced youth within the creative sector. 
                  My work focuses on fostering healing, promoting social inclusion, and creating sustainable impact 
                  through innovative approaches in art, education, social entrepreneurship, and community development.
                </p>
              </FadeIn>

              {/* CTA Button */}
              <FadeIn delay={0.9}>
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-[#e6550d] hover:bg-[#e6550d]/90 text-white px-8 py-3 rounded-lg shadow-lg font-serif"
                  >
                    Connect With Me
                  </Button>
                </Link>
              </FadeIn>
            </div>
          </div>
        </motion.div>

        {/* Stats and Social Media Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-6xl bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <AnimatedCounter
                  key={index}
                  end={stat.value}
                  label={stat.label}
                  delay={index * 200}
                />
              ))}
            </div>

            {/* Social Media Section */}
            <div className="flex flex-col items-center md:items-end">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect With Me</h3>
              <div className="flex items-center space-x-3">
                {socialIcons.map(({ icon: Icon, href, label, color }, index) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-xl bg-gray-100 ${color} transition-all shadow-md hover:shadow-lg`}
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Roles Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-6xl bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            What I <span className="text-[#3182bd]">Do</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: 'Artist', 
                description: 'Expressing stories through creative work', 
                image: '/images/adelardSinging.jpeg'
              },
              { 
                title: 'Social Entrepreneur', 
                description: 'Building solutions for social impact', 
                image: '/images/pitch.png'
              },
              { 
                title: 'Software Engineer', 
                description: 'Creating immersive web applications', 
                image: '/images/softwareEngineering.png'
              },
              { 
                title: 'Artificial Intellignece Trainer', 
                description: 'On of my Students projects for AI in data Analytics and Vizualization', 
                image: '/images/aiVizualization.png'
              },
              { 
                title: 'Leadership as Service', 
                description: 'Exploring and developing leadership potential among young people.', 
                image: '/images/Leadership.jpeg'
              },
              { 
                title: 'Intercultural Collaborator', 
                description: 'Building bridges across cultures', 
                image: '/images/CulturalCollaboration.jpeg'
              },
            ].map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 hover:shadow-lg transition-all overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={role.image}
                    alt={role.title}
                    className={`w-full h-full ${role.title === 'Artist' ? 'object-cover object-top' : role.title === 'Social Entrepreneur' ? 'object-cover object-center' : 'object-cover'}`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-1">{role.title}</h3>
                    <p className="text-white/90 text-sm">{role.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Thoughts/Images Section */}
       
          
        {/* Global Experiences Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-6xl pb-12"
        >
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Global <span className="text-[#3182bd]">Experiences</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Experience 1 - Uganda */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden group cursor-pointer"
            >
                <div className="relative h-80 md:h-[340px] overflow-hidden">
                <img 
                  src="/images/techEducation.jpeg"
                  alt="Tech Education Uganda"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4">
                  <div className="bg-white/95 rounded-lg px-2 py-1 shadow-lg border">
                    <span className="text-xs font-bold text-gray-800">UGANDA 🇺🇬</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-base md:text-lg mb-1">Tech Education</h3>
                  <p className="text-white/90 text-xs md:text-sm">Elimisha Youth Empowerment Center</p>
                </div>
              </div>
              <div className="p-4 md:p-6">
                <p className="text-gray-600 text-sm leading-relaxed">
                  I had an experience of training AI and ICT at Elimisha Empowering Center, working with young minds to bridge the digital divide.
                </p>
                <div className="mt-4 flex items-center text-[#3182bd] text-sm font-medium">
                  <span>Read more</span>
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Experience 2 - Kenya */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden group cursor-pointer"
            >
              <div className="relative h-80 md:h-[340px] overflow-hidden">
                <img 
                  src="/images/BaobabSum.jpeg"
                  alt="Baobab Summit Kenya"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4">
                  <div className="bg-white/95 rounded-lg px-2 py-1 shadow-lg border">
                    <span className="text-xs font-bold text-gray-800">KENYA 🇰🇪</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-base md:text-lg mb-1">2026 Baobab Summit</h3>
                  <p className="text-white/90 text-xs md:text-sm">Mastercard Foundation</p>
                </div>
              </div>
              <div className="p-4 md:p-6">
                <p className="text-gray-600 text-sm leading-relaxed">
                  I had the privilege of meeting incredible minds and changemakers across the continent and beyond from foundation partner institutions and organizations.
                </p>
                <div className="mt-4 flex items-center text-[#3182bd] text-sm font-medium">
                  <span>Read more</span>
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Experience 3 - Uganda */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden group cursor-pointer"
            >
              <div className="relative h-80 md:h-[340px] overflow-hidden">
                <img 
                  src="/images/creativeExpression.jpeg"
                  alt="Creative Expression Uganda"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4">
                  <div className="bg-white/95 rounded-lg px-2 py-1 shadow-lg border">
                    <span className="text-xs font-bold text-gray-800">UGANDA 🇺🇬</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-base md:text-lg mb-1">Creative Expression</h3>
                  <p className="text-white/90 text-xs md:text-sm">The Peacemakers / CIYOTA</p>
                </div>
              </div>
              <div className="p-4 md:p-6">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Starting this creative group has been exceptional, emotional and inspiring. I hope to keep empowering young talents.
                </p>
                <div className="mt-4 flex items-center text-[#3182bd] text-sm font-medium">
                  <span>Read more</span>
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
            
            {/* Experience 4 - South Africa */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden group cursor-pointer"
            >
              <div className="relative h-80 md:h-[340px] overflow-hidden">
                <img 
                  src="/images/umuziFestival.jpeg"
                  alt="AI Creative Space South Africa"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4">
                  <div className="bg-white/95 rounded-lg px-2 py-1 shadow-lg border">
                    <span className="text-xs font-bold text-gray-800">SOUTH AFRICA 🇿🇦</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-base md:text-lg mb-1">AI in Creative Space</h3>
                  <p className="text-white/90 text-xs md:text-sm">ALA Umuzi Festival, Johannesburg</p>
                </div>
              </div>
              <div className="p-4 md:p-6">
                <p className="text-gray-600 text-sm leading-relaxed">
                  I have deep love for African Leadership Academy, amazing people and great talents with a mindset to change the continent.
                </p>
                <div className="mt-4 flex items-center text-[#3182bd] text-sm font-medium">
                  <span>Read more</span>
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Experience 5 - Germany */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden group cursor-pointer"
            >
              <div className="relative h-80 md:h-[340px] overflow-hidden">
                <img 
                  src="/images/meltonGermany.jpeg"
                  alt="Global Citizenship Germany"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4">
                  <div className="bg-white/95 rounded-lg px-2 py-1 shadow-lg border">
                    <span className="text-xs font-bold text-gray-800">GERMANY 🇩🇪</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-base md:text-lg mb-1">Global Citizenship Connect</h3>
                  <p className="text-white/90 text-xs md:text-sm">Melton Foundation</p>
                </div>
              </div>
              <div className="p-4 md:p-6">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Intercultural collaboration and global dialogues change perspectives about life and individuals.
                </p>
                <div className="mt-4 flex items-center text-[#3182bd] text-sm font-medium">
                  <span>Read more</span>
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Experience 6 - Uganda */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden group cursor-pointer"
            >
              <div className="relative h-80 md:h-[340px] overflow-hidden">
                <img 
                  src="/images/LeadershipUg.jpeg"
                  alt="Global Leadership Uganda"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4">
                  <div className="bg-white/95 rounded-lg px-2 py-1 shadow-lg border">
                    <span className="text-xs font-bold text-gray-800">UGANDA 🇺🇬</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-base md:text-lg mb-1">Global Leadership</h3>
                  <p className="text-white/90 text-xs md:text-sm">CIYOTA - Connecting Young Minds</p>
                </div>
              </div>
              <div className="p-4 md:p-6">
                <p className="text-gray-600 text-sm leading-relaxed">
                  This is sustainable development goals in action. I love talking about SDGs and showing young people that this is a starting point of self-discovery and being changemakers.
                </p>
                <div className="mt-4 flex items-center text-[#3182bd] text-sm font-medium">
                  <span>Read more</span>
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
