import FeaturedProducts from '@/components/home/FeaturedProducts';
import Hero from '@/components/home/Hero';

async function HomePage() {

  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
}

export default HomePage;