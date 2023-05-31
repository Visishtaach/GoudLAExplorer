import React, { useContext } from "react";
import Header from "../../../components/layout/Header";
import SearchField from "../../../components/layout/SearchField";
import { ThemeContext } from "../../../themecontext/ThemeContext";

import ViewBlockWrapper from "./ViewBlockWrapper";
import { viewBlocksData } from "../../../helpers/viewBlocksData";
import Footer from "../../../components/layout/Footer";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";

const ViewBlocks = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="container-sm">
      <Header />
      <SearchField />
      <div
        className="d-flex align-items-center justify-content-between"
        style={{
          padding: "10px 30px",
          color: theme === "light" ? "black" : "white",
        }}
      >
        <h4
          style={{
            color: theme === "light" ? "black" : "rgba(225,225,225,1)",
            fontSize: "24px",
            fontFamily: "Poppins",
          }}
        >
          Block
        </h4>
        <div
          style={{
            padding: "5px 20px",
            backgroundColor: "rgba(127,127,152,1)",
            color: theme === "light" ? "white" : "rgba(0,0,51,1)",
            borderRadius: "5px",
            fontFamily: "Poppins",
            fontSize: "16px",
          }}
        >
          Fees Burnt{" "}
          <span style={{ fontFamily: "Avenir", fontSize: "16px" }}>
            173,524.12
          </span>{" "}
          Goud
        </div>
      </div>
      <div
         className="container-sm"
         style={{
           // padding: "20px 20px",
           backgroundColor: theme === "light" ? "white" : "rgb(0, 0, 51)",
           borderRadius: "15px",
           color: theme === "light" ? "black" : "white",
           height: "auto",
 
           margin: "0px 25px",
           border:
             theme === "light"
               ? "1px solid rgba(235,235,235,1)"
               : "1px solid #000033",
         }}
      >
        <div
          className="row"
          style={{
            padding: "20px 0px",
            backgroundColor: theme === "light" ? "white" : "rgb(0, 0, 51)",
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
            color: theme === "light" ? "black" : "white",

            borderBottom:
              theme === "light"
                ? "1px solid rgb(226, 226, 226)"
                : "1px solid rgba(22,22,63,1)",
          }}
        >
          <div className="col-lg-6">
            <div
              style={{
                fontFamily: "Poppins",
                fontSize: "18px",
                color: "rgba(127,127,152,1)",
              }}
            >
              Block #
              <span
                style={{
                  fontSize: "18px",
                  fontFamily: "Avenir",
                  color: "rgba(127,127,152,1)",
                }}
              >
                28486472
              </span>{" "}
              to #{" "}
              <span
                style={{
                  fontSize: "18px",
                  fontFamily: "Avenir",
                  color: "rgba(127,127,152,1)",
                }}
              >
                28486496
              </span>{" "}
              (Total of{" "}
              <span
                style={{
                  fontSize: "18px",
                  fontFamily: "Avenir",
                  color: "rgba(127,127,152,1)",
                }}
              >
                28,486,497
              </span>{" "}
              blocks)
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center justify-content-end">
            <div className="d-flex align-items-center" style={{ gap: "10px" }}>
              <div
                style={{
                  color: "rgba(127,127,152,1)",
                  fontFamily: "Poppins",
                  fontSize: "18px",
                  borderRadius: "5px",
                  border:
                    theme === "light"
                      ? "1px solid rgb(226, 226, 226)"
                      : "1px solid rgba(22,22,63,1)",
                  padding: "5px",
                }}
              >
                First
              </div>
              <div
                style={{
                  border:
                    theme === "light"
                      ? "1px solid rgb(226, 226, 226)"
                      : "1px solid rgba(22,22,63,1)",
                  width: "38px",
                  height: "38px",
                  textAlign: "center",
                  borderRadius: "5px",
                  padding: "5px",
                }}
              >
                <SlArrowLeft style={{ color: "rgba(127,127,152,1)" }} />
              </div>
              <div
                style={{
                  color: "rgba(127,127,152,1)",
                  fontFamily: "Poppins",
                  fontSize: "18px",
                  borderRadius: "5px",
                  border:
                    theme === "light"
                      ? "1px solid rgb(226, 226, 226)"
                      : "1px solid rgba(22,22,63,1)",
                  padding: "5px",
                }}
              >
                Page 1 of 10000
              </div>
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  backgroundColor: "rgba(127,127,152,1)",
                  borderRadius: "5px",
                  textAlign: "center",
                  padding: "5px",
                  border:
                    theme === "light"
                      ? "1px solid rgb(226, 226, 226)"
                      : "1px solid rgba(22,22,63,1)",
                }}
              >
                <SlArrowRight
                  style={{ color: theme === "light" ? "white" : "black" }}
                />
              </div>
              <div
                style={{
                  color: theme === "dark" ? "rgba(0,0,51,1)" : "white",
                  fontFamily: "Poppins",
                  fontSize: "18px",
                  borderRadius: "5px",
                  border:
                    theme === "light"
                      ? "1px solid rgb(226, 226, 226)"
                      : "1px solid rgba(22,22,63,1)",
                  // padding: "1px 13px 4px",
                  padding: "5px",
                  height: "38px",
                  backgroundColor: "rgba(127,127,152,1)",
                }}
              >
                Last
              </div>
            </div>
          </div>
        </div>

        <div>
          <ViewBlockWrapper blocks={viewBlocksData} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ViewBlocks;
