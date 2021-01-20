import SocialMediaButtons from "components/Buttons/SocialMediaButtons";
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
/*eslint-disable*/
import React from "react";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

class SimpleFooter extends React.Component {
  render() {
    return (
      <>
        <footer className=" footer">
          <Container>
            <Row className=" row-grid align-items-center mb-5">
              <Col lg="6">
                <h3 className=" text-primary font-weight-light mb-2">
                  Thank you for checking my work!
                </h3>
                <h6 className=" mb-0 font-weight-light">
                  Let's give you better content coming soon.
                </h6>
              </Col>
              <Col className="text-lg-center btn-wrapper" lg="6">
                <SocialMediaButtons
                  color="facebook"
                  link="https://www.facebook.com/Jean.Melvin.Lemoine"
                  icon="facebook-square"
                  description="Like us on Facebook"
                />
                <SocialMediaButtons
                  color="instagram"
                  link="https://www.instagram.com/jmlemoin/"
                  icon="instagram"
                  description="Follow us on Instagram"
                />
                <SocialMediaButtons
                  color="twitter"
                  link="https://twitter.com/JeanMlvnLemoine"
                  icon="twitter"
                  description="Follow us on Twitter"
                />
                <SocialMediaButtons
                  color="github"
                  link="https://github.com/jmlemoine"
                  icon="github"
                  description="Follow us on GitHub"
                />
                <SocialMediaButtons
                  color="linkedin"
                  link="https://www.linkedin.com/in/jean-melvin-lemoine-a20405197/"
                  icon="linkedin"
                  description="Follow us on LinkedIn"
                />
                <SocialMediaButtons
                  color="whatsapp"
                  link="https://wa.me/18298179117"
                  icon="whatsapp"
                  description="Follow us on WhatsApp"
                />
              </Col>
            </Row>
            <hr />
            <div className=" copyright">
              © {new Date().getFullYear()}
              {" by "}
              <a href="https://www.instagram.com/jmlemoin/" target="_blank">
                Jean Melvin Lemoine
              </a>
            </div>

            <Col md="6"></Col>
          </Container>
        </footer>
      </>
    );
  }
}

export default SimpleFooter;
