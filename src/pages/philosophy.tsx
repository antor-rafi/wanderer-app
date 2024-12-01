import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { Container } from '@/components/ui/Container';
import { CategoryHero } from '@/components/ui/CategoryHero';
import { PostGrid } from '@/components/ui/PostGrid';
import { getPostsByCategory } from '@/lib/contentful';
import type { Post } from '@/types/post';

interface PhilosophyProps {
  posts: Post[];
}

export default function Philosophy({ posts }: PhilosophyProps) {
  return (
    <>
      <NextSeo
        title="Philosophy"
        description="Explore timeless philosophical wisdom and its practical applications in modern life."
      />
      <CategoryHero
        title="Philosophy"
        description="Explore timeless wisdom from great thinkers and learn how to apply philosophical principles to modern life challenges."
      />
      <Container className="py-12">
        <PostGrid title="Latest in Philosophy" posts={posts} />
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const posts = await getPostsByCategory('philosophy');
    return {
      props: { posts },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error fetching philosophy posts:', error);
    return {
      props: { posts: [] },
      revalidate: 60,
    };
  }
};