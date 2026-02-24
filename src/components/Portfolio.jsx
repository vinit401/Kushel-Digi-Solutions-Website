import React from "react";
import portfolio1 from "../assets/images/Rectangle 17701.png";
import portfolio2 from "../assets/images/Layer 1 1.png";

const Portfolio = () => {
  return (
    <section className="portfolio-outer" id="portfolio">

      {/* Watermark — OUTSIDE inner */}
      <h1 className="portfolio-watermark">OUR PORTFOLIO</h1>

      <div className="portfolio-inner">

        {/* Heading */}
        <div className="portfolio-heading">
          <h2>OUR PORTFOLIO</h2>
          <p>
            We design project designed with passion on time, <br />
            within budget of full value
          </p>
        </div>

        {/* Images */}
        <div className="portfolio-images">
          <div className="portfolio-card">
            <img src={portfolio1} alt="portfolio project 1" />
            <p className="portfolio-link">www.2ndAmendment.com</p>
            <span>Lorem Ipsum is simply dummy</span>
          </div>

          <div className="portfolio-card">
            <img src={portfolio2} alt="portfolio project 2" />
            <p className="portfolio-link">www.kickeez.com</p>
            <span>Lorem Ipsum is simply dummy</span>
          </div>
        </div>

        {/* CTA */}
        <button className="portfolio-btn">Let’s Get Together →</button>

      </div>
    </section>

  );
};

export default Portfolio;