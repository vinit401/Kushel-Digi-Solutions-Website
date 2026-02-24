import React from "react";
import clientImg from "../assets/images/Ellipse 41.png";   // round image
import videoImg from "../assets/images/Rectangle 17713.png"; // right image

const Testimonials = () => {
  return (
    <section className="testimonials-outer" id="testimonials">
      <div className="testimonials-inner">

        {/* Heading */}
        <div className="testimonials-heading">
          <span>TESTIMONIALS</span>
          <h2>OUR HAPPY CLIENT SAY</h2>
        </div>

        {/* Content */}
        <div className="testimonials-content">

          {/* LEFT */}
          <div className="testimonial-left">
            <img src={clientImg} alt="client" className="client-img" />

            <div className="testimonial-nav">
              <button className="nav-btn gray">←</button>
              <button className="nav-btn blue">→</button>
            </div>

            <p className="testimonial-text">
              Lorem ipsum is simply dummy text of the printing &amp; Typesetting
              industry. lorem ipsum has been the industry's standard dummy text
              ever since 1500s, an unknown printer took a gallery.
            </p>

            <h4 className="client-name">Harriet Mitchell</h4>
            <span className="client-role">Director of inbrew</span>

            <div className="testimonial-dots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="testimonial-right">
            <img src={videoImg} alt="testimonial video" />
            <div className="play-btn">▶</div>

            <div className="video-dots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;