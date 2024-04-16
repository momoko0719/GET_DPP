import { FlashcardArray } from "react-quizlet-flashcard";

const Learn = () => {
  const cards = [
    {
      id: 1,
      frontHTML: (
        <div>
          What is diabetes?
        </div>
      ),
      backHTML: <>Diabetes is a chronic disease that occurs either 
                when the pancreas does not produce enough insulin 
                or when the body cannot effectively use the insulin 
                it produces.</>,
    },
    {
      id: 2,
      frontHTML: <>What is insulin?</>,
      backHTML: <>Insulin is a hormone that regulates blood glucose.</>,
    },
    {
      id: 3,
      frontHTML: <>What is blood glucose?</>,
      backHTML: <>Blood glucose, or blood sugar, is the main sugar found in your blood.</>,
    },
    {
      id: 4,
      frontHTML: <>What is the blood glucose target?</>,
      backHTML: <>Your blood glucose target is the range you try to reach as much as possible.
      The typical targets are:
      Before a meal: 80 to 130 mg/dL
      Two hours after the start of a meal: Less than 180 mg/dL.
      </>,
    },
    {
      id: 5,
      frontHTML: <>Why do you need to monitor your blood glucose?</>,
      backHTML: <>Monitoring blood glucose works for screening type 2 diabetes 
      and assists managing type 1 or type 2 diabetes. You’ll be able to see what 
      makes your numbers change and if you are meeting your glucose targets, 
      helping to reduce the unpleasant symptoms.</>,
    },
    {
      id: 6,
      frontHTML: <>How to monitor and measure your glucose level?
      </>,
      backHTML: <>Use blood sugar meter for having regular self-test
      CDC instruction of using blood sugar meter
      https://www.cdc.gov/diabetes/managing/managing-blood-sugar/bloodglucosemonitoring.html
      
      Do A1C tests for measuring your average blood sugar levels over the past 3 months
      https://www.cdc.gov/diabetes/managing/managing-blood-sugar/a1c.html
      </>,
    },
    {
        id: 6,
        frontHTML: <>What is prediabetes?
        </>,
        backHTML: <>Prediabetes is a serious health condition where blood sugar levels 
        are higher than normal, but not high enough yet to be diagnosed as type 2 diabetes. 
        Prediabetes can be reversed; a CDC-recognized diabetes prevention lifestyle change 
        program would be helpful.
        </>,
      },
  ];

  return (
    <div className="learnpage">
      <div className="cardbox">
        <FlashcardArray
          cards={cards}
          frontContentStyle={{
            backgroundColor: "lightgoldenrodyellow",
            fontSize: 30,
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            paddingLeft:50,
            paddingRight:50,
            color: "black",
          }}
          backContentStyle={{
            backgroundColor: "lightgoldenrodyellow",
            fontSize: 20,
            display:"flex",
            justifyContent:"center",
            alignItems: "center",
            paddingLeft:50,
            paddingRight:50,
            color: "black",
          }}
        />
      </div>
    </div>
  );
};

export default Learn;
