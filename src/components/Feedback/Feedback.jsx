import React, { Component } from 'react';

import styles from './Feedback.module.css';

export class Feedback extends Component {
  render() {
    const { clickHandler, feedbackOptions } = this.props;
    return (
      <div className={styles.btnContainer}>
        {feedbackOptions().map(option => {
          return (
            <button
              key={option}
              className={styles.btnFeedback}
              name={option}
              onClick={clickHandler}
            >
              {option}
            </button>
          );
        })}
      </div>
    );
  }
}
