import React, { useContext, useState } from "react";
import Header from "../../../components/layout/Header";
import SearchField from "../../../components/layout/SearchField";
import { ThemeContext } from "../../../themecontext/ThemeContext";
import ViewBlockWrapper from "./ViewBlockWrapper";
import { viewBlocksData } from "../../../helpers/viewBlocksData";
import Footer from "../../../components/layout/Footer";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import { ProgressBar } from "react-bootstrap";

const ViewBlocks = () => {
  const { theme } = useContext(ThemeContext);
  const [page, setPage] = useState(1);

  const nextPageHandler = () => {
    setPage(page + 1);
    console.log("moving to ", page);
  };

  const prevPageHandler = () => {
    if (page === 1) {
      alert("you r on starting page");
    } else {
      setPage(page - 1);
    }
  };
  return (
    <div className="container-sm">
      <Header />
      <SearchField />
      <div
        className="d-flex align-items-center justify-content-between"
        style={{
          padding: "10px 30px",
          color: theme === "light" ? "black" : "white",
        }}
      >
        <h4
          style={{
            color: theme === "light" ? "black" : "rgba(225,225,225,1)",
            fontSize: "24px",
            fontFamily: "Poppins",
          }}
        >
          Block
        </h4>
        <div
          style={{
            padding: "5px 20px",
            backgroundColor: "rgba(127,127,152,1)",
            color: theme === "light" ? "white" : "rgba(0,0,51,1)",
            borderRadius: "5px",
            fontFamily: "Poppins",
            fontSize: "16px",
          }}
        >
          Fees Burnt{" "}
          <span style={{ fontFamily: "Avenir", fontSize: "16px" }}>
            173,524.12
          </span>{" "}
          Goud
        </div>
      </div>
      <div
        className="container-sm"
        style={{
          // padding: "20px 20px",
          backgroundColor: theme === "light" ? "white" : "rgb(0, 0, 51)",
          borderRadius: "15px",
          color: theme === "light" ? "black" : "white",
          height: "auto",

          margin: "0px 25px",
          border:
            theme === "light"
              ? "1px solid rgba(235,235,235,1)"
              : "1px solid #000033",
        }}
      >
        <div
          className="row"
          style={{
            padding: "20px 0px",
            backgroundColor: theme === "light" ? "white" : "rgb(0, 0, 51)",
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
            color: theme === "light" ? "black" : "white",

            borderBottom:
              theme === "light"
                ? "1px solid rgb(226, 226, 226)"
                : "1px solid rgba(22,22,63,1)",
          }}
        >
          <div className="col-lg-6">
            <div
              style={{
                fontFamily: "Poppins",
                fontSize: "18px",
                color: "rgba(127,127,152,1)",
              }}
            >
              Block #
              <span
                style={{
                  fontSize: "18px",
                  fontFamily: "Avenir",
                  color: "rgba(127,127,152,1)",
                }}
              >
                28486472
              </span>{" "}
              to #{" "}
              <span
                style={{
                  fontSize: "18px",
                  fontFamily: "Avenir",
                  color: "rgba(127,127,152,1)",
                }}
              >
                28486496
              </span>{" "}
              (Total of{" "}
              <span
                style={{
                  fontSize: "18px",
                  fontFamily: "Avenir",
                  color: "rgba(127,127,152,1)",
                }}
              >
                28,486,497
              </span>{" "}
              blocks)
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center justify-content-end">
            <div className="d-flex align-items-center" style={{ gap: "10px" }}>
              <div
                style={{
                  color: "rgba(127,127,152,1)",
                  fontFamily: "Poppins",
                  fontSize: "18px",
                  borderRadius: "5px",
                  border:
                    theme === "light"
                      ? "1px solid rgb(226, 226, 226)"
                      : "1px solid rgba(22,22,63,1)",
                  padding: "5px",
                }}
                onClick={prevPageHandler}
              >
                First
              </div>
              <div
                style={{
                  border:
                    theme === "light"
                      ? "1px solid rgb(226, 226, 226)"
                      : "1px solid rgba(22,22,63,1)",
                  width: "38px",
                  height: "38px",
                  textAlign: "center",
                  borderRadius: "5px",
                  padding: "5px",
                }}
                onClick={prevPageHandler}
              >
                <SlArrowLeft style={{ color: "rgba(127,127,152,1)" }} />
              </div>
              <div
                style={{
                  color: "rgba(127,127,152,1)",
                  fontFamily: "Poppins",
                  fontSize: "18px",
                  borderRadius: "5px",
                  border:
                    theme === "light"
                      ? "1px solid rgb(226, 226, 226)"
                      : "1px solid rgba(22,22,63,1)",
                  padding: "5px",
                }}
              >
                Page {page} of 10000
              </div>
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  backgroundColor: "rgba(127,127,152,1)",
                  borderRadius: "5px",
                  textAlign: "center",
                  padding: "5px",
                  border:
                    theme === "light"
                      ? "1px solid rgb(226, 226, 226)"
                      : "1px solid rgba(22,22,63,1)",
                }}
                onClick={nextPageHandler}
              >
                <SlArrowRight
                  style={{ color: theme === "light" ? "white" : "black" }}
                />
              </div>
              <div
                style={{
                  color: theme === "dark" ? "rgba(0,0,51,1)" : "white",
                  fontFamily: "Poppins",
                  fontSize: "18px",
                  borderRadius: "5px",
                  border:
                    theme === "light"
                      ? "1px solid rgb(226, 226, 226)"
                      : "1px solid rgba(22,22,63,1)",
                  // padding: "1px 13px 4px",
                  padding: "5px",
                  height: "38px",
                  backgroundColor: "rgba(127,127,152,1)",
                }}
                onClick={nextPageHandler}
              >
                Last
              </div>
            </div>
          </div>
        </div>

        <div>
          {/* <ViewBlockWrapper blocks={viewBlocksData} /> */}
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
                    color: theme === "light" ? "black" : "rgba(225,225,225,1)",

                    textAlign: "left",
                    alignItems: "center",
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
                    Block
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
                    Txn
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
                    Validator
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
                    Gas Used
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
                    Reward
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
                    Fees Burnt{" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                {viewBlocksData
                  .slice(page * 10 - 10, page * 10)
                  .map((node, index) => (
                    <tr
                      key={index}
                      style={{
                        color:
                          theme === "light" ? "black" : "rgba(225,225,225,1)",
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
                            <span
                              style={{
                                fontSize: "16px",
                                fontFamily: "Poppins",
                              }}
                            >
                              {node.block}
                            </span>
                          </p>
                        </div>
                      </td>

                      <td style={{ paddingRight: "5px", paddingTop: "25px" }}>
                        <div
                          style={{
                            fontSize: "16px",
                            fontFamily: "Poppins",
                            color: "rgba(128,128,153,1)",
                          }}
                        >
                          {node.age}
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
                        {node.txn}
                      </td>

                      <td style={{ paddingTop: "25px" }}>
                        <div
                          style={{
                            color: "rgba(128,128,153,1)",
                            fontSize: "16px",
                            fontFamily: "Poppins",
                          }}
                        >
                          {node.validator}
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
                          {node.gasused}{" "}
                          <span
                            style={{ fontSize: "13px", fontFamily: "Avenir" }}
                          >
                            ({node.gasused_percent})
                          </span>
                          <ProgressBar className="progressBarThin">
                            <ProgressBar
                              style={{ backgroundColor: "#23A15F" }}
                              now="30"
                            />
                          </ProgressBar>
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
                          {node.gaslimit}
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
                          {node.reward}
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
                          {node.feesburnt}
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ViewBlocks;
