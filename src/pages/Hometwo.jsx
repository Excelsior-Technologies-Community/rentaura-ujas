import React from "react";
import uns from "../assets/img/Imagex1.png";
import wr from "../assets/img/Image17.png";
import fo from "../assets/img/Imagex2.png";
import una from "../assets/img/Avatar5.png";
import wt from "../assets/img/Image18.png";
import qa from "../assets/img/Image19.png";
import "./Hometwo.css";

const Hometwo = () => {
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
      export default ListComponent;
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <div className="search-container w-50">
            <div>
              <span className="fw-bold me-1 searchBy">Search by</span>
              <div className="dropdown">
                <button
                  className="btn border-0 bg-transparent dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Location
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      New York
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Los Angeles
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Miami
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="vertical-line"></div>
            <i
              className="fa fa-search"
              style={{ color: "rgb(80, 79, 79)", paddingRight: "5px" }}
            ></i>
            <input
              type="text"
              className="search-input"
              placeholder="Quintana Roo, Mexico"
            />
            <button className="search-btn">
              <i className="bi bi-search icon1"></i>
            </button>
          </div>
          <div className="d-flex gap-2">
            <div className="dropdown">
              <button
                className="filter-btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa fa-dollar icon1"></i> Price
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Low to High
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    High to Low
                  </a>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <button
                className="filter-btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-bed icon1"></i> Beds
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    1 Bed
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    2 Beds
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    3+ Beds
                  </a>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <button
                className="filter-btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-home-lg icon1"></i> Property Type
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Apartment
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    House
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Villa
                  </a>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <button
                className="filter-btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-sliders icon1"></i> More
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Garage
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Garden
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Pool
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h2 className="fw-bold">Toronto, ON Homes for sale & Real Estate</h2>
            <p className="text-muted">14,255 Homes for Sale in Toronto, ON</p>
          </div>
          <div className="d-flex align-items-center">
            <div className="dropdown me-2">
              <button
                className="btn btn-outline-secondary dropdown-toggle"
                type="button"
                id="sortDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sort by best match
              </button>
              <ul className="dropdown-menu" aria-labelledby="sortDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Price (Low to High)
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Price (High to Low)
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Newest Listings
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <button type="button" className="sort-btn active">
                Tile <i className="bi bi-globe icon1"></i>
              </button>
              <button type="button" className="sort-btn">
                List <i className="fa-solid fa-bars icon1"></i>
              </button>
              <button type="button" className="sort-btn">
                Map <i className="fa-regular fa-map icon1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-5">
        <div className="row pt-5">
          <div className="col-md-4">
            <div className="card listing-card2">
              <div className="position-relative">
                <span className="top-listing-badge2">Gold Listing</span>
                <span className="bottom-listing-badge2">
                  <i className="fa-solid fa-chevron-left"></i> 3/5{" "}
                  <i className="fa-solid fa-chevron-right"></i>
                </span>
                <img
                  src={uns}
                  className="card-img-top listing-img2"
                  alt="Listing Image"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold">
                  Title of the Listing will come...
                  <i
                    className="fa-regular fa-heart icon-green2"
                  style={{ paddingLeft: "30px" }}
                  ></i>
                </h5>
                <p className="text-muted pt-1">
                  <i className="fas fa-map-marker-alt icon-red2"></i> Pluto Street,
                  Indonesia
                </p>
                <div className="d-flex justify-content-between text-muted boxstyle2">
                  <span>
                    <i className="fas fa-table-cells-large icon-green2"></i> 800 Sq
                    Ft
                  </span>
                  <span>
                    <i className="fas fa-bed icon-green2"></i> 1 Bedroom
                  </span>
                  <span>
                    <i className="fas fa-bathtub icon-green2"></i> 2 Bathroom
                  </span>
                </div>
                <hr />
                <div className="d-flex align-items-center mt-3">
                  <img
                    src="img2/Avatar5.png"
                    className="rounded-circle me-2"
                    alt="User"
                  />
                  <div className="customer">
                    <strong className="cust-name">Jayvion Simon</strong>
                    <p className="text-muted mb-0">Remax Real Estate Center</p>
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
          <div className="col-md-4">
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
              <div className="card-body">
                <h5 className="card-title fw-bold">
                  Title of the Listing will come...
                  <i
                    className="fa-regular fa-heart icon-green2"
                    style={{ paddingLeft: "30px" }}
                  ></i>
                </h5>
                <p className="text-muted pt-1">
                  <i className="fas fa-map-marker-alt icon-red2"></i> Pluto Street,
                  Indonesia
                </p>
                <div className="d-flex justify-content-between text-muted boxstyle2">
                  <span>
                    <i className="fas fa-table-cells-large icon-green2"></i> 800 Sq
                    Ft
                  </span>
                  <span>
                    <i className="fas fa-bed icon-green2"></i> 1 Bedroom
                  </span>
                  <span>
                    <i className="fas fa-bathtub icon-green2"></i> 2 Bathroom
                  </span>
                </div>
                <hr />
                <div className="d-flex align-items-center mt-3">
                  <img src={una} className="rounded-circle me-2" alt="User" />
                  <div className="customer">
                    <strong className="cust-name">Jayvion Simon</strong>
                    <p className="text-muted mb-0">Remax Real Estate Center</p>
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
          <div className="col-md-4">
            <div className="card listing-card2">
              <div className="position-relative">
                <span className="top-listing-badge2">Gold Listing</span>
                <span className="bottom-listing-badge2">
                  <i className="fa-solid fa-chevron-left"></i> 3/5{" "}
                  <i className="fa-solid fa-chevron-right"></i>
                </span>
                <img
                  src={wt}
                  className="card-img-top listing-img2"
                  alt="Listing Image"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold">
                  Title of the Listing will come...
                  <i
                    className="fa-regular fa-heart icon-green2"
                    style={{ paddingLeft: "30px" }}
                  ></i>
                </h5>
                <p className="text-muted pt-1">
                  <i className="fas fa-map-marker-alt icon-red2"></i> Pluto Street,
                  Indonesia
                </p>
                <div className="d-flex justify-content-between text-muted boxstyle2">
                  <span>
                    <i className="fas fa-table-cells-large icon-green2"></i> 800 Sq
                    Ft
                  </span>
                  <span>
                    <i className="fas fa-bed icon-green2"></i> 1 Bedroom
                  </span>
                  <span>
                    <i className="fas fa-bathtub icon-green2"></i> 2 Bathroom
                  </span>
                </div>
                <hr />
                <div className="d-flex align-items-center mt-3">
                  <img src={una} className="rounded-circle me-2" alt="User" />
                  <div className="customer">
                    <strong className="cust-name">Jayvion Simon</strong>
                    <p className="text-muted mb-0">Remax Real Estate Center</p>
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
          <div className="col-md-4">
            <div className="card listing-card2">
              <div className="position-relative">
                <span className="top-listing-badge2">Gold Listing</span>
                <span className="bottom-listing-badge2">
                  <i className="fa-solid fa-chevron-left"></i> 3/5{" "}
                  <i className="fa-solid fa-chevron-right"></i>
                </span>
                <img
                  src={qa}
                  className="card-img-top listing-img2"
                  alt="Listing Image"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold">
                  Title of the Listing will come...
                  <i
                    className="fa-regular fa-heart icon-green2"
                    style={{ paddingLeft: "30px" }}
                  ></i>
                </h5>
                <p className="text-muted pt-1">
                  <i className="fas fa-map-marker-alt icon-red2"></i> Pluto Street,
                  Indonesia
                </p>
                <div className="d-flex justify-content-between text-muted boxstyle2">
                  <span>
                    <i className="fas fa-table-cells-large icon-green2"></i> 800 Sq
                    Ft
                  </span>
                  <span>
                    <i className="fas fa-bed icon-green2"></i> 1 Bedroom
                  </span>
                  <span>
                    <i className="fas fa-bathtub icon-green2"></i> 2 Bathroom
                  </span>
                </div>
                <hr />
                <div className="d-flex align-items-center mt-3">
                  <img src={una} className="rounded-circle me-2" alt="User" />
                  <div className="customer">
                    <strong className="cust-name">Jayvion Simon</strong>
                    <p className="text-muted mb-0">Remax Real Estate Center</p>
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
          <div className="col-md-4">
            <div className="card listing-card2">
              <div className="position-relative">
                <span className="top-listing-badge2">Gold Listing</span>
                <span className="bottom-listing-badge2">
                  <i className="fa-solid fa-chevron-left"></i> 3/5{" "}
                  <i className="fa-solid fa-chevron-right"></i>
                </span>
                <img
                  src={fo}
                  className="card-img-top listing-img2"
                  alt="Listing Image"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold">
                  Title of the Listing will come...
                  <i
                    className="fa-regular fa-heart icon-green2"
                    style={{ paddingLeft: "30px" }}
                  ></i>
                </h5>
                <p className="text-muted pt-1">
                  <i className="fas fa-map-marker-alt icon-red2"></i> Pluto Street,
                  Indonesia
                </p>
                <div className="d-flex justify-content-between text-muted boxstyle2">
                  <span>
                    <i className="fas fa-table-cells-large icon-green2"></i> 800 Sq
                    Ft
                  </span>
                  <span>
                    <i className="fas fa-bed icon-green2"></i> 1 Bedroom
                  </span>
                  <span>
                    <i className="fas fa-bathtub icon-green2"></i> 2 Bathroom
                  </span>
                </div>
                <hr />
                <div className="d-flex align-items-center mt-3">
                  <img src={una} className="rounded-circle me-2" alt="User" />
                  <div className="customer">
                    <strong className="cust-name">Jayvion Simon</strong>
                    <p className="text-muted mb-0">Remax Real Estate Center</p>
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
          <div className="col-md-4">
            <div className="card listing-card2">
              <div className="position-relative">
                <span className="top-listing-badge2">Gold Listing</span>
                <span className="bottom-listing-badge2">
                  <i className="fa-solid fa-chevron-left"></i> 3/5{" "}
                  <i className="fa-solid fa-chevron-right"></i>
                </span>
                <img
                  src={una}
                  className="card-img-top listing-img2"
                  alt="Listing Image"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold">
                  Title of the Listing will come...
                  <i
                    className="fa-regular fa-heart icon-green2"
                    style={{ paddingLeft: "30px" }}
                  ></i>
                </h5>
                <p className="text-muted pt-1">
                  <i className="fas fa-map-marker-alt icon-red2"></i> Pluto Street,
                  Indonesia
                </p>
                <div className="d-flex justify-content-between text-muted boxstyle2">
                  <span>
                    <i className="fas fa-table-cells-large icon-green2"></i> 800 Sq
                    Ft
                  </span>
                  <span>
                    <i className="fas fa-bed icon-green2"></i> 1 Bedroom
                  </span>
                  <span>
                    <i className="fas fa-bathtub icon-green2"></i> 2 Bathroom
                  </span>
                </div>
                <hr />
                <div className="d-flex align-items-center mt-3">
                  <img src={una} className="rounded-circle me-2" alt="User" />
                  <div className="customer">
                    <strong className="cust-name">Jayvion Simon</strong>
                    <p className="text-muted mb-0">Remax Real Estate Center</p>
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
          <div className="col-md-4">
            <div className="card listing-card2">
              <div className="position-relative">
                <span className="top-listing-badge2">Gold Listing</span>
                <span className="bottom-listing-badge2">
                  <i className="fa-solid fa-chevron-left"></i> 3/5{" "}
                  <i className="fa-solid fa-chevron-right"></i>
                </span>
                <img
                  src={qa}
                  className="card-img-top listing-img2"
                  alt="Listing Image"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold">
                  Title of the Listing will come...
                  <i
                    className="fa-regular fa-heart icon-green2"
                    style={{paddingLeft: "30px"}}
                  ></i>
                </h5>
                <p className="text-muted pt-1">
                  <i className="fas fa-map-marker-alt icon-red2"></i> Pluto Street,
                  Indonesia
                </p>
                <div className="d-flex justify-content-between text-muted boxstyle2">
                  <span>
                    <i className="fas fa-table-cells-large icon-green2"></i> 800 Sq
                    Ft
                  </span>
                  <span>
                    <i className="fas fa-bed icon-green2"></i> 1 Bedroom
                  </span>
                  <span>
                    <i className="fas fa-bathtub icon-green2"></i> 2 Bathroom
                  </span>
                </div>
                <hr />
                <div className="d-flex align-items-center mt-3">
                  <img src={una} className="rounded-circle me-2" alt="User" />
                  <div className="customer">
                    <strong className="cust-name">Jayvion Simon</strong>
                    <p className="text-muted mb-0">Remax Real Estate Center</p>
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
          <div className="col-md-4">
            <div className="card listing-card2">
              <div className="position-relative">
                <span className="top-listing-badge2">Gold Listing</span>
                <span className="bottom-listing-badge2">
                  <i className="fa-solid fa-chevron-left"></i> 3/5{" "}
                  <i className="fa-solid fa-chevron-right"></i>
                </span>
                <img
                  src={qa}
                  className="card-img-top listing-img2"
                  alt="Listing Image"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold">
                  Title of the Listing will come...
                  <i
                    className="fa-regular fa-heart icon-green2"
                    style={{paddingLeft: "30px"}}
                  ></i>
                </h5>
                <p className="text-muted pt-1">
                  <i className="fas fa-map-marker-alt icon-red2"></i> Pluto Street,
                  Indonesia
                </p>
                <div className="d-flex justify-content-between text-muted boxstyle2">
                  <span>
                    <i className="fas fa-table-cells-large icon-green2"></i> 800 Sq
                    Ft
                  </span>
                  <span>
                    <i className="fas fa-bed icon-green2"></i> 1 Bedroom
                  </span>
                  <span>
                    <i className="fas fa-bathtub icon-green2"></i> 2 Bathroom
                  </span>
                </div>
                <hr />
                <div className="d-flex align-items-center mt-3">
                  <img src={una} className="rounded-circle me-2" alt="User" />
                  <div className="customer">
                    <strong className="cust-name">Jayvion Simon</strong>
                    <p className="text-muted mb-0">Remax Real Estate Center</p>
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
          <div className="col-md-4">
            <div className="card listing-card2">
              <div className="position-relative">
                <span className="top-listing-badge2">Gold Listing</span>
                <span className="bottom-listing-badge2">
                  <i className="fa-solid fa-chevron-left"></i> 3/5{" "}
                  <i className="fa-solid fa-chevron-right"></i>
                </span>
                <img
                  src={wt}
                  className="card-img-top listing-img2"
                  alt="Listing Image"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold">
                  Title of the Listing will come...
                  <i
                    className="fa-regular fa-heart icon-green2"
                    style={{ paddingLeft: "30px" }}
                  ></i>
                </h5>
                <p className="text-muted pt-1">
                  <i className="fas fa-map-marker-alt icon-red2"></i> Pluto Street,
                  Indonesia
                </p>
                <div className="d-flex justify-content-between text-muted boxstyle2">
                  <span>
                    <i className="fas fa-table-cells-large icon-green2"></i> 800 Sq
                    Ft
                  </span>
                  <span>
                    <i className="fas fa-bed icon-green2"></i> 1 Bedroom
                  </span>
                  <span>
                    <i className="fas fa-bathtub icon-green2"></i> 2 Bathroom
                  </span>
                </div>
                <hr />
                <div className="d-flex align-items-center mt-3">
                  <img src={una} className="rounded-circle me-2" alt="User" />
                  <div className="customer">
                    <strong className="cust-name">Jayvion Simon</strong>
                    <p className="text-muted mb-0">Remax Real Estate Center</p>
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
      <div className="container align-items-center">
        <div className="pagination">
          <a href="#">
            <i className="fa-solid fa-chevron-left"></i>{" "}
          </a>
          <a href="#" className="active">
            1
          </a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">6</a>
          <a href="#">
            <i className="fa-solid fa-chevron-right"></i>{" "}
          </a>
        </div>
        <p className="pagination-text">1 - 9 of 1,714 Results</p>
      </div>
      <div className="container mt-5 mb-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="fw-bold">Recently viewed listing</h2>
        </div>
        <div className="row pt-5">
          <div className="col-md-4">
            <div className="card listing-card3">
              <div className="position-relative">
                <span className="top-listing-badge3">Top Listing</span>
                <img src={una} className="listing-img3" alt="Listing Image" />
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold">
                  Title of the Listing will come...
                </h5>
                <p className="text-muted pt-1">
                  <i className="fas fa-map-marker-alt icon-red3"></i> Pluto Street,
                  Indonesia
                </p>
                <div className="d-flex justify-content-between text-muted boxstyle3">
                  <span>
                    <i className="fas fa-table-cells-large icon-green3"></i> 800 Sq
                    Ft
                  </span>
                  <span>
                    <i className="fas fa-bed icon-green3"></i> 1 Bedroom
                  </span>
                  <span>
                    <i className="fas fa-bathtub icon-green3"></i> 2 Bathroom
                  </span>
                </div>
                <hr />
                <p className="mt-2 price3">
                  <span className="dollar3">$581,339.00</span>{" "}
                  <span className="usd3">USD</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card listing-card3">
              <div className="position-relative">
                <span className="top-listing-badge3">Top Listing</span>
                <img src={una} className="listing-img3" alt="Listing Image" />
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold">
                  Title of the Listing will come...
                </h5>
                <p className="text-muted pt-1">
                  <i className="fas fa-map-marker-alt icon-red3"></i> Pluto Street,
                  Indonesia
                </p>
                <div className="d-flex justify-content-between text-muted boxstyle3">
                  <span>
                    <i className="fas fa-table-cells-large icon-green3"></i> 800 Sq
                    Ft
                  </span>
                  <span>
                    <i className="fas fa-bed icon-green3"></i> 1 Bedroom
                  </span>
                  <span>
                    <i className="fas fa-bathtub icon-green3"></i> 2 Bathroom
                  </span>
                </div>
                <hr />
                <p className="mt-2 price3">
                  <span className="dollar3">$581,339.00</span>{" "}
                  <span className="usd3">USD</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card listing-card3">
              <div className="position-relative">
                <span className="top-listing-badge3">Top Listing</span>
                <img src={una} className="listing-img3" alt="Listing Image" />
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold">
                  Title of the Listing will come...
                </h5>
                <p className="text-muted pt-1">
                  <i className="fas fa-map-marker-alt icon-red3"></i> Pluto Street,
                  Indonesia
                </p>
                <div className="d-flex justify-content-between text-muted boxstyle3">
                  <span>
                    <i className="fas fa-table-cells-large icon-green3"></i> 800 Sq
                    Ft
                  </span>
                  <span>
                    <i className="fas fa-bed icon-green3"></i> 1 Bedroom
                  </span>
                  <span>
                    <i className="fas fa-bathtub icon-green3"></i> 2 Bathroom
                  </span>
                </div>
                <hr />
                <p className="mt-2 price3">
                  <span className="dollar3">$581,339.00</span>{" "}
                  <span className="usd3">USD</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-section mb-5">
        <div className="header-section1">
          <h1>Getting around Bay Street Corridor, Toronto, ON</h1>
          <p>
            The area around Bay Street Corridor, Toronto, ON is by far a
            walker's paradise. With all services and amenities nearby, you
            really don't need a car to run your errands. Regarding transit,
            there are first-className public transportation options you can take
            advantage of. Bay Street Corridor, Toronto, ON is in a very bikeable
            community, so you'll have a developed cycling infrastructure at your
            disposal.
            <br />
            Powered by{" "}
            <a href="#" className="text-white text-decoration-underline">
              Walk Score<sup>&reg;</sup>
            </a>
          </p>
        </div>
        <div className="container my-4">
          <div className="row g-3  score-box">
            <div className="col-md-4">
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
            <div className="col-md-4">
              <div className="score-card  transit-score">
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
            <div className="col-md-4">
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
      <div className="container">
        <div className="row section-Nearby">
          <div className="col-md-5">
            <div className="Nearby">
              <h1>Nearby Neighborhoods</h1>
              <h2>Nearby Cities</h2>
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
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3 section-footer">
              <div className="footer-logo">
                <img src="img2/footer.png" alt="" />
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
                <p style={{ color: "rgb(172, 170, 170)" }}></p>{" "}
                {/* This is an empty paragraph */}
                <i className="fa fa-multiply" style={{paddingLeft: "3px"}}></i>
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
};

export default Hometwo;
