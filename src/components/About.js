import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="aboutpage">
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
