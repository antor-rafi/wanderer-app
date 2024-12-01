export interface ContentMeta {
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  category: {
    id: string;
    name: string;
    slug: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface ContentBody {
  markdown: string;
  excerpt: string;
  readingTime: number;
}

export interface ContentAsset {
  url: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
}

export interface ContentAuthor {
  id: string;
  name: string;
  bio: string;
  image: ContentAsset;
}

export interface ContentDraft {
  id: string;
  meta: ContentMeta;
  body: ContentBody;
  author: ContentAuthor;
  coverImage: ContentAsset;
  status: 'draft' | 'review' | 'scheduled' | 'published';
  scheduledAt?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

export type ContentPreview = Pick<
  ContentDraft,
  'id' | 'meta' | 'body' | 'author' | 'coverImage' | 'status'
>;