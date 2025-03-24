import React from "react";
import A1 from "../assets/img/A1.png"; // Ensure the path is correct
import "@fortawesome/fontawesome-free/css/all.min.css";
import A10 from "../assets/img/A10.png"; //
import A11 from "../assets/img/A11.png";
import A12 from "../assets/img/A12.png";
import uj from "../assets/img/footer.png";

const BlogSection = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="fw-bold">
              Rentership Ranks on the Rise: Canadian Cities <br />
              With Highest Shares of Renters
            </h1>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <img src={A1} alt="A1" className="img-fluid" />
          </div>
        </div>
      

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-7 post-section">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="row mt-4">
              <div className="col-md-5">
                <div>
                  <img src={A10} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-6">
                <img src={A11} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="recent-posts">
              <h4 className="fw-bold">Recent Post</h4>
              <div className="blog-card3">
                <div className="text-muted mt-3 mb-2 d-flex">
                  <i className="fa fa-calendar-alt"></i> 18 June 2022{" "}
                  <i
                    className="fa-regular fa-folder"
                    style={{
                      paddingLeft: "15px",
                      paddingRight: "5px",
                      paddingTop: "2px",
                    }}
                  ></i>
                  Uncategorized
                </div>
                <h5>Can You Negotiate Real Estate Agent Fees?</h5>
                <p className="text-muted" style={{ fontSize: "17px" }}>
                  Rentership at an all-time high.
                </p>
              </div>
              <div className="see-more-btn">
                <button className="btn1">See More</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <h3 className="fw-bold mt-5 text-center">Related Topics</h3>
        </div>
        <div className="col-md-12">
          <div>
            <img src={A12} alt="" className="img-fluid" />
          </div>
        </div>

        <div className="blog-card3">
          <div className="text-muted mt-3 mb-2 d-flex">
            <i className="fa fa-calendar-alt"></i> 18 June 2022{" "}
            <i
              className="fa-regular fa-folder"
              style={{
                paddingLeft: "15px",
                paddingRight: "5px",
                paddingTop: "2px",
              }}
            ></i>
            Uncategorized
          </div>
          <h5>
            Rentership Ranks on the Rise: Canadian Cities With Highest Shares of
            Renters
          </h5>
          <p className="text-muted" style={{ fontSize: "17px" }}>
            Rentership at an all-time high.Rentership at an all-time high, no
            longer just a young people’s share of tenant <br />
            households as renting spreads across all generations.
          </p>
        </div>
        <div className="see-more-btn">
          <button className="btn1">See More</button>
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

export default BlogSection;
