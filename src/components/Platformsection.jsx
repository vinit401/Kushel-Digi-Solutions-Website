import React from 'react'
import reactImg from "../assets/images/Group 72473.png";
import flutterImg from "../assets/images/Layer 1 4.png";
import kotlinImg from "../assets/images/Group 72472.png";
import wordpressImg from "../assets/images/wordpress (1) 1.png";
import phpImg from "../assets/images/php 1.png";
import laravelImg from "../assets/images/png-clipart-laravel-web-development-web-application-php-software-framework-others-angle-text 1.png";
import androidImg from "../assets/images/Group 72476.png";
import appleImg from "../assets/images/Group 72475.png";

const Platformsection = () => {
      const platforms = [
    reactImg,
    flutterImg,
    kotlinImg,
    wordpressImg,
    phpImg,
    laravelImg,
    androidImg,
    appleImg,
  ];
  return (
    <section className="platform-wrapper">
      <h2 className="platform-heading">WE USE THIS PLATFORM</h2>

      <div className="platform-grid">
        {platforms.map((img, index) => (
          <div className="platform-box" key={index}>
            <img src={img} alt="platform" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Platformsection
