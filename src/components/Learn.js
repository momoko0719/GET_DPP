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
  healthyWeight: [
    {
        id: 1,
        frontHTML: (
          <div>
            What can be your first steps toward preventing type 2 diabetes?
          </div>
        ),
        backHTML: <>By making some healthy changes, including eating healthier and getting active, 
        you can prevent or delay type 2 diabetes and improve your physical and mental health overall. 

        CDC's Type 2 Diabetes prevention guide
        https://www.cdc.gov/diabetes/pdfs/prevent/On-your-way-to-preventing-type-2-diabetes.pdf
        
        </>,
      },
      {
        id: 2,
        frontHTML: <>What is BMI and how to know your BMI?</>,
        backHTML: <>Body Mass Index (BMI) is a person's weight in kilograms divided by the square 
        of height in meters; it is usually used for assessing weights.

        Example (kilograms and meters): Weight = 68 kg, Height = 165 cm (1.65 m)
        Calculation: 68 ÷ (1.65)2 = 24.98
        Example (pounds and inches): Weight = 150 lbs, Height = 5'5″ (65″)
        Calculation: [150 ÷ (65)2] x 703 = 24.96
        </>,
      },
      {
        id: 3,
        frontHTML: <>Why is losing weight important for individuals with diabetes and prediabetes?</>,
        backHTML: <>Losing weight can improve blood sugar control, 
        reduce the risk of developing further health complications. 
        Extra weight means fat can build up around your organs, 
        possibly causing insulin resistance; just a 5% loss of body 
        weight can improve your insulin resistance.
        </>,
      },
      {
        id: 4,
        frontHTML: <>What are the general approaches for losing weight?</>,
        backHTML: <>Achieving and maintaining a healthy weight includes healthy 
        eating, physical activity, optimal sleep, and stress reduction. 

        </>,
      },
  ],
  dietaryPlanning: [
    {
        id: 1,
        frontHTML: (
          <div>
            How to plan what to eat or drink?
          </div>
        ),
        backHTML: <>Healthy meal plans for people who have diabetes may 
        include dairy or plant-based dairy products, fruits, non-starchy 
        vegetables, protein foods, and whole grains. Also, try to choose 
        drinks with little or no added sugar.
        </>,
      },
      {
        id: 2,
        frontHTML: <>How to plan how much to eat or drink?</>,
        backHTML: <>For people who have diabetes, carb counting and the 
        plate method are two common ways to plan how much to eat or drink.
        </>,
      },
      {
        id: 3,
        frontHTML: <>What is the carb counting method?</>,
        backHTML: <>Carb counting means planning and keeping track of the amount 
        of carbs you eat and drink; for people who are taking insulin, counting 
        carbs can help you know how much insulin to take.

        https://www.cdc.gov/diabetes/managing/eat-well/diabetes-and-carbohydrates.html
        
        </>,
      },
      {
        id: 4,
        frontHTML: <>What is the plate method?</>,
        backHTML: <>The plate method helps you control portion sizes without counting 
        and measuring. This method divides a 9-inch plate into the following three 
        sections to help you choose the types and amounts of foods to eat for each meal.

        https://www.diabetesfoodhub.org/articles/what-is-the-diabetes-plate-method.html
         

        </>,
      },
      {
        id: 5,
        frontHTML: <>What is your daily calories level and why does it matter?</>,
        backHTML: <>Counting calories helps to see how many calories you need. 
        Here is the tool that can help you calculate the number of calories needed 
        per day to maintain your current weight based on your age, sex, height, weight, 
        and physical activity level.

        Daily calories level charts and calculation tool
        https://www.myplate.gov/myplate-plan

        </>,
      },
      {
        id: 6,
        frontHTML: <>How to read the nutrition facts label?</>,
        backHTML: <>The Nutrition Facts label on packaged foods is based on updated 
        science and dietary recommendations for Americans. Using the label can help 
        you choose foods for a healthy diet.

        CDC's instruction of reading nutrition facts label
        https://www.cdc.gov/nutrition/strategies-guidelines/nutrition-facts-label.html
        

        </>,
      },
      {
        id: 7,
        frontHTML: <>If and what dietary supplements can be helpful in diabetes prevention?</>,
        backHTML: <>For a few dietary supplements, there is weak evidence of a possible 
        benefit. For most supplements, there isn’t evidence to support a beneficial effect 
        on diabetes or its complications.

        List of common dietary supplements for diabetes and their effectiveness and safety
        https://www.nccih.nih.gov/health/diabetes-and-dietary-supplements-what-you-need-to-know
  
        </>,
      },
  ],
  physicalActivity: [
    {
        id: 1,
        frontHTML: (
          <div>
            What action should you take toward physical activity?
          </div>
        ),
        backHTML: <>The Physical Activity Guidelines for Americans provides science-based 
        guidance to help people ages 3 years and older improve their health through 
        participation in regular physical activity.

        Physical Activity Guidelines
        https://www.cdc.gov/physicalactivity/basics/age-chart.html
        </>,
      },
      {
        id: 2,
        frontHTML: <>How To Benefit From Physical Activity?</>,
        backHTML: <>The goal is to get at least 150 minutes per week of moderate-intensity 
        physical activity. One way to do this is to try to fit in at least 20 to 25 minutes 
        of activity every day. Also, on 2 or more days a week, include activities that work 
        all major muscle groups (legs, hips, back, abdomen, chest, shoulders, and arms).
        </>,
      },
      {
        id: 3,
        frontHTML: <>What is moderate-intensity physical activity?</>,
        backHTML: <>Moderate-intensity aerobic physical activity means you're working hard enough 
        to raise your heart rate and break a sweat. Examples of moderate-intensity physical 
        activities include: Walking briskly, Doing housework, Mowing the lawn.
        </>,
      },
      {
        id: 4,
        frontHTML: <>How to overcome obstacles to physical activity?</>,
        backHTML: <>Understanding common barriers to physical activity and creating strategies 
        to overcome them may help you make physical activity part of your daily life.

        Suggestions for Overcoming Physical Activity Barriers
        https://www.cdc.gov/physicalactivity/basics/adding-pa/barriers.html
        </>,
      },
  ],
};

const CollectionSidebar = ({ onSelectCollection }) => {
  return (
    <div className="collection-sidebar">
      <button className="flash-nav" onClick={() => onSelectCollection("basicInfo")}>
        Basic knowledge
      </button>
      <button className="flash-nav" onClick={() => onSelectCollection("healthyWeight")}>Healthy Weight</button>
      <button className="flash-nav" onClick={() => onSelectCollection("dietaryPlanning")}>Dietary Planning</button>
      <button className="flash-nav" onClick={() => onSelectCollection("physicalActivity")}>Physical Activity</button>
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
