import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FloatingLabel } from 'react-bootstrap';
import { registerUser } from '../../utils/auth'; // Update with path to registerUser

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
    <div className="cflex">
      <h2 className="racing-sans font30 m-3 center-me">♡ sign up ♡</h2>
      <Form onSubmit={handleSubmit}>
        <FloatingLabel
          controlId="floatingTextarea"
          label="First Name"
          className="mt-3"
        >
          <Form.Control required className="archivo box-border borderline" type="text" placeholder="Cher" name="firstName" onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))} />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingTextarea"
          label="Last Name"
          className="mt-3"
        >
          <Form.Control className="archivo box-border borderline" type="text" placeholder="Horowitz" name="lastName" onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))} />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Email Address"
          className="mt-3"
        >
          <Form.Control className="archivo box-border borderline" type="email" name="email" onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))} placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingTextarea"
          label="Profile Picture URL"
          className="mt-3"
        >
          <Form.Control required className="archivo box-border borderline" type="text" onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))} placeholder="" name="profileImage" />
        </FloatingLabel>
        <Button variant="light" type="submit" className="inter-tight btn-outline-dark m-4 d-inline-block box-border center-me">
          Submit
        </Button>
      </Form>
    </div>
  );
}

RegisterForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string.isRequired,
  }).isRequired,
  updateUser: PropTypes.func.isRequired,
};

export default RegisterForm;
