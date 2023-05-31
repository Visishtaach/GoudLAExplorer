import React,{useContext, useState} from 'react'
import Header from '../../../components/layout/Header'
import SearchField from '../../../components/layout/SearchField'
import { ThemeContext } from '../../../themecontext/ThemeContext';
import { NavLink } from 'react-router-dom';
import OverallTable from './OverallTable';
import Footer from '../../../components/layout/Footer';
import Blocks from './Blocks';
import Customize from './Customize';

const Overall = () => {
const {theme} = useContext(ThemeContext)
const [overall, setOverall] = useState(true)
const [customize, setCustomize] = useState(false);
const [blocks, setBlocks] = useState(false);

const style1 = {
  fontSize: "20px",
  textDecoration: "none",
  backgroundColor: "rgba(127,127,152,1)",
  width: "auto",
  height: "auto",
  color: theme === "light" ? "white" : "rgba(0,0,51,1)",
  borderRadius: "10px",
  padding: "10px 40px 10px",
  fontFamily: "Poppins",
};
const style2 = {
  fontSize: "20px",
  textDecoration: "none",
  width: "auto",
  height: "auto",
  color: theme === "light" ? "black" : "white",
  fontFamily: "Poppins",
  padding: "10px 40px 10px",
};

const handleButtonClick1 = () => {
//   setActiveNodes(true);
setBlocks(false);
setCustomize(false);
setOverall(true);
  
};
const handleButtonClick2 = () => {
  setBlocks(true);
  setCustomize(false);
  setOverall(false);
};
const handleButtonClick3 =() =>{
    setBlocks(false);
    setCustomize(true);
    setOverall(false);
}

  return (
    <div className="container-sm">
      <Header/>
      <SearchField />
      <div  style={{
        padding: "20px 20px",
        backgroundColor: theme === "light" ? "white" : "rgb(0, 0, 51)",
        borderRadius: "15px",
        color: theme === "light" ? "black" : "white",
        height: "auto",
    //    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        margin: "0px 25px",
        border: theme==="light" ? "1px solid rgba(235,235,235,1)" : "1px solid #000033",
      }}>
       <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {" "}
          <div
            style={{
              textAlign: "left",
              display: "inline-flex",
              borderRadius: "10px",
              border:
                theme === "light"
                  ? "1px solid  rgba(235,235,235,1)"
                  : "1px solid rgba(22,22,63,1)",

            }}
          >
            <NavLink
            to='/upTime'
              variant="secondary"
              onClick={handleButtonClick1}
              style={overall ? style1 : style2}
            >
              Overall
            </NavLink>

            <NavLink
            // to='/blocks'
              variant="light"
              onClick={handleButtonClick2}
              style={blocks ? style1 : style2}
            >
              Blocks
            </NavLink>
            
            <NavLink
              variant="light"
              onClick={handleButtonClick3}
              style={customize ? style1 : style2}
            >
              Customize
            </NavLink>
          </div>
          <div
            style={{
              fontFamily: "Avenir",
              color: "rgba(255,255,255,1)",
              fontSize: "24px",
            }}
          >
            {" "}
            150/150
          </div>
    </div>
    {overall && <OverallTable/>}
    {blocks && <Blocks/>}
    {customize && <Customize/>}
    </div>
    <Footer/>
    </div>
  )
}

export default Overall
