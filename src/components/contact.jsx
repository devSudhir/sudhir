import React from "react";
import imageOverlay from "../img/earth.jpg";

const Contact = () => {
  return (
    <section
      className="paralax-mf footer-paralax bg-image sect-mt4 route contactStyle.contactContainer"
      style={{
        backgroundImage: "url(" + imageOverlay + ")",
      }}
    >
      <div className="overlay-mf"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <div id="contact" className="box-shadow-full">
                <div className="row">
                  <div
                    className="col-md-6"
                    style={{ width: "100%", margin: "auto" }}
                  >
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">Get in Touch</h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">
                        Whether you want to get in touch, talk about a project
                        collaboration, or just say hi, I'd love to hear from
                        you.
                      </p>
                      <ul class="list-ico">
                        <li>
                          <span class="ion-ios-telephone"></span> (+91)
                          8917320740
                        </li>
                        <li>
                          <span class="ion-email"></span>{" "}
                          sudhirsamantaray33@gmail.com
                        </li>
                      </ul>
                    </div>
                    <div className="socials">
                      <ul>
                        <li>
                          <a
                            href="https://twitter.com/SudhirK43839243"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ico-circle">
                              <i className="ion-social-twitter"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://github.com/devSudhir"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ico-circle">
                              <i className="ion-social-github"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://linkedin.com/in/devsudhir"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ico-circle">
                              <i className="ion-social-linkedin"></i>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="copyright-box"></div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
