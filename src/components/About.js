import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from 'react-i18next'; 

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="aboutpage">
      <div className="section1">
        <div className="left1">
          <div className="project-slogon">
          {t('GuideTitle1')}
            <br />
            {t('GuideTitle2')}
            <br />
          </div>
          <div className="project-description">
            {t('GuideIntro1')}
            <br />
            {t('GuideIntro2')}
          </div>
          <div className="learn-more-button">
            <ScrollLink
              to="section3"
              smooth={true}
              duration={500}
              offset={-90}
              className="learn-more-text"
            >
              {t('Learnmore')}
            </ScrollLink>
          </div>
        </div>
        <div className="right1">
          <img
            className="laptop"
            src="imgs/home.png"
            alt="homepage illustration img"
          />
        </div>
      </div>

      <div className="section3">
        <div className="section3-title">{t('Howitworks')}</div>
        <div className="section3-bottom">
          <div className="section3-content">
            <div className="section3-content-title">
              <img class="learnIcon" src="imgs/number-1.png" alt="Learn Icon" />
              <p className="solution-title">{t('Step1Title')}</p>
            </div>
            <div className="solution-detail">
              <p className="solution-text">
                {t('Step1')}
              </p>
            </div>
          </div>

          <div className="section3-content">
            <div className="section3-content-title">
              <img class="learnIcon" src="imgs/number-2.png" alt="Learn Icon" />
              <p className="solution-title">{t('Step2Title')}</p>
            </div>
            <div className="solution-detail">
              <p className="solution-text">
                {t('Step2')}
              </p>
            </div>
          </div>
          <div className="section3-content">
            <div className="section3-content-title">
              <img class="learnIcon" src="imgs/number-3.png" alt="Learn Icon" />
              <p className="solution-title">{t('Step3Title')}</p>
            </div>

            <div className="solution-detail">
              <p className="solution-text">
               {t('Step3')}
              </p>
            </div>
          </div>
          <div className="section3-content">
            <div className="section3-content-title">
              <img class="learnIcon" src="imgs/number-4.png" alt="Learn Icon" />
              <p className="solution-title">{t('Step4Title')}</p>
            </div>

            <div className="solution-detail">
              <p className="solution-text">
               {t('Step4')}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section3-button">
        <RouterLink to="/Learn" className="button-box">
          <div className="button-left">
            <img
              className="button-icon"
              src="imgs/bulbIcon.png"
              alt="bulb icon img"
            />
            <div className="button-text">{t('box1')}</div>
          </div>
          <div className="button-right">
            <img
              className="right-icon"
              src="imgs/rightIcon.png"
              alt="right icon img"
            />
          </div>
        </RouterLink>
        <RouterLink to="/Chat" className="button-box">
          <div className="button-left">
            <img
              className="button-icon"
              src="imgs/messageIcon.png"
              alt="message icon img"
            />
            <div className="button-text">{t('box2')}</div>
          </div>
          <div className="button-right">
            <img
              className="right-icon"
              src="imgs/rightIcon.png"
              alt="right icon img"
            />
          </div>
        </RouterLink>
      </div>
    </div>
  );
};

export default Home;
