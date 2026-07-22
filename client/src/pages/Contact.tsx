import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Linkedin, Facebook, Instagram, Github, Phone, Clock, ExternalLink } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';
import { SOCIAL_LINKS } from '@/utils/constants';
import PageNavbar from '@/components/layout/PageNavbar';
import { useLanguage } from '@/contexts/LanguageContext';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { t } = useLanguage();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  // Initialize EmailJS and test connection
  React.useEffect(() => {
    emailjs.init('1gbFEtUs3I5G6yDOd');
    console.log('EmailJS initialized successfully');
    
    // Test EmailJS availability
    if (typeof emailjs.send === 'function') {
      console.log('EmailJS is available and ready');
    } else {
      console.error('EmailJS is not properly loaded');
    }
  }, []);

  const showNotification = (message: string, type: 'success' | 'error' = 'success') => {
    // Set custom title for notifications
    const originalTitle = document.title;
    document.title = "Adelard's Management";
    
    // Create custom notification
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-md ${
      type === 'success' 
        ? 'bg-green-500 text-white' 
        : 'bg-red-500 text-white'
    }`;
    notification.innerHTML = `
      <div class="flex items-center space-x-2">
        <div class="font-semibold">Adelard's Management</div>
        <button onclick="this.parentElement.parentElement.remove()" class="ml-auto text-white hover:text-gray-200">✕</button>
      </div>
      <div class="mt-1">${message}</div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
      document.title = originalTitle;
    }, 5000);
  };

  const onSubmit = async (data: ContactFormData) => {
    try {
      console.log('Starting email send process...');
      
      const templateParams = {
        to_name: 'Adelard',
        to_email: 'adelborauzima@gmail.com',
        from_name: data.name,
        from_email: data.email,
        reply_to: data.email,
        subject: data.subject,
        message: data.message
      };
      
      console.log('Template params:', templateParams);
      
      const result = await emailjs.send(
        'service_cba6cfx',
        'template_ksa9nvf', 
        templateParams,
        '1gbFEtUs3I5G6yDOd'
      );
      
      console.log('SUCCESS:', result);
      showNotification('Thank you for your message! I will get back to you within 24 hours.', 'success');
      reset();
    } catch (error: any) {
      console.error('FULL ERROR OBJECT:', error);
      console.error('ERROR MESSAGE:', error?.message);
      console.error('ERROR TEXT:', error?.text);
      console.error('ERROR STATUS:', error?.status);
      showNotification(`Error: ${error?.text || error?.message || 'Unknown error'}. Please try again or email me directly.`, 'error');
    }
  };

  const socialIcons = [
    { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn', color: 'hover:text-[#0A66C2] hover:bg-[#0A66C2]/10' },
    { icon: Facebook, href: SOCIAL_LINKS.facebook, label: 'Facebook', color: 'hover:text-[#1877F2] hover:bg-[#1877F2]/10' },
    { icon: Instagram, href: SOCIAL_LINKS.instagram, label: 'Instagram', color: 'hover:text-[#E4405F] hover:bg-[#E4405F]/10' },
    { icon: Github, href: SOCIAL_LINKS.github, label: 'GitHub', color: 'hover:text-[#181717] hover:bg-gray-100' },
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
      </div>
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12 space-y-6">
        
        {/* Header Card with Navbar only */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-6xl bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden"
        >
          <PageNavbar />
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
              className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 space-y-8 border border-gray-100"
            >
              <div>
                <h2 className="text-2xl font-bold text-[#3182bd] mb-6">{t('getInTouch')}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {t('contactDescription')}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="p-3 bg-gradient-to-br from-[#3182bd] to-[#7fcdbb] rounded-xl shadow-lg group-hover:shadow-xl transition-all">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t('email_label')}</h3>
                    <div className="space-y-1">
                      <a
                        href="mailto:adelborauzima@gmail.com"
                        className="text-gray-600 hover:text-[#3182bd] transition-colors flex items-center space-x-1"
                      >
                        <span>adelborauzima@gmail.com</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a
                        href="mailto:borauzima.adelard@ashesi.edu.gh"
                        className="text-gray-500 hover:text-[#3182bd] transition-colors flex items-center space-x-1 text-sm"
                      >
                        <span>borauzima.adelard@ashesi.edu.gh</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="p-3 bg-gradient-to-br from-[#e34a33] to-[#edf8b1] rounded-xl shadow-lg group-hover:shadow-xl transition-all">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t('location')}</h3>
                    <p className="text-gray-600">{t('locationDesc')}</p>
                    <p className="text-sm text-gray-500">{t('locationNote')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="p-3 bg-gradient-to-br from-[#7fcdbb] to-[#3182bd] rounded-xl shadow-lg group-hover:shadow-xl transition-all">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t('responseTime')}</h3>
                    <p className="text-gray-600">{t('responseTimeDesc')}</p>
                    <p className="text-sm text-gray-500">{t('responseTimeNote')}</p>
                  </div>
                </div>
              </div>

              {/* Services Section */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-semibold text-gray-900 mb-4">{t('howICanHelp')}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'AI Training & Coaching',
                    'Software Development',
                    'Social Innovation',
                    'Creative Projects',
                    'Leadership Consulting',
                    'Speaking Engagements'
                  ].map((service) => (
                    <div key={service} className="flex items-center space-x-2 text-sm">
                      <div className="w-2 h-2 bg-gradient-to-r from-[#3182bd] to-[#e34a33] rounded-full"></div>
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-semibold text-gray-900 mb-4">{t('connectOnSocial')}</h3>
                <div className="flex space-x-3">
                  {socialIcons.map(({ icon: Icon, href, label, color }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 rounded-xl bg-gray-50 text-gray-600 transition-all border border-gray-200 ${color}`}
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
              className="backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100"
              style={{ backgroundColor: '#deebf7' }}
            >
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-[#e34a33] mb-2">{t('sendMessage')}</h2>
                <p className="text-gray-600">
                  {t('contactDescription')}
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <style>
                  {`
                    .contact-form label {
                      color: #000000 !important;
                      font-weight: bold !important;
                      font-size: 14px !important;
                      text-shadow: 1px 1px 2px rgba(255,255,255,0.8) !important;
                    }
                  `}
                </style>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="contact-form">
                    <Input
                      label={t('name_label') + ' *'}
                      placeholder="Your full name"
                      error={errors.name?.message}
                      className="border-gray-300 focus:border-[#3182bd] focus:ring-[#3182bd]/20 bg-white text-black placeholder-gray-400"
                      {...register('name')}
                    />
                  </div>

                  <div className="contact-form">
                    <Input
                      label={t('email_label') + ' *'}
                      type="email"
                      placeholder="your@email.com"
                      error={errors.email?.message}
                      className="border-gray-300 focus:border-[#3182bd] focus:ring-[#3182bd]/20 bg-white text-black placeholder-gray-400"
                      {...register('email')}
                    />
                  </div>
                </div>

                <div className="contact-form">
                  <Input
                    label={t('subject_label') + ' *'}
                    placeholder="What would you like to discuss?"
                    error={errors.subject?.message}
                    className="border-gray-300 focus:border-[#3182bd] focus:ring-[#3182bd]/20 bg-white text-black placeholder-gray-400"
                    {...register('subject')}
                  />
                </div>

                <div className="contact-form">
                  <Textarea
                    label={t('message_label') + ' *'}
                    placeholder="Tell me about your project, ideas, or how I can help you..."
                    rows={6}
                    error={errors.message?.message}
                    className="border-gray-300 focus:border-[#3182bd] focus:ring-[#3182bd]/20 bg-white text-black placeholder-gray-400"
                    {...register('message')}
                  />
                </div>
                <div className="space-y-4">
                  <Button
                    type="submit"
                    size="lg"
                    className={`w-full font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] ${
                      isSubmitting 
                        ? 'bg-white border-2 border-[#e34a33]' 
                        : 'bg-[#3182bd] hover:bg-[#3182bd]/90 text-white'
                    }`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-[#e34a33] border-t-transparent rounded-full animate-spin mr-2"></div>
                        <span className="text-[#e34a33]">Sending Message...</span>
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        {t('sendMessage')}
                        <Send className="ml-2 w-5 h-5" />
                      </span>
                    )}
                  </Button>
                  
                  <p className="text-sm text-gray-500 text-center">
                    By sending this message, you agree to be contacted regarding your inquiry.
                  </p>
                </div>
              </form>

              {/* Additional Info */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Usually responds within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>GMT +0</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        {/* Professional Footer Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full max-w-6xl bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#3182bd] to-[#7fcdbb] rounded-xl mb-3">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">{t('quickResponse')}</h3>
              <p className="text-sm text-gray-600">{t('quickResponseDesc')}</p>
            </div>
            
            <div className="space-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#e34a33] to-[#edf8b1] rounded-xl mb-3">
                <ExternalLink className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">{t('globalCollaboration')}</h3>
              <p className="text-sm text-gray-600">{t('globalCollaborationDesc')}</p>
            </div>
            
            <div className="space-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#7fcdbb] to-[#3182bd] rounded-xl mb-3">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">{t('professionalSupport')}</h3>
              <p className="text-sm text-gray-600">{t('professionalSupportDesc')}</p>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-gray-600 text-sm">
              {t('readyToCollaborate')}
            </p>
            <div className="mt-4 flex justify-center space-x-4">
              <a
                href="mailto:adelborauzima@gmail.com"
                className="inline-flex items-center px-4 py-2 bg-[#3182bd] hover:bg-[#3182bd]/90 text-white rounded-lg hover:shadow-lg transition-all text-sm font-medium"
              >
                <Mail className="w-4 h-4 mr-2" />
                {t('directEmail')}
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all text-sm font-medium"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;