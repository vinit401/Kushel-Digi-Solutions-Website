import ellipse from "../assets/images/Ellipse 37.png";
import codingImg from "../assets/images/coding.png";
import shopImg from "../assets/images/online-shop 1.png";
import uiImg from "../assets/images/ui-design 1.png";

function AboutUs() {
  return (
    <>
      {/* ===== ABOUT US ===== */}
      <section className="about-wrapper" id="about">
        {/* Watermark */}
        <p className="about-watermark">ABOUT US</p>

        {/* Decorative ellipse */}
        <img src={ellipse} alt="" className="about-ellipse" />

        <div className="about-container">
          <div className="about-content">
            {/* LEFT */}
            <div className="about-left">
              <h2 className="about-heading">
                Hire Top Website <br /> Designers & Developers
              </h2>

              <p className="about-desc">
                If you're looking to hire expert website designers and
                developers, you've come to the right place to construct a
                website that stands out in aesthetics and functionality. We have
                the ability to offer a wide range of services. As we have a
                comprehensive understanding of website design and exposure
                across sectors all over the world, we also build websites that
                provide customers with the best first impression on digital
                platforms.
              </p>

              <button className="about-btn">QUICK ENQUIRY</button>
            </div>

            {/* RIGHT */}
            <div className="about-right">
              <div className="about-features">
                <div className="feature-box">
                  <h4>Great UI / UX</h4>
                  <p>
                    Our designs have great UI which results in great UX as well.
                  </p>
                </div>

                <div className="feature-box">
                  <h4>SEO Friendly</h4>
                  <p>
                    Our websites are built with features to help your website
                    rank higher.
                  </p>
                </div>

                <div className="feature-box">
                  <h4>Clean Coding</h4>
                  <p>
                    Coding is kept clean and optimised as per industry
                    standard.{" "}
                  </p>
                </div>

                <div className="feature-box">
                  <h4>Responsive Design</h4>
                  <p>
                    Our Designs are device friendly across all platforms and
                    screen sizes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="services-wrapper" id="services">
        <div className="services-container">
          <p className="services-label">OUR SERVICES</p>
          <p className="services-sub">We are expert in</p>

          <div className="services-grid">
            {/* Card 1 */}
            <div className="service-card">
              <div className="service-img-wrap">
                <img src={uiImg} alt="UI/UX Design" className="service-img" />
              </div>
              <h3 className="service-card-title">UI / UX DESIGN</h3>
              <p className="service-card-desc">
                An ordinary solution can dominate the Industry with significant
                design which is why, We at Kushel Digi make sure to provide you
                with innovative and user-friendly designs. User interface and
                User Experience design is an integral part of any digital
                marketing strategy and online enterprise. 
              </p>
              <a href="#" className="service-link">
                <span className="learn-circle">
                  <span className="learn-arrow">›</span>
                </span>
                <span className="learn-text">LEARN MORE</span>
              </a>
            </div>

            {/* Card 2 */}
            <div className="service-card">
              <div className="service-img-wrap">
                <img src={shopImg} alt="E-Commerce" className="service-img" />
              </div>
              <h3 className="service-card-title">E-COMMERCE DEVELOPMENT</h3>
              <p className="service-card-desc">
                The growth of any business requires the use of e-commerce as a
                channel and instrument. Everything is now easy to reach and
                merely a click away. E-commerce solutions have made the
                relationship between the client and the consumer more effective
                and user-friendly. This is why integrating E-commerce Solutions
                in a business has become a necessity and is effective.
              </p>
              <a href="#" className="service-link">
                <span className="learn-circle">
                  <span className="learn-arrow">›</span>
                </span>
                <span className="learn-text">LEARN MORE</span>
              </a>
            </div>

            {/* Card 3 */}
            <div className="service-card">
              <div className="service-img-wrap">
                <img
                  src={codingImg}
                  alt="Development"
                  className="service-img"
                />
              </div>
              <h3 className="service-card-title">WEBSITE & APP DEVELOPMENT</h3>
              <p className="service-card-desc">
                Our team of experts strives to develop the ideal website in
                accordance with your needs and expectations.  Having a website
                for your business increases your credibility and awareness among
                the audiences. We have an excellent team dedicated to design and
                develop a SEO-friendly and E-commerce website. It will help your
                clients to understand you and your services better. 
              </p>
              <a href="#" className="service-link">
                <span className="learn-circle">
                  <span className="learn-arrow">›</span>
                </span>
                <span className="learn-text">LEARN MORE</span>
              </a>
            </div>
          </div>

          <div className="services-cta">
            <button className="services-cta-btn">Get Started →</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
