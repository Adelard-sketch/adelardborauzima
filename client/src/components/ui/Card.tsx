import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = true, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hover ? { y: -8 } : undefined}
        className={cn(
          'bg-card rounded-xl border border-border p-6 transition-all duration-300',
          hover && 'hover:shadow-xl',
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
