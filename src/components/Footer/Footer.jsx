import React from "react";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaFacebookF, FaInstagram, FaBehance } from "react-icons/fa";

import "./Footer.scss";

function Home() {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer-content-wrapper">
          <div>© SL. ART 2021</div>
          <a
            href="https://vk.com/razina_elina"
            target="_blank"
            className="footer-dev-link"
          >
            Developed by Elina Razina
          </a>
        </div>
        <div className="footer-social">
          <a
            href="https://www.facebook.com/Svetlana.Lebedeva.art"
            target="_blank"
            alt="link to facebook account of Svetlana Lebedeva art"
            className="footer-social__link"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/svetlana.lebedeva.art"
            target="_blank"
            alt="instagram account of Svetlana Lebedeva"
            className="footer-social__link"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.behance.net/Slart"
            target="_blank"
            alt="behanse account of Svetlana Lebedeva Art"
            className="footer-social__link"
          >
            <FaBehance />
          </a>
          {/* <a
            href="https://vk.com/slebedeva8"
            target="_blank"
            alt="Vkontakte account of Svetlana Lebedeva"
            className="footer-social__link"
          >
            <SlSocialVkontakte />
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
