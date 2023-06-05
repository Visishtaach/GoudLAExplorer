import React, { useContext, useState } from "react";
import { ThemeContext } from "../../themecontext/ThemeContext";
import { Row, Col, Button, ProgressBar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Table from "react-bootstrap/Table";
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
    fontSize: window.innerWidth <= 500 ? "10px": "17px",
    textDecoration: "none",
    backgroundColor: "rgba(127,127,152,1)",
    width: "auto",
    height: "auto",
    color: "rgba(255,255,255,1)",
    borderRadius: "10px",
    padding: window.innerWidth <=290 ? "5px 10px 5px": "10px 30px 10px",
    
  };
  const style2 = {
    fontSize:window.innerWidth <= 500 ? "10px": "17px",
    textDecoration: "none",
    width: "auto",
    height: "auto",
    color: theme === "light" ? "black" : "white",

    padding: window.innerWidth <=290 ? "5px 10px 5px":  "10px 30px 10px",
  };

  return (
    <>
      <div
        className="container mt-4"
        style={{
          padding: "20px ",
          backgroundColor: theme === "light" ? "white" : "rgb(0, 0, 51)",
          borderRadius: "15px",
          color: theme === "light" ? "black" : "white",

          border:
            theme === "light"
              ? "1px solid rgba(235,235,235,1)"
              : "1px solid #000033",
        }}
      >
        <div style={{display:'flex', justifyContent:'start', paddingBottom:'20px'}}>
        <div
          // className="container-sm m-4"
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
            onClick={handleButtonClick2}
            style={tab2 ? style1 : style2}
          >
            InActive Proposals
          </NavLink>
          </div>
        </div>
        <Row lg={12} m={5} >
          <Col>
            <Table responsive>
              <tbody>
                {list1Items.map((item) => (
                  <tr
                    style={{
                      borderColor:
                        theme === "light"
                          ? "rgb(235, 235, 235)"
                          : "rgba(37,64,110,1)",
                    }}
                  >
                    <td style={{ paddingBottom: "10px" }}>
                      <div
                        className="p-4 text-center"
                        style={{
                          backgroundColor: "rgba(22,22,63,1)",
                          color: "white",
                          fontWeight: "bold",
                          borderRadius: "10px",
                          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.6)",
                          fontSize:window.innerWidth <=500 ? "12px" : '16px'
                        }}
                      >
                        {item.id}
                      </div>
                    </td>
                    <td>
                      <div
                        className="d-flex flex-column"
                        style={{
                          color:
                            theme === "light"
                              ? "rgba(0,0,21,1)"
                              : "rgba(255,255,255,1)",
                          fontSize: window.innerWidth <= 500 ?"12px" :"19px",
                          fontFamily: "Poppins",
                          // backgroundColor:'red',
                        }}
                      >
                        {item.name}
                        <span
                          style={{
                            color: "rgba(48,197,244,1)",
                            fontSize: window.innerWidth <=500 ? "8px" : "13px",
                            fontFamily: "Poppins",
                          }}
                        >
                          {item.description}
                        </span>
                      </div>
                    </td>
                    {/* <td>{item.description}</td> */}
                    <td align="left">
                      {" "}
                      <Row lg={12}>
                        <div>
                          <ProgressBar
                            now={item.progress}
                            label={`${item.progress}%`}
                            variant={item.variant}
                            style={{
                              height: "46px",
                              width: "400px",
                              color: "pink",
                              borderRadius: "10px",
                              border: "1px solid #4AA4DC",
                              backgroundColor:
                                theme === "light" ? "white" : "#16163F",
                            }}
                            className="custom-progress-bar"
                          />
                        </div>
                      </Row>
                    </td>
                    <td align="right">
                      <Button
                        style={{
                          fontFamily: "Poppins",
                          backgroundColor: "#8063AC",
                          border: "none",
                          width: "84px",
                          height: "46px",
                          fontSize: window.innerWidth <=500 ? "14px" : "21px",
                        }}
                      >
                        Vote
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Lists;
