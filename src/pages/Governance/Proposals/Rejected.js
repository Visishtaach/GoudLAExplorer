import React, { useContext } from "react";
import { ThemeContext } from "../../../themecontext/ThemeContext";
import { RejectedData } from "../../../helpers/RejectedData";
import { Row, Col, ProgressBar } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { BsDot } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Rejected = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const openHandler = () => {
    navigate("/rejected-details");
  };
  return (
    <div style={{ paddingTop: "20px" }}>
      {" "}
      <Row lg={12} m={5}>
        <Col>
          <Table responsive>
            <tbody>
              {RejectedData.map((item) => (
                <tr
                  onClick={openHandler}
                  style={{
                    borderColor:
                      theme === "light"
                        ? "rgb(235, 235, 235)"
                        : "rgba(37,64,110,1)",
                    cursor: "pointer",
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
                          style={{ fontFamily: "Poppins", fontSize: "18px" }}
                        >
                          {item.eventName}
                        </span>
                      </div>

                      <div
                        style={{
                          display: "inline-flex",
                          padding: "5px",
                          color: theme === "light" ? "white" : "rgb(0, 0, 51)",
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
                      <div style={{ paddingTop: "20px" }}>
                        <ProgressBar
                          style={{
                            height: "46px",
                            width: "400px",
                            color: "pink",
                            borderRadius: "10px",
                            border: theme === "light" ? "1px solid #B6B6B6"  : "1px solid #4AA4DC",
                            backgroundColor:
                              theme === "light" ? "white" : "#16163F",
                          }}
                        >
                          <ProgressBar
                            variant="success"
                            key={1}
                            now={item.progress}
                            // label={`${item.progress1}`}
                            style={{
                              fontSize: "16px",
                              fontFamily: "Avenir",
                              borderTopRightRadius: "10px",
                              borderBottomRightRadius: "10px",
                              zIndex: "1",
                            }}
                          />
                          <ProgressBar
                            variant="danger"
                            key={2}
                            now={item.progress1}
                            label={`${item.progress1}%`}
                            style={{
                              borderTopRightRadius: "10px",
                              borderBottomRightRadius: "10px",
                              borderTopLeftRadius: "10px",
                              borderBottomLeftRadius: "10px",
                              fontSize: "16px",
                              fontFamily: "Avenir",
                              marginLeft: "-20px",
                            }}
                          />
                        </ProgressBar>
                      </div>
                    </Row>
                  </td>
                  <td align="left">
                    <div style={{ paddingTop: "20px" }}>
                      <div
                        style={{
                          color: "#D45857",
                          fontSize: "16px",
                          fontFamily: "Poppins",
                          textAlign: "left",
                          // fontWeight:'bold'
                        }}
                      >
                        <BsDot />
                        {item.status}
                      </div>
                      <div
                        style={{
                          color: "rgba(127,127,152,1)",
                          fontSize: "14px",
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

export default Rejected;
