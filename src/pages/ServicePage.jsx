import dataServices from '../data/services.json';
import dataCompanyProfiles from '../data/company-profiles.json';
import { Banner } from '../layouts/Banner';
import { Service } from '../layouts/Service';

export const ServicePage = () => {
  return (
    <>
      <Banner title={dataServices.title} page="Our Services" />

      <main className="main-service">
        <Service className="service" buttonText="Send Us Message" to={`mailto:${dataCompanyProfiles.email}`} target="_blank" rel="noopener noreferrer" />
      </main>
    </>
  );
};
