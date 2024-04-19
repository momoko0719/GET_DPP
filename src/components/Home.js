import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";


const Home = () => {
  return (
    <div class="homepage">
      <div className="section1">
        <div className="left1">
          <div class="project-slogon">
            GET DPP,
            <br />
            Your Personalized
            <br />
            Diabetes Management Companion
            <br />
          </div>
          <div class="project-description">
            Get DPP is an AI-driven health planner that aims to revolutionize
            diabetes
            <br />
            education and prevention.
            <br />
            <br />
            Through an simple chat, you can receive personalized risk
            assessments and
            <br />
            tailored suggestions for lifestyle adjustments. Our platform offers
            bite-sized
            <br />
            educational content to help you learn more about diabetes easily.
            Take control
            <br />
            of your health journey with us.
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
      <div className="section2" id="section2">
        <div class="section2-top">
          <div class="section2-title">
            Exploring the Critical Impact
            <br />
            of Type 2 Diabetes on the Latino Community
            <br />
          </div>
          <div class="section2-quote">
            “Maybe add a quotation from Dr.morales here — Dr. Morales”
          </div>
        </div>
        <div className="section2-bottom">
          <div class="card mb-5">
            <div class="card-header">
              <p>
                What is
                <br />
                Type 2 Diabetes?
              </p>
              <img class="cardicon" src="imgs/faqIcon.png" alt="faq icon img" />
            </div>
            <div class="card-body">
              <p class="card-text">
                Diabetes is a major health issue in the U.S. Approximately 11%
                of the population in the U.S. are diagnosed with diabetes, and
                among all diabetic patients, 90.9% of them got type 2 diabetes.
              </p>

              <p class="card-text">
                While both types of diabetes have inherited or genetic aspects,
                the insulin resistance that causes type 2 is related to having
                too much body fat. Weight, and blood sugar are the main
                determinant factors in evaluating risk.
              </p>
            </div>
          </div>

          <div class="card mb-5">
            <div class="card-header">
              <p>
                Effects of Type 2 Diabetes
                <br />
                on Latino Communities
              </p>
              <img
                class="cardicon"
                src="imgs/chartIcon.png"
                alt="chart icon img"
              />
            </div>
            <div class="card-body">
              <p class="card-text">
                Hispanic or Latino people are more likely to have type 2
                diabetes (12%) than non-Hispanic White people (7%). Over half of
                Hispanic adults are predicted to develop diabetes in their
                lifetime.
              </p>

              <p class="card-text">Genetics, diet, and culture play a role.</p>
            </div>
          </div>

          <div class="card mb-5">
            <div class="card-header">
              <p>
                Prevention Difficulties
                <br />
                for Latino Community
              </p>
              <img
                class="cardicon"
                src="imgs/fireIcon.png"
                alt="fire icon img"
              />
            </div>
            <div class="card-body">
              <p class="card-text">
                <span>&#183;</span> Language and cultural barriers
                <br />
                <br />
                <span>&#183;</span> Financial burdens
                <br />
                <br />
                <span>&#183;</span> Emotional challenges with diabetes
                prevention, need relax
                <br />
                <br />
                <span>&#183;</span> Lifestyle is hard to change
                <br />
                <br />
                <span>&#183;</span> Lower diabetes awareness, not connected to
                the local health sector
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section3">
        <div class="section3-title">Our Solution</div>
        <div className="section3-bottom">
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
        </div>
        <div className="section3-button">
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

        </div>
      </div>
    </div>
  );
};

export default Home;
