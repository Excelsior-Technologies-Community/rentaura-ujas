import React from "react";
import ku from "../assets/img/Video.png";
import ka from "../assets/img/imagea.png";
import kb from "../assets/img/imageb.png";
import "./Detail.css";
import uj from "../assets/img/footer.png";
import vectorIcon from "../assets/img/vector.png";

const Detail = () => {
  return (
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

      <div className="container d-flex liststyle2">
        <h1 className="fw-bold">Title of the listing will come here</h1>
      </div>

      <div className="container d-flex liststyle3">
        <div className="row d-flex align-items-stretch">
          <div className="col-lg-8 d-flex align-items-stretch">
            <img
              src={ku}
              alt="mk"
              className="img-fluid w-100 h-100"
              style={{ objectFit: "cover", borderRadius: "25px" }}
            />
          </div>

          <div className="col-lg-4 d-flex flex-column justify-content-between">
            <img
              src={ka}
              alt="mk"
              className="img-fluid w-100"
              style={{ flex: "1", objectFit: "cover", borderRadius: "25px" }}
            />
            <img
              src={kb}
              alt="mk"
              className="img-fluid w-100 mt-2"
              style={{ flex: "1", objectFit: "cover", borderRadius: "25px" }}
            />
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="fw-bold">Property description</h2>

        <h5 className="text-success mt-3">
          Property summary for (property name)
        </h5>
        <div className="row border-bottom pb-3">
          <div className="col-md-4">
            <p>
              <strong>Type:</strong> Residential
            </p>
            <p>
              <strong>Style:</strong> 2 Story
            </p>
            <p>
              <strong>Lot info:</strong> 403.25ft x 568.4ft
            </p>
            <p>
              <strong>Basement:</strong> Full Furnished basement
            </p>
          </div>
          <div className="col-md-4">
            <p>
              <strong>Taxes:</strong> $325,872 CAD
            </p>
            <p>
              <strong>Neighborhood:</strong> Bendale
            </p>
            <p>
              <strong>Postal Code:</strong> M9I 3S3
            </p>
          </div>
        </div>

        <h5 className="mt-4 text-success">Description</h5>
        <p className="col-8">
          Detached Homes and Townhouses in GTA region provide residents with the
          perfect blend of both natural and urban amenities. With quick and
          convenient access to the GO Station, Big Box Stores, Highways 401 &
          407, District Hospital, Rattlesnake Point Conservation Area, and so
          much more.
        </p>

        <h5 className="mt-4 text-success">Price history</h5>
        <p>
          {`{date}`} - <strong>$325,872 CAD</strong>
        </p>
        <p>
          {`{date}`} - <strong>$125,872 CAD</strong>
        </p>

        <h5 className="mt-4 text-success">Population</h5>
        <div className="row">
          <div className="col-md-4">
            <p>
              <strong>Male population:</strong> 2,794,435
            </p>
          </div>
          <div className="col-md-4">
            <p>
              <strong>Female population:</strong> 2,794,435
            </p>
          </div>
        </div>

        <h5 className="mt-4 text-success">Other demographics</h5>
        <div className="row row-cols-2 row-cols-md-4 row-cols-lg-8 g-3">
          {[
            "Backyard",
            "Pet Friendly",
            "Balcony",
            "Swimming Pool",
            "Garage",
            "Laundry",
            "Fitness Center",
            "Studio",
            "Outdoor Kitchen",
            "Family Room",
            "Barbeque",
            "Soccer Field",
            "Storage Units",
            "Wi-Fi",
            "Sauna",
            "Gym",
          ].map((item, index) => (
            <div className="col d-flex align-items-center" key={index}>
              <img
                src={vectorIcon}
                alt="Icon"
                width="24"
                height="24"
                className="me-2"
              />
              <p className="mb-0">{item}</p>
            </div>
          ))}{" "}
          <div className="text-center mt-4">
            <p>
              Is this home right up your alley?{" "}
              <a href="#" className="text-success fw-bold">
                Get all the details now.
              </a>
            </p>
          </div>
        </div>

        <div className="header-section mb-5">
  <div className="header-section1">
    <h1>Getting around Bay Street Corridor, Toronto, ON</h1>
    <p>
      The area around Bay Street Corridor, Toronto, ON is by far a
      walker's paradise. With all services and amenities nearby, you
      really don't need a car to run your errands. Regarding transit,
      there are first-class public transportation options you can
      take advantage of. Bay Street Corridor, Toronto, ON is in a very
      bikeable community, so you'll have a developed cycling
      infrastructure at your disposal.
      <br />
      Powered by{" "}
      <a href="#" className="text-white text-decoration-underline">
        Walk Score<sup>&reg;</sup>
      </a>
    </p>
  </div>

  {/* Score Cards Section */}
  <div className="container my-3">
    <div className="row g-3 flex-column align-items-start">
      <div className="col-12">
        <div className="score-card walk-score">
          <div className="score-border">
            <div className="score-text" style={{ color: "#185f3e" }}>
              99
            </div>
          </div>
          <div>
            <h5
              style={{
                color: "#185f3e",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              Walker's <br /> Paradise
            </h5>
            <p style={{ color: "gray" }}>Walk Score&reg;</p>
          </div>
        </div>
      </div>

      <div className="col-12">
        <div className="score-card transit-score">
          <div className="score-border">
            <div className="score-text" style={{ color: "#004aad" }}>
              100
            </div>
          </div>
          <div>
            <h5
              style={{
                color: "#004aad",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              Rider's <br /> Paradise
            </h5>
            <p style={{ color: "gray" }}>Transit Score&reg;</p>
          </div>
        </div>
      </div>

      <div className="col-12">
        <div className="score-card bike-score">
          <div className="score-border">
            <div className="score-text" style={{ color: "#68b723" }}>
              87
            </div>
          </div>
          <div>
            <h5
              style={{
                color: "#68b723",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              Very <br /> Bikeable
            </h5>
            <p style={{ color: "gray" }}>Bike Score&reg;</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

<div className="container">
  <div className="mt-5">
    <h2 className="fw-bold">5-year fixed mortgage rates</h2>
    <p>
      The<span className="text-success fw-bold"> mortgage rate and payment you see</span>see here is an estimate. </p>
    </div>
    </div>
       

     <div className="container p-4">
      <div className="row g-3">
        <div className="col-6 col-md-4">
          <small className="text-muted">Transaction type</small>
          <div>Buying a home</div>
        </div>
        <div className="col-6 col-md-4">
          <small className="text-muted">Rate type</small>
          <div>Fixed</div>
        </div>
        <div className="col-6 col-md-4">
          <small className="text-muted">Purchased price</small>
          <div>$800,000</div>
        </div>
        <div className="col-6 col-md-4">
          <small className="text-muted">Down Payment</small>
          <div>$120,000</div>
        </div>
        <div className="col-6 col-md-4">
          <small className="text-muted">%</small>
          <div>15</div>
        </div>
        <div className="col-6 col-md-4">
          <small className="text-muted">Rate term</small>
          <div>5-year</div>
        </div>
        <div className="col-6 col-md-4">
          <small className="text-muted">Location</small>
          <div>Toronto, ON</div>
        </div>
        <div className="col-6 col-md-4">
          <small className="text-muted">Amortization</small>
          <div>25-year</div>
        </div>
        <div className="col-6 col-md-4">
          <small className="text-muted">Occupancy</small>
          <div>Owner-occupied</div>
        </div>
        <div className="col-6 col-md-4">
          <small className="text-muted">Payment frequency</small>
          <div select>Monthly</div>
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
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Detail;
