import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from '@/components/layout/Footer';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="flex-1"
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  );
};

export default MainLayout;
