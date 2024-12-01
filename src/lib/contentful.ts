import { createClient } from 'contentful';

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function getFeaturedPosts() {
  const response = await contentfulClient.getEntries({
    content_type: 'blogPost',
    'fields.featured': true,
    limit: 3,
    order: '-fields.publishedAt',
  });

  return parsePostEntries(response.items);
}

export async function getLatestPosts() {
  const response = await contentfulClient.getEntries({
    content_type: 'blogPost',
    limit: 6,
    order: '-fields.publishedAt',
  });

  return parsePostEntries(response.items);
}

export async function getPostsByCategory(category: string) {
  const response = await contentfulClient.getEntries({
    content_type: 'blogPost',
    'fields.category.fields.slug': category,
    limit: 9,
    order: '-fields.publishedAt',
  });

  return parsePostEntries(response.items);
}

function parsePostEntries(entries: any[]) {
  return entries.map((entry) => ({
    id: entry.sys.id,
    title: entry.fields.title,
    slug: entry.fields.slug,
    excerpt: entry.fields.excerpt,
    content: entry.fields.content,
    coverImage: {
      url: entry.fields.coverImage.fields.file.url,
      alt: entry.fields.coverImage.fields.description,
    },
    category: {
      name: entry.fields.category.fields.name,
      slug: entry.fields.category.fields.slug,
    },
    author: {
      name: entry.fields.author.fields.name,
      image: entry.fields.author.fields.image.fields.file.url,
      bio: entry.fields.author.fields.bio,
    },
    publishedAt: entry.fields.publishedAt,
    readingTime: entry.fields.readingTime,
    tags: entry.fields.tags,
  }));
}