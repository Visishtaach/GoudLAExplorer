import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useContext } from "react";
import { ThemeContext } from "../../themecontext/ThemeContext";

function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <footer
      className="container mt-4"
      style={{
        padding: "20px",
        
      }}
    >
      <div style={{}}>
        <Row>
          <Col>
            <div
              style={{
                textAlign: "left",
                color:
                  theme === "light"
                    ? "rgba(127,127,152,1)"
                    : "rgba(127,127,152,1)",
                fontSize: "17px",
                fontFamily: "Poppins",
              }}
            >
              Powered by
              <span
                style={{
                  color:
                    theme === "light"
                      ? "rgba(0,0,51,1)"
                      : "rgba(255,255,255,1)",
                  fontSize: "17px",
                  fontFamily: "Poppins",
                }}
              >
                {" "}
                GoudLA
              </span>
            </div>
          </Col>
          <Col>
            <div
              style={{
                textAlign: "right",
                color:
                  theme === "light"
                    ? "rgba(127,127,152,1)"
                    : "rgba(127,127,152,1)",
                fontSize: "17px",
                fontFamily: "Poppins",
              }}
            >
              Partners{" "}
              <span
                style={{
                  color:
                    theme === "light"
                      ? "rgba(0,0,51,1)"
                      : "rgba(255,255,255,1)",
                  fontSize: "17px",
                  fontFamily: "Poppins",
                }}
              >
                Entitledarts
              </span>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
}

export default Footer;
