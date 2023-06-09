import { useState } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";

export const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const onLeaveFeedback = ({ target }) => {
    switch (target.name) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  };
  const countTotalFeedback = () => good + neutral + bad;  
  const countPositiveFeedbackPercentage = () => `${(good / (good + neutral + bad) * 100).toFixed(0)}%`;
  
    return (
    <div className="container">
      <Section primeHeader='true' title='Please leave feedback'>
        <FeedbackOptions options={["good", "neutral", "bad"]} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title='Statistics'>
        <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()}/>
      </Section>
    </div>
  );
  
};
