import { remark } from 'remark';
import html from 'remark-html';
import readingTime from 'reading-time';
import type { ContentBody } from '@/types/content';

export async function transformMarkdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

export function calculateReadingTime(markdown: string): number {
  const { minutes } = readingTime(markdown);
  return Math.ceil(minutes);
}

export async function processContentBody(markdown: string): Promise<ContentBody> {
  const excerpt = markdown
    .split('\n')
    .find((line) => line.length > 0)
    ?.slice(0, 300) || '';

  return {
    markdown,
    excerpt: excerpt.trim(),
    readingTime: calculateReadingTime(markdown),
  };
}