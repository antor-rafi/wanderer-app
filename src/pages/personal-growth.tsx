import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { Container } from '@/components/ui/Container';
import { CategoryHero } from '@/components/ui/CategoryHero';
import { PostGrid } from '@/components/ui/PostGrid';
import { getPostsByCategory } from '@/lib/contentful';
import type { Post } from '@/types/post';

interface PersonalGrowthProps {
  posts: Post[];
}

export default function PersonalGrowth({ posts }: PersonalGrowthProps) {
  return (
    <>
      <NextSeo
        title="Personal Growth"
        description="Discover practical insights and strategies for personal development and self-improvement."
      />
      <CategoryHero
        title="Personal Growth"
        description="Transform your life with practical insights and proven strategies for personal development, backed by philosophical wisdom and historical examples."
      />
      <Container className="py-12">
        <PostGrid title="Latest in Personal Growth" posts={posts} />
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const posts = await getPostsByCategory('personal-growth');
    return {
      props: { posts },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error fetching personal growth posts:', error);
    return {
      props: { posts: [] },
      revalidate: 60,
    };
  }
};