import { Link } from 'react-router-dom';
import { MailIcon, Map, MapPin, PhoneCallIcon } from 'lucide-react';

import dataFooter from '../data/footers.json';
import dataCompanyProfiles from '../data/company-profiles.json';
import { CardImage } from '../components/CardImage';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="content">
        <section className="address">
          <ul>
            <h1>{dataCompanyProfiles.name}</h1>

            <li>
              <span>
                <MapPin size={16} className="icon" />
              </span>
              {dataCompanyProfiles.address}
            </li>
            <li>
              <Link to={`tel:${dataCompanyProfiles.phone}`} target="_blank" rel="noopener noreferrer">
                <PhoneCallIcon size={16} />
                {dataCompanyProfiles.phone}
              </Link>
            </li>
            <li>
              <Link to={`mailto:${dataCompanyProfiles.email}`} target="_blank" rel="noopener noreferrer">
                <MailIcon size={16} />
                {dataCompanyProfiles.email}
              </Link>
            </li>
          </ul>

          <Link className="button" to={dataCompanyProfiles.gmaps} target="_blank" rel="noopener noreferrer">
            <Map size={16} />
            Map Direction
          </Link>
        </section>

        <section className="extra-link">
          <ul>
            <h3>More Services</h3>

            {dataFooter.extra_link.map((data) => (
              <li key={data.id}>
                <Link to={data.path} target="_blank" rel="noopener noreferrer">
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>

          <figure className="qr-code">
            <span>
              <CardImage src={dataFooter.code_path} loading="lazy" />
            </span>
            <figcaption>
              Scan me to get faster <span>open this web</span>
            </figcaption>
          </figure>
        </section>
      </div>

      <span className="copyright">
        &copy; {new Date().getFullYear()} | <Link to={'https://conciergewestinjakarta.vercel.app/'}>Concierge The Westin Jakarta</Link>
      </span>
    </footer>
  );
};
