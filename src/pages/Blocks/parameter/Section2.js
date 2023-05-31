import React, { useContext } from "react";
import { ThemeContext } from "../../../themecontext/ThemeContext";
import ListGroup from "react-bootstrap/ListGroup";

const Section2 = () => {
  const { theme } = useContext(ThemeContext);
  const textStyle = {
    fontFamily: "Poppins",
    fontSize: "24px",
  };
  return (
    <div
      style={{
        padding: "20px 20px",
        backgroundColor: theme === "light" ? "white" : "rgb(0, 0, 51)",
        borderRadius: "15px",
        color: theme === "light" ? "black" : "white",
        height: "auto",
        ///  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        border:
          theme === "light"
            ? "1px solid rgba(235,235,235,1)"
            : "1px solid #000033",
        margin: "0px 25px",
      }}
    >
      <h4>Application Version</h4>
      <div>
        <div className="row">
          <div className={theme === 'light' ? 'scrollbar-list' : 'scrollbar-list-black'}>
       
            <ul
             
            >
              <li
                style={{
                  borderBottom:
                    theme === "light"
                      ? "1px solid rgba(235,235,235,1)"
                      : "1px solid rgba(22,22,63,1)",
                  display: "flex",
                  padding: "10px",
                }}
              >
                <div
                  className="col-md-3"
                  style={{ fontSize: "24px", fontFamily: "Poppins" }}
                >
                  Name
                </div>
                <div className="col-md-9" style={textStyle}>
                  GoudLA
                </div>
              </li>
              <li
                style={{
                  borderBottom:
                  theme === "light"
                    ? "1px solid rgba(235,235,235,1)"
                    : "1px solid rgba(22,22,63,1)",
                  display: "flex",
                  padding: "10px",
                }}
              >
                <div
                  className="col-md-3"
                  style={{ fontSize: "24px", fontFamily: "Poppins" }}
                >
                  App name
                </div>
                <div className="col-md-9" style={textStyle}>
                  GoudLA
                </div>
              </li>
              <li
                style={{
                  borderBottom:
                  theme === "light"
                    ? "1px solid rgba(235,235,235,1)"
                    : "1px solid rgba(22,22,63,1)",
                  display: "flex",
                  padding: "10px",
                }}
              >
                <div
                  className="col-md-3"
                  style={{ fontSize: "24px", fontFamily: "Poppins" }}
                >
                  version
                </div>
                <div className="col-md-9" style={textStyle}>
                  15.0.0
                </div>
              </li>
              <li
                style={{
                  borderBottom:
                  theme === "light"
                    ? "1px solid rgba(235,235,235,1)"
                    : "1px solid rgba(22,22,63,1)",
                  display: "flex",
                  padding: "10px",
                }}
              >
                <div
                  className="col-md-3"
                  style={{ fontSize: "24px", fontFamily: "Poppins" }}
                >
                  git-COMMIT
                </div>
                <div className="col-md-9" style={textStyle}>
                  ff18d8244fcda7313ec951fb1b3bee
                </div>
              </li>{" "}
              <li
                style={{
                  borderBottom:
                  theme === "light"
                    ? "1px solid rgba(235,235,235,1)"
                    : "1px solid rgba(22,22,63,1)",
                  display: "flex",
                  padding: "10px",
                }}
              >
                <div
                  className="col-md-3"
                  style={{ fontSize: "24px", fontFamily: "Poppins" }}
                >
                  build_tags
                </div>
                <div className="col-md-9" style={textStyle}>
                  netgo, ledger
                </div>
              </li>{" "}
              <li
                style={{
                  borderBottom:
                  theme === "light"
                    ? "1px solid rgba(235,235,235,1)"
                    : "1px solid rgba(22,22,63,1)",
                  display: "flex",
                  padding: "10px",
                }}
              >
                <div
                  className="col-md-3"
                  style={{ fontSize: "24px", fontFamily: "Poppins" }}
                >
                  go_version
                </div>
                <div className="col-md-9" style={textStyle}>
                  go version go 1.19.1 Linux/amd64
                </div>
              </li>
              <li
                style={{
                  borderBottom:
                  theme === "light"
                    ? "1px solid rgba(235,235,235,1)"
                    : "1px solid rgba(22,22,63,1)",
                  display: "flex",
                  padding: "10px",
                }}
              >
                <div
                  className="col-md-3"
                  style={{ fontSize: "24px", fontFamily: "Poppins" }}
                >
                  build_tags
                </div>
                <div className="col-md-9" style={textStyle}>
                  netgo, ledger
                </div>
              </li>{" "}
            </ul>
           <div className = {theme === "light" ? "scroll-list" : " scroll-list-black"}>
           <ul
              
            >
              <li style={{ display: "flex" }}>
                <div
                  className="col-md-3"
                  style={{ fontSize: "24px", fontFamily: "Poppins" }}
                >
                  {/* go_version */}
                </div>
                <div
                  className="col-md-9 d-flex flex-direction-row"
                  style={{
                    borderBottom:
                    theme === "light"
                      ? "1px solid rgba(235,235,235,1)"
                      : "1px solid rgba(22,22,63,1)",
                    fontSize: "24px",
                    fontFamily: "Poppins",
                    padding: "10px",
                  }}
                >
                  <div
                    className="col-md-4 "
                    style={{ fontSize: "22px", fontFamily: "Poppins" }}
                  >
                    Path
                  </div>
                  <div
                    className="col-md-3"
                    style={{ fontSize: "22px", fontFamily: "Poppins" }}
                  >
                    version
                  </div>
                  <div
                    className="col-md-3"
                    style={{ fontSize: "22px", fontFamily: "Poppins" }}
                  >
                    sum
                  </div>
                </div>
              </li>
              <li style={{ display: "flex" }}>
                <div
                  className="col-md-3"
                  style={{ fontSize: "24px", fontFamily: "Poppins" }}
                >
                  {/* go_version */}
                </div>
                <div
                  className="col-md-9 d-flex flex-direction-row"
                  style={{
                    borderBottom:
                    theme === "light"
                      ? "1px solid rgba(235,235,235,1)"
                      : "1px solid rgba(22,22,63,1)",
                    fontSize: "24px",
                    fontFamily: "Poppins",
                    padding: "10px",
                  }}
                >
                  <div
                    className="col-md-4 "
                    style={{ fontSize: "12px", fontFamily: "Poppins" }}
                  >
                    Filippoioedwards25519
                  </div>
                  <div
                    className="col-md-3"
                    style={{ fontSize: "12px", fontFamily: "Poppins" }}
                  >
                    v1.0.0-rc.1
                  </div>
                  <div
                    className="col-md-3"
                    style={{ fontSize: "12px", fontFamily: "Poppins" }}
                  >
                    h1:m0vOOB23frxzvAOk44usCgLWvtsxloMCTBGjZlpmGfU=
                  </div>
                </div>
              </li>
              <li style={{ display: "flex" }}>
                <div
                  className="col-md-3"
                  style={{ fontSize: "24px", fontFamily: "Poppins" }}
                >
                  {/* go_version */}
                </div>
                <div
                  className="col-md-9 d-flex flex-direction-row"
                  style={{
                    borderBottom:
                    theme === "light"
                      ? "1px solid rgba(235,235,235,1)"
                      : "1px solid rgba(22,22,63,1)",
                    fontSize: "24px",
                    fontFamily: "Poppins",
                    padding: "10px",
                  }}
                >
                  <div
                    className="col-md-4 "
                    style={{ fontSize: "12px", fontFamily: "Poppins" }}
                  >
                    aithub.com/99designs/keyring
                  </div>
                  <div
                    className="col-md-3"
                    style={{ fontSize: "12px", fontFamily: "Poppins" }}
                  >
                    v1.2.1
                  </div>
                  <div
                    className="col-md-3"
                    style={{ fontSize: "12px", fontFamily: "Poppins" }}
                  >
                    h1:m0vOOB23frxzvAOk44usCgLWvtsxloMCTBGjZlpmGfU=
                  </div>
                </div>
              </li>
              <li style={{ display: "flex" }}>
                <div
                  className="col-md-3"
                  style={{ fontSize: "24px", fontFamily: "Poppins" }}
                >
                 
                </div>
                <div
                  className="col-md-9 d-flex flex-direction-row"
                  style={{
                    borderBottom:
                    theme === "light"
                      ? "1px solid rgba(235,235,235,1)"
                      : "1px solid rgba(22,22,63,1)",
                    fontSize: "24px",
                    fontFamily: "Poppins",
                    padding: "10px",
                  }}
                >
                  <div
                    className="col-md-4 "
                    style={{ fontSize: "12px", fontFamily: "Poppins" }}
                  >
                    aithub.com/99designs/keyring
                  </div>
                  <div
                    className="col-md-3"
                    style={{ fontSize: "12px", fontFamily: "Poppins" }}
                  >
                    v1.2.1
                  </div>
                  <div
                    className="col-md-3"
                    style={{ fontSize: "12px", fontFamily: "Poppins" }}
                  >
                    h1:m0vOOB23frxzvAOk44usCgLWvtsxloMCTBGjZlpmGfU=
                  </div>
                </div>
              </li>
            </ul>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
