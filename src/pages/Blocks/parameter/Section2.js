import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../../themecontext/ThemeContext";

const Section2 = () => {
  const { theme } = useContext(ThemeContext);
  const [name, setName] = useState()
  const [version, setVersion] = useState()
  const [go_version, setGo_version] = useState()
  const[commit, setCommit] = useState()
  const [tags, setTags] = useState()

  const [buildDeps, setBuildDeps] = useState([]);

const getAppInfo = async()=>{
    const res = await fetch('http://3.95.171.204:1317//cosmos/base/tendermint/v1beta1/node_info')
    const appInfo = await res.json()
    console.log('app info', appInfo.application_version )
    
    setName(appInfo.application_version.app_name)
    setCommit(appInfo.application_version.git_commit)
    setGo_version(appInfo.application_version.go_version)
    setTags(appInfo.application_version.build_tags)
    setVersion(appInfo.application_version.version)

   setBuildDeps(appInfo.application_version.build_deps
    )
  
  }
  console.log(buildDeps)

  useEffect(()=>{
getAppInfo()
  },[])


  const maxItems = 25;

  // Get the subset of items to render
  const itemsToRender = buildDeps.slice(0, maxItems);
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
        ///  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        border:
          theme === "light"
            ? "1px solid rgba(235,235,235,1)"
            : "1px solid #000033",
        margin: "0px 25px",
      }}
    >
      <h4>Application Version</h4>
      <div>
        <div className="row">
          <div
            className={
              theme === "light" ? "scrollbar-list" : "scrollbar-list-black"
            }
          >
            <ul>
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
                  Name
                </div>
                <div className="col-md-9" style={textStyle}>
                  GoudLA
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
                  App name
                </div>
                <div className="col-md-9" style={textStyle}>
                  {name}
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
                  version
                </div>
                <div className="col-md-9" style={textStyle}>
                  {version}
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
                  git-COMMIT
                </div>
                <div className="col-md-9" style={textStyle}>
                  {commit}1525566
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
                  build_tags
                </div>
                <div className="col-md-9" style={textStyle}>
                  {tags}
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
                  go_version
                </div>
                <div className="col-md-9" style={textStyle}>
                  {go_version}
                </div>
              </li>
              {/* <li
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
                  build_tags
                </div>
                <div className="col-md-9" style={textStyle}>
                  netgo, ledger
                </div>
              </li>{" "} */}
            </ul>
            <div
              className={
                theme === "light" ? "scroll-list" : " scroll-list-black"
              }
            >
              <ul>
                <li style={{ display: "flex" }}>
                  <div
                    className="col-md-3"
                    style={{ fontSize: "24px", fontFamily: "Poppins" }}
                  >
                  </div>
                  <div
                    className="col-md-9 d-flex flex-direction-row"
                    style={{
                      borderBottom:
                        theme === "light"
                          ? "1px solid rgba(235,235,235,1)"
                          : "1px solid rgba(22,22,63,1)",
                      fontSize: "24px",
                      fontFamily: "Poppins",
                      padding: "10px",
                    }}
                  >
                    <div
                      className="col-md-4 "
                      style={{ fontSize: "22px", fontFamily: "Poppins" }}
                    >
                      Path
                    </div>
                    <div
                      className="col-md-3"
                      style={{ fontSize: "22px", fontFamily: "Poppins" }}
                    >
                      version
                    </div>
                    <div
                      className="col-md-3"
                      style={{ fontSize: "22px", fontFamily: "Poppins" }}
                    >
                      sum
                    </div>
                  </div>
                </li>
               {itemsToRender.map((dep, index) => ( <li style={{ display: "flex" }}>
                  <div
                    className="col-md-3"
                    style={{ fontSize: "24px", fontFamily: "Poppins" }}
                  >
                    
                  </div>
                  <div
                    className="col-md-9 d-flex flex-direction-row"
                    style={{
                      borderBottom:
                        theme === "light"
                          ? "1px solid rgba(235,235,235,1)"
                          : "1px solid rgba(22,22,63,1)",
                      fontSize: "24px",
                      fontFamily: "Poppins",
                      padding: "10px",
                    }}
                  >
                    <div
                      className="col-md-4 "
                      style={{ fontSize: "12px", fontFamily: "Poppins" }}
                    >
                      {dep.path}
                    </div>
                    <div
                      className="col-md-3"
                      style={{ fontSize: "12px", fontFamily: "Poppins" }}
                    >
                      {dep.version}
                    </div>
                    <div
                      className="col-md-3"
                      style={{ fontSize: "12px", fontFamily: "Poppins" }}
                    >
                      {dep.sum}
                    </div>
                  </div>
                </li>))}
               
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
