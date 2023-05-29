import React,{useContext} from 'react';
import { ThemeContext } from '../../../themecontext/ThemeContext';
import ListGroup from 'react-bootstrap/ListGroup';

const Section2 = () => {
    const {theme} = useContext(ThemeContext)
  return (
    <div  style={{
        padding: "20px 20px",
        backgroundColor: theme === "light" ? "white" : "rgb(0, 0, 51)",
        borderRadius: "15px",
        color: theme === "light" ? "black" : "white",
        height: "auto",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        margin: "0px 25px",
      }}>
      <h4>Application Version</h4>
      <div>

      </div>
    </div>
  )
}

export default Section2
