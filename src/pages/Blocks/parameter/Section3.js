import React, { useContext } from "react";
import { ThemeContext } from "../../../themecontext/ThemeContext";

const Section3 = () => {
  const { theme } = useContext(ThemeContext);
  const textStyle = {
    fontFamily: "Poppins",
    fontSize: "24px",
  };
  return (
    <div
      style={{
        padding: "20px 20px",
        backgroundColor: theme === "light" ? "white" : "rgb(0, 0, 51)",
        borderRadius: "15px",
        color: theme === "light" ? "black" : "white",
        height: "auto",
        //  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        border:
          theme === "light"
            ? "1px solid rgba(235,235,235,1)"
            : "1px solid #000033",
        margin: "0px 25px",
      }}
    >
      <h4>Node information</h4>
      <div className="row">
        <div className={theme === "light" ? "scrollbar-list" : "scrollbar-list-black"}>
          
        <ul
             
             >
               <li
                 style={{
                
                   display: "flex",
                   padding: "10px",
                 }}
               >
                 <div
                   className="col-md-3"
                   style={{ fontSize: "24px", fontFamily: "Poppins", }}
                 >
                   
                 </div>
                 <div className="col-md-9" style={textStyle}>
                   <div className="d-flex flex-direction-row" style={{   borderBottom:
                     theme === "light"
                       ? "1px solid rgba(235,235,235,1)"
                       : "1px solid #000033",}}>
                        <div className="col-md-4">P2p</div>
                        <div>8</div>
                   </div>
                 </div>
               </li>
               <li
                 style={{
                
                   display: "flex",
                   padding: "10px",
                 }}
               >
                 <div
                   className="col-md-3"
                   style={{ fontSize: "24px", fontFamily: "Poppins", }}
                 >
                   
                 </div>
                 <div className="col-md-9" style={textStyle}>
                   <div className="d-flex flex-direction-row" style={{   borderBottom:
                     theme === "light"
                       ? "1px solid rgba(235,235,235,1)"
                       : "1px solid #000033",}}>
                        <div className="col-md-4">Block</div>
                        <div>11</div>
                   </div>
                 </div>
               </li> <li
                 style={{
                
                   display: "flex",
                   padding: "10px",
                 }}
               >
                 <div
                   className="col-md-3"
                   style={{ fontSize: "24px", fontFamily: "Poppins", }}
                 >
                   
                 </div>
                 <div className="col-md-9" style={textStyle}>
                   <div className="d-flex flex-direction-row" style={{   borderBottom:
                     theme === "light"
                       ? "1px solid rgba(235,235,235,1)"
                       : "1px solid #000033",}}>
                        <div className="col-md-4">App</div>
                        <div>15</div>
                   </div>
                 </div>
               </li>
               <li
                 style={{
                   borderBottom:
                   theme === "light"
                     ? "1px solid rgba(235,235,235,1)"
                     : "1px solid #000033",
                   display: "flex",
                   padding: "10px",
                 }}
               >
                 <div
                   className="col-md-3"
                   style={{ fontSize: "24px", fontFamily: "Poppins" }}
                 >
                  default_node_id
                 </div>
                 <div className="col-md-9" style={textStyle}>
                 49802f6924730718069ad5aa18ffq55q1827699e
                 </div>
               </li>{" "}
               <li
                 style={{
                   borderBottom:
                   theme === "light"
                     ? "1px solid rgba(235,235,235,1)"
                     : "1px solid #000033",
                   display: "flex",
                   padding: "10px",
                 }}
               >
                 <div
                   className="col-md-3"
                   style={{ fontSize: "24px", fontFamily: "Poppins" }}
                 >
                   listen_addr
                 </div>
                 <div className="col-md-9" style={textStyle}>
                   144.126.222.208.31311
                 </div>
               </li>{" "}
               <li
                 style={{
                   borderBottom:
                   theme === "light"
                     ? "1px solid rgba(235,235,235,1)"
                     : "1px solid #000033",
                   display: "flex",
                   padding: "10px",
                 }}
               >
                 <div
                   className="col-md-3"
                   style={{ fontSize: "24px", fontFamily: "Poppins" }}
                 >
                   network
                 </div>
                 <div className="col-md-9" style={textStyle}>
                   osmosis-1
                 </div>
               </li>
               <li
                 style={{
                   borderBottom:
                   theme === "light"
                     ? "1px solid rgba(235,235,235,1)"
                     : "1px solid #000033",
                   display: "flex",
                   padding: "10px",
                 }}
               >
                 <div
                   className="col-md-3"
                   style={{ fontSize: "24px", fontFamily: "Poppins" }}
                 >
                   channels
                 </div>
                 <div className="col-md-9" style={textStyle}>
                   QCahillMwOGBhAA==
                 </div>
               </li>{" "}
               <li
                 style={{
                   borderBottom:
                   theme === "light"
                     ? "1px solid rgba(235,235,235,1)"
                     : "1px solid #000033",
                   display: "flex",
                   padding: "10px",
                 }}
               >
                 <div
                   className="col-md-3"
                   style={{ fontSize: "24px", fontFamily: "Poppins" }}
                 >
                   channels
                 </div>
                 <div className="col-md-9 d-flex" style={textStyle}>
                  
                    <div className="col-md-4"> Tx Index</div>
                    <div>on</div>
                 </div>
               </li>{" "}
               <li
                 style={{
                   borderBottom:
                   theme === "light"
                     ? "1px solid rgba(235,235,235,1)"
                     : "1px solid #000033",
                   display: "flex",
                   padding: "10px",
                 }}
               >
                 <div
                   className="col-md-3"
                   style={{ fontSize: "24px", fontFamily: "Poppins" }}
                 >
                  other
                 </div>
                 <div className="col-md-9 d-flex" style={textStyle}>
                  
                    <div className="col-md-4"> Rpc Address</div>
                    <div>tcp://0.0.0:26657</div>
                   
                 </div>
               </li>{" "}
             </ul>
        </div>
      </div>
    </div>
  );
};

export default Section3;
