import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar as NavbarRS,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  UncontrolledDropdown
} from "reactstrap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (<>
        <NavbarRS expand={"md"} color={"dark"} dark>
          <NavbarBrand href="/">
            <img
                alt="logo"
                src="/assets/img/brands/logo.png"
                className={"mx-3"}
                style={{
                  height: 40,
                  width: 40
                }}
            />
            SoFar Tours & Travels
          </NavbarBrand>
          <NavbarToggler onClick={toggle}/>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="align-items-center justify-content-end" navbar>
              <NavItem>
                <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Destinations
                  </DropdownToggle>
                  <DropdownMenu right>
                    <NavLink to={"/destinations/bali"}>
                      <DropdownItem>Bali</DropdownItem>
                    </NavLink>
                    <NavLink to={"/destinations/dubai"}>
                      <DropdownItem>Dubai</DropdownItem>
                    </NavLink>
                    <NavLink to={"/destinations/singapore"}>
                      <DropdownItem disabled>Singapore (WIP)</DropdownItem>
                    </NavLink>
                    <NavLink to={"/destinations/europe"}>
                      <DropdownItem disabled>Europe (WIP)</DropdownItem>
                    </NavLink>
                    <NavLink to={"/destinations/thailand"}>
                      <DropdownItem disabled>Thailand (WIP)</DropdownItem>
                    </NavLink>
                    <DropdownItem divider></DropdownItem>
                    <NavLink to={"/destinations/kerala"}>
                      <DropdownItem disabled>Kerala (WIP)</DropdownItem>
                    </NavLink>

                    <NavLink to={"/destinations/india"}>
                      <DropdownItem disabled>India (WIP)</DropdownItem>
                    </NavLink>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavItem>
              <NavItem>
                <NavLink to={"contact"}>
                  Contact Us
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </NavbarRS>
      </>
      // <nav className="navbar navbar-expand-md bg-body sticky-top py-3"
      //      id="mainNav">
      //   <div className="container">
      //     <Link to={"/"}
      //           className="navbar-brand d-flex align-items-center">
      //                 <span
      //                     className="bs-icon-sm bs-icon-circle bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon">
      //                     <img alt={"logo"}
      //                          src="/assets/img/brands/logo.png"
      //                          className="nav-image h-auto w-25"/>
      //                 </span>
      //     </Link>
      //     <button
      //         data-bs-toggle="collapse"
      //         className="btn buttonp navbar-toggler"
      //         data-bs-target="#navcol-1">
      //       <span className="visually-hidden">Toggle navigation</span>
      //       <span className="navbar-toggler-icon"></span>
      //     </button>
      //     <div className="collapse navbar-collapse" id="navcol-1">
      //       <ul className="navbar-nav mx-auto">
      //         <li className="nav-item">
      //           <NavLink className={({isActive}) => (isActive ?
      //               "nav-link active" :
      //               "nav-link")} to="/">
      //             Home
      //           </NavLink>
      //         </li>
      //         <li className="nav-item">
      //           <NavLink className={({isActive}) => (isActive ?
      //               "nav-link active" :
      //               "nav-link")}
      //                    to="/destinations">
      //             Destinations
      //           </NavLink>
      //         </li>
      //         <li className="nav-item">
      //           <NavLink to="contact"
      //                    className={({isActive}) => (isActive ?
      //                        "nav-link active" :
      //                        "nav-link")}>
      //             Contacts
      //           </NavLink>
      //         </li>
      //       </ul>
      //     </div>
      //   </div>
      // </nav>
      // </>
  );
};

export default Navbar;
