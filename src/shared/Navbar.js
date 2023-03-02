import React from "react";
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
    return (<>
        <nav className="navbar navbar-expand-md bg-body sticky-top py-3"
             id="mainNav">
            <div className="container">
                <Link to={"/"}
                      className="navbar-brand d-flex align-items-center">
                    <span
                        className="bs-icon-sm bs-icon-circle bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon">
                        <img alt={"logo"}
                             src="/assets/img/brands/logo.png"
                             className="nav-image h-auto w-25"/>
                    </span>
                </Link>
                <button
                    data-bs-toggle="collapse"
                    className="btn buttonp navbar-toggler"
                    data-bs-target="#navcol-1">
                    <span className="visually-hidden">Toggle navigation</span>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navcol-1">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <NavLink className={({isActive}) => (isActive ?
                                "nav-link active" :
                                "nav-link")} to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive}) => (isActive ?
                                "nav-link active" :
                                "nav-link")}
                                     to="/destinations">
                                Destinations
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="contact"
                                     className={({isActive}) => (isActive ?
                                         "nav-link active" :
                                         "nav-link")}>
                                Contacts
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>);
};

export default Navbar;
