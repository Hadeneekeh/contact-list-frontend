import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';

const useStyles = createUseStyles({
  contactCard: {
    'display': 'flex',
    'flexDirection': 'column',
    'backgroundColor': 'white',
    'minWidth': 750,
    'padding': 8,
    'borderRadius': 4,

    '& div': {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap'
    }
  }
});

const ContactCard = ({ contact, isReady }) => {
  const classes = useStyles();
  const { firstName, lastName, email, phone } = contact;

  return (
    <>
      {isReady && (
        <div className={classes.contactCard}>
          <div>
            <p>{`First name: ${firstName}`}</p>
            <p>{`Last name: ${lastName}`}</p>
          </div>
          <div>
            <p>{`Email address: ${email}`}</p>
            <p>{`Phone number: ${phone}`}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactCard;

ContactCard.propTypes = {
  contact: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string
  }),
  isReady: PropTypes.bool
};
