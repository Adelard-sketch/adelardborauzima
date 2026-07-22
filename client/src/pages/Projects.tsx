import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { ExternalLink, Github, Instagram, Facebook, Linkedin, Mail } from 'lucide-react';
import Button from '@/components/ui/Button';
import PageNavbar from '@/components/layout/PageNavbar';
import { useLanguage } from '@/contexts/LanguageContext';

// Custom TikTok Icon Component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Projects = () => {
  const { t } = useLanguage();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      id: '1',
      title: 'Reliance Soul International Youth Foundation',
      description: 'Leading organization empowering hundreds of young people from marginalized community through creative artistic education, and mentorship programs with a goal of creating awareness about SDGs',
      coverImage: '/images/rsyFoundation.jpg',
      category: 'Social Impact',
      tags: ['Art', 'Education', 'Social Entrepreneurship', 'Leadership', 'Youth Empowerment'],
      link: 'https://reliancesoulfdn.org',
      featured: true,
      year: 2023,
      impact: '5000+ youth impacted',
    },
    {
      id: '2',
      title: 'Artificial Intelligence Education',
      description: 'Empowering & Building accessible AI learning resources and tools specifically designed for African contexts and challenges.',
      coverImage: '/images/aiTraining.png',
      category: 'Technology',
      tags: ['AI', 'Education', 'Innovation', 'Accessibility'],
      github: 'https://github.com/Adelard-sketch/disease-spread-simulator',
      featured: true,
      year: 2024,
      impact: '100+ students trained',
    },
    {
      id: '3',
      title: 'The Peacemakers',
      description: 'Art healed me and made me unlock opportunities. Starting this initiative has been of good influence on my life and dreams. I have a great motive to keep supporting young refugees using their talents to heal and be agents of change while advocating for sustainable development goals.',
      coverImage: '/images/peacemakers.jpeg',
      category: 'Art',
      tags: ['Art', 'Culture', 'Talent', 'Hope', 'SDGs', 'Creative Expression'],
      links: {
        email: 'thepeacemaker030@gmail.com',
        instagram: 'https://www.instagram.com/thepeacemakers07',
        tiktok: 'https://www.tiktok.com/@thepeacemakers07',
        facebook: 'https://www.facebook.com/share/1L2YnywnJd/?mibextid=wwXIfr',
        linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:7483543122099191808'
      },
      featured: true,
      year: 2023,
      impact: '200+ artists impacted',
    },
    {
      id: '4',
      title: 'Yangu Shop',
      description: 'Connecting clients and service providers through e-commerce. Making easy reliable purchase',
      coverImage: '/images/softwareEngineering.png',
      category: 'Technology',
      tags: ['Tech', 'E-commerce', 'Networking', 'Trade'],
      link: 'https://yangushopfrontend.vercel.app',
      github: 'https://github.com/Adelard-sketch/yanguShop',
      featured: true,
      year: 2026,
      impact: 'Looking For Investor',
    },
    {
      id: '5',
      title: 'The Peacemakers Creative Center',
      description: 'Building bridges between cultures through artistic collaborative projects and exchanges uniting young refugees for healing, empathy, and shared progress across different backgrounds.',
      coverImage: '/images/artCenterDream.png',
      category: 'Social Impact',
      tags: ['Art', 'Culture', 'Exchange', 'Collaboration', 'Diversity'],
      links: {
        email: 'thepeacemaker030@gmail.com',
        instagram: 'https://www.instagram.com/thepeacemakers07',
        tiktok: 'https://www.tiktok.com/@thepeacemakers07',
        facebook: 'https://www.facebook.com/share/1L2YnywnJd/?mibextid=wwXIfr',
        linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:7483543122099191808'
      },
      featured: true,
      year: 2030,
      impact: 'Looking for Donor / Investor',
    },
    {
      id: '6',
      title: 'Adventurous Travel Express',
      description: 'Easy booking for travel and tour packages',
      coverImage: '/images/adventoursTourismProject.png',
      category: 'Technology',
      tags: ['Tech', 'Travel', 'Tourism Agency', 'Flight Booking', 'Accommodation'],
      link: 'https://adventurous-travel-express-frontend.vercel.app',
      github: 'https://github.com/Adelard-sketch/Adventurous-Travel-Express',
      featured: true,
      year: 2026,
      impact: 'Looking For Investor or buyer',
    },
    {
      id: '7',
      title: 'The Torch Agricultural Project',
      description: 'Connecting farmers with clients, crops online buying and materials purchase',
      coverImage: '/images/theTorchAgricProject.png',
      category: 'Technology',
      tags: ['Tech', 'Agriculture', 'Business'],
      link: 'https://the-torch.vercel.app',
      github: 'https://github.com/Adelard-sketch/the_torch_backend',
      featured: false,
      year: 2025,
      impact: 'Farmers',
    },
    {
      id: '8',
      title: 'Congo Tech Education',
      description: 'Free online coding bootcamps and tech workshops breaking down barriers to new technologies education and creating pathways to tech careers.',
      coverImage: '/images/congoTech.png',
      category: 'Education',
      tags: ['Coding', 'Education', 'Access', 'Skills'],
      links: {
        instagram: 'https://www.instagram.com/congo.tech.ed?igsh=MWwzaDU3N2t5aTN6OA%3D%3D&utm_source=qr',
        facebook: 'https://www.facebook.com/share/1bS95TfVLD/?mibextid=wwXIfr'
      },
      featured: false,
      year: 2026,
      impact: 'Building',
    },
  ];

  const filteredProjects = projects;

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
            <span className="bg-[#e6550d] text-white px-6 py-2 rounded-lg font-semibold text-sm shadow-lg font-serif">
              {t('projectsWork')}
            </span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
            {t('buildingImpact')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-serif">
            {t('projectsDescription')}
          </p>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-6xl pb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden group"
              >
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                    <span className={`px-3 py-1 ${index % 2 === 0 ? 'bg-[#3182bd]' : 'bg-[#e6550d]'} text-white text-xs font-bold rounded-full shadow-lg font-serif`}>
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg font-serif">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Impact Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold rounded-full font-serif">
                      {project.impact}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-xl font-bold group-hover:text-[${index % 2 === 0 ? '#3182bd' : '#e6550d'}] transition-colors font-serif`} style={{color: 'rgb(17, 24, 39)'}}>
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-500 font-medium font-serif">{project.year}</span>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed text-justify font-serif">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full font-serif"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3 pt-2">
                    {/* Main Action Buttons */}
                    <div className="flex items-center gap-3 flex-wrap">
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[120px]">
                          <Button size="sm" className={`w-full ${index % 2 === 0 ? 'bg-[#3182bd] hover:bg-[#3182bd]/90' : 'bg-[#e6550d] hover:bg-[#e6550d]/90'} font-serif text-white`}>
                            <ExternalLink className="w-4 h-4 mr-2" />
                            {t('viewProject')}
                          </Button>
                        </a>
                      )}
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" variant="outline" className="font-serif hover:bg-gray-50 transition-all">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Button>
                        </a>
                      )}
                    </div>
                    
                    {/* Social Media Links */}
                    {project.links && (
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs text-gray-500 font-medium font-serif mr-1">Connect:</span>
                        {project.links.email && (
                          <a href={`mailto:${project.links.email}`} target="_blank" rel="noopener noreferrer">
                            <Button size="sm" variant="outline" className="p-2 hover:bg-red-50 border-red-200 hover:border-red-300 transition-all">
                              <Mail className="w-4 h-4 text-[#EA4335]" />
                            </Button>
                          </a>
                        )}
                        {project.links.instagram && (
                          <a href={project.links.instagram} target="_blank" rel="noopener noreferrer">
                            <Button size="sm" variant="outline" className="p-2 hover:bg-pink-50 border-pink-200 hover:border-pink-300 transition-all">
                              <Instagram className="w-4 h-4 text-[#E4405F]" />
                            </Button>
                          </a>
                        )}
                        {project.links.tiktok && (
                          <a href={project.links.tiktok} target="_blank" rel="noopener noreferrer">
                            <Button size="sm" variant="outline" className="p-2 hover:bg-pink-50 border-pink-200 hover:border-pink-300 transition-all">
                              <TikTokIcon className="w-4 h-4 text-[#FF0050]" />
                            </Button>
                          </a>
                        )}
                        {project.links.facebook && (
                          <a href={project.links.facebook} target="_blank" rel="noopener noreferrer">
                            <Button size="sm" variant="outline" className="p-2 hover:bg-blue-50 border-blue-200 hover:border-blue-300 transition-all">
                              <Facebook className="w-4 h-4 text-[#1877F2]" />
                            </Button>
                          </a>
                        )}
                        {project.links.linkedin && (
                          <a href={project.links.linkedin} target="_blank" rel="noopener noreferrer">
                            <Button size="sm" variant="outline" className="p-2 hover:bg-blue-50 border-blue-200 hover:border-blue-300 transition-all">
                              <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                            </Button>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-white">
                No projects found in this category.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
