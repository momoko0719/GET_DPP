import React, { useState } from "react";
import { FlashcardArray } from "react-quizlet-flashcard";

const collectionsData = 
[
    {
      id: 1,
      frontHTML: 
      <div className="flashcontent">
        What is diabetes?
        <img class="tap-icon" src="imgs/tap.svg" alt="tap icon"/>

      </div>,
      backHTML: (
        <>
          Diabetes is a long-lasting health issue that happens when your body 
          doesn't make enough insulin or can't use the insulin 
          it produces properly.
        </>
      ),      
    },
    {
      id: 2,
      frontHTML: <>What is insulin?</>,
      backHTML: <>Insulin is a hormone, like a key that unlocks cells, 
      allowing them to absorb sugar (glucose) from the blood, which helps
      regulate blood sugar levels.
      </>,
    },
    {
      id: 3,
      frontHTML: <>What is blood glucose and what is blood glucose target?</>,
      backHTML: (
        <>
          Blood glucose or blood sugar is the main type of sugar in your 
          blood. Your blood sugar target is like a goal range you want to 
          hit to stay healthy.ypical targets are 80 to 130 mg/dL before meals
          and below 180 mg/dL two hours after eating.
        </>
      ),
    },
    {
      id: 4,
      frontHTML: <>Why and how do you check your glucose level?</>,
      backHTML: (
        <>
          Regular glucose checks are important for living with diabetes by
          ensuring blood sugar stays within a healthy range.
          You can use a blood sugar meter before and after meals to track changes and maintain your target range.
        </>
      ),
    },
    {
      id: 5,
      frontHTML: <>What is prediabetes?</>,
      backHTML: (
        <>
          Prediabetes is a condition where blood sugar levels are elevated but not high enough to be classified as type 2 diabetes.
          This condition can often be reversed through lifestyle changes such as improved diet and increased physical activity.
        </>
      ),
    },
    {
      id: 6,
      frontHTML: <>What are the first steps to prevent Type 2 Diabetes through weight loss?</>,
      backHTML: (
        <>
          To prevent or delay Type 2 Diabetes, start with weight loss through healthy eating, sufficient sleep, and regular physical activity.
          These changes not only help manage weight but also enhance overall physical and mental health.
        </>
      ),
    },
    {
      id: 7,
      frontHTML: <>Why is losing weight important for individuals with diabetes and prediabetes?</>,
      backHTML: (
        <>
          Losing weight improves blood sugar control and reduces the risk of complications in diabetes and prediabetes.
          Excess fat, especially around organs, can cause insulin resistance. Even just a little weight loss can make a big 
          difference.

        </>
      ),
    },
    {
      id: 8,
      frontHTML: <>How should you plan what to eat or drink?</>,
      backHTML: (
        <>
          For a healthy diabetes diet, include dairy or plant-based dairy products,
          fruits, non-starchy vegetables, proteins, and whole grains. Also, try to 
          choose drinks with little or no added sugar.
        </>
      ),
    },
    {
      id: 9,
      frontHTML: <>What is your daily calories level and why does it matter?</>,
      backHTML: (
        <>
          Your daily calorie level is the energy your body requires each day.
          Managing this intake is important as extra calories lead to weight gain,
          while fewer calories can promote weight loss.
          Balancing your caloric intake supports maintaining a healthy weight and overall well-being.
        </>
      ),
    },
    {
      id: 10,
      frontHTML: <>How To Benefit From Physical Activity</>,
      backHTML: (
        <>
          To benefit from physical activity, aim for at least 150 minutes 
          of moderate-intensity exercise per week, ideally spread out with 
          20 to 25 minutes each day; incorporating exercises targeting all 
          major muscle groups on 2 or more days weekly.
        </>
      ),
    },
    {
      id: 11,
      frontHTML: <>What is moderate-intensity physical activity and how can you overcome obstacles to being active?</>,
      backHTML: (
        <>
          Moderate-intensity physical activity includes exercises like 
          fast walking, cycling, or swimming, where you're breathing 
          harder but can still hold a conversation. Overcome barriers to activity by
          choosing activities you enjoy, and inviting your friends and family to work out together.
        </>
      ),
    },
  ]
 



const Learn = () => {


  const cards = collectionsData;

  return (
    <div className="learn-page">
      <div className="cardbox">
        <FlashcardArray
          cards={cards}
          frontContentStyle={{
            backgroundColor: "#FFFBF4",
            fontSize: 30,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 50,
            paddingRight: 50,
            color: "#135200",
            fontWeight: 600,
          }}
          backContentStyle={{
            backgroundColor: "#FFFBF4",
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
