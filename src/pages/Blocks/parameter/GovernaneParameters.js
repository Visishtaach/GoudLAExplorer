import React,{useState, useEffect} from "react";
import Card from "./Card";

const GovernaneParameters = () => {
  const [threshold, setThreshold] = useState()
  const [vt, setVt] = useState()
  const [quorum, setQuorum] = useState()
  const [maxD, setMaxD] = useState()
  const [vp, setVp] = useState()
const[minD, setMinD] = useState()

  const getGp = async() =>{
    const res1 = await fetch(`http://3.95.171.204:1317//cosmos/gov/v1beta1/params/deposit`)
    const data1 = await res1.json()
    console.log(data1)
    // console.log(data1.deposit_params.min_deposit[0].amount)
    setMaxD(data1.deposit_params.max_deposit_period)
    setVp(data1.voting_params.voting_period)
    setQuorum(data1.tally_params.quorum)
    setVt(data1.tally_params.veto_threshold)
    setThreshold(data1.tally_params.threshold)
    setMinD(data1.deposit_params.min_deposit[0].amount)
  }

 const getGpVOting = async()=>{
    const res1 = await fetch(`http://3.95.171.204:1317//cosmos/gov/v1beta1/params/tallying`)
    const data1 = await res1.json()
    console.log(data1)
  }

  useEffect(()=>{
      getGp()
      getGpVOting()
  },[])
  return (
    <div style={{ paddingTop: "40px" }}>
      <div style={{ fontSize: "24px", fontFamily: "Poppins" }}>
        Governance Parameters
      </div>

      <div
        className="d-flex flex-wrap"
        style={{ gap: "20px", paddingTop: "20px" }}
      >
        <Card title="voting_period" value={vp} />
        <Card title=" proposal_voting_periods" value=" - " />
        <Card title="expedited_voting_period" value=" 86400s" />
        <Card title="min_deposit" value={minD} />
      </div>
      <div
        className="d-flex flex-wrap"
        style={{ gap: "20px", paddingTop: "20px" }}
      >
        <Card title="max_deposit_period" value={maxD}/>
        <Card title="min_expedited_deposit" value="5000000000" />
        <Card title="min_initial_deposit_ratio" value="25%" />
        <Card title="quorum" value={quorum} />
      </div>
      <div
        className="d-flex flex-wrap"
        style={{ gap: "20px", paddingTop: "20px" }}
      >
        <Card title="threshold" value={threshold} />

        <Card title="veto_threshold" value={vt} />
        <Card title="expected_threshold" value="66.67%" />
      </div>
    </div>
  );
};

export default GovernaneParameters;
