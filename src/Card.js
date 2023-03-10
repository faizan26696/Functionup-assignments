import React from "react";

const Card = ({
  imageSrc,
  position,
  fname,
  description,
  icon1,
  icon2,
  icon3,
}) => {
  return (
    <div className="Main-content">
      <div className="Container">
        <div className="profile">
          <img src={imageSrc} />
          {/* imageSrc this is coming from app*/}
        </div>
        <div className="content">
          <h3>{position}</h3>
          <h2 className="name">{fname}</h2>
          <p>{description}</p>
        </div>

        <div className="icons">
          <img src={icon1} />
          <img src={icon2} />
          <img src={icon3} />
        </div>
      </div>
    </div>
  );
};

export default Card;
