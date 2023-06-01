import React,{useState, useEffect } from "react";

const StakingParameters = () => {

  const [unbonding_time, setUnbonding_time] = useState();
  const [max_validators, setMax_validators] = useState();
  const [max_entries, setMax_entries] = useState();
  const [historical_entries, setHistorical_entries] = useState();
  const [bond_denom, setBond_demon] = useState()

  const getStakingParameters = async() => {
      const res = await fetch('http://3.95.171.204:1317///cosmos/staking/v1beta1/params')
      const spData = await res.json()
      console.log('staking params', spData)
      console.log('unbounding_time', spData.params.unbonding_time)
      setBond_demon(spData.params.bond_denom)
      setHistorical_entries(spData.params.historical_entries)
      setMax_entries(spData.params.max_entries)
      setMax_validators(spData.params.max_validators)
      setUnbonding_time(spData.params.unbonding_time)

  }

  useEffect(()=>{
    getStakingParameters()
  })
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
          <div style={{ fontSize: window.innerWidth <= 290 ? "16px": "21px", fontFamily: "Poppins" }}>
            unbonding_time
          </div>
          <div
            style={{
              fontSize:window.innerWidth <= 290 ? "16px": "21px",
              fontFamily: "Avenir",
              padding: "20px",
            }}
          >
            {unbonding_time}
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
          <div style={{ fontSize: window.innerWidth <= 290 ? "16px":"21px", fontFamily: "Poppins" }}>
            max_validators
          </div>
          <div
            style={{
              fontSize: window.innerWidth <= 290 ? "16px":"21px",
              fontFamily: "Avenir",
              padding: "20px",
            }}
          >
            { max_validators}
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
          <div style={{ fontSize:window.innerWidth <= 290 ? "16px": "21px", fontFamily: "Poppins" }}>
            max_entries
          </div>
          <div
            style={{
              fontSize: window.innerWidth <= 290 ? "16px":"21px",
              fontFamily: "Avenir",
              paddingTop: "20px",
              paddingLeft: "20px",
            }}
          >
            {max_entries}
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
          <div style={{ fontSize:window.innerWidth <= 290 ? "16px": "21px", fontFamily: "Poppins" }}>
            historical_entries
          </div>
          <div
            style={{
              fontSize:window.innerWidth <= 290 ? "16px": "21px",
              fontFamily: "Avenir",
              paddingTop: "20px",
              paddingLeft: "20px",
            }}
          >
            {" "}
            {historical_entries}{" "}
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
              fontSize: window.innerWidth <= 290 ? "16px":"21px",
              fontFamily: "Poppins",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            bond_denom
          </div>
          <div
            style={{
              fontSize:window.innerWidth <= 290 ? "16px": "21px",
              fontFamily: "Poppins",
              paddingTop: "20px",
              paddingLeft: "20px",
            }}
          >
            {bond_denom}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StakingParameters;
