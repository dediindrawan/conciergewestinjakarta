import dataFlyers from '../data/flyers.json';
import { Breadcrumb } from '../components/Breadcrumb';
import { HeadingTitle } from '../components/HeadingTitle';

export const Banner = ({ title, page }) => {
  return (
    <header className="banner">
      <div className="wrapper" style={{ backgroundImage: `url(${dataFlyers.background_path})` }}>
        <div className="content">
          <HeadingTitle title={title} />
          <span>
            <Breadcrumb page={page} />
          </span>
        </div>
      </div>
    </header>
  );
};
