import { motion } from 'framer-motion';
import { Calendar, MapPin, Users } from 'lucide-react';
import PageNavbar from '@/components/layout/PageNavbar';

const Speaking = () => {
  const events = [
    {
      id: 1,
      title: 'AI for Social Good Summit',
      date: '2024-03-15',
      location: 'Accra, Ghana',
      attendees: 500,
      description: 'Keynote on leveraging AI for social entrepreneurship in Africa',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop',
    },
    {
      id: 2,
      title: 'Youth Leadership Conference',
      date: '2024-02-20',
      location: 'Nairobi, Kenya',
      attendees: 300,
      description: 'Workshop on building sustainable youth-led organizations',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=400&fit=crop',
    },
    {
      id: 3,
      title: 'Tech Innovation Forum',
      date: '2024-01-10',
      location: 'Lagos, Nigeria',
      attendees: 800,
      description: 'Panel discussion on the future of technology in Africa',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=400&fit=crop',
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
              SPEAKING & EVENTS
            </span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sharing <span className="text-[#3182bd]">Insights</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Speaking on entrepreneurship, technology, and social impact across the globe
          </p>
          </div>
        </motion.div>

        {/* Events List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-6xl space-y-4 pb-12"
        >
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                {/* Image */}
                <div className="relative h-48 md:h-auto overflow-hidden">
                  <img 
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#3182bd]/20" />
                </div>

                {/* Content */}
                <div className="md:col-span-2 p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-[#3182bd]" />
                      {new Date(event.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-[#3182bd]" />
                      {event.location}
                    </span>
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-[#3182bd]" />
                      {event.attendees}+ attendees
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full max-w-6xl bg-[#3182bd] rounded-2xl shadow-2xl p-8 md:p-12 text-center text-white mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interested in having me speak at your event?
          </h2>
          <p className="text-lg mb-6 opacity-90">
            I'm available for keynotes, workshops, and panel discussions on entrepreneurship, 
            AI, social impact, and youth leadership.
          </p>
          <a href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-[#3182bd] rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              Get in Touch
            </motion.button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Speaking;
