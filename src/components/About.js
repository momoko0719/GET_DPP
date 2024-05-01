import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="aboutpage">
      <div className="section1">
        <div className="left1">
          <div class="project-slogon">
            Your Personalized
            <br />
            Diabetes Management Companion
            <br />
          </div>
          <div class="project-description">
            Dr.Dos is an AI-driven health planner that aims to revolutionize
            diabetes education and prevention.
            <br />
            <br />
            Through an simple chat, you can receive <strong>personalized risk
            assessments</strong> and tailored suggestions for lifestyle adjustments. Our platform offers 
            bite-sized <strong>educational content</strong> to help you learn more about diabetes easily.
            Learn more and enchance your health journey with us.
            <br />
          </div>
          <div class="learn-more-button">
            <ScrollLink
              to="section2"
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
          <img class="laptop" src="imgs/home.png" alt="homepage illustration img" />
        </div>
      </div>
      <div className="section3">
        <div class="section3-title">Our Approach</div>
          <div className="section3-bottom">
            <div className="section3-content">
              <p className="solution-title">Diabetes Education Flash Cards</p>
              <div className="solution-context">
                <div className="solution-detail">
                  <img
                    class="checkIcon"
                    src="imgs/checkIcon.png"
                    alt="check Icon img"
                  />
                  <p className="solution-text">
                    Flippable and easy-to-understand flashcards covering topics
                    such as diabetes symptoms and signs, treatments, diet and
                    nutrition, exercise, and fitness, aiming to enhance your
                    understanding of diabetes management and prevention.
                  </p>
                </div>
                <div className="solution-detail">
                  <img
                    class="checkIcon"
                    src="imgs/checkIcon.png"
                    alt="check Icon img"
                  />
                  <p className="solution-text">
                    Increase awareness of the symptoms and risks, promoting early
                    detection and intervention.
                  </p>
                </div>
              </div>
            </div>
            <div className="section3-content">
            <p className="solution-title">
              Conversational Type 2 Risk Test Chatbot
            </p>
            <div className="solution-context">
              <div className="solution-detail">
                <img
                  class="checkIcon"
                  src="imgs/checkIcon.png"
                  alt="check Icon img"
                />
                <p className="solution-text">
                  Provide support and interactive responses with encouraging
                  tone
                </p>
              </div>
              <div className="solution-detail">
                <img
                  class="checkIcon"
                  src="imgs/checkIcon.png"
                  alt="check Icon img"
                />
                <p className="solution-text">Overcomes language barriers</p>
              </div>
              <div className="solution-detail">
                <img
                  class="checkIcon"
                  src="imgs/checkIcon.png"
                  alt="check Icon img"
                />
                <p className="solution-text">
                  Customizable risk assessment for diabetes
                </p>
              </div>
              <div className="solution-detail">
                <img
                  class="checkIcon"
                  src="imgs/checkIcon.png"
                  alt="check Icon img"
                />
                <p className="solution-text">
                  Culturally sensitive tailored exercise & dietary
                  recommendations
                </p>
              </div>
              <div className="solution-detail">
                <img
                  class="checkIcon"
                  src="imgs/checkIcon.png"
                  alt="check Icon img"
                />
                <p className="solution-text">Shareable Risk Test Report</p>
              </div>
            </div>
            </div>
          </div>

        <div className="section3-button">
        <RouterLink to="/Learn" class="button-box">
            <div className="button-left">
              <img
                class="button-icon"
                src="imgs/bulbIcon.png"
                alt="bulb icon img"
              />
              <div class="button-text">Learn about Diabetes</div>
            </div>
            <div className="button-right">
              <img
                class="right-icon"
                src="imgs/rightIcon.png"
                alt="right icon img"
              />
            </div>
          </RouterLink>
          
          <RouterLink to="/Chat" class="button-box">
            <div className="button-left">
              <img
                class="button-icon"
                src="imgs/messageIcon.png"
                alt="message icon img"
              />
              <div class="button-text">Chat and Check</div>
            </div>
            <div className="button-right">
              <img
                class="right-icon"
                src="imgs/rightIcon.png"
                alt="right icon img"
              />
            </div>
          </RouterLink>

        </div>
      </div>
    </div>

  );
};
  
export default Home;
