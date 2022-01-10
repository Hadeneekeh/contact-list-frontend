const validate = ({ email, firstName, lastName, phone }) => {
  let errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  if (!email) {
    errors.email = 'Email is required';
  } else if (!regex.test(email)) {
    errors.email = 'Invalid email';
  }

  if (!firstName) {
    errors.firstName = 'First name is required';
  } else if (!/^[A-z]+$/.test(firstName)) {
    errors.firstName = 'Invalid format';
  }

  if (!lastName) {
    errors.lastName = 'Last name is required';
  } else if (!/^[A-z]+$/.test(lastName)) {
    errors.lastName = 'Invalid format';
  }

  if (!phone) {
    errors.phone = 'Phone number is required';
  } else if (!/^[[0-9]+$/.test(phone) && phone.length < 8) {
    errors.phone = 'Invalid format';
  }

  return errors;
};

export default validate;
