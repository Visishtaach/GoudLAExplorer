import React, { useContext } from "react";
import { ThemeContext } from "../../themecontext/ThemeContext";
import { Row, Col, Container, Form, InputGroup } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import logo from '../../assets/Blocks/logo.svg'

const SearchField = () => {
  const { theme, toggleTheme, themeConfig } = useContext(ThemeContext);

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
              color: "rgba(255,255,255,1)",
              fontSize: "24px",
              fontFamily: "Poppins",
              // marginTop: "20px",
              color: theme === "light" ? "black" : "white",
            }}
          >
            GoudLA Explorer
          </h4>
          <InputGroup
            className="mb-2"
            style={{
              border:
                theme === "dark" ? "2px solid rgba(128,99,172,1)" : "none",
              borderRadius: "8px",
            }}
          >
            <Form.Control
            className="custom-input"
              placeholder="Search by address / Txn Hash / Blocks"
              style={{
                backgroundColor: "black",
                border: "none",
                padding: "12px 6px",
                margin: 0,
                fontSize: "12px",
                fontFamily: "Poppins",
                height: "53px",
                color: "#B6B6B6",
                outline:'none'
              }}
            />
            <InputGroup.Text
              id="basic-addon2"
              style={{
                border: "none",
                borderLeft: "none",
                borderColor: theme === "dark" ? "rgba(128,99,172,1)" : "none",
                backgroundColor: "black",
                margin: 0,
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
          {/* <input type="text" class="form-control" placeholder="Search by address / Txn Hash / Blocks" style={{backgroundColor: 'black', border: theme === "dark" ? "2px solid rgba(128,99,172,1)" : "none",    borderRadius: "8px",padding: '12px 6px' ,margin: '0' ,fontSize: '12px', fontFamily: 'Poppins', height: '53px', color: '#B6B6B6'}}>
                
               </input>
               <div class="input-group-append" style={{backgroundColor:'red'}}>
              <span class="input-group-text" style={{border: 'none', borderLeft: 'none', borderColor:theme === 'dark' ? 'rgba(128,99,172,1)' : 'none',backgroundColor: 'black', margin: '0'}}>
                <i class="bi bi-search" style={{borderRight: 'none', margin: '0', color: 'red', fontSize: '16px'}}>{BsSearch}</i>
              <p>hello</p>
              </span>
            </div> */}
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
            gap:'8px'
          }}
        >
          <div>
            <img src={logo} alt="icon" />
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
