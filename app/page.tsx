import { Overlay, Navbar, Hero, About, Articles, Footer } from '@/components';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Overlay />
        <div className="static bg-gray lg:relative">
          <Hero />
          <About />
        </div>
        <Articles />
      </main>
      <Footer />
    </>
  );
};

export default Home;
