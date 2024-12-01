import React from 'react';
import { GetStaticProps } from 'next';
import { Container } from '@/components/ui/Container';
import { FeaturedPost } from '@/components/ui/FeaturedPost';
import { PostGrid } from '@/components/ui/PostGrid';
import { getFeaturedPosts, getLatestPosts } from '@/lib/contentful';
import type { Post } from '@/types/post';

interface HomeProps {
  featuredPosts: Post[];
  latestPosts: Post[];
}

export default function Home({ featuredPosts, latestPosts }: HomeProps) {
  return (
    <Container>
      <section className="mb-16">
        <h1 className="sr-only">1wanderer - Philosophy, History & Personal Growth</h1>
        {featuredPosts[0] && <FeaturedPost post={featuredPosts[0]} />}
      </section>

      {featuredPosts.length > 1 && (
        <PostGrid
          title="Featured Articles"
          posts={featuredPosts.slice(1)}
        />
      )}

      <PostGrid
        title="Latest Articles"
        posts={latestPosts}
      />
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const [featuredPosts, latestPosts] = await Promise.all([
      getFeaturedPosts(),
      getLatestPosts(),
    ]);

    return {
      props: {
        featuredPosts,
        latestPosts,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return {
      props: {
        featuredPosts: [],
        latestPosts: [],
      },
      revalidate: 60,
    };
  }
};