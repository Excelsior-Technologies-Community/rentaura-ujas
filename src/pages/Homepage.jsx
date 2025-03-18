import React from "react";
import Header from "../components/Header";
import "./Homepage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import morden from "../assets/img/Avatar1.png";
import morde from "../assets/img/Avatar2.png";
import mobil from "../assets/img/Avatar3.png";
import un from "../assets/img/Avatar4.png";
import una from "../assets/img/Avatar5.png";
import uj from "../assets/img/footer.png";
import uja from "../assets/img/Image 61.png";
import uns from "../assets/img/Imagex1.png";
import fo from "../assets/img/Imagex2.png";
import foc from "../assets/img/Image3.png";
import fon from "../assets/img/Image4.png";
import pho from "../assets/img/Image5.png";
import pjh from "../assets/img/Image6.png";
import phon from "../assets/img/Image7.png";
import kn from "../assets/img/Image8.png";
import ku from "../assets/img/Image9.png";
import kun from "../assets/img/Image10.png";
import kub from "../assets/img/Image11.png";
import hn from "../assets/img/Image12.png";
import ju from "../assets/img/Image13.png";
import fr from "../assets/img/Image14.png";
import we from "../assets/img/Image15.png";
import qw from "../assets/img/Image16.png";
// import wr from "../assets/img/Image17.png";
// import wt from "../assets/img/Image18.png";
// import qa from "../assets/img/Image19.png";
// import qz from "../assets/img/logo1.png";
import azx from "../assets/img/monitor.png";
import qzxc from "../assets/img/Presention-chart.png";
import ty from "../assets/img/status-up.png";
import yu from "../assets/img/Why Choose Us 1.png";

function Homepage() {
  return (
    <>
      <div className="container hero-section">
        <div className="row align-items-center">
          <div className="col-md-5">
            <h1>
              Homes for <span className="highlight">Sale</span>, Rentals &
              Commercial Properties in <span className="text-red">Mexico</span>
            </h1>
            <p>
              <strong>RentAura</strong> is your ultimate resource for buying and
              renting property in Mexico. Whether you're a local or an
              international buyer, we have the tools and resources you need to
              find your dream home.
            </p>
            <div className="center-box">
              <div className="top-box">
                <ul className="nav nav-tabs p-2" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="buy-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#buy"
                      type="button"
                      role="tab"
                    >
                      Buy
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="rent-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#rent"
                      type="button"
                      role="tab"
                    >
                      Rent
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="commercial-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#commercial"
                      type="button"
                      role="tab"
                    >
                      Commercial
                    </button>
                  </li>
                </ul>
              </div>
              <div className="bottom-box">
                <div className="row align-items-center">
                  <div className="col-md-3">
                    <label className="fw-bold">Select type</label>
                    <select className="form-select form-control">
                      <option>Houses</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <div className="search-icon">
                      <i className="fa fa-search"></i>
                    </div>
                    <input
                      type="text"
                      className="form-control search-padding"
                      placeholder="Quintana Roo, Mexico"
                    />
                  </div>
                  <div className="col-md-3 text-end">
                    <button className="search-btn">Search</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7 property-image text-center">
            <img src={uja} alt="Modern Building" />
          </div>
        </div>
      </div>

      <div className="mt-1 mb-4">
        <div className="experience-banner d-flex justify-content-between align-items-center">
          <div className="stats1">
            With Over 12+ Years of Experience in Real Estate
          </div>
          <div className="d-flex gap-4 stats2">
            <div className="text-center stats3">
              <div className="stats">300+</div>
              <div>Awards Winning</div>
            </div>
            <div className="text-center stats3">
              <div className="stats">80+</div>
              <div>Property Ready</div>
            </div>
            <div className="text-center stats3">
              <div className="stats">450+</div>
              <div>Happy Customers</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 mb-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="fw-bold">Top listings for you</h2>
          <a className="btnstyle2" href="Listing.html">
            See More
          </a>
        </div>
        <div className="row pt-5">
          <div className="col-md-4">
            <div className="card listing-card">
              <div className="position-relative">
                <span className="top-listing-badge">Top Listing</span>
                <img
                  src={uns}
                  className="card-img-top listing-img"
                  alt="Listing Image"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold">
                  Title of the Listing will come...
                </h5>
                <p className="text-muted pt-1">
                  <i className="fas fa-map-marker-alt icon-red"></i> Pluto
                  Street, Indonesia
                </p>
                <div className="d-flex justify-content-between text-muted boxstyle">
                  <span>
                    <i className="fas fa-table-cells-large icon-green"></i> 800
                    Sq Ft
                  </span>
                  <span>
                    <i className="fas fa-bed icon-green"></i> 1 Bedroom
                  </span>
                  <span>
                    <i className="fas fa-bathtub icon-green"></i> 2 Bathroom
                  </span>
                </div>
                <hr />
                <p className="mt-2 price">
                  <span className="dollar">$581,339.00</span>{" "}
                  <span className="usd">USD</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card listing-card">
              <div className="position-relative">
                <span className="top-listing-badge">Top Listing</span>
                <img
                  src={fo}
                  className="card-img-top listing-img"
                  alt="Listing Image"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold">
                  Title of the Listing will come...
                </h5>
                <p className="text-muted pt-1">
                  <i className="fas fa-map-marker-alt icon-red"></i> Pluto
                  Street, Indonesia
                </p>
                <div className="d-flex justify-content-between text-muted boxstyle">
                  <span>
                    <i className="fas fa-table-cells-large icon-green"></i> 800
                    Sq Ft
                  </span>
                  <span>
                    <i className="fas fa-bed icon-green"></i> 1 Bedroom
                  </span>
                  <span>
                    <i className="fas fa-bathtub icon-green"></i> 2 Bathroom
                  </span>
                </div>
                <hr />
                <p className="mt-2 price">
                  <span className="dollar">$581,339.00</span>{" "}
                  <span className="usd">USD</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card listing-card">
              <div className="position-relative">
                <span className="top-listing-badge">Top Listing</span>
                <img
                  src={foc}
                  className="card-img-top listing-img"
                  alt="Listing Image"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold">
                  Title of the Listing will come...
                </h5>
                <p className="text-muted pt-1">
                  <i className="fas fa-map-marker-alt icon-red"></i> Pluto
                  Street, Indonesia
                </p>
                <div className="d-flex justify-content-between text-muted boxstyle">
                  <span>
                    <i className="fas fa-table-cells-large icon-green"></i> 800
                    Sq Ft
                  </span>
                  <span>
                    <i className="fas fa-bed icon-green"></i> 1 Bedroom
                  </span>
                  <span>
                    <i className="fas fa-bathtub icon-green"></i> 2 Bathroom
                  </span>
                </div>
                <hr />
                <p className="mt-2 price">
                  <span className="dollar">$581,339.00</span>{" "}
                  <span className="usd">USD</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <h1 className="text-center citystyle">Popular cities in Mexico</h1>
        <div className="carousel-container">
          <div
            id="cityCarousel"
            className="carousel-inner"
            onscroll="checkButtons()"
          >
            <div className="city-card">
              <img src={fon} alt="Puerto Vallarta" />
              <p className="top-left"> Puerto Vallarta</p>
            </div>
            <div className="city-card">
              <img src={pho} alt="San Miguel De Allende" />
              <p className="top-left">San Miguel De Allende</p>
            </div>
            <div className="city-card">
              <img src={pjh} alt="Playa Del Carmen" />
              <p className="top-left">Playa Del Carmen</p>
            </div>
            <div className="city-card">
              <img src={phon} alt="Los Cabos" />
              <p className="top-left">Los Cabos</p>
            </div>
            <div className="city-card">
              <img src={fon} alt="Mexico City" />
              <p className="top-left">Mexico City</p>
            </div>
            <div className="city-card">
              <img src={pho} alt="Guadalajara" />
              <p className="top-left">Guadalajara</p>
            </div>
            <div className="city-card">
              <img src={pjh} alt="Tulum" />
              <p className="top-left">Tulum</p>
            </div>
          </div>
          <div className="carousel-controls">
            <button
              id="prevBtn"
              className="carousel-control-prev me-2"
              onclick="scrollCarousel(-1)"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
            </button>
            <button
              id="nextBtn"
              className="carousel-control-next"
              onclick="scrollCarousel(1)"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
            </button>
          </div>
        </div>
      </div>

      <div className="page-wrapper">
        <div className="content-box">
          <h2 className="box-content">
            Are you a <span className="highlight-text">Real Estate</span>{" "}
            professional?
          </h2>
          <p className="box-text">
            Get more eyes on your listings and move more properties faster!
            Promote your business to get your listings and profile <br />{" "}
            highlighted in homebuyers’ search results.
          </p>
          <a href="#" className="btn-custom">
            Get your broker account now
          </a>
        </div>
      </div>

      <div className="bg-image">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src={yu} alt="Why Choose Us" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <div className="listing-container">
                <div className="rounded p-3 mb-3 d-flex align-items-center back-style">
                  <div className="row">
                    <div
                      className="col-md-2 d-flex align-items-center"
                      style={{paddingLeft:"20px"}}
                    >
                      <img
                        src={azx}
                        className="me-2 icon-border"
                        alt="abc"
                      />
                    </div>
                    <div className="col-md-10">
                      <h4 className="choose-us-heading">
                        Post or Import Your Listings
                      </h4>
                      <p className="choose-us-text">
                        Kick-off your listings journey by easily posting new
                        properties or uploading them -{" "}
                        <a href="#">click here to get started.</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded p-3 mb-3 d-flex align-items-center back-style">
                  <div className="row">
                    <div
                      className="col-md-2 d-flex align-items-center"
                      style={{paddingLeft: "20px"}}
                    >
                      <img
                        src={qzxc}
                        className="me-2 icon-border"
                        alt=""
                      />
                    </div>
                    <div className="col-md-10">
                      <h4 className="choose-us-heading">
                        Advertise Your Listings or Profile
                      </h4>
                      <p className="choose-us-text">
                        Agents who want to move more properties faster, can
                        easily promote their listings and profile.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded p-3 mb-3 d-flex align-items-center back-style">
                  <div className="row">
                    <div
                      className="col-md-2 d-flex align-items-center"
                      style={{paddingLeft: "20px"}}
                    >
                      <img
                        src={ty}
                        className="me-2 icon-border"
                        alt=""
                      />
                    </div>
                    <div className="col-md-10">
                      <h4 className="choose-us-heading">
                        Get More Leads, Close More Sales
                      </h4>
                      <p className="choose-us-text">
                        very lead is sent to your Inbox right away, allowing you
                        to connect with your next client while they’re searching
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex mt-5">
        <p className="faq-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna <br /> aliqua.
        </p>
        <div>
          <button className="btn btn-light faq-button">See Our FAQ</button>
        </div>
      </div>

      <div className="container mt-5 mb-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="fw-bold">Recently viewed listing</h2>
        </div>
        <div className="row pt-5">
          <div className="col-md-4">
            <div className="card listing-card1">
              <div className="position-relative">
                <span className="top-listing-badge1">Top Listing</span>
                <img
                  src={uns}
                  className="listing-img1"
                  alt="Listing Image"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold">
                  Title of the Listing will come...
                </h5>
                <p className="text-muted pt-1">
                  <i className="fas fa-map-marker-alt icon-red"></i> Pluto
                  Street, Indonesia
                </p>
                <div className="d-flex justify-content-between text-muted boxstyle1">
                  <span>
                    <i className="fas fa-table-cells-large icon-green1"></i> 800
                    Sq Ft
                  </span>
                  <span>
                    <i className="fas fa-bed icon-green1"></i> 1 Bedroom
                  </span>
                  <span>
                    <i className="fas fa-bathtub icon-green1"></i> 2 Bathroom
                  </span>
                </div>
                <hr />
                <p className="mt-2 price1">
                  <span className="dollar1">$581,339.00</span>{" "}
                  <span className="usd1">USD</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card listing-card1">
              <div className="position-relative">
                <span className="top-listing-badge1">Top Listing</span>
                <img
                  src={fo}
                  className="listing-img1"
                  alt="Listing Image"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold">
                  Title of the Listing will come...
                </h5>
                <p className="text-muted pt-1">
                  <i className="fas fa-map-marker-alt icon-red"></i> Pluto
                  Street, Indonesia
                </p>
                <div className="d-flex justify-content-between text-muted boxstyle1">
                  <span>
                    <i className="fas fa-table-cells-large icon-green"></i> 800
                    Sq Ft
                  </span>
                  <span>
                    <i className="fas fa-bed icon-green"></i> 1 Bedroom
                  </span>
                  <span>
                    <i className="fas fa-bathtub icon-green"></i> 2 Bathroom
                  </span>
                </div>
                <hr />
                <p className="mt-2 price1">
                  <span className="dollar1">$581,339.00</span>{" "}
                  <span className="usd1">USD</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card listing-card1">
              <div className="position-relative">
                <span className="top-listing-badge1">Top Listing</span>
                <img
                  src={foc}
                  className="listing-img1"
                  alt="Listing Image"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold">
                  Title of the Listing will come...
                </h5>
                <p className="text-muted pt-1">
                  <i className="fas fa-map-marker-alt icon-red"></i> Pluto
                  Street, Indonesia
                </p>
                <div className="d-flex justify-content-between text-muted boxstyle1">
                  <span>
                    <i className="fas fa-table-cells-large icon-green"></i> 800
                    Sq Ft
                  </span>
                  <span>
                    <i className="fas fa-bed icon-green"></i> 1 Bedroom
                  </span>
                  <span>
                    <i className="fas fa-bathtub icon-green"></i> 2 Bathroom
                  </span>
                </div>
                <hr />
                <p className="mt-2 price1">
                  <span className="dollar1">$581,339.00</span>{" "}
                  <span className="usd1">USD</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row main-section">
          <div className="col-lg-6">
            <img
              src={kn}
              alt="Luxury House"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-lg-6 text-content">
            <h1 className="mb-4">Find your perfect property in Mexico</h1>
            <p className="mb-4">
              Explore our extensive listings today and discover the home that
              ignites your dreams of Mexican living with{" "}
              <a href="#" className="a1">
                Mexico Property Search
              </a>
            </p>
            <a href="#" className="btn-action">
              Get Quote Now
            </a>
            <div className="d-flex gap-3 mt-4 image-gallery">
              <img
                src={ku}
                alt="House 1"
                className="img-fluid"
                width="100"
              />
              <img
                src={kun}
                alt="House 2"
                className="img-fluid"
                width="100"
              />
              <img
                src={kub}
                alt="House 3"
                className="img-fluid"
                width="100"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="fw-bold customer-heading">
                What says from our happy customers
              </h2>
            </div>
            <div className="col-lg-6">
              <p className="text-muted customer-text">
                Don't just take our word for it! See what our satisfied clients
                have to say about their experience finding their dream property
                with <br />
                <a
                  href="#"
                  className="text-decoration-none text-success fw-semibold"
                >
                  Mexico Property Search
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-3">
              <div className="p-4 border rounded-3 bg-white box-text">
                <p>
                  Mexico Property Search went above and beyond to help me
                  navigate the legalities of buying property in Mexico. Their
                  professionalism and clear communication gave me peace of mind
                  throughout the entire process. Thank you!
                </p>
                <div className="d-flex align-items-center mt-3">
                  <img
                    src={morden}
                    className="rounded-circle me-2"
                    alt="User"
                  />
                  <div>
                    <strong className="cust-name">Shoo Phar Mhan</strong>
                    <p className="text-muted mb-0">Kang Masak</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="p-4 border rounded-3 bg-white box-text">
                <p>
                  Finding the perfect vacation rental in Tulum felt impossible
                  until I contacted Mexico Property Search. Their extensive
                  listings and expert advice made the process smooth and
                  enjoyable. We can’t wait to return!
                </p>
                <div className="d-flex align-items-center mt-3">
                  <img
                    src={morde}
                    className="rounded-circle me-2"
                    alt="User"
                  />
                  <div>
                    <strong className="cust-name">Shoo Phar Dhie</strong>
                    <p className="text-muted mb-0">Kang Bakso</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="p-4 border rounded-3 bg-white box-text">
                <p>
                  I was initially overwhelmed by the thought of searching for
                  retirement property in{" "}
                  <a href="#" className="text-success text-decoration-none">
                    Mexico
                  </a>
                  .{" "}
                  <a href="#" className="text-success text-decoration-none">
                    Mexico Property Search
                  </a>
                  ’s personalized approach and local knowledge were invaluable.
                  They helped me find the perfect place to call home.
                </p>
                <div className="d-flex align-items-center mt-3">
                  <img
                    src={mobil}
                    className="rounded-circle me-2"
                    alt="User"
                  />
                  <div>
                    <strong className="cust-name">Shoo Yha Thi</strong>
                    <p className="text-muted mb-0">Kang Ngomel</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="p-4 border rounded-3 bg-white box-text">
                <p>
                  Thanks to Mexico Property Search, selling my beachfront condo
                  in Puerto Vallarta was a breeze. Their marketing expertise and
                  strong network brought in qualified buyers quickly. I highly
                  recommend them!
                </p>
                <div className="d-flex align-items-center mt-3">
                  <img
                    src={un}
                    className="rounded-circle me-2"
                    alt="User"
                  />
                  <div>
                    <strong className="cust-name">Shoo Mhar Nhi</strong>
                    <p className="text-muted mb-0">Kang Gombal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="py-5 d-flex flex-wrap align-items-start  section-faq">
          <div className="image-container me-5">
            <img
              src={hn}
              alt="Building"
              className="img-fluid img-big"
            />
            <img
              src={ju}
              alt="Building Small"
              className="small-img"
            />
          </div>
          <div className="faq-section">
            <h2 className="faq-header">Frequently asked question</h2>
            <p className="pt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="faq-category">General</div>
            <div className="accordion" id="faqAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What is Mexico Property Search?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Mexico Property Search is an online real estate marketplace
                    that helps you find the right home or real estate
                    investment.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Do I have to pay to use property search tools?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    No, the property search tools are free to use.
                  </div>
                </div>
              </div>
            </div>

            <div className="faq-category">Home buyers and home sellers</div>
            <div className="accordion">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    How can I be notified if there are new listings?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    You can sign up for alerts to be notified about new
                    listings.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5 blog-container">
        <div className="blog-header">
          <h2>Our blog</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
            <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-md-4">
            <div className="blog-card">
              <img src={fr} alt="Work-Life Balance" />
              <p className="text-muted mt-2">
                <i className="fa fa-calendar-alt"></i> 18 June 2022
              </p>
              <h5>
                Work-Life Balance in Canada: Québec Cities Thrive Beyond the
                9-to-5
              </h5>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
              <a href="#" className="read-more">
                Read More{" "}
                <i
                  className="fa-solid fa-chevron-right"
                  style={{paddingLeft: "2px"}}
                ></i>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="blog-card">
              <img src={we} alt="Luxury Homes" />
              <p className="text-muted mt-2">
                <i className="fa fa-calendar-alt"></i> 18 June 2022
              </p>
              <h5>
                Gilded Gates Galore: Canadian Cities With Lavish Shares of
                Luxury Homes for Sale
              </h5>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
              <a href="#" className="read-more">
                Read More{" "}
                <i
                  className="fa-solid fa-chevron-right"
                  style={{paddingLeft: "2px"}}
                ></i>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="blog-card">
              <img src={qw}alt="City vs. Suburbs" />
              <p className="text-muted mt-2">
                <i className="fa fa-calendar-alt"></i> 18 June 2022
              </p>
              <h5>
                City vs. Suburbs: What’s the Best Choice When House Hunting?
              </h5>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
              <a href="#" className="read-more">
                Read More{" "}
                <i
                  className="fa-solid fa-chevron-right"
                  style={{paddingLeft: "2px"}}
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3 section-footer">
              <div className="footer-logo">
                <img src={uj}alt="" />
              </div>
              <p className="textstyle">
                Our one-stop shopfor buying, <br />
                selling ,and renting property
              </p>
            </div>
            <div className="col-md-3 link-style">
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#" className="link-light">
                    Buy
                  </a>
                </li>
                <p style={{color: "rgb(172, 170, 170)"}}>Homes for sale</p>
                <li className="mb-2">
                  <a href="#" className="link-light">
                    Rent
                  </a>
                </li>
                <p style={{color: "rgb(172, 170, 170)"}}>Apartments for rent</p>
                <p style={{color: "rgb(172, 170, 170)"}}>Houses for rent</p>
                <li className="mb-2">
                  <a href="#" className="link-light">
                    Commercial
                  </a>
                </li>
                <p style={{color: "rgb(172, 170, 170)"}}>Properties for lease</p>
                <p style={{color: "rgb(172, 170, 170)"}}>Office space for lease</p>
                <p style={{color: "rgb(172, 170, 170)"}}>Commercial real estate</p>
                <li className="mb-2">
                  <a href="#" className="link-light">
                    Agents/Brokers
                  </a>
                </li>
                <p style={{color: "rgb(172, 170, 170)"}}>I need an agent/broker</p>
              </ul>
            </div>
            <div className="col-md-3">
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#" className="link-light">
                    About Company
                  </a>
                </li>
                <p style={{color: "rgb(172, 170, 170)"}}>About</p>
                <p style={{color: "rgb(172, 170, 170)"}}>Blog</p>
                <p style={{color: "rgb(172, 170, 170)"}}>Career</p>
                <p style={{color: "rgb(172, 170, 170)"}}>Demographics/Sitemap</p>
                <li className="mb-2">
                  <a href="#" className="link-light">
                    Social
                  </a>
                </li>
                <p style={{color: "rgb(172, 170, 170)"}}>Facebook</p>
                <p style={{color: "rgb(172, 170, 170)"}}>Youtube</p>
                <p style={{color: "rgb(172, 170, 170)"}}>
                  <i className="fa fa-multiply" style={{paddingLeft: "3px"}}></i>
                </p>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Contact Us</h5>
              <p>
                <i className="fas fa-map-marker-alt"></i>{" "}
                <span className="text-style1">
                  123 Anywhere Street, Any <br />
                  City, 12345 ST, Indonesia
                </span>
              </p>
              <p>
                <i className="fa-solid fa-phone"></i>{" "}
                <span className="text-style1">+123 456 7890 </span>
              </p>
              <p>
                <i className="fas fa-envelope"></i>{" "}
                <span className="text-style1">hello@rentaura.com</span>
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="container">
          <div className="row last-section">
            <div className="col-md-9">
              The trademarks MLS®, Multiple Listing Service® and the associated
              logos are owned by The Canadian Real Estate Association (CREA) and
              identify the quality of services provided by real estate
              professionals who are members of CREA. The trademarks REALTOR®,
              REALTORS®, and the REALTOR® logo are controlled by The Canadian
              Real Estate Association (CREA) and identify real estate
              professionals who are members of CREA.
            </div>
            <div className="col-md-3 text-center mt-4">
              <p> Copyright &copy; 1996-2024</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Homepage;
