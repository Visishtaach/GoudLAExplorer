import React from 'react'

const StakingParameters = () => {
  return (
    <div style={{ paddingTop: "40px"  }}>
        <p style={{ fontSize: "24px", fontFamily: "Poppins" }}>
          Staking Parameters
        </p>

        <div className="d-flex" style={{ gap: "20px", paddingTop: "20px" }}>
          <div
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
        <div style={{paddingTop:'40px'}}>
          <div
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
  )
}

export default StakingParameters
