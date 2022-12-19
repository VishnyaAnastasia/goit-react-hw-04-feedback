import { useState } from 'react';

import { Section } from './Section/Section';
import { Feedback } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const initialState = [
    { id: 1, name: 'good', amount: 0 },
    { id: 2, name: 'neutral', amount: 0 },
    { id: 3, name: 'bad', amount: 0 },
  ];

  const [options, setOptions] = useState(initialState);

  const clickHandler = ({ target: { name } }) => {
    const newOptions = options.map(option => {
      if (option.name === name) {
        const newAmount = option.amount + 1;
        const newOption = { ...option, amount: newAmount };
        return newOption;
      }
      return option;
    });
    setOptions(newOptions);
  };

  const countTotalFeedback = () => {
    return options.reduce((accum, { amount }) => accum + amount, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() === 0) {
      return 0;
    }
    const result = (options[0].amount / countTotalFeedback()) * 100;
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
            countTotalFeedback={countTotalFeedback}
            options={options}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
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
