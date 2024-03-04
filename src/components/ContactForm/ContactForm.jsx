import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function ContactForm() {
  const { register, handleSubmit, errors, reset } = useForm();
  const [isSubmitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const onSubmit = async (data) => {
    try {
      setSubmitting(true);

      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
        setSubmitSuccess(true);
        reset();
      } else {
        console.error('Form submission failed:', response.statusText);
        setSubmitError('Form submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error.message);
      setSubmitError('Error submitting form. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-form">
      <h2>Contact Me</h2>
      {submitSuccess && <p className="success-message">Form submitted successfully!</p>}
      {submitError && <p className="error-message">{submitError}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name:
          <input type="text" name="name" ref={register({ required: true })} />
          {errors.name && <p className="error-message">This field is required.</p>}
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && <p className="error-message">Enter a valid email address.</p>}
        </label>
        <label>
          Message:
          <textarea name="message" ref={register({ required: true })} />
          {errors.message && <p className="error-message">This field is required.</p>}
        </label>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
