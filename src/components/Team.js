import React from "react";
import { useTranslation } from 'react-i18next';

const Team = () => {
  const { t } = useTranslation();

  return (
    <div className="aboutpage">
      <div className="abt-section1">
        <div className="abt-content">
          <h1 className="abt-title">{t('aboutTitle')}</h1>
          <p className="abt-intro">{t('aboutIntro')}</p>
        </div>
        <div className="abt-icon">
          <img className="teamicon" src="imgs/teamicon.png" alt={t('teamIconAlt')} />
        </div>
      </div>
      <div className="abt-section2">
        <div className="aboutcard">
          <img src="/imgs/frank.png" alt="Photo of Frank" className="card-img" />
          <div className="card-name">Frank Martinez (Sponsor)
            <a href="https://www.lastmyle.co/">
              <img src="/imgs/lastmyle.png" alt="Last Myle LLC Icon" className="lastmyle-icon" />
            </a>
          </div>
        </div>
        <div className="aboutcard">
          <img src="/imgs/axel.jpg" alt="Photo of Axel" className="card-img" />
          <div className="card-name">Axel Zhao
            <a href="https://www.linkedin.com/in/hesong-zhao-41b460268/">
              <img src="/imgs/linkedin.png" alt="LinkedIn Icon" className="linkedin-icon" />
            </a>
          </div>
        </div>
        <div className="aboutcard">
          <img src="/imgs/ella.jpg" alt="Photo of Ella" className="card-img" />
          <div className="card-name">Ella Tao
            <a href="https://www.linkedin.com/in/yifei-tao-ella/">
              <img src="/imgs/linkedin.png" alt="LinkedIn Icon" className="linkedin-icon" />
            </a>
          </div>
        </div>
        <div className="aboutcard">
          <img src="/imgs/haonan.jpg" alt={t('haonanZheng')} className="card-img" />
          <div className="card-name">Haonan Zheng
            <a href="https://www.linkedin.com/in/haonan-zheng-3b3113230/">
              <img src="/imgs/linkedin.png" alt="LinkedIn Icon" className="linkedin-icon" />
            </a>
          </div>
        </div>
        <div className="aboutcard">
          <img src="/imgs/nora.jpg" alt="Photo of Nora" className="card-img" />
          <div className="card-name">Nora Li
            <a href="https://www.linkedin.com/in/xiaofu-li-9a0a1b230/">
              <img src="/imgs/linkedin.png" alt="LinkedIn Icon" className="linkedin-icon" />
            </a>
          </div>
        </div>
        <div className="aboutcard">
          <img src="/imgs/wendy.jpg" alt="Photo of Wendy" className="card-img" />
          <div className="card-name">
            Wendy Huang
            <a href="https://www.linkedin.com/in/shiwen-wendy-huang/">
              <img src="/imgs/linkedin.png" alt="LinkedIn Icon" className="linkedin-icon" />
            </a>
          </div>

        </div>
      </div>
      <div className="section2" id="section2">
        <div className="section2-top">
          <div className="section2-title">{t('motivationIntro')}</div>
          { /*<div className="section2-quote">{t('quote')}</div>*/}
        </div>
        <div className="section2-bottom">
          <div className="card mb-5">
            <div className="card-header">
              <p>{t('question1')}</p>
              <img className="cardicon" src="imgs/faqIcon.png" alt={t('faqIconAlt')} />
            </div>
            <div className="card-body">
              <p className="card-text">{t('answer1')}</p>
            </div>
          </div>

          <div className="card mb-5">
            <div className="card-header">
              <p>{t('question2')}</p>
              <img className="cardicon" src="imgs/chartIcon.png" alt={t('chartIconAlt')} />
            </div>
            <div className="card-body">
              <p className="card-text">{t('answer2')}</p>
            </div>
          </div>

          <div className="card mb-5">
            <div className="card-header">
              <p>{t('question3')}</p>
              <img className="cardicon" src="imgs/fireIcon.png" alt={t('fireIconAlt')} />
            </div>
            <div className="card-body">
              <p className="card-text">{t('answer3')}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="abt-section3">
        <h2 className="section3-title">{t('organization')}</h2>
        <p className="org-title">
          <a href="https://ischool.uw.edu/" className="org-link">
            {t('org1')}
          </a>
        </p>
        <p className="org-title">
          <a href="https://latinocenterforhealth.org/" className="org-link">
            {t('org2')}
          </a>
        </p>
        <p className="org-title">
          <a href="https://www.centroculturalmexicano.org/" className="org-link">
            {t('org3')}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Team;

