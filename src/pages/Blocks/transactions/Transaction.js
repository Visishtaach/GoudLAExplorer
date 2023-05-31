import React, { useContext } from "react";
import Header from "../../../components/layout/Header";
import SearchField from "../../../components/layout/SearchField";
import Footer from "../../../components/layout/Footer";
import { ThemeContext } from "../../../themecontext/ThemeContext";
import TransactionsTable from "./TransactionsTable";
import { transactionsData } from "../../../helpers/transactionsData";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";

import leftarrow from "../../../assets/Blocks/left.svg";

const Transaction = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="container-sm ">
      <Header />
      <SearchField />
      <div
        style={{
          padding: "10px 30px",
          color: theme === "light" ? "black" : "white",
        }}
      >
        <h4
          style={{
            // color: theme === "light" ? "rgba(0.0.51,1)" : "rgba(255,255,255,1)",
            fontFamily: "Poppins",
            fontSize: "24px",
          }}
        >
          Transactions
        </h4>
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
              More than{" "}
              <span
                style={{
                  fontSize: "18px",
                  fontFamily: "Avenir",
                  color: "rgba(127,127,152,1)",
                }}
              >
                3,489,652,980
              </span>{" "}
              transactions found
            </div>
            <div
              style={{
                fontFamily: "Poppins",
                fontSize: "14px",
                color: "rgba(127,127,152,1)",
              }}
            >
              (Showing the last{" "}
              <span
                style={{
                  fontSize: "14px",
                  fontFamily: "Avenir",
                  color: "rgba(127,127,152,1)",
                }}
              >
                500k
              </span>{" "}
              records)
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
                  padding:'5px',
                  height: "38px",
                  backgroundColor: "rgba(127,127,152,1)",
                }}
              >
                Last
              </div>
            </div>
          </div>
        </div>

       
            <TransactionsTable activeNodes={transactionsData} />
          
      </div>

      <Footer />
    </div>
  );
};

export default Transaction;
