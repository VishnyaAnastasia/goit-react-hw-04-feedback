import PropTypes from 'prop-types';

import styles from './Feedback.module.css';

export const Feedback = ({ options, clickHandler }) => {
  return (
    <div className={styles.btnContainer}>
      {options.map(({ id, name }) => {
        return (
          <button
            key={id}
            className={styles.btnFeedback}
            name={name}
            onClick={clickHandler}
          >
            {name}
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
