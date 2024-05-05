import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div class="welcomepage">
      <div className="welcome-main">
        <div class="wc-slogon">
          {t('welcome1')}
          <br />
          {t('welcome2')}
        </div>
        <div className="links-group">
          <RouterLink to="/Learn" class="button-links">
            <img class="welcome-icon" src="imgs/info.svg" alt="info icon"/>
            <p class="icon-text">{t('homeleftButton')}</p>
          </RouterLink>
          <RouterLink to="/Chat" class="button-links">
            <img class="welcome-icon" src="imgs/message.svg" alt="message icon"/>
            <p class="icon-text">{t('homerightButton')}</p>
          </RouterLink>
        </div>
      </div>

      <img class="right-img" src="imgs/right.svg" alt="illustration right" />
      <img class="left-img" src="imgs/left.svg" alt="illustration left" />
    </div>
  );
};

export default Home;
