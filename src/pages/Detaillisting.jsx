import React from "react";
import blue from "../assets/img/blue.png";
import card from "../assets/img/card.png";
import location from "../assets/img/location.svg";
import call from "../assets/img/call.svg";
import global from "../assets/img/global.svg";
import user from "../assets/img/user.svg";
import tklu from "../assets/img/tklu.png";
import "../pages/Detaillisting.css";
import uj from "../assets/img/footer.png";
const Detaillisting = () => {
  return (
    <div>
      <div>
        <div className="container d-flex liststyle1">
          <ul style={{ listStyleType: "none" }}>
            <li>Home</li>
          </ul>
          <ul style={{ listStyleType: "disc" }}>
            <li>Canada</li>
          </ul>
          <ul style={{ listStyleType: "disc", color: "lightgrey" }}>
            <li>Downtown</li>
          </ul>
        </div>

        <div className="container ">
          <h1 className="fw-bold">
            Bay Street Corridor, Toronto Real Estate Agents
          </h1>
          <h5 className="pt-3">14,255 Brokers in Toronto, ON</h5>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4 pt-5">
            <p className="fw-bold">
              Top Filter Real Estate Agents in Bay Street Corridor,
              <br />
              Toronto, ON
            </p>
            <div className="d-flex flex-column">
              <label for="agenet">Agenet name</label>
              <input
                className="rounded-4 py-3"
                type="text"
                id="agent"
                name="agent"
                placeholder="Shaina Sheikh"
              />
              <label for="agenet">Brokerage</label>
              <input
                className="rounded-4 py-3"
                type="text"
                id="agent"
                name="agent"
                placeholder="Ex. Square Yard"
              />
              <label for="agenet">Phone Number</label>
              <input
                className="rounded-4 py-3"
                type="text"
                id="agent"
                name="agent"
                placeholder="+123-456-7890"
              />
              <div className="pt-3">
                <button className="btn btn-primary rounded-4 py-3 bg-success w-100 ">
                  Search agents{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div>
              <div className="d-flex">
                <img src={blue} alt="blue" />

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
              <div className="d-flex">
                <div className="d-flex">
                  <img src={call} alt="call" />
                  <p className="pt-3 ms-2">(647) 389-0027 (Cell)</p>
                </div>
                <div className="d-flex ms-3">
                  <img src={call} alt="call" />
                  <p className="pt-3 ms-2">(647) 389-0027 (Cell)</p>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <h4 className="text-success">About</h4>
                    <p className="pt-5">
                      As the trusted Real Estate advisor for my clients, I
                      understand that selling or/buying a home is complex and
                      deeply personal. There is also a lot at stake financially
                      and personally. This perspective on the process and the
                      responsibility
                      <span className="text-success text-decoration-underline">
                        See more
                      </span>
                    </p>
                  </div>
                  {/* <div className="pt-3">
                  <button className="btn bg-white rounded-4 py-3 w-50 border-2 border-secondary">
                  Visit Website
                  <img className="ms-3" src={global} alt="global" />
                  </button>
                </div> */}
                  <div className="col-lg-6">
                    <div className="">
                      <h4 className="text-success">Listings</h4>
                      <p className="pt-5 ">
                        As the trusted Real Estate advisor for my clients, I
                        understand that selling or/buying a home is complex and
                        deeply personal. There is also a lot at stake
                        financially
                        <br />
                        <span className="text-success text-decoration-underline   text-center">
                          View all 127 listings
                        </span>
                      </p>
                    </div>
                    {/* <div className="pt-3">
                  <button className="btn bg-white rounded-4 py-3 w-50 border-2 border-secondary">
                  Visit Website
                  <img className="ms-3" src={global} alt="global" />
                  </button> */}
                  </div>
                </div>

                <div className="d-flex justify-content-between gap-3 ">
                  <button className="btn bg-white rounded-4 py-3 w-50 border-2 border-secondary">
                    Visit Website
                    <img className="ms-3" src={global} alt="global" />
                  </button>

                  <button className="btn bg-success rounded-4 py-3 w-50 border-2 border-secondary">
                    See Profile
                    <img className="ms-3" src={user} alt="user" />
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <div className="d-flex">
                <img src={tklu} alt="tklu" />

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
              <div className="d-flex">
                <div className="d-flex">
                  <img src={call} alt="call" />
                  <p className="pt-3 ms-2">(647) 389-0027 (Cell)</p>
                </div>
                <div className="d-flex ms-3">
                  <img src={call} alt="call" />
                  <p className="pt-3 ms-2">(647) 389-0027 (Cell)</p>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <h4 className="text-success">About</h4>
                    <p className="pt-5">
                      As the trusted Real Estate advisor for my clients, I
                      understand that selling or/buying a home is complex and
                      deeply personal. There is also a lot at stake financially
                      and personally. This perspective on the process and the
                      responsibility
                      <span className="text-success text-decoration-underline">
                        See more
                      </span>
                    </p>
                  </div>
                  {/* <div className="pt-3">
                  <button className="btn bg-white rounded-4 py-3 w-50 border-2 border-secondary">
                  Visit Website
                  <img className="ms-3" src={global} alt="global" />
                  </button>
                </div> */}
                  <div className="col-lg-6">
                    <div className="">
                      <h4 className="text-success">Listings</h4>
                      <p className="pt-5 ">
                        As the trusted Real Estate advisor for my clients, I
                        understand that selling or/buying a home is complex and
                        deeply personal. There is also a lot at stake
                        financially
                        <br />
                        <span className="text-success text-decoration-underline   text-center">
                          View all 127 listings
                        </span>
                      </p>
                    </div>
                    {/* <div className="pt-3">
                  <button className="btn bg-white rounded-4 py-3 w-50 border-2 border-secondary">
                  Visit Website
                  <img className="ms-3" src={global} alt="global" />
                  </button> */}
                  </div>
                </div>

                <div className="d-flex justify-content-between gap-3 ">
                  <button className="btn bg-white rounded-4 py-3 w-50 border-2 border-secondary">
                    Visit Website
                    <img className="ms-3" src={global} alt="global" />
                  </button>

                  <button className="btn bg-success rounded-4 py-3 w-50 border-2 border-secondary">
                    See Profile
                    <img className="ms-3" src={user} alt="user" />
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <div className="d-flex">
                <img src={blue} alt="blue" />

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
              <div className="d-flex">
                <div className="d-flex">
                  <img src={call} alt="call" />
                  <p className="pt-3 ms-2">(647) 389-0027 (Cell)</p>
                </div>
                <div className="d-flex ms-3">
                  <img src={call} alt="call" />
                  <p className="pt-3 ms-2">(647) 389-0027 (Cell)</p>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <h4 className="text-success">About</h4>
                    <p className="pt-5">
                      As the trusted Real Estate advisor for my clients, I
                      understand that selling or/buying a home is complex and
                      deeply personal. There is also a lot at stake financially
                      and personally. This perspective on the process and the
                      responsibility
                      <span className="text-success text-decoration-underline">
                        See more
                      </span>
                    </p>
                  </div>
                  {/* <div className="pt-3">
                  <button className="btn bg-white rounded-4 py-3 w-50 border-2 border-secondary">
                  Visit Website
                  <img className="ms-3" src={global} alt="global" />
                  </button>
                </div> */}
                  <div className="col-lg-6">
                    <div className="">
                      <h4 className="text-success">Listings</h4>
                      <p className="pt-5 ">
                        As the trusted Real Estate advisor for my clients, I
                        understand that selling or/buying a home is complex and
                        deeply personal. There is also a lot at stake
                        financially
                        <br />
                        <span className="text-success text-decoration-underline   text-center">
                          View all 127 listings
                        </span>
                      </p>
                    </div>
                    {/* <div className="pt-3">
                  <button className="btn bg-white rounded-4 py-3 w-50 border-2 border-secondary">
                  Visit Website
                  <img className="ms-3" src={global} alt="global" />
                  </button> */}
                  </div>
                </div>

                <div className="d-flex justify-content-between gap-3 ">
                  <button className="btn bg-white rounded-4 py-3 w-50 border-2 border-secondary">
                    Visit Website
                    <img className="ms-3" src={global} alt="global" />
                  </button>

                  <button className="btn bg-success rounded-4 py-3 w-50 border-2 border-secondary">
                    See Profile
                    <img className="ms-3" src={user} alt="user" />
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <div className="d-flex">
                <img src={tklu} alt="tklu" />

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
              <div className="d-flex">
                <div className="d-flex">
                  <img src={call} alt="call" />
                  <p className="pt-3 ms-2">(647) 389-0027 (Cell)</p>
                </div>
                <div className="d-flex ms-3">
                  <img src={call} alt="call" />
                  <p className="pt-3 ms-2">(647) 389-0027 (Cell)</p>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <h4 className="text-success">About</h4>
                    <p className="pt-5">
                      As the trusted Real Estate advisor for my clients, I
                      understand that selling or/buying a home is complex and
                      deeply personal. There is also a lot at stake financially
                      and personally. This perspective on the process and the
                      responsibility
                      <span className="text-success text-decoration-underline">
                        See more
                      </span>
                    </p>
                  </div>
                  {/* <div className="pt-3">
                  <button className="btn bg-white rounded-4 py-3 w-50 border-2 border-secondary">
                  Visit Website
                  <img className="ms-3" src={global} alt="global" />
                  </button>
                </div> */}
                  <div className="col-lg-6">
                    <div className="">
                      <h4 className="text-success">Listings</h4>
                      <p className="pt-5 ">
                        As the trusted Real Estate advisor for my clients, I
                        understand that selling or/buying a home is complex and
                        deeply personal. There is also a lot at stake
                        financially
                        <br />
                        <span className="text-success text-decoration-underline   text-center">
                          View all 127 listings
                        </span>
                      </p>
                    </div>
                    {/* <div className="pt-3">
                  <button className="btn bg-white rounded-4 py-3 w-50 border-2 border-secondary">
                  Visit Website
                  <img className="ms-3" src={global} alt="global" />
                  </button> */}
                  </div>
                </div>

                <div className="d-flex justify-content-between gap-3 ">
                  <button className="btn bg-white rounded-4 py-3 w-50 border-2 border-secondary">
                    Visit Website
                    <img className="ms-3" src={global} alt="global" />
                  </button>

                  <button className="btn bg-success rounded-4 py-3 w-50 border-2 border-secondary">
                    See Profile
                    <img className="ms-3" src={user} alt="user" />
                  </button>
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
    </div>
  );
};

export default Detaillisting;
