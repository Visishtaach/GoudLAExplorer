import React, { useContext } from "react";
import wallet from "../../../assets/Blocks/wallet.svg";
import { ThemeContext } from "../../../themecontext/ThemeContext";
import Button from 'react-bootstrap/Button';

const Customize = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
    <div style={{height:'1500px'}}>
      <div >
        <p
          style={{
            fontSize: "20px",
            fontFamily: "Poppins",
            paddingTop: "10px",
          }}
        >
          My Validators
        </p>
        <p style={{ fontFamily: "Poppins", fontSize: "20px" }}>
          {" "}
          <span>
            <img src={wallet} alt="" />
          </span>{" "}
          Add validators you want to monitor
        </p>
      </div>
      <div className="table-responsive pt-5">
        <table
          className="table table-borderless"
        //   style={{
        //     borderBottom:
        //       theme === "light" ? "gray" : "1px solid rgba(22,22,63,1)",
        //   }}
        >
          <thead>
            <tr
              style={{
                color: theme === "light" ? "black" : "rgba(225,225,225,1)",
                textTransform: "uppercase",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <th
                style={{
                  textAlign: "left",
                  fontSize: "20px",
                  fontFamily: "Poppins",
                  fontWeight: "normal",
                  paddingBottom: "20px",
                  // color: "rgba(128,128,153,1)",
                }}
              >
                #
              </th>

              <th
                style={{
                  paddingRight: "5px",
                  fontSize: "20px",
                  fontFamily: "Poppins",
                  fontWeight: "normal",
                  paddingBottom: "20px",
                  // color: "rgba(128,128,153,1)",
                }}
              >
                Block Chain
              </th>
              <th
                style={{
                  fontSize: "20px",
                  fontFamily: "Poppins",
                  fontWeight: "normal",
                  paddingBottom: "20px",
                  // color: "rgba(128,128,153,1)",
                }}
              >
                validator
              </th>
              <th
                style={{
                  fontSize: "20px",
                  fontFamily: "Poppins",
                  fontWeight: "normal",
                  paddingBottom: "20px",
                  // color: "rgba(128,128,153,1)",
                }}
              >
                Signed Blocks
              </th>
              <th
                style={{
                  fontSize: "20px",
                  fontFamily: "Poppins",
                  fontWeight: "normal",
                  paddingBottom: "20px",
                  // color: "rgba(128,128,153,1)",
                }}
              >
                Last jailed time
              </th>
              <th
                style={{
                  fontSize: "20px",
                  fontFamily: "Poppins",
                  fontWeight: "normal",
                  paddingBottom: "20px",
                  // color: "rgba(128,128,153,1)",
                }}
              >
                Tomb stoned
              </th>
              <th
                style={{
                  fontSize: "20px",
                  fontFamily: "Poppins",
                  fontWeight: "normal",
                  paddingBottom: "20px",
                  // color: "rgba(128,128,153,1)",
                }}
              >
                missing block{" "}
              </th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>

      </div>
    <div className="p-4">
      <Button  variant="purple" style={{fontSize:'17px', fontFamily:'Poppins'}}>Add Validators</Button>
      </div>
      </div>
    </>
  );
};

export default Customize;
