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
          Diabetes is a long-lasting health issue that happens when 
          your body doesn't make enough insulin or can't use the insulin 
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
          hit to stay healthy. The typical targets are:
          <br/>
          <br/>
          Before meals: 80 to 130 mg/dL
          <br/>
          Two hours after eating: Less than 180 mg/dL
        </>
      ),
    },
    {
      id: 4,
      frontHTML: <>Why and how do you check your glucose level?</>,
      backHTML: (
        <>
          Checking your glucose level helps you manage diabetes and 
          screen for type 2 diabetes. It shows how your levels change 
          and if you're meeting your glucose targets. You can do this 
          with a blood sugar meter, which is easy and common for regular 
          testing.
        </>
      ),
    },
    {
      id: 5,
      frontHTML: <>What is prediabetes?</>,
      backHTML: (
        <>
          Prediabetes is a serious health condition where blood sugar 
          levels are higher than normal, but not yet high enough for 
          type 2 diabetes. Prediabetes can be reversed by changing into 
          a healthier lifestyle.
        </>
      ),
    },
    {
      id: 6,
      frontHTML: <>What can be your first steps to prevent Type 2 Diabetes through weight loss?</>,
      backHTML: (
        <>
          Making healthy changes like eating better, sleeping enough, 
          and staying active can help you lose weight and prevent or 
          delay type 2 diabetes while improving your overall physical 
          and mental health.
        </>
      ),
    },
    {
      id: 7,
      frontHTML: <>Why is losing weight important for individuals with diabetes and prediabetes?</>,
      backHTML: (
        <>
          Losing weight can improve blood sugar control, reduce the risk 
          of developing further health complications. Extra weight means 
          fat can build up around your organs, possibly causing insulin 
          resistance. Even just a little weight loss can make a big 
          difference.

        </>
      ),
    },
    {
      id: 8,
      frontHTML: <>How to plan what to eat or drink?</>,
      backHTML: (
        <>
          Healthy meal plans for people who have diabetes may include 
          dairy or plant-based dairy products, fruits, non-starchy 
          vegetables, protein foods, and whole grains. Also, try to 
          choose drinks with little or no added sugar.
        </>
      ),
    },
    {
      id: 9,
      frontHTML: <>What is your daily calories level and why does it matter?</>,
      backHTML: (
        <>
          Your daily calorie level is the amount of energy your body 
          needs each day. It matters because consuming more calories 
          than your body needs can lead to weight gain, while consuming 
          fewer can result in weight loss. Finding the right balance 
          supports a healthy weight and overall health.
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
          brisk walking, cycling, or swimming, where you're breathing 
          harder but can still hold a conversation. To overcome obstacles 
          to being active, try scheduling workouts into your day, finding 
          activities you enjoy, and enlisting support from friends or 
          family.
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
