import React, { Component } from 'react';
import styles from './Statistics.module.css';

export class Statistics extends Component {
  render() {
    const {
      statisticsOptions,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this.props;
    const statisticsKeys = Object.keys(statisticsOptions());
    return (
      <ul className={styles.statCont}>
        {statisticsKeys.map(key => (
          <li key={key} className={styles.statInfo}>
            <span className={styles.statInfoName}>{key}</span>
            <span className={styles.statInfoResult}>
              {statisticsOptions()[key]}
            </span>
          </li>
        ))}

        <div className={styles.statInfoMore}>
          <li className={styles.statInfo}>
            <span className={styles.statInfoName}>Total</span>
            <span className={styles.statInfoResult}>
              {countTotalFeedback()}
            </span>
          </li>
          <li className={styles.statInfo}>
            <span className={styles.statInfoName}>Positive feedback</span>
            <span className={styles.statInfoResult}>
              {countPositiveFeedbackPercentage()}%
            </span>
          </li>
        </div>
      </ul>
    );
  }
}
