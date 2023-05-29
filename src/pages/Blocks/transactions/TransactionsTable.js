import React, { useContext } from "react";
import { ThemeContext } from "../../../themecontext/ThemeContext";
import way from "../../../assets/Blocks/greenArrow.svg";
import { ImNotification } from "react-icons/im";
import { AiOutlineEye } from "react-icons/ai";

const TransactionsTable = ({ activeNodes }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="table-responsive pt-5">
      <table
        className="table table-border"
        style={{
          borderBottom:
            theme === "light" ? "gray" : "1px solid rgba(22,22,63,1)",
        }}
      >
        <thead>
          <tr
            style={{
              color: theme === "light" ? "black" : "rgba(225,225,225,1)",
              //   border:theme ==="light"? "gray" : "",
              textAlign: "left",
              alignItems: "center",
              //   justifyContent: "center",
            }}
          >
            <th
              style={{
                textAlign: "left",
                fontSize: "20px",
                fontFamily: "Poppins",
                fontWeight: "normal",
                paddingBottom: "20px",
                color: "rgba(128,128,153,1)",
              }}
            >
              Txn Hash
            </th>

            <th
              style={{
                paddingRight: "5px",
                fontSize: "20px",
                fontFamily: "Poppins",
                fontWeight: "normal",
                paddingBottom: "20px",
                color: "rgba(128,128,153,1)",
              }}
            >
              Method <ImNotification style={{ color: "rgba(128,128,153,1)" }} />
            </th>
            <th
              style={{
                fontSize: "20px",
                fontFamily: "Poppins",
                fontWeight: "normal",
                paddingBottom: "20px",
                color: "rgba(128,128,153,1)",
              }}
            >
              Block{" "}
            </th>
            <th
              style={{
                fontSize: "20px",
                fontFamily: "Poppins",
                fontWeight: "normal",
                paddingBottom: "20px",
                color: "rgba(128,128,153,1)",
              }}
            >
              Age
            </th>
            <th
              style={{
                fontSize: "20px",
                fontFamily: "Poppins",
                fontWeight: "normal",
                paddingBottom: "20px",
                color: "rgba(128,128,153,1)",
              }}
            >
              From
            </th>
            <th
              style={{
                fontSize: "20px",
                fontFamily: "Poppins",
                fontWeight: "normal",
                paddingBottom: "20px",
                color: "rgba(128,128,153,1)",
              }}
            >
              To
            </th>
            <th
              style={{
                fontSize: "20px",
                fontFamily: "Poppins",
                fontWeight: "normal",
                paddingBottom: "20px",
                color: "rgba(128,128,153,1)",
              }}
            >
              Value
            </th>
            <th
              style={{
                fontSize: "20px",
                fontFamily: "Poppins",
                fontWeight: "normal",
                paddingBottom: "20px",
                color: "rgba(128,128,153,1)",
              }}
            >
              Txn Fee
            </th>
          </tr>
        </thead>
        <tbody>
          {activeNodes.map((node) => (
            <tr
              key={node.id}
              style={{
                color: theme === "light" ? "black" : "rgba(225,225,225,1)",
              }}
            >
              <td style={{ paddingTop: "25px" }}>
                <div
                  style={{
                    display: "flex",
                    gap: "25px",
                    color: "rgba(128,128,153,1)",
                  }}
                >
                  <p style={{ display: "flex", gap: "10px" }}>
                    {" "}
                    {/* <img src={path} /> */}
                    <span style={{ fontSize: "16px", fontFamily: "Poppins" }}>
                      <span
                        style={{
                          border: "1px solid rgba(22,22,63,1)",
                          borderRadius: "5px",
                          textAlign: "center",
                          padding: "0px 1px 2px 7px",
                        }}
                      >
                        {" "}
                        <AiOutlineEye style={{ fontSize: "18px" }} />{" "}
                      </span>{" "}
                      {node.TxnHash}
                    </span>
                  </p>
                </div>
              </td>

              <td style={{ paddingRight: "5px", paddingTop: "25px" }}>
                <div
                  style={{
                    fontSize: "16px",
                    fontFamily: "Poppins",
                    color: "rgba(0,0,51,1)",
                    backgroundColor: "rgba(128,128,153,1)",
                    textAlign: "center",
                    borderRadius: "5px",
                  }}
                >
                  {node.method}
                </div>
              </td>
              <td
                style={{
                  paddingTop: "25px",
                  fontSize: "16px",
                  fontFamily: "Poppins",
                  color: "rgba(128,128,153,1)",
                }}
              >
                {node.block}
              </td>
              <td
                style={{
                  fontSize: "16px",
                  fontFamily: "Avenir",
                  paddingTop: "25px",
                  color: "rgba(128,128,153,1)",
                }}
              >
                {node.age}
              </td>
              <td style={{ paddingTop: "25px" }}>
                <div
                  style={{
                    color: "rgba(128,128,153,1)",
                    fontSize: "16px",
                    fontFamily: "Poppins",
                  }}
                >
                  {node.from}
                </div>
              </td>
              <td style={{ paddingTop: "25px" }}>
                <div
                  style={{
                    color: "rgba(128,128,153,1)",
                    fontSize: "16px",
                    fontFamily: "Poppins",
                  }}
                >
                  <img src={way} alt="icon" /> {node.To}
                </div>
              </td>
              <td style={{ paddingTop: "25px" }}>
                <div
                  style={{
                    color: "rgba(128,128,153,1)",
                    fontSize: "16px",
                    fontFamily: "Poppins",
                  }}
                >
                  {node.VAlue}
                </div>
              </td>
              <td style={{ paddingTop: "25px" }}>
                <div
                  style={{
                    color: "rgba(128,128,153,1)",
                    fontSize: "16px",
                    fontFamily: "Poppins",
                  }}
                >
                  {node.txnFee}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
