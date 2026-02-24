import React from "react";
import personImg from "../assets/images/Frame.png"; // jo circular image di hai

const KnownFor = () => {
  return (
    <section className="knownfor-wrapper">
      <div className="knownfor-container">

        {/* LEFT CONTENT */}
        <div className="knownfor-left">
          <h2 className="knownfor-title">WE ARE KNOWN FOR</h2>

          <ul className="knownfor-list">
            <li>
              99.9% Uptime with web acceleration, Caching and compression enabled
              High-Traffic Websites & Apps development service to scale up sales
              and support hundreds of thousands of users in a fast, reliable manner.
            </li>

            <li>
              Clear terms and conditions, Robust data security to protect your
              customers' information. Providing Complete Ownership and Control
              your project. No Fake Commitment, Delivery on time
            </li>

            <li>
              Free Website Audit, Quick Review, 24x7 tech support. Easy to use
              complete Website Application end-to-end Analytics With Accelerated
              Mobile Pages (AMP)
            </li>

            <li>
              Use of Latest technologies like React Web Development, Vue JS Web
              Development, NodeJS Web Developers for web development & Website
              design service in India.
            </li>

            <li>
              Website UI UX Design, Wireframing, Prototyping in figma before
              actually developing the webpages to make sure we’re heading
              towards the right direction.
            </li>
          </ul>

          <button className="knownfor-btn">CALL NOW →</button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="knownfor-right">
          <div className="knownfor-image-wrap">
            <img src={personImg} alt="expert" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default KnownFor;