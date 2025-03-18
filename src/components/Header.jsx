import React from "react";
import "./Header.css";
import qz from "../assets/img/logo1.png"


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
    <div className="container">
        <a className="navbar-brand" href="#"><img src={qz} alt="Logo" width="100"/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto navbarstyle">
                <li className="nav-item linkstyle"><a className="nav-link" href="HOME.html">Home</a></li>
                <li className="nav-item dropdown linkstyle">
                    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Buy</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Houses</a></li>
                        <li><a className="dropdown-item" href="#">Apartments</a></li>
                    </ul>
                </li>
                <li className="nav-item dropdown linkstyle">
                    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Rent</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Short-term</a></li>
                        <li><a className="dropdown-item" href="#">Long-term</a></li>
                    </ul>
                </li>
                <li className="nav-item dropdown linkstyle">
                    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Commercial</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Offices</a></li>
                        <li><a className="dropdown-item" href="#">Retail</a></li>
                    </ul>
                </li>
                <li className="nav-item dropdown linkstyle">
                    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Resources</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Blog</a></li>
                        <li><a className="dropdown-item" href="#">Guides</a></li>
                    </ul>
                </li>
                <li className="nav-item linkstyle"><a className="nav-link" href="ABOUTUS.HTML">About</a></li>
                <li className="nav-item linkstyle"><a className="nav-link" href="CONTACTUS.HTML">Contact Us</a></li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle paddingstyle" href="#" data-bs-toggle="dropdown"><i className="bi bi-globe"></i> EN</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">ES</a></li>
                        <li><a className="dropdown-item" href="#">FR</a></li>
                    </ul>
                </li>
                <li className="nav-item paddingstyle1"><a className="btnstyle" href="#">Get Started</a></li>
            </ul>
        </div>
    </div>
</nav>
  );
};

export default Header;
