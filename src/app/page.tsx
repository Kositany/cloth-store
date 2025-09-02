import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import FeaturedCollections from '@/components/FeaturedCollections';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-matte-black">
      <Navigation />
      <Hero />
      <FeaturedCollections />
      <Footer />
    </div>
  );
}
