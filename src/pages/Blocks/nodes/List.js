import React, { useContext } from "react";
import path from "../../../assets/Blocks/Nodes Dark.svg";
import { ThemeContext } from "../../../themecontext/ThemeContext";
import lightNode from "../../../assets/Blocks/Nodes Light.svg";

const List = ({ activeNodes }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="table-responsive pt-5">
      <table
        className="table table-border"
        style={{
          borderBottom: theme === "light" ? "" : "1px solid rgba(22,22,63,1)",
        }}
      >
        <thead>
          <tr
            style={{
              color: theme === "light" ? "black" : "rgba(225,225,225,1)",
              textAlign: "right",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <th
              style={{
                textAlign: "left",
                fontSize: "24px",
                fontFamily: "Poppins",
                fontWeight: "normal",
                paddingBottom: "20px",
              }}
            >
              # Validator
            </th>

            <th
              style={{
                paddingRight: "5px",
                fontSize: "24px",
                fontFamily: "Poppins",
                fontWeight: "normal",
                paddingBottom: "20px",
              }}
            >
              Voting Power
            </th>
            <th
              style={{
                fontSize: "24px",
                fontFamily: "Poppins",
                fontWeight: "normal",
                paddingBottom: "20px",
              }}
            >
              24H Changes
            </th>
            <th
              style={{
                fontSize: "24px",
                fontFamily: "Poppins",
                fontWeight: "normal",
                paddingBottom: "20px",
              }}
            >
              Commission
            </th>
            <th
              style={{
                fontSize: "24px",
                fontFamily: "Poppins",
                fontWeight: "normal",
                paddingBottom: "20px",
              }}
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {activeNodes.map((node) => (
            <tr
              key={node.id}
              style={{
                color: theme === "light" ? "black" : "rgba(225,225,225,1)",
                textAlign: "right",
              }}
            >
              <td style={{ paddingTop: "25px" }}>
                <div style={{ display: "flex", gap: "25px" }}>
                  <p style={{ fontFamily: "Avenir", fontSize: "24px" }}>
                    {" "}
                    {node.id}
                  </p>
                  <p style={{ display: "flex", gap: "10px" }}>
                    {" "}
                    <img
                      src={theme === "light" ? lightNode : path}
                      alt="icon"
                    />
                    <span style={{ fontSize: "24px", fontFamily: "Poppins" }}>
                      {node.validator}
                    </span>
                  </p>
                </div>
              </td>

              <td style={{ paddingRight: "5px", paddingTop: "25px" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "end",
                  }}
                >
                  <span style={{ fontSize: "24px", fontFamily: "Avenir" }}>
                    {node.votingPower}
                  </span>
                  <p style={{ fontFamily: "Avenir", fontSize: "16px" }}>
                    {node.percentage}
                  </p>
                </div>
              </td>
              <td style={{ paddingTop: "25px" }}></td>
              <td
                style={{
                  fontSize: "24px",
                  fontFamily: "Avenir",
                  paddingTop: "25px",
                }}
              >
                {node.commission}
              </td>
              <td style={{ paddingTop: "25px" }}>
                <div
                  style={{
                    backgroundColor:
                      `${node.action}` === "Delegate"
                        ? "rgba(139,86,163,1)"
                        : "#D45857",
                    display: "inline-flex",
                    height: "34px",
                    textAlign: "center",
                    alignItems: "center",
                    width: "134px",
                    justifyContent: "center",
                    borderRadius: "5px",
                    fontSize: "16px",
                    fontFamily: "Poppins",
                    textTransform: "capitalize",
                    color: "white",
                  }}
                >
                  {node.action}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
