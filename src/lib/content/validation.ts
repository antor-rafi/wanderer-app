import { z } from 'zod';
import type { ContentMeta, ContentBody, ContentAsset, ContentAuthor } from '@/types/content';

export const contentMetaSchema = z.object({
  title: z.string().min(1).max(100),
  subtitle: z.string().max(200).optional(),
  description: z.string().min(1).max(500),
  tags: z.array(z.string()).min(1).max(10),
  category: z.object({
    id: z.string(),
    name: z.string(),
    slug: z.string(),
  }),
  seo: z.object({
    title: z.string().min(1).max(60),
    description: z.string().min(1).max(160),
    keywords: z.array(z.string()).min(1).max(10),
  }),
});

export const contentBodySchema = z.object({
  markdown: z.string().min(1),
  excerpt: z.string().min(1).max(300),
  readingTime: z.number().min(1),
});

export const contentAssetSchema = z.object({
  url: z.string().url(),
  alt: z.string().min(1),
  caption: z.string().optional(),
  width: z.number().min(1),
  height: z.number().min(1),
});

export const contentAuthorSchema = z.object({
  id: z.string(),
  name: z.string(),
  bio: z.string(),
  image: contentAssetSchema,
});

export function validateContentMeta(meta: ContentMeta) {
  return contentMetaSchema.parse(meta);
}

export function validateContentBody(body: ContentBody) {
  return contentBodySchema.parse(body);
}

export function validateContentAsset(asset: ContentAsset) {
  return contentAssetSchema.parse(asset);
}

export function validateContentAuthor(author: ContentAuthor) {
  return contentAuthorSchema.parse(author);
}