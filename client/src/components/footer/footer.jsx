import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <footer className=" flex gap-x-8 bg-blue-300 mt-20 p-10 justify-evenly">
        <div>
          <div className="bg-blue-800 w-60 h-20 text-white text-4xl font-extrabold flex items-center justify-center">
            PARTSBAY
          </div>
          India's most popular Automobile
          <br /> spares MarketPlace Online
        </div>

        <div className="flex flex-col">
          <Link to="/" className="font-bold">
            ABOUT US
          </Link>
          <Link to="/contact" className="font-bold">
            CONTACT US
          </Link>
        </div>

        <div className="flex flex-col">
          <h2 className="font-bold">HELPFUL LINKS</h2>
          <Link to="/">Help</Link>
          <Link to="/">Sitemap</Link>
          <Link to="/">Legal & Privacy information</Link>
          <Link to="/">Vulnerability Disclosure Program</Link>
        </div>

        <div className="flex flex-col justify-evenly">
          <h2 className="font-bold">FOLLOW US</h2>
          <div className="flex justify-evenly gap-x-4">
            <a href="http://www.facebook.com">
              <FontAwesomeIcon
                icon={faFacebookF}
                style={{ color: "#557477" }}
              />
            </a>
            <a href="http://www.instagram.com">
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ color: "#557477" }}
              />
            </a>
            <a href="http://www.twitter.com">
              <FontAwesomeIcon icon={faTwitter} style={{ color: "#557477" }} />
            </a>
            <a href="http://www.youtube.com">
              <FontAwesomeIcon icon={faYoutube} style={{ color: "#557477" }} />
            </a>
          </div>
          <div className="flex flex-col">
            <a href="/">
              {" "}
              <img src="/src/assets/SocialMediaIcons/appstore.webp" />
            </a>
            <a href="/">
              {" "}
              <img src="/src/assets/SocialMediaIcons/playstore.webp" />
            </a>
          </div>
        </div>
      </footer>
      <footer className="flex justify-between items-center px-10 h-16">
        <div>
          <a href="/">Help</a>-<a href="/">SiteMap</a>
        </div>
        <div>
          <p>All rights reserved © 2006-2023 PARTSBAY</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
