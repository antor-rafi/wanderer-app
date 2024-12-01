import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import type { Post } from '@/types/post';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transform transition-transform hover:scale-[1.02]">
      <div className="relative h-48">
        <Image
          src={post.coverImage.url}
          alt={post.coverImage.alt}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      
      <div className="p-6">
        <Link 
          href={`/posts/${post.slug}`}
          className="inline-block mb-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500"
        >
          {post.category.name}
        </Link>
        
        <h2 className="text-xl font-bold mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          <Link href={`/posts/${post.slug}`}>
            {post.title}
          </Link>
        </h2>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-2">
            <Image
              src={post.author.image}
              alt={post.author.name}
              width={24}
              height={24}
              className="rounded-full"
            />
            <span>{post.author.name}</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <time dateTime={post.publishedAt}>
              {format(new Date(post.publishedAt), 'MMM d, yyyy')}
            </time>
            <span>{post.readingTime} min read</span>
          </div>
        </div>
      </div>
    </article>
  );
}