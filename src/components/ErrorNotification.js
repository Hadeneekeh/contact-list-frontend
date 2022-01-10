import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';

const useStyles = createUseStyles({
  error: {
    backgroundColor: 'red',
    color: 'white',
    padding: 5,
    marginBottom: 5
  }
});

const ErrorNotification = ({ isError }) => {
  const classes = useStyles();

  return (
    <>
      {isError && (
        <div className={classes.error}>
          <p>Unable to fetch records.</p>
        </div>
      )}
    </>
  );
};

export default ErrorNotification;

ErrorNotification.propTypes = {
  isError: PropTypes.bool
};
