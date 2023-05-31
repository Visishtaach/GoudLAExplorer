import React from 'react'

const DistributionParameters = () => {
  return (
    <div style={{ paddingTop: "40px"  }}>
    <p style={{ fontSize: "24px", fontFamily: "Poppins" }}>
      Distribution Parameters
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
          community_tax
        </div>
        <div
          style={{
            fontSize: "21px",
            fontFamily: "Avenir",
            padding: "20px",
          }}
        >
          0
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
          base_proposer_reward
        </div>
        <div
          style={{
            fontSize: "21px",
            fontFamily: "Avenir",
            padding: "20px",
          }}
        >
          0
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
          bonus_proposer_reward
        </div>
        <div
          style={{
            fontSize: "21px",
            fontFamily: "Avenir",
            paddingTop: "20px",
            paddingLeft: "20px",
          }}
        >
          0
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
        withdraw_addr_enabled
        </div>
        <div
          style={{
            fontSize: "21px",
            fontFamily: "Avenir",
            paddingTop: "20px",
            paddingLeft: "20px",
          }}
        >
            true
        </div>
      </div>
    </div>
  </div>
  )
}

export default DistributionParameters
