import { motion } from 'framer-motion';
import { PostCard } from '@/components/ui/PostCard';
import type { Post } from '@/types/post';

interface PostGridProps {
  posts: Post[];
  title: string;
}

export function PostGrid({ posts, title }: PostGridProps) {
  return (
    <section className="py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-serif font-bold mb-8"
      >
        {title}
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <PostCard post={post} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}