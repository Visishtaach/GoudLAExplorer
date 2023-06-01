import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../themecontext/ThemeContext";

const Section3 = () => {
  
  const { theme } = useContext(ThemeContext);
 
  const [defaultNode, setDefaultNode] = useState()
  const [listen_addr, setListen_addr] = useState()
  const [nw, setNw] = useState()
  const [channels, setChannels] = useState()
  const [tx, setTx] = useState()
  const [rpc, setRpc] = useState()
  const [p2p, setP2p] = useState()
  const [block, setBlock] = useState()
  const [appD, setAppD] = useState()


  const getNodeInfo = async() =>{
    const res = await fetch('http://3.95.171.204:1317//cosmos/base/tendermint/v1beta1/node_info')
    const nodeData = await res.json()
    //  console.log('Node info::', nodeData.default_node_info)
     setDefaultNode(nodeData.default_node_info.default_node_id)
     setListen_addr(nodeData.default_node_info.listen_addr)
     setNw(nodeData.default_node_info.network)
     setChannels(nodeData.default_node_info.channels)
     setTx(nodeData.default_node_info.other.tx_index)
     setP2p(nodeData.default_node_info.protocol_version.p2p)
     setBlock(nodeData.default_node_info.protocol_version.block)
     setRpc(nodeData.default_node_info.other.rpc_address)
     setAppD(nodeData.default_node_info.protocol_version.app)
    }

    useEffect(()=>{
getNodeInfo()
    },[])
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
        <div
          className={
            theme === "light" ? "scrollbar-list" : "scrollbar-list-black"
          }
        >
          <ul>
            <li
              style={{
                display: "flex",
                padding: "10px",
              }}
            >
              <div
                className="col-md-3"
                style={{ fontSize: "24px", fontFamily: "Poppins" }}
              ></div>
              <div className="col-md-9" style={textStyle}>
                <div
                  className="d-flex flex-direction-row"
                  style={{
                    borderBottom:
                      theme === "light"
                        ? "1px solid rgba(235,235,235,1)"
                        : "1px solid rgba(22,22,63,1)",
                  }}
                >
                  <div className="col-md-4">P2p</div>
                  <div>{p2p}</div>
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
                style={{ fontSize: "24px", fontFamily: "Poppins" }}
              ></div>
              <div className="col-md-9" style={textStyle}>
                <div
                  className="d-flex flex-direction-row"
                  style={{
                    borderBottom:
                      theme === "light"
                        ? "1px solid rgba(235,235,235,1)"
                        : "1px solid rgba(22,22,63,1)",
                  }}
                >
                  <div className="col-md-4">Block</div>
                  <div>{block}</div>
                </div>
              </div>
            </li>{" "}
            <li
              style={{
                display: "flex",
                padding: "10px",
              }}
            >
              <div
                className="col-md-3"
                style={{ fontSize: "24px", fontFamily: "Poppins" }}
              ></div>
              <div className="col-md-9" style={textStyle}>
                <div
                  className="d-flex flex-direction-row"
                  style={{
                    borderBottom:
                      theme === "light"
                        ? "1px solid rgba(235,235,235,1)"
                        : "1px solid rgba(22,22,63,1)",
                  }}
                >
                  <div className="col-md-4">App</div>
                  <div>{appD}</div>
                </div>
              </div>
            </li>
            <li
              style={{
                borderBottom:
                  theme === "light"
                    ? "1px solid rgba(235,235,235,1)"
                    : "1px solid rgba(22,22,63,1)",
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
                {defaultNode}
              </div>
            </li>{" "}
            <li
              style={{
                borderBottom:
                  theme === "light"
                    ? "1px solid rgba(235,235,235,1)"
                    : "1px solid rgba(22,22,63,1)",
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
                {listen_addr}
              </div>
            </li>{" "}
            <li
              style={{
                borderBottom:
                  theme === "light"
                    ? "1px solid rgba(235,235,235,1)"
                    : "1px solid rgba(22,22,63,1)",
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
                {nw}
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
                {channels}
              </div>
            </li>{" "}
            <li
              style={{
                borderBottom:
                  theme === "light"
                    ? "1px solid rgba(235,235,235,1)"
                    : "1px solid rgba(22,22,63,1)",
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
                <div>{tx}</div>
              </div>
            </li>{" "}
            <li
              style={{
                borderBottom:
                  theme === "light"
                    ? "1px solid rgba(235,235,235,1)"
                    : "1px solid rgba(22,22,63,1)",
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
                <div>{rpc}</div>
              </div>
            </li>{" "}
        
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Section3;
