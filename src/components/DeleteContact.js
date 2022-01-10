import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { useMutation } from 'react-query';
import { Modal } from 'reusables';
import { contactService } from 'services/contactService';

const useStyles = createUseStyles({
  error: {
    backgroundColor: 'red',
    color: 'white',
    padding: 2,
    marginBottom: 5
  }
});

const DeleteContact = ({ open, handleClose, contact }) => {
  const classes = useStyles();
  const { mutate, isError, isLoading, error } = useMutation(
    (id) => contactService.deleteContact(id),
    {
      onSuccess: () => handleClose(),
      onError: (err) => console.log(err)
    }
  );

  return (
    <>
      {open && (
        <Modal
          title="Delete Contact"
          onClose={handleClose}
          onSubmit={() => mutate(contact)}
          submitTxt="Delete"
          loading={isLoading}
        >
          {isError && (
            <div className={classes.error}>
              <p>{error.message}</p>
            </div>
          )}
          <p>Are you sure you want to delete?</p>
        </Modal>
      )}
    </>
  );
};

DeleteContact.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  contact: PropTypes.string
};

export default DeleteContact;
