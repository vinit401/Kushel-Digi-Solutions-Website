import React, { useState } from "react";
import recaptcha from "../assets/images/png-transparent-recaptcha-hd-logo-thumbnail 1.png";
import logo from "../assets/images/Kds logo 1.png"; // 🔥 apna logo path

const Contact = () => {
  const [tab, setTab] = useState("address");

  return (
    <>
      <section className="contact-wrapper" id="contact">
        <div className="contact-container">
          {/* LEFT FORM */}
          <div className="contact-left">
            <h2>Contact Us</h2>
            <p className="contact-sub">
              Please Complete The Below Form. We Will Get In Touch With You
            </p>

            <form className="contact-form">
              <div className="form-row">
                <input type="text" placeholder="Name*" />
                <input type="text" placeholder="Phone Number*" />
              </div>

              <div className="form-row">
                <input type="email" placeholder="Email Address*" />
                <input type="text" placeholder="Location" />
              </div>

              <input type="text" placeholder="Business Name" />
              <textarea placeholder="Message"></textarea>

              {/* Captcha */}
              <div className="captcha-box">
                <div className="captcha-left">
                  <input type="checkbox" />
                  <span>I'm not a robot</span>
                </div>

                <div className="captcha-right">
                  <img src={recaptcha} alt="recaptcha" />
                  <small>Privacy - Terms</small>
                </div>
              </div>

              <button type="submit" className="contact-btn">
                Submit →
              </button>
            </form>
          </div>

          {/* RIGHT INFO */}
          <div className="contact-right">
            <div className="contact-tabs">
              <button
                className={tab === "address" ? "active" : ""}
                onClick={() => setTab("address")}
              >
                Address
              </button>
              <button
                className={tab === "map" ? "active" : ""}
                onClick={() => setTab("map")}
              >
                Google Maps
              </button>
            </div>

            {tab === "address" && (
              <div className="contact-info">
                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div>
                    <h4>OUR LOCATION</h4>
                    <p>G-9, First Floor, Sector 63, Noida</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">✉️</div>
                  <div>
                    <h4>SEND US MAIL</h4>
                    <p>info@kusheldigi.com</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">📞</div>
                  <div>
                    <h4>CALL US</h4>
                    <p>+91 9045301702</p>
                  </div>
                </div>
              </div>
            )}

            {tab === "map" && (
              <div className="map-box">
                <iframe
                  title="map"
                  src="https://maps.google.com/maps?q=sector%2063%20noida&t=&z=13&ie=UTF8&iwloc=&output=embed"
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 🔥 FOOTER STRIP */}
      <footer className="contact-footer">
        <div className="footer-container">
          <div className="footer-left">
            <img src={logo} alt="KDS Logo" />
            <p>© 2023 KushelDigi. All Rights Reserved.</p>
            <span>About Us | Insights | Blog | Privacy Policy | Sitemap</span>
          </div>

          <div className="footer-middle">
            <p>📍 G-9, First Floor, Sector 63, Noida</p>
            <p>✉️ Shubham@Kusheldigi.Com</p>
            <p>📞 9045301702</p>
          </div>

          <div className="footer-right">
            <p>Follow Us On</p>
            <div className="social-icons">
              <span>🌐</span>
              <span>📘</span>
              <span>🐦</span>
              <span>🔗</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;