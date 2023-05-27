import React, { useContext, useState } from "react";
import { ThemeContext } from "../../themecontext/ThemeContext";
import { Row, Col, Button, ListGroup, ProgressBar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Lists = () => {
  const { theme } = useContext(ThemeContext);
  const [showList1, setShowList1] = useState(true);
  const [showList2, setShowList2] = useState(false);
  const [tab1, setTab1] = useState(true);
  const [tab2, setTab2] = useState(false);

  const handleButtonClick1 = () => {
    setShowList1(true);
    setShowList2(false);
    setTab1(true);
    setTab2(false);
  };

  const handleButtonClick2 = () => {
    setShowList1(false);
    setShowList2(true);
    setTab2(true);
    setTab1(false);
  };

  const list1Items = [
    {
      id: 789,
      name: "Stride to join GoudLA Economic Zone and adopt ICS pattern",
      description: "will pass in 2 days",
      progress: 75,
      variant: "success",
    },
    {
      id: 790,
      name: "Stride to join GoudLA Economic Zone and adopt ICS pattern",
      description: "will pass in 2 days",
      progress: 50,
      variant: "danger",
    },
    {
      id: 791,
      name: "Stride to join GoudLA Economic Zone and adopt ICS pattern",
      description: "will pass in 2 days",
      progress: 35,
      variant: "danger",
    },
  ];

  const list2Items = [
    {
      id: 797,
      name: "Stride to join GoudLA Economic Zone and adopt ICS pattern",
      description: "will pass in 2 days",
      progress: 75,
      variant: "success",
    },
    {
      id: 790,
      name: "Stride to join GoudLA Economic Zone and adopt ICS pattern",
      description: "will pass in 2 days",
      progress: 50,
      variant: "danger",
    },
    {
      id: 791,
      name: "Stride to join GoudLA Economic Zone and adopt ICS pattern",
      description: "will pass in 2 days",
      progress: 35,
      variant: "danger",
    },
  ];

  const style1 = {
    fontSize: "17px",
    textDecoration: "none",
    backgroundColor: "rgba(127,127,152,1)",
    width: "auto",
    height: "auto",
    color: "rgba(255,255,255,1)",
    borderRadius: "10px",
    padding: "10px 40px 10px",
  };
  const style2 = {
    fontSize: "17px",
    textDecoration: "none",
    width: "auto",
    height: "auto",
    color: theme === "light" ? "black" : "white",

    padding: "10px 40px 10px",
  };

  return (
    <>
      <div
        className="container mt-4"
        style={{
          padding: "20px",
          backgroundColor: theme === "light" ? "white" : "rgb(0, 0, 51)",
          borderRadius: "15px",
          color: theme === "light" ? "black" : "white",
          height: "auto",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div
      
          style={{
            textAlign: "left",
            display: "inline-flex",
            borderRadius: "10px",
            border:
              theme === "light"
                ? "1px solid  rgba(235,235,235,1)"
                : "1px solid rgba(22,22,63,1)",
            
          }}
        >
          <NavLink
            to="/"
            variant="secondary"
            onClick={handleButtonClick1}
            style={tab1 ? style1 : style2}
          >
            Active Proposals
          </NavLink>

          <NavLink
            variant="light"
            // className={showList1 ? "active" : ""}
            // className={(navData) => navData.isActive ? "active-link" : "" }
            onClick={handleButtonClick2}
            // activeClassName="active-link"
            style={tab2 ? style1 : style2}
          >
            InActive Proposals
          </NavLink>
        </div>
        {showList1 && (
          <Row style={{ marginTop: "20px" }}>
            <Col>
              <ListGroup style={{ marginTop: "20px" }}>
                {list1Items.map((item) => (
                  <ListGroup.Item
                    key={item.id}
                    style={{
                      backgroundColor:
                        theme === "light" ? "white" : "rgb(0, 0, 51)",
                      border: "none",
                    }}
                  >
                    <Row className="align-items-center justify-content-center  ">
                      <Col xs={12} sm={1} className="mt-3 mt-sm-0">
                        <div
                          style={{
                            width: "76px",
                            height: "76px",
                            backgroundColor: "rgba(22,22,63,1)",
                            color: "white",
                            fontWeight: "bold",
                            textAlign: "center",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "10px",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.6)",
                          }}
                        >
                          {item.id}
                        </div>
                      </Col>
                      <Col
                        xs={12}
                        sm={5}
                        style={{
                          paddingLeft:
                            window.innerWidth > 570 && window.innerWidth < 900
                              ? "28px"
                              : "",
                        }}
                      >
                        <div
                          style={{
                            color:
                              theme === "light"
                                ? "rgba(0,0,21,1)"
                                : "rgba(255,255,255,1)",
                            fontSize: "19px",
                            fontFamily: "Poppins",
                            // backgroundColor:'red',
                          }}
                        >
                          {item.name}
                        </div>
                        <span
                          style={{
                            color: "rgba(48,197,244,1)",
                            fontSize: "13px",
                            fontFamily: "Poppins",
                          }}
                        >
                          {item.description}
                        </span>
                      </Col>

                      <Col xs={12} sm={5}>
                        <div>
                          <ProgressBar
                            now={item.progress}
                            label={`${item.progress}%`}
                            variant={item.variant}
                            style={{
                              height: "46px",
                              color: "pink",
                              borderRadius: "10px",
                              border: "1px solid #4AA4DC",
                              backgroundColor:
                                theme === "light" ? "white" : "#16163F",
                            }}
                            className="custom-progress-bar"
                          />
                        </div>
                      </Col>
                      <Col
                        xs={12}
                        sm={1}
                        // className="mt-3 mt-sm-0"
                        style={{
                          paddingLeft:
                            window.innerWidth > 570 && window.innerWidth < 900
                              ? "0px"
                              : "",
                        }}
                      >
                        <Button
                          style={{
                            fontFamily: "Poppins",
                            backgroundColor: "#8063AC",
                            border: "none",
                            width: "84px",
                            height: "46px",
                            fontSize: "21px",
                            // display:'flex',
                            // justifyContent:'flex-end',
                            // alignItems:'center'
                          }}
                        >
                          Vote
                        </Button>
                      </Col>
                    </Row>
                    <hr />
                  </ListGroup.Item>
                ))}{" "}
              </ListGroup>
            </Col>
          </Row>
        )}

        {showList2 && (
          <Row style={{ marginTop: "20px" }}>
            <Col>
              <ListGroup style={{ marginTop: "20px" }}>
                {list2Items.map((item) => (
                  <ListGroup.Item
                    key={item.id}
                    style={{
                      backgroundColor:
                        theme === "light" ? "white" : "rgb(0, 0, 51)",
                      border: "none",
                    }}
                  >
                    <Row className="align-items-center justify-content-center  ">
                      <Col xs={12} sm={1} className="mt-3 mt-sm-0">
                        <div
                          style={{
                            width: "76px",
                            height: "76px",
                            backgroundColor: "rgba(22,22,63,1)",
                            color: "white",
                            fontWeight: "bold",
                            textAlign: "center",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "10px",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.6)",
                          }}
                        >
                          {item.id}
                        </div>
                      </Col>
                      <Col
                        xs={12}
                        sm={5}
                        style={{
                          paddingLeft:
                            window.innerWidth > 570 && window.innerWidth < 900
                              ? "28px"
                              : "",
                        }}
                      >
                        <div
                          style={{
                            color:
                              theme === "light"
                                ? "rgba(0,0,21,1)"
                                : "rgba(255,255,255,1)",
                            fontSize: "19px",
                            fontFamily: "Poppins",
                            // backgroundColor:'red',
                          }}
                        >
                          {item.name}
                        </div>
                        <span
                          style={{
                            color: "rgba(48,197,244,1)",
                            fontSize: "13px",
                            fontFamily: "Poppins",
                          }}
                        >
                          {item.description}
                        </span>
                      </Col>

                      <Col xs={12} sm={5}>
                        <div>
                          <ProgressBar
                            now={item.progress}
                            label={`${item.progress}%`}
                            variant={item.variant}
                            style={{
                              height: "46px",
                              color: "pink",
                              borderRadius: "10px",
                              backgroundColor:
                                theme === "light" ? "white" : "#16163F",
                            }}
                            className="custom-progress-bar"
                          />
                        </div>
                      </Col>
                      <Col
                        xs={12}
                        sm={1}
                        // className="mt-3 mt-sm-0"
                        style={{
                          paddingLeft:
                            window.innerWidth > 570 && window.innerWidth < 900
                              ? "0px"
                              : "",
                        }}
                      >
                        <Button
                          style={{
                            fontFamily: "Poppins",
                            backgroundColor: "#8063AC",
                            border: "none",
                            width: "84px",
                            height: "46px",
                            fontSize: "21px",
                            // display:'flex',
                            // justifyContent:'flex-end',
                            // alignItems:'center'
                          }}
                        >
                          Vote
                        </Button>
                      </Col>
                    </Row>
                    <hr />
                  </ListGroup.Item>
                ))}{" "}
              </ListGroup>
            </Col>
          </Row>
        )}
      </div>
    </>
  );
};

export default Lists;
