import PropTypes from 'prop-types';

import styles from './Statistics.module.css';

export const Statistics = ({
  countTotalFeedback,
  options,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <ul className={styles.statCont}>
      {options.map(({ id, name, amount }) => (
        <li key={id} className={styles.statInfo}>
          <span className={styles.statInfoName}>{name}</span>
          <span className={styles.statInfoResult}>{amount}</span>
        </li>
      ))}

      <div className={styles.statInfoMore}>
        <li className={styles.statInfo}>
          <span className={styles.statInfoName}>Total</span>
          <span className={styles.statInfoResult}>{countTotalFeedback()}</span>
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
};

Statistics.propTypes = {
  countTotalFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
};
