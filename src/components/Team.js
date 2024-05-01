import React from "react";

const Team = () => {
  return (
    <div className="aboutpage">
      <div className="abt-section1">
        <div className="abt-content">
          <h1 className="abt-title">Meet the people behind Dr. II</h1>
          <p className="abt-intro">
            We are a diverse group of five undergraduate students from the
            University of Washington Information School, specializing in various
            fields and hailing from unique backgrounds. Under the guidance of
            Frank Martinez and Dr. Leo Morales, and in collaboration with the UW
            Latino Center for Health and Centro Cultural Mexicano, we are
            dedicated to addressing the global challenge of Type 2 diabetes. Our
            focus is on researching and developing effective education and
            prevention strategies, particularly for communities with limited
            access to healthcare. Join us in our commitment to make a
            significant impact on public health!
          </p>
        </div>
        <div className="abt-icon">
          <img className="teamicon" src="imgs/teamicon.png" alt="Team Icon" />
        </div>
      </div>
      <div className="abt-section2">
        <div className="aboutcard">
          <img
            src="/imgs/frank.png"
            alt="Frank Martinez"
            className="card-img"
          />
          <div className="card-name">Frank Martinez (Sponsor)
          </div>
        </div>
        <div className="aboutcard">
          <img src="/imgs/axel.jpg" alt="Axel Zhao" className="card-img" />
          <div className="card-name">Axel Zhao</div>
        </div>
        <div className="aboutcard">
          <img src="/imgs/ella.jpg" alt="Ella Tao" className="card-img" />
          <div className="card-name">Ella Tao</div>
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
      <div className="section2" id="section2">
        <div class="section2-top">
          <div class="section2-title">
            Discovering Our Drive:
            <br />
            Understanding Type 2 Diabetes in the Latino Community
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
                Why Is Type 2 Diabetes Our Focus?
              </p>
              <img class="cardicon" src="imgs/faqIcon.png" alt="faq icon img" />
            </div>
            <div class="card-body">
              <p class="card-text">
              Did you know that 1 in 10 Americans live with type 2 diabetes? It’s not just a statistic;
              it’s about real people facing real challenges. That’s where Dr. Dos comes in. We focus on
              type 2 diabetes because it’s largely preventable with the right lifestyle changes.
              We believe everyone should have the accessible tools to manage their health, and we’re here to make
              that easier with practical tips and personalized advice.
              </p>
            </div>
          </div>

          <div class="card mb-5">
            <div class="card-header">
              <p>
                Why Do We Prioritize the Latino Community?
              </p>
              <img
                class="cardicon"
                src="imgs/chartIcon.png"
                alt="chart icon img"
              />
            </div>
            <div class="card-body">
              <p class="card-text">
              Because minority community like Latino have higher risks of type 2 diabetes and often, fewer resources to fight it.
              Our inspiration came from our sponsor, Frank Martinez, who saw firsthand how health crises like COVID-19 and diabetes
              hit harder in the Easter Washington Latino community. Dr. Dos is our way of bridging that gap with a platform that’s not only free but also accessible
              wherever you are, in both English and Spanish.
              </p>
            </div>
          </div>

          <div class="card mb-5">
            <div class="card-header">
              <p>
                Why Are Diabetes Rates Higher in the Latino Community?
              </p>
              <img
                class="cardicon"
                src="imgs/fireIcon.png"
                alt="fire icon img"
              />
            </div>
            <div class="card-body">
              <p class="card-text">
                Diabetes rates are higher in the Latino community due to factos like language barriers, limited healthcare access,
                and fewer healthy living resources. At Dr. Dos, we’re not just about recognizing these barriers; we’re about breaking them down.
                Our app is designed to be a friendly guide in your pocket, helping you navigate diabetes prevention in ways that fit your life and culture.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="abt-section3">
        <h2 className="section3-title">Affinity Organizations</h2>
        <p className="org-title">
          <a href="https://ischool.uw.edu/" className="org-link">
            Information School - University of Washington
          </a>
        </p>
        <p className="org-title">
          <a href="https://latinocenterforhealth.org/" className="org-link">
            UW Latino Center for Health
          </a>
        </p>
        <p className="org-title">
          <a
            href="https://www.centroculturalmexicano.org/"
            className="org-link"
          >
            Centro Cultural Mexicano
          </a>
        </p>
      </div>
    </div>
  );
};

export default Team;
