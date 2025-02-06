import dataProducts from '../data/products.json';
import { Banner } from '../layouts/Banner';
import { Product } from '../layouts/Product';

export const ProductPage = () => {
  return (
    <>
      <Banner title={dataProducts.title} page="Room and Suite" />

      <main className="main-product">
        <Product buttonText="Learn More and Book Now" to={`${dataProducts.website}#boxsection2`} target="_blank" rel="noopener noreferrer" />
      </main>
    </>
  );
};
