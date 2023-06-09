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
import Menu from "../../assets/Menu.svg";

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
    backgroundColor: theme === "light" ? "white" : "rgba(0,0,21)",
    // borderColor: theme === "light" ? "black" : "white",
    border:"none",
    //  backgroundImage: `url(${Menu})`
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
                //  aria-controls={`offcanvasNavbar-expand-${expand}`}
                style={toggleButtonStyle}
            
                id="hello"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28.372"
                  height="28.28"
                  viewBox="0 0 48.372 38.28"
                >
                  <g
                    id="Group_708"
                    data-name="Group 708"
                    transform="translate(-13747.506 683.587)"
                  >
                    <path
                      id="Path_259"
                      data-name="Path 259"
                      d="M185.574,118.994c-7.415-1-15.187-.713-22.673-.428a199.093,199.093,0,0,0-22.53,2.21c-2.21.357-1.711,4.207.57,3.993,7.273-.784,14.616-1.284,21.96-1.426,7.344-.214,14.688.5,22.032.428,2.638,0,3.422-4.349.641-4.777Z"
                      transform="translate(13608.558 -801.884)"
                      fill="#b233f7"
                    ></path>
                    <path
                      id="Path_260"
                      data-name="Path 260"
                      d="M185.574,256.224c-7.415-1-15.187-.713-22.673-.428a199.089,199.089,0,0,0-22.53,2.21c-2.21.357-1.711,4.207.57,3.993,7.273-.784,14.616-1.284,21.96-1.426s14.688.5,22.031.5c2.638-.072,3.422-4.492.642-4.849Z"
                      transform="translate(13608.558 -923.214)"
                      fill="#b233f7"
                    ></path>
                    <path
                      id="Path_261"
                      data-name="Path 261"
                      d="M185.574,393.454c-7.415-1-15.187-.713-22.673-.428a199.082,199.082,0,0,0-22.53,2.21c-2.21.357-1.711,4.207.57,3.993,7.273-.784,14.616-1.284,21.96-1.426s14.688.5,22.031.5c2.638-.143,3.422-4.492.642-4.849Z"
                      transform="translate(13608.558 -1044.545)"
                      fill="#b233f7"
                    ></path>
                  </g>
                </svg>
              </Navbar.Toggle>
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                // placement="end"
                style={{
                  backgroundColor:
                    theme === "light" ? "white" : "rgba(0,0,51,1)",
                }}
              >
                <Offcanvas.Header
                  closeButton
                  style={{
                    backgroundColor:
                      theme === "light" ? "white" : "rgba(0,0,51,1)",
                    color: theme === "light" ? "black" : "white",
                  }}
                >
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
