import React from "react";
import error from "../assets/img/error.png";
import uj from "../assets/img/footer.png";

const Error = () => {
  return (
    <div>
      <div className="container">
        <div className="row pt-5">
          <div className="col-md-6">
            <h1 className="fw-bold">
              Oops, Can’t Load this Page, Please Check Your Connection and
              Reload this Page
            </h1>
            <br />
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="btn btn-success ">Back to Homepage</button>
          </div>
          <div className="col-md-6 text-center pb-5">
            <img src={error} alt="" className="img-fluid" />
          </div>
        </div>

        <footer className="footer ">
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
                The trademarks MLS®, Multiple Listing Service® and the
                associated logos are owned by The Canadian Real Estate
                Association (CREA) and identify the quality of services provided
                by real estate professionals who are members of CREA. The
                trademarks REALTOR®, REALTORS®, and the REALTOR® logo are
                controlled by The Canadian Real Estate Association (CREA) and
                identify real estate professionals who are members of CREA.
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

export default Error;
