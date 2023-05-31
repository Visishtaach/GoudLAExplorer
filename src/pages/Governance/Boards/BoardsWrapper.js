import React, { useContext } from "react";
import { ThemeContext } from "../../../themecontext/ThemeContext";
import tickmark from "../../../assets/Blocks/tick.svg";
import wifi from "../../../assets/Blocks/wifi.svg";
import arrow from '../../../assets/Blocks/Arrows.svg';
import arrowDark from '../../../assets/Blocks/Arrows Dark.svg';

const BoardsWrapper = ({ BoardsData }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="table-responsive pt-5">
      <table
        className="table table-border"
        style={{
          borderBottom:
            theme === "light" ? "" : "1px solid rgba(22,22,63,1)",
        }}
      >
        <thead>
          <tr
            style={{
              textAlign: "left",
              alignItems: "center",
              backgroundColor: "rgba(128,128,153,1)",
              color: theme === "light" ? "white" : "rgba(0,0,51,1)",
            border:'none'
            }}
          >
            <th
              style={{
                textAlign: "center",
                fontSize: "20px",
                fontFamily: "Poppins",
                fontWeight: "normal",
                paddingTop:'20px',
                paddingBottom: "20px",
                borderTopLeftRadius: '15px',
                borderBottomLeftRadius: '15px'
              }}
            >
              Rank
            </th>

            <th
              style={{
                paddingRight: "5px",
                fontSize: "20px",
                fontFamily: "Poppins",
                fontWeight: "normal",
                paddingBottom: "20px",
              }}
            >
              Address
            </th>
            <th
              style={{
                fontSize: "20px",
                fontFamily: "Poppins",
                fontWeight: "normal",
                paddingBottom: "20px",
              }}
            >
            <img src={theme==="light" ? arrow : arrowDark} style={{ width:'15px', height:'15px'}}/>  Voting Power
            </th>
            <th
              style={{
                fontSize: "20px",
                fontFamily: "Poppins",
                fontWeight: "normal",
                paddingBottom: "20px",
              }}
            >
             <img src={theme==="light" ? arrow : arrowDark} style={{ width:'15px', height:'15px'}}/>  First Block
            </th>
            <th
              style={{
                fontSize: "20px",
                fontFamily: "Poppins",
                fontWeight: "normal",
                paddingBottom: "20px",
              }}
            >
             <img src={theme==="light" ? arrow : arrowDark} style={{ width:'15px', height:'15px'}}/>  Last Block
            </th>
            <th
              style={{
                fontSize: "20px",
                fontFamily: "Poppins",
                fontWeight: "normal",
                paddingBottom: "20px",
              }}
            >
             <img src={theme==="light" ? arrow : arrowDark} style={{ width:'15px', height:'15px'}}/>  1 Day
            </th>
            <th
              style={{
                fontSize: "20px",
                fontFamily: "Poppins",
                fontWeight: "normal",
                paddingBottom: "20px",
              }}
            >
             <img src={theme==="light" ? arrow : arrowDark} style={{ width:'15px', height:'15px'}}/>  7 Days
            </th>
            <th
              style={{
                fontSize: "20px",
                fontFamily: "Poppins",
                fontWeight: "normal",
                paddingBottom: "20px",
              }}
            >
            <img src={theme==="light" ? arrow : arrowDark} style={{ width:'15px', height:'15px'}}/>   30 Days
            </th>
            <th
              style={{
                fontSize: "20px",
                fontFamily: "Poppins",
                fontWeight: "normal",
                paddingBottom: "20px",
                borderTopRightRadius: '15px',
                borderBottomRightRadius: '15px'
              }}
            >
              Active
            </th>
          </tr>
        </thead>
        <tbody>
          {BoardsData.map((node, index) => (
            <tr
              key={index}
              style={{
                color: theme === "light" ? "black" : "rgba(225,225,225,1)",
              }}
            >
              <td style={{ paddingTop: "25px" }}>
                <div
                  style={{
                    display: "flex",
                    gap: "25px", textAlign:'center'
                    // color: "rgba(128,128,153,1)",
                  }}
                >
                  <p style={{ display: "flex", gap: "10px" }}>
                    {" "}
                    {/* <img src={path} /> */}
                    <span style={{ fontSize: "16px", fontFamily: "Poppins", }}>
                      {node.rank}
                    </span>
                  </p>
                </div>
              </td>

              <td style={{ paddingRight: "5px", paddingTop: "25px" }}>
                <div
                  style={{
                    fontSize: "14px",
                    fontFamily: "Poppins",

                    // backgroundColor: "rgba(128,128,153,1)",
                    // textAlign: "center",
                    // borderRadius: "5px",
                  }}
                >
                  {node.address}
                </div>
              </td>
              <td
                style={{
                  paddingTop: "25px",
                  fontSize: "16px",
                  fontFamily: "Poppins",
                  //   color: "rgba(128,128,153,1)",
                }}
              >
                <img src={tickmark} alt="icon" /> {node.votingPower}
              </td>
              <td
                style={{
                  fontSize: "16px",
                  fontFamily: "Avenir",
                  paddingTop: "25px",
                  color: "rgba(128,128,153,1)",
                }}
              >
                {node.firstBlock}
              </td>
              <td style={{ paddingTop: "25px" }}>
                <div
                  style={{
                    color: "rgba(128,128,153,1)",
                    fontSize: "16px",
                    fontFamily: "Poppins",
                  }}
                >
                  {node.lastBlock}
                </div>
              </td>
              <td style={{ paddingTop: "25px" }}>
                <div
                  style={{
                    color: theme==="light"? "black":"rgba(225,225,225,1)",
                    fontSize: "16px",
                    fontFamily: "Poppins",
                  }}
                >
                  {node.day1}
                </div>
              </td>
              <td style={{ paddingTop: "25px" }}>
                <div
                  style={{
                    color: theme==="light"? "black":"rgba(225,225,225,1)",
                    fontSize: "16px",
                    fontFamily: "Poppins",
                  }}
                >
                  {node.day7}
                </div>
              </td>
              <td style={{ paddingTop: "25px" }}>
                <div
                  style={{
                    color:theme==="light"? "black":"rgba(225,225,225,1)",
                    fontSize: "16px",
                    fontFamily: "Poppins",
                  }}
                >
                  {node.day30}
                </div>
              </td>
              <td style={{ paddingTop: "25px" }}>
                <div
                  style={{
                    color: "rgba(128,128,153,1)",
                    fontSize: "16px",
                    fontFamily: "Poppins",
                    color:'#23A15F'
                  }}
                >
                  <img src={wifi} alt="icon" /> {node.active}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BoardsWrapper;
