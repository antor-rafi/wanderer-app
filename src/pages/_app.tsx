import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { Layout } from '@/components/layout/Layout';
import { DefaultSeo } from 'next-seo';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <DefaultSeo
        titleTemplate="%s | 1wanderer"
        defaultTitle="1wanderer - Philosophy, History & Personal Growth"
        description="Explore timeless wisdom through philosophy, history, and personal growth. Join us on a journey of intellectual discovery and self-improvement."
        openGraph={{
          type: 'website',
          locale: 'en_US',
          site_name: '1wanderer',
        }}
        twitter={{
          handle: '@1wanderer',
          cardType: 'summary_large_image',
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}