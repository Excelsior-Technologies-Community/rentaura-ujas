import React from "react";
import fr from "../assets/img/Image14.png";
import we from "../assets/img/Image15.png";
import qw from "../assets/img/Image16.png";
import supp from "../assets/img/supp.png";
import tag from "../assets/img/tag.png";
import location from "../assets/img/location.png";
import uj from "../assets/img/footer.png";



const Cont = () => {
  return (
    <div className="container">
      <div className="contact-us d-flex align-items-center justify-content-center">
        <div className="text-center pt-5">
          <h1 className="fw-bold contact-heading">Contact Us</h1>
          <p className="contact-text pt-3">
            Mexico Property Search is a real estate marketplace serving the United States, Canada, and numerous international locations. We help home buyers find the right home, sellers find the right buyer, and agents & brokers get the online exposure they need.
          </p>
        </div>
      </div>

      <div className="my-5 row">
        <div className="col-md-4 info-card ">
         <img src={supp} alt="" className="pt-5"/>
          <div className="info-title pt-3 text-success">Customer Support</div>
          <p>For questions, please contact us:</p>
          <p><strong><i className="fa fa-phone text-success"></i> +123 456 7890</strong></p>
          <p><i className="fa fa-envelope text-success"></i> hello@mexps.com</p>
          <p className="text-muted">Monday to Friday 8:30 AM to 3:30 PM CST</p>
        </div>

        <div className="col-md-4 info-card">
        <img src={tag} alt=""  className="pt-5"  />
          <div className="info-title pt-3 text-success">Agent & Broker Services</div>
          <p>For services information, contact our specialists:</p>
          <p><strong><i className="fa fa-phone text-success"></i> +123 456 7890</strong></p>
          <p><i className="fa fa-envelope text-success"></i> hello@mexps.com</p>
        </div>

        <div className="col-md-4 info-card">
        <img src={location} alt=""  className="pt-5" />
          <div className="info-title pt-3 text-success">Mailing Address</div>
          <p>516 Wellman Crescent, Saskatoon, SK, S7T 0J1 Canada</p>
        </div>
      </div>

      <div className="my-5 row">
        <div className="col-md-6">
          <h2 className="header-title">Advertising for Businesses</h2>
          <p className="header-text">
            Point2 offers a perfect platform for big advertisers. <span className="text-success">Check out theMexico Property Search Media Kit.</span>
          </p>
        </div>
        <div className="col-md-6 form-container">
          <form>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Your Name</label>
                <input type="text" className="form-control" placeholder="Your full name" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Your Email</label>
                <input type="email" className="form-control" placeholder="example@email.com" />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Your Phone</label>
                <input type="tel" className="form-control" placeholder="+123-456-7890" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Your Subject</label>
                <select className="form-select">
                  <option>Question</option>
                  <option>Inquiry</option>
                  <option>Feedback</option>
                </select>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Your Message</label>
              <textarea className="form-control" rows="4" placeholder="Type Here"></textarea>
            </div>
            <button type="submit" className="btn btn-success">Send Message</button>
          </form>
          <div className="mt-4 text-center end-text">
            <p>Contact us at<span className="text-success">advertising@point2homes.com</span></p>
          </div>
        </div>
      </div>

      <div className="my-5 blog-container">
        <h2 className="blog-header">Press Releases</h2>
        <div className="row g-4 justify-content-center">
          <div className="col-md-4 blog-card">
            <img src={fr} alt="Work-Life Balance" />
            <p className="text-muted mt-2"><i className="fa fa-calendar-alt"></i> 18 June 2022</p>
            <h5>Rebranded Real Estate Marketplace Point2 Reaches New Traffic Milestone</h5>
            <p className="text-muted">Lorem ipsum dolor sit amet...</p>
            <a href="#" className="read-more">Read More <i className="fa-solid fa-chevron-right"></i></a>
          </div>
          <div className="col-md-4 blog-card">
            <img src={we} alt="Luxury Homes" />
            <p className="text-muted mt-2"><i className="fa fa-calendar-alt"></i> 18 June 2022</p>
            <h5>Point2 Breaks New Traffic Record e Point2 Reaches New Traffic Milestone</h5>
            <p className="text-muted">Lorem ipsum dolor sit amet...</p>
            <a href="#" className="read-more">Read More <i className="fa-solid fa-chevron-right"></i></a>
          </div>
          <div className="col-md-4 blog-card">
            <img src={qw} alt="City vs. Suburbs" />
            <p className="text-muted mt-2"><i className="fa fa-calendar-alt"></i> 18 June 2022</p>
            <h5>New Traffic Milestone for Point2 e Point2 Reaches New Traffic Milestone</h5>
            <p className="text-muted">Lorem ipsum dolor sit amet...</p>
            <a href="#" className="read-more">Read More <i className="fa-solid fa-chevron-right"></i></a>
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

export default Cont;
