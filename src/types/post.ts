export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: {
    url: string;
    alt: string;
  };
  category: {
    name: string;
    slug: string;
  };
  author: {
    name: string;
    image: string;
    bio: string;
  };
  publishedAt: string;
  readingTime: number;
  tags: string[];
}