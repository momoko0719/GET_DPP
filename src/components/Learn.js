import React, { useState } from "react";
import { FlashcardArray } from "react-quizlet-flashcard";

const collectionsData = {
  basicInfo: [
    {
      id: 1,
      frontHTML: <div>What is diabetes?</div>,
      backHTML: (
        <>
          Diabetes is a chronic disease that occurs either when the pancreas
          does not produce enough insulin or when the body cannot effectively
          use the insulin it produces.
        </>
      ),
    },
    {
      id: 2,
      frontHTML: <>What is insulin?</>,
      backHTML: <>Insulin is a hormone that regulates blood glucose.</>,
    },
    {
      id: 3,
      frontHTML: <>What is blood glucose?</>,
      backHTML: (
        <>
          Blood glucose, or blood sugar, is the main sugar found in your blood.
        </>
      ),
    },
    {
      id: 4,
      frontHTML: <>What is the blood glucose target?</>,
      backHTML: (
        <>
          Your blood glucose target is the range you try to reach as much as
          possible. The typical targets are: Before a meal: 80 to 130 mg/dL Two
          hours after the start of a meal: Less than 180 mg/dL.
        </>
      ),
    },
    {
      id: 5,
      frontHTML: <>Why do you need to monitor your blood glucose?</>,
      backHTML: (
        <>
          Monitoring blood glucose works for screening type 2 diabetes and
          assists managing type 1 or type 2 diabetes. You’ll be able to see what
          makes your numbers change and if you are meeting your glucose targets,
          helping to reduce the unpleasant symptoms.
        </>
      ),
    },
    {
      id: 6,
      frontHTML: <>How to monitor and measure your glucose level?</>,
      backHTML: (
        <>
          Use blood sugar meter for having regular self-test CDC instruction of
          using blood sugar meter
          https://www.cdc.gov/diabetes/managing/managing-blood-sugar/bloodglucosemonitoring.html
          Do A1C tests for measuring your average blood sugar levels over the
          past 3 months
          https://www.cdc.gov/diabetes/managing/managing-blood-sugar/a1c.html
        </>
      ),
    },
    {
      id: 7,
      frontHTML: <>What is prediabetes?</>,
      backHTML: (
        <>
          Prediabetes is a serious health condition where blood sugar levels are
          higher than normal, but not high enough yet to be diagnosed as type 2
          diabetes. Prediabetes can be reversed; a CDC-recognized diabetes
          prevention lifestyle change program would be helpful.
        </>
      ),
    },
  ],
  losingWeight: [
    {
        id: 1,
        frontHTML: (
          <div>
            What is BMI and how to know your BMI?
          </div>
        ),
        backHTML: <>Body Mass Index (BMI) is a person's weight in kilograms divided by the square of height in meters; it is usually used for assessing weights.
        Example (kilograms and meters): Weight = 68 kg, Height = 165 cm (1.65 m)
        Calculation: 68 ÷ (1.65)2 = 24.98
        Example (pounds and inches): Weight = 150 lbs, Height = 5'5″ (65″)
        Calculation: [150 ÷ (65)2] x 703 = 24.96
        </>,
      },
      {
        id: 2,
        frontHTML: <>Why is losing weight important for individuals with diabetes and prediabetes?</>,
        backHTML: <>Losing weight can improve blood sugar control, 
        reduce the risk of developing further health complications. 
        Extra weight means fat can build up around your organs, 
        possibly causing insulin resistance; just a 5% loss of body 
        weight can improve your insulin resistance.</>,
      },
      {
        id: 3,
        frontHTML: <>What are the general approaches for losing weight?</>,
        backHTML: <>Achieving and maintaining a healthy weight includes healthy eating, 
        physical activity, optimal sleep, and stress reduction. 
        </>,
      },
      {
        id: 4,
        frontHTML: <>How to plan what to eat or drink?</>,
        backHTML: <>Healthy meal plans for people who have diabetes 
        may include dairy or plant-based dairy products, fruits, 
        non-starchy vegetables, protein foods, and whole grains. 
        Also, try to choose drinks with little or no added sugar.
        </>,
      },
  ],
  // Add other collections here
};

const CollectionSidebar = ({ onSelectCollection }) => {
  return (
    <div className="collection-sidebar">
      <button className="flash-nav" onClick={() => onSelectCollection("basicInfo")}>
        Basic knowledge
      </button>
      <button className="flash-nav" onClick={() => onSelectCollection("losingWeight")}>Diabetes Prevention</button>
      {/* Add more buttons for other collections */}
    </div>
  );
};

const Learn = () => {
  const [activeCollection, setActiveCollection] = useState("basicInfo");

  const handleSelectCollection = (collection) => {
    setActiveCollection(collection);
  };

  const cards = collectionsData[activeCollection];

  return (
    <div className="learn-page">
      <CollectionSidebar onSelectCollection={handleSelectCollection} />
      <div className="cardbox">
        <FlashcardArray
          cards={cards}
          frontContentStyle={{
            backgroundColor: "lightgoldenrodyellow",
            fontSize: 30,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 50,
            paddingRight: 50,
            color: "black",
          }}
          backContentStyle={{
            backgroundColor: "lightgoldenrodyellow",
            fontSize: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 50,
            paddingRight: 50,
            color: "black",
          }}
        />
      </div>
    </div>
  );
};

export default Learn;
