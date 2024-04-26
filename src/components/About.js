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
            Through an simple chat, you can receive personalized risk
            assessments and tailored suggestions for lifestyle adjustments. Our platform offers
            bite-sized educational content to help you learn more about diabetes easily.
            Take controlof your health journey with us.
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
      <div className="abt-section1">
        <div className="abt-content">
          <h1 className="abt-title">Meet the people behind Dr. II</h1>
          <p className="abt-intro">
            We are a diverse group of five undergraduate students from the University of Washington
            Information School, specializing in various fields and hailing from unique backgrounds.
            Under the guidance of Frank Martinez and Dr. Leo Morales, and in collaboration with the
            UW Latino Center for Health and Centro Cultural Mexicano, we are dedicated to addressing
            the global challenge of Type 2 diabetes. Our focus is on researching and developing effective
            education and prevention strategies, particularly for communities with limited access to healthcare.
            Join us in our commitment to make a significant impact on public health.
          </p>
        </div>
        <div className="abt-icon">
          <img className="teamicon" src="imgs/teamicon.png" alt="Team Icon" />
        </div>
      </div>
      <div className="abt-section2">
        <div className="aboutcard">
          <img src="/imgs/axel.jpg" alt="Axel Zhao" className="card-img" />
          <div className="card-name">Axel Zhao</div>
        </div>
        <div className="aboutcard">
          <img src="/imgs/ella.jpg" alt="Ella Tao" className="card-img" />
          <div className="card-name">Ella Tao</div>
        </div>
        <div className="aboutcard">
          <img src="/imgs/frank.png" alt="Frank Martinez" className="card-img" />
          <div className="card-name">Frank Martinez</div>
        </div>
        <div className="aboutcard">
          <img src="/imgs/haonan.jpg" alt="Haonan Zheng" className="card-img" />
          <div className="card-name">Haonan Zheng</div>
        </div>
        <div className="aboutcard">
          <img src="/imgs/nora.jpg" alt="Nora Li" className="card-img" />
          <div className="card-name">Nora Li</div>
        </div>
        <div className="aboutcard">
          <img src="/imgs/wendy.jpg" alt="Wendy Huang" className="card-img" />
          <div className="card-name">Wendy Huang</div>
        </div>
      </div>
      <div className="abt-section3">
        <h2 className="section3-title">Affinity Organizations</h2>
        <p className="org-title">
          <RouterLink to="https://ischool.uw.edu/" className="org-link">Information School - University of Washington</RouterLink>
        </p>
        <p className="org-title">
          <RouterLink to="/https://www.figma.com/exit?url=https%3A%2F%2Flatinocenterforhealth.org%2F" className="org-link">UW Latino Center for Health</RouterLink>
        </p>
        <p className="org-title">
          <RouterLink to="https://www.centroculturalmexicano.org/" className="org-link">Centro Cultural Mexicano</RouterLink>
        </p>
      </div>
    </div>

  );
};
  
export default Home;
