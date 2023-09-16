/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { Button, Toast } from 'react-bootstrap';
import Image from 'next/image';
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
          <Image width="20" height="20" src="https://i.pinimg.com/564x/9f/df/0a/9fdf0a8ec678e137a49a47c980bf48d5.jpg" />
          <strong className="me-auto m-2">capsule</strong>
          <small>last login: {newTime}</small>
        </Toast.Header>
        <Toast.Body>Welcome, {user.fbUser.displayName}! :) </Toast.Body>
      </Toast>
      <Button onClick={toggleShow} className="mb-5 toast-btn" variant="light">☆</Button>
    </div>
  );
}
