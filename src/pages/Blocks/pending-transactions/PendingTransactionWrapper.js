import React, { useContext } from "react";
import { ThemeContext } from "../../../themecontext/ThemeContext";
import { ImNotification } from "react-icons/im";
import filter from "../../../assets/Blocks/filter.svg";

const PendingTransactionWrapper = ({ pendingTxns }) => {
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
              Nonce
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
              Last Seen
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
              Gas Limit
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
              Gas Price
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
              To{" "}
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
          </tr>
        </thead>
        <tbody>
          {pendingTxns.map((txn) => (
            <tr
              key={txn.id}
              style={{
                color: theme === "light" ? "black" : "rgba(225,225,225,1)",
                textTransform: "capitalize",
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
                    <span style={{ fontSize: "16px", fontFamily: "Poppins" }}>
                      {txn.txnHash}
                    </span>
                  </p>
                </div>
              </td>

              <td style={{ paddingRight: "5px", paddingTop: "25px" }}>
                <div
                  style={{
                    fontSize: "16px",
                    fontFamily: "Poppins",
                    color: theme === "dark" ? "rgba(0,0,51,1)": "white",
                    backgroundColor: "rgba(128,128,153,1)",
                    textAlign: "center",
                    borderRadius: "5px",
                  }}
                >
                  {txn.nonce}
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
                {txn.method}
              </td>
              <td
                style={{
                  fontSize: "16px",
                  fontFamily: "Avenir",
                  paddingTop: "25px",
                  color: "rgba(128,128,153,1)",
                }}
              >
                {txn.lastseen}
              </td>
              <td style={{ paddingTop: "25px" }}>
                <div
                  style={{
                    color: "rgba(128,128,153,1)",
                    fontSize: "16px",
                    fontFamily: "Poppins",
                  }}
                >
                  {txn.gaslimit}
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
                  {txn.gasprice}
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
                  {txn.from}{" "}
                  <img
                    src={filter}
                    alt="icon"
                    style={{ width: "15px", height: "15px" }}
                  />
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
                  {txn.to}{" "}
                  <img src={filter} style={{ width: "15px", height: "15px" }} />
                </div>
              </td>
              <td style={{ paddingTop: "25px" }}>
                <div
                  style={{
                    color: "rgba(128,128,153,1)",
                    fontSize: "16px",
                    fontFamily: "Poppins",
                    textTransform: "capitalize",
                  }}
                >
                  {txn.value}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PendingTransactionWrapper;
