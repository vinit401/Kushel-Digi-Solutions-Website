import circle from "../assets/images/Ellipse 38.png";
// import "./Hero.css";

function Hero() {
  return (
    <section className="hero-wrapper" id="hero">
      <section className="hero">
        {/* LEFT */}
        <div className="hero-left">
          <p className="welcome-text">Welcome to Kushel Digi</p>

          <h1>
            Revolutionising your business
            <br /> through Technology.
          </h1>

          <p className="hero-desc">
            We are a leading company, which has been offering technology
            solutions across the globe for almost 5 years.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">QUICK ENQUIRY</button>
            <button className="secondary-btn">📞 9045301702</button>
          </div>

          <div className="hero-services">
            <span>UI/UX DESIGN</span>
            <span>WEBSITE &amp; APP DEVELOPMENT</span>
            <span>E-COMMERCE DEVELOPMENT</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right">
          {/* background circle */}
          <img src={circle} alt="" className="circle-bg" />

          {/* form */}
          <div className="form-box">
            <div className="form-box-inner">
              <h3>Hire A Top Global Talent To Grow Your Business !</h3>
              <p className="form-subtitle">Get Free Quote</p>

              <div className="form-grid">
                <div className="input-wrapper">
                  <input type="text" placeholder="Your Name*" />
                  <span className="input-icon">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  </span>
                </div>
                <div className="input-wrapper">
                  <input type="text" placeholder="Phone Number*" />
                  <span className="input-icon">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18"/></svg>
                  </span>
                </div>
                <div className="input-wrapper">
                  <input type="email" placeholder="Email Address" />
                  <span className="input-icon">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>
                  </span>
                </div>
                <div className="input-wrapper">
                  <select defaultValue="">
                    <option value="" disabled>Services</option>
                    <option>UI/UX Design</option>
                    <option>Website Development</option>
                    <option>App Development</option>
                    <option>E-Commerce Development</option>
                  </select>
                  <span className="input-icon">
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>
                  </span>
                </div>
              </div>

              <p className="form-section-label">Additional Details</p>

              <div className="form-grid-full">
                <div className="input-wrapper">
                  <input type="text" placeholder="Select Budget" />
                </div>
                <div className="input-wrapper">
                  <input type="text" placeholder="Best Start Date" />
                </div>
              </div>
            </div>

            <div className="form-btn-wrapper">
              <button className="form-btn">Send a Message</button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Hero;