import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeftIcon, GlobeIcon, MapIcon } from 'lucide-react';

import dataGalleries from '../data/galleries.json';
import { Button } from '../components/Button';
import { CardImage } from '../components/CardImage';

export const GalleryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState(null);

  useEffect(() => {
    // Cari konten berdasarkan id
    const foundContent = dataGalleries.categories.flatMap((category) => (category.subcategories ? category.subcategories.flatMap((sub) => sub.data) : category.data)).find((item) => item.id.toString() === id);

    setContent(foundContent);
  }, [id]);

  if (!content) {
    return (
      <p>
        Content not found. Please <Link to={'/'}>go back</Link>.
      </p>
    );
  }

  return (
    <div className="gallery-detail-container">
      {/* Navigation */}
      <nav>
        <Button onClick={() => navigate(-1)}>
          <ArrowLeftIcon size={16} /> Back
        </Button>
      </nav>

      {/* Header */}
      <header>
        <CardImage src={content.background_path} />
      </header>

      {/* Main Content */}
      <main>
        <section className="title">
          <CardImage src={content.poster_path}>
            <h3>{content.name}</h3>
          </CardImage>
        </section>

        <section className="detail">
          <span className="wrapper">
            {content.website !== '' ? (
              <Link to={content.website} target="_blank" rel="noopener noreferrer">
                <GlobeIcon size={16} />
                Website
              </Link>
            ) : (
              ''
            )}
            <Link to={content.gmaps} target="_blank" rel="noopener noreferrer">
              <MapIcon size={16} />
              Map Direction
            </Link>
          </span>

          <ul>
            <li>
              <article>
                <strong>Description:</strong>
                <p>{content.description}</p>
              </article>
            </li>
            <li>
              <article>
                <strong>Address:</strong>
                <p>{content.address}</p>
              </article>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};
