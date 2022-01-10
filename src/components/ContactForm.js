/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { Modal, TextInput } from 'reusables';
import { contactService } from 'services/contactService';
import validate from 'utils/customValidation';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';
import ErrorNotification from './ErrorNotification';

const useStyles = createUseStyles({
  error: {
    backgroundColor: 'red',
    color: 'white',
    padding: 2,
    marginBottom: 5
  }
});

const ContactForm = ({ open, handleClose, type, contact }) => {
  const classes = useStyles();

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    firstName: '',
    lastName: ''
  });

  const resetForm = () => {
    handleClose();
    setFormData({
      email: '',
      phone: '',
      firstName: '',
      lastName: ''
    });
  };

  const { isError: contactError } = useQuery(['single', contact], contactService.getContact, {
    enabled: !!contact,
    onSuccess: ({ data }) => {
      const { firstName, lastName, phone, email } = data;
      setFormData({ firstName, lastName, phone, email });
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setErrors(validate(formData));
    setSubmitting(true);
  };

  const { addContact, editContact } = contactService;

  const requestUrl = (data) =>
    type === 'create' ? addContact(data) : editContact({ data, id: contact });

  const { mutate, isError, isLoading, error } = useMutation((data) => requestUrl(data), {
    onSuccess: () => resetForm(),
    onError: (err) => console.log(err)
  });

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      mutate(formData);
    }
  }, [errors, submitting, mutate]);

  return (
    <>
      {open && (
        <Modal
          title={type === 'create' ? 'New Contact' : 'Edit Contact'}
          onClose={resetForm}
          onSubmit={handleSubmit}
          submitTxt={type === 'create' ? 'Create' : 'Update'}
          loading={isLoading}
        >
          <ErrorNotification isError={contactError} />
          {isError && (
            <div className={classes.error}>
              <p>{error.message}</p>
            </div>
          )}
          <form noValidate>
            <TextInput
              label="First name"
              name="firstName"
              value={formData.firstName}
              handleChange={handleChange}
              errorText={errors.firstName}
            />
            <TextInput
              label="Last name"
              name="lastName"
              value={formData.lastName}
              handleChange={handleChange}
              errorText={errors.lastName}
            />
            <TextInput
              label="Email"
              name="email"
              value={formData.email}
              handleChange={handleChange}
              errorText={errors.email}
            />
            <TextInput
              label="Phone"
              name="phone"
              value={formData.phone}
              handleChange={handleChange}
              errorText={errors.phone}
            />
          </form>
        </Modal>
      )}
    </>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  type: PropTypes.string,
  contact: PropTypes.string
};
