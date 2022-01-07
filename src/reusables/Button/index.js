import PropTypes from 'prop-types';
import useStyles from './style';

const Button = ({ label, color, width, handleClick }) => {
  const classes = useStyles({ color, width });
  return (
    <button className={classes.btn} onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;

Button.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  color: PropTypes.string,
  width: PropTypes.string
};

Button.defaultProps = {
  color: 'primary',
  width: '100px',
  handleClick: () => {}
};
