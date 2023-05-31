import React, { useContext } from "react";
import { ThemeContext } from "../../themecontext/ThemeContext";
import { useLocation } from "react-router-dom";
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
import arrow2 from "../../assets/arrow2.svg";
import arrow from "../../assets/Dropdowngrey.svg";

const Header = () => {
  const { theme, toggleTheme, themeConfig } = useContext(ThemeContext);

  const location = useLocation();

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  const isActiveLink2 = (paths) => {
    return paths.some((path) => location.pathname === path);
  };

  const isBlockchainActive = isActiveLink2([
    "/transactions",
    "/pending-transactions",
    "/view-blocks",
    "/parameters",
    "/upTime",
    "/nodes",
  ]);

  const isActiveLink3 = (paths) => {
    return paths.some((path) => location.pathname === path);
  };

  const isBlockchainActive3 = isActiveLink3([
    "/boards",
    "/proposals",
    "/passed-details",
    "/rejected-details",
  ]);

  const navbarStyle = {
    backgroundColor: themeConfig[theme].backgroundColor,
  };
  const toggleButtonStyle = {
    color: theme === "light" ? "black" : "white",
    backgroundColor: theme === "light" ? "white" : "#E5E4E2",
    borderColor: theme === "light" ? "black" : "white",
  };

  const homeTitle = isActiveLink("/") && theme === "dark" ? "white" : "#595968";

  const titleClassName = theme === "dark" ? "darkTitle" : "lightTitle";

  const iconButtonClassName =
    theme === "dark" && window.innerWidth < 1000
      ? "icon-button-dark"
      : "icon-button-light";

  const titleColor =
    isBlockchainActive && theme === "dark" ? "white" : "#595968";
  const titleColor2 =
    isBlockchainActive3 && theme === "dark" ? "white" : "#595968";

  return (
    <>
      <Container>
        {/* <div> */}{" "}
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
                    <Nav.Link
                      href="/"
                      style={{
                        color:
                          (isActiveLink("/") && theme === "light"
                            ? "black"
                            : homeTitle) ||
                          (isActiveLink("/") && theme === "dark"
                            ? "white"
                            : homeTitle),
                        padding: "38px 20px 20px",
                        fontSize: "17px",
                        fontFamily: "Poppins",
                      }}
                    >
                      Home
                    </Nav.Link>

                    <NavDropdown
                      //  title="Block Chain"
                      title={
                        <span
                          style={{
                            display: "flex",
                            gap: "15px",
                            fontSize: "17px",
                            fontFamily: "Poppins",
                            color:
                              (isBlockchainActive && theme === "light"
                                ? "black"
                                : titleColor) ||
                              (isBlockchainActive && theme === "dark"
                                ? "white"
                                : titleColor),
                          }}
                        >
                          BlockChain
                          <div>
                            <img
                              src={theme === "light" ? arrow : arrow2}
                              style={{
                                width: "24px",
                                height: "24px",
                                paddingRight: "10px",
                              }}
                              alt="icon"
                            />
                          </div>
                        </span>
                      }
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                      className={titleClassName}
                      style={{
                        padding: "30px 10px 20px",
                        // color: ((isActiveLink('/transactions') || isActiveLink('/pending-transactions') || isActiveLink('/view-blocks') ||isActiveLink('/parameters')||isActiveLink('/upTime') || isActiveLink('/nodes') && theme == 'light' ? 'black' : '#595968') || (isActiveLink('/transactions') || isActiveLink('/pending-transactions') || isActiveLink('/view-blocks') ||isActiveLink('/parameters')||isActiveLink('/upTime') || isActiveLink('/nodes') && theme == 'dark' ? 'white' : '#595968'))
                      }}
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
                      <NavDropdown.Item href="upTime">UpTime</NavDropdown.Item>
                      <NavDropdown.Item href="parameters">
                        Parameters
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                      title={
                        <span
                          style={{
                            display: "flex",
                            gap: "15px",
                            fontSize: "17px",
                            fontFamily: "Poppins",
                            color:
                              (isBlockchainActive3 && theme === "light"
                                ? "black"
                                : titleColor2) ||
                              (isBlockchainActive3 && theme === "dark"
                                ? "white"
                                : titleColor2),
                          }}
                        >
                          Governance
                          <div>
                            <img
                              src={theme === "light" ? arrow : arrow2}
                              style={{
                                width: "24px",
                                height: "24px",
                                paddingRight: "10px",
                              }}
                              alt="icon"
                            />
                          </div>
                        </span>
                      }
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                      className={titleClassName}
                      style={{ padding: "30px 1px 20px" }}
                    >
                      <NavDropdown.Item href="boards">Boards</NavDropdown.Item>
                      <NavDropdown.Item
                        href="proposals"
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
                        color: theme === "light" ? "#595968" : "#888888",
                        width: "24.962px",
                        height: "24.958px",
                        fontSize: "24px",
                        marginTop: "-10px",
                        marginBottom: "25px",
                        padding: "38px 40px 20px 10px",
                      }}
                      className={iconButtonClassName}
                    >
                      {theme === "light" ? <FiSun /> : <FiMoon />}
                    </Button>
                  </Nav>

                  <Button
                    style={{
                      marginTop: "23px",
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
                  <div style={{ padding: "20px 20px" }}>
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
