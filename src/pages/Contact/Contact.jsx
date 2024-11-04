import React from 'react';
import MetaData from '../../components/MetaData/MetaData';
import ContactForm from '../../components/ContactForm/ContactForm';

function Contact() {
  return (
    <section>
      <MetaData title="Contact Me | Jessica Scheck Portfolio" description="Get in touch with Jessica Scheck for collaboration or inquiries." />
      <p><br />Once your form is submitted, I will reach out as soon as possible to the email address provided.</p>
      <ContactForm />
    </section>
  );
}

export default Contact;
