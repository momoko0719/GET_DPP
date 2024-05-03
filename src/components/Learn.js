import React, { useState } from "react";
import { FlashcardArray } from "react-quizlet-flashcard";
import { useTranslation } from 'react-i18next';

const useCollectionsData = () => {
  const { t } = useTranslation();

  return [
    {
      id: 1,
      frontHTML: (
        <div className="flashcontent">
          {t('flashcard1front')}
          <img class="tap-icon" src="imgs/tap.svg" alt="tap icon"/>
        </div>
      ),
      backHTML: (<>{t('flashcard1back')}</>)
    },
    {
      id: 2,
      frontHTML: <>{t('flashcard2front')}</>,
      backHTML: <>{t('flashcard2back')}</>
    },
    {
      id: 3,
      frontHTML: <>{t('flashcard3front')}</>,
      backHTML: <>{t('flashcard3back')}</>
    },
    {
      id: 4,
      frontHTML: <>{t('flashcard4front')}</>,
      backHTML: <>{t('flashcard4back')}</>
    },
    {
      id: 5,
      frontHTML: <>{t('flashcard5front')}</>,
      backHTML: <>{t('flashcard5back')}</>
    },
    {
      id: 6,
      frontHTML: <>{t('flashcard6front')}</>,
      backHTML: <>{t('flashcard6back')}</>
    },
    {
      id: 7,
      frontHTML: <>{t('flashcard7front')}</>,
      backHTML: <>{t('flashcard7back')}</>
    },
    {
      id: 8,
      frontHTML: <>{t('flashcard8front')}</>,
      backHTML: <>{t('flashcard8back')}</>
    },
    {
      id: 9,
      frontHTML: <>{t('flashcard9front')}</>,
      backHTML: <>{t('flashcard9back')}</>
    },
    {
      id: 10,
      frontHTML: <>{t('flashcard10front')}</>,
      backHTML: <>{t('flashcard10back')}</>
    },
    {
      id: 11,
      frontHTML: <>{t('flashcard11front')}</>,
      backHTML: <>{t('flashcard11back')}</>
    }
  ];
};

const Learn = () => {
  const cards = useCollectionsData();

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
