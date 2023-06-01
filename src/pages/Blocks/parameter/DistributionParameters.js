import React from 'react'

const DistributionParameters = () => {
  return (
    <div style={{ paddingTop: "40px"  }}>
    <p style={{ fontSize: "24px", fontFamily: "Poppins" }}>
      Distribution Parameters
    </p>

    <div className="d-flex flex-wrap" style={{ gap: "20px", paddingTop: "20px" }}>
      <div  className='responsive-card'
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
          overflow:'hidden'
        }}
      >
        <div style={{ fontSize:window.innerWidth <= 290 ? "16px": "21px", fontFamily: "Poppins",textOverflow: "ellipsis",
              overflow: "hidden", }}>
          community_tax
        </div>
        <div
          style={{
            fontSize: window.innerWidth <= 290 ? "16px":"21px",
            fontFamily: "Avenir",
            padding: "20px",
          }}
        >
          0
        </div>
      </div>
      <div  className='responsive-card'
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
          overflow:'hidden'
        }}
      >
        <div style={{ fontSize: window.innerWidth <= 290 ? "16px":"21px", fontFamily: "Poppins",textOverflow: "ellipsis",
              overflow: "hidden", }}>
          base_proposer_reward
        </div>
        <div
          style={{
            fontSize:window.innerWidth <= 290 ? "16px": "21px",
            fontFamily: "Avenir",
            padding: "20px",
          }}
        >
          0
        </div>
      </div>
      <div  className='responsive-card'
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
          overflow:'hidden',textOverflow: "ellipsis",
        
        }}
      >
        <div style={{ fontSize: window.innerWidth <= 290 ? "16px":"21px", fontFamily: "Poppins" }}>
          bonus_proposer_reward
        </div>
        <div
          style={{
            fontSize: window.innerWidth <= 290 ? "16px":"21px",
            fontFamily: "Avenir",
            paddingTop: "20px",
            paddingLeft: "20px",
          }}
        >
          0
        </div>
      </div>
      <div  className='responsive-card'
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
        <div style={{ fontSize:window.innerWidth <= 290 ? "16px": "21px", fontFamily: "Poppins" }}>
        withdraw_addr_enabled
        </div>
        <div
          style={{
            fontSize:window.innerWidth <= 290 ? "16px": "21px",
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
