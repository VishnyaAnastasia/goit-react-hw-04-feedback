import PropTypes from 'prop-types';

import styles from './Feedback.module.css';

export const Feedback = ({ options, clickHandler }) => {
  return (
    <div className={styles.btnContainer}>
      {Object.keys(options).map(option => {
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
};

Feedback.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
