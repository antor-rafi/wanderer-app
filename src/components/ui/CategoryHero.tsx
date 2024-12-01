import { motion } from 'framer-motion';

interface CategoryHeroProps {
  title: string;
  description: string;
}

export function CategoryHero({ title, description }: CategoryHeroProps) {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
      >
        <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-6">{title}</h1>
        <p className="text-xl text-gray-100 max-w-3xl">{description}</p>
      </motion.div>
    </div>
  );
}