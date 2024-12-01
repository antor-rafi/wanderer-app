import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { Container } from '@/components/ui/Container';
import { CategoryHero } from '@/components/ui/CategoryHero';
import { PostGrid } from '@/components/ui/PostGrid';
import { getPostsByCategory } from '@/lib/contentful';
import type { Post } from '@/types/post';

interface HistoryProps {
  posts: Post[];
}

export default function History({ posts }: HistoryProps) {
  return (
    <>
      <NextSeo
        title="History"
        description="Learn from the past with insightful historical analysis and its relevance to contemporary life."
      />
      <CategoryHero
        title="History"
        description="Discover how the lessons of history can illuminate our present and guide our future, with fascinating stories and insights from the past."
      />
      <Container className="py-12">
        <PostGrid title="Latest in History" posts={posts} />
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const posts = await getPostsByCategory('history');
    return {
      props: { posts },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error fetching history posts:', error);
    return {
      props: { posts: [] },
      revalidate: 60,
    };
  }
};