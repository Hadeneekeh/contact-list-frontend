import useStyles from './style';
import PropTypes from 'prop-types';

const TextInput = ({ label, name, value, handleChange, errorText }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <label htmlFor={name} className={classes.label}>
        {label}
      </label>
      <input name={name} value={value} onChange={handleChange} className={classes.input} />
      {errorText && <span className={classes.error}>{errorText}</span>}
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  errorText: PropTypes.string
};

export default TextInput;

TextInput.defaultProps = {
  errorText: ''
};
