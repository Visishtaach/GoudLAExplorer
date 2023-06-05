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
import ta from "../../assets/ta22.png";

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
          //  height: "402px",
          paddingTop: "20px",
          // paddingBottom: "0",
          // backgroundImage: `url(${bg})`,
        }}
      >
        <div className="h-50" style={{overflowX:"hidden"}}>
          <video
            // src={}
            autoplay="true"
            loop
            muted="true"
            // controls
            style={{} }
          >
            <source src={require("../../assets/video.mp4")} />
          </video>

          <div className="container test" style={{}}>
            <div className="col-lg-12 w-100">
              <div className="row" style={{width:"100%"}}>
                <div className="col-lg-4 mb-1">
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
                        GoudLA Space
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
                            padding: "12px 20px",

                            fontSize: "12px",
                            fontFamily: "Poppins",
                            height: "53px",
                            color: "#B6B6B6",
                            borderTopLeftRadius: "15px",
                            borderBottomLeftRadius: "15px",
                            // textAlign:'center'
                          }}
                        />
                        <InputGroup.Text
                          id="basic-addon2"
                          style={{
                            border: "none",
                            borderLeft: "none",
                            borderColor:
                              theme === "dark"
                                ? "rgba(128,99,172,1)"
                                : "#B233F7",
                            backgroundColor: "black",
                            margin: 0,
                            borderTopRightRadius: "15px",
                            borderBottomRightRadius: "15px",
                          }}
                        >
                          <BsSearch
                            style={{
                              borderRight: "none",
                              margin: 0,
                              color: "rgba(74,164,220,1)",
                              fontSize: "16px",
                              marginRight: "8px",
                            }}
                          />
                        </InputGroup.Text>
                      </InputGroup>
                    </div>
                  </div>
                </div>

                <div
                  className="Bimg col-lg-4"
                  style={{
                    height: "170px",
                    // backgroundColor: "rgba(74,164,220,1)",
                    borderRadius: "20px",
                    // width: window.innerWidth > 990 ? "70%" : "60%",
                    backgroundImage: `url(${ta})`,
                    backgroundRepeat: "no-repeat",
                    // marginLeft:"10px"
                    // width:"100%"

                  }}
                ></div>

                <div
                  className="col-lg-4 Bimg"
                  style={{
                    height: "175px",
                    backgroundImage: `url(${th})`,
                    backgroundRepeat: "no-repeat",
                    borderRadius: "20px",
                    // marginLeft: "20px",
                    // width:"100%"
                  }}
                ></div>
              </div>
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
    </>
  );
};

export default Main;
