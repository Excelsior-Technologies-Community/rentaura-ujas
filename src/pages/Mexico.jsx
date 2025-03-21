import React from "react";
import A1 from "../assets/img/A1.png";
import A2 from "../assets/img/A2.png";
import A3 from "../assets/img/A3.png";
import A4 from "../assets/img/A4.png";
import A5 from "../assets/img/A5.png";
import A6 from "../assets/img/A6.png";
import A7 from "../assets/img/A7.png";
import A8 from "../assets/img/A8.png";
import A9 from "../assets/img/A9.png";

const Mexico = () => {
  return (
    <>
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

      {/* <div className="container">
        <div className="row">
          <div className="col-md-4 pt-5">
            <p className="fw-bold">
              Top Filter Real Estate Agents in Bay Street Corridor,
              <br />
              Toronto, ON
            </p>

            <div> */}
              <div className="container mt-3">
                <div className="row content-section">
                  <div className="col-md-6 content-box">
                    <h3 className="content-title">
                      Mexico's Hottest Real Estate Markets in 2024
                    </h3>
                    <p>
                      Discover the booming locations and rising stars in the
                      Mexican property market. Find your investment or dream
                      home destination.
                    </p>
                  </div>
                </div>
              </div>

              <div className="container blog-container">
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <div className="blog-card-one">
                      <img src={A1} alt="Work-Life Balance" />
                      <div className="text-muted mt-3 mb-3 d-flex">
                        <i className="fa fa-calendar-alt"></i> 18 June 2022{" "}
                        <i
                          className="fa-regular fa-folder"
                          style={{ paddingLeft: "15px", paddingRight: "5px", paddingTop: "2px" }}
                        ></i>
                        (Category){" "}
                      </div>
                      <h5>
                        Rentership Ranks on the Rise: Canadian Cities With
                        Highest Shares of Renters
                      </h5>
                      <p className="text-muted"  style={{ fontSize: "1.2rem" }}>
                        Rentership at an all-time high, no longer just a young
                        people’s game; Montréal leads in share of tenant
                        households as renting spreads across all generations.
                      </p>
                      <a href="Singlepost.html" className="read-more text-success">
                        Read More{" "}
                        <i
                          className="fa-solid fa-chevron-right"
                         style= {{ paddingLeft: "2px" }}
                        ></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="blog-card-one">
                      <img src={A2} alt="Luxury Homes" />
                      <div className="text-muted mt-3 mb-3 d-flex">
                        <i className="fa fa-calendar-alt"></i> 18 June 2022{" "}
                        <i
                          className="fa-regular fa-folder"
                          style={{ paddingLeft: "15px", paddingRight: "5px", paddingTop: "2px" }}
                        ></i>
                        (Category){" "}
                      </div>
                      <h5>
                        Gilded Gates Galore: Canadian Cities With Lavish Shares
                        of Luxury Homes for Sale
                      </h5>
                      <p className="text-muted" style={{ fontSize: "1.2rem" }}>
                        Rentership at an all-time high, no longer just a young
                        people’s game; Montréal leads in share of tenant
                        households as renting spreads across all generations.
                      </p>
                      <a href="Singlepost.html" className="read-more text-success">
                        Read More{" "}
                        <i
                          className="fa-solid fa-chevron-right"
                          style= {{ paddingLeft: "2px" }}
                        ></i>
                      </a>
                    </div>
                  </div>
                </div>
                <hr  style={{ marginTop: "50px" }} />
              </div>

              <div className="container mt-5">
                <div className="row">
                  <div className="col-md-8">
                    <h4 className="fw-bold">REPORTS & STUDIES</h4>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="blog-card1">
                          <img src={A3} alt="Work-Life Balance" />
                          <div className="text-muted mt-3 mb-3 d-flex">
                            <i className="fa fa-calendar-alt"></i> 18 June 2022{" "}
                            <i
                              className="fa-regular fa-folder"
                              style={{ paddingLeft: "15px", paddingRight: "5px", paddingTop: "2px" }}
                            ></i>
                            (Category){" "}
                          </div>
                          <h5>
                            Rentership Ranks on the Rise: Canadian Cities With
                            Highest Shares of Renters
                          </h5>
                          <p className="text-muted"style={{ fontSize: "1.2rem" }}>
                            Rentership at an all-time high, no longer just a
                            young people’s game; Montréal leads in share of
                            tenant households as renting spreads across all
                            generations.
                          </p>
                          <a href="Singlepost.html" className="read-more1 text-success">
                            Read More{" "}
                            <i
                              className="fa-solid fa-chevron-right"
                              style= {{ paddingLeft: "2px" }}
                            ></i>
                          </a>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="blog-card1">
                          <img src={A4} alt="Work-Life Balance" />
                          <div className="text-muted mt-3 mb-3 d-flex">
                            <i className="fa fa-calendar-alt"></i> 18 June 2022{" "}
                            <i
                              className="fa-regular fa-folder"
                              style={{ paddingLeft: "15px", paddingRight: "5px", paddingTop: "2px" }}
                            ></i>
                            (Category){" "}
                          </div>
                          <h5>
                            Rentership Ranks on the Rise: Canadian Cities With
                            Highest Shares of Renters
                          </h5>
                          <p className="text-muted"style={{ fontSize: "1.2rem" }}>
                            Rentership at an all-time high, no longer just a
                            young people’s game; Montréal leads in share of
                            tenant households as renting spreads across all
                            generations.
                          </p>
                          <a href="Singlepost.html" className="read-more1 text-success">
                            Read More{" "}
                            <i
                              className="fa-solid fa-chevron-right"
                              style= {{ paddingLeft: "2px" }}
                            ></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <h4 className="fw-bold"style={{ color: "#0E694B" }}>
                      Popular categories
                    </h4>
                    <ul className="list-unstyled">
                      <li className="d-flex justify-content-between py-3">
                        <span className="linkcolor">US Real Estate</span>{" "}
                        <span>15</span>
                      </li>
                      <li className="d-flex justify-content-between py-3">
                        <span className="linkcolor">
                          International Real Estate
                        </span>{" "}
                        <span>09</span>
                      </li>
                      <li className="d-flex justify-content-between py-3">
                        <span className="linkcolor">Reports & Studies</span>{" "}
                        <span>10</span>
                      </li>
                      <li className="d-flex justify-content-between py-3">
                        <span className="linkcolor">Homebuying</span>{" "}
                        <span>08</span>
                      </li>
                      <li className="d-flex justify-content-between py-3">
                        <span className="linkcolor">Renting</span>{" "}
                        <span>02</span>
                      </li>
                      <li className="d-flex justify-content-between py-3">
                        <span className="linkcolor">Selling</span>{" "}
                        <span>09</span>
                      </li>
                      <li className="d-flex justify-content-between py-3">
                        <span className="linkcolor">Tips & Tricks</span>{" "}
                        <span>16</span>
                      </li>
                      <li className="d-flex justify-content-between py-3">
                        <span className="linkcolor">Life Style</span>{" "}
                        <span>25</span>
                      </li>
                      <li className="d-flex justify-content-between py-3">
                        <span className="linkcolor">For Professionals</span>{" "}
                        <span>19</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <hr style={{ marginTop: "50px" }}/>
              </div>

              <div className="container mt-5">
                <h4 className="News-title">HOMEBUYING</h4>
                <div className="row">
                  <div className="col-md-7">
                    <img
                      src={A5}
                      className="img-fluid news-image"
                      alt="Home Image"
                    />
                    <div className="blog-card2">
                      <div className="text-muted mt-3 mb-3 d-flex">
                        <i className="fa fa-calendar-alt"></i> 18 June 2022{" "}
                        <i
                          className="fa-regular fa-folder"
                          style={{ paddingLeft: "15px", paddingRight: "5px", paddingTop: "2px" }}
                        ></i>
                        (Category){" "}
                      </div>
                      <h5>
                        Rentership Ranks on the Rise: Canadian Cities With
                        Highest Shares of Renters
                      </h5>
                      <p className="text-muted" style={{ fontSize: "20px" }}>
                        Rentership at an all-time high, no longer just a young
                        people’s game; Montréal leads in share of tenant
                        households as renting spreads across all generations.
                      </p>
                      <a href="Singlepost.html" className="read-more2 text-success">
                        Read More{" "}
                        <i
                          className="fa-solid fa-chevron-right"
                          style= {{ paddingLeft: "2px" }}
                        ></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="blog-card3">
                      <div className="text-muted mt-3 mb-2 d-flex">
                        <i className="fa fa-calendar-alt"></i> 18 June 2022{" "}
                        <i
                          className="fa-regular fa-folder"
                          style={{ paddingLeft: "15px", paddingRight: "5px", paddingTop: "2px" }}
                        ></i>
                        (Category){" "}
                      </div>
                      <h5>
                        Can You Negotiate Real Estate Agent Fees? 8 Things You
                        Need to Know First
                      </h5>
                      <p className="text-muted" style={{ fontSize: "17px" }}>
                        Rentership at an all-time high, no longer just a young
                        people’s game; Montréal leads in share of tenant
                        households as renting spreads across all generations.
                      </p>
                    </div>
                    <div className="blog-card4">
                      <div className="text-muted mt-3 mb-2 d-flex">
                        <i className="fa fa-calendar-alt"></i> 18 June 2022{" "}
                        <i
                          className="fa-regular fa-folder"
                          style={{ paddingLeft: "15px", paddingRight: "5px", paddingTop: "2px" }}
                        ></i>
                        (Category){" "}
                      </div>
                      <h5>
                        Can You Negotiate Real Estate Agent Fees? 8 Things You
                        Need to Know First
                      </h5>
                      <p className="text-muted" style={{ fontSize: "17px" }}>
                        Rentership at an all-time high, no longer just a young
                        people’s game; Montréal leads in share of tenant
                        households as renting spreads across all generations.
                      </p>
                    </div>
                    <div className="see-more-btn">
                      <button className="btn1 btn-outline-dark">
                        See More
                      </button>
                    </div>
                  </div>
                </div>
                <hr style={{ marginTop: "50px" }} />
              </div>

              <div className="container mt-5">
                <div className="row">
                  <div className="col-md-6">
                    <h4 className="report-section-title">REPORTS & STUDIES</h4>
                    <img src={A6} className="report-image" alt="News Image" />
                    <div className="blog-card5">
                      <div className="text-muted mt-3 mb-3 d-flex">
                        <i className="fa fa-calendar-alt"></i> 18 June 2022{" "}
                        <i
                          className="fa-regular fa-folder"
                          style={{ paddingLeft: "15px", paddingRight: "5px", paddingTop: "2px" }}
                        ></i>
                        (Category){" "}
                      </div>
                      <h5>
                        Rentership Ranks on the Rise: Canadian Cities With
                        Highest Shares of Renters
                      </h5>
                      <p className="text-muted"style={{ fontSize: "19px" }}>
                        Rentership at an all-time high, no longer just a young
                        people’s game; Montréal leads in share of tenant
                        households as renting spreads across all generations.
                      </p>
                      <a href="Singlepost.html" className="read-more3 text-success">
                        Read More{" "}
                        <i
                          className="fa-solid fa-chevron-right"
                          style= {{ paddingLeft: "2px" }}
                        ></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h4 className="report-section-title">REPORTS & STUDIES</h4>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="blog-card6">
                          <img src={A7} alt="Work-Life Balance" />
                          <div className="text-muted mt-3 mb-3 d-flex">
                            <i className="fa fa-calendar-alt"></i> 18 June 2022{" "}
                            <i
                              className="fa-regular fa-folder"
                              style={{ paddingLeft: "15px", paddingRight: "5px", paddingTop: "2px" }}
                            ></i>
                            (Category){" "}
                          </div>
                          <h5>
                            Rentership Ranks on the Rise: Canadian Cities With
                            Highest Shares of Renters
                          </h5>
                          <p className="text-muted" style={{ fontSize: "1rem" }}>
                            Rentership at an all-time high, no longer just a
                            young people’s game; Montréal leads in share of
                            tenant households as renting spreads across all
                            generations.
                          </p>
                          <a href="Singlepost.html" className="read-more1 text-success">
                            Read More{" "}
                            <i
                              className="fa-solid fa-chevron-right"
                              style= {{ paddingLeft: "2px" }}
                            ></i>
                          </a>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="blog-card6">
                          <img src={A8} alt="Work-Life Balance" />
                          <div className="text-muted mt-3 mb-3 d-flex">
                            <i className="fa fa-calendar-alt"></i> 18 June 2022{" "}
                            <i
                              className="fa-regular fa-folder"
                              style={{ paddingLeft: "15px", paddingRight: "5px", paddingTop: "2px" }}
                            ></i>
                            (Category){" "}
                          </div>
                          <h5>
                            Rentership Ranks on the Rise: Canadian Cities With
                            Highest Shares of Renters
                          </h5>
                          <p className="text-muted"style={{ fontSize: "1rem" }}>
                            Rentership at an all-time high, no longer just a
                            young people’s game; Montréal leads in share of
                            tenant households as renting spreads across all
                            generations.
                          </p>
                          <a href="Singlepost.html" className="read-more3 text-success">
                            Read More{" "}
                            <i
                              className="fa-solid fa-chevron-right"
                              style= {{ paddingLeft: "2px" }}
                            ></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr  style={{ marginTop: "50px" }} />
              </div>

              <div className="container mt-5">
                <h4 className="lifestyle-title">LIFESTYLE</h4>
                <div className="row">
                  <div className="col-md-7">
                    <img
                      src={A9}
                      className="img-fluid lifestyle-image"
                      alt="Home Image"
                    />
                    <div className="blog-card7">
                      <div className="text-muted mt-3 mb-3 d-flex">
                        <i className="fa fa-calendar-alt"></i> 18 June 2022{" "}
                        <i
                          className="fa-regular fa-folder"
                          style={{ paddingLeft: "15px", paddingRight: "5px", paddingTop: "2px" }}
                        ></i>
                        (Category){" "}
                      </div>
                      <h5>
                        Rentership Ranks on the Rise: Canadian Cities With
                        Highest Shares of Renters
                      </h5>
                      <p className="text-muted" style={{ fontSize: "20px" }}>
                        Rentership at an all-time high, no longer just a young
                        people’s game; Montréal leads in share of tenant
                        households as renting spreads across all generations.
                      </p>
                      <a href="Singlepost.html" className="read-more4 text-success text-success">
                        Read More{" "}
                        <i
                          className="fa-solid fa-chevron-right"
                          style= {{ paddingLeft: "2px" }}
                        ></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="blog-card8">
                      <div className="text-muted mt-3 mb-2 d-flex">
                        <i className="fa fa-calendar-alt"></i> 18 June 2022{" "}
                        <i
                          className="fa-regular fa-folder"
                          style={{ paddingLeft: "15px", paddingRight: "5px", paddingTop: "2px" }}
                        ></i>
                        (Category){" "}
                      </div>
                      <h5>
                        Can You Negotiate Real Estate Agent Fees? 8 Things You
                        Need to Know First
                      </h5>
                      <p className="text-muted"style={{ fontSize: "17px" }}>
                        Rentership at an all-time high, no longer just a young
                        people’s game; Montréal leads in share of tenant
                        households as renting spreads across all generations.
                      </p>
                    </div>
                    <div className="blog-card4">
                      <div className="text-muted mt-3 mb-2 d-flex">
                        <i className="fa fa-calendar-alt"></i> 18 June 2022{" "}
                        <i
                          className="fa-regular fa-folder"
                          style={{ paddingLeft: "15px", paddingRight: "5px", paddingTop: "2px" }}
                        ></i>
                        (Category){" "}
                      </div>
                      <h5>
                        Can You Negotiate Real Estate Agent Fees? 8 Things You
                        Need to Know First
                      </h5>
                      <p className="text-muted" style={{ fontSize: "17px" }}>
                        Rentership at an all-time high, no longer just a young
                        people’s game; Montréal leads in share of tenant
                        households as renting spreads across all generations.
                      </p>
                    </div>
                    <div className="see-more-btn1">
                      <button className="btn2 btn-outline-dark text-success text-success">
                        See More
                      </button>
                    </div>
                  </div>
                </div>
                <hr style={{ marginTop: "50px" }} />
              </div>

              <div className="container mt-5">
                <div className="row section-Nearby">
                  <div className="col-md-5">
                    <div className="Nearby">
                      <h1>HOUSES FOR RENT IN U.S</h1>
                      <h2>IN CANADA</h2>
                    </div>
                  </div>
                  <div className="col-md-3 liststyle3">
                    <ul className="list-unstyled">
                      <li>Scarborough Homes for Sale</li>
                      <li> Etobicoke Homes for Sale</li>
                      <li> Etobicoke Homes for Sale</li>
                      <li> North York Homes for Sale</li>
                      <li> Forest Hill Homes for Sale</li>
                      <li> East York Homes for Sale</li>
                      <li> Leaside Homes for Sale</li>
                      <li> High Park Homes for Sale</li>
                      <li> Niagara Homes for Sale</li>
                      <li> Leslieville Homes for Sale</li>
                      <li> Rosedale Homes for Sale</li>
                    </ul>
                  </div>
                  <div className="col-md-4 liststyle3">
                    <ul className="list-unstyled">
                      <li> Don Mills Homes for Sale</li>
                      <li> Highland Creek Homes for Sale</li>
                      <li> Rexdale Homes for Sale</li>
                      <li> The Beach Homes for Sale</li>
                      <li> Mimico Homes for Sale</li>
                      <li> Bathurst Manor Homes for Sale</li>
                      <li> Guildwood Homes for Sale</li>
                      <li> Malvern Homes for Sale</li>
                      <li> Bridle Path Homes for Sale</li>
                      <li> Bloor West Village Homes for Sale</li>
                      <li> Roncesvalles Homes for Sale</li>
                    </ul>
                  </div>
                </div>
              </div>
        
    
    
      
    </>
  );
};

export default Mexico;
