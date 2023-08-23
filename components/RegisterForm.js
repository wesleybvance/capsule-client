import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FloatingLabel } from 'react-bootstrap';
import { registerUser } from '../utils/auth'; // Update with path to registerUser

function RegisterForm({ user, updateUser }) {
  // eslint-disable-next-line no-unused-vars
  const [formData, setFormData] = useState({
    email: '',
    uid: user.uid,
    profileImage: '',
    firstName: '',
    lastName: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(formData).then(() => updateUser(user.uid));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FloatingLabel
        controlId="floatingTextarea"
        label="First Name"
        className="mt-3"
      >
        <Form.Control type="text" placeholder="Cher" name="firstName" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingTextarea"
        label="Last Name"
        className="mt-3"
      >
        <Form.Control type="text" placeholder="Horowitz" name="lastName" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Email Address"
        className="mt-3"
      >
        <Form.Control type="email" name="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingTextarea"
        label="Profile Picture URL"
        className="mt-3"
      >
        <Form.Control type="text" placeholder="" name="profileImage" />
      </FloatingLabel>
      <Button variant="primary" type="submit" className="mt-3">
        Submit
      </Button>
    </Form>
  );
}

RegisterForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string.isRequired,
  }).isRequired,
  updateUser: PropTypes.func.isRequired,
};

export default RegisterForm;
