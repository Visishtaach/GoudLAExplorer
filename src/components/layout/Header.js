import React, { useContext } from "react";
import { ThemeContext } from "../../themecontext/ThemeContext";
// import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.png";
import group from "../../assets/Icons/group.svg";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { FiSun, FiMoon } from "react-icons/fi";
import Offcanvas from "react-bootstrap/Offcanvas";
import arrow2 from '../../assets/arrow2.svg'
import arrow from '../../assets/Dropdowngrey.svg'



const Header = () => {
  const { theme, toggleTheme, themeConfig } = useContext(ThemeContext);


  const navbarStyle = {
    backgroundColor: themeConfig[theme].backgroundColor,
    

  };
  const toggleButtonStyle = {
    color: theme === "light" ? "black" : "white",
    backgroundColor: theme === "light" ? "white" : "#E5E4E2",
    borderColor: theme === "light" ? "black" : "white",
  };

  const textStyle = { 
    color: theme === "light" ? "rgba(74,164,220,1)" : "rgba(225,225,225,1)",
    padding: "36px 20px 20px",
    fontSize: "17px",
  };

  const titleClassName = theme === "dark" ? "darkTitle" : "lightTitle";

  const iconButtonClassName =
    theme === "dark" && window.innerWidth < 1000
      ? "icon-button-dark"
      : "icon-button-light";

  return (
    <>
      <Container>
      {/* <div> */}
        {" "}
        {["md"].map((expand) => (
          <Navbar key={expand} style={navbarStyle} expand="lg">
            <Container fluid>
              <Navbar.Brand href="#">
                <img
                  src={logo}
                  alt="logo"
                  style={{ width: "207.597px", height: "87.748px" }}
                />
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
                style={toggleButtonStyle}
                
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    GoudLA
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="/" style={textStyle}>
                      Home
                    </Nav.Link>

                    <NavDropdown
                      //  title="Block Chain"
                      title={
                        <span style={{
                          display:'flex',
                          gap:'15px',
                          fontSize:'17px'
                        }}>
                             BlockChain
                           <div>
                           <img src={theme === 'light' ? arrow : arrow2} style={{width:'24px', height:'24px', paddingRight:'10px'}} alt="icon"/>
                           </div>
                        </span>
                        
                    }
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                      className={titleClassName}
                      style={{padding:'30px 10px 20px'}}
                    >
                      <NavDropdown.Item href="transactions">
                        Transaction
                      </NavDropdown.Item>
                      <NavDropdown.Item href="pending-transactions">
                        Pending Transactions
                      </NavDropdown.Item>
                      <NavDropdown.Item href="view-blocks">
                        View Blocks
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="nodes">
                        Nodes (Staking)
                      </NavDropdown.Item>
                      <NavDropdown.Item href="upTIme">
                        upTime
                      </NavDropdown.Item>
                      <NavDropdown.Item href="parameters">
                        Parameters
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                      // title="Governance"
                      activeClassName="activeDropdownItem"
                      title={
                        <span style={{
                          display:'flex',
                          gap:'15px',
                          fontSize:'17px'
                        }}>
                             Governance
                           <div>
                           <img src={theme === 'light' ? arrow : arrow2} style={{width:'24px', height:'24px', paddingRight:'10px'}} alt="icon"/>
                           </div>
                        </span>
                        
                    }
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                      className={titleClassName}
                      style={{padding:'30px 1px 20px'}}
                    >
                      <NavDropdown.Item href="boards"
                      
                      >
                        Boards
                      </NavDropdown.Item>
                      <NavDropdown.Item href="proposals"
                      // as={NavLink}
                      // to="proposals"
                      
                      >
                        Proposals
                      </NavDropdown.Item>
                    </NavDropdown>
                  
                    <Button
                      variant="outlined"
                      onClick={toggleTheme}
                      style={{
                        border: "none",
                        // backgroundColor: theme === "light" ? "white" : "black",
                        color: theme === "light" ? "black" : "#888888",
                        width: "24.962px",
                        height: "24.958px",
                        fontSize: "24px",
                        marginTop: "-10px",
                        marginBottom: "25px",
                        padding: "38px 40px 20px 10px" ,
                      }}
                      className={iconButtonClassName}
                    >
                      {theme === "light" ? <FiSun /> : <FiMoon />}
                    </Button>
                  </Nav>

                  <Button
                    style={{
                      marginTop:'23px',
                      backgroundColor: "rgba(139,86,163,1)",
                      border: "none",
                      width: "135px",
                      height: "42px",
                      fontFamily: "poppins",
                      fontSize: "14px",
                      // marginTop: "3px",
                      // padding:'20px'
                    }}
                  >
                    Connect Wallet
                  </Button>
                  <div style={{padding:'20px 20px'}}>
                  <img
                    src={group}
                    style={{
                      width: "54.707px",
                      height: "55.231px",
                      // marginLeft: "30px",
                      // padding:'10px'
                    }}
                    alt="group"
                  />
                  </div>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </Container>
      {/* </div> */}
    </>
  );
};

export default Header;
