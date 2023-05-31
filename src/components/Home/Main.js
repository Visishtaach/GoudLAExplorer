import React, { useState, useContext } from "react";

import { Row, Col, Container, Form } from "react-bootstrap";
import { ThemeContext } from "../../themecontext/ThemeContext";
import { InputGroup } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
import { RxHeartFilled, RxDotFilled } from "react-icons/rx";

import th from "../../assets/th.png";
import news from "../../assets/announcement.png";
import newsLogo from "../../assets/news.png";
import views from "../../assets/views.png";
import bg from "../../assets/bg.png";

import Details from "./Details";
import GraphSection from "./GraphSection";
import Lists from "./Lists";
import WalletAssets from "./WalletAssets";
// import Footer from "./Footer";
import Footer from "../layout/Footer";

const Main = () => {
  const { theme } = useContext(ThemeContext);
  const [seen, setSeen] = useState(5367);
  const [fav, setFav] = useState(150);
  // Gets the current date
  const currentDate = new Date();

  // Format the date as "Month Day" (e.g., "May 19")
  const formattedDate = currentDate.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
  });

  // {
  //   Videos.map((item)=>(
  //     console.log(item)
  //   ))
  // }

  return (
    <>
      <div 
        style={{
          height: "402px",
          paddingTop: "100px",
          paddingBottom: "0",
          backgroundImage: `url(${bg})`,
        }}
      >
        <div style={{ margin: "20px" }}>
          <div className="container">
            <div className="col-lg-12 w-100">
              <div className="row" style={{ gap: "20px" }}>
                <div className="col-lg-5 mb-1">
                  <div className="d-flex">
                    <div className="w-100">
                      <h5
                        style={{
                          color: "rgba(255,255,255,1)",
                          fontSize: "21px",
                          fontFamily: "Poppins",
                          marginTop: "45px",
                        }}
                      >
                        GoudLA Explorer
                      </h5>
                      <InputGroup
                        className="mb-2"
                        style={{
                          border:
                            theme === "dark"
                              ? "2px solid rgba(128,99,172,1)"
                              : "1px solid rgba(128,99,172,1)",
                          borderRadius: "15px",
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
                            borderTopLeftRadius: "15px",
                            borderBottomLeftRadius:'15px'
                          }}
                        />
                        <InputGroup.Text
                          id="basic-addon2"
                          style={{
                            border: "none",
                            borderLeft: "none",
                            borderColor:
                              theme === "dark" ? "rgba(128,99,172,1)" : "#B233F7",
                            backgroundColor: "black",
                            margin: 0,
                            borderTopRightRadius: "15px",
                            borderBottomRightRadius:'15px'
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
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-3  mb-1"
                  style={{
                    height: "auto",
                    backgroundColor: "rgba(74,164,220,1)",
                    borderRadius: "20px",
                    width: window.innerWidth > 990 ? "360px" : "60%",
                  }}
                >
                  <Row className="mt-1 justify-content-between">
                    <Col xs={12} sm={7}>
                      <div className="d-flex align-items-start justify-content-between">
                        <img src={news} alt="Big news" />
                        <div
                          className="d-flex text-left align-items-center justify-content-start"
                          style={{
                            whiteSpace: "nowrap",
                            fontSize: "14px",
                            fontFamily: "Poppins",
                            color: "rgba(37,64,110,1)",
                            padding: "2px",
                            marginLeft: "0px",
                          }}
                        >
                          GoudLA Announcement
                        </div>
                      </div>
                    </Col>

                    <Col xs={12} sm={4}>
                      <div
                        className="d-flex align-items-center justify-content-end text-right"
                        style={{
                          fontSize: "12px",
                          fontFamily: "Poppins",
                          color: "rgba(37,64,110,1)",
                          padding: "2px",
                        }}
                      >
                        More <AiOutlineRight />
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-1 mb-1">
                    <Col sm={4}>
                      <div className="d-flex align-items-center justify-content-between">
                        <img
                          src={newsLogo}
                          alt="logo"
                          style={{ width: "94px", height: "93px" }}
                        />
                      </div>
                    </Col>
                    <Col sm={8}>
                      <Row>
                        <Col>
                          <div
                            className="mb-1  justify-content-end"
                            style={{
                              color: "rgba(255,255,255,1)",
                              fontFamily: "Poppins",
                              fontSize: "14px",
                              textAlign: "left",
                              //  marginLeft: "2.25rem",
                            }}
                          >
                            Introduction to GoudLA Wallet
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <div className="mb-1">
                            <p
                              style={{
                                fontSize: "10px",
                                color: "rgba(255,255,255,1)",
                                fontFamily: "Poppins",
                                lineHeight: "1.1",
                                textAlign: "left",
                              }}
                            >
                              This week we will remember not only AMA - session
                              on GoudLA Wallet, which is planned on 12.05.23.
                            </p>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col
                          xs={6}
                          sm={3}
                          className="d-flex align-items-center justify-content-between p-1"
                        >
                          <div
                            style={{ fontSize: "8px", gap: "2px" }}
                            className="d-flex"
                          >
                            {formattedDate}
                            <RxDotFilled style={{ fontSize: "10px" }} />
                          </div>
                        </Col>
                        <Col
                          xs={6}
                          sm={3}
                          className="d-flex align-items-center justify-content-between "
                        >
                          {/* <RxDotFilled style={{ fontSize: "10px" }} /> */}
                          <div
                            style={{
                              fontSize: "10px",
                              gap: "3px",
                            }}
                            className="d-flex align-items-center"
                          >
                            <img
                              src={views}
                              alt="seen by"
                              style={{
                                width: "10px",
                                height: "8px",
                                fontFamily: "Avenir",
                              }}
                            />

                            {seen}
                            <RxDotFilled style={{ fontSize: "8px" }} />
                          </div>
                        </Col>
                        <Col
                          xs={6}
                          sm={3}
                          className="d-flex align-items-center justify-content-between"
                        >
                          <div
                            style={{
                              fontSize: "10px",
                              fontFamily: "Avenir",
                              gap: "2px",
                            }}
                            className="d-flex "
                          >
                            <RxHeartFilled style={{ fontSize: "10px" }} />
                            <span>{fav}</span>

                            <RxDotFilled style={{ fontSize: "10px" }} />
                          </div>
                          <div></div>
                        </Col>
                        <Col
                          xs={6}
                          sm={3}
                          className="d-flex align-items-center justify-content-center"
                        >
                          <div>
                            <span
                              style={{
                                fontSize: "8px",
                                color: "rgba(74,164,220,1)",
                                backgroundColor: "rgba(37, 64, 110, 1)",
                                padding: "2px",
                                borderRadius: "4px",
                              }}
                            >
                              GOUD
                            </span>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>

                <div
                  className="col-lg-3"
                  style={{
                    //  width: "393px",
                    height: "145px",

                    backgroundImage: `url(${th})`,
                    backgroundRepeat: "no-repeat",
                    borderRadius: "20px",
                  }}
                ></div>
              </div>
            </div>
          </div>

          <Details />
          {/* <DetailsList /> */}
          <GraphSection />
          <Lists />
          <WalletAssets />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Main;
