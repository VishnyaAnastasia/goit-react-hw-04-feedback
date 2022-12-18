import React, { Component } from 'react';

import { Section } from './Section/Section';
import { Feedback } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  clickHandler = event => {
    this.setState(prevState => {
      return {
        [event.target.name]: prevState[event.target.name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((a, b) => a + b, 0);
  };

  feedbackOptions = () => {
    return Object.keys(this.state);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const { countTotalFeedback } = this;
    if (countTotalFeedback() === 0) {
      return 0;
    }
    const result = (good / countTotalFeedback()) * 100;
    return result.toFixed(0);
  };

  statisticsOptions = () => {
    return this.state;
  };

  render() {
    const {
      clickHandler,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
      feedbackOptions,
      statisticsOptions,
    } = this;

    return (
      <>
        <Section title="Please leave feedback">
          <Feedback
            clickHandler={clickHandler}
            feedbackOptions={feedbackOptions}
          />
        </Section>

        {countTotalFeedback() !== 0 && (
          <Section title="Statistics">
            <Statistics
              statisticsOptions={statisticsOptions}
              countTotalFeedback={countTotalFeedback}
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
  }
}
