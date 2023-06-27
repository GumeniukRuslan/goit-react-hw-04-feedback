import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "store/feedBackSlise";

export const App = () => {

  const { good, bad, neutral } = useSelector(state => state.feedBack)
  const dispatch = useDispatch()

  const onLeaveFeedback = ({ target }) => {
    dispatch(increment(target.name))
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
