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
    console.warn(user);
  };
  const logTime = user.fbUser.metadata.lastSignInTime;
  const newTime = logTime.substr(0, 16);

  return (
    <div className="cflex cleft">
      <Toast className="toast m-4" show={show} onClose={toggleShow}>
        <Toast.Header>
          <Image width="20" height="20" src={user.profile_image} />
          <strong className="me-auto m-2">capsule</strong>
          <small>last login: {newTime}</small>
        </Toast.Header>
        <Toast.Body>Welcome, {user.fbUser.displayName}! :) </Toast.Body>
      </Toast>
      <Button onClick={toggleShow} className="mb-5 toast-btn" variant="light">☆</Button>
    </div>
  );
}
