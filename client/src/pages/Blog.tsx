import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Filter } from 'lucide-react';
import { formatDate } from '@/utils/formatDate';
import PageNavbar from '@/components/layout/PageNavbar';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Technology', 'Entrepreneurship', 'Travel', 'Art', 'AI'];

  const posts = [
    {
      id: '1',
      title: 'The Future of AI in African Innovation',
      slug: 'future-ai-african-innovation',
      excerpt: 'Exploring how artificial intelligence is transforming the African tech landscape and creating new opportunities for innovation and growth across the continent.',
      content: '',
      coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      author: 'Adelard Borauzima',
      publishedAt: '2024-03-15',
      readTime: 8,
      tags: ['AI', 'Innovation', 'Africa', 'Technology'],
      category: 'AI',
      featured: true,
    },
    {
      id: '2',
      title: 'Building Youth-Led Organizations That Last',
      slug: 'building-youth-led-organizations',
      excerpt: 'Lessons learned from founding and scaling Reliance Soul International Youth Foundation. Key insights on sustainability, leadership, and impact measurement.',
      content: '',
      coverImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      author: 'Adelard Borauzima',
      publishedAt: '2024-03-10',
      readTime: 10,
      tags: ['Leadership', 'Youth', 'Social Impact', 'Entrepreneurship'],
      category: 'Entrepreneurship',
      featured: true,
    },
    {
      id: '3',
      title: 'Intercultural Collaboration in a Digital Age',
      slug: 'intercultural-collaboration-digital-age',
      excerpt: 'How technology is breaking down barriers and enabling meaningful connections across cultures. Stories from my journey building bridges between communities.',
      content: '',
      coverImage: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop',
      author: 'Adelard Borauzima',
      publishedAt: '2024-03-05',
      readTime: 6,
      tags: ['Culture', 'Collaboration', 'Global', 'Technology'],
      category: 'Technology',
      featured: false,
    },
    {
      id: '4',
      title: 'Adventures in Ghana: Finding Inspiration at Home',
      slug: 'adventures-ghana-finding-inspiration',
      excerpt: 'Discovering the beauty, culture, and innovation happening right in my backyard. Why local exploration matters for global perspective.',
      content: '',
      coverImage: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800&h=600&fit=crop',
      author: 'Adelard Borauzima',
      publishedAt: '2024-02-28',
      readTime: 7,
      tags: ['Travel', 'Ghana', 'Culture', 'Inspiration'],
      category: 'Travel',
      featured: false,
    },
    {
      id: '5',
      title: 'Art as a Tool for Social Change',
      slug: 'art-tool-social-change',
      excerpt: 'How creative expression amplifies voices, tells untold stories, and drives movements. Reflections on the intersection of art and activism.',
      content: '',
      coverImage: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=600&fit=crop',
      author: 'Adelard Borauzima',
      publishedAt: '2024-02-20',
      readTime: 5,
      tags: ['Art', 'Activism', 'Social Change', 'Creativity'],
      category: 'Art',
      featured: false,
    },
    {
      id: '6',
      title: 'From Student to Entrepreneur: My Journey',
      slug: 'student-to-entrepreneur-journey',
      excerpt: 'Balancing computer science studies at Ashesi University with building a social enterprise. Lessons on time management, priorities, and purpose.',
      content: '',
      coverImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop',
      author: 'Adelard Borauzima',
      publishedAt: '2024-02-15',
      readTime: 9,
      tags: ['Entrepreneurship', 'Education', 'Journey', 'Student Life'],
      category: 'Entrepreneurship',
      featured: false,
    },
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(p => p.category === selectedCategory);

  const featuredPosts = posts.filter(p => p.featured);
  const regularPosts = filteredPosts.filter(p => !p.featured);

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
              BLOG & INSIGHTS
            </span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Thoughts & <span className="text-[#3182bd]">Stories</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Reflections on technology, entrepreneurship, art, and adventures around the world
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

        {/* Featured Posts */}
        {selectedCategory === 'all' && featuredPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-6xl"
          >
            <h2 className="text-2xl font-bold text-white mb-4 px-2">Featured Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredPosts.map((post, index) => (
                <Link key={post.id} to={`/blog/${post.slug}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden group cursor-pointer"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
                          Featured
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="inline-block px-3 py-1 bg-[#3182bd] text-white text-xs font-bold rounded-full mb-2">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#3182bd] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-200">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {formatDate(post.publishedAt)}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {post.readTime} min
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}

        {/* Regular Posts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-6xl pb-12"
        >
          {selectedCategory === 'all' && <h2 className="text-2xl font-bold text-white mb-4 px-2">All Posts</h2>}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {regularPosts.map((post, index) => (
              <Link key={post.id} to={`/blog/${post.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden group cursor-pointer h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <span className="px-3 py-1 bg-brand-secondary text-white text-xs font-bold rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-secondary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-200">
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime} min
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-white">
                No posts found in this category.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
