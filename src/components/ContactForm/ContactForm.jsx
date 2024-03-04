import React from 'react';

function ContactForm() {
  return (
    <div className="contact-form">
      <h2 className="text-center">Contact Me</h2>
      <form name="contact" method="POST" data-netlify="true">
        <div className="mb-3 row justify-content-center">
          <label htmlFor="name" className="col-sm-2 col-form-label">
            Name:
          </label>
          <div className="col-sm-8">
            <input type="text" name="name" className="form-control" required />
          </div>
        </div>
        <div className="mb-3 row justify-content-center">
          <label htmlFor="email" className="col-sm-2 col-form-label">
            Email:
          </label>
          <div className="col-sm-8">
            <input
              type="email"
              name="email"
              className="form-control"
              required
              pattern="^\S+@\S+$"
            />
          </div>
        </div>
        <div className="mb-3 row justify-content-center">
          <label htmlFor="message" className="col-sm-2 col-form-label">
            Message:
          </label>
          <div className="col-sm-8">
            <textarea name="message" className="form-control" required />
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
