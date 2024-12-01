import { Container } from '@/components/ui/Container';
import { NewsletterForm } from '@/components/ui/NewsletterForm';
import { NextSeo } from 'next-seo';

export default function Newsletter() {
  return (
    <>
      <NextSeo
        title="Newsletter"
        description="Subscribe to our newsletter for weekly insights on philosophy, history, and personal growth."
      />
      <Container className="py-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-serif font-bold mb-6">Newsletter</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Join our community of curious minds. Get weekly insights on philosophy,
            history, and personal growth delivered straight to your inbox.
          </p>
          <NewsletterForm />
        </div>
      </Container>
    </>
  );
}