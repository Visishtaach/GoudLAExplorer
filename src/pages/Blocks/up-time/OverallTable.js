import React, { useContext } from "react";
import { ThemeContext } from "../../../themecontext/ThemeContext";
import { OverallData } from "../../../helpers/OverallData";

const OverallTable = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
         
    <div className="table-responsive pt-5">
    <div ><h5 style={{fontSIze:'20px', fontFamily:'Poppins',}}>Key words to filter Validators</h5></div>
      <table
        className="table table-border"
        style={{
          borderBottom:
            theme === "light" ? "" : "1px solid rgba(22,22,63,1)",
        }}
      >
        <thead className="rounded-table-head">
         
          <tr
            className="overall-header"
            style={{
              color: theme === "light" ? "white" : "rgba(0,0,51,1)",
              
              backgroundColor: "rgba(128,128,153,1)",
              textAlign: "center",
             border:'none'
              // borderRadius: "10px",
              
            }}
          >
            <th
              //    colSpan={5}
              style={{
                width: "35%",
                textAlign: "left",
                fontSize: "18px",
                fontFamily: "Poppins",
                fontWeight: "normal",
                padding: "18px 50px 18px",
                // color: "rgba(128,128,153,1)",
                textTransform: "uppercase",
                // paddingLeft: "50px",
                borderTopLeftRadius: '20px',
                borderBottomLeftRadius: '20px'
              }}
            >
              Validate
            </th>

            <th
              style={{
                paddingRight: "5px",
                fontSize: "18px",
                fontFamily: "Poppins",
                fontWeight: "normal",
                paddingBottom: "18px",
                // color: "rgba(128,128,153,1)",
                textTransform: "uppercase",
              }}
            >
              UpTime
            </th>
            <th
              style={{
                fontSize: "18px",
                fontFamily: "Poppins",
                fontWeight: "normal",
                paddingBottom: "18px",
                // color: "rgba(128,128,153,1)",
                textTransform: "uppercase",
              }}
            >
              Last jailed time
            </th>
            <th
              style={{
                fontSize: "18px",
                fontFamily: "Poppins",
                fontWeight: "normal",
                paddingBottom: "18px",
                // color: "rgba(128,128,153,1)",
                textTransform: "uppercase",
              }}
            >
              Signed precommits
            </th>
            <th
              style={{
                fontSize: "18px",
                fontFamily: "Poppins",
                fontWeight: "normal",
                paddingBottom: "18px",
                // color: "rgba(128,128,153,1)",
                textTransform: "uppercase",
              }}
            >
              Start Height
            </th>
            <th
              style={{
                fontSize: "18px",
                fontFamily: "Poppins",
                fontWeight: "normal",
                paddingBottom: "18px",
                // color: "rgba(128,128,153,1)",
                textTransform: "uppercase",
                borderTopRightRadius: '20px',
                borderBottomRightRadius: '20px'
              }}
            >
              Tomb Stoned
            </th>
          </tr>
          {/* </div> */}
        </thead>

        <tbody>
          {OverallData.map((txn) => (
            <tr
              key={txn.id}
              style={{
                color: theme === "light" ? "black" : "rgba(225,225,225,1)",
              }}
            >
              <td style={{ paddingTop: "25px" }}>
                <div
                  style={{
                    display: "flex",
                    gap: "25px",
                    color:
                      theme === "light"
                        ? "rgba(128,128,153,1)"
                        : "rgba(225,225,225,1)",
                  }}
                >
                  <p style={{ display: "flex", gap: "30px" }}>
                    {" "}
                    <span style={{ fontSize: "16px", fontFamily: "Avenir" }}>
                      {txn.id}
                    </span>
                    <span style={{ fontSize: "16px", fontFamily: "Poppins" }}>
                      {txn.validator}
                    </span>
                  </p>
                </div>
              </td>

              <td style={{ paddingRight: "5px", paddingTop: "25px" }}>
                <div
                  style={{
                    fontSize: "16px",
                    fontFamily: "Avenir",
                    color: "#23A15F",
                    textAlign: "center",
                  }}
                >
                  {txn.upTime}
                </div>
              </td>
              <td
                style={{
                  paddingTop: "25px",
                  fontSize: "16px",
                  fontFamily: "Poppins",
                  color: "rgba(128,128,153,1)",
                  textAlign: "center",
                }}
              >
                {txn.jailedTime}
              </td>
              <td
                style={{
                  fontSize: "16px",
                  fontFamily: "Avenir",
                  paddingTop: "25px",
                  color: "rgba(128,128,153,1)",
                  textAlign: "center",
                }}
              >
                {txn.signedPrecommits}
              </td>
              <td style={{ paddingTop: "25px" }}>
                <div
                  style={{
                    color: "rgba(128,128,153,1)",
                    fontSize: "16px",
                    fontFamily: "Poppins",
                    textAlign: "center",
                  }}
                >
                  {txn.startHeight}
                </div>
              </td>
              <td style={{ paddingTop: "25px" }}>
                <div
                  style={{
                    color: "rgba(128,128,153,1)",
                    fontSize: "16px",
                    fontFamily: "Poppins",
                    textAlign: "center",
                  }}
                >
                  {txn.tombStoned}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default OverallTable;
