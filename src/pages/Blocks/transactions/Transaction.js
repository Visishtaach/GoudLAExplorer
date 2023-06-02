import React, { useContext, useState, useEffect } from "react";
import Header from "../../../components/layout/Header";
import SearchField from "../../../components/layout/SearchField";
import Footer from "../../../components/layout/Footer";
import { ThemeContext } from "../../../themecontext/ThemeContext";
// import TransactionsTable from "./TransactionsTable";
import { transactionsData } from "../../../helpers/transactionsData";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import way from "../../../assets/Blocks/greenArrow.svg";

import eye from "../../../assets/Blocks/Eye.svg";
import method from "../../../assets/Blocks/method.svg";

const Transaction = () => {
  const { theme } = useContext(ThemeContext);
  const [page, setPage] = useState(1)

  // const getTxn = async() =>{
  //   const res = await fetch('http://3.95.171.204:1317//cosmos/staking/v1beta1/pool')
  //   const data = await res.json()
  //   console.log(data)
  // }

  // useEffect(()=>{
  //     getTxn()
  // },[])


  const nextPageHandler = () =>{
    setPage(page+1)
    console.log('moving to ', page)
  }

  const prevPageHandler = () =>{
    if(page === 1){
      alert ('you r on starting page')
    }else{
      setPage(page - 1) 
      
    }
  }
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
                onClick={prevPageHandler}
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
                Page {page} of 10000
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
                onClick={nextPageHandler}
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

        {/* <TransactionsTable activeNodes={transactionsData} /> */}

        <div className="table-responsive pt-4">
      <table
        className="table table-border"
        style={{
          borderBottom: theme === "light" ? "" : "1px solid rgba(22,22,63,1)",
        }}
      >
        <thead>
          <tr
            style={{
              color: theme === "light" ? "black" : "rgba(225,225,225,1)",
              //   border:theme ==="light"? "gray" : "",
              textAlign: "left",
              alignItems: "center",
              //   justifyContent: "center",
            }}
          >
            <th
              style={{
                textAlign: "left",
                fontSize: "20px",
                fontFamily: "Poppins",
                fontWeight: "normal",
                paddingBottom: "20px",
                color: "rgba(128,128,153,1)",
              }}
            >
              Txn Hash
            </th>

            <th
              style={{
                paddingRight: "5px",
                fontSize: "20px",
                fontFamily: "Poppins",
                fontWeight: "normal",
                paddingBottom: "20px",
                color: "rgba(128,128,153,1)",
              }}
            >
              Method{" "}
              <img
                src={method}
                alt="icon"
                style={{ color: "rgba(128,128,153,1)" }}
              />
            </th>
            <th
              style={{
                fontSize: "20px",
                fontFamily: "Poppins",
                fontWeight: "normal",
                paddingBottom: "20px",
                color: "rgba(128,128,153,1)",
              }}
            >
              Block{" "}
            </th>
            <th
              style={{
                fontSize: "20px",
                fontFamily: "Poppins",
                fontWeight: "normal",
                paddingBottom: "20px",
                color: "rgba(128,128,153,1)",
              }}
            >
              Age
            </th>
            <th
              style={{
                fontSize: "20px",
                fontFamily: "Poppins",
                fontWeight: "normal",
                paddingBottom: "20px",
                color: "rgba(128,128,153,1)",
              }}
            >
              From
            </th>
            <th
              style={{
                fontSize: "20px",
                fontFamily: "Poppins",
                fontWeight: "normal",
                paddingBottom: "20px",
                color: "rgba(128,128,153,1)",
              }}
            >
              To
            </th>
            <th
              style={{
                fontSize: "20px",
                fontFamily: "Poppins",
                fontWeight: "normal",
                paddingBottom: "20px",
                color: "rgba(128,128,153,1)",
              }}
            >
              Value
            </th>
            <th
              style={{
                fontSize: "20px",
                fontFamily: "Poppins",
                fontWeight: "normal",
                paddingBottom: "20px",
                color: "rgba(128,128,153,1)",
              }}
            >
              Txn Fee
            </th>
          </tr>
        </thead>
        <tbody>
          {transactionsData.slice(page*10 - 10, page*10).map((node,index) => (
            <tr
              key={index}
              style={{
                color: theme === "light" ? "black" : "rgba(225,225,225,1)",
              }}
            >
              <td style={{ paddingTop: "25px" }}>
                <div
                  style={{
                    display: "flex",
                    gap: "25px",
                    color: "rgba(128,128,153,1)",
                  }}
                >
                  <p
                    style={{
                      display: "flex",
                      gap: "10px",
                      flexDirection: "row",
                    }}
                  >
                    {" "}
                    <span style={{ fontSize: "16px", fontFamily: "Poppins" }}>
                      {" "}
                      <img
                        src={eye}
                        alt="icon"
                        style={{
                          border:
                            theme === "light"
                              ? "1px solid rgba(235,235,235,1)"
                              : "1px solid rgba(22,22,63,1)",
                          borderRadius: "5px",

                          width: "30px",
                          height: "31px",
                          padding: "5px",
                        }}
                      />{" "}
                      {node.TxnHash}
                    </span>
                  </p>
                </div>
              </td>

              <td style={{ paddingRight: "5px", paddingTop: "25px" }}>
                <div
                  style={{
                    fontSize: "16px",
                    fontFamily: "Poppins",
                    color: theme === "dark" ? "rgba(0,0,51,1)" : "white",
                    backgroundColor: "rgba(128,128,153,1)",
                    textAlign: "center",
                    borderRadius: "5px",
                  }}
                >
                  {node.method}
                </div>
              </td>
              <td
                style={{
                  paddingTop: "25px",
                  fontSize: "16px",
                  fontFamily: "Poppins",
                  color: "rgba(128,128,153,1)",
                }}
              >
                {node.block}
              </td>
              <td
                style={{
                  fontSize: "16px",
                  fontFamily: "Avenir",
                  paddingTop: "25px",
                  color: "rgba(128,128,153,1)",
                }}
              >
                {node.age}
              </td>
              <td style={{ paddingTop: "25px" }}>
                <div
                  style={{
                    color: "rgba(128,128,153,1)",
                    fontSize: "16px",
                    fontFamily: "Poppins",
                  }}
                >
                  {node.from}
                </div>
              </td>
              <td style={{ paddingTop: "25px" }}>
                <div
                  style={{
                    color: "rgba(128,128,153,1)",
                    fontSize: "16px",
                    fontFamily: "Poppins",
                  }}
                >
                  <img src={way} alt="icon" /> {node.To}
                </div>
              </td>
              <td style={{ paddingTop: "25px" }}>
                <div
                  style={{
                    color: "rgba(128,128,153,1)",
                    fontSize: "16px",
                    fontFamily: "Poppins",
                  }}
                >
                  {node.VAlue}
                </div>
              </td>
              <td style={{ paddingTop: "25px" }}>
                <div
                  style={{
                    color: "rgba(128,128,153,1)",
                    fontSize: "16px",
                    fontFamily: "Poppins",
                  }}
                >
                  {node.txnFee}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      </div>

      <Footer />
    </div>
  );
};

export default Transaction;
