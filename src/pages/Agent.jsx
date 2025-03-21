import React from "react";
import blue from "../assets/img/blue.png";
import card from "../assets/img/card.png";
import location from "../assets/img/location.svg";
import call from "../assets/img/call.svg";
import global from "../assets/img/global.svg";
import user from "../assets/img/user.svg";
import wr from "../assets/img/Image17.png";
import una from "../assets/img/Avatar5.png";
import uj from "../assets/img/footer.png";
const Agent = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <img src={blue} alt="blue" />
          </div>
          <div className="col-lg-9">
            <div className="d-flex">
              <div className="fw-bold">
                Snakalp Chitkara{" "}
                <span className="text-success fs-5">Square Yards</span>
                <div>
                  <img className=" pt-3  " src={card} alt="card" />
                </div>
                <div className="container"></div>
              </div>
            </div>
            <div className="d-flex">
              <img src={location} alt="location" />

              <p className="pt-3">1413 King St E, Courtice, ON L1E</p>
            </div>
            <div className="">
              <div className="d-flex">
                <img src={call} alt="call" />
                <p className="pt-2 ms-2">(647) 389-0027 (Cell)</p>
              </div>
              <div className="d-flex ">
                <img src={call} alt="call" />
                <p className="pt-1 ms-2">(647) 389-0027 (office)</p>
              </div>
            </div>
            <div className="container">
              <div className="row">
                =<h4 className="text-success">About</h4>
                <p className="pt-5">
                  As the trusted Real Estate advisor for my clients, I
                  understand that selling or/buying a home is complex and deeply
                  personal. There is also a lot at stake financially and
                  personally. This perspective on the process and the
                  responsibility As the trusted Real Estate advisor for my
                  clients, I understand that selling or/buying a home is complex
                  and deeply personal. There is also a lot at stake financially
                  and personally. This perspective on the process and the
                  responsibility As the trusted Real Estate advisor for my
                  clients, I understand that selling or/buying a home is complex
                  and deeply personal. There is also a lot at stake financially
                  and personally. This perspective on the process and the
                  responsibility
                  <span className="text-success text-decoration-underline">
                    See more
                  </span>
                </p>
                –
              </div>
            </div>

            <div className="d-flex justify-content-between gap-3 ">
              <button className="btn bg-white rounded-4 py-3 w-50 border-2 border-secondary">
                Visit Website
                <img className="ms-3" src={global} alt="global" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 pt-5">
            <p className="fw-bold fs-3">Contact</p>
            <div className="d-flex flex-column">
              <label for="agenet">Your Name</label>
              <input
                className="rounded-4 py-3"
                type="text"
                id="agent"
                name="agent"
                placeholder="Your full name"
              />
              <label for="agenet">Your Email</label>
              <input
                className="rounded-4 py-3 "
                type="text"
                id="agent"
                name="agent"
                placeholder="example@email.com"
              />
              <label for="agenet">Your Phone Number</label>
              <input
                className="rounded-4 py-3"
                type="text"
                id="agent"
                name="agent"
                placeholder="+123-456-7890"
              />
              <label for="agenet">Your Message</label>
              <input
                className="rounded-4 py-5"
                type="text"
                id="agent"
                name="agent"
                placeholder="Hi, I'd like to find out more information about Detached Homes and Townhouses in GTA Region ON.Thanks so much!"
              />
              <div className="pt-5">
                <button className="btn btn-primary rounded-4 py-3 bg-success w-100 ">
                  Send Message{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-8 pt-5">
            <div className="d-flex">
              <p className="fw-bold fs-3">Listings by Agentname</p>
            </div>
            <div>
              <div className="row">
                <div className="col-6">
                  <div className="d-flex">
                    <div className="card listing-card2">
                      <div className="position-relative">
                        <span className="top-listing-badge2">Gold Listing</span>
                        <span className="bottom-listing-badge2">
                          <i className="fa-solid fa-chevron-left"></i> 3/5{" "}
                          <i className="fa-solid fa-chevron-right"></i>
                        </span>
                        <img
                          src={wr}
                          className="card-img-top listing-img2"
                          alt="Listing Image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card-body">
                    <h5 className="card-title fw-bold">
                      Title of the Listing will come...
                      <i
                        className="fa-regular fa-heart icon-green2"
                        style={{ paddingLeft: "30px" }}
                      ></i>
                    </h5>
                    <p className="text-muted pt-1">
                      <i className="fas fa-map-marker-alt icon-red2"></i> Pluto
                      Street, Indonesia
                    </p>
                    <div className="d-flex justify-content-between text-muted boxstyle2">
                      <span>
                        <i className="fas fa-table-cells-large icon-green2"></i>{" "}
                        800 Sq Ft
                      </span>
                      <span>
                        <i className="fas fa-bed icon-green2"></i> 1 Bedroom
                      </span>
                      <span>
                        <i className="fas fa-bathtub icon-green2"></i> 2
                        Bathroom
                      </span>
                    </div>
                    <hr />
                    <div className="d-flex align-items-center mt-3">
                      <img
                        src={una}
                        className="rounded-circle me-2"
                        alt="User"
                      />
                      <div className="customer">
                        <strong className="cust-name">Jayvion Simon</strong>
                        <p className="text-muted mb-0">
                          Remax Real Estate Center
                        </p>
                      </div>
                    </div>
                    <hr />
                    <p className="mt-2 price2">
                      <span className="dollar2">$581,339.00</span>{" "}
                      <span className="usd2">USD</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="d-flex">
                    <div className="card listing-card2">
                      <div className="position-relative">
                        <span className="top-listing-badge2">Gold Listing</span>
                        <span className="bottom-listing-badge2">
                          <i className="fa-solid fa-chevron-left"></i> 3/5{" "}
                          <i className="fa-solid fa-chevron-right"></i>
                        </span>
                        <img
                          src={wr}
                          className="card-img-top listing-img2"
                          alt="Listing Image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card-body">
                    <h5 className="card-title fw-bold">
                      Title of the Listing will come...
                      <i
                        className="fa-regular fa-heart icon-green2"
                        style={{ paddingLeft: "30px" }}
                      ></i>
                    </h5>
                    <p className="text-muted pt-1">
                      <i className="fas fa-map-marker-alt icon-red2"></i> Pluto
                      Street, Indonesia
                    </p>
                    <div className="d-flex justify-content-between text-muted boxstyle2">
                      <span>
                        <i className="fas fa-table-cells-large icon-green2"></i>{" "}
                        800 Sq Ft
                      </span>
                      <span>
                        <i className="fas fa-bed icon-green2"></i> 1 Bedroom
                      </span>
                      <span>
                        <i className="fas fa-bathtub icon-green2"></i> 2
                        Bathroom
                      </span>
                    </div>
                    <hr />
                    <div className="d-flex align-items-center mt-3">
                      <img
                        src={una}
                        className="rounded-circle me-2"
                        alt="User"
                      />
                      <div className="customer">
                        <strong className="cust-name">Jayvion Simon</strong>
                        <p className="text-muted mb-0">
                          Remax Real Estate Center
                        </p>
                      </div>
                    </div>
                    <hr />
                    <p className="mt-2 price2">
                      <span className="dollar2">$581,339.00</span>{" "}
                      <span className="usd2">USD</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="d-flex">
                    <div className="card listing-card2">
                      <div className="position-relative">
                        <span className="top-listing-badge2">Gold Listing</span>
                        <span className="bottom-listing-badge2">
                          <i className="fa-solid fa-chevron-left"></i> 3/5{" "}
                          <i className="fa-solid fa-chevron-right"></i>
                        </span>
                        <img
                          src={wr}
                          className="card-img-top listing-img2"
                          alt="Listing Image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card-body">
                    <h5 className="card-title fw-bold">
                      Title of the Listing will come...
                      <i
                        className="fa-regular fa-heart icon-green2"
                        style={{ paddingLeft: "30px" }}
                      ></i>
                    </h5>
                    <p className="text-muted pt-1">
                      <i className="fas fa-map-marker-alt icon-red2"></i> Pluto
                      Street, Indonesia
                    </p>
                    <div className="d-flex justify-content-between text-muted boxstyle2">
                      <span>
                        <i className="fas fa-table-cells-large icon-green2"></i>{" "}
                        800 Sq Ft
                      </span>
                      <span>
                        <i className="fas fa-bed icon-green2"></i> 1 Bedroom
                      </span>
                      <span>
                        <i className="fas fa-bathtub icon-green2"></i> 2
                        Bathroom
                      </span>
                    </div>
                    <hr />
                    <div className="d-flex align-items-center mt-3">
                      <img
                        src={una}
                        className="rounded-circle me-2"
                        alt="User"
                      />
                      <div className="customer">
                        <strong className="cust-name">Jayvion Simon</strong>
                        <p className="text-muted mb-0">
                          Remax Real Estate Center
                        </p>
                      </div>
                    </div>
                    <hr />
                    <p className="mt-2 price2">
                      <span className="dollar2">$581,339.00</span>{" "}
                      <span className="usd2">USD</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="d-flex">
                    <div className="card listing-card2">
                      <div className="position-relative">
                        <span className="top-listing-badge2">Gold Listing</span>
                        <span className="bottom-listing-badge2">
                          <i className="fa-solid fa-chevron-left"></i> 3/5{" "}
                          <i className="fa-solid fa-chevron-right"></i>
                        </span>
                        <img
                          src={wr}
                          className="card-img-top listing-img2"
                          alt="Listing Image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card-body">
                    <h5 className="card-title fw-bold">
                      Title of the Listing will come...
                      <i
                        className="fa-regular fa-heart icon-green2"
                        style={{ paddingLeft: "30px" }}
                      ></i>
                    </h5>
                    <p className="text-muted pt-1">
                      <i className="fas fa-map-marker-alt icon-red2"></i> Pluto
                      Street, Indonesia
                    </p>
                    <div className="d-flex justify-content-between text-muted boxstyle2">
                      <span>
                        <i className="fas fa-table-cells-large icon-green2"></i>{" "}
                        800 Sq Ft
                      </span>
                      <span>
                        <i className="fas fa-bed icon-green2"></i> 1 Bedroom
                      </span>
                      <span>
                        <i className="fas fa-bathtub icon-green2"></i> 2
                        Bathroom
                      </span>
                    </div>
                    <hr />
                    <div className="d-flex align-items-center mt-3">
                      <img
                        src={una}
                        className="rounded-circle me-2"
                        alt="User"
                      />
                      <div className="customer">
                        <strong className="cust-name">Jayvion Simon</strong>
                        <p className="text-muted mb-0">
                          Remax Real Estate Center
                        </p>
                      </div>
                    </div>
                    <hr />
                    <p className="mt-2 price2">
                      <span className="dollar2">$581,339.00</span>{" "}
                      <span className="usd2">USD</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="d-flex">
                    <div className="card listing-card2">
                      <div className="position-relative">
                        <span className="top-listing-badge2">Gold Listing</span>
                        <span className="bottom-listing-badge2">
                          <i className="fa-solid fa-chevron-left"></i> 3/5{" "}
                          <i className="fa-solid fa-chevron-right"></i>
                        </span>
                        <img
                          src={wr}
                          className="card-img-top listing-img2"
                          alt="Listing Image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card-body">
                    <h5 className="card-title fw-bold">
                      Title of the Listing will come...
                      <i
                        className="fa-regular fa-heart icon-green2"
                        style={{ paddingLeft: "30px" }}
                      ></i>
                    </h5>
                    <p className="text-muted pt-1">
                      <i className="fas fa-map-marker-alt icon-red2"></i> Pluto
                      Street, Indonesia
                    </p>
                    <div className="d-flex justify-content-between text-muted boxstyle2">
                      <span>
                        <i className="fas fa-table-cells-large icon-green2"></i>{" "}
                        800 Sq Ft
                      </span>
                      <span>
                        <i className="fas fa-bed icon-green2"></i> 1 Bedroom
                      </span>
                      <span>
                        <i className="fas fa-bathtub icon-green2"></i> 2
                        Bathroom
                      </span>
                    </div>
                    <hr />
                    <div className="d-flex align-items-center mt-3">
                      <img
                        src={una}
                        className="rounded-circle me-2"
                        alt="User"
                      />
                      <div className="customer">
                        <strong className="cust-name">Jayvion Simon</strong>
                        <p className="text-muted mb-0">
                          Remax Real Estate Center
                        </p>
                      </div>
                    </div>
                    <hr />
                    <p className="mt-2 price2">
                      <span className="dollar2">$581,339.00</span>{" "}
                      <span className="usd2">USD</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="d-flex">
                    <div className="card listing-card2">
                      <div className="position-relative">
                        <span className="top-listing-badge2">Gold Listing</span>
                        <span className="bottom-listing-badge2">
                          <i className="fa-solid fa-chevron-left"></i> 3/5{" "}
                          <i className="fa-solid fa-chevron-right"></i>
                        </span>
                        <img
                          src={wr}
                          className="card-img-top listing-img2"
                          alt="Listing Image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card-body">
                    <h5 className="card-title fw-bold">
                      Title of the Listing will come...
                      <i
                        className="fa-regular fa-heart icon-green2"
                        style={{ paddingLeft: "30px" }}
                      ></i>
                    </h5>
                    <p className="text-muted pt-1">
                      <i className="fas fa-map-marker-alt icon-red2"></i> Pluto
                      Street, Indonesia
                    </p>
                    <div className="d-flex justify-content-between text-muted boxstyle2">
                      <span>
                        <i className="fas fa-table-cells-large icon-green2"></i>{" "}
                        800 Sq Ft
                      </span>
                      <span>
                        <i className="fas fa-bed icon-green2"></i> 1 Bedroom
                      </span>
                      <span>
                        <i className="fas fa-bathtub icon-green2"></i> 2
                        Bathroom
                      </span>
                    </div>
                    <hr />
                    <div className="d-flex align-items-center mt-3">
                      <img
                        src={una}
                        className="rounded-circle me-2"
                        alt="User"
                      />
                      <div className="customer">
                        <strong className="cust-name">Jayvion Simon</strong>
                        <p className="text-muted mb-0">
                          Remax Real Estate Center
                        </p>
                      </div>
                    </div>
                    <hr />
                    <p className="mt-2 price2">
                      <span className="dollar2">$581,339.00</span>{" "}
                      <span className="usd2">USD</span>
                    </p>
                  </div>
                </div>
              </div>
           
            </div>
          </div>
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
    </>
  );
};

export default Agent;
