import React, { useContext, useState ,} from "react";
import { ThemeContext } from "../../themecontext/ThemeContext";
import LineChart from "./LineChart";
import { NavLink, useNavigate } from "react-router-dom";
import websiteIcon from "../../assets/Website.svg";
import twitterIcon from "../../assets/Twitter.svg";
import discordIcon from "../../assets/disord.svg";
import dropDownIcon from "../../assets/downarrow.svg";
import TelegramIcon from "../../assets/telegram.svg";
import githubIcon from "../../assets/Github.svg";
import websiteBlue from "../../assets/Websiteblue.svg";
import styles from "./Graph.module.css";

const GraphSection = () => {
  const { theme } = useContext(ThemeContext);

  const navigate = useNavigate();
  const [website, setWebsite] = useState(true);
  const [telegram, setTelegram] = useState(false);
  const [twitter, setTwitter] = useState(false);
  const [discord, setDiscord] = useState(false);
  const [github, setGithub] = useState(false);
  const [block, setBlock] = useState(false);


  const activeStyle = {
    borderRadius: "10px",
    width: window.innerWidth <= 500 ? "100px" : "150px",
    height: window.innerWidth <= 500 ? "30px" : "39px",
    justifyContent: "center",
    textDecoration: "none",
    backgroundColor: "rgba(48,197,244,1)",
    gap: "10px",
    fontFamily: "Poppins",
    fontSize: window.innerWidth <= 500 ? "10px" : "14px",
    
  };

  const inactiveStyle = {
    border: "1px solid rgba(74,164,220,1)",
    borderRadius: "10px",
    width: window.innerWidth <= 500 ? "100px" : "150px",
    height: window.innerWidth <= 500 ? "30px" : "39px",
    justifyContent: "center",
    textDecoration: "none",
    gap: "10px",
    fontFamily: "Poppins",
    fontSize: window.innerWidth <= 500 ? "10px" : "14px",
  };

  const activeStyle2 = {
    borderRadius: "10px",
    width: window.innerWidth <= 500 ? "120px" : "175px",
    height: window.innerWidth <= 500 ? "29px" : "39px",
    justifyContent: "center",
    textDecoration: "none",
    backgroundColor: "rgba(48,197,244,1)",
     gap: "10px",
    fontFamily: "Poppins",
    fontSize: window.innerWidth <= 500 ? "10px" : "14px",
  };

  const inactiveStyle2 = {
    border: "1px solid rgba(74,164,220,1)",
    borderRadius: "10px",
    width: window.innerWidth <= 500 ? "120px" : "175px",
    height: window.innerWidth <= 500 ? "29px" : "39px",
    justifyContent: "center",
    textDecoration: "none",
     gap: "10px",
    fontFamily: "Poppins",
    fontSize: window.innerWidth <= 500 ? "10px" : "14px",
  };

  const websiteOpenHandler = () => {
    setBlock(false);
    setWebsite(true);
    setDiscord(false);
    setGithub(false);
    setTelegram(false);
    setTwitter(false);
    navigate("/");
  };

  const twitterOpenHandler = () => {
    setBlock(false);
    setDiscord(false);
    setGithub(false);
    setTelegram(false);
    setTwitter(true);
    setWebsite(false);
    window.open("https://twitter.com/i/flow/login", "_blank");
  };

  const telegramOpenHandler = () => {
    setBlock(false);
    setDiscord(false);
    setGithub(false);
    setTelegram(true);
    setTwitter(false);
    setWebsite(false);
    window.open("https://web.telegram.org/k/", "_blank");
  };
  const discordOpenHandler = () => {
    setBlock(false);
    setDiscord(true);
    setGithub(false);
    setTelegram(false);
    setTwitter(false);
    setWebsite(false);
    window.open("https://discord.com/", "_blank");
  };

  const githubOpenHandler = () => {
    setBlock(false);
    setDiscord(false);
    setGithub(true);
    setTelegram(false);
    setTwitter(false);
    setWebsite(false);
    window.open("https://github.com/", "_blank");
  };
  const blockOpenHandler = () => {
    setBlock(true);
    setDiscord(false);
    setGithub(false);
    setTelegram(false);
    setTwitter(false);
    setWebsite(false);
  };

  return (
    <>
      <div
        className={`mt-4 container ${styles.body}`}
        style={{
          padding: "40px",
          backgroundColor: theme === "light" ? "white" : "rgb(0, 0, 51)",
          borderRadius: "15px",
          color: theme === "light" ? "black" : "white",
          height: "auto",
          border:
            theme === "light"
              ? "1px solid rgba(235,235,235,1)"
              : "1px solid #000033",
        }}
      >
        <div
          style={{
            marginBottom: window.innerWidth < 850 ? "70px" : "30px",
          }}
        >
          <LineChart />
        </div>
        <div className="mt-4">
          <div className="mt-5">
            <p
              style={{
                color: "rgba(127,127,152,1)",
                fontSize: window.innerWidth > 600 ? "17px" : "12px",
                fontFamily: "Poppins",
              }}
            >
              GoudLA is a digital ledger technology that allows for secure and
              transparent transactions without the need for a central authority
              or intermediary. It consists of a decentralized GoudLA is a
              digital ledger technology that allows for secure and transparent
              transactions without the need for a central authority or
              intermediary. It consists of a decentralized Once a block is added
              to the chain, it cannot be altered without changing all subsequent
              blocks, making it tamper-evident and secure
            </p>
          </div>
        </div>

        <div className="container" style={{margin:0,padding:0}}>
          <div className="social-media-navBar">
            <div className="row  mt-3 d-flex flex-wrap ">
              <div className="col-auto mb-2 ">
                <NavLink
                  to="#"
                  className="d-flex align-items-center"
                  // className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                  style={website ? activeStyle : inactiveStyle}
                  onClick={websiteOpenHandler}
                >
                  <img
                    src={website ? websiteIcon : websiteBlue}
                    alt="website"
                    style={{
                      width: window.innerWidth <= 500 ? "12px" : "22.129px",
                      height: window.innerWidth <= 500 ? "12px" : "25.423px",
                    }}
                  />

                  <span style={{ color: website ? "white" : "gray", }}>
                    Website
                  </span>
                </NavLink>
              </div>
              <div className="col-auto mb-2">
                <NavLink
                  to="/"
                  className={`d-flex align-items-center p-2  ${styles.activeLink}`}
                  // className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                  // variant="outline-info"
                  style={twitter ? activeStyle : inactiveStyle}
                  onClick={twitterOpenHandler}
                >
                  <img
                    src={twitterIcon}
                    alt="twitter"
                    style={{
                      width: window.innerWidth <= 500 ? "12px" : "22.129px",
                      height: window.innerWidth <= 500 ? "12px" : "25.423px",
                      ...(twitter ? { filter: "brightness(0) invert(1)" } : {}),
                    }}
                  />

                  <span style={{ color: twitter ? "white" : "gray",willChange: "transform",
    transform: "translate3d(-0.003px, -0.0021px, 0px) scale3d(1.2, 1.2, 1.2) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
    transformStyle: "preserve-3d" }}>
                    Twitter
                  </span>
                </NavLink>
              </div>
              <div className="col-auto mb-2">
                <NavLink
                  className={`d-flex align-items-center p-2  ${styles.activeLink}`}
                  variant="outline-info"
                  style={github ? activeStyle : inactiveStyle}
                  onClick={githubOpenHandler}
                >
                  <img
                    src={githubIcon}
                    alt="gitHub"
                    style={{
                      width: window.innerWidth <= 500 ? "12px" : "22.129px",
                      height: window.innerWidth <= 500 ? "12px" : "25.423px",
                      ...(github ? { filter: "brightness(0) invert(1)" } : {}),
                    }}
                  />

                  <span style={{ color: github ? "white" : "gray" }}>
                    github
                  </span>
                </NavLink>
              </div>
              <div className="col-auto mb-2">
                <NavLink
                  className={`d-flex align-items-center p-2  ${styles.activeLink}`}
                  variant="outline-info"
                  style={discord ? activeStyle : inactiveStyle}
                  onClick={discordOpenHandler}
                >
                  <img
                    src={discordIcon}
                    alt="discord"
                    style={{
                      width: window.innerWidth <= 500 ? "12px" : "22.129px",
                      height: window.innerWidth <= 500 ? "12px" : "25.423px",
                      ...(discord ? { filter: "brightness(0) invert(1)" } : {}),
                    }}
                  />

                  <span style={{ color: discord ? "white" : "gray" }}>
                    {" "}
                    Discord
                  </span>
                </NavLink>
              </div>
              <div className="col-auto mb-2">
                <NavLink
                  className={`d-flex align-items-center p-2  ${styles.activeLink}`}
                  variant="outline-info"
                  style={telegram ? activeStyle : inactiveStyle}
                  onClick={telegramOpenHandler}
                >
                  <img
                    src={TelegramIcon}
                    // class="icon"
                    alt="telegram"
                    style={{
                      width: window.innerWidth <= 500 ? "12px" : "22.129px",
                      height: window.innerWidth <= 500 ? "12px" : "25.423px",
                      ...(telegram
                        ? { filter: "brightness(0) invert(1)" }
                        : {}),
                    }}
                  />

                  <span style={{ color: telegram ? "white" : "gray" }}>
                    Telegram
                  </span>
                </NavLink>
              </div>
              <div className="col-auto mb-2 ">
                <NavLink
                  className={`d-flex align-items-center p-2  ${styles.activeLink}`}
                  variant="outline-info"
                  style={block ? activeStyle2 : inactiveStyle2}
                  onClick={blockOpenHandler}
                >
                  <span style={{ color: block ? "white" : "gray" }}>
                    Block Explorer{" "}
                  </span>
                  <img
                    src={dropDownIcon}
                    alt="drop down icon"
                    style={{
                      width: window.innerWidth <= 500 ? "12px" : "22.129px",
                      height: window.innerWidth <= 500 ? "12px" : "25.423px",
                      ...(block ? { filter: "brightness(0) invert(1)" } : {}),
                    }}
                  />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GraphSection;
