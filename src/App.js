import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Switch,
} from "react-router-dom";
import Proposals from "./pages/Governance/Proposals/Proposal";

import "./App.css";
import Home from "./components/layout/Home";
import { ThemeContext } from "./themecontext/ThemeContext";
import Boards from "./pages/Governance/Boards/Boards";
import Nodes from "./components/Blocks/Nodes";
import Transaction from "./pages/Blocks/transactions/Transaction"
import PendingTransaction from "./pages/Blocks/pending-transactions/PendingTransaction";
import ViewBlocks from "./pages/Blocks/view-blocks/ViewBlocks";
import Parameter from "./pages/Blocks/parameter/Parameter";
import Overall from "./pages/Blocks/up-time/Overall";
import PassedDetails from "./pages/Governance/Proposals/PassedDetails";
import RejectedDetails from "./pages/Governance/Proposals/RejectedDetails";

const router1 = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/proposals", element: <Proposals /> },
  { path: "/boards", element: <Boards /> },
  { path: "/nodes", element: <Nodes /> },
  { path: "/transactions", element: <Transaction /> },
  { path: "/pending-transactions", element: <PendingTransaction /> },
  { path: "/view-blocks", element: <ViewBlocks /> },
  {path:"/parameters", element:<Parameter/>},
  {path:"/upTime", element:<Overall/>},
  {path:"/passed-details", element:<PassedDetails/>},
  {path:'/rejected-details', element:<RejectedDetails />}
]);

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
