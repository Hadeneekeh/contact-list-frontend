import useStyles from './style';
import Button from '../Button';
import PropTypes from 'prop-types';

const Modal = ({ title, children, onClose, onSubmit, submitTxt }) => {
  const classes = useStyles();
  const ariaRole = 'modal';

  return (
    <div role={ariaRole}>
      <div className={classes.backdrop} />
      <div className={classes.modal}>
        <h5 className={classes.title}>{title}</h5>

        <div className={classes.content}>{children}</div>

        <div className={classes.actions}>
          <Button label="Cancel" handleClick={onClose} color="secondary" width="40%" />
          <Button label={submitTxt} handleClick={onSubmit} color="primary" width="40%" />
        </div>
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  submitTxt: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};
