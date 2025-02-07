import dataFlyers from '../data/flyers.json';
import { Attention } from '../layouts/Attention';
import { Banner } from '../layouts/Banner';
import { ContactForm } from '../layouts/ContactForm';

export const ContactPage = () => {
  return (
    <>
      <Banner title={dataFlyers.title} page="Contact Us" />

      <main className="main-contact">
        <Attention />

        <ContactForm />
      </main>
    </>
  );
};
