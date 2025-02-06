import { Link } from 'react-router-dom';

import dataFlyers from '../data/flyers.json';
import { HeadingTitle } from '../components/HeadingTitle';

export const Flyer = () => {
  return (
    <section className="flyer">
      <div className="wrapper" style={{ backgroundImage: `url(${dataFlyers.background_path})` }}>
        <span>
          <HeadingTitle title={dataFlyers.title} description={dataFlyers.description} />
        </span>

        <Link to={'/contact-us'}>Contact Us</Link>
      </div>
    </section>
  );
};
