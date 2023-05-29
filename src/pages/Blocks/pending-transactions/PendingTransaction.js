import React, { useContext } from "react";
import Header from "../../../components/layout/Header";
import SearchField from "../../../components/layout/SearchField";
import { ThemeContext } from "../../../themecontext/ThemeContext";
import pool from "../../../assets/Blocks/pool.svg";
import leftarrow from "../../../assets/Blocks/left.svg";
import { pendingTransactionsData } from "../../../helpers/pendingTransactionsData";
import PendingTransactionWrapper from "./PendingTransactionWrapper";
import Footer from "../../../components/layout/Footer";

const PendingTransaction = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
    <div className="container-sm">
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
            color: theme === "light" ? "black" : "rgba(225,225,225,1)",
            fontSize: "24px",
            fontFamily: "Poppins",
          }}
        >
          <img src={pool} alt="icon"/> Pending Transactions Pool
        </h4>
      </div>
      <div
        style={{
          padding: "20px 20px",
          backgroundColor: theme === "light" ? "white" : "rgb(0, 0, 51)",
          borderRadius: "15px",
          color: theme === "light" ? "black" : "white",
          height: "auto",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          margin: "0px 25px",
        }}
      >
        <div className="d-flex flex-row justify-content-between pb-3">
          <div>
            <div
              style={{
                fontFamily: "Poppins",
                fontSize: "18px",
                color: "rgba(127,127,152,1)",
              }}
            >
              A total of{" "}
              <span
                style={{
                  fontSize: "18px",
                  fontFamily: "Avenir",
                  color: "rgba(127,127,152,1)",
                }}
              >
                139
              </span>{" "}
              pending txns found
            </div>
            {/* <div style={{fontFamily:'Poppins', fontSize:'14px', color:'rgba(127,127,152,1)'}}>(Showing the last <span style={{fontSize:'14px',fontFamily:'Avenir', color:'rgba(127,127,152,1)'}}> 500k </span> records)</div> */}
          </div>
          <div
            className="d-flex align-items-center justify-content-between"
            style={{ gap: "10px" }}
          >
            <div
              style={{
                color: "rgba(127,127,152,1)",
                fontFamily: "Poppins",
                fontSize: "18px",
                borderRadius: "5px",
                border: "1px solid rgba(22,22,63,1)",
                padding: "5px",
              }}
            >
              First
            </div>
            <img src={leftarrow}  alt="icon"/>
            <div
              style={{
                color: "rgba(127,127,152,1)",
                fontFamily: "Poppins",
                fontSize: "18px",
                borderRadius: "5px",
                border: "1px solid rgba(22,22,63,1)",
                padding: "5px",
              }}
            >
              Page 1 of 10000
            </div>
            <div
              style={{
                width: "30px",
                height: "31px",
                backgroundColor: "rgba(127,127,152,1)",
                borderRadius: "5px",
              }}
            ></div>
            <div
              style={{
                color: "rgba(0,0,51,1)",
                fontFamily: "Poppins",
                fontSize: "18px",
                borderRadius: "5px",
                border: "1px solid rgba(22,22,63,1)",
                padding: "3px 13px 4px",
                height: "30px",
                backgroundColor: "rgba(127,127,152,1)",
              }}
            >
              Last
            </div>
          </div>
        </div>

        <div>
          <PendingTransactionWrapper pendingTxns={pendingTransactionsData} />
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
};

export default PendingTransaction;
