import React from "react";
import Card from "./Card";

const GovernaneParameters = () => {
  return (
    <div style={{ paddingTop: "40px" }}>
      <div style={{ fontSize: "24px", fontFamily: "Poppins" }}>
        Governance Parameters
      </div>

      <div
        className="d-flex flex-wrap"
        style={{ gap: "20px", paddingTop: "20px" }}
      >
        <Card title="voting_period" value="432000s" />
        <Card title=" proposal_voting_periods" value=" - " />
        <Card title="expedited_voting_period" value=" 86400s" />
        <Card title="min_deposit" value="160000000" />
      </div>
      <div
        className="d-flex flex-wrap"
        style={{ gap: "20px", paddingTop: "20px" }}
      >
        <Card title="max_deposit_period" value="1209600s" />
        <Card title="min_expedited_deposit" value="5000000000" />
        <Card title="min_initial_deposit_ratio" value="25%" />
        <Card title="quorum" value="20%" />
      </div>
      <div
        className="d-flex flex-wrap"
        style={{ gap: "20px", paddingTop: "20px" }}
      >
        <Card title="threshold" value="50%" />

        <Card title="veto_threshold" value="33.4%" />
        <Card title="expected_threshold" value="66.67%" />
      </div>
    </div>
  );
};

export default GovernaneParameters;
