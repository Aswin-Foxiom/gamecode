import React from "react";

function App() {
  return (
    <div>
      <div className="overlay" />
      <a href="#" className="scrollToTop">
        <i className="fas fa-angle-up" />
      </a>
      {/* ==========Overlay========== */}
      {/* ==========Header-Section========== */}
      <header className="header-section">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo">
              <a href="index.html">
                <img src="/assets/images/logo/logo.png" alt="logo" />
              </a>
            </div>
            <ul className="menu">
              <li>
                <a href="#" className="active">
                  Home
                </a>
                <ul className="submenu">
                  <li>
                    <a href="index.html" className="active">
                      Home One
                    </a>
                  </li>
                  <li>
                    <a href="index2.html">Home Two</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="community.html">Community</a>
              </li>
              <li>
                <a href="membership.html">Membership</a>
              </li>
              <li>
                <a href="shop2.html">Shop</a>
              </li>
              <li>
                <a href="#">pages</a>
                <ul className="submenu">
                  <li>
                    <a href="user-setting.html">User Panel</a>
                  </li>
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="community-single.html">Community Single</a>
                  </li>
                  <li>
                    <a href="members.html">Members</a>
                  </li>
                  <li>
                    <a href="shop3.html">Shop sidebar</a>
                  </li>
                  <li>
                    <a href="single-profile.html">Single Profile One</a>
                  </li>
                  <li>
                    <a href="single-profile2.html">Single Profile Two</a>
                  </li>
                  <li>
                    <a href="single-profile3.html">Single Profile Three</a>
                  </li>
                  <li>
                    <a href="single-shope.html">Shop Details</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                  <li>
                    <a href="login.html">Login</a>
                  </li>
                  <li>
                    <a href="register.html">Register</a>
                  </li>
                  <li>
                    <a href="404.html">404</a>
                  </li>
                  <li>
                    <a href="503.html">503</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">blog</a>
                <ul className="submenu">
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                  <li>
                    <a href="blog-details.html">Blog Single</a>
                  </li>
                </ul>
              </li>
              <li className="separator">
                <span>|</span>
              </li>
              <li>
                <div className="serch-icon">
                  <i className="fas fa-search" />
                </div>
              </li>
              <li>
                <div className="language-select">
                  <select className="select-bar">
                    <option value>EN</option>
                    <option value>IN</option>
                    <option value>BN</option>
                  </select>
                </div>
              </li>
              <li className="user-profile">
                <a href="#">
                  <img src="/assets/images/user-demo.png" alt />
                </a>
                <ul className="submenu">
                  <li>
                    <a href="#">Profile</a>
                  </li>
                  <li>
                    <a href="#">Logout</a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="header-bar d-lg-none">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </header>
      <div className="search-overlay">
        <div className="close">
          <i className="fas fa-times" />
        </div>
        <form action="#">
          <input type="text" placeholder="Write what you want.." />
        </form>
      </div>
      {/* ==========Header-Section========== */}
      {/* ==========Banner-Section========== */}
      <section className="banner-section home2">
        <img className="img3" src="/assets/images/banner/aimg3.png" alt />
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5">
              <h1 className="main-title wow fadeInLeft">Find Love Your Life</h1>
              <div className="join-now-box wow fadeInUp">
                <div className="single-option">
                  <p className="title">I am a :</p>
                  <div className="option">
                    <div className="s-input mr-3">
                      <input type="radio" name="gender" id="male" />
                      <label htmlFor="male">Male</label>
                    </div>
                    <div className="s-input">
                      <input type="radio" name="gender" id="female" />
                      <label htmlFor="female">Female</label>
                    </div>
                  </div>
                </div>
                <div className="single-option gender">
                  <p className="title">Seeking a :</p>
                  <div className="option">
                    <div className="s-input mr-4">
                      <input type="radio" name="seeking" id="males" />
                      <label htmlFor="males">Man</label>
                    </div>
                    <div className="s-input">
                      <input type="radio" name="seeking" id="females" />
                      <label htmlFor="females">Woman</label>
                    </div>
                  </div>
                </div>
                <div className="single-option age">
                  <p className="title">Ages :</p>
                  <div className="option">
                    <div className="s-input mr-3">
                      <select className="select-bar">
                        <option value>18</option>
                        <option value>20</option>
                        <option value>24</option>
                      </select>
                    </div>
                    <div className="separator">-</div>
                    <div className="s-input ml-3">
                      <select className="select-bar">
                        <option value>30</option>
                        <option value>35</option>
                        <option value>40</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="single-option last">
                  <p className="title">Country :</p>
                  <div className="option">
                    <div className="s-input mr-3">
                      <select className="select-bar">
                        <option>Select Country</option>
                        <option value>India</option>
                        <option value>Japan</option>
                        <option value>England</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="joun-button">
                  <button className="custom-button">Join Now!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==========Banner-Section========== */}
      {/* ==========Steps-Section========== */}
      <div className="steps-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="steps-section-inner wow fadeInUp">
                <div className="myCol1">
                  <h4 className="title">3 EASY STEPS</h4>
                  <p className="text">To Start a Serious Relationship</p>
                </div>
                <div className="myCol2">
                  <ul className="steps-list">
                    <li>
                      <div className="number">1</div>
                      <p className="label">Join</p>
                    </li>
                    <li>
                      <div className="number">2</div>
                      <p className="label">Search</p>
                    </li>
                    <li>
                      <div className="number">3</div>
                      <p className="label">Find Love</p>
                    </li>
                  </ul>
                </div>
                <div className="myCol3">
                  <a href="#" className="custom-button">
                    Join Now!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==========Steps-Section========== */}
      {/* ==========Start-Flirting-Section========== */}
      <section className="flirting-section home2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content">
                <div className="section-header">
                  <h6 className="sub-title extra-padding wow fadeInUp">
                    Meet New People Today!
                  </h6>
                  <h2 className="title extra-padding wow fadeInUp">
                    Start Flirting
                  </h2>
                  <p>
                    In our modern day and age dating apps have become an
                    integral part of our lives. They allow you to check the
                    profile of singles living near you, to chat with them, to
                    meet them and maybe to fall in love.
                  </p>
                  <br />
                  <p>
                    If you’re searching for a simple dating app with free
                    features allowing to meet singles, you’re in good hands with
                    Pairko. With Pairko you get all you need from a mobile
                    dating app, which presents you thousands of users through
                    your smartphone in a very pleasant experience.
                  </p>
                </div>
                <a href="#" className="custom-button">
                  Seek Your Partner
                </a>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="img">
                <img
                  className="bg-shape"
                  src="/assets/images/flirting/circle.png"
                  alt
                />
                <img src="/assets/images/flirting/illutration.png" alt />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==========Start-Flirting-Section========== */}
      {/* ==========Member-slider-Section========== */}
      <section className="member-slider-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="content">
                <div className="section-header">
                  <h6 className="sub-title extra-padding wow fadeInUp">
                    Latest Registered
                  </h6>
                  <h2 className="title wow fadeInUp">Members</h2>
                  <p className="text">
                    if you have been looking for the someone special of your
                    life for long, then your search ends here
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="registered-slider2 owl-carousel">
                <div className="single-slider">
                  <div className="img">
                    <img src="/assets/images/registered/p1.png" alt />
                  </div>
                  <div className="inner-content">
                    <h4 className="name">Dana Miles</h4>
                    <p>25 Years Old</p>
                  </div>
                </div>
                <div className="single-slider">
                  <div className="img">
                    <img src="/assets/images/registered/p2.png" alt />
                  </div>
                  <div className="inner-content">
                    <h4 className="name">Dana Miles</h4>
                    <p>25 Years Old</p>
                  </div>
                </div>
                <div className="single-slider">
                  <div className="img">
                    <img src="/assets/images/registered/p3.png" alt />
                  </div>
                  <div className="inner-content">
                    <h4 className="name">Dana Miles</h4>
                    <p>25 Years Old</p>
                  </div>
                </div>
                <div className="single-slider">
                  <div className="img">
                    <img src="/assets/images/registered/p4.png" alt />
                  </div>
                  <div className="inner-content">
                    <h4 className="name">Dana Miles</h4>
                    <p>25 Years Old</p>
                  </div>
                </div>
                <div className="single-slider">
                  <div className="img">
                    <img src="/assets/images/registered/p5.png" alt />
                  </div>
                  <div className="inner-content">
                    <h4 className="name">Dana Miles</h4>
                    <p>25 Years Old</p>
                  </div>
                </div>
                <div className="single-slider">
                  <div className="img">
                    <img src="/assets/images/registered/p1.png" alt />
                  </div>
                  <div className="inner-content">
                    <h4 className="name">Dana Miles</h4>
                    <p>25 Years Old</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==========Member-slider-Section========== */}
      {/* ==========Features-Section========== */}
      <section className="feature-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="content">
                <div className="section-header">
                  <h6 className="sub-title extra-padding wow fadeInUp">
                    An Exhaustive List Of
                  </h6>
                  <h2 className="title extra-padding wow fadeInUp">
                    Amazing Features
                  </h2>
                  <p className="text wow fadeInUp">
                    To find meaningful connections, dates, and life partners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-content-area">
          <div className="left-image">
            <div className="offer">
              <div className="offer-inner-content">
                <span className="fs">START NOW FOR</span>
                <h2>FREE</h2>
                <span className="ss">7 DAY TRIAL</span>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-end">
              <div className="col-lg-5">
                <div className="feature-lists">
                  <div
                    className="single-feature-list wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="icon">
                      <img src="/assets/images/feature/i1.png" alt />
                    </div>
                    <div className="content">
                      <h4 className="title">Simple to use</h4>
                      <p>
                        Simple steps to follow to have a matching connection.
                      </p>
                    </div>
                  </div>
                  <div
                    className="single-feature-list wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <div className="icon">
                      <img src="/assets/images/feature/i2.png" alt />
                    </div>
                    <div className="content">
                      <h4 className="title">Smart Matching</h4>
                      <p>
                        Simple steps to follow to have a matching connection.
                      </p>
                    </div>
                  </div>
                  <div
                    className="single-feature-list wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="icon">
                      <img src="/assets/images/feature/i3.png" alt />
                    </div>
                    <div className="content">
                      <h4 className="title">Filter very fast</h4>
                      <p>
                        Simple steps to follow to have a matching connection.
                      </p>
                    </div>
                  </div>
                  <div
                    className="single-feature-list wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <div className="icon">
                      <img src="/assets/images/feature/i4.png" alt />
                    </div>
                    <div className="content">
                      <h4 className="title">Cool community</h4>
                      <p>
                        Simple steps to follow to have a matching connection.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==========Features-Section========== */}
      {/* ==========Join-now-Section========== */}
      <section className="join-now-section">
        <img className="shape1" src="/assets/images/join/heartshape.png" alt />
        <img className="shape2" src="/assets/images/join/img.png" alt />
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content">
                <div className="section-header white-color">
                  <h2 className="title wow fadeInUp">
                    Best Ways to Find Your True Sole Mate
                  </h2>
                </div>
                <a href="#" className="custom-button">
                  Join Now !
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==========Join-now-Section========== */}
      {/* ==========Community-Section========== */}
      <section className="community-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="content">
                <div className="section-header">
                  <h6 className="sub-title wow fadeInUp">Love in faith</h6>
                  <h2 className="title wow fadeInUp">Success Stories</h2>
                  <p className="text wow fadeInUp">
                    Aliquam a neque tortor. Donec iaculis auctor turpis.
                    Eporttitor mattis ullamcorper urna. Cras quis elementum
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div
                className="single-community-box wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="img">
                  <img src="/assets/images/sucess/img1.jpg" alt />
                </div>
                <div className="content">
                  <p className="date">6 days ago</p>
                  <h4 className="title">Philosophy of love</h4>
                  <p className="text">
                    Love for one another and love for yourself is priceless.
                  </p>
                </div>
                <div className="box-footer">
                  <div className="left">
                    <i className="fas fa-globe-americas" /> Public
                  </div>
                  <div className="right">
                    <i className="fas fa-users" /> 100
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="single-community-box wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="img">
                  <img src="/assets/images/sucess/img2.png" alt />
                </div>
                <div className="content">
                  <p className="date">6 days ago</p>
                  <h4 className="title">Philosophy of love</h4>
                  <p className="text">
                    Love for one another and love for yourself is priceless.
                  </p>
                </div>
                <div className="box-footer">
                  <div className="left">
                    <i className="fas fa-globe-americas" /> Public
                  </div>
                  <div className="right">
                    <i className="fas fa-users" /> 100
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="single-community-box wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="img">
                  <img src="/assets/images/sucess/img3.png" alt />
                </div>
                <div className="content">
                  <p className="date">6 days ago</p>
                  <h4 className="title">Philosophy of love</h4>
                  <p className="text">
                    Love for one another and love for yourself is priceless.
                  </p>
                </div>
                <div className="box-footer">
                  <div className="left">
                    <i className="fas fa-globe-americas" /> Public
                  </div>
                  <div className="right">
                    <i className="fas fa-users" /> 100
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==========Community-Sectionn========== */}
      {/* ==========Home2-Statistics-Section========== */}
      <section className="home2-statistics-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="content">
                <div className="section-header">
                  <h2 className="title extra-padding wow fadeInUp">
                    455,326,234
                  </h2>
                  <h6 className="sub-title extra-padding wow fadeInUp">
                    People joined already!
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="statistics-wrapper">
            <div className="row mb--20">
              <div className="col-lg-3 col-md-6">
                <div className="stat-item wow fadeInUp" data-wow-delay="0.1s">
                  <div className="icon">
                    <img src="/assets/images/statistics/si4.png" alt />
                  </div>
                  <div className="stat-content">
                    <h3 className="counter-item">
                      <span className=" odometer" data-odometer-final={350} />M
                    </h3>
                    <span className="info">Messages sent per day</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="stat-item wow fadeInUp" data-wow-delay="0.2s">
                  <div className="icon">
                    <img src="/assets/images/statistics/si5.png" alt />
                  </div>
                  <div className="stat-content">
                    <h3 className="counter-item">
                      <span className=" odometer" data-odometer-final={447} />M
                    </h3>
                    <span className="info">Registered users worldwide</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="stat-item wow fadeInUp" data-wow-delay="0.3s">
                  <div className="icon">
                    <img src="/assets/images/statistics/si6.png" alt />
                  </div>
                  <div className="stat-content">
                    <h3 className="counter-item">
                      <span className=" odometer" data-odometer-final={60} />M
                    </h3>
                    <span className="info">Monthly active users</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="stat-item wow fadeInUp" data-wow-delay="0.4s">
                  <div className="icon">
                    <img src="/assets/images/statistics/si7.png" alt />
                  </div>
                  <div className="stat-content">
                    <h3 className="counter-item">
                      <span className=" odometer" data-odometer-final={300} />K
                    </h3>
                    <span className="info">New daily sign ups</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==========Home2-Statistics-Section========== */}
      {/* ==========home-2-Success-Stories-Section========== */}
      <section className="home2-sucess-stories-section">
        <div className="top-content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-header white-color">
                  <h6 className="sub-title wow fadeInUp">Love in faith</h6>
                  <h2 className="title wow fadeInUp">Success Stories</h2>
                  <p className="text wow fadeInUp">
                    Aliquam a neque tortor. Donec iaculis auctor turpis.
                    Eporttitor mattis ullamcorper urna. Cras quis elementum
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container bottom-content">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div
                className="single-story-box wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="img">
                  <img src="/assets/images/sucess/img1.jpg" alt />
                </div>
                <div className="content">
                  <div className="author">
                    <img src="/assets/images/sucess/p1.png" alt />
                    <span />
                  </div>
                  <h4 className="title">
                    Love horoscope for Cancer There will be surprises...
                  </h4>
                  <p className="date">December 10, 2021</p>
                </div>
                <div className="box-footer">
                  <div className="left">
                    <ul className="box-social-links">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="right">
                    <a href="#">
                      Read More
                      <i className="fas fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="single-story-box wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="img">
                  <img src="/assets/images/sucess/img2.png" alt />
                </div>
                <div className="content">
                  <div className="author">
                    <img src="/assets/images/sucess/p2.png" alt />
                    <span />
                  </div>
                  <h4 className="title">
                    ‘love at first sight’ is all about initial attraction...
                  </h4>
                  <p className="date">December 11, 2021</p>
                </div>
                <div className="box-footer">
                  <div className="left">
                    <ul className="box-social-links">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="right">
                    <a href="#">
                      Read More
                      <i className="fas fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="single-story-box wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="img">
                  <img src="/assets/images/sucess/img3.png" alt />
                </div>
                <div className="content">
                  <div className="author">
                    <img src="/assets/images/sucess/p3.png" alt />
                    <span />
                  </div>
                  <h4 className="title">
                    What women actually want to feel on their...
                  </h4>
                  <p className="date">December 14, 2021</p>
                </div>
                <div className="box-footer">
                  <div className="left">
                    <ul className="box-social-links">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="right">
                    <a href="#">
                      Read More
                      <i className="fas fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==========home-2-Success-Stories-Section========== */}
      {/* ==========Update-profile-Section========== */}
      <section className="update-profile-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 align-self-center">
              <div className="content">
                <div className="section-header">
                  <h6 className="sub-title extra-padding wow fadeInUp">
                    Upgrade Your Profile
                  </h6>
                  <h2 className="title extra-padding wow fadeInUp">
                    MemeberShip Plan
                  </h2>
                  <p>
                    Choose from one of our membership levels and unlock features
                    you need.Benefit from Peyamba at its maximum capacity by
                    choosing the plan that suits you!
                  </p>
                </div>
                <a href="#" className="custom-button">
                  Membership details
                </a>
              </div>
            </div>
            <div className="col-lg-7 align-self-center">
              <div className="img">
                <img src="/assets/images/up-profile/right-img.png" alt />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==========Update-profile-Section========== */}
      {/* ==========Newslater-Section========== */}
      <footer className="footer-section">
        <img className="shape1" src="/assets/images/footer/f-shape.png" alt />
        <img className="shape2" src="/assets/images/footer/flower01.png" alt />
        <img
          className="shape3"
          src="/assets/images/footer/right-shape.png"
          alt
        />
        <div className="newslater-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8">
                <div className="newslater-container">
                  <div className="newslater-wrapper">
                    <div className="icon">
                      <img src="/assets/images/footer/n-icon.png" alt />
                    </div>
                    <p className="text">
                      Sign up to recieve a monthly email on the latest news!
                    </p>
                    <form className="newslater-form">
                      <input type="text" placeholder="Your Email Address" />
                      <button type="submit">
                        <i className="fab fa-telegram-plane" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="footer-links">
            <div className="row">
              <div className="col-lg-12">
                <hr className="hr" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="link-wrapper one">
                  <h4 className="f-l-title">Our Information</h4>
                  <ul className="f-solial-links">
                    <li>
                      <a href="#">
                        <i className="fas fa-angle-double-right" /> About Us
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-angle-double-right" /> Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-angle-double-right" /> Customer
                        Reviews
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-angle-double-right" /> Success
                        Stories
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-angle-double-right" /> Business
                        License
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="link-wrapper two">
                  <h4 className="f-l-title">My Account</h4>
                  <ul className="f-solial-links">
                    <li>
                      <a href="#">
                        <i className="fas fa-angle-double-right" /> Manage
                        Account
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-angle-double-right" /> Safety Tips
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-angle-double-right" /> Account
                        Varification
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-angle-double-right" /> Safety &amp;
                        Security
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-angle-double-right" /> Membership
                        Level
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="link-wrapper three">
                  <h4 className="f-l-title">help center</h4>
                  <ul className="f-solial-links">
                    <li>
                      <a href="#">
                        <i className="fas fa-angle-double-right" /> Help centre
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-angle-double-right" /> FAQ
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-angle-double-right" />
                        Quick Start Guide
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-angle-double-right" />
                        Tutorials
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-angle-double-right" />
                        Associate Blog
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="link-wrapper four">
                  <h4 className="f-l-title">legal</h4>
                  <ul className="f-solial-links">
                    <li>
                      <a href="#">
                        <i className="fas fa-angle-double-right" /> Privacy
                        policy
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-angle-double-right" /> End User
                        Agreements
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-angle-double-right" /> Refund
                        Policy
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-angle-double-right" /> Cookie
                        policy
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-angle-double-right" /> Report abuse
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-wrapper">
            <div className="row">
              <div className="col-lg-12">
                <hr className="hr2" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="copyr-text">
                  <span>Copyright © 2021.All Rights Reserved By</span>
                  <a href="#">Peyamba</a>
                </div>
              </div>
              <div className="col-lg-6">
                <ul className="footer-social-links">
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-dribbble" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
