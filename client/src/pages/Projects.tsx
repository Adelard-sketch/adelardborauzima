import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';
import Button from '@/components/ui/Button';
import PageNavbar from '@/components/layout/PageNavbar';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Social Impact', 'Technology', 'Art', 'Education'];

  const projects = [
    {
      id: '1',
      title: 'Reliance Soul International Youth Foundation',
      description: 'Leading organization empowering thousands of young people across Africa through education, mentorship, and entrepreneurship programs. Creating sustainable impact in 15+ countries.',
      coverImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      category: 'Social Impact',
      tags: ['Youth Empowerment', 'Education', 'Entrepreneurship', 'Leadership'],
      link: 'https://reliancesoul.org',
      featured: true,
      year: 2023,
      impact: '10,000+ youth impacted',
    },
    {
      id: '2',
      title: 'AI for Africa Initiative',
      description: 'Democratizing artificial intelligence education across Africa. Building accessible AI learning resources and tools specifically designed for African contexts and challenges.',
      coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      category: 'Technology',
      tags: ['AI', 'Education', 'Innovation', 'Accessibility'],
      github: 'https://github.com/adelard/ai-africa',
      featured: true,
      year: 2024,
      impact: '5,000+ students trained',
    },
    {
      id: '3',
      title: 'Creative Arts Collective',
      description: 'Digital platform celebrating and promoting African contemporary artists globally. Showcasing diverse artistic expressions and connecting artists with opportunities worldwide.',
      coverImage: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=600&fit=crop',
      category: 'Art',
      tags: ['Art', 'Culture', 'Digital Gallery', 'Community'],
      link: 'https://creativearts.africa',
      featured: false,
      year: 2023,
      impact: '200+ artists featured',
    },
    {
      id: '4',
      title: 'Youth Leadership Platform',
      description: 'Connecting young leaders across continents through virtual and in-person programs. Fostering collaboration, knowledge sharing, and collective action for global challenges.',
      coverImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      category: 'Social Impact',
      tags: ['Leadership', 'Community', 'Networking', 'Global'],
      link: 'https://youthleaders.org',
      featured: false,
      year: 2024,
      impact: '3,000+ leaders connected',
    },
    {
      id: '5',
      title: 'Tech Education Hub',
      description: 'Free coding bootcamps and tech workshops for underserved communities. Breaking down barriers to technology education and creating pathways to tech careers.',
      coverImage: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop',
      category: 'Education',
      tags: ['Coding', 'Education', 'Access', 'Skills'],
      github: 'https://github.com/adelard/tech-hub',
      featured: false,
      year: 2023,
      impact: '1,500+ graduates',
    },
    {
      id: '6',
      title: 'Intercultural Exchange Program',
      description: 'Building bridges between cultures through collaborative projects and exchanges. Fostering understanding, empathy, and shared progress across different backgrounds.',
      coverImage: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop',
      category: 'Social Impact',
      tags: ['Culture', 'Exchange', 'Collaboration', 'Diversity'],
      link: 'https://intercultural.org',
      featured: false,
      year: 2024,
      impact: '50+ countries involved',
    },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

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
              PROJECTS & WORK
            </span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Building <span className="text-[#3182bd]">Impact</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of projects that blend technology, creativity, and social impact to create meaningful change
          </p>
          </div>
        </motion.div>

        {/* Filter Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-6xl bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6"
        >
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Filter className="w-5 h-5 text-gray-600" />
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-[#3182bd] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-6xl pb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
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
                    <span className="px-3 py-1 bg-[#3182bd] text-white text-xs font-bold rounded-full shadow-lg">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Impact Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold rounded-full">
                      {project.impact}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#3182bd] transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-500 font-medium">{project.year}</span>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pt-2">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button size="sm" className="w-full bg-gradient-to-r from-brand-secondary to-brand-quaternary hover:from-brand-secondary/90 hover:to-brand-quaternary/90">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Visit Project
                        </Button>
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="outline">
                          <Github className="w-4 h-4" />
                        </Button>
                      </a>
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
