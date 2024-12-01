import { Container } from '@/components/ui/Container';
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <>
      <NextSeo
        title="About"
        description="Learn more about 1wanderer and our mission to explore philosophy, history, and personal growth."
      />
      <Container className="py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose dark:prose-invert mx-auto"
        >
          <h1>About 1wanderer</h1>
          <p>
            1wanderer is a platform dedicated to exploring the intersections of
            philosophy, history, and personal growth. We believe that the wisdom of
            the past can illuminate our path forward, helping us navigate the
            complexities of modern life with greater clarity and purpose.
          </p>
          <h2>Our Mission</h2>
          <p>
            Our mission is to make timeless wisdom accessible and relevant to
            contemporary life. We strive to create a space where intellectual
            curiosity meets practical application, where ancient philosophy meets
            modern challenges, and where personal growth is informed by historical
            perspective.
          </p>
          <h2>What We Offer</h2>
          <ul>
            <li>In-depth articles on philosophy and history</li>
            <li>Practical guides for personal development</li>
            <li>Weekly newsletter with curated insights</li>
            <li>Online courses and workshops</li>
            <li>Community discussions and events</li>
          </ul>
        </motion.div>
      </Container>
    </>
  );
}