import Hero from "components/Hero/Hero";
import Navbar from "components/Navbars/DemoNavbar";
import Footer from "components/Footers/SimpleFooter";

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
import ThreeCards from "components/ThreeCards/ThreeCards";

class Index extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Hero />
        <br />
        <br />
        <ThreeCards />
        <Footer />
      </>
    );
    //return <h1>Hello from JLoft</h1>;
  }
}

export default Index;
