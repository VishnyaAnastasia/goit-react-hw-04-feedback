import PropTypes from 'prop-types';
import styles from './Notification.module.css';

export const Notification = ({ message }) => {
  return <p className={styles.messageInfo}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
