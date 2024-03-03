import React from 'react';

export default function AboutMe() {
  return (
    <section className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src="/assets/img/jessica-scheck.jpg"
            alt="Jessica Scheck Avatar"
            className="img-fluid rounded-circle"
          />
        </div>
        <div className="col-md-6">
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at justo nec ligula
            aliquet gravida.
          </p>
        </div>
      </div>
    </section>
  );
}
