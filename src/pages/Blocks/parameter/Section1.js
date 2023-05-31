import React, { useContext } from "react";
import { ThemeContext } from "../../../themecontext/ThemeContext";
import GovernaneParameters from "./GovernaneParameters";
import DistributionParameters from "./DistributionParameters";
import SlashingParameters from "./SlashingParameters";
import StakingParameters from "./StakingParameters";
const Section1 = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="container-sm"
      style={{
        padding: "20px 20px",
        backgroundColor: theme === "light" ? "white" : "rgb(0, 0, 51)",
        borderRadius: "15px",
        color: theme === "light" ? "black" : "white",
        height: "auto",
        //  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        margin: "0px 25px",
        border:
          theme === "light"
            ? "1px solid rgba(235,235,235,1)"
            : "1px solid #000033",
      }}
    >
      <div className="container-fluid" style={{ paddingTop: "40px"  }}>
        <p style={{ fontSize: "24px", fontFamily: "Poppins" }}>
          Chain ID Osmosis1
        </p>

        <div className="d-flex flex-wrap " style={{ gap: "20px", paddingTop: "20px" }}>
          <div
            style={{
              width: "286px",
              height: "146px",
              border: "1px solid rgba(128,99,172,1)",
              borderRadius: "15px",
              padding: "20px",
              display: "flex",
              justifyContent: "start",
              alignItems: "start",
              flexDirection: "column",
            }}
          >
            <div style={{ fontSize: "21px", fontFamily: "Poppins" }} className="responsive-card">
              height
            </div>
            <div
              style={{
                fontSize: "21px",
                fontFamily: "Avenir",
                padding: "20px",
              }}
            >
              9785442
            </div>
          </div>
          <div className="responsive-card"
            style={{
             width: "286px",
              height: "146px",
              border: "1px solid rgba(128,99,172,1)",
              borderRadius: "15px",
              padding: "20px",
              display: "flex",
              justifyContent: "start",
              alignItems: "start",
              flexDirection: "column",
              
            }}
          >
            <div style={{ fontSize: "21px", fontFamily: "Poppins", }}>
              bonded_and_supply
            </div>
            <div
              style={{
                fontSize: "21px",
                fontFamily: "Avenir",
                padding: "20px",
              }}
            >
              256M/586
            </div>
          </div>
          <div className="responsive-card"
            style={{
              width: "286px",
              height: "146px",
              border: "1px solid rgba(128,99,172,1)",
              borderRadius: "15px",
              padding: "20px",
              display: "flex",
              justifyContent: "start",
              alignItems: "start",
              flexDirection: "column",
              overflow: "hidden"
            }}
          >
            <div style={{ fontSize: "21px", fontFamily: "Poppins" }}>
              bonded_ratio
            </div>
            <div
              style={{
                fontSize: "21px",
                fontFamily: "Avenir",
                paddingTop: "20px",
                paddingLeft: "20px",
                overflow:'hidden',
                textOverflow:'ellipsis'
              }}
            >
              43.64%
            </div>
          </div>
          <div className="responsive-card"
            style={{
              width: "286px",
              height: "146px",
              border: "1px solid rgba(128,99,172,1)",
              borderRadius: "15px",
              padding: "20px",
              display: "flex",
              justifyContent: "start",
              alignItems: "start",
              flexDirection: "column",
            }}
          >
            <div style={{ fontSize: "21px", fontFamily: "Poppins" }}>
              inflation
            </div>
            <div
              style={{
                fontSize: "21px",
                fontFamily: "Avenir",
                paddingTop: "20px",
                paddingLeft: "20px",
              }}
            >
              {" "}
              -{" "}
            </div>
          </div>
        </div>
      </div>
      <StakingParameters/>
     <GovernaneParameters />
     <DistributionParameters />
     <SlashingParameters/>
    </div>
  );
};

export default Section1;
