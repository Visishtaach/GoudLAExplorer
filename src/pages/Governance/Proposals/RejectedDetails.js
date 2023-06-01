import React, { useState, useContext } from "react";
import { ThemeContext } from "../../../themecontext/ThemeContext";
import Header from "../../../components/layout/Header";
import SearchField from "../../../components/layout/SearchField";
import Footer from "../../../components/layout/Footer";
import { NavLink } from "react-router-dom";
import Passed from "./Passed";
import Voting from "./Voting";
import Card from "../../Blocks/parameter/Card";

const RejectedDetails = () => {
  const { theme } = useContext(ThemeContext);
  const [voting, setVoting] = useState(false);
  const [passed, setPassed] = useState(false);
  const [failed, setFailed] = useState(true);

  const style1 = {
    fontSize: "20px",
    textDecoration: "none",
    backgroundColor: "rgba(127,127,152,1)",
    width: "auto",
    height: "auto",
    color: "rgba(0,0,51,1)",
    borderRadius: "10px",
    padding: "10px 40px 10px",
    fontFamily: "Poppins",
  };
  const style2 = {
    fontSize: "20px",
    textDecoration: "none",
    width: "auto",
    height: "auto",
    color: theme === "light" ? "black" : "white",
    fontFamily: "Poppins",
    padding: "10px 40px 10px",
  };

  const handleButtonClick1 = () => {
    //   setActiveNodes(true);
    setVoting(true);
    setPassed(false);
    setFailed(false);
  };
  const handleButtonClick2 = () => {
    setVoting(false);
    setPassed(true);
    setFailed(false);
  };
  const handleButtonClick3 = () => {
    setVoting(false);
    setPassed(false);
    setFailed(true);
  };
  return (
    <div className="container-sm">
      <Header />
      <SearchField />
      <div
        style={{
          padding: "20px 20px",
          backgroundColor: theme === "light" ? "white" : "rgb(0, 0, 51)",
          borderRadius: "15px",
          color: theme === "light" ? "black" : "white",
          height: "auto",
        //   boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        border: theme==="light" ? "1px solid rgba(235,235,235,1)" : "1px solid #000033",
          margin: "0px 25px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {" "}
          <div
            style={{
              textAlign: "left",
              display: "inline-flex",
              borderRadius: "10px",
              border:
                theme === "light"
                  ? "1px solid  rgba(235,235,235,1)"
                  : "1px solid rgba(22,22,63,1)",
            }}
          >
            <NavLink
              to="/proposals"
              variant="secondary"
              onClick={handleButtonClick1}
              style={voting ? style1 : style2}
            >
              Voting
            </NavLink>

            <NavLink
              // to='/blocks'
              variant="light"
              onClick={handleButtonClick2}
              style={passed ? style1 : style2}
            >
              Passed
            </NavLink>

            <NavLink
              variant="light"
              onClick={handleButtonClick3}
              style={failed ? style1 : style2}
            >
              Failed
            </NavLink>
          </div>
          <div
            style={{
              fontFamily: "Avenir",
              color: "rgba(255,255,255,1)",
              fontSize: "24px",
            }}
          >
            {" "}
            150/150
          </div>
        </div>
        {voting && <Voting />}
        {passed && <Passed />}
        {failed && (
          <div style={{ paddingTop: "20px", height: "1300px" }}>
            <p style={{ fontSize: "24px", fontFamily: "Poppins" }}>Timeline</p>

            <div className="d-flex flex-wrap" style={{ gap: "20px", paddingTop:'20px' }}>
              <Card title="Submitted at:"  value="2023-04-11 05:26"/>
            
              <Card title="Deposited at:" value="2023-04-11 05:26"/>
           
              <div className="responsive-card"
                style={{
                  width: "294px",
                  height: "146px",
                  border: "1px solid rgba(128,99,172,1)",
                  borderRadius: "15px",
                  padding:'20px',
                  display:'flex',
                  justifyContent: "start",
                  alignItems: "start",
                  flexDirection:'column'
                }}
              >
                <div style={{fontSize:'21px', fontFamily:'Poppins',}}>Voting start from</div>
                <div style={{fontSize:'21px', fontFamily:'Avenir', paddingTop:'20px',paddingLeft:'20px'}}>2023-04-11 05:26</div>
                <span style={{fontSize:'8px',paddingLeft:'20px'}}>
                  * Time remaining 0 Days, 00 Hours, 0Minutes, 0Seconds
                </span>
              </div>
            </div>
            <div className="d-flex flex-wrap" style={{ gap: "20px", paddingTop: "20px" }}>
              <div className="responsive-card"
                style={{
                  width: "294px",
                  height: "146px",
                  border: "1px solid rgba(128,99,172,1)",
                  borderRadius: "15px",
                  padding:'20px',
                  display:'flex',
                  justifyContent: "start",
                  alignItems: "start",
                  flexDirection:'column'
                }}
              >
                 <div style={{fontSize:'21px', fontFamily:'Poppins',}}>Voting end from</div>
                <div style={{fontSize:'21x', fontFamily:'Avenir', paddingTop:'20px',paddingLeft:'20px'}}>2023-04-11 05:26</div>
                <span style={{fontSize:'8px',paddingLeft:'20px'}}>
                  * Time remaining 0 Days, 00 Hours, 0Minutes, 0Seconds
                </span>
              </div>

              <Card title="Votes" value="-"/>
             
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default RejectedDetails;
