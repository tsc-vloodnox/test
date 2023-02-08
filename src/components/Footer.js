import React from "react";

const Footer = () => {
  return (
    <footer className="footer-wrap">
      {/* <div className="top">
        <div className="footer-item">
          <div className="footer-widget">
            <a href="index.html" className="footer-logo">
              <div className="logo">
                <img src="./img/stree.png" alt="icon" />
                <h3>Structure</h3>
              </div>
            </a>
            <p className="comp-desc">
              Nous sommes un collectif d'étudiant qui s’est donné pour mission
              de réunir les étudiants en science de la santé et de les tenir
              informer sur l'actualité santé. Au-delà de cela, nous proposons
              divers programmes.
            </p>
            <div className="social-link">
              <ul>
                <li>
                  <a href="www.fb.com" target="_blank">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="www.fb.com" target="_blank">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </li>
                <li>
                  <a href="www.fb.com" target="_blank">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-item">
          <div className="footer-widget">
            <h3 className="footer-widget-title">A propos</h3>
            <ul className="footer-menu">
              <li>
                <a href="/about">Qui sommes-nous</a>
              </li>
              <li>
                <a href="/services">Nos service</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/contact">Nous contacter</a>
              </li>
              
            </ul>
          </div>
        </div>
        <div className="footer-item">
          <div className="footer-widget nl">
            <div>
              <h3 className="footer-widget-title">Newsletter</h3>
              <p className="newsletter-text">
                Vous recevez des mails sur nos différentes activités et nos
                offres.
              </p>
            </div>
            <form action="#" className="newsletter-form">
              <input type="email" placeholder="Votre Email…" />
              <button type="button">Inscription</button>
            </form>
          </div>
        </div>
      </div> */}
      <div className="copyright-text">
        <p>
          <strong>Structure </strong>© 2022 - Designed by{" "}
          <a href="/" target="_blank">
            TSC
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
