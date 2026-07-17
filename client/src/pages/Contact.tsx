import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Linkedin, Facebook, Instagram, Github } from 'lucide-react';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';
import { SOCIAL_LINKS } from '@/utils/constants';
import PageNavbar from '@/components/layout/PageNavbar';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert('Message sent successfully!');
    reset();
  };

  const socialIcons = [
    { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Facebook, href: SOCIAL_LINKS.facebook, label: 'Facebook', color: 'hover:text-blue-600' },
    { icon: Instagram, href: SOCIAL_LINKS.instagram, label: 'Instagram', color: 'hover:text-[#3182bd]' },
    { icon: Github, href: SOCIAL_LINKS.github, label: 'GitHub', color: 'hover:text-gray-900' },
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
              CONTACT
            </span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's <span className="text-[#3182bd]">Connect</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Want to collaborate? Or just want to say hello? I'd love to hear from you.
          </p>
          </div>
        </motion.div>

        {/* Contact Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-6xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-12">
            
            {/* Contact Info Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Whether you're looking for collaboration, coaching, speaking engagements, 
                  or just want to connect, feel free to reach out. I typically respond within 24-48 hours.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-brand-tertiary to-brand-quaternary rounded-lg">
                    <Mail className="w-6 h-6 text-[#3182bd]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a
                      href={`mailto:${SOCIAL_LINKS.email}`}
                      className="text-gray-600 hover:text-[#3182bd] transition-colors"
                    >
                      {SOCIAL_LINKS.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-brand-tertiary to-brand-quaternary rounded-lg">
                    <MapPin className="w-6 h-6 text-[#3182bd]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">Accra, Ghana</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Connect on Social Media</h3>
                <div className="flex space-x-3">
                  {socialIcons.map(({ icon: Icon, href, label, color }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 rounded-xl bg-gray-100 text-gray-600 transition-colors ${color}`}
                      aria-label={label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <Input
                  label="Name"
                  placeholder="Your name"
                  error={errors.name?.message}
                  {...register('name')}
                />

                <Input
                  label="Email"
                  type="email"
                  placeholder="your@email.com"
                  error={errors.email?.message}
                  {...register('email')}
                />

                <Input
                  label="Subject"
                  placeholder="What's this about?"
                  error={errors.subject?.message}
                  {...register('subject')}
                />

                <Textarea
                  label="Message"
                  placeholder="Tell me more..."
                  rows={6}
                  error={errors.message?.message}
                  {...register('message')}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#3182bd] hover:bg-[#3182bd]/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
