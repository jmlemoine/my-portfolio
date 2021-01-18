import React from "react";
import Media from "reactstrap/lib/Media";

function MediaMenu({ title, description, icon, color }) {
  return (
    <Media
      className="d-flex align-items-center"
      href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/overview?ref=adsr-navbar"
      target="_blank"
    >
      <div
        className={`icon icon-shape bg-gradient-${color} rounded-circle text-white`}
      >
        <i className={`ni ni-${icon}`} />
      </div>
      <Media body className="ml-3">
        <h6 className={`heading text-${color} mb-md-1`}>{title}</h6>
        <p className="description d-none d-md-inline-block mb-0">
          {description}
        </p>
      </Media>
    </Media>
  );
}

export default MediaMenu;
