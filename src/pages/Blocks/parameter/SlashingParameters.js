import React,{useState, useEffect} from 'react'

const SlashingParameters = () => {
const [signed_blocks, setSigned_blocks] = useState()
const [mspw, setMspw] = useState()
const [dt, setDt] = useState()
const [sfdt,setSfdt] = useState()
const [sfds, setSfds] = useState()

  const getSlashingParams = async() =>{
    const res = await fetch('http://3.95.171.204:1317//cosmos/slashing/v1beta1/params')
      const spData = await res.json()
      // console.log('slashing data', spData)
      setSigned_blocks(spData.params.signed_blocks_window)
      setDt(spData.params.downtime_jail_duration)
      setMspw(spData.params.min_signed_per_window)
      setSfds(spData.params.slash_fraction_double_sign)
      setSfdt(spData.params.slash_fraction_downtime)
  }

  useEffect(()=>{
    getSlashingParams()
  },[])
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
        <div style={{ fontSize: window.innerWidth <= 290 ? "16px":"21px", fontFamily: "Poppins",overflow: "hidden",
      textOverflow: "ellipsis", }}>
          signed_blocks_window
        </div>
        <div
          style={{
            fontSize: window.innerWidth <= 290 ? "16px":"21px",
            fontFamily: "Avenir",
            padding: "20px",
          }}
        >
          {signed_blocks}
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
          overflow:'hidden',
          
        }}
      >
        <div style={{ fontSize: window.innerWidth <= 290 ? "16px":"21px", fontFamily: "Poppins",overflow: "hidden",
      textOverflow: "ellipsis", }}>
          min_signed_per_window
        </div>
        <div
          style={{
            fontSize:window.innerWidth <= 290 ? "16px": "21px",
            fontFamily: "Avenir",
            padding: "20px",
          }}
        >
          {mspw}
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
        <div style={{ fontSize: window.innerWidth <= 290 ? "16px":"21px", fontFamily: "Poppins",overflow: "hidden",
      textOverflow: "ellipsis", }}>
          downtime_jail_duration
        </div>
        <div
          style={{
            fontSize: window.innerWidth <= 290 ? "16px":"21px",
            fontFamily: "Avenir",
            paddingTop: "20px",
            paddingLeft: "20px",
          }}
        >
          {dt}
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
        <div style={{ fontSize:window.innerWidth <= 290 ? "16px": "21px", fontFamily: "Poppins",overflow: "hidden",
      textOverflow: "ellipsis", }}>
          slash_Fraction_double_sign
        </div>
        <div
          style={{
            fontSize: window.innerWidth <= 290 ? "16px":"21px",
            fontFamily: "Avenir",
            paddingTop: "20px",
            paddingLeft: "20px",
          }}
        >
         {sfds}
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
        <div style={{ fontSize: window.innerWidth <= 290 ? "16px":"21px", fontFamily: "Poppins",overflow: "hidden",
      textOverflow: "ellipsis", }}>
          slash_fraction_downtime
        </div>
        <div
          style={{
            fontSize: window.innerWidth <= 290 ? "16px":"21px",
            fontFamily: "Avenir",
            padding: "20px",
          }}
        >
          {sfdt}
        </div>
      
    </div>
    
  </div>
  </div>
  )
}

export default SlashingParameters;
