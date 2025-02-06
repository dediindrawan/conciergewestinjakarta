import { Jumbotron } from '../layouts/Jumbotron';
import { Intro } from '../layouts/Intro';
import { Product } from '../layouts/Product';
import { Gallery } from '../layouts/Gallery';
import { Service } from '../layouts/Service';
import { Flyer } from '../layouts/Flyer';

export const HomePage = () => {
  return (
    <>
      <Jumbotron />

      <main id="main-home" className="main-home">
        <Intro />
        <Product />
        <Gallery />
        <Service />
        <Flyer />
      </main>
    </>
  );
};
