import React from "react";

const Faq = () => {
  const faqs = [
    "How much does a website consultant cost?",
    "How much should I pay for website design?",
    "How much does a small website cost?",
    "How much does a basic 5 page website cost?",
    "How long does a website take to build?",
    "Is maintaining the website is costly?",
  ];

  return (
    <>
      {/* ================= FAQ SECTION ================= */}
      <section className="faq-wrapper">
        <div className="faq-container">

          {/* Heading */}
          <div className="faq-heading">
            <h2>
              FREQUENTLY ASKED <span>QUESTION</span>
            </h2>
            <p>Here are some common queries and question that brands ask.</p>
          </div>

          {/* FAQ Grid */}
          <div className="faq-grid">
            {faqs.map((item, index) => (
              <div className="faq-item" key={index}>
                <p>{item}</p>
                <span className="faq-plus">+</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="faq-cta">
            <p>Got More Questions On Your Mind?</p>
            <button className="faq-btn">Ask Us a question →</button>
          </div>

        </div>
      </section>

      {/* ================= FREE CONSULTATION ================= */}
      <section className="consult-wrapper">
        <h2>Get Free Consultation</h2>
        <p>
          Book An Appointment With Our Team Through Google Meet / Zoom Call
        </p>
        <button className="consult-btn">
          Schedule a meeting →
        </button>
      </section>
    </>
  );
};

export default Faq;