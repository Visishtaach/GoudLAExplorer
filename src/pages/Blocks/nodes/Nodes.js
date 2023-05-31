import React, { useState, useContext } from "react";
import { ThemeContext } from "../../../themecontext/ThemeContext";
import { NavLink } from "react-bootstrap";
import Header from "../../../components/layout/Header";
import SearchField from "../../../components/layout/SearchField";
import { activeNodesList } from "../../../helpers/NodeList";
import List from "./List";
import Footer from "../../../components/layout/Footer";


const Nodes = () => {
  const {theme} = useContext(ThemeContext);
  const [activeNodes, setActiveNodes] = useState(true);

  const style1 = {
    fontSize: "20px",
    textDecoration: "none",
    backgroundColor: "rgba(127,127,152,1)",
    width: "auto",
    height: "auto",
    color: theme ==="light" ? "white" :"rgba(0,0,51,1)",
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
    setActiveNodes(true);
  };
  const handleButtonClick2 = () => {
    setActiveNodes(false);
  };

  return (
    <div className="container-sm">
      <Header />
      <SearchField />
      {/* <Footer/> */}
      <div style={{ padding: "10px 30px" }}>
        <h4
          style={{
            color: theme === "light" ? "black" : "rgba(225,225,225,1)",
            fontFamily: "Poppins",
            fontSize: "24px",
          }}
        >
          Nodes (Staking)
        </h4>
      </div>
      <div
        style={{
          padding: "10px 20px",
          backgroundColor: theme === "light" ? "white" : "rgb(0, 0, 51)",
          borderRadius: "15px",
          color: theme === "light" ? "black" : "white",
          height: "auto",
        //  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
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
              to="/"
              variant="secondary"
              onClick={handleButtonClick1}
              style={activeNodes ? style1 : style2}
            >
              Active
            </NavLink>

            <NavLink
              variant="light"
              onClick={handleButtonClick2}
              style={!activeNodes ? style1 : style2}
            >
              Inactive
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

        {/* rendering list */}
        <List activeNodes={activeNodesList} />
      </div>
      <Footer/>
    </div>
  );
};

export default Nodes;
