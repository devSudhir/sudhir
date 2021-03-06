import React from "react";

//import stock
import reddit1 from "../img/images/Reddit/homepage.png";
import reddit2 from "../img/images/Reddit/login.png";
import reddit3 from "../img/images/Reddit/community.png";
import reddit4 from "../img/images/Reddit/chat.png";
import reddit5 from "../img/images/Reddit/post.png";
import reddit6 from "../img/images/Reddit/comments.png";
import priceline1 from "../img/images/Priceline/priceline1.png";
import priceline2 from "../img/images/Priceline/priceline2.png";
import priceline3 from "../img/images/Priceline/priceline3.png";
import priceline4 from "../img/images/Priceline/priceline4.png";
import priceline5 from "../img/images/Priceline/priceline5.png";
import priceline6 from "../img/images/Priceline/priceline6.png";
import ketto1 from "../img/images/Ketto/index.jpeg";
import ketto2 from "../img/images/Ketto/chatbot.jpeg";
import ketto3 from "../img/images/Ketto/category.jpeg";
import ketto4 from "../img/images/Ketto/donationForm.jpeg";
import ketto5 from "../img/images/Ketto/funds.jpeg";
import ketto6 from "../img/images/Ketto/login.jpeg";
//import ketto7 from "../img/images/Ketto/steps.jpeg";
import udemy1 from "../img/images/udemy/index.PNG";
import udemy2 from "../img/images/udemy/register.jpeg";
import udemy3 from "../img/images/udemy/teach.jpeg";
import udemy4 from "../img/images/udemy/cart.PNG";
import udemy5 from "../img/images/udemy/payment.PNG";
import udemy6 from "../img/images/udemy/login.PNG";

const Portfolio = () => {
  return (
    <section id="work" className="portfolio-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Projects</h3>
              <p className="subtitle-a">Few Things I have Build.</p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="work-box">
              <a href={reddit1} data-lightbox="gallery-vmarine">
                <div className="work-img">
                  <img src={reddit1} alt="" className="img-fluid" />
                </div>
              </a>
              <a
                href={reddit2}
                data-lightbox="gallery-vmarine"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              <a
                href={reddit3}
                data-lightbox="gallery-vmarine"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              <a
                href={reddit4}
                data-lightbox="gallery-vmarine"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              <a
                href={reddit5}
                data-lightbox="gallery-vmarine"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              <a
                href={reddit6}
                data-lightbox="gallery-vmarine"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">Reddit.com (Clone)</h2>
                    <div className="w-more">
                      <span className="w-ctegory">
                        React | Redux | Socket-io | MongoDB
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <a href="https://github.com/devSudhir/reddit">
                        <span className="ion-social-github"></span>
                      </a>
                      <a href="https://reddit-new.netlify.app">
                        <span className="ion-ios-world"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a href={ketto1} data-lightbox="gallery-vmarine">
                <div className="work-img">
                  <img src={ketto1} alt="" className="img-fluid" />
                </div>
              </a>
              <a
                href={ketto2}
                data-lightbox="gallery-vmarine"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              <a
                href={ketto3}
                data-lightbox="gallery-vmarine"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              <a
                href={ketto4}
                data-lightbox="gallery-vmarine"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              <a
                href={ketto5}
                data-lightbox="gallery-vmarine"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              <a
                href={ketto6}
                data-lightbox="gallery-vmarine"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">Ketto.org (Clone)</h2>
                    <div className="w-more">
                      <span className="w-ctegory">
                        HTML | CSS | JavaScript | React | json-server |
                        Styled-components
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <a href="https://github.com/devSudhir/ketto">
                        <span className="ion-social-github"></span>
                      </a>
                      <a href="https://ketto.herokuapp.com">
                        <span className="ion-ios-world"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a href={udemy1} data-lightbox="gallery-aguadeluz">
                <div className="work-img">
                  <img src={udemy1} alt="" className="img-fluid" />
                </div>
              </a>
              <a
                href={udemy2}
                data-lightbox="gallery-aguadeluz"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              <a
                href={udemy3}
                data-lightbox="gallery-aguadeluz"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              <a
                href={udemy4}
                data-lightbox="gallery-aguadeluz"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              <a
                href={udemy5}
                data-lightbox="gallery-aguadeluz"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              <a
                href={udemy6}
                data-lightbox="gallery-aguadeluz"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">Udemy.com (Clone)</h2>
                    <div className="w-more">
                      <span className="w-ctegory">HTML | CSS | JavaScript</span>{" "}
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <a href="https://github.com/devSudhir/Udemy">
                        <span className="ion-social-github"></span>
                      </a>
                      <a href="https://udemy-clone-masai.netlify.app">
                        <span className="ion-ios-world"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a href={priceline1} data-lightbox="gallery-todo">
                <div className="work-img">
                  <img src={priceline1} alt="" className="img-fluid" />
                </div>
              </a>
              <a
                href={priceline2}
                data-lightbox="gallery-todo"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              <a
                href={priceline3}
                data-lightbox="gallery-todo"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              <a
                href={priceline4}
                data-lightbox="gallery-todo"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              <a
                href={priceline5}
                data-lightbox="gallery-todo"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              <a
                href={priceline6}
                data-lightbox="gallery-todo"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a>

              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">PriceLine.com (Clone)</h2>
                    <div className="w-more">
                      <span className="w-ctegory">
                        React | Material-UI | CSS | JavaScript | Jsonserver
                      </span>
                      {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <a href="https://github.com/devSudhir/Priceline-Clone">
                        <span className="ion-social-github"></span>
                      </a>
                      <a href="https://priceline-clone.vercel.app">
                        <span className="ion-ios-world"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
