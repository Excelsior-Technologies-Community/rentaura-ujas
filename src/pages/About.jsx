import React from "react";
import A13 from "../assets/img/A13.png";
import Frame4 from "../assets/img/Frame4.png";
import Vector from "../assets/img/Vector.png";

const About = () => {
  return (
    <div>
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
              rent, searching for office space or looking to invest in
              commercial properties,{" "}
              <span className="text-success">Mexico Property Search</span> is
              the place to start. Plus, if you’re a real estate agent, we can
              help boost your business by efficiently advertising your
              properties on our platform. That’s because{" "}
              <span className="text-success">Mexico Property Search</span>{" "}
              generates more than 90 million visits per year and is present on
              multiple markets. Headquartered in Saskatoon, we operate in
              Canada, the United States, and several international locations,
              including Mexico, Puerto Rico, Costa Rica, the Dominican Republic,
              and more.
            </p>
          </div>
        </div>

        <div className="row">
          <img src={A13} alt="" className="img-fluid" />
        </div>

        <div className="row pt-5">
          <div className="col-md-6">
            <h2 className="fw-bold">Our Vision</h2>
            <p className="text-muted pt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="col-md-6">
            <h2 className="fw-bold">Our Mission</h2>
            <p className="text-muted pt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="row pt-5">
            <div className="col-md-6">
              <h2 className="fw-bold">Press</h2>
            </div>

            <div className="col-md-6">
              <p className="text-muted">
                Mexico Property Search’s in-depth real estate analyses and
                studies have been featured in some of the largest North American
                media outlets throughout the years. The most noteworthy
                achievements include mentions in publications like:
              </p>
            </div>
          </div>
        </div>

        <div className="row pt-5">
          <div className="col-md-12 d-flex justify-content-center">
            <img src={Frame4} alt="" className="" />
          </div>
        </div>
        <div className="row-md-12 pt-5">
          <div className="col-md-6">
            <h2 className="fw-bold">Our History</h2>
            <p className="text-muted pt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad mi
            </p>
          </div>
        </div>
      </div>

       
    </div>
  );
};

export default About;
