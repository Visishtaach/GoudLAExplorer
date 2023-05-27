import React,{useContext} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, Route,RouterProvider,Switch } from 'react-router-dom';
import Proposals from "./components/Governance/Proposals";

import './App.css';
import Home from "./components/layout/Home";
import { ThemeContext } from "./themecontext/ThemeContext";
import Boards from "./components/Governance/Boards";
import Nodes from "./components/Blocks/Nodes";

const router1 = createBrowserRouter([
  {path:'/',element:<Home />},
  {path:'/proposals', element:<Proposals/>},
  {path:'/boards',element: <Boards />},
  {path:'/nodes',element:<Nodes />}
])

function App() {

  const { theme, themeConfig } = useContext(ThemeContext);

  const bodyStyle = {
    backgroundColor: themeConfig[theme].backgroundColor,
    height: "100vh",
    overflow: "auto",
    
  };

  return (
    <div style={bodyStyle}>
       <RouterProvider router={router1}></RouterProvider>
    </div>
  );
}

export default App;
