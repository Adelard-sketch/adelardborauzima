import { Routes, Route } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import AdminLayout from '@/layouts/AdminLayout';

// Pages
import Home from '@/pages/Home';
import About from '@/pages/About';
import Projects from '@/pages/Projects';
import Gallery from '@/pages/Gallery';
import Contact from '@/pages/Contact';
import Admin from '@/pages/Admin';
import NotFound from '@/pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* Admin Routes */}
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/*" element={<AdminLayout />}>
        <Route path="dashboard" element={<div>Dashboard</div>} />
        <Route path="projects" element={<div>Projects Management</div>} />
        <Route path="gallery" element={<div>Gallery Management</div>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
