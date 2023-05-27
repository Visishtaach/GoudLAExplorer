import React, { useContext } from "react";
import { ThemeContext } from "../../themecontext/ThemeContext";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
const assets = [
  {
    amount: "-",
    title: "Balances",
    icon: "B",
    color: "rgba(35,161,95,1)",
  },
  {
    amount: "-",
    title: "Staking",
    icon: "S",
    color: "rgba(124,121,236,1)",
  },
  {
    amount: "-",
    title: "Rewards",
    icon: "R",
    color: "rgba(74,164,220,1)",
  },
  {
    amount: "-",
    title: "Unbonding",
    icon: "U",
    color: "rgba(212,88,87,1)",
  },
];

const WalletAssets = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="mt-4 container"
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
          borderRadius: "4px",
          border:
            theme === "light"
              ? "1px solid rgba(235,235,235,1)"
              : "1px solid rgba(22,22,63,1)",
        }}
      >
        <div style={{ padding: "40px" }}>
          <p style={{ fontSize: "17px", fontFamily: "Poppins" }}>
            Wallet Assets
          </p>

          <Row xs={1} md={2} lg={4} className="g-4">
            {assets.map((variant, index) => (
              <Col key={index}>
                <Card
                  style={{
                    backgroundColor:
                      theme === "light"
                        ? "rgba(245,245,245,1)"
                        : "rgba(0,0,23,1)",
                    margin: "5px",
                  }}
                >
                  <Card.Body>
                    <Card.Text
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ flexDirection: "row" }}>
                        <div>{variant.amount}</div>
                        <div> {variant.title}</div>
                      </div>
                      <div
                        style={{
                          width: "44px",
                          height: "44px",
                          backgroundColor: variant.color,
                          color: "white",
                          fontWeight: "bold",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "10px",
                        }}
                      >
                        {variant.icon}
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <div
        style={{
          height: "93px",
          weight: "1400px",
          borderRadius: "4px",
          border:
            theme === "light"
              ? "1px solid rgba(235,235,235,1)"
              : "1px solid rgba(22,22,63,1)",
          marginTop: "20px",
          padding: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="outlined"
            style={{
              fontSize: "21px",
              fontFamily: "Poppins",
              color:
                theme === "light" ? "rgba(0,0,21,1)" : "rgba(255,255,255,1)",
            }}
          >
            {" "}
            + Connect Wallet
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WalletAssets;
