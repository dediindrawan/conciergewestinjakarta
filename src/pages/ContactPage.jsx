import dataFlyers from '../data/flyers.json';
import { Banner } from '../layouts/Banner';
import { ContactForm } from '../layouts/ContactForm';

export const ContactPage = () => {
  return (
    <>
      <Banner title={dataFlyers.title} page="Contact Us" />

      <main className="main-contact">
        <ContactForm />
      </main>
    </>
  );
};
