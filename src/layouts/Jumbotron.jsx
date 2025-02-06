import dataJumbotrons from '../data/jumbotrons.json';
import { HeadingTitle } from '../components/HeadingTitle';
import { Button } from '../components/Button';

export const Jumbotron = () => {
  return (
    <header className="jumbotron" style={{ backgroundImage: `url(${dataJumbotrons.background_path})` }}>
      <div className="wrapper">
        <HeadingTitle heading={dataJumbotrons.heading} title={dataJumbotrons.title} subtitle={dataJumbotrons.subtitle} description={dataJumbotrons.description} />

        <Button onClick={() => document.getElementById('main-home')?.scrollIntoView()}>Explore Now</Button>
      </div>
    </header>
  );
};
