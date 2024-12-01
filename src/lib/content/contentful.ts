import { contentfulClient } from '../contentful';
import type { ContentDraft, ContentPreview } from '@/types/content';
import { validateContentMeta, validateContentBody, validateContentAsset, validateContentAuthor } from './validation';

export async function createDraft(draft: Omit<ContentDraft, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
  const validatedMeta = validateContentMeta(draft.meta);
  const validatedBody = validateContentBody(draft.body);
  const validatedCoverImage = validateContentAsset(draft.coverImage);
  const validatedAuthor = validateContentAuthor(draft.author);

  const entry = await contentfulClient.createEntry('blogPost', {
    fields: {
      title: { 'en-US': validatedMeta.title },
      subtitle: { 'en-US': validatedMeta.subtitle },
      description: { 'en-US': validatedMeta.description },
      tags: { 'en-US': validatedMeta.tags },
      category: { 'en-US': validatedMeta.category },
      seo: { 'en-US': validatedMeta.seo },
      content: { 'en-US': validatedBody.markdown },
      excerpt: { 'en-US': validatedBody.excerpt },
      readingTime: { 'en-US': validatedBody.readingTime },
      coverImage: { 'en-US': validatedCoverImage },
      author: { 'en-US': validatedAuthor },
      status: { 'en-US': draft.status },
      scheduledAt: draft.scheduledAt ? { 'en-US': draft.scheduledAt } : undefined,
    },
  });

  return entry.sys.id;
}

export async function updateDraft(id: string, draft: Partial<ContentDraft>): Promise<void> {
  const entry = await contentfulClient.getEntry(id);

  if (draft.meta) {
    const validatedMeta = validateContentMeta(draft.meta);
    entry.fields = {
      ...entry.fields,
      title: { 'en-US': validatedMeta.title },
      subtitle: { 'en-US': validatedMeta.subtitle },
      description: { 'en-US': validatedMeta.description },
      tags: { 'en-US': validatedMeta.tags },
      category: { 'en-US': validatedMeta.category },
      seo: { 'en-US': validatedMeta.seo },
    };
  }

  if (draft.body) {
    const validatedBody = validateContentBody(draft.body);
    entry.fields = {
      ...entry.fields,
      content: { 'en-US': validatedBody.markdown },
      excerpt: { 'en-US': validatedBody.excerpt },
      readingTime: { 'en-US': validatedBody.readingTime },
    };
  }

  if (draft.coverImage) {
    const validatedCoverImage = validateContentAsset(draft.coverImage);
    entry.fields.coverImage = { 'en-US': validatedCoverImage };
  }

  if (draft.status) {
    entry.fields.status = { 'en-US': draft.status };
  }

  if (draft.scheduledAt !== undefined) {
    entry.fields.scheduledAt = draft.scheduledAt
      ? { 'en-US': draft.scheduledAt }
      : undefined;
  }

  await entry.update();
}

export async function publishDraft(id: string): Promise<void> {
  const entry = await contentfulClient.getEntry(id);
  await entry.publish();
}

export async function getDraft(id: string): Promise<ContentDraft> {
  const entry = await contentfulClient.getEntry(id);
  return parseDraftEntry(entry);
}

export async function getPreview(id: string): Promise<ContentPreview> {
  const entry = await contentfulClient.getEntry(id);
  return parsePreviewEntry(entry);
}

function parseDraftEntry(entry: any): ContentDraft {
  return {
    id: entry.sys.id,
    meta: {
      title: entry.fields.title,
      subtitle: entry.fields.subtitle,
      description: entry.fields.description,
      tags: entry.fields.tags,
      category: entry.fields.category,
      seo: entry.fields.seo,
    },
    body: {
      markdown: entry.fields.content,
      excerpt: entry.fields.excerpt,
      readingTime: entry.fields.readingTime,
    },
    author: entry.fields.author,
    coverImage: entry.fields.coverImage,
    status: entry.fields.status,
    scheduledAt: entry.fields.scheduledAt,
    createdAt: entry.sys.createdAt,
    updatedAt: entry.sys.updatedAt,
    publishedAt: entry.sys.publishedAt,
  };
}

function parsePreviewEntry(entry: any): ContentPreview {
  return {
    id: entry.sys.id,
    meta: {
      title: entry.fields.title,
      subtitle: entry.fields.subtitle,
      description: entry.fields.description,
      tags: entry.fields.tags,
      category: entry.fields.category,
      seo: entry.fields.seo,
    },
    body: {
      markdown: entry.fields.content,
      excerpt: entry.fields.excerpt,
      readingTime: entry.fields.readingTime,
    },
    author: entry.fields.author,
    coverImage: entry.fields.coverImage,
    status: entry.fields.status,
  };
}