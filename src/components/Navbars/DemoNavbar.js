/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
import NavItemWithToolTip from "components/Navbars/NavItemWithToolTip";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import MediaMenu from "components/Menus/MediaMenu";

class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false,
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out",
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: "",
    });
  };

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <span className="display-4">Jean Melvin Lemoine</span>
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require("assets/img/brand/argon-react.png")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>

                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <NavItem>
                    <NavLink href="/">Home</NavLink>
                  </NavItem>

                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">About</span>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-xl">
                      <div className="dropdown-menu-inner">
                        <MediaMenu
                          title="Experience"
                          description="Experience"
                          color="green"
                          icon="circle-08"
                        />
                        <MediaMenu
                          title="Education"
                          description="Education"
                          color="red"
                          icon="paper-diploma"
                        />
                      </div>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Profile</span>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-xl">
                      <div className="dropdown-menu-inner">
                        <DropdownItem to="/profile" tag={Link}>
                          <MediaMenu
                            title="Profile"
                            description="Enter to Profile"
                            color="green"
                            icon="badge"
                          />
                        </DropdownItem>
                        <DropdownItem to="/profile" tag={Link}>
                          <MediaMenu
                            title="Login"
                            description="Access to your Account"
                            color="green"
                            icon="circle-08"
                          />
                        </DropdownItem>
                        <DropdownItem to="/profile" tag={Link}>
                          <MediaMenu
                            title="Sign Up"
                            description="Create User"
                            color="red"
                            icon="circle-08"
                          />
                        </DropdownItem>
                      </div>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItemWithToolTip
                    link="https://www.facebook.com/Jean.Melvin.Lemoine"
                    icon="facebook-square"
                    title="Facebook"
                    description="Like us on Facebook"
                  />
                  <NavItemWithToolTip
                    link="https://www.instagram.com/jmlemoin/"
                    icon="instagram"
                    title="Instagram"
                    description="Follow us on Instagram"
                  />
                  <NavItemWithToolTip
                    link="https://twitter.com/JeanMlvnLemoine"
                    icon="twitter"
                    title="Twitter"
                    description="Follow us on Twitter"
                  />
                  <NavItemWithToolTip
                    link="https://github.com/jmlemoine"
                    icon="github"
                    title="GitHub"
                    description="Follow us on GitHub"
                  />
                  <NavItemWithToolTip
                    link="https://www.linkedin.com/in/jean-melvin-lemoine-a20405197/"
                    icon="linkedin-square"
                    title="LinkedIn"
                    description="Follow us on LinkedIn"
                  />
                  <NavItemWithToolTip
                    link="https://wa.me/18298179117"
                    icon="whatsapp"
                    title="WhatsApp"
                    description="Message me on WhatsApp"
                  />
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;
