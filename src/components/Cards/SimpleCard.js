import React from "react";
import Card from "reactstrap/lib/Card";
import CardBody from "reactstrap/lib/CardBody";
import Badge from "reactstrap/lib/Badge";
import Button from "reactstrap/lib/Button";

function SimpleCard(title, description, color, icon, link, badges) {
  return (
    <Card className="card-lift--hover shadow border-0">
      <CardBody className="py-5">
        <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
          <i className="ni ni-check-bold" />
        </div>
        <h6 className="text-primary text-uppercase">Download Argon</h6>
        <p className="description mt-3">
          Argon is a great free UI package on Bootstrap 4 that include the most
          important components and features.
        </p>
        <div>
          <Badge color="primary" pill className="mr-1">
            design
          </Badge>
          <Badge color="primary" pill className="mr-1">
            system
          </Badge>
          <Badge color="primary" pill className="mr-1">
            creative
          </Badge>
        </div>
        <Button
          className="mt-4"
          color="primary"
          href="#pablo"
          onClick={(e) => e.preventDefault()}
        >
          Learn more
        </Button>
      </CardBody>
    </Card>
  );
}

export default SimpleCard;
