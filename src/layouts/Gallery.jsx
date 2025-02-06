import { Link } from 'react-router-dom';

import dataGalleries from '../data/galleries.json';
import { HeadingTitle } from '../components/HeadingTitle';
import { CardImage } from '../components/CardImage';

export const Gallery = () => {
  return (
    <section className="gallery">
      <HeadingTitle heading={dataGalleries.heading} title={dataGalleries.title} subtitle={dataGalleries.subtitle} description={dataGalleries.description} />

      <div className="wrapper">
        <ul>
          {dataGalleries.categories.slice(0, 6).map((data) => (
            <li key={data.id}>
              <CardImage src={data.thumbnail} loading="lazy" />
            </li>
          ))}
        </ul>

        <div className="button">
          <Link to={'/spots-gallery'}>See All Category</Link>
        </div>
      </div>
    </section>
  );
};
