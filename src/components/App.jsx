import { useCallback, useEffect, useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './Feeedback/FeedbackOptions';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positive, setPositive] = useState(0);

  const handlerClickBtn = e => {
    const { id } = e.target;
    switch (id) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };
  const countTotalFeedback = useCallback(() => setTotal(good + neutral + bad), [good, neutral, bad]) 
  const countPositiveFeedbackPercentage = useCallback (() =>
    setPositive((good / total) * 100), [good, total])

  useEffect(() => {
    countTotalFeedback();
    countPositiveFeedbackPercentage();
  }, [total, countTotalFeedback, countPositiveFeedbackPercentage]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <section title="">
        <FeedbackOptions onLeaveFeedback={handlerClickBtn} />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positive={positive}
        />
      </section>
    </div>
  );
};
