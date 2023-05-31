import React, { useContext, useState } from "react";
import { ThemeContext } from "../../themecontext/ThemeContext";
import LineChart from "./LineChart";
import { NavLink } from "react-router-dom";
import websiteIcon from "../../assets/Website.svg";
import twitterIcon from "../../assets/Twitter.svg";
import discordIcon from "../../assets/disord.svg";
import dropDownIcon from "../../assets/downarrow.svg";
import TelegramIcon from "../../assets/telegram.svg";
import githubIcon from "../../assets/Github.svg";
import websiteBlue from "../../assets/Websiteblue.svg";

const GraphSection = () => {
  const { theme } = useContext(ThemeContext);
  const [website, setWebsite] = useState(true);
  const [telegram, setTelegram] = useState(false);
  const [twitter, setTwitter] = useState(false);
  const [discord, setDiscord] = useState(false);
  const [github, setGithub] = useState(false);
  const [block, setBlock] = useState(false);

  const activeStyle = {
    borderRadius: "10px",
    width: "150px",
    height: "39px",
    justifyContent: "center",
    textDecoration: "none",
    backgroundColor: "rgba(48,197,244,1)",
    gap: "10px",
  };

  const inactiveStyle = {
    border: "1px solid rgba(74,164,220,1)",
    borderRadius: "10px",
    width: "149px",
    height: "39px",
    justifyContent: "center",
    textDecoration: "none",
    gap: "10px",
  };

  const activeStyle2 = {
    borderRadius: "10px",
    width: "175px",
    height: "39px",
    justifyContent: "center",
    textDecoration: "none",
    backgroundColor: "rgba(48,197,244,1)",
    gap: "10px",
  };

  const inactiveStyle2 = {
    border: "1px solid rgba(74,164,220,1)",
    borderRadius: "10px",
    width: "175px",
    height: "39px",
    justifyContent: "center",
    textDecoration: "none",
    gap: "10px",
  };

  const websiteOpenHandler = () => {
    setBlock(false);
    setWebsite(true);
    setDiscord(false);
    setGithub(false);
    setTelegram(false);
    setTwitter(false);
  };

  const twitterOpenHandler = () => {
    setBlock(false);
    setDiscord(false);
    setGithub(false);
    setTelegram(false);
    setTwitter(true);
    setWebsite(false);
  };

  const telegramOpenHandler = () => {
    setBlock(false);
    setDiscord(false);
    setGithub(false);
    setTelegram(true);
    setTwitter(false);
    setWebsite(false);
  };
  const discordOpenHandler = () => {
    setBlock(false);
    setDiscord(true);
    setGithub(false);
    setTelegram(false);
    setTwitter(false);
    setWebsite(false);
  };

  const githubOpenHandler = () => {
    setBlock(false);
    setDiscord(false);
    setGithub(true);
    setTelegram(false);
    setTwitter(false);
    setWebsite(false);
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
        className="mt-4 container"
        style={{
          padding: "40px",
          backgroundColor: theme === "light" ? "white" : "rgb(0, 0, 51)",
          borderRadius: "15px",
          color: theme === "light" ? "black" : "white",
          height: "auto",
        //  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        border: theme==="light" ? "1px solid rgba(235,235,235,1)" : "1px solid #000033"
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
                fontSize: "17px",
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

        <div className="social-media-navBar">
          <div className="row  mt-3">
            <div className="col-auto mb-2">
              <NavLink
                to="#"
                className="d-flex align-items-center "
                // className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                style={website ? activeStyle : inactiveStyle}
                onClick={websiteOpenHandler}
              >
                <img
                  src={website ? websiteIcon : websiteBlue}
                  alt="website"
                  style={{
                    width: "22.129px",
                    height: "25.423px",
                  }}
                />

                <span style={{ color: website ? "white" : "gray" }}>
                  Website
                </span>
              </NavLink>
            </div>
            <div className="col-auto mb-2">
              <NavLink
                to="/"
                className="d-flex align-items-center p-2"
                // className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                // variant="outline-info"
                style={twitter ? activeStyle : inactiveStyle}
                onClick={twitterOpenHandler}
              >
                <img
                  src={twitterIcon}
                  alt="twitter"
                  style={{
                    width: "22.129px",
                    height: "25.423px",
                    ...(twitter ? { filter: "brightness(0) invert(1)" } : {}),
                  }}
                />

                <span style={{ color: twitter ? "white" : "gray" }}>
                  Twitter
                </span>
              </NavLink>
            </div>
            <div className="col-auto mb-2">
              <NavLink
                className="d-flex align-items-center p-2"
                variant="outline-info"
                style={github ? activeStyle : inactiveStyle}
                onClick={githubOpenHandler}
              >
                <img
                  src={githubIcon}
                  alt="gitHub"
                  style={{
                    width: "22.129px",
                    height: "25.423px",
                    ...(github ? { filter: "brightness(0) invert(1)" } : {}),
                  }}
                />

                <span style={{ color: github ? "white" : "gray" }}>github</span>
              </NavLink>
            </div>
            <div className="col-auto mb-2">
              <NavLink
                className="d-flex align-items-center p-2"
                variant="outline-info"
                style={discord ? activeStyle : inactiveStyle}
                onClick={discordOpenHandler}
              >
                <img
                  src={discordIcon}
                  alt="discord"
                  style={{
                    width: "22.129px",
                    height: "25.423px",
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
                className="d-flex align-items-center p-2"
                variant="outline-info"
                style={telegram ? activeStyle : inactiveStyle}
                onClick={telegramOpenHandler}
              >
                <img
                  src={TelegramIcon}
                  // class="icon"
                  alt="telegram"
                  style={{
                    width: "22.129px",
                    height: "25.423px",
                    ...(telegram ? { filter: "brightness(0) invert(1)" } : {}),
                  }}
                />

                <span style={{ color: telegram ? "white" : "gray" }}>
                  Telegram
                </span>
              </NavLink>
            </div>
            <div className="col-auto mb-2">
              <NavLink
                className="d-flex align-items-center p-2"
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
                    width: "22.129px",
                    height: "25.423px",
                    ...(block ? { filter: "brightness(0) invert(1)" } : {}),
                  }}
                />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GraphSection;
