import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import type { Post } from '@/types/post';

interface FeaturedPostProps {
  post: Post;
}

export function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-purple-500 to-indigo-600 text-white"
    >
      <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-[3/1]">
        <Image
          src={post.coverImage.url}
          alt={post.coverImage.alt}
          fill
          className="object-cover mix-blend-overlay opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 lg:p-12">
        <div className="max-w-2xl">
          <div className="flex items-center gap-x-4 text-sm">
            <time dateTime={post.publishedAt} className="text-gray-200">
              {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
            </time>
            <span className="text-gray-200">{post.readingTime} min read</span>
          </div>
          <h3 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold">
            <Link href={`/posts/${post.slug}`} className="hover:underline">
              {post.title}
            </Link>
          </h3>
          <p className="mt-4 text-gray-200 text-sm sm:text-base lg:text-lg">
            {post.excerpt}
          </p>
          <div className="mt-6 flex items-center gap-x-4">
            <Image
              src={post.author.image}
              alt={post.author.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="text-sm leading-6">
              <p className="font-semibold">{post.author.name}</p>
              <p className="text-gray-200">{post.category.name}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}