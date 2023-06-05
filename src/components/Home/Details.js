import React, { useContext, useEffect, useState } from "react";
import fire from "../../assets/Icons/fireee.png";
import profit from "../../assets/Icons/hand.png";
import cap from "../../assets/Icons/globee.png";
import price from "../../assets/Icons/c.png";
import { ThemeContext } from "../../themecontext/ThemeContext";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Details = () => {
  const { theme } = useContext(ThemeContext);
  const [height, setHeight] = useState()
  const [communityPool, setCommunityPool] = useState()

  const getHeight = async() =>{
    const res = await fetch(`http://3.95.171.204:1317//cosmos/base/tendermint/v1beta1/blocks/latest`)
    const data = await res.json()
    console.log('data', data)
    if(data){
      setHeight( data.block.header.height)
    }
  }

const  getCommunityPoolData = async()=>{
    const cp = await fetch(`http://3.95.171.204:1317//cosmos/distribution/v1beta1/community_pool`)
    const cpData = await cp.json()
    console.log('communitypool data', cpData)
  }

  useEffect(()=>{
    getHeight()
    getCommunityPoolData()
  
  },[height])
  return (
    <>
      <div
        className="container mt-4"
        style={{
          // paddingTop: "-90px",
          backgroundColor: theme === "light" ? "white" : "rgb(0, 0, 51)",
          borderRadius: "15px",
          color: theme === "light" ? "black" : "white",
          height: "auto",
          border:
            theme === "light"
              ? "1px solid rgba(235,235,235,1)"
              : "1px solid #000033",
        }}
      >
        <Row>
          <Col
            sm={3}

            style={{
              borderRight:
                window.innerWidth > 1000 && theme === "light"
                  ? "2px solid rgba(235,235,235,1)"
                  : "1px solid rgba(22,22,63,1)",
              borderBottom:
                (window.innerWidth < 700 || window.innerWidth > 1000) &&
                theme === "light"
                  ? "2px solid rgba(235,235,235,1)"
                  : "1px solid rgba(22,22,63,1)",
              textAlign: "left",
              padding: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent:"center",
                gap: "8px",
              }}
            >
              <img
                src={price}
                style={{
                  width: "29.637px",
                  heigth: "29.984px",
                }}
                alt="price"
              />
              <div>
                <span
                  style={{
                    marginBottom: "10px",
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    color: "rgba(127,127,152,1)",
                  }}
                >
                  GoudLA Price
                </span>
                <div>
                  <span
                    style={{
                      fontFamily: "Avenir",
                      fontSize: "16px",
                      color:
                        theme === "light"
                          ? "rgba(0,0,21,1)"
                          : "rgba(255,255,255,1)",
                      fontStyle: "normal",
                    }}
                  >
                    $123.889
                  </span>{" "}
                  <span
                    style={{
                      fontFamily: "Avenir",
                      fontSize: "16px",
                      fontStyle: "normal",
                      color: "rgba(127,127,152,1)",
                    }}
                  >
                    {" "}
                    @0.1661821
                  </span>{" "}
                  <div
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "14px",
                      color: "rgba(127,127,152,1)",
                    }}
                  >
                    Goud
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col
            sm
            style={{
              borderRight:
                window.innerWidth > 1000 && theme === "light"
                  ? "2px solid rgba(235,235,235,1)"
                  : "1px solid rgba(22,22,63,1)",
              borderBottom:
                (window.innerWidth < 700 || window.innerWidth > 1000) &&
                theme === "light"
                  ? "2px solid rgba(235,235,235,1)"
                  : "1px solid rgba(22,22,63,1)",
              paddingTop: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent:"center"
              }}
            >
              <div>
                <div
                  style={{
                    marginBottom: "10px",
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    color: "rgba(127,127,152,1)",
                  }}
                >
                  Transactions
                  <span>
                    <div
                      style={{
                        fontFamily: "Avenir",
                        fontSize: "16px",
                        color:
                          theme === "light"
                            ? "rgba(0,0,21,1)"
                            : "rgba(255,255,255,1)",
                      }}
                    >
                      5,266.66.M{" "}
                      <span
                        style={{
                          fontFamily: "Avenir",
                          fontSize: "16px",
                          color: "rgba(127,127,152,1)",
                        }}
                      >
                        {" "}
                        (89.0{" "}
                        <span
                          style={{
                            fontFamily: "Poppins",
                            fontSize: "16px",
                            color: "rgba(127,127,152,1)",
                          }}
                        >
                          TPS)
                        </span>
                      </span>{" "}
                    </div>{" "}
                  </span>
                </div>
              </div>
            </div>
          </Col>
          <Col
            sm
            style={{
              borderRight:
                window.innerWidth > 1000 && theme === "light"
                  ? "2px solid rgba(235,235,235,1)"
                  : "1px solid rgba(22,22,63,1)",
              borderBottom:
                (window.innerWidth < 700 || window.innerWidth > 1000) &&
                theme === "light"
                  ? "2px solid rgba(235,235,235,1)"
                  : "1px solid rgba(22,22,63,1)",
              paddingTop: "20px",
            
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "start",
                // justifyContent:"center"
             
              }}
            >
              <div>
                <div
                  style={{
                    marginBottom: "10px",
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    color: "rgba(127,127,152,1)",
                  paddingLeft: window.innerWidth <=600? "92px":'22px'
                  }}
                >
                  Bonded{" "}
                  <div>
                    <div
                      style={{
                        fontFamily: "Poppins",
                        fontSize: "16px",
                        color:
                          theme === "light"
                            ? "rgba(0,0,21,1)"
                            : "rgba(225,225,225,1)",
                      }}
                    >
                      3Gwei <span
                      style={{
                        fontFamily: "Avenir",
                        fontSize: "16px",
                        color: "rgba(127,127,152,1)",
                      }}
                    >
                      ($0.02)
                    </span>
                    </div>{" "}
                    
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col
            sm
            style={{
              borderRight:
                window.innerWidth > 1000 && theme === "light"
                  ? "2px solid rgba(235,235,235,1)"
                  : "1px solid rgba(22,22,63,1)",
              borderBottom:
                (window.innerWidth < 700 || window.innerWidth > 1000) &&
                theme === "light"
                  ? "2px solid rgba(235,235,235,1)"
                  : "1px solid rgba(22,22,63,1)",
              paddingTop: "20px",
              
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent:"center"
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    color: "rgba(127,127,152,1)",
                  }}
                >
                  Community Pool
                </span>
                <div>
                  <div
                    style={{
                      fontFamily: "Avenir",
                      fontSize: "16px",
                      fontStyle: "normal",
                      color:
                        theme === "light"
                          ? "rgba(0,0,21,1)"
                          : "rgba(225,225,225,1)",
                    }}
                  >
                    166182182
                  </div>{" "}
                  <div
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "16px",
                      fontStyle: "normal",
                      color:
                        theme === "light"
                          ? "rgba(0,0,21,1)"
                          : "rgba(225,225,225,1)",
                    }}
                  >
                    Goud
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col
            sm={3}
            style={{
              borderBottom:
                (window.innerWidth < 700 || window.innerWidth > 1000) &&
                theme === "light"
                  ? "2px solid rgba(235,235,235,1)"
                  : "1px solid rgba(22,22,63,1)",

              padding: "20px 40px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
            justifyContent:'center',
                gap: "8px",
              
              }}
            >
              <img
                src={fire}
                alt="fire"
                style={{
                  width: "22.691px",
                  heigth: "30.26px",
                }}
              />
              <div>
                <span
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    color: "rgba(127,127,152,1)",
                  }}
                >
                  Goud Tokens Burned
                </span>
                <div>
                  <span
                    style={{
                      fontFamily: "Avenir",
                      fontSize: "16px",
                      fontStyle: "normal",
                      color:
                        theme === "light"
                          ? "rgba(0,0,21,1)"
                          : "rgba(225,225,225,1)",
                    }}
                  >
                    $516,00
                  </span>{" "}
                  <span
                    style={{
                      fontFamily: "Avenir",
                      fontSize: "16px",
                      fontStyle: "normal",
                      color: "rgba(127,127,152,1)",
                    }}
                  >
                    {" "}
                    (989,113,Goud)
                  </span>{" "}
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col
            xs={12}
            sm={3}
            style={{
              borderRight:
                window.innerWidth > 1000 && theme === "light"
                  ? "2px solid rgba(235,235,235,1)"
                  : "1px solid rgba(22,22,63,1)",
              borderBottom: window.innerWidth < 700 ? "1px solid gray" : "none",

              padding: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent:"center",
                gap: "8px",
              }}
            >
              <img
                src={cap}
                alt="cap"
                style={{
                  width: "29.637px",
                  heigth: "29.984px",
                }}
              />
              <div>
                <div
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    color: "rgba(127,127,152,1)",
                  }}
                >
                  GoudLA MARKET CAP
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "Avenir",
                      fontSize: "16px",
                      color:
                        theme === "light"
                          ? "rgba(0,0,21,1)"
                          : "rgba(255,255,255,1)",
                      // padding: "10px",
                      fontStyle: "normal",
                    }}
                  >
                    7,323,112,876.00
                  </div>
                  <span
                    style={{
                      fontFamily: "Avenir",
                      fontSize: "16px",
                      color: "rgba(127,127,152,1)",

                      fontStyle: "normal",
                    }}
                  >
                    (12,989,113 Goud)
                  </span>
                </div>
              </div>
            </div>
          </Col>
          <Col
            md
            style={{
              borderRight:
                window.innerWidth > 1000 && theme === "light"
                  ? "2px solid rgba(235,235,235,1)"
                  : "1px solid rgba(22,22,63,1)",
              borderBottom: window.innerWidth < 700 ? "1px solid gray" : "none",
              paddingTop: "20px",
              paddingBottom: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent:"center",
                gap: "3px",

                marginLeft:
                  window.innerWidth < 1000 && window.innerWidth > 800
                    ? "15px"
                    : " 0px",
              }}
            >
              <div>
                <div
                  style={{
                    marginBottom: "10px",
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    color: "rgba(127,127,152,1)",
                  }}
                >
                  Latest Block(Height)
                  <div
                    style={{
                      fontFamily: "Avenir",
                      fontSize: "16px",
                      fontStyle: "normal",
                      color:
                        theme === "light"
                          ? "rgba(0,0,21,1)"
                          : "rgba(255,255,255,1)",
                    }}
                  >
                    {height}
                  </div>{" "}
                  <div
                    style={{
                      fontFamily: "Avenir",
                      fontSize: "16px",
                      color: "rgba(127,127,152,1)",
                      fontStyle: "normal",
                    }}
                  >
                    (12,989,113,Goud)
                  </div>
                </div>
                {/* <div> */}

                {/* </div> */}
              </div>
            </div>
          </Col>
          <Col
            md
            style={{
              borderRight:
                window.innerWidth > 1000 && theme === "light"
                  ? "2px solid rgba(235,235,235,1)"
                  : "1px solid rgba(22,22,63,1)",
              borderBottom: window.innerWidth < 700 ? "1px solid gray" : "none",
              paddingTop: "20px",
              paddingBottom: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent:'center',
                gap: "3px",
                //  textAlign: "center",
                // justifyContent:'center',
                //   padding: "10px",
              }}
            >
              <div>
                <span
                  style={{
                    marginBottom: "10px",
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    color: "rgba(127,127,152,1)",
                  }}
                >
                  Block Per Sec
                </span>
                <div>
                  <span
                    style={{
                      fontFamily: "Avenir",
                      fontSize: "16px",
                      color:
                        theme === "light"
                          ? "rgba(0,0,21,1)"
                          : "rgba(255,255,255,1)",
                      fontStyle: "normal",
                    }}
                  >
                    66,556,256,64
                  </span>
                  <span
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "16px",
                      color: "rgba(127,127,152,1)",
                    }}
                  >
                  {" "}  Goud
                  </span>
                </div>
              </div>
            </div>
          </Col>
          <Col
            md
            style={{
              borderRight:
                window.innerWidth > 1000 && theme === "light"
                  ? "2px solid rgba(235,235,235,1)"
                  : "1px solid rgba(22,22,63,1)",

              paddingTop: "20px",
              paddingBottom: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent:"center",
                alignItems: "center",
                gap: "3px",
              }}
            >
              <div>
                <span
                  style={{
                    marginBottom: "10px",
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    color: "rgba(127,127,152,1)",
                  }}
                >
                  Active Validator
                </span>
                <div>
                  <span
                    style={{
                      fontFamily: "Avenir",
                      fontStyle: "normal",
                      fontSize: "16px",
                      color:
                        theme === "light"
                          ? "rgba(0,0,21,1)"
                          : "rgba(255,255,255,1)",
                    }}
                  >
                    2,876,00
                  </span>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={12} md={3} style={{ padding: "20px " }}>
            {" "}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent:"center",
                gap: "8px",
              }}
            >
              <img
                src={profit}
                style={{
                  width: "31.957px",
                  height: "31.937px",
                }}
                alt="profit"
              />
              <div>
                <div
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    color: "rgba(127,127,152,1)",
                  }}
                >
                  Profit to Ecosystem
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "Avenir",
                      fontSize: "16px",
                      color:
                        theme === "light"
                          ? "rgba(0,0,21,1)"
                          : "rgba(255,255,255,1)",
                      fontStyle: "normal",
                    }}
                  >
                    2,876,00
                  </div>{" "}
                  <div
                    style={{
                      fontFamily: "Avenir",
                      fontSize: "16px",
                      color: "rgba(127,127,152,1)",
                      fontStyle: "normal",
                    }}
                  >
                    (12,989,113, Goud)
                  </div>{" "}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Details;
