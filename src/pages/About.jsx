import React from "react";
import A13 from "../assets/img/A13.png";
import Frame4 from "../assets/img/Frame4.png";
import A21 from "../assets/img/A21.png";
import A10 from "../assets/img/A10.png";
import uj from "../assets/img/footer.png";

const About = () => {
  return (
    <div className="container">
      <h1 className="text-center fw-bold">About Us</h1>
      <p className="text-muted text-center">
        <span className="text-success">Mexico Property Search</span> is an
        online real estate marketplace <br />
        with more than 20 years of experience in the housing industry, <br />
        featuring residential and commercial listings.
      </p>

      <div className="row">
        <div className="col-md-6 pt-5">
          <h1 className="fw-bold">
            Over 20+ Years Experience in Real Estate Services
          </h1>
        </div>
        <div className="col-md-6 d-flex pt-5">
          <p className="text-muted">
            Whether you’re interested in buying a home, seeking apartments for
            rent, searching for office space, or looking to invest in commercial
            properties,{" "}
            <span className="text-success">Mexico Property Search</span> is the
            place to start. Plus, if you’re a real estate agent, we can help
            boost your business by efficiently advertising your properties on
            our platform. That’s because{" "}
            <span className="text-success">Mexico Property Search</span>{" "}
            generates more than 90 million visits per year and is present in
            multiple markets. Headquartered in Saskatoon, we operate in Canada,
            the United States, and several international locations, including
            Mexico, Puerto Rico, Costa Rica, the Dominican Republic, and more.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-12 text-center">
          <img src={A13} alt="Real Estate" className="img-fluid" />
        </div>
      </div>

      <div className="row pt-5">
        <div className="col-md-6">
          <h2 className="fw-bold">Our Vision</h2>
          <p className="text-muted pt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold">Our Mission</h2>
          <p className="text-muted pt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <div className="row pt-5">
        <div className="col-md-6">
          <h2 className="fw-bold">Press</h2>
        </div>
        <div className="col-md-6">
          <p className="text-muted">
            Mexico Property Search’s in-depth real estate analyses and studies
            have been featured in some of the largest North American media
            outlets throughout the years. The most noteworthy achievements
            include mentions in publications like:
          </p>
        </div>
      </div>

      <div className="row pt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <img src={Frame4} alt="Press Features" className="img-fluid" />
        </div>
      </div>

      <div className="container history-section pt-5">
        <div className="row">
          <div className="col-md-6">
            <h3 className="fw-bold pt-5">Our History</h3>
            <p className="text-muted pt-3">
              Mexico Property Search's journey began in 1996, evolving from
              agent tools to a full-service search portal known for market
              expertise and wide listings.
            </p>

            <div className="timeline-card d-flex align-items-center pt-3">
              <div className="timeline-check me-3">
                <i
                  className="fa-solid fa-circle-check"
                  style={{ color: "#297f43" }}
                ></i>
              </div>
              <div>
                <strong>1996</strong>
                <p>
                  Mexico Property Search was initially founded in 1996 to
                  provide agent websites and CRM solutions to real estate
                  professionals. Eventually, the company transitioned to a
                  full-service real estate search portal.
                </p>
              </div>
            </div>

            <div className="d-flex align-items-center mb-2 timeline-card1 pt-5">
              <div className="timeline-check me-3">
                <i
                  className="fa-solid fa-circle-check"
                  style={{ color: "#297f43" }}
                ></i>
              </div>
              <span>
                <strong>2010</strong>
              </span>
            </div>

            <div className="d-flex align-items-center timeline-card1 pt-5">
              <div className="timeline-check me-3">
                <i
                  className="fa-solid fa-circle-check"
                  style={{ color: "#297f43" }}
                ></i>
              </div>
              <span>
                <strong>2020</strong>
              </span>
            </div>
          </div>

          <div className="col-md-6 text-center">
            <img src={A21} className="" alt="Skyscraper" />
          </div>
        </div>
        <div class="container agent-section">
          <div class="row">
            <div class="col-md-6 text-start">
              <h3 class="fw-bold Agent">Our Agent List</h3>
            </div>
            <div class="col-md-6">
              <p class="Agent-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div class="row text-center mt-4">
            <div class="col-md-3">
              <div class="agent-card"></div>
              <div class="agent-name">
                <img src={A10} alt="" className="img-fluid" />
                <h5>Shoo Phar Dhie</h5>
                <p>CEO</p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="agent-card"></div>
              <div class="agent-name">
                <img src={A10} alt="" className="img-fluid" />
                <h5>Shoo Thar Mhie</h5>
                <p>Project Manager</p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="agent-card"></div>
              <div class="agent-name">
                <img src={A10} alt="" className="img-fluid" />
                <h5>Shoo Khir Mhan</h5>
                <p>Marketing Manager</p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="agent-card"></div>
              <div class="agent-name">
                <img src={A10} alt="" className="img-fluid" />
                <h5>Shoo Han Tho</h5>
                <p>Sales Manager</p>
              </div>
            </div>
          </div>
          <div class="d-flex btn-section mt-5">
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="see-more-btn gap-5 text-end">
              <button className="text-success bg-transperent rounded-4">
                See More
              </button>
            </div>{" "}
          </div>
        </div>
        <footer className="footer">
                <div className="container">
                  <div className="row">
                    <div className="col-md-3 section-footer">
                      <div className="footer-logo">
                        <img src={uj} alt="" />
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
                        <p style={{ color: "rgb(172, 170, 170)" }}>Homes for sale</p>
                        <li className="mb-2">
                          <a href="#" className="link-light">
                            Rent
                          </a>
                        </li>
                        <p style={{ color: "rgb(172, 170, 170)" }}>
                          Apartments for rent
                        </p>
                        <p style={{ color: "rgb(172, 170, 170)" }}>Houses for rent</p>
                        <li className="mb-2">
                          <a href="#" className="link-light">
                            Commercial
                          </a>
                        </li>
                        <p style={{ color: "rgb(172, 170, 170)" }}>
                          Properties for lease
                        </p>
                        <p style={{ color: "rgb(172, 170, 170)" }}>
                          Office space for lease
                        </p>
                        <p style={{ color: "rgb(172, 170, 170)" }}>
                          Commercial real estate
                        </p>
                        <li className="mb-2">
                          <a href="#" className="link-light">
                            Agents/Brokers
                          </a>
                        </li>
                        <p style={{ color: "rgb(172, 170, 170)" }}>
                          I need an agent/broker
                        </p>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <ul className="list-unstyled">
                        <li className="mb-2">
                          <a href="#" className="link-light">
                            About Company
                          </a>
                        </li>
                        <p style={{ color: "rgb(172, 170, 170)" }}>About</p>
                        <p style={{ color: "rgb(172, 170, 170)" }}>Blog</p>
                        <p style={{ color: "rgb(172, 170, 170)" }}>Career</p>
                        <p style={{ color: "rgb(172, 170, 170)" }}>
                          Demographics/Sitemap
                        </p>
                        <li className="mb-2">
                          <a href="#" className="link-light">
                            Social
                          </a>
                        </li>
                        <p style={{ color: "rgb(172, 170, 170)" }}>Facebook</p>
                        <p style={{ color: "rgb(172, 170, 170)" }}>Youtube</p>
                        <p style={{ color: "rgb(172, 170, 170)" }}>
                          <i
                            className="fa fa-multiply"
                            style={{ paddingLeft: "3px" }}
                          ></i>
                        </p>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <h5>Contact Us</h5>
                      <p>
                        <i className="fas fa-map-marker-alt"></i>{" "}
                        <span className="text-style1">
                          // 123 Anywhere Street, Any <br />
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
      </div>
    </div>
  );
};

export default About;
