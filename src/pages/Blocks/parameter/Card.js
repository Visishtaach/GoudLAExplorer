import React from "react";

const Card = ({ title, value }) => {
  return (
    <div
      className="responsive-card"
      style={{
        width: "294px",
        height: "146px",
        border: "1px solid rgba(128,99,172,1)",
        borderRadius: "15px",
        padding: "20px",
        display: "flex",
        justifyContent: "start",
        alignItems: "start",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          fontSize: window.innerWidth <= 290 ? "16px": "21px",
          fontFamily: "Poppins",
          textOverflow: "ellipsis",
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: window.innerWidth <= 290 ? "16px": "21px",
          fontFamily: "Avenir",
          paddingTop: "20px",
          paddingLeft: "20px",
        }}
      >
        {value}
      </div>
    </div>
  );
};

export default Card;
