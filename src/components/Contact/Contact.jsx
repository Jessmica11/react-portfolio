import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <div className="modal">
        <div className="modal-content">
            {/* The `netlify` attribute is used to enable Netlify forms */}
          <form name="contact" method="post" data-netlify="true" netlify-honeypot="bot-field">
            {/* The `bot-field` input is used to prevent spam */}
            <input type="hidden" name="bot-field" />

            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
