/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { Button, Image, Toast } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';

export default function WelcomeUser() {
  const { user } = useAuth();
  const [show, setShow] = useState(true);
  const toggleShow = () => {
    setShow(!show);
  };
  const logTime = user.fbUser.metadata.lastSignInTime;
  const newTime = logTime.substr(0, 16);

  return (
    <div className="cflex cleft">
      <Toast className="toast m-4" show={show} onClose={toggleShow}>
        <Toast.Header>
          <Image width="30" height="30" className="borderline" src={user.profile_image} />
          <strong className="me-auto m-2">capsule</strong>
          <small>last login: {newTime}</small>
        </Toast.Header>
        <Toast.Body>welcome back, {user.first_name}! ☺︎ </Toast.Body>
      </Toast>
      <Button onClick={toggleShow} className="mb-5 toast-btn" variant="light">☆</Button>
    </div>
  );
}
