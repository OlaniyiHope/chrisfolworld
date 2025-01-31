import React from "react";

import parkwell from "./parklogo.png";
import fun from "./fun.jpeg";
import free from "./free.jpeg";
import lagos from "./lagos.png";
import Footer from "./Footer";
import Swiperss from "./Swiperss";
import NewSwipe from "./NewSwipe";

const Home = () => {
  return (
    <>
      <body>
        <div class="th-hero-wrapper hero-1" id="hero">
          <div
            class="swiper th-slider hero-slider1"
            id="heroSlide1"
            data-slider-options='{"effect":"fade", "autoHeight": "true"}'
          >
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div
                  class="hero-inner"
                  style={{
                    backgroundImage: "url('assets/img/hero/f7.JPG')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  data-overlay="black4"
                  data-opacity="5"
                >
                  <div class="hero-bg-shape1-1">
                    <img src="assets/img/hero/hero-bg-shape1-1.png" alt="img" />
                  </div>
                  <div class="container">
                    <div class="row justify-content-center">
                      <div class="col-xl-12">
                        <div class="hero-style1 text-center">
                          <span
                            class="sub-title justify-content-center"
                            data-ani="slideinup"
                            data-ani-delay="0.2s"
                          >
                            CHRISFOL FOUNDATION
                          </span>
                          <h1 class="hero-title text-white">
                            <span
                              class="title1"
                              data-ani="slideinup"
                              data-ani-delay="0.4s"
                            >
                              Inspiring individuals to
                            </span>
                            <span
                              class="title1"
                              data-ani="slideinup"
                              data-ani-delay="0.4s"
                            >
                              achieve greatness
                            </span>
                          </h1>
                          <div
                            class="btn-wrap justify-content-center"
                            data-ani="slideinup"
                            data-ani-delay="0.7s"
                          >
                            <a href="contact.html" class="th-btn style4">
                              Donation
                              <i class="fas fa-arrow-up-right ms-2"></i>
                            </a>
                            <a
                              href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                              class="th-btn style5 popup-video"
                            >
                              <i class="fas fa-play me-2"></i> Projects
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div
                  class="hero-inner"
                  data-bg-src="assets/img/hero/hero_bg_1_2.jpg"
                  data-overlay="black4"
                  data-opacity="5"
                >
                  <div class="hero-bg-shape1-1">
                    <img src="assets/img/hero/hero-bg-shape1-1.png" alt="img" />
                  </div>
                  <div class="container">
                    <div class="row justify-content-center">
                      <div class="col-xl-12">
                        <div class="hero-style1 text-center">
                          <span
                            class="sub-title justify-content-center"
                            data-ani="slideinup"
                            data-ani-delay="0.2s"
                          >
                            Welcome to Donat Charity
                          </span>
                          <h1 class="hero-title text-white">
                            <span
                              class="title1"
                              data-ani="slideinup"
                              data-ani-delay="0.4s"
                            >
                              Every Donation Counts{" "}
                            </span>
                            <span
                              class="title1"
                              data-ani="slideinup"
                              data-ani-delay="0.4s"
                            >
                              Every Heart Matters{" "}
                            </span>
                          </h1>
                          <div
                            class="btn-wrap justify-content-center"
                            data-ani="slideinup"
                            data-ani-delay="0.7s"
                          >
                            <a href="contact.html" class="th-btn style4">
                              Discover Now{" "}
                              <i class="fas fa-arrow-up-right ms-2"></i>
                            </a>
                            <a
                              href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                              class="th-btn style5 popup-video"
                            >
                              <i class="fas fa-play me-2"></i> Watch Video
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section
          class="overflow-hidden space"
          id="service-sec"
          data-bg-src="assets/img/bg/gray-bg1.png"
          data-overlay="gray"
          data-opacity="6"
        >
          <div
            class="shape-mockup service-bg-shape1-1 d-xxl-inline-block d-none"
            data-top="15%"
            data-left="0"
          >
            <div class="color-masking">
              <div
                class="masking-src"
                data-mask-src="assets/img/shape/hand-shape1.png"
              ></div>
              <img src="assets/img/shape/hand-shape1.png" alt="img" />
            </div>
          </div>
          <div
            class="shape-mockup service-bg-shape1-2 d-xxl-inline-block d-none"
            data-top="35%"
            data-left="0"
          >
            <div class="color-masking">
              <div
                class="masking-src"
                data-mask-src="assets/img/shape/hand-shape2.png"
              ></div>
              <img src="assets/img/shape/hand-shape2.png" alt="img" />
            </div>
          </div>
          <div class="service-bg-shape1-3 d-xxl-inline-block d-none"></div>
          <div class="service-bg-shape1-4 d-xxl-inline-block d-none"></div>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-7">
                <div class="title-area text-center">
                  <span class="sub-title">Our Services</span>
                  <h2 class="sec-title">
                    Our services includes, but are not limited:
                  </h2>
                </div>
              </div>
            </div>
            <div class="row gy-30 gx-30 justify-content-center">
              <div class="col-xl-4 col-md-6">
                <div class="service-card">
                  <div class="box-thumb">
                    <img
                      src="assets/img/service/f12.JPG"
                      alt="img"
                      style={{ height: "50pxx" }}
                    />
                  </div>
                  <div class="box-icon">
                    <img
                      src="assets/img/icon/service-icon/service-card-icon1-2.svg"
                      alt="Icon"
                    />
                  </div>
                  <div class="box-content">
                    <h3 class="box-title">
                      <a href="about.html">Education Initiatives:</a>
                    </h3>
                    <p class="box-text">
                      <ul>
                        <li>
                          Providing access to quality education for
                          underprivileged children
                        </li>
                        <li> Offering scholarships and educational grants</li>
                        <li>
                          Supporting schools and educational institutions in
                          low-income areas
                        </li>
                      </ul>
                    </p>
                    <a href="about.html" class="th-btn">
                      Learn More<i class="fas fa-arrow-up-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-6">
                <div class="service-card">
                  <div class="box-thumb">
                    <img src="assets/img/service/f7.JPG" alt="img" />
                  </div>
                  <div class="box-icon">
                    <img
                      src="assets/img/icon/service-icon/service-card-icon1-1.svg"
                      alt="Icon"
                    />
                  </div>
                  <div class="box-content">
                    <h3 class="box-title">
                      <a href="about.html">Health Programs:</a>
                    </h3>
                    <p class="box-text">
                      <ul>
                        <li>
                          Offering healthcare services and medical assistance
                        </li>
                        <li>Conducting health awareness campaigns</li>
                        <li>
                          {" "}
                          Providing access to clean water and sanitation
                          facilities
                        </li>
                      </ul>
                    </p>
                    <a href="about.html" class="th-btn">
                      Learn More<i class="fas fa-arrow-up-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-6">
                <div class="service-card">
                  <div class="box-thumb">
                    <img src="assets/img/service/f13.JPG" alt="img" />
                  </div>
                  <div class="box-icon">
                    <img
                      src="assets/img/icon/service-icon/service-card-icon1-3.svg"
                      alt="Icon"
                    />
                  </div>
                  <div class="box-content">
                    <h3 class="box-title">
                      <a href="about.html">Livelihood Support:</a>
                    </h3>
                    <p class="box-text">
                      <ul>
                        <li>
                          Empowering individuals with skills training and
                          vocational programs
                        </li>
                        <li>
                          Supporting small businesses and entrepreneurial
                          ventures
                        </li>
                        <li>
                          Creating employment opportunities for marginalized
                          communities
                        </li>
                      </ul>
                    </p>
                    <a href="about.html" class="th-btn">
                      Learn More<i class="fas fa-arrow-up-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div class="overflow-hidden space" id="about-sec">
          <div
            class="shape-mockup about-bg-shape1-1 jump-reverse"
            data-top="10%"
            data-right="5%"
          >
            <img src="assets/img/shape/heart-shape1.png" alt="shape" />
          </div>
          <div class="container">
            <div class="row gy-4 align-items-center">
              <div class="col-xl-7">
                <div class="img-box1">
                  <div class="img1" data-mask-src="assets/img/normal/FOLU.png">
                    <img src="assets/img/normal/FOLU.png" alt="About" />
                  </div>
                  <div class="about-shape1-1 jump">
                    <img src="assets/img/shape/about_shape1_1.png" alt="img" />
                  </div>
                </div>
              </div>
              <div class="col-xl-5">
                <div class="about-wrap1">
                  <div class="title-area mb-30">
                    <span class="sub-title before-none">
                      About Chrisfolworld
                    </span>
                    <h2 class="sec-title">
                      We Believe that We can Save More Life's with you
                    </h2>
                    <p class="">
                      At Chrisfolworld Foundation, we are committed to making a
                      positive impact on communities around the world. Our
                      services aim to inspire, support and empower individuals
                      in need through various programs and initiatives.
                    </p>
                  </div>
                  {/*} <div class="checklist style2 list-two-column">
                    <ul>
                      <li>Charity For Foods</li>
                      <li data-theme-color="var(--theme-color2)">
                        Charity For Water
                      </li>
                      <li data-theme-color="#FF5528">Charity For Education</li>
                      <li data-theme-color="#122F2A">Charity For Medical</li>
                    </ul>
                  </div>*/}
                  <div class="btn-wrap mt-40">
                    <a href="/about" class="th-btn">
                      About More<i class="fas fa-arrow-up-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*}  <div class="cta-area-1">
          <div
            class="container z-index-common "
            data-pos-for="#donation-sec"
            data-sec-pos="bottom-half"
          >
            <div class="row gy-4">
              <div class="col-lg-6">
                <div class="cta-card" data-bg-src="assets/img/bg/cta-bg1-1.jpg">
                  <div
                    class="shape-mockup cta-card-bg-shape"
                    data-bottom="0"
                    data-right="0"
                    data-mask-src="assets/img/shape/cta_shape1_1.png"
                  >
                    <img src="assets/img/shape/cta_shape1_1.png" alt="img" />
                  </div>
                  <h3 class="box-title">Become a volunteer</h3>
                  <p class="box-text">
                    Provide resources such as reports, infographics, and
                    educational materials related to the charity's cause. Use a
                    clear and intuitive navigation menu to help users find
                    information quickly.
                  </p>
                  <a href="contact.html" class="th-btn style5">
                    Learn More <i class="fas fa-arrow-up-right ms-2"></i>
                  </a>
                </div>
              </div>
              <div class="col-lg-6">
                <div
                  class="cta-card style2"
                  data-bg-src="assets/img/bg/cta-bg1-2.jpg"
                >
                  <div
                    class="shape-mockup cta-card-bg-shape"
                    data-bottom="0"
                    data-left="0"
                    data-mask-src="assets/img/shape/cta_shape1_1.png"
                  >
                    <img src="assets/img/shape/cta_shape1_1.png" alt="img" />
                  </div>
                  <h3 class="box-title">Join Us volunteer</h3>
                  <p class="box-text">
                    Provide resources such as reports, infographics, and
                    educational materials related to the charity's cause. Use a
                    clear and intuitive navigation menu to help users find
                    information quickly.
                  </p>
                  <a href="contact.html" class="th-btn style5">
                    Join Us Now <i class="fas fa-arrow-up-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>*/}
        <section class="space" id="donation-sec">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <div class="title-area text-center">
                  <span class="sub-title before-none after-none">
                    <i class="far fa-heart text-theme"></i> Lets Start Donating
                  </span>
                  <h2 class="sec-title">
                    See Your Impact: Transparent Donation Causes
                  </h2>
                </div>
              </div>
            </div>
            <div class="row gy-30">
              <div class="col-xl-6">
                <div class="donation-card style3">
                  <div class="box-thumb">
                    <img
                      src="assets/img/donation/donation2-1.png"
                      alt="image"
                    />
                    <div class="donation-card-tag">85%</div>
                    <div
                      class="donation-card-shape"
                      data-mask-src="assets/img/donation/donation-card-shape2-1.png"
                    ></div>
                  </div>
                  <div class="box-content">
                    <h3 class="box-title">
                      <a href="blog-details.html">
                        Your Little Help Can Heal Their Helps
                      </a>
                    </h3>
                    <p>
                      Join our community of dedicated supporter by becoming
                      member. Enjoy exclusive benefit.
                    </p>
                    <div class="donation-card_progress-wrap">
                      <div class="progress">
                        <div
                          class="progress-bar"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                      <div class="donation-card_progress-content">
                        <span class="donation-card_raise">
                          Raised{" "}
                          <span class="donation-card_raise-number">
                            $45,000.00
                          </span>
                        </span>
                        <span class="donation-card_goal">
                          Goal{" "}
                          <span class="donation-card_goal-number">
                            $60,000.00
                          </span>
                        </span>
                      </div>
                    </div>
                    <a href="/donation-details" class="th-btn style6">
                      Donate Now <i class="fas fa-arrow-up-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xl-6">
                <div class="donation-card style3">
                  <div class="box-thumb">
                    <img
                      src="assets/img/donation/donation2-1.png"
                      alt="image"
                    />
                    <div class="donation-card-tag">85%</div>
                    <div
                      class="donation-card-shape"
                      data-mask-src="assets/img/donation/donation-card-shape2-1.png"
                    ></div>
                  </div>
                  <div class="box-content">
                    <h3 class="box-title">
                      <a href="blog-details.html">
                        Your Little Help Can Heal Their Helps
                      </a>
                    </h3>
                    <p>
                      Join our community of dedicated supporter by becoming
                      member. Enjoy exclusive benefit.
                    </p>
                    <div class="donation-card_progress-wrap">
                      <div class="progress">
                        <div
                          class="progress-bar"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                      <div class="donation-card_progress-content">
                        <span class="donation-card_raise">
                          Raised{" "}
                          <span class="donation-card_raise-number">
                            $45,000.00
                          </span>
                        </span>
                        <span class="donation-card_goal">
                          Goal{" "}
                          <span class="donation-card_goal-number">
                            $60,000.00
                          </span>
                        </span>
                      </div>
                    </div>
                    <a href="/donation-details" class="th-btn style6">
                      Donate Now <i class="fas fa-arrow-up-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          class="cta-area-2 space overflow-hidden bg-theme-dark"
          id="contact-sec"
        >
          <div
            class="cta-bg-shape2-1 shape-mockup jump d-lg-block d-none"
            data-top="-22%"
            data-left="2%"
          >
            <img src="assets/img/shape/cta_shape2_1.png" alt="img" />
          </div>
          <div
            class="cta-bg-shape2-2 shape-mockup jump-reverse d-lg-block d-none"
            data-top="-12%"
            data-right="-5%"
          >
            <img src="assets/img/shape/cta_shape2_2.png" alt="img" />
          </div>
          <div
            class="cta-bg-shape2-3 shape-mockup jump-reverse d-md-block d-none"
            data-bottom="5%"
            data-left="0"
          >
            <img src="assets/img/shape/cta_shape2_3.png" alt="img" />
          </div>
          <div
            class="cta-bg-shape2-4 shape-mockup jump d-md-block d-none"
            data-bottom="5%"
            data-right="0"
          >
            <img src="assets/img/shape/cta_shape2_4.png" alt="img" />
          </div>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-7">
                <div class="title-area text-center mb-0">
                  <h2 class="sec-title text-white">
                    Our Door Are Always Open to More People Who Want to Support
                    individuals
                  </h2>
                  <a href="contact.html" class="th-btn style5 mt-40">
                    Get Involved <i class="fas fa-arrow-up-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*} <div class="story-area-1 overflow-hidden space">
          <div class="container">
            <div class="row gy-40 gx-80 justify-content-between flex-row-reverse align-items-center">
              <div class="col-xl-7">
                <div class="story-img-box1">
                  <div class="img1">
                    <img src="assets/img/normal/story_1_1.png" alt="img" />
                  </div>
                  <div class="story-shape1-1 jump-reverse">
                    <img src="assets/img/shape/story_shape1_1.png" alt="img" />
                  </div>
                  <div class="story-card movingX">
                    <h5 class="box-title">Adam Cruz</h5>
                    <p class="box-text">
                      Our success stories highlight the real life impact of your
                      donations & the resilience of those we help. These
                      narratives showcase the power of compassion.
                    </p>
                    <div
                      class="quote-icon"
                      data-mask-src="assets/img/icon/quote.svg"
                    ></div>
                  </div>
                  <div class="year-counter">
                    <p class="year-counter_text">
                      Years of <span>Experience</span>
                    </p>
                    <div class="year-counter_number">
                      <span class="counter-number">16</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-5">
                <div class="story-wrap1">
                  <div class="title-area mb-0">
                    <span class="sub-title before-none">Success Story</span>
                    <h2 class="sec-title">
                      We Help Fellow Nonprofits Access the Funding Tools,
                      Training
                    </h2>
                    <p class="mt-30">
                      Our secure online donation platform allows you to make
                      contributions quickly and safely. Choose from various
                      payment methods and set up one-time.exactly.
                    </p>
                    <div class="btn-wrap mt-35">
                      <a href="about.html" class="th-btn style-border">
                        Our Success Story{" "}
                        <i class="fas fa-arrow-up-right ms-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>*/}
        {/*}  <section class="space-bottom team-area-1">
          <div
            class="shape-mockup team-bg-shape1-1 spin d-xxl-block d-none"
            data-top="0%"
            data-right="3%"
          >
            <img src="assets/img/shape/hand-group-shape1.png" alt="img" />
          </div>
          <div class="container">
            <div class="title-area text-center">
              <span class="sub-title">Our Volunteer</span>
              <h2 class="sec-title">Meet The Optimistic Volunteer</h2>
            </div>
            <div class="slider-area">
              <div
                class="swiper th-slider has-shadow team-slider1"
                id="teamSlider1"
                data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"2"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"3"},"1200":{"slidesPerView":"4"}}}'
              >
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="th-team team-card">
                      <div class="img-wrap">
                        <div class="team-img">
                          <img src="assets/img/team/team_1_1.png" alt="Team" />
                        </div>
                        <div class="team-social-hover">
                          <a href="#" class="team-social-hover_btn">
                            <i class="far fa-plus"></i>
                          </a>
                          <div class="th-social">
                            <a target="_blank" href="https://twitter.com/">
                              <i class="fab fa-twitter"></i>
                            </a>
                            <a target="_blank" href="https://facebook.com/">
                              <i class="fab fa-facebook-f"></i>
                            </a>
                            <a target="_blank" href="https://instagram.com/">
                              <i class="fab fa-instagram"></i>
                            </a>
                            <a target="_blank" href="https://behance.com/">
                              <i class="fab fa-behance"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="team-card-content">
                        <h3 class="box-title">
                          <a href="team-details.html">Michel Connor</a>
                        </h3>
                        <span class="team-desig">Volunteer</span>
                      </div>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div class="th-team team-card">
                      <div class="img-wrap">
                        <div class="team-img">
                          <img src="assets/img/team/team_1_2.png" alt="Team" />
                        </div>
                        <div class="team-social-hover">
                          <a href="#" class="team-social-hover_btn">
                            <i class="far fa-plus"></i>
                          </a>
                          <div class="th-social">
                            <a target="_blank" href="https://twitter.com/">
                              <i class="fab fa-twitter"></i>
                            </a>
                            <a target="_blank" href="https://facebook.com/">
                              <i class="fab fa-facebook-f"></i>
                            </a>
                            <a target="_blank" href="https://instagram.com/">
                              <i class="fab fa-instagram"></i>
                            </a>
                            <a target="_blank" href="https://behance.com/">
                              <i class="fab fa-behance"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="team-card-content">
                        <h3 class="box-title">
                          <a href="team-details.html">Joseph Alexander</a>
                        </h3>
                        <span class="team-desig">Volunteer</span>
                      </div>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div class="th-team team-card">
                      <div class="img-wrap">
                        <div class="team-img">
                          <img src="assets/img/team/team_1_3.png" alt="Team" />
                        </div>
                        <div class="team-social-hover">
                          <a href="#" class="team-social-hover_btn">
                            <i class="far fa-plus"></i>
                          </a>
                          <div class="th-social">
                            <a target="_blank" href="https://twitter.com/">
                              <i class="fab fa-twitter"></i>
                            </a>
                            <a target="_blank" href="https://facebook.com/">
                              <i class="fab fa-facebook-f"></i>
                            </a>
                            <a target="_blank" href="https://instagram.com/">
                              <i class="fab fa-instagram"></i>
                            </a>
                            <a target="_blank" href="https://behance.com/">
                              <i class="fab fa-behance"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="team-card-content">
                        <h3 class="box-title">
                          <a href="team-details.html">Jessica Lauren</a>
                        </h3>
                        <span class="team-desig">Volunteer</span>
                      </div>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div class="th-team team-card">
                      <div class="img-wrap">
                        <div class="team-img">
                          <img src="assets/img/team/team_1_4.png" alt="Team" />
                        </div>
                        <div class="team-social-hover">
                          <a href="#" class="team-social-hover_btn">
                            <i class="far fa-plus"></i>
                          </a>
                          <div class="th-social">
                            <a target="_blank" href="https://twitter.com/">
                              <i class="fab fa-twitter"></i>
                            </a>
                            <a target="_blank" href="https://facebook.com/">
                              <i class="fab fa-facebook-f"></i>
                            </a>
                            <a target="_blank" href="https://instagram.com/">
                              <i class="fab fa-instagram"></i>
                            </a>
                            <a target="_blank" href="https://behance.com/">
                              <i class="fab fa-behance"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="team-card-content">
                        <h3 class="box-title">
                          <a href="team-details.html">Daniel Thomas</a>
                        </h3>
                        <span class="team-desig">Volunteer</span>
                      </div>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div class="th-team team-card">
                      <div class="img-wrap">
                        <div class="team-img">
                          <img src="assets/img/team/team_1_1.png" alt="Team" />
                        </div>
                        <div class="team-social-hover">
                          <a href="#" class="team-social-hover_btn">
                            <i class="far fa-plus"></i>
                          </a>
                          <div class="th-social">
                            <a target="_blank" href="https://twitter.com/">
                              <i class="fab fa-twitter"></i>
                            </a>
                            <a target="_blank" href="https://facebook.com/">
                              <i class="fab fa-facebook-f"></i>
                            </a>
                            <a target="_blank" href="https://instagram.com/">
                              <i class="fab fa-instagram"></i>
                            </a>
                            <a target="_blank" href="https://behance.com/">
                              <i class="fab fa-behance"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="team-card-content">
                        <h3 class="box-title">
                          <a href="team-details.html">Michel Connor</a>
                        </h3>
                        <span class="team-desig">Volunteer</span>
                      </div>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div class="th-team team-card">
                      <div class="img-wrap">
                        <div class="team-img">
                          <img src="assets/img/team/team_1_2.png" alt="Team" />
                        </div>
                        <div class="team-social-hover">
                          <a href="#" class="team-social-hover_btn">
                            <i class="far fa-plus"></i>
                          </a>
                          <div class="th-social">
                            <a target="_blank" href="https://twitter.com/">
                              <i class="fab fa-twitter"></i>
                            </a>
                            <a target="_blank" href="https://facebook.com/">
                              <i class="fab fa-facebook-f"></i>
                            </a>
                            <a target="_blank" href="https://instagram.com/">
                              <i class="fab fa-instagram"></i>
                            </a>
                            <a target="_blank" href="https://behance.com/">
                              <i class="fab fa-behance"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="team-card-content">
                        <h3 class="box-title">
                          <a href="team-details.html">Joseph Alexander</a>
                        </h3>
                        <span class="team-desig">Volunteer</span>
                      </div>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div class="th-team team-card">
                      <div class="img-wrap">
                        <div class="team-img">
                          <img src="assets/img/team/team_1_3.png" alt="Team" />
                        </div>
                        <div class="team-social-hover">
                          <a href="#" class="team-social-hover_btn">
                            <i class="far fa-plus"></i>
                          </a>
                          <div class="th-social">
                            <a target="_blank" href="https://twitter.com/">
                              <i class="fab fa-twitter"></i>
                            </a>
                            <a target="_blank" href="https://facebook.com/">
                              <i class="fab fa-facebook-f"></i>
                            </a>
                            <a target="_blank" href="https://instagram.com/">
                              <i class="fab fa-instagram"></i>
                            </a>
                            <a target="_blank" href="https://behance.com/">
                              <i class="fab fa-behance"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="team-card-content">
                        <h3 class="box-title">
                          <a href="team-details.html">Jessica Lauren</a>
                        </h3>
                        <span class="team-desig">Volunteer</span>
                      </div>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div class="th-team team-card">
                      <div class="img-wrap">
                        <div class="team-img">
                          <img src="assets/img/team/team_1_4.png" alt="Team" />
                        </div>
                        <div class="team-social-hover">
                          <a href="#" class="team-social-hover_btn">
                            <i class="far fa-plus"></i>
                          </a>
                          <div class="th-social">
                            <a target="_blank" href="https://twitter.com/">
                              <i class="fab fa-twitter"></i>
                            </a>
                            <a target="_blank" href="https://facebook.com/">
                              <i class="fab fa-facebook-f"></i>
                            </a>
                            <a target="_blank" href="https://instagram.com/">
                              <i class="fab fa-instagram"></i>
                            </a>
                            <a target="_blank" href="https://behance.com/">
                              <i class="fab fa-behance"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="team-card-content">
                        <h3 class="box-title">
                          <a href="team-details.html">Daniel Thomas</a>
                        </h3>
                        <span class="team-desig">Volunteer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                data-slider-prev="#teamSlider1"
                class="slider-arrow slider-prev"
              >
                <i class="far fa-arrow-left"></i>
              </button>
              <button
                data-slider-next="#teamSlider1"
                class="slider-arrow slider-next"
              >
                <i class="far fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </section>*/}
        <div class="video-area-1 space bg-theme overflow-hidden">
          <div
            class="shape-mockup video-bg-shape1-1"
            data-top="0"
            data-left="0"
          >
            <img src="assets/img/shape/video_shape1_1.png" alt="img" />
          </div>
          <div
            class="shape-mockup video-bg-shape1-2"
            data-bottom="0"
            data-right="0"
          >
            <img src="assets/img/shape/video_shape1_2.png" alt="img" />
          </div>
          <div class="container">
            <div class="row gy-40 justify-content-between">
              <div class="col-lg-5">
                <div class="title-area mb-35">
                  <h2 class="sec-title text-white">
                    We Always Make Positive Impact
                  </h2>
                  <p class="text-white">
                    At Chrisfolworld Foundation, we are committed to making a
                    positive impact on communities around the world. Our
                    services aim to inspire,support and empower individuals in
                    need through various programs and initiatives.
                  </p>
                </div>
                <div class="row">
                  <div class="col-sm-6 counter-card-wrap">
                    <div class="counter-card">
                      <h2 class="box-number text-theme2">
                        <span class="counter-number">36</span>
                      </h2>
                      <p class="box-text text-white">
                        States all around Nigeria including FCT
                      </p>
                    </div>
                  </div>
                  <div class="col-sm-6 counter-card-wrap">
                    <div class="counter-card">
                      <h2 class="box-number text-white">
                        <span class="counter-number">1000</span>k
                        <span class="fw-light">+</span>
                      </h2>
                      <p class="box-text text-white">
                        Individuals impacted accross Nigeria
                      </p>
                    </div>
                  </div>
                  <div class="col-sm-6 counter-card-wrap">
                    <div class="counter-card">
                      <h2 class="box-number text-white">
                        <span class="counter-number">6</span>
                      </h2>
                      <p class="box-text text-white">
                        Years of greate achievement(since 2019)
                      </p>
                    </div>
                  </div>
                  <div class="col-sm-6 counter-card-wrap">
                    <div class="counter-card">
                      <h2 class="box-number text-theme2">
                        <span class="counter-number">35</span>k
                        <span class="fw-light">+</span>
                      </h2>
                      <p class="box-text text-white">Materials Beneficiaries</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="video-thumb1-1 video-box-center">
                  <img src="assets/img/normal/f6.JPG" alt="img" />
                  <a
                    href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                    class="play-btn style2 popup-video"
                  >
                    <i class="fa-sharp fa-solid fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*} <div class="overflow-hidden brand-area-1">
          <div class="container">
            <div
              class="brand-wrap1 bg-gray text-center"
              data-mask-src="assets/img/shape/brand-bg-shape1.png"
            >
              <h3 class="brand-wrap-title">
                Trusted by over{" "}
                <span class="text-theme2">
                  <span class="counter-number">90</span>K+
                </span>{" "}
                companies worldwide
              </h3>
              <div
                class="swiper th-slider"
                id="brandSlider1"
                data-slider-options='{"breakpoints":{"0":{"slidesPerView":2},"576":{"slidesPerView":"2"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"3"},"1200":{"slidesPerView":"4"},"1400":{"slidesPerView":"5", "spaceBetween": "90"}}}'
              >
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <a href="blog.html" class="brand-box">
                      <img
                        src="assets/img/brand/brand1-1.svg"
                        alt="Brand Logo"
                      />
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a href="blog.html" class="brand-box">
                      <img
                        src="assets/img/brand/brand1-2.svg"
                        alt="Brand Logo"
                      />
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a href="blog.html" class="brand-box">
                      <img
                        src="assets/img/brand/brand1-3.svg"
                        alt="Brand Logo"
                      />
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a href="blog.html" class="brand-box">
                      <img
                        src="assets/img/brand/brand1-4.svg"
                        alt="Brand Logo"
                      />
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a href="blog.html" class="brand-box">
                      <img
                        src="assets/img/brand/brand1-5.svg"
                        alt="Brand Logo"
                      />
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a href="blog.html" class="brand-box">
                      <img
                        src="assets/img/brand/brand1-1.svg"
                        alt="Brand Logo"
                      />
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a href="blog.html" class="brand-box">
                      <img
                        src="assets/img/brand/brand1-2.svg"
                        alt="Brand Logo"
                      />
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a href="blog.html" class="brand-box">
                      <img
                        src="assets/img/brand/brand1-3.svg"
                        alt="Brand Logo"
                      />
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a href="blog.html" class="brand-box">
                      <img
                        src="assets/img/brand/brand1-4.svg"
                        alt="Brand Logo"
                      />
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a href="blog.html" class="brand-box">
                      <img
                        src="assets/img/brand/brand1-5.svg"
                        alt="Brand Logo"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>*/}

        <section class="overflow-hidden space">
          <div class="container">
            <div class="title-area text-center">
              <span class="sub-title after-none before-none">
                <i class="far fa-heart text-theme"></i>Testimonials
              </span>
              <h2 class="sec-title">What Our Customers Say?</h2>
            </div>
            <div class="row gy-30">
              <div class="col-lg-6">
                <div class="testi-card3">
                  <div
                    class="testi-card-shape"
                    data-mask-src="assets/img/shape/testi-card-bg-shape3-1.png"
                  ></div>
                  <div class="testi-card_review">
                    <i class="fas fa-star"></i>
                    5.0
                  </div>
                  <div class="testi-card_profile">
                    <div class="box-thumb">
                      <img
                        src="assets/img/testimonial/testi_3_1.png"
                        alt="img"
                      />
                      <div class="quote-icon">
                        <i class="fal fa-quote-right"></i>
                      </div>
                    </div>
                    <div class="media-left">
                      <h3 class="testi-card_name">Brandon Dixon</h3>
                      <span class="testi-card_desig">CEO, Founder</span>
                    </div>
                  </div>
                  <p class="testi-card_text">
                    “Stay informed about our upcoming events and campaigns.
                    Whether it's a fundraising gala, a charity run, or a
                    community outreach program, there are plenty of ways to get
                    involved and support our cause. Check our event calendar for
                    details.”
                  </p>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="testi-card3">
                  <div
                    class="testi-card-shape"
                    data-mask-src="assets/img/shape/testi-card-bg-shape3-1.png"
                  ></div>
                  <div class="testi-card_review">
                    <i class="fas fa-star"></i>
                    5.0
                  </div>
                  <div class="testi-card_profile">
                    <div class="box-thumb">
                      <img
                        src="assets/img/testimonial/testi_3_2.png"
                        alt="img"
                      />
                      <div class="quote-icon">
                        <i class="fal fa-quote-right"></i>
                      </div>
                    </div>
                    <div class="media-left">
                      <h3 class="testi-card_name">Brooklyn Simmons</h3>
                      <span class="testi-card_desig">CEO, Founder</span>
                    </div>
                  </div>
                  <p class="testi-card_text">
                    “Stay informed about our upcoming events and campaigns.
                    Whether it's a fundraising gala, a charity run, or a
                    community outreach program, there are plenty of ways to get
                    involved and support our cause. Check our event calendar for
                    details.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="overflow-hidden">
          <div
            class="project-wrap1 space th-radius overflow-hidden"
            data-bg-src="assets/img/bg/gray-bg2.png"
            data-overlay="gray"
            data-opacity="5"
          >
            <div
              class="shape-mockup project-bg-shape1-1"
              data-top="0"
              data-right="0"
            >
              <img src="assets/img/shape/project-shape1-1.png" alt="img" />
            </div>
            <div class="container">
              <div class="row justify-content-md-between align-items-center">
                <div class="col-lg-5 col-md-6">
                  <div class="title-area">
                    <span class="sub-title before-none">Complete Projects</span>
                    <h2 class="sec-title">Our Recent Project</h2>
                  </div>
                </div>
                <div class="col-auto">
                  <div class="sec-btn">
                    <a href="contact.html" class="th-btn">
                      View All Project<i class="fas fa-arrow-up-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
              <Swiperss />
            </div>
          </div>
        </section>

        <div class="overflow-hidden space-top">
          <div
            class="shape-mockup faq-bg-shape1-1 jump"
            data-mask-src="assets/img/normal/faq_1_3.png"
            data-top="15%"
            data-right="2%"
          >
            <img src="assets/img/normal/faq_1_3.png" alt="img" />
          </div>
          <div class="container">
            <div class="row gx-80 justify-content-between">
              <div class="col-xl-12">
                <div class="faq-wrap1">
                  <div class="title-area">
                    <span class="sub-title before-none">
                      Frequently Asked Questions
                    </span>
                    <h2 class="sec-title">Have Any Questions For Us?</h2>
                  </div>
                  <div class="accordion" id="faqAccordion">
                    <div class="accordion-card">
                      <div class="accordion-header" id="collapse-item-1">
                        <button
                          class="accordion-button "
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse-1"
                          aria-expanded="true"
                          aria-controls="collapse-1"
                        >
                          What motivates you to donate to our charity?
                        </button>
                      </div>
                      <div
                        id="collapse-1"
                        class="accordion-collapse collapse show"
                        aria-labelledby="collapse-item-1"
                        data-bs-parent="#faqAccordion"
                      >
                        <div class="accordion-body">
                          <p class="faq-text">
                            Explore the variety of volunteer opportunities
                            available. From event planning and fundraising to
                            fieldwork and administrative support, there are many
                            ways to lend your talents. Find the perfect fit for
                            your skills and interests.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="accordion-card">
                      <div class="accordion-header" id="collapse-item-2">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse-2"
                          aria-expanded="false"
                          aria-controls="collapse-2"
                        >
                          How did you hear about our organization?
                        </button>
                      </div>
                      <div
                        id="collapse-2"
                        class="accordion-collapse collapse "
                        aria-labelledby="collapse-item-2"
                        data-bs-parent="#faqAccordion"
                      >
                        <div class="accordion-body">
                          <p class="faq-text">
                            Explore the variety of volunteer opportunities
                            available. From event planning and fundraising to
                            fieldwork and administrative support, there are many
                            ways to lend your talents. Find the perfect fit for
                            your skills and interests.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="accordion-card">
                      <div class="accordion-header" id="collapse-item-3">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse-3"
                          aria-expanded="false"
                          aria-controls="collapse-3"
                        >
                          How frequently do you prefer to volunteer?
                        </button>
                      </div>
                      <div
                        id="collapse-3"
                        class="accordion-collapse collapse "
                        aria-labelledby="collapse-item-3"
                        data-bs-parent="#faqAccordion"
                      >
                        <div class="accordion-body">
                          <p class="faq-text">
                            Explore the variety of volunteer opportunities
                            available. From event planning and fundraising to
                            fieldwork and administrative support, there are many
                            ways to lend your talents. Find the perfect fit for
                            your skills and interests.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="accordion-card">
                      <div class="accordion-header" id="collapse-item-4">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse-4"
                          aria-expanded="false"
                          aria-controls="collapse-4"
                        >
                          What motivated you to participate in this event?
                        </button>
                      </div>
                      <div
                        id="collapse-4"
                        class="accordion-collapse collapse "
                        aria-labelledby="collapse-item-4"
                        data-bs-parent="#faqAccordion"
                      >
                        <div class="accordion-body">
                          <p class="faq-text">
                            Explore the variety of volunteer opportunities
                            available. From event planning and fundraising to
                            fieldwork and administrative support, there are many
                            ways to lend your talents. Find the perfect fit for
                            your skills and interests.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section class="space" id="blog-sec">
          <div class="container">
            <div class="title-area text-center">
              <span class="sub-title">News & Articles</span>
              <h2 class="sec-title">Our Latest News & Articles</h2>
            </div>
            <NewSwipe />
          </div>
        </section>

        <Footer />
      </body>
    </>
  );
};

export default Home;
