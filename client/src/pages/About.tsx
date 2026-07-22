import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Award, Globe, Heart, Zap, Briefcase, GraduationCap, Users, Lightbulb, Shield, Sword, Mountain, BookOpen, Music, School, UserCheck, Bot } from 'lucide-react';
import PageNavbar from '@/components/layout/PageNavbar';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const values = [
    { icon: Heart, title: 'Human-Centered', description: 'Putting people first in everything I create' },
    { icon: Globe, title: 'Global Impact', description: 'Creating change that transcends borders' },
    { icon: Zap, title: 'Innovation', description: 'Pushing boundaries with technology and creativity' },
    { icon: Award, title: 'Excellence', description: 'Committed to quality and continuous growth' },
    { icon: Shield, title: 'Integrity', description: 'Acting with honesty, transparency, and ethical principles' },
    { icon: Sword, title: 'Courage', description: 'Taking bold steps to address challenges and create change' },
    { icon: Mountain, title: 'Resilience', description: 'Overcoming obstacles with determination and strength' },
    { icon: BookOpen, title: 'Life Long Learning', description: 'Continuously growing through knowledge and experience' },
  ];

  const experiences = [
    {
      icon: Briefcase,
      title: 'Co-Founder & CEO',
      organization: 'Reliance Sou International Youth Foundation',
      description: 'Leading initiatives that promote digital skills, self-reliance, entrepreneurship, and community impact across Africa',
    },
    {
      icon: GraduationCap,
      title: 'Computer Science Student',
      organization: 'Ashesi University',
      description: 'Pursuing Computer Science with focus on technology innovation and social impact',
    },
    {
      icon: Users,
      title: 'Melton Foundation Fellow',
      organization: 'Melton Foundation',
      description: 'Global leadership and social entrepreneurship fellowship program',
    },
    {
      icon: Lightbulb,
      title: 'Global Fellow',
      organization: 'GHEA21',
      description: 'Global fellowship focused on youth empowerment and social change',
    },
    {
      icon: Music,
      title: 'Founder and Former Manager',
      organization: 'The Peacemakers',
      description: 'Empowering youth and children from refugee backgrounds to use talent for healing, self-discovery and unlocking opportunities',
    },
    {
      icon: School,
      title: 'Educational Focal Person',
      organization: 'Education Cannot Wait - CIYOTA',
      description: 'Multi-year resilience program in Kyangwali refugee settlement, empowering young refugees and implementing social entrepreneurial-leadership and active non-violence curriculum',
    },
    {
      icon: UserCheck,
      title: 'Scholars Council Representative',
      organization: 'Mastercard Foundation',
      description: 'Representing Ashesi University students at the council while collaborating with foundation partners\' institutions across the globe to improve scholars\' well-being and experiences',
    },
    {
      icon: Bot,
      title: 'Artificial Intelligence Coach and Facilitator',
      organization: 'AI Education & Training',
      description: 'Exploring artificial intelligence effectiveness in workflows, sharing knowledge around chatbots, agentic engineering, data visualization and more using different AI tools',
    },
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
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12 space-y-4">
        
        {/* Main About Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-6xl bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Navbar */}
          <PageNavbar />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left - Biography */}
            <div className="p-8 md:p-12 lg:p-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-block mb-6"
              >
                <span className="bg-[#e6550d] text-white px-6 py-2 rounded-lg font-semibold text-sm shadow-lg font-serif">
                  {t('aboutMe').toUpperCase()}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight font-serif"
              >
                {t('creativeSocialTitle')}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-4 text-gray-600 text-base leading-relaxed font-serif"
              >
                <p className="text-justify">
                  {t('aboutBio1')}
                </p>

                <p className="text-justify">
                  {t('aboutBio2')}
                </p>

                <p className="text-justify">
                  {t('aboutBio3')}
                </p>
              </motion.div>
            </div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-8 lg:p-12"
            >
              <div className="relative w-full max-w-md">
                <div className="aspect-[3/4] bg-gradient-to-br from-brand-tertiary to-brand-quaternary rounded-2xl shadow-2xl overflow-hidden">
                  <img 
                    src="/images/global.png" 
                    alt="Adelard Borauzima"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Mission Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-6xl bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8"
        >
          <div className="space-y-4 text-gray-600 text-base leading-relaxed font-serif">
            <p className="text-justify">
              {t('aboutMission1')}
            </p>

            <p className="text-justify">
              {t('aboutMission2')}
            </p>
          </div>
        </motion.div>

        {/* Experience Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-6xl"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-6 font-serif">{t('experienceRoles')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 ${index % 2 === 0 ? 'bg-[#3182bd]' : 'bg-[#e6550d]'} rounded-lg flex-shrink-0`}>
                    <exp.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 font-serif">{exp.title}</h3>
                    <p className={`${index % 2 === 0 ? 'text-[#3182bd]' : 'text-[#e6550d]'} font-medium text-sm mb-2 font-serif`}>{exp.organization}</p>
                    <p className="text-gray-600 text-sm text-justify font-serif">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-6xl pb-12"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-6 font-serif">{t('coreValues')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full ${index % 2 === 0 ? 'bg-[#3182bd]' : 'bg-[#e6550d]'} mb-4`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 font-serif">{title}</h3>
                <p className="text-gray-600 text-sm text-justify font-serif">{description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;
