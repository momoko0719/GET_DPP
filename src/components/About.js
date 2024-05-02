import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="aboutpage">
      <div className="section1">
        <div className="left1">
          <div className="project-slogon">
            Your Personalized
            <br />
            Diabetes Management Companion
            <br />
          </div>
          <div className="project-description">
            Dr. Dos is an AI-driven health planner dedicated to transforming diabetes education and prevention.
            <br />
            Unsure about what type 2 diabetes is? Curious about your risk level? We're here to guide you every step of the way.
          </div>
          <div className="learn-more-button">
            <ScrollLink
              to="section3"
              smooth={true}
              duration={500}
              offset={-90}
              className="learn-more-text"
            >
              Learn More
            </ScrollLink>
          </div>
        </div>
        <div className="right1">
          <img className="laptop" src="imgs/home.png" alt="homepage illustration img" />
        </div>
      </div>

      <div className="section3">
        <div className="section3-title">How It Works</div>
        <div className="section3-bottom">
          <div className="section3-content">
            <img class="learnIcon" src="imgs/number-1.png" alt="Learn Icon"/>
            <p className="solution-title">Learn at Your Own Pace</p>
            <div className="solution-detail">
              <p className="solution-text">
                Explore our educational flashcards to understand the basics of diabetes prevention.
                Accessible and easy to understand, these resources prepare you for a proactive approach to your health.
              </p>
            </div>
          </div>
          <div className="section3-content">
          <img class="learnIcon" src="imgs/number-2.png" alt="Learn Icon"/>
            <p className="solution-title">Complete Your Assessment</p>
            <div className="solution-detail">
              <p className="solution-text">
                Take a 5-minutes assessment through our chatbot at your convenience —no appointments necessary.
                Simply answer a few questions about your health to help us evaluate your diabetes risk.
              </p>
            </div>
          </div>
          <div className="section3-content">
          <img class="learnIcon" src="imgs/number-3.png" alt="Learn Icon"/>
            <p className="solution-title">Receive Instant Analysis</p>
            <div className="solution-detail">
              <p className="solution-text">
                Our AI-driven chatbot analyzes your responses immediately, identifying potential risk factors. You'll get a
                detailed summary of your risk level and the factors contributing to it, designed to be shared with your doctor.
              </p>
            </div>
          </div>
          <div className="section3-content">
          <img class="learnIcon" src="imgs/number-4.png" alt="Learn Icon"/>
            <p className="solution-title">Consult Your Doctor</p>
            <div className="solution-detail">
              <p className="solution-text">
                Armed with your risk assessment results, schedule a visit with your healthcare provider to discuss
                further screening and potential treatment options. Dr. Dos acts as a bridge, making your preventive
                care journey more informed and efficient.
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
              <div className="button-text">Learn about Diabetes</div>
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
              <div className="button-text">Chat and Check</div>
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
