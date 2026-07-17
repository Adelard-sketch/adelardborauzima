import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Container className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <h1 className="text-9xl font-display font-bold gradient-text">404</h1>
          <h2 className="text-3xl font-bold">Page Not Found</h2>
          <p className="text-xl text-muted-foreground max-w-md mx-auto">
            Looks like you've ventured into uncharted territory. Let's get you back on track.
          </p>
          <Link to="/">
            <Button size="lg">
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Button>
          </Link>
        </motion.div>
      </Container>
    </div>
  );
};

export default NotFound;
