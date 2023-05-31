import React, { useContext } from "react";
import { ThemeContext } from "../../themecontext/ThemeContext";
import { Form, InputGroup } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import logo from "../../assets/Blocks/logo.svg";
import lightlogo from "../../assets/logo light.svg";

const SearchField = () => {
  const { theme,  themeConfig } = useContext(ThemeContext);

  const navbarStyle = {
    backgroundColor: themeConfig[theme].backgroundColor,
    padding: "30px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  };

  return (
    <div style={navbarStyle}>
      {" "}
      <div className="col-lg-5 mb-1 ">
        <div className="w-70">
          <h4
            style={{
              fontSize: "24px",
              fontFamily: "Poppins",
              color: theme === "light" ? "black" : "white",
            }}
          >
            GoudLA Explorer
          </h4>
          <InputGroup
            className="mb-2"
            style={{
              border:
                theme === "dark"
                  ? "2px solid rgba(128,99,172,1)"
                  : "1px solid rgba(128,99,172,1)",
              borderRadius: "15px",
            }}
          >
            <Form.Control
              className="custom-input"
              placeholder="Search by address / Txn Hash / Blocks"
              style={{
                backgroundColor: theme === "light" ? "white" : "black",
                border: "none",
                padding: "12px 6px",
                margin: 0,
                fontSize: "12px",
                fontFamily: "Poppins",
                height: "53px",
                color: "#B6B6B6",
                outline: "none",
                borderTopLeftRadius: "15px",
                borderBottomLeftRadius: "15px",
              }}
            />
            <InputGroup.Text
              id="basic-addon2"
              style={{
                border: "none",
                borderLeft: "none",
                borderColor: theme === "dark" ? "rgba(128,99,172,1)" : "none",
                backgroundColor: theme === "light" ? "white" : "black",
                margin: 0,
                borderTopRightRadius: "15px",
                borderBottomRightRadius: "15px",
              }}
            >
              <BsSearch
                style={{
                  borderRight: "none",
                  margin: 0,
                  color: "rgba(74,164,220,1)",
                  fontSize: "16px",
                }}
              />
            </InputGroup.Text>
          </InputGroup>
        </div>
      </div>
      <div
        className="col-lg-5 mb-1 "
        style={{
          // backgroundColor:'skyblue',
          // marginTop:'20px',
          padding: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            flexDirection: "row",
            gap: "8px",
          }}
        >
          <div>
            <img src={theme === "light" ? lightlogo : logo} alt="icon" />
          </div>
          <div>
            <div
              style={{
                color: theme === "light" ? "black" : "rgba(127,127,152,1)",
                fontSize: "20px",
                fontFamily: "Poppins",
              }}
            >
              GoudLA Price
            </div>
            <span
              style={{
                color: theme === "light" ? "black" : "white",
                fontFamily: "Avenir",
                fontSize: "20px",
              }}
            >
              $126.889
            </span>{" "}
            <span
              style={{
                color: theme === "light" ? "black" : "rgba(127,127,152,1)",
                fontFamily: "Avenir",
                fontSize: "20px",
              }}
            >
              @ 0.1661821
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchField;
