import SimpleCard from "components/Cards/SimpleCard";
import React from "react";
import Badge from "reactstrap/lib/Badge";
import Button from "reactstrap/lib/Button";
import Card from "reactstrap/lib/Card";
import CardBody from "reactstrap/lib/CardBody";
import Col from "reactstrap/lib/Col";
import Container from "reactstrap/lib/Container";
import Row from "reactstrap/lib/Row";

function ThreeCards() {
  return (
    <section className="section section-lg pt-lg-0 mt--150">
      <Container>
        <Row className="justify-content-center">
          <Col lg="12">
            <Row className="row-grid">
              <Col lg="4">
                <SimpleCard
                  icon="check-bold"
                  color="success"
                  title="Frontend"
                  description="Check my Frontend Projects Here"
                  badges={["React", "Vue"]}
                />
              </Col>
              <Col lg="4">
                <SimpleCard
                  icon="atom"
                  color="warning"
                  title="Backend"
                  description="Check my Backend Projects Here"
                  badges={["Laravel", "Yii2"]}
                />
              </Col>
              <Col lg="4">
                <SimpleCard
                  icon="mobile-button"
                  color="primary"
                  title="Mobile"
                  description="Check my Mobile Projects Here"
                  badges={["Java", "Kotlin", "Swift", "React Native"]}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ThreeCards;
