import React from 'react'

const SlashingParameters = () => {
  return (
    <div style={{ paddingTop: "40px"  }}>
    <div style={{ fontSize: "24px", fontFamily: "Poppins" }}>
        Slashing Parameters
    </div>

    <div className="d-flex flex-wrap" style={{ gap: "20px", paddingTop: "20px",  }}>
      <div  className='responsive-card'
        style={{
          width: "auto",
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
        <div style={{ fontSize: "21px", fontFamily: "Poppins",overflow: "hidden",
      textOverflow: "ellipsis", }}>
          signed_blocks_window
        </div>
        <div
          style={{
            fontSize: "21px",
            fontFamily: "Avenir",
            padding: "20px",
          }}
        >
          30000
        </div>
      </div>
      <div  className='responsive-card'
        style={{
          width: "auto",
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
        <div style={{ fontSize: "21px", fontFamily: "Poppins",overflow: "hidden",
      textOverflow: "ellipsis", }}>
          min_signed_per_window
        </div>
        <div
          style={{
            fontSize: "21px",
            fontFamily: "Avenir",
            padding: "20px",
          }}
        >
          5%
        </div>
      </div>
      <div  className='responsive-card'
        style={{
          width: "auto",
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
        <div style={{ fontSize: "21px", fontFamily: "Poppins",overflow: "hidden",
      textOverflow: "ellipsis", }}>
          downtime_jail_duration
        </div>
        <div
          style={{
            fontSize: "21px",
            fontFamily: "Avenir",
            paddingTop: "20px",
            paddingLeft: "20px",
          }}
        >
          60s
        </div>
      </div>
     
    </div>
    <div className="d-flex flex-wrap" style={{ gap: "20px", paddingTop: "20px" }}>
    <div  className='responsive-card'
        style={{
          width: "auto",
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
        <div style={{ fontSize: "21px", fontFamily: "Poppins",overflow: "hidden",
      textOverflow: "ellipsis", }}>
          slash_Fraction_double_sign
        </div>
        <div
          style={{
            fontSize: "21px",
            fontFamily: "Avenir",
            paddingTop: "20px",
            paddingLeft: "20px",
          }}
        >
         5%
        </div>
      </div>
      <div  className='responsive-card'
        style={{
          width: "auto",
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
        <div style={{ fontSize: "21px", fontFamily: "Poppins",overflow: "hidden",
      textOverflow: "ellipsis", }}>
          slash_fraction_downtime
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
    
  </div>
  </div>
  )
}

export default SlashingParameters;
