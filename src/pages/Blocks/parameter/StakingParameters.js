import React from "react";

const StakingParameters = () => {
  return (
    <div style={{ paddingTop: "40px" }}>
      <p style={{ fontSize: "24px", fontFamily: "Poppins" }}>
        Staking Parameters
      </p>

      <div
        className="d-flex flex-wrap"
        style={{ gap: "20px", paddingTop: "20px" }}
      >
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
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace:'nowrap'
          }}
        >
          <div style={{ fontSize: "21px", fontFamily: "Poppins" }}>
            unbonding_time
          </div>
          <div
            style={{
              fontSize: "21px",
              fontFamily: "Avenir",
              padding: "20px",
            }}
          >
            1209600s
          </div>
        </div>
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
          }}
        >
          <div style={{ fontSize: "21px", fontFamily: "Poppins" }}>
            max_validators
          </div>
          <div
            style={{
              fontSize: "21px",
              fontFamily: "Avenir",
              padding: "20px",
            }}
          >
            150
          </div>
        </div>
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
          }}
        >
          <div style={{ fontSize: "21px", fontFamily: "Poppins" }}>
            max_entries
          </div>
          <div
            style={{
              fontSize: "21px",
              fontFamily: "Avenir",
              paddingTop: "20px",
              paddingLeft: "20px",
            }}
          >
            7
          </div>
        </div>
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
          }}
        >
          <div style={{ fontSize: "21px", fontFamily: "Poppins" }}>
            historical_entries
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
            10000{" "}
          </div>
        </div>
      </div>
      <div className="d-flex flex-wrap" style={{ paddingTop: "40px", }}>
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
              fontSize: "21px",
              fontFamily: "Poppins",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            bond_denom
          </div>
          <div
            style={{
              fontSize: "21px",
              fontFamily: "Poppins",
              paddingTop: "20px",
              paddingLeft: "20px",
            }}
          >
            uosmo
          </div>
        </div>
      </div>
    </div>
  );
};

export default StakingParameters;
