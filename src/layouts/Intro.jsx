import dataIntros from '../data/intros.json';
import { CardImage } from '../components/CardImage';
import { HeadingTitle } from '../components/HeadingTitle';

export const Intro = () => {
  return (
    <section className="intro">
      <div className="intro-text">
        <HeadingTitle heading={dataIntros.heading} title={dataIntros.title} subtitle={dataIntros.subtitle} description={dataIntros.description} />

        <CardImage src={dataIntros.avatar}>
          <h4>{dataIntros.employee_name}</h4>
          <small>{dataIntros.job_position}</small>
        </CardImage>
      </div>

      <figure className="intro-image">
        {dataIntros.poster_path.map((data) => (
          <img key={data.id} src={data.path} />
        ))}
      </figure>
    </section>
  );
};
