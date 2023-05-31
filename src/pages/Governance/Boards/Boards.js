import React,{useContext} from "react";
import { ThemeContext } from "../../../themecontext/ThemeContext";
import Header from "../../../components/layout/Header";
import SearchField from "../../../components/layout/SearchField";
import BoardsWrapper from "./BoardsWrapper";
import { BoardsData } from '../../../helpers/BoardsData';
import Footer from "../../../components/layout/Footer";

// import path from '../../../assets/Blocks/Group 705.svg'

const Boards = () => {
    const {theme} = useContext(ThemeContext)
  return (
    <div className="container-sm">
      <Header />
      <SearchField />
      <div>
        <h4 style={{ fontSize: "20px", fontFamily: "Poppins", color:theme ==="light" ? "black":"rgba(225,225,225,1)" ,paddingLeft:'27px'}}>
          Boards (Block Validate)
        </h4>
      </div>
      <div
        style={{
          padding: "20px 10px",
          backgroundColor: theme === "light" ? "white" : "rgb(0, 0, 51)",
          borderRadius: "15px",
          color: theme === "light" ? "black" : "white",
          height: "auto",
         // boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          margin: "0px 25px",
          border: theme==="light" ? "1px solid rgba(235,235,235,1)" : "1px solid #000033",
        }}
      >
        <h4  style={{ fontSize: "20px", fontFamily: "Poppins", color:theme ==="light" ? "black":"rgba(225,225,225,1)" }}>Key words to filter Validators</h4>
        <BoardsWrapper BoardsData={BoardsData}/>
      </div>
    <Footer/>
     
    </div>
  );
};

export default Boards;
