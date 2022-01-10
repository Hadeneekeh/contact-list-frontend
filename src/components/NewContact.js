import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { Modal, TextInput } from 'reusables';
import { contactService } from 'services/contactService';
import validate from 'utils/customValidation';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  error: {
    backgroundColor: 'red',
    color: 'white',
    padding: 2,
    marginBottom: 5
  }
});

const NewContact = ({ open, handleClose }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({ email: '', phone: '', firstName: '', lastName: '' });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setErrors(validate(formData));
    setSubmitting(true);
  };

  const { mutate, isError, isLoading, error } = useMutation(
    (data) => contactService.addContact(data),
    {
      onSuccess: () => handleClose(),
      onError: (err) => console.log(err)
    }
  );

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      mutate(formData);
    }
  }, [errors, formData, submitting, mutate]);

  return (
    <>
      {open && (
        <Modal
          title="New Contact"
          onClose={handleClose}
          onSubmit={() => handleSubmit('click')}
          submitTxt="Create"
          loading={isLoading}
        >
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

export default NewContact;
