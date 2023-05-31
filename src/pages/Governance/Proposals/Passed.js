import React, { useContext } from "react";
import { ThemeContext } from "../../../themecontext/ThemeContext";
import { PassedData } from "../../../helpers/PassedData";
import { Row, Col, ProgressBar } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { BsDot } from "react-icons/bs";
import { useNavigate } from "react-router-dom";


const Passed = () => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const openHandler = () => {
    navigate("/passed-details");
  };
  return (
    <div style={{ paddingTop: "20px" }}>
      {" "}
      <Row lg={12} m={5}>
        <Col>
          <Table responsive>
            <tbody>
              {PassedData.map((item) => (
                <tr
                  onClick={openHandler}
                  style={{
                    borderColor:
                      theme === "light"
                        ? "rgb(235, 235, 235)"
                        : "rgba(37,64,110,1)",
                        cursor:'pointer'
                  }}
                >
                  <td
                    style={{
                      paddingBottom: "10px",
                      textAlign: "center",
                      paddingTop: "10px",
                    }}
                  >
                    <div
                      className="p-4 text-center"
                      style={{
                        color: theme === "light" ? "black" : "white",
                        fontFamily: "Poppins",
                        fontSize: "18px",
                      }}
                    >
                      {item.rank}
                    </div>
                  </td>
                  <td style={{ width: "42%" }}>
                    <div
                      style={{
                        color:
                          theme === "light"
                            ? "rgba(0,0,21,1)"
                            : "rgba(255,255,255,1)",
                        paddingTop: "10px",
                      }}
                    >
                      <div>
                        <span
                          style={{ fontFamily: "Avenir", fontSize: "18px" }}
                        >
                          {item.eventNo}{" "}
                        </span>
                        <span
                          style={{ fontFamily: "Poppins", fontSize: "18px" }}
                        >
                          {item.eventName}
                        </span>
                      </div>

                      <div
                        style={{
                          display: "inline-flex",
                          padding: "5px",
                          color: "rgb(0, 0, 51)",
                          fontSize: "13px",
                          fontFamily: "Poppins",
                          backgroundColor:
                            theme === "light"
                              ? "rgba(127,127,152,1)"
                              : "rgba(127,127,152,1)",
                          borderRadius: "5px",
                        }}
                      >
                        {item.caption}
                      </div>
                    </div>
                  </td>
                  {/* <td>{item.description}</td> */}
                  <td align="left">
                    {" "}
                    <Row>
                      <div style={{ paddingTop: "10px" }}>
                        <ProgressBar
                          style={{
                            height: "46px",
                            width: "400px",
                            color: "pink",
                            borderRadius: "10px",
                            border: "1px solid #4AA4DC",
                            backgroundColor:
                              theme === "light" ? "white" : "#16163F",
                          }}
                        >
                          <ProgressBar
                            variant="success"
                            key={1}
                            now={item.progress1}
                            label={`${item.progress1}%`}
                            style={{ fontSize: "16px", fontFamily: "Avenir" }}
                          />
                          <ProgressBar
                            variant="danger"
                            key={2}
                            now={item.progress2}
                            label={`${item.progress2}.`}
                            style={{
                              borderTopRightRadius: "3px",
                              borderBottomRightRadius: "3px",
                              fontSize: "16px",
                              fontFamily: "Avenir",
                            }}
                          />
                          <ProgressBar
                            variant="danger"
                            key={3}
                            now={item.progress3}
                            label={`${item.progress3}.`}
                            style={{
                              borderTopRightRadius: "3px",
                              borderBottomRightRadius: "3px",
                              fontSize: "16px",
                              fontFamily: "Avenir",
                            }}
                          />
                          <ProgressBar
                            variant="secondary"
                            key={3}
                            now={item.progress4}
                            label={`${item.progress4}`}
                            style={{
                              borderTopRightRadius: "5px",
                              borderBottomRightRadius: "5px",
                              fontFamily: "Avenir",
                              fontSize: "16px",
                            }}
                          />
                        </ProgressBar>
                      </div>
                    </Row>
                  </td>
                  <td align="left">
                    <div>
                      <div
                        style={{
                          color: "#23A15F",
                          fontSize: "18px",
                          fontFamily: "Poppins",
                          textAlign: "left",
                        }}
                      >
                        <BsDot />
                        {item.status}
                      </div>
                      <div
                        style={{
                          color: "rgba(127,127,152,1)",
                          fontSize: "18px",
                          fontFamily: "Poppins",
                          textAlign: "left",
                        }}
                      >
                        {item.period}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};

export default Passed;
