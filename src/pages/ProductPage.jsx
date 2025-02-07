import dataProducts from '../data/products.json';
import { Attention } from '../layouts/Attention';
import { Banner } from '../layouts/Banner';
import { Product } from '../layouts/Product';

export const ProductPage = () => {
  return (
    <>
      <Banner title={dataProducts.title} page="Room and Suite" />

      <main className="main-product">
        <Attention />
        
        <Product buttonText="Learn More and Book Now" to={`${dataProducts.website}#boxsection2`} target="_blank" rel="noopener noreferrer" />
      </main>
    </>
  );
};
