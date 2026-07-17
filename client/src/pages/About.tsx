import { motion } from 'framer-motion';
import { Award, Globe, Heart, Zap, Briefcase, GraduationCap, Users, Lightbulb } from 'lucide-react';
import PageNavbar from '@/components/layout/PageNavbar';

const About = () => {
  const values = [
    { icon: Heart, title: 'Human-Centered', description: 'Putting people first in everything I create' },
    { icon: Globe, title: 'Global Impact', description: 'Creating change that transcends borders' },
    { icon: Zap, title: 'Innovation', description: 'Pushing boundaries with technology and creativity' },
    { icon: Award, title: 'Excellence', description: 'Committed to quality and continuous growth' },
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
  ];

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
                <span className="bg-[#3182bd] text-white px-6 py-2 rounded-lg font-semibold text-sm shadow-lg">
                  ABOUT ME
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
              >
                Artist | Social Entrepreneur | Computer Scientist
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-4 text-gray-600 text-base leading-relaxed"
              >
                <p>
                  I am a <span className="font-semibold text-gray-900">social entrepreneur</span>, 
                  <span className="font-semibold text-gray-900"> artist</span>, and 
                  <span className="font-semibold text-gray-900"> computer scientist</span> passionate 
                  about empowering young people from marginalized communities through technology, 
                  creativity, and education.
                </p>

                <p>
                  As <span className="font-semibold text-[#3182bd]">Co-Founder and CEO of Reliance Sou 
                  International Youth Foundation</span>, I lead initiatives that promote digital skills, 
                  self-reliance, entrepreneurship, and community impact across Africa.
                </p>

                <p>
                  My work focuses on leveraging innovation, storytelling, and technology to create 
                  opportunities for youth and drive sustainable social change.
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
                    src="/src/assets/images/adelardSinging.jpeg" 
                    alt="Adelard Borauzima Singing"
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
          <div className="space-y-4 text-gray-600 text-base leading-relaxed">
            <p>
              I am a <span className="font-semibold text-[#3182bd]">Melton Foundation Fellow</span> and 
              a <span className="font-semibold text-[#3182bd]">Global Fellow of GHEA21</span>, and I 
              previously served as a representative on the 
              <span className="font-semibold text-[#3182bd]"> Mastercard Foundation Scholars Council</span>.
            </p>

            <p>
              I am currently pursuing <span className="font-semibold text-[#3182bd]">Computer Science 
              at Ashesi University</span>, where I combine my technical skills with my passion for 
              social impact.
            </p>

            <p>
              Through my work, I strive to build innovative solutions that create opportunities for 
              youth and drive social impact across Africa, using technology as a tool for empowerment 
              and positive change.
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
          <h2 className="text-3xl font-bold text-white text-center mb-6">Experience & Roles</h2>
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
                  <div className="p-3 bg-[#3182bd] rounded-lg flex-shrink-0">
                    <exp.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{exp.title}</h3>
                    <p className="text-[#3182bd] font-medium text-sm mb-2">{exp.organization}</p>
                    <p className="text-gray-600 text-sm">{exp.description}</p>
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
          <h2 className="text-3xl font-bold text-white text-center mb-6">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {values.map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-brand-tertiary to-brand-quaternary mb-4">
                  <Icon className="w-7 h-7 text-[#3182bd]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;
