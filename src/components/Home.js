import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Home = () => {
  return (
    <div class="welcomepage">
      <div className="welcome-main">
        <div class="wc-slogon">
          Learn more about
          <br />
          Diabetes and Your Risk.
        </div>
        <div className="links-group">
          <RouterLink to="/Chat" class="button-links">
            <img class="welcome-icon" src="imgs/message.svg" alt="message icon"/>
            <p class="icon-text">Check Your Risk Level</p>
          </RouterLink>

          <RouterLink to="/Learn" class="button-links">
            <img class="welcome-icon" src="imgs/info.svg" alt="info icon"/>
            <p class="icon-text">Learn about Diabetes</p>
          </RouterLink>
        </div>
      </div>

      <img class="right-img" src="imgs/right.svg" alt="illustration right" />
      <img class="left-img" src="imgs/left.svg" alt="illustration left" />
    </div>
  );
};

export default Home;
