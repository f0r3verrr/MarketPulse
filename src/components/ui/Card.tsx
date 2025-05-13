import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  gradient?: 'primary' | 'secondary' | 'accent' | 'none';
}

const Card = ({ children, className = '', gradient = 'none' }: CardProps) => {
  let gradientClass = '';
  
  switch (gradient) {
    case 'primary':
      gradientClass = 'bg-card-gradient-1';
      break;
    case 'secondary':
      gradientClass = 'bg-card-gradient-2';
      break;
    case 'accent':
      gradientClass = 'bg-card-gradient-3';
      break;
    default:
      gradientClass = 'bg-dark-800/80 backdrop-blur-sm';
  }

  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`rounded-xl shadow-lg overflow-hidden ${gradientClass} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;