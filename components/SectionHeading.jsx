import React from "react";

const SectionHeading = ({ subheading, heading, description }) => {
  return (
    <div className="section-heading">
      <p className="subheading">{subheading}</p>
      <h2>{heading}</h2>
      <p className="description">{description}</p>
    </div>
  );
};

export default SectionHeading;
