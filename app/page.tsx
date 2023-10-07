import { About, Articles, Footer, Hero, Navbar, Overlay } from '@/components';

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
