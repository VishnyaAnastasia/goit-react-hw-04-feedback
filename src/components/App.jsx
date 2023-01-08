import { useState } from 'react';

import { Section } from './Section/Section';
import { Feedback } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const initialState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [options, setOptions] = useState(initialState);

  const clickHandler = ({ target: { name } }) => {
    setOptions(prevState => ({ ...prevState, [name]: prevState[name] + 1 }));
  };

  const countTotalFeedback = () => {
    return Object.values(options).reduce((accum, amount) => accum + amount, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() === 0) {
      return 0;
    }
    const result = (options.good / countTotalFeedback()) * 100;
    return result.toFixed(0);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <Feedback clickHandler={clickHandler} options={options} />
      </Section>

      {countTotalFeedback() !== 0 && (
        <Section title="Statistics">
          <Statistics
            countTotalFeedback={countTotalFeedback()}
            options={options}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}
      {countTotalFeedback() === 0 && (
        <Section>
          <Notification message="There is no feedback" />
        </Section>
      )}
    </>
  );
};
