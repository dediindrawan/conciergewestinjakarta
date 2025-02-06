import { Link } from 'react-router-dom';

import dataProducts from '../data/products.json';
import { CardImage } from '../components/CardImage';
import { HeadingTitle } from '../components/HeadingTitle';

export const Product = ({ buttonText = 'See Details', to = '/room-and-suite', ...props }) => {
  return (
    <section className="product">
      <HeadingTitle heading={dataProducts.heading} title={dataProducts.title} subtitle={dataProducts.subtitle} description={dataProducts.description} />

      <div className="wrapper">
        <ul className="list">
          {dataProducts.categories.map((data) => (
            <li key={data.id}>
              <CardImage src={data.poster_path}>
                <h4>{data.type}</h4>
              </CardImage>

              <ul className="detail">
                <li>
                  <article>
                    {data.description}
                  </article>
                </li>
                <li>
                  <article>
                    <strong>Room size:</strong> {data.room_size}
                  </article>
                </li>
                <li>
                  <article>
                    <strong>Bed:</strong> {data.bed}
                  </article>
                </li>
                <li>
                  <article>
                    <strong>Capacity:</strong> {data.capacity}
                  </article>
                </li>
              </ul>
            </li>
          ))}
        </ul>

        <Link to={to} {...props}>
          {buttonText}
        </Link>
      </div>
    </section>
  );
};
