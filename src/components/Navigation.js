import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';
import { Button } from 'reusables';

const useStyles = createUseStyles({
  btnWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 20
  }
});

const NavigationButtons = ({ isReady, navigate, onEdit, onDelete }) => {
  const classes = useStyles();

  return (
    <div className={classes.btnWrapper}>
      <Button
        label="Back"
        handleClick={() => navigate('/contact-list-frontend')}
        color="secondary"
        style={{
          marginRight: 10
        }}
      />
      {isReady && (
        <div>
          <Button
            label="Edit"
            handleClick={onEdit}
            style={{
              marginRight: 10
            }}
          />
          <Button
            label="Delete"
            handleClick={onDelete}
            style={{
              backgroundColor: 'red'
            }}
          />
        </div>
      )}
    </div>
  );
};

export default NavigationButtons;

NavigationButtons.propTypes = {
  isError: PropTypes.bool,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  navigate: PropTypes.func
};
