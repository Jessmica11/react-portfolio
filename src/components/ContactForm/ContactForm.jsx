import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const { name, email, message } = formData;

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          name,
          email,
          message
        }).toString()
      });

      if (response.ok) {
        setSubmissionStatus('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmissionStatus('There was a problem submitting your message. Please try again.');
      }
    } catch (error) {
      setSubmissionStatus('There was a problem submitting your message. Please try again.');
    }
  };

  return (
    <div className="contact-form">
      <h2 className="text-center">Contact Me</h2>
      <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
        <div className="mb-3 row justify-content-center">
          <label htmlFor="name" className="col-sm-2 col-form-label">
            Name:
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              name="name"
              className="form-control"
              required
              value={formData.name}
              onChange={handleChange}
            />
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
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-3 row justify-content-center">
          <label htmlFor="message" className="col-sm-2 col-form-label">
            Message:
          </label>
          <div className="col-sm-8">
            <textarea
              name="message"
              className="form-control"
              required
              value={formData.message}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
      {submissionStatus && (
        <div className="submission-status text-center mt-3">
          {submissionStatus}
        </div>
      )}
    </div>
  );
}

export default ContactForm;
