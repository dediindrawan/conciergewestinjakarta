import { Link } from 'react-router-dom';

import dataServices from '../data/services.json';
import { Table } from '../components/Table';
import { HeadingTitle } from '../components/HeadingTitle';
import { CardImage } from '../components/CardImage';

export const Service = ({ buttonText = 'See Details', to = '/our-services', ...props }) => {
  return (
    <section className="service">
      <div className="wrapper">
        <HeadingTitle heading={dataServices.heading} title={dataServices.title} subtitle={dataServices.subtitle} description={dataServices.description} />

        <Table
          className="table-list"
          caption="Our Car Service Price List:"
          title={
            <tr>
              <th>Type</th>
              <th>Price</th>
            </tr>
          }
          body={dataServices.services.map((data) => (
            <tr key={data.id}>
              <td>{data.type}</td>
              <td>{data.price}</td>
            </tr>
          ))}
        />

        <Link to={to} {...props}>
          {buttonText}
        </Link>
      </div>

      <ul className="type-list">
        {dataServices.services.map((data) => (
          <li key={data.id}>
            <CardImage src={data.poster_path} loading="lazy">
              <span>{data.type}</span>
            </CardImage>
          </li>
        ))}
      </ul>
    </section>
  );
};
